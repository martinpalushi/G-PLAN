// minor.js
document.addEventListener("DOMContentLoaded", () => {
  if (!window.MINOR_DATA) {
    console.error("MINOR_DATA is missing. Make sure minorData.js is loaded first.");
    return;
  }

  const SAVED_MAJOR_KEY = "gplan.savedMajor"; // key used by majors page

  const cards = document.querySelectorAll(".minor-card[data-minor]");
  const nameEl = document.getElementById("planMinorName");
  const descEl = document.getElementById("planMinorDesc");
  const creditsEl = document.getElementById("planTotalCredits");
  const planYears = document.getElementById("planYears");

  // integrated plan elements
  const integratedSubheading = document.getElementById("integratedSubheading");
  const integratedPlan = document.getElementById("integratedPlan");

  // comparison elements
  const compareSelectA = document.getElementById("minorCompareA");
  const compareSelectB = document.getElementById("minorCompareB");
  const compareResult = document.getElementById("minorCompareResult");

  // modal elements
  const courseModal = document.getElementById("courseModal");
  const courseModalClose = document.getElementById("courseModalClose");
  const modalCourseCode = document.getElementById("modalCourseCode");
  const modalCourseTitle = document.getElementById("modalCourseTitle");
  const modalCourseCredits = document.getElementById("modalCourseCredits");
  const modalCourseDesc = document.getElementById("modalCourseDesc");

  let currentMinorId = null;

  const MAX_MINOR_PER_SEM = 2; // limit minor-only courses per semester in integrated plan

  // ---------- modal helpers ----------
  function openCourseModal(course) {
    if (!courseModal) return;
    modalCourseCode.textContent = course.code || "";
    modalCourseTitle.textContent = course.title || "";
    modalCourseCredits.textContent = course.credits ? `Credits: ${course.credits}` : "";
    modalCourseDesc.textContent = course.desc || "";
    courseModal.style.display = "flex";
  }

  function closeCourseModal() {
    if (courseModal) courseModal.style.display = "none";
  }

  if (courseModalClose) {
    courseModalClose.addEventListener("click", closeCourseModal);
  }
  if (courseModal) {
    courseModal.addEventListener("click", (e) => {
      if (e.target === courseModal) closeCourseModal();
    });
  }

  // ---------- credit helpers ----------
  function sumMinorCredits(minor) {
    let total = 0;
    (minor.groups || []).forEach(g => {
      (g.courses || []).forEach(c => {
        total += c.credits || 0;
      });
    });
    return total;
  }

  // ---------- group type helpers ----------

  function isRequiredGroup(group) {
    const t = (group.subtitle || "").toLowerCase();
    // e.g. "Both courses are required", "Required Course"
    return t.includes("required");
  }

  function getGroupMaxSelectable(group) {
    const t = (group.subtitle || "").toLowerCase();

    if (t.includes("pick one") || t.includes("pick 1")) return 1;
    if (t.includes("pick two") || t.includes("pick 2")) return 2;
    if (t.includes("pick three") || t.includes("pick 3")) return 3;

    // no explicit limit for this group (like open electives)
    return Infinity;
  }

  // ---------- saved major + selection helpers ----------

  function getSavedMajorSlug() {
    return localStorage.getItem(SAVED_MAJOR_KEY) || null;
  }

  function getSelectedMinorCourseCodes(minorId) {
    const codes = new Set();
    const minor = window.MINOR_DATA[minorId];
    if (!minor) return codes;

    (minor.groups || []).forEach((group, gIdx) => {
      (group.courses || []).forEach((course, cIdx) => {
        if (!course.code) return;
        const cid = `${minorId}-${gIdx}-${cIdx}`;
        const checkBtn = planYears.querySelector(`[data-check="${cid}"]`);
        if (checkBtn && checkBtn.getAttribute("data-checked") === "true") {
          codes.add(course.code);
        }
      });
    });

    return codes;
  }

  function refreshIntegratedPlan() {
    if (!currentMinorId) return;
    const minor = window.MINOR_DATA[currentMinorId];
    if (!minor) return;
    const savedMajorSlug = getSavedMajorSlug();
    const selectedCodes = getSelectedMinorCourseCodes(currentMinorId);
    buildIntegratedPlan(savedMajorSlug, minor, selectedCodes);
  }

  // ---------- integrated plan (smart placement) ----------

  function buildIntegratedPlan(majorSlug, minor, selectedCodes) {
    if (!integratedPlan || !integratedSubheading) return;

    integratedPlan.innerHTML = "";

    if (!window.majorsData) {
      integratedSubheading.textContent =
        "Major data is not available. Make sure majorData.js is loaded.";
      return;
    }

    if (!majorSlug) {
      integratedSubheading.textContent =
        "To see the integrated 4-year plan, first go to the Majors page, select a major, and save it.";
      return;
    }

    const major = window.majorsData[majorSlug];
    if (!major) {
      integratedSubheading.textContent =
        "Your saved major couldn't be found. Please re-select and save it on the Majors page.";
      return;
    }

    if (!selectedCodes || selectedCodes.size === 0) {
      integratedSubheading.textContent =
        `Select the required and chosen courses from the ${minor.name} minor (using the checkboxes on the left) to see how they fit into your ${major.name} plan.`;
      return;
    }

    const minorCodes = selectedCodes;

    // Determine which selected minor codes already appear in the major plan
    const scheduledMinorCodes = new Set();
    (major.years || []).forEach(year => {
      ["fall", "winter"].forEach(semName => {
        const sem = year[semName];
        if (!sem) return;
        sem.forEach(course => {
          if (course.code && minorCodes.has(course.code)) {
            scheduledMinorCodes.add(course.code);
          }
        });
      });
    });

    // Collect selected minor-only courses that do NOT appear in the major plan
    const minorOnlyCourses = [];
    (minor.groups || []).forEach(g => {
      (g.courses || []).forEach(c => {
        if (!c.code) return;
        if (!minorCodes.has(c.code)) return; // not selected
        if (!scheduledMinorCodes.has(c.code)) {
          minorOnlyCourses.push(c);
        }
      });
    });

    integratedSubheading.textContent =
      `Integrated 4-Year Plan – ${major.name} + ${minor.name}. ` +
      `Selected minor courses are placed into the semesters with the lightest major workload. Overlapping courses are highlighted.`;

    // ----- Build a flat list of semesters with major credits -----
    const semesters = [];
    (major.years || []).forEach((year, yearIndex) => {
      ["fall", "winter"].forEach(semName => {
        const sem = year[semName];
        if (!sem) return;

        let majorCredits = 0;
        sem.forEach(c => {
          majorCredits += c.credits || 0;
        });

        semesters.push({
          yearIndex,
          yearTitle: year.title || `Year ${yearIndex + 1}`,
          semName,
          courses: sem,
          majorCredits,
          minorAssigned: [] // we'll fill this with minor-only courses
        });
      });
    });

    // ----- Smart placement: fill lightest semesters first -----
    const sortedByLightLoad = [...semesters].sort(
      (a, b) => a.majorCredits - b.majorCredits
    );

    let minorIdx = 0;
    while (minorIdx < minorOnlyCourses.length) {
      let placedThisRound = false;

      for (const sem of sortedByLightLoad) {
        if (sem.minorAssigned.length >= MAX_MINOR_PER_SEM) continue;

        sem.minorAssigned.push(minorOnlyCourses[minorIdx]);
        minorIdx++;
        placedThisRound = true;
        if (minorIdx >= minorOnlyCourses.length) break;
      }

      // All semesters are "full" for minors
      if (!placedThisRound) break;
    }

    const leftoverMinorCourses =
      minorIdx < minorOnlyCourses.length
        ? minorOnlyCourses.slice(minorIdx)
        : [];

    // ----- Build DOM in chronological order but using smart placement -----
    const wrapper = document.createElement("div");
    wrapper.className = "integrated-years";

    (major.years || []).forEach((year, yearIndex) => {
      const yearDiv = document.createElement("div");
      yearDiv.className = "year-section";

      const yearHeader = document.createElement("div");
      yearHeader.className = "year-header";
      yearHeader.textContent = year.title || `Year ${yearIndex + 1}`;
      yearDiv.appendChild(yearHeader);

      const row = document.createElement("div");
      row.className = "semesters-row";

      // Find the semester objects for this year
      const yearSemesters = semesters.filter(s => s.yearIndex === yearIndex);

      yearSemesters.forEach(semMeta => {
        const semDiv = document.createElement("div");
        semDiv.className = "semester-card integrated";

        const h3 = document.createElement("h3");
        h3.textContent =
          semMeta.semName.charAt(0).toUpperCase() +
          semMeta.semName.slice(1) +
          " Semester";
        semDiv.appendChild(h3);

        // MAJOR courses
        const ulMajor = document.createElement("ul");
        ulMajor.className = "course-list";

        let semMajorCredits = 0;
        let semMinorOverlapCredits = 0;

        semMeta.courses.forEach(course => {
          const li = document.createElement("li");
          const isMinorCourse = course.code && minorCodes.has(course.code);
          if (isMinorCourse) {
            li.classList.add("minor-overlap");
          }

          li.innerHTML = `
            <span class="course-info">
              <strong>${course.code}</strong> - ${course.title} (${course.credits || 0} cr)
              ${isMinorCourse ? '<span class="badge-minor">Minor</span>' : ""}
            </span>
          `;

          const cr = course.credits || 0;
          semMajorCredits += cr;
          if (isMinorCourse) {
            semMinorOverlapCredits += cr;
          }

          ulMajor.appendChild(li);
        });

        semDiv.appendChild(ulMajor);

        // MINOR-ONLY courses assigned to this semester
        let semMinorOnlyCredits = 0;
        if (semMeta.minorAssigned.length > 0) {
          const minorHeading = document.createElement("h4");
          minorHeading.textContent = "Minor Courses";
          semDiv.appendChild(minorHeading);

          const ulMinor = document.createElement("ul");
          ulMinor.className = "minor-only-list";

          semMeta.minorAssigned.forEach(c => {
            const li = document.createElement("li");
            li.classList.add("minor-only-course");
            li.innerHTML = `
              <span class="course-info">
                <strong>${c.code}</strong> - ${c.title} (${c.credits || 0} cr)
                <span class="badge-minor-only">Minor only</span>
              </span>
            `;
            semMinorOnlyCredits += c.credits || 0;
            ulMinor.appendChild(li);
          });

          semDiv.appendChild(ulMinor);
        }

        const totalMinorCreditsThisSem =
          semMinorOverlapCredits + semMinorOnlyCredits;

        const creditsP = document.createElement("p");
        creditsP.className = "integrated-credits";
        creditsP.innerHTML =
          `<span class="credits-label">Major:</span> ${semMajorCredits} cr` +
          ` &nbsp;|&nbsp; <span class="credits-label">Minor (selected):</span> ${totalMinorCreditsThisSem} cr` +
          ` &nbsp;|&nbsp; <span class="credits-label">Combined:</span> ${semMajorCredits + totalMinorCreditsThisSem} cr`;
        semDiv.appendChild(creditsP);

        row.appendChild(semDiv);
      });

      yearDiv.appendChild(row);
      wrapper.appendChild(yearDiv);
    });

    // leftover minor courses (if all semesters hit MAX_MINOR_PER_SEM)
    if (leftoverMinorCourses.length > 0) {
      const extraDiv = document.createElement("div");
      extraDiv.className = "year-section";

      const extraHeader = document.createElement("div");
      extraHeader.className = "year-header";
      extraHeader.textContent = "Additional Minor Courses (not placed)";
      extraDiv.appendChild(extraHeader);

      const extraUl = document.createElement("ul");
      extraUl.className = "minor-only-list";

      leftoverMinorCourses.forEach(c => {
        const li = document.createElement("li");
        li.classList.add("minor-only-course");
        li.innerHTML = `
          <span class="course-info">
            <strong>${c.code}</strong> - ${c.title} (${c.credits || 0} cr)
            <span class="badge-minor-only">Minor only</span>
          </span>
        `;
        extraUl.appendChild(li);
      });

      extraDiv.appendChild(extraUl);
      wrapper.appendChild(extraDiv);
    }

    integratedPlan.appendChild(wrapper);
  }

  // ---------- group credits display helper (selected only) ----------

  function updateGroupCreditsDisplay(minorId, group, gIdx) {
    const groupKey = `${minorId}-${gIdx}`;
    const footer = planYears.querySelector(`[data-group-footer="${groupKey}"]`);
    if (!footer) return;

    let total = 0;
    (group.courses || []).forEach((course, cIdx) => {
      const cid = `${minorId}-${gIdx}-${cIdx}`;
      const btn = planYears.querySelector(`[data-check="${cid}"]`);
      if (btn && btn.getAttribute("data-checked") === "true") {
        total += course.credits || 0;
      }
    });

    footer.textContent = `Selected Credits: ${total}`;
  }

  // ---------- render selected minor (gold blocks + notes) ----------

  function renderMinor(id) {
    const minor = window.MINOR_DATA[id];
    if (!minor) return;
    currentMinorId = id;

    // top labels
    nameEl.textContent = minor.name;
    descEl.textContent = minor.desc || "";
    creditsEl.textContent = sumMinorCredits(minor);

    // highlight card
    cards.forEach(c => (c.style.border = "1px solid #e5e7eb"));
    const active = document.querySelector(`.minor-card[data-minor="${id}"]`);
    if (active) active.style.border = "2px solid #b89a35";

    // BUILD LEFT SIDE (gold rounded blocks)
    const leftBlocks = (minor.groups || [])
      .map((group, gIdx) => {
        const groupKey = `${id}-${gIdx}`;

        const courseItems = (group.courses || [])
          .map((course, cIdx) => {
            const cid = `${id}-${gIdx}-${cIdx}`;
            return `
              <li 
                data-course="${cid}"
                style="display:flex; gap:.5rem; align-items:center; margin-bottom:.4rem;"
              >
                <button
                  type="button"
                  data-check="${cid}"
                  data-group="${groupKey}"
                  style="width:16px;height:16px;border:1px solid #fff;background:#fff;border-radius:3px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;font-size:.7rem;line-height:1;color:#000;"
                  aria-label="select course for minor"
                ></button>
                <span class="course-text" style="cursor:pointer; color:#fff;">
                  <strong>${course.code}</strong> - ${course.title} (${course.credits || 0} cr)
                </span>
              </li>
            `;
          })
          .join("");

        return `
          <div style="
            background:#b89a35;
            border-radius:16px;
            padding:1rem 1.2rem 1rem;
            margin-bottom:1.1rem;
            color:#fff;
          ">
            <h3 style="margin:0 0 .6rem; text-transform:uppercase;">${group.title}</h3>
            ${group.subtitle ? `<p style="margin:0 0 .6rem; font-weight:600;">${group.subtitle}</p>` : ""}
            <ul style="list-style:none; padding:0; margin:0 0 .6rem;">
              ${courseItems}
            </ul>
            <p class="group-credits" data-group-footer="${groupKey}" style="margin:.4rem 0 0; font-weight:600;">
              Selected Credits: 0
            </p>
          </div>
        `;
      })
      .join("");

    // BUILD RIGHT SIDE (notes)
    const notesHtml = (minor.notes || [])
      .map(n => `<li style="margin-bottom:.4rem;">${n}</li>`)
      .join("");

    planYears.innerHTML = `
      <div style="display:flex; gap:2rem; align-items:flex-start; flex-wrap:wrap;">
        <div style="flex:0 0 420px; max-width:420px; min-width:280px;">
          ${leftBlocks}
        </div>
        <div style="flex:1; border-left:4px solid #b89a35; padding-left:1.25rem; min-height:260px;">
          <h3 style="margin-top:0;">Notes:</h3>
          <ul style="padding-left:1rem;">
            ${notesHtml}
          </ul>
          <div style="height:6px; width:140px; background:#b89a35; margin-top:1.1rem;"></div>
        </div>
      </div>
    `;

    // attach click handlers (modal + selection) AFTER inserting HTML
    (minor.groups || []).forEach((group, gIdx) => {
      const groupKey = `${id}-${gIdx}`;
      const requiredGroup = isRequiredGroup(group);
      const maxSelectable = getGroupMaxSelectable(group);

      (group.courses || []).forEach((course, cIdx) => {
        const cid = `${id}-${gIdx}-${cIdx}`;
        const li = planYears.querySelector(`[data-course="${cid}"]`);
        const textEl = li ? li.querySelector(".course-text") : null;
        const checkBtn = planYears.querySelector(`[data-check="${cid}"]`);

        // text -> open modal
        if (textEl) {
          textEl.addEventListener("click", () => openCourseModal(course));
        }

        if (!checkBtn) return;

        if (requiredGroup) {
          // REQUIRED: auto-selected, not toggleable
          checkBtn.setAttribute("data-checked", "true");
          checkBtn.textContent = "✓";
          checkBtn.disabled = true;
          checkBtn.style.opacity = "0.7";
          if (textEl) {
            textEl.style.textDecoration = "underline";
          }
        } else {
          // CHOICE GROUP: limit how many can be selected
          checkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const checked = checkBtn.getAttribute("data-checked") === "true";

            if (checked) {
              // unselecting is always allowed
              checkBtn.setAttribute("data-checked", "false");
              checkBtn.textContent = "";
              if (textEl) textEl.style.textDecoration = "none";
            } else {
              // selecting -> enforce group max
              const alreadySelectedInGroup = planYears.querySelectorAll(
                `button[data-group="${groupKey}"][data-checked="true"]`
              ).length;

              if (alreadySelectedInGroup >= maxSelectable) {
                if (Number.isFinite(maxSelectable)) {
                  alert(`You can only select ${maxSelectable} course(s) in this group.`);
                }
                return;
              }

              checkBtn.setAttribute("data-checked", "true");
              checkBtn.textContent = "✓";
              if (textEl) textEl.style.textDecoration = "underline";
            }

            // update group credits + integrated plan whenever selection changes
            updateGroupCreditsDisplay(id, group, gIdx);
            refreshIntegratedPlan();
          });
        }
      });

      // after setting required selections, update that group's selected-credits
      updateGroupCreditsDisplay(id, group, gIdx);
    });

    // initial integrated plan (with required groups already selected, if any)
    refreshIntegratedPlan();
  }

  // ---------- minor comparison helpers ----------

  function populateCompareSelects() {
    if (!compareSelectA || !compareSelectB) return;

    const entries = Object.values(window.MINOR_DATA);
    entries.forEach(minor => {
      const optA = document.createElement("option");
      optA.value = minor.id;
      optA.textContent = minor.name;
      compareSelectA.appendChild(optA);

      const optB = document.createElement("option");
      optB.value = minor.id;
      optB.textContent = minor.name;
      compareSelectB.appendChild(optB);
    });
  }

  function computeMinorSummary(minor) {
    let minCredits = 0;
    let maxCredits = 0;
    let groups = 0;
    let requiredGroups = 0;
    let choiceGroups = 0;
    let requiredCourses = 0;
    let choiceCourses = 0;

    (minor.groups || []).forEach(g => {
      groups += 1;
      const subtitle = (g.subtitle || "").toLowerCase();
      const required = subtitle.includes("required");
      const courses = g.courses || [];
      const creditsList = courses.map(c => c.credits || 0);

      if (required) {
        const groupCredits = creditsList.reduce((a, b) => a + b, 0);
        minCredits += groupCredits;
        maxCredits += groupCredits;
        requiredGroups += 1;
        requiredCourses += courses.length;
      } else {
        choiceGroups += 1;
        choiceCourses += courses.length;

        if (!courses.length) return;

        const maxSelectable = getGroupMaxSelectable(g);
        if (!Number.isFinite(maxSelectable) || maxSelectable <= 0) {
          // treat as optional pool: 0 to sum(all)
          maxCredits += creditsList.reduce((a, b) => a + b, 0);
        } else {
          const sortedAsc = [...creditsList].sort((a, b) => a - b);
          const sortedDesc = [...creditsList].sort((a, b) => b - a);
          const n = Math.min(maxSelectable, courses.length);
          const minGroup = sortedAsc.slice(0, n).reduce((a, b) => a + b, 0);
          const maxGroup = sortedDesc.slice(0, n).reduce((a, b) => a + b, 0);
          minCredits += minGroup;
          maxCredits += maxGroup;
        }
      }
    });

    const approxCredits = (minCredits + maxCredits) / 2 || minCredits;

    return {
      approxCredits,
      minCredits,
      maxCredits,
      groups,
      requiredGroups,
      choiceGroups,
      requiredCourses,
      choiceCourses
    };
  }

  function workloadLabel(summary) {
    const c = summary.approxCredits || summary.minCredits || 0;
    if (c <= 16) return "Lighter workload";
    if (c <= 20) return "Moderate workload";
    return "Heavier / more intensive";
  }

  function flexibilityLabel(summary) {
    if (summary.choiceGroups > summary.requiredGroups) {
      return "More flexible (more choice-based groups)";
    }
    if (summary.choiceGroups === summary.requiredGroups) {
      return "Balanced (mix of required and choice)";
    }
    return "More structured (more required groups)";
  }

  function findOverlap(minorA, minorB) {
    const codesA = new Map();
    (minorA.groups || []).forEach(g => {
      (g.courses || []).forEach(c => {
        if (c.code) codesA.set(c.code, c);
      });
    });

    const codesB = new Set();
    (minorB.groups || []).forEach(g => {
      (g.courses || []).forEach(c => {
        if (c.code) codesB.add(c.code);
      });
    });

    const shared = [];
    codesA.forEach((course, code) => {
      if (codesB.has(code)) shared.push(course);
    });

    return shared;
  }

  function renderMinorComparison() {
    if (!compareResult || !compareSelectA || !compareSelectB) return;

    const idA = compareSelectA.value;
    const idB = compareSelectB.value;

    if (!idA || !idB || idA === idB) {
      compareResult.innerHTML =
        "<p class='muted'>Select two different minors to see a side-by-side comparison.</p>";
      return;
    }

    const minorA = window.MINOR_DATA[idA];
    const minorB = window.MINOR_DATA[idB];
    if (!minorA || !minorB) {
      compareResult.innerHTML = "";
      return;
    }

    const a = computeMinorSummary(minorA);
    const b = computeMinorSummary(minorB);
    const overlap = findOverlap(minorA, minorB);

    const overlapHtml =
      overlap.length === 0
        ? "<p>No overlapping courses between these two minors.</p>"
        : `
          <ul class="overlap-list" style="margin:.4rem 0 0; padding-left:1.2rem;">
            ${overlap
              .map(
                c =>
                  `<li style="margin-bottom:.25rem;"><strong>${c.code}</strong> – ${c.title}</li>`
              )
              .join("")}
          </ul>
        `;

    compareResult.innerHTML = `
      <div class="minor-compare-layout"
           style="display:flex; flex-wrap:wrap; gap:1.5rem; align-items:stretch; margin-bottom:1.25rem;">
        <article class="minor-compare-card"
                 style="flex:1; min-width:260px; border-radius:16px; border:1px solid #e5e7eb;
                        padding:1rem 1.2rem; background:#fafafa;">
          <h3 style="margin-top:0; margin-bottom:.5rem;">${minorA.name}</h3>
          <p style="margin:.15rem 0;"><strong>Workload:</strong> ${workloadLabel(a)}</p>
          <p style="margin:.15rem 0;"><strong>Flexibility:</strong> ${flexibilityLabel(a)}</p>
          <p style="margin:.3rem 0 .1rem;"><strong>Structure:</strong></p>
          <ul style="margin:.1rem 0 .4rem; padding-left:1.1rem;">
            <li>${a.groups} total groups (${a.requiredGroups} required / ${a.choiceGroups} choice)</li>
            <li>${a.requiredCourses + a.choiceCourses} total course options</li>
          </ul>
        </article>

        <article class="minor-compare-card"
                 style="flex:1; min-width:260px; border-radius:16px; border:1px solid #e5e7eb;
                        padding:1rem 1.2rem; background:#fafafa;">
          <h3 style="margin-top:0; margin-bottom:.5rem;">${minorB.name}</h3>
          <p style="margin:.15rem 0;"><strong>Workload:</strong> ${workloadLabel(b)}</p>
          <p style="margin:.15rem 0;"><strong>Flexibility:</strong> ${flexibilityLabel(b)}</p>
          <p style="margin:.3rem 0 .1rem;"><strong>Structure:</strong></p>
          <ul style="margin:.1rem 0 .4rem; padding-left:1.1rem;">
            <li>${b.groups} total groups (${b.requiredGroups} required / ${b.choiceGroups} choice)</li>
            <li>${b.requiredCourses + b.choiceCourses} total course options</li>
          </ul>
        </article>
      </div>

      <div class="overlap-section"
           style="border-radius:12px; border:1px dashed #d1d5db; padding:0.9rem 1rem;">
        <h4 style="margin:0 0 .25rem;">Overlapping Courses</h4>
        <p class="muted-small" style="margin:0 0 .35rem; font-size:.85rem; color:#6b7280;">
          These courses count toward both minors and can reduce extra workload if you plan carefully.
        </p>
        ${overlapHtml}
      </div>
    `;
  }

  if (compareSelectA && compareSelectB) {
    populateCompareSelects();
    compareSelectA.addEventListener("change", renderMinorComparison);
    compareSelectB.addEventListener("change", renderMinorComparison);
  }

  // ---------- card clicks + undo ----------

  // card clicks => render minor + integrated plan based on selection
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-minor");
      renderMinor(id);
    });
  });

  // undo = re-render current (resets selections; required still auto-selected)
  const undoBtn = document.getElementById("undoBtn");
  if (undoBtn) {
    undoBtn.addEventListener("click", () => {
      if (currentMinorId) renderMinor(currentMinorId);
    });
  }

  // load first minor initially
  if (cards.length > 0) {
    renderMinor(cards[0].getAttribute("data-minor"));
  }

  // initial compare message
  renderMinorComparison();
});
