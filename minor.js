// minor.js
document.addEventListener("DOMContentLoaded", () => {
  if (!window.MINOR_DATA) {
    console.error("MINOR_DATA is missing. Make sure minorData.js is loaded first.");
    return;
  }

  const cards = document.querySelectorAll(".minor-card[data-minor]");
  const nameEl = document.getElementById("planMinorName");
  const descEl = document.getElementById("planMinorDesc");
  const creditsEl = document.getElementById("planTotalCredits");
  const planYears = document.getElementById("planYears");

  // modal elements
  const courseModal = document.getElementById("courseModal");
  const courseModalClose = document.getElementById("courseModalClose");
  const modalCourseCode = document.getElementById("modalCourseCode");
  const modalCourseTitle = document.getElementById("modalCourseTitle");
  const modalCourseCredits = document.getElementById("modalCourseCredits");
  const modalCourseDesc = document.getElementById("modalCourseDesc");

  let currentMinorId = null;

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

  // total credits for whole minor (top of page)
  function sumMinorCredits(minor) {
    let total = 0;
    (minor.groups || []).forEach(g => {
      (g.courses || []).forEach(c => {
        total += c.credits || 0;
      });
    });
    return total;
  }

  // total credits for ONE block (like screenshot)
  function sumGroupCredits(group) {
    let t = 0;
    (group.courses || []).forEach(c => {
      t += c.credits || 0;
    });
    return t;
  }

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
        const groupCredits = sumGroupCredits(group);

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
                  style="width:16px;height:16px;border:1px solid #fff;background:#fff;border-radius:3px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;font-size:.7rem;line-height:1;color:#000;"
                  aria-label="mark course complete"
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
            <p style="margin:.4rem 0 0; font-weight:600;">Total Credits: ${groupCredits}</p>
          </div>
        `;
      })
      .join("");

    // BUILD RIGHT SIDE (notes)
    const notesHtml = (minor.notes || [])
      .map(n => `<li style="margin-bottom:.4rem;">${n}</li>`)
      .join("");

    planYears.innerHTML = `
      <div style="display:flex; gap:2rem; align-items:flex-start;">
        <div style="flex:0 0 420px; max-width:420px;">
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

    // attach click handlers (modal + checkbox) AFTER inserting HTML
    (minor.groups || []).forEach((group, gIdx) => {
      (group.courses || []).forEach((course, cIdx) => {
        const cid = `${id}-${gIdx}-${cIdx}`;
        const li = planYears.querySelector(`[data-course="${cid}"]`);
        const textEl = li ? li.querySelector(".course-text") : null;
        const checkBtn = planYears.querySelector(`[data-check="${cid}"]`);

        // text -> open modal
        if (textEl) {
          textEl.addEventListener("click", () => openCourseModal(course));
        }

        // checkbox -> toggle strike + checkmark
        if (checkBtn) {
          checkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const checked = checkBtn.getAttribute("data-checked") === "true";
            if (checked) {
              checkBtn.setAttribute("data-checked", "false");
              checkBtn.textContent = "";
              if (textEl) textEl.style.textDecoration = "none";
            } else {
              checkBtn.setAttribute("data-checked", "true");
              checkBtn.textContent = "✓";
              if (textEl) textEl.style.textDecoration = "line-through";
            }
          });
        }
      });
    });
  }

  // card clicks
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-minor");
      renderMinor(id);
    });
  });

  // undo = re-render current (clears checks)
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
});
