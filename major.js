(function () {
  const planMajorName = document.getElementById("planMajorName");
  const planMajorDesc = document.getElementById("planMajorDesc");
  const planTotalCredits = document.getElementById("planTotalCredits");
  const planYears = document.getElementById("planYears");
  const undoBtn = document.getElementById("undoBtn");
  const courseModal = document.getElementById("courseModal");
  const courseModalClose = document.getElementById("courseModalClose");


  const historyStack = [];
  let completedCourses = new Set();
  let draggedCourseLi = null;
  const MAX_PER_SEM = 5;

  
  function saveSnapshot() {
    historyStack.push({
      html: planYears.innerHTML,
      completed: [...completedCourses],
    });
    if (historyStack.length > 50) historyStack.shift();
  }

  function restoreSnapshot() {
    if (!historyStack.length) return;
    const { html, completed } = historyStack.pop();
    planYears.innerHTML = html;
    completedCourses = new Set(completed || []);
    planYears.querySelectorAll(".dragging").forEach(el => el.classList.remove("dragging"));
    enhanceCurrentPlanDOM();
    recomputeTotalCredits();
  }
  if (undoBtn) undoBtn.addEventListener("click", restoreSnapshot);

  function openCourseModal(course) {
    document.getElementById("modalCourseCode").textContent = course.code;
    document.getElementById("modalCourseTitle").textContent = course.title;
    document.getElementById("modalCourseCredits").textContent = `Credits: ${course.credits}`;
    document.getElementById("modalCourseDesc").textContent = course.description || "No detailed description available.";
    courseModal.style.display = "flex";
  }
  if (courseModalClose) {
    courseModalClose.addEventListener("click", () => (courseModal.style.display = "none"));
  }
  window.addEventListener("click", e => {
    if (e.target === courseModal) courseModal.style.display = "none";
  });

  function recomputeTotalCredits() {
    let total = 0;
    planYears.querySelectorAll("li[data-credits]").forEach(li => (total += +li.dataset.credits));
    planTotalCredits.textContent = total;
  }

  function recomputeSemesterCredits(card) {
    const p = card.querySelector("p");
    let sum = 0;
    card.querySelectorAll("li[data-credits]").forEach(li => (sum += +li.dataset.credits));
    if (p) p.textContent = `Total Credits: ${sum}`;
  }

  const getSemesterCourseCount = card => card.querySelectorAll("li[data-course-code]").length;

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

  function enhanceCurrentPlanDOM() {
    planYears.querySelectorAll("li[data-course-code]").forEach(makeCourseDraggable);
    planYears.querySelectorAll(".semester-card").forEach(enableSemesterDrop);
  }

 
  function renderMajorPlan(slug) {
    const major = majorsData[slug];
    if (!major) {
      // Friendly fallback
      const name = slug || "Selected Major";
      planMajorName.textContent = `${name} (plan coming soon)`;
      planMajorDesc.textContent = "";
      planYears.innerHTML = "";
      planTotalCredits.textContent = "0";
      return;
    }

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


  const STORAGE_KEY = "selectedMajorSlug"; // use this ONE key everywhere

  function selectMajor(slug) {
  
  localStorage.setItem("selectedMajorSlug", slug);
  localStorage.setItem("gplan.selectedMajor", slug); // ← legacy shim

  
  document.querySelectorAll(".major-card").forEach(c => c.classList.remove("selected"));
  const card = document.querySelector(`.major-card[data-major="${slug}"]`);
  if (card) card.classList.add("selected");

 
  renderMajorPlan(slug);
}


  
  document.querySelectorAll(".major-card[data-major]").forEach(card => {
    card.addEventListener("click", () => {
      const slug = card.dataset.major;
      selectMajor(slug);
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && majorsData[saved]) {
      selectMajor(saved);
    }
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
