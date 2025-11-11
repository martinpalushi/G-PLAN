window.minorsData = {
  "cybersecurity": {
    name: "Cybersecurity (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "CSI 3480", title: "Security and Privacy in Computing", credits: 4 },   // CS junior (winter)
      { code: "CSI 2470", title: "Introduction to Computer Networks", credits: 4 },   // CS sophomore (winter)
      { code: "CSI 3610", title: "Design and Analysis of Algorithms", credits: 4 },   // CS junior (fall)
      { code: "CSI 3640", title: "Computer Organization", credits: 4 }                // CS junior (fall) ↔ CE via CSE 364
    ]
  },

  "data-science": {
    name: "Data Science (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "STA 2226", title: "Applied Probability and Statistics", credits: 4 },  // CS junior (fall)
      { code: "CSI 3450", title: "Database Design and Implementation", credits: 4 },  // CS junior (fall)
      { code: "CSI 2310", title: "Data Structures", credits: 4 },                     // CS sophomore (winter)
      { code: "CSI 3350", title: "Programming Languages", credits: 4 }                // CS junior (winter)
    ]
  },

  "artificial-intelligence": {
    name: "Artificial Intelligence (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "CSI 3610", title: "Design and Analysis of Algorithms", credits: 4 },   // overlaps CS
      { code: "CSI 3350", title: "Programming Languages", credits: 4 },               // overlaps CS
      { code: "STA 2226", title: "Applied Probability and Statistics", credits: 4 },  // overlaps CS
      { code: "CSI 3430", title: "Theory of Computation", credits: 4 }                // CS junior (winter)
    ]
  },

  "computer-engineering": {
    name: "Computer Engineering (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "EGR 240",  title: "Introduction to Electrical and Computer Engineering", credits: 4 }, // ↔ CS EGR 2400
      { code: "CSE 230",  title: "Object-Oriented Computing I", credits: 4 },                         // ↔ CS CSI 2300
      { code: "CSE 364",  title: "Computer Organization", credits: 4 },                               // ↔ CS CSI 3640
      { code: "MTH 155",  title: "Calculus II", credits: 4 }                                          // ↔ CS MTH 1555
    ]
  },

  "computer-science": {
    name: "Computer Science (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "CSI 2300", title: "Object-Oriented Computing", credits: 4 },           // overlaps CS; ↔ CE via CSE 230 if needed
      { code: "CSI 2310", title: "Data Structures", credits: 4 },                     // overlaps CS
      { code: "CSI 3610", title: "Design and Analysis of Algorithms", credits: 4 },   // overlaps CS
      { code: "CSI 3450", title: "Database Design and Implementation", credits: 4 }   // overlaps CS
    ]
  },

  "electrical-engineering": {
    name: "Electrical Engineering (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "EGR 240",  title: "Introduction to Electrical and Computer Engineering", credits: 4 }, // ↔ CS EGR 2400
      { code: "MTH 154",  title: "Calculus I", credits: 4 },                                          // ↔ CS MTH 1554
      { code: "MTH 155",  title: "Calculus II", credits: 4 },                                         // ↔ CS MTH 1555
      { code: "CSE 364",  title: "Computer Organization", credits: 4 }                                // ↔ CS CSI 3640
    ]
  },

  "engineering-sciences": {
    name: "Engineering Sciences (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "MTH 154",  title: "Calculus I", credits: 4 },                                          // ↔ CS MTH 1554
      { code: "MTH 155",  title: "Calculus II", credits: 4 },                                         // ↔ CS MTH 1555
      { code: "EGR 240",  title: "Introduction to Electrical and Computer Engineering", credits: 4 }, // ↔ CS EGR 2400
      { code: "CSE 230",  title: "Object-Oriented Computing I", credits: 4 }                          // ↔ CS CSI 2300
    ]
  },

  "industrial-and-systems-engineering": {
    name: "Industrial and Systems Engineering (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "STA 2226", title: "Applied Probability and Statistics", credits: 4 },  // overlaps CS
      { code: "MTH 154",  title: "Calculus I", credits: 4 },                          // ↔ CS MTH 1554
      { code: "MTH 155",  title: "Calculus II", credits: 4 },                         // ↔ CS MTH 1555
      { code: "CSE 230",  title: "Object-Oriented Computing I", credits: 4 }          // ↔ CS CSI 2300
    ]
  },

  "information-technology": {
    name: "Information Technology (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "CSI 2300", title: "Object-Oriented Computing", credits: 4 },           // overlaps CS
      { code: "CSI 2310", title: "Data Structures", credits: 4 },                     // overlaps CS
      { code: "CSI 3450", title: "Database Design and Implementation", credits: 4 },  // overlaps CS
      { code: "CSI 2470", title: "Introduction to Computer Networks", credits: 4 }    // overlaps CS
    ]
  },

  "mechanical-engineering": {
    name: "Mechanical Engineering (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "MTH 154", title: "Calculus I", credits: 4 },                            // ↔ CS MTH 1554
      { code: "MTH 155", title: "Calculus II", credits: 4 },                           // ↔ CS MTH 1555
      { code: "EGR 240", title: "Introduction to Electrical and Computer Engineering", credits: 4 }, // ↔ CS EGR 2400
      { code: "CSE 364", title: "Computer Organization", credits: 4 }                  // ↔ CS CSI 3640
    ]
  },

  "mechatronics-and-robotics-engineering": {
    name: "Mechatronics & Robotics Engineering (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "EGR 240",  title: "Introduction to Electrical and Computer Engineering", credits: 4 }, // ↔ CS EGR 2400
      { code: "CSE 230",  title: "Object-Oriented Computing I", credits: 4 },                         // ↔ CS CSI 2300
      { code: "CSE 364",  title: "Computer Organization", credits: 4 },                               // ↔ CS CSI 3640
      { code: "MTH 155",  title: "Calculus II", credits: 4 }                                          // ↔ CS MTH 1555
    ]
  },

  "bioengineering": {
    name: "Bioengineering (Minor)",
    totalCredits: 16,
    requirements: [
      { code: "MTH 154",  title: "Calculus I", credits: 4 },                         // ↔ CS MTH 1554
      { code: "MTH 155",  title: "Calculus II", credits: 4 },                        // ↔ CS MTH 1555
      { code: "EGR 240",  title: "Introduction to Electrical and Computer Engineering", credits: 4 }, // ↔ CS EGR 2400
      { code: "CSE 230",  title: "Object-Oriented Computing I", credits: 4 }         // ↔ CS CSI 2300
    ]
  }
};


