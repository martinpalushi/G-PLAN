// majorData.js
const majorsData = {   
  "computer-science": {
    name: "Computer Science",
    description:
      "The program leading to a Bachelor of Science degree in Computer Science equips students for a successful career in the industry and graduate studies in diverse disciplines. It emphasizes the development of crucial skills, such as formulating abstract concepts, creating innovative computational solutions, designing complex systems, and incorporating cutting-edge technologies. The curriculum not only establishes a robust foundation for lifelong learning but also integrates theoretical principles in information and computation, keeping students informed about the latest developments. With a strong focus on professional development, encompassing technical communication, ethical considerations, and teamwork, the program ensures that graduates are well-prepared for the dynamic demands of the computing landscape. The Bachelor of Science in Computer Science program is accredited by the Computing Accreditation Commission of ABET.",
    requiredCredits: 128,
    years: [
      {
        title: "Freshman Year",
        fall: [
          {
            code: "MTH 1554",
            title: "Calculus I",
            credits: 4,
            description:
              "A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus.",
            prereqs: []
          },
          {
            code: "CSI 1320",
            title: "Introduction to Python Programming and Unix",
            credits: 4,
            description:
              "Algorithmic programming using Python. Topics include data storage and manipulation, binary numbers, bitwise operations, control structures, and functions. Introduction to fundamental data structures and script programming. Basic Unix commands and Unix utilities will be covered. With laboratory. Students can receive credit for only one of CSI 1300, CSI 1320, CSI 1420, or EGR 1400. Intended for Information Technology majors and minors. (Formerly CSI 1310).",
            prereqs: ["MTH0662"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CSI 2300",
            title: "Object-Oriented Computing",
            credits: 4,
            description:
              "Introduction to object-oriented computer programming using a high-level programming language such as Java. Classes, member functions, inheritance, polymorphism and operator overloading. Design methodologies and introduction to software engineering principles and practices. Basic data structures, algorithms and event driven programming concepts are introduced. With laboratory.",
            prereqs: ["CSI 1420"]
          },
          {
            code: "MTH 1555",
            title: "Calculus II",
            credits: 4,
            description:
              "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",
            prereqs: ["MATH 1554"]
          },
          {
            code: "Science Elective",
            title: "Approved science elective with lab",
            credits: 5,
            description: "",
            prereqs: []
          }
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "CSI2120",
            title: "Discrete Structures with Applications",
            credits: 4,
            description:
              "Presents fundamental concepts in discrete structures including number systems, computer representation of numbers, number theory, logic and proof, Boolean algebra, set theory, relations and functions, growth of functions and asymptotic notations, induction and recursion, combinatorial counting, and their applications in computing disciplines. With laboratory. Students can receive credit for CSI 2120 or APM 2663, but not both.",
            prereqs: [
              { any: ["MTH 1441", "CSI1320"] },
              "CSI1420"
            ]
          },
          {
            code: "MATH 2400",
            title: "Discrete Math",
            credits: 3,
            description: "Logic, sets, graphs.",
            prereqs: []
          },
          {
            code: "STAT 2000",
            title: "Statistics",
            credits: 3,
            description: "Probability and inference.",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CSCI 3100",
            title: "Algorithms",
            credits: 4,
            description: "Algorithm design and complexity.",
            prereqs: ["CSCI 2200", "MATH 2400"]
          },
          {
            code: "CSCI 3200",
            title: "Operating Systems",
            credits: 4,
            description: "Processes, threads, concurrency.",
            prereqs: ["CSCI 2200"]
          },
          {
            code: "HUMN 2100",
            title: "Humanities Elective",
            credits: 3,
            description: "General education course.",
            prereqs: []
          }
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "CSCI 3300",
            title: "Databases",
            credits: 3,
            description: "SQL, schema, relational model.",
            prereqs: ["CSCI 2200"]
          },
          {
            code: "CSCI 3400",
            title: "Software Engineering",
            credits: 3,
            description: "Lifecycle, teamwork, documentation.",
            prereqs: ["CSCI 2200"]
          },
          {
            code: "ELEC 2000",
            title: "Circuits",
            credits: 3,
            description: "Basic circuit analysis.",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CSCI 4100",
            title: "AI & ML",
            credits: 3,
            description: "Foundations of AI and intro ML.",
            prereqs: ["CSCI 3100"]
          },
          {
            code: "CSCI 4200",
            title: "Networks",
            credits: 3,
            description: "Network layers and protocols.",
            prereqs: ["CSCI 2200"]
          },
          {
            code: "TECH 3000",
            title: "Technical Elective",
            credits: 3,
            description: "Approved upper-level technical course.",
            prereqs: []
          }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "CSCI 4300",
            title: "Capstone I",
            credits: 3,
            description: "Plan and start team project.",
            prereqs: ["CSCI 3400"]
          },
          {
            code: "CSCI 4400",
            title: "Security",
            credits: 3,
            description: "Security principles and threats.",
            prereqs: ["CSCI 2200"]
          },
          {
            code: "SOCI 2300",
            title: "Social Science Elective",
            credits: 3,
            description: "General education course.",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CSCI 4310",
            title: "Capstone II",
            credits: 3,
            description: "Complete and present project.",
            prereqs: ["CSCI 4300"]
          },
          {
            code: "CSCI 4500",
            title: "Advanced Topics",
            credits: 3,
            description: "Rotating modern CS topics.",
            prereqs: ["CSCI 3100"]
          },
          {
            code: "FREE 1000",
            title: "Free Elective",
            credits: 3,
            description: "Any course of interest.",
            prereqs: []
          }
        ]
      }
    ]
  },

  "information-technology": {
    name: "Information Technology (BS)",
    description: "Covers systems administration, networking, and applied computing.",
    requiredCredits: 120,
    years: []
  },

};
