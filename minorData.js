// minorData.js
// All minor requirements, grouped, with full course objects

(function () {
  const MINOR_DATA = {
    cybersecurity: {
      id: "cybersecurity",
      name: "Cybersecurity",
      desc: "Look through the minors available at Oakland University!",
      groups: [
        {
          title: "GROUP A",
          subtitle: "Both courses are required",
          courses: [
            {
              code: "CSE 2310",
              title: "Introduction to C Programming and Unix",
              credits: 4,
              desc: "C programming basics, Unix shell, compilation, and debugging to prepare students for later security coursework."
            },
            {
              code: "CSE 2420",
              title: "Introduction to Computer Networks",
              credits: 3,
              desc: "Covers network models, TCP/IP, basic routing, and common protocols — foundation for secure networking."
            }
          ]
        },
        {
          title: "GROUP B",
          subtitle: "Pick one course",
          courses: [
            {
              code: "CSE 3340",
              title: "Information Security",
              credits: 3,
              desc: "Concepts of confidentiality, integrity, availability, authentication, and security policies in computing systems."
            },
            {
              code: "CSE 3350",
              title: "Information Security Practices",
              credits: 3,
              desc: "Applied security controls, vulnerability assessment, hardening, and secure configuration."
            }
          ]
        },
        {
          title: "GROUP C",
          subtitle: "",
          courses: [
            {
              code: "CSE 4460",
              title: "Security and Privacy in Computing",
              credits: 3,
              desc: "Advanced look at privacy threats, access control mechanisms, and secure system design."
            },
            {
              code: "CSE 4470",
              title: "Mobile Security",
              credits: 3,
              desc: "Platform security models, mobile malware, app permissions, and secure mobile app development."
            },
            {
              code: "CSE 4480",
              title: "Network Security",
              credits: 3,
              desc: "Firewalls, IDS/IPS, VPNs, and secure network design strategies."
            },
            {
              code: "CSE 4490",
              title: "Software Security",
              credits: 3,
              desc: "Secure coding, input validation, common software vulnerabilities, and mitigations."
            }
          ]
        }
      ],
      notes: [
        "Student interested in pursuing the minor must submit a completed Minor Authorization Form to the CSE adviser.",
        "A minimum grade of C is required in each course for the minor.",
        "Students must complete a minimum of 6 credits at the 3000 level or above, and at least half of the minor credits must be earned at Oakland University.",
        "At least 8 credits must be non-duplicative with the student’s major, concentration, or another minor.",
        "Prerequisite courses do not count toward the 15 credits of the minor.",
        "Department permission is required to register for CSI/CSE courses numbered 3000 or higher."
      ]
    },

    ai: {
      id: "ai",
      name: "Artificial Intelligence",
      desc: "Courses in AI foundations, ML, and intelligent systems.",
      groups: [
        {
          title: "GROUP A",
          subtitle: "Both courses are required",
          courses: [
            {
              code: "CSE 3500",
              title: "Introduction to Artificial Intelligence",
              credits: 3,
              desc: "Search, game playing, knowledge representation, and simple inference."
            },
            {
              code: "CSE 2300",
              title: "Data Structures and Algorithms",
              credits: 4,
              desc: "Core DS/Algo topics needed for implementing AI/ML methods efficiently."
            }
          ]
        },
        {
          title: "GROUP B",
          subtitle: "Pick one course",
          courses: [
            {
              code: "CSE 4520",
              title: "Machine Learning",
              credits: 3,
              desc: "Supervised/unsupervised learning, model evaluation, and regularization."
            },
            {
              code: "CSE 4530",
              title: "Knowledge-Based Systems",
              credits: 3,
              desc: "Rule-based systems, expert systems, and reasoning under uncertainty."
            }
          ]
        },
        {
          title: "GROUP C",
          subtitle: "",
          courses: [
            {
              code: "CSE 4540",
              title: "Robotics",
              credits: 3,
              desc: "Robot kinematics, sensing, and planning."
            },
            {
              code: "CSE 4550",
              title: "Computer Vision",
              credits: 3,
              desc: "Image processing and feature extraction for perception."
            },
            {
              code: "CSE 4560",
              title: "Natural Language Processing",
              credits: 3,
              desc: "Text processing, language models, and basic dialogue systems."
            }
          ]
        }
      ],
      notes: [
        "At least 6 credits must be at the 3000-level or higher.",
        "A grade of C or better is required in all minor courses.",
        "Some courses may require prior programming and linear algebra."
      ]
    },

    bioengineering: {
      id: "bioengineering",
      name: "Bioengineering",
      desc: "Interdisciplinary courses blending biology and engineering.",
      groups: [
        {
          title: "GROUP A",
          subtitle: "Both courses are required",
          courses: [
            { code: "BE 2000", title: "Intro to Bioengineering", credits: 3, desc: "Overview of bioengineering applications and tools." },
            { code: "BE 3100", title: "Biomaterials", credits: 3, desc: "Material selection, biocompatibility, and tissue responses." }
          ]
        },
        {
          title: "GROUP B",
          subtitle: "Pick one course",
          courses: [
            { code: "BE 3200", title: "Biomechanics", credits: 3, desc: "Mechanics of biological tissues and systems." },
            { code: "BE 3300", title: "Biomedical Instrumentation", credits: 3, desc: "Sensors, transducers, and medical instrumentation principles." }
          ]
        },
        {
          title: "GROUP C",
          subtitle: "",
          courses: [
            { code: "BE 4200", title: "Medical Imaging", credits: 3, desc: "Imaging modalities such as MRI, CT, and ultrasound." },
            { code: "BE 4300", title: "Tissue Engineering", credits: 3, desc: "Scaffolds, cell culture, and regenerative medicine topics." },
            { code: "BE 4400", title: "Systems Physiology", credits: 3, desc: "Modeling and analysis of physiological systems." }
          ]
        }
      ],
      notes: [
        "Some courses may have additional science prerequisites.",
        "At least half of the minor credits must be taken at OU."
      ]
    }

    // you can keep adding for ce, computer-science, ds, etc. in the same shape
  };

  window.MINOR_DATA = MINOR_DATA;
})();
