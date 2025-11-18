// References elements in the HTML
(function () {
  const planMajorName = document.getElementById("planMajorName");
  const planMajorDesc = document.getElementById("planMajorDesc");
  const planTotalCredits = document.getElementById("planTotalCredits");
  const planYears = document.getElementById("planYears");
  const undoBtn = document.getElementById("undoBtn");
  const courseModal = document.getElementById("courseModal");
  const courseModalClose = document.getElementById("courseModalClose");

  //  Keeps track of changes
  const historyStack = [];
  // Keeps track of the courses that are checked off
  let completedCourses = new Set();
  // Records the information for the course being moved
  let draggedCourseLi = null;
  // Limits to 5 courses per semester
  const MAX_PER_SEM = 5;

  // Call before the changes are made
  // Holds the current HTML and the list of completed courses
  function saveSnapshot() {
    historyStack.push({
      html: planYears.innerHTML,
      completed: [...completedCourses],
    });
    // Prevents the stack from getting too big
    if (historyStack.length > 50) historyStack.shift();
  }

  // If there is nothing to undo, no changes are made.
  // Otherwise, the last snapshot is returned. 
  function restoreSnapshot() {
    if (!historyStack.length) return;
    const { html, completed } = historyStack.pop();
    planYears.innerHTML = html;
    completedCourses = new Set(completed || []);
    planYears.querySelectorAll(".dragging").forEach(el => el.classList.remove("dragging"));
    enhanceCurrentPlanDOM();
    recomputeTotalCredits();
  }
  undoBtn.addEventListener("click", restoreSnapshot);
    
  // Retrieves and displays the course information
  function openCourseModal(course) {
    document.getElementById("modalCourseCode").textContent = course.code;
    document.getElementById("modalCourseTitle").textContent = course.title;
    document.getElementById("modalCourseCredits").textContent = `Credits: ${course.credits}`;
    document.getElementById("modalCourseDesc").textContent = course.description || "No detailed description available.";
    courseModal.style.display = "flex";
  }
  courseModalClose.addEventListener("click", () => (courseModal.style.display = "none"));
  window.addEventListener("click", e => {
    if (e.target === courseModal) courseModal.style.display = "none";
  });

  // Adds up all the data credits
  function recomputeTotalCredits() {
    let total = 0;
    planYears.querySelectorAll("li[data-credits]").forEach(li => (total += +li.dataset.credits));
    planTotalCredits.textContent = total;
  }

  // Adds up all the semester credits
  function recomputeSemesterCredits(card) {
    const p = card.querySelector("p");
    let sum = 0;
    card.querySelectorAll("li[data-credits]").forEach(li => (sum += +li.dataset.credits));
    if (p) p.textContent = `Total Credits: ${sum}`;
  }

  // Counts the amount of courses and prevents it from surpassing 5
  const getSemesterCourseCount = card => card.querySelectorAll("li[data-course-code]").length;

  // 
  function findCourseDataByCode(code) {
    for (const majorKey in majorsData) {
      const major = majorsData[majorKey];
      for (const year of major.years || []) {
        for (const semName of ["fall", "winter"]) {
          const sem = year[semName];
          if (!sem) continue;
          const found = sem.find(c => c.code === code);
          if (found) return found;
        }
      }
    }
    return null;
  }

  // Shifts the courses up as they are moved/completed
  function shiftPlanForward(fromCard) {
    const semesters = [...planYears.querySelectorAll(".semester-card")];
    const start = semesters.indexOf(fromCard);
    if (start === -1) return;

    for (let i = start; i < semesters.length - 1; i++) {
      const curr = semesters[i];
      const next = semesters[i + 1];
      if (getSemesterCourseCount(curr) >= MAX_PER_SEM) break;

      const nextFirst = next.querySelector("ul li[data-course-code]");
      if (!nextFirst) break;

      curr.querySelector("ul").appendChild(nextFirst);
      recomputeSemesterCredits(curr);
      recomputeSemesterCredits(next);
    }
    recomputeTotalCredits();
  }

  // Allows users to drag courses
  function makeCourseDraggable(li) {
    li.draggable = true;
    li.addEventListener("dragstart", e => {
      draggedCourseLi = li;
      li.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      saveSnapshot();
    });
    li.addEventListener("dragend", () => {
      li.classList.remove("dragging");
      draggedCourseLi = null;
    });
  }

  // Allows users to drop courses into different semesters
  function enableSemesterDrop(card) {
    card.addEventListener("dragover", e => {
      if (!draggedCourseLi) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });

    card.addEventListener("drop", e => {
      if (!draggedCourseLi) return;
      e.preventDefault();

      if (getSemesterCourseCount(card) >= MAX_PER_SEM) {
        alert("This semester already has the maximum of 5 classes.");
        draggedCourseLi.classList.remove("dragging");
        draggedCourseLi = null;
        return;
      }

      const sourceCard = draggedCourseLi.closest(".semester-card");
      card.querySelector("ul").appendChild(draggedCourseLi);

      if (sourceCard) recomputeSemesterCredits(sourceCard);
      recomputeSemesterCredits(card);
      recomputeTotalCredits();

      draggedCourseLi.classList.remove("dragging");
      draggedCourseLi = null;
    });
  }

  // Adds the drag/drop feature
  function enhanceCurrentPlanDOM() {
    planYears.querySelectorAll("li[data-course-code]").forEach(makeCourseDraggable);
    planYears.querySelectorAll(".semester-card").forEach(enableSemesterDrop);
  }

  // Builds the plan
  function renderMajorPlan(slug) {
    const major = majorsData[slug];
    if (!major) return;

    historyStack.length = 0;
    completedCourses = new Set();
    planMajorName.textContent = major.name;
    planMajorDesc.textContent = major.description || "";
    planYears.innerHTML = "";

    let total = 0;

    (major.years || []).forEach(year => {
      const yearDiv = document.createElement("div");
      yearDiv.className = "year-section";

      const yearHeader = document.createElement("div");
      yearHeader.className = "year-header";
      yearHeader.textContent = year.title;
      yearDiv.appendChild(yearHeader);

      const row = document.createElement("div");
      row.className = "semesters-row";

      ["fall", "winter"].forEach(semName => {
        const sem = year[semName];
        if (!sem) return;

        const semDiv = document.createElement("div");
        semDiv.className = "semester-card" + (semName === "fall" ? " gold" : "");
        const h3 = document.createElement("h3");
        h3.textContent = semName.charAt(0).toUpperCase() + semName.slice(1) + " Semester";
        semDiv.appendChild(h3);

        const ul = document.createElement("ul");
        let semTotal = 0;

        sem.forEach(course => {
          const li = document.createElement("li");
          li.dataset.courseCode = course.code;
          li.dataset.credits = course.credits;
          li.innerHTML = `
            <input type="checkbox" class="course-check">
            <span class="course-info">
              <strong>${course.code}</strong> - ${course.title} (${course.credits} cr)
            </span>
          `;
          ul.appendChild(li);
          semTotal += course.credits;
        });

        const p = document.createElement("p");
        p.textContent = `Total Credits: ${semTotal}`;

        semDiv.appendChild(ul);
        semDiv.appendChild(p);
        row.appendChild(semDiv);

        enableSemesterDrop(semDiv);
        total += semTotal;
      });

      yearDiv.appendChild(row);
      planYears.appendChild(yearDiv);
    });

    planTotalCredits.textContent = total;
    enhanceCurrentPlanDOM();
  }

  document.querySelectorAll(".major-card[data-major]").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".major-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      renderMajorPlan(card.dataset.major);
    });
  });

  document.addEventListener("click", e => {
    if (e.target.matches('input[type="checkbox"].course-check')) return;
    const info = e.target.closest(".course-info");
    if (!info) return;
    const li = info.closest("li[data-course-code]");
    if (!li) return;
    const course = findCourseDataByCode(li.dataset.courseCode);
    if (course) openCourseModal(course);
  });

  document.addEventListener("change", e => {
    if (!e.target.matches('input[type="checkbox"].course-check')) return;
    const li = e.target.closest("li[data-course-code]");
    if (!li) return;

    saveSnapshot();

    completedCourses.add(li.dataset.courseCode);
    const semesterCard = li.closest(".semester-card");
    li.remove();

    if (semesterCard) {
      recomputeSemesterCredits(semesterCard);
      shiftPlanForward(semesterCard);
    } else {
      recomputeTotalCredits();
    }
  });
})();

// EXTRACTING PLAN DATA FROM HTML
function extractFullPlan() {
  const years = [...document.querySelectorAll(".year-block")];

  
  return years.map((yearBlock) => {
    const yearTitle = yearBlock.querySelector(".year-title").textContent.trim();
    const semesters = [...yearBlock.querySelectorAll(".semester-card")].map((sem) => {
      const semesterTitle = sem.querySelector(".semester-title").textContent.trim();
      
      const courses = [...sem.querySelectorAll("li.course")].map((li) => ({
        code: li.dataset.courseCode,
        name: li.dataset.courseName,
        credits: Number(li.dataset.credits),
        completed: li.querySelector("input[type='checkbox']").checked
      }));
        return { semesterTitle, courses };
    });
    return { yearTitle, semesters };
  });
}

// SAVING PLAN TO USERDATA
document.getElementById("addMajorBtn")?.addEventListener("click",function(){
  let userbase = JSON.parse(localStorage.getItem("userbase")) || {};
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  if(!currentUser.name || !userbase[currentUser.name]){
    alert("You must be logged in to add a major.");
    return;
  }
  const saved={
    majorName: document.getElementById("planMajorName").textContent.trim(),
    totalCredits: Number(document.getElementById("planTotalCredits").textContent),
    plan: extractFullPlan()
  };
  userbase[currentUser.name].major = saved.majorName;
  userbase[currentUser.name].fourYearPlan = saved;
  currentUser.fourYearPlan = saved;
  currentUser.major = saved.majorName;
  localStorage.setItem("userbase", JSON.stringify(userbase));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  
  alert("Major added to your account!");
});

