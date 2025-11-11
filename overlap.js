
(function () {

  const EQUIVALENCE_GROUPS = [
    // Calculus I
    ["MTH 1554", "MTH 154"],
    // Calculus II
    ["MTH 1555", "MTH 155"],

    // Physics I w/ lab (CS: lecture + lab) vs CE: one 5cr course
    ["PHY 1510", "PHY 1100", "PHY 151"],

    // Physics II
    ["PHY 1620", "PHY 152"],

    // Intro to ECE
    ["EGR 2400", "EGR 240"],

    // OOP I / Object-Oriented I
    ["CSI 2300", "CSE 230"],
    // Data Structures / OOP II
    ["CSI 2310", "CSE 231"],

    // Computer Organization
    ["CSI 3640", "CSE 364"],
  ];


  const aliasToCanonical = {};
  EQUIVALENCE_GROUPS.forEach(group => {
    const canonical = group[0].toUpperCase().trim();
    group.forEach(alias => {
      aliasToCanonical[alias.toUpperCase().trim()] = canonical;
    });
  });

  function canonicalize(codeRaw) {
    if (!codeRaw) return "";
    const code = String(codeRaw).toUpperCase().trim();
    return aliasToCanonical[code] || code;
  }

  
  function isSkippableBucket(code, title) {
    const c = (code || "").toUpperCase();
    const t = (title || "").toUpperCase();
    return (
      c === "GENED" ||
      c === "FREE 1000" ||
      c.includes("PROF") ||             // PROF ELEC
      c.includes("TRACK") ||            // TRACK
      t.includes("GENERAL EDUCATION") ||
      t.includes("ELECTIVE")
    );
  }

  function flattenMajorCourses(majorObj) {
    const out = [];
    if (!majorObj || !Array.isArray(majorObj.years)) return out;
    majorObj.years.forEach(year => {
      ["fall", "winter"].forEach(term => {
        const arr = year[term];
        if (!Array.isArray(arr)) return;
        arr.forEach(c => {
          const code = (c.code || "").trim();
          const title = c.title || "";
          if (isSkippableBucket(code, title)) return;
          out.push({
            code,
            title,
            credits: Number(c.credits) || 0,
          });
        });
      });
    });
    return out;
  }

  
  function normalizeMinorCourses(minorObj) {
    const reqs = Array.isArray(minorObj?.requirements) ? minorObj.requirements : [];
    return reqs
      .map(r => ({
        code: (r.code || "").trim(),
        title: r.title || "",
        credits: Number(r.credits) || 0,
      }))
      .filter(r => !isSkippableBucket(r.code, r.title));
  }

  function indexByCanonical(courses) {
    const idx = new Map(); // canonical -> {credits, items}
    courses.forEach(c => {
      const can = canonicalize(c.code);
      if (!can) return;
      if (!idx.has(can)) idx.set(can, { credits: 0, items: [] });
      const entry = idx.get(can);
      entry.credits += c.credits;
      entry.items.push(c);
    });
    return idx;
  }

  function computeOverlapArrays(leftCourses, rightCourses) {
    const L = indexByCanonical(leftCourses);
    const R = indexByCanonical(rightCourses);

    const overlaps = [];
    let totalOverlapCredits = 0;

    const allKeys = new Set([...L.keys(), ...R.keys()]);
    allKeys.forEach(key => {
      const l = L.get(key);
      const r = R.get(key);
      if (l && r) {
        const overlapCredits = Math.min(l.credits, r.credits);
        totalOverlapCredits += overlapCredits;
        overlaps.push({
          canonical: key,
          leftItems: l.items,
          rightItems: r.items,
          overlapCredits,
        });
      }
    });

    const leftOnly = [];
    L.forEach((l, key) => {
      if (!R.has(key)) leftOnly.push({ canonical: key, items: l.items, credits: l.credits });
    });

    const rightOnly = [];
    R.forEach((r, key) => {
      if (!L.has(key)) rightOnly.push({ canonical: key, items: r.items, credits: r.credits });
    });

    overlaps.sort((a, b) => a.canonical.localeCompare(b.canonical));
    leftOnly.sort((a, b) => a.canonical.localeCompare(b.canonical));
    rightOnly.sort((a, b) => a.canonical.localeCompare(b.canonical));

    return { overlaps, leftOnly, rightOnly, totalOverlapCredits };
  }


  document.addEventListener("DOMContentLoaded", () => {
    const mmPicked = document.getElementById("mm-picked");
    const results = document.getElementById("overlapResults");
    const preSelected =
  localStorage.getItem("selectedMajorSlug") ||
  localStorage.getItem("gplan.selectedMajor");

if (mmPicked && preSelected && window.majorsData?.[preSelected]) {
  mmPicked.textContent = `Selected Major: ${window.majorsData[preSelected].name}. Now click a minor to compare.`;
}


    function renderMinorOverlap(selectedMajorSlug, minorSlug) {
      if (!results) return;

      results.innerHTML = "";

      const major = (window.majorsData && window.majorsData[selectedMajorSlug]) || null;
      const minor = (window.minorsData && window.minorsData[minorSlug]) || null;

      if (!major) {
        if (mmPicked) mmPicked.textContent = "No major selected. Go to Majors page and pick one first.";
        return;
      }
      if (!minor) {
        if (mmPicked) mmPicked.textContent = "Pick a minor to compare.";
        return;
      }

      if (mmPicked) mmPicked.textContent = `Comparing Major: ${major.name}  ↔  Minor: ${minor.name}`;

      const majorCourses = flattenMajorCourses(major);
      const minorCourses = normalizeMinorCourses(minor);

      const { overlaps, rightOnly, totalOverlapCredits } =
        computeOverlapArrays(majorCourses, minorCourses);

      const overlapCount = overlaps.length;

      const wrap = document.createElement("div");
      wrap.className = "overlap-wrap";

      const h = document.createElement("h3");
      h.textContent = `Overlapping Courses (${overlapCount}), Overlapping Credits: ${totalOverlapCredits}`;
      wrap.appendChild(h);

      const ul = document.createElement("ul");
      overlaps.forEach(o => {
        const li = document.createElement("li");
        const leftCodes = o.leftItems.map(x => x.code).join(", ");
        const rightCodes = o.rightItems.map(x => x.code).join(", ");
        li.innerHTML = `<strong>${o.canonical}</strong> — Major has [${leftCodes}] ↔ Minor has [${rightCodes}] — overlap ${o.overlapCredits} cr`;
        ul.appendChild(li);
      });
      if (!overlaps.length) {
        const li = document.createElement("li");
        li.textContent = "None";
        ul.appendChild(li);
      }
      wrap.appendChild(ul);

      const h2 = document.createElement("h3");
      h2.textContent = "Extra courses required for the Minor (not already covered by the Major)";
      wrap.appendChild(h2);

      const ul2 = document.createElement("ul");
      rightOnly.forEach(o => {
        const codes = o.items.map(x => x.code).join(", ");
        const li = document.createElement("li"); // ✅ declare properly
        li.innerHTML = `<strong>${o.canonical}</strong> — Minor requires [${codes}] — ${o.credits} cr`;
        ul2.appendChild(li);
      });
      if (!rightOnly.length) {
        const li2 = document.createElement("li");
        li2.textContent = "None";
        ul2.appendChild(li2);
      }
      wrap.appendChild(ul2);

      results.appendChild(wrap);
    }

    
    document.querySelectorAll("[data-minor]").forEach(card => {
      card.addEventListener("click", () => {
        const minorSlug = card.getAttribute("data-minor");
        const selectedMajorSlug =
  localStorage.getItem("selectedMajorSlug") ||
  localStorage.getItem("gplan.selectedMajor");

console.debug("[overlap] selectedMajorSlug =", selectedMajorSlug);
        if (!selectedMajorSlug) {
          if (mmPicked) mmPicked.textContent = "No major selected. Go to Majors page and pick one first.";
          return;
        }
        renderMinorOverlap(selectedMajorSlug, minorSlug);
      });
    });

    
    window.compareMajors = function (majorSlugA, majorSlugB) {
      const A = (window.majorsData && window.majorsData[majorSlugA]) || null;
      const B = (window.majorsData && window.majorsData[majorSlugB]) || null;
      if (!A || !B) {
        console.warn("compareMajors: bad slug(s).");
        return null;
      }
      const aCourses = flattenMajorCourses(A);
      const bCourses = flattenMajorCourses(B);
      const summary = computeOverlapArrays(aCourses, bCourses);
      console.log("Major A:", A.name, aCourses);
      console.log("Major B:", B.name, bCourses);
      console.log("Overlap Summary:", summary);
      return summary;
    };
  });
})();
