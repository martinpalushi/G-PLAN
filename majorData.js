// majorData.js
const majorsData = {   
  
  "cybersecurity": {
    name: "Cybersecurity",
    description:
      "The program leading to a Bachelor of Science degree in Information Technology (IT) equips students for a successful career in IT and graduate studies in diverse disciplines. Emphasizing technical foundations, problem-solving skills, and hands-on practice, the curriculum equips students to create and enhance IT solutions using both established and emerging technologies. Covering key areas such as programming, web systems, networking, human-computer interaction, databases, information management, and project management, the program incorporates a strong focus on professional development, including technical communication, ethical considerations, and teamwork. The Bachelor of Science in Information Technology program is accredited by the Computing Accreditation Commission of ABET.",
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
            code: "CSI 1420",
            title: "Introduction to C Programming and Unix",
            credits: 4,
            description:
              "Topics include binary numbers and C programming concepts such as data types, bitwise operations, control flow, arrays, pointers, structures, and input/output. Basic Unix commands and shell programming are covered, as well as Unix utilities for developing and debugging C programs. With laboratory. Students can receive credits for only one of CSI 1300, CSI 1320, CSI 1420, or EGR 1400.",
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
            code: "MTH 1555",
            title: "Calculus II",
            credits: 4,
            description:
              "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "CSI 2300",
            title: "Object-Oriented Computing",
            credits: 4,
            description:
              "Introduction to object-oriented computer programming using a high-level programming language such as Java. Classes, member functions, inheritance, polymorphism and operator overloading. Design methodologies and introduction to software engineering principles and practices. Basic data structures, algorithms and event driven programming concepts are introduced. With laboratory.",
            prereqs: ["EGR1400 or CSI1300 or CSI1320 or CSI1420 with a grade of C or higher"]
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
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "CSI 2120",
            title: "Discrete Structures with Applications",
            credits: 4,
            description:
              "Presents fundamental concepts in discrete structures including number systems, computer representation of numbers, number theory, logic and proof, Boolean algebra, set theory, relations and functions, growth of functions and asymptotic notations, induction and recursion, combinatorial counting, and their applications in computing disciplines. With laboratory. Students can receive credit for CSI 2120 or APM 2663, but not both.",
            prereqs: ["MTH 1441 with a grade of C or higher and (CSI1320 or CSI1420) with a grade of C or higher"]
          },
          {
            code: "CSI 2440",
            title: "Computer Systems",
            credits: 4,
            description: "Introduction to computer hardware and operating systems. Hardware topics include processors, GPU’s, memory, secondary storage devices, and other I/O devices and interfaces. Operating systems topics include file systems, memory management, and process management.",
            prereqs: ["CSI 1300 or CSI1320 or CSI1420"]
          },
          {
            code: "CSI 2460",
            title: "Fundamentals of Cybersecurity",
            credits: 4,
            description: "This course covers topics relevant to cybersecurity across many disciplines. Discussions include the CIA triad, cryptography and privacy basics, hardware, and software security risks, guiding principles and cybersecurity ethics. In all, eight knowledge areas are explored: Data Security, Software Security, Component Security, Connection Security, Systems Security, Human Security, Organizational Security, and Societal Security.",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CSI 2470",
            title: "Introduction to Computer Networks",
            credits: 4,
            description: "An introduction to fundamental concepts for design and analyses of computer networks. Topics covered include the physical layer, network protocols, Local Area Networks, Internet, wireless and mobile networks, network security, and socket programming. With laboratory.",
            prereqs: ["CSI 1320 or CSI 1420"]
          },
          {
            code: "CSI 2999",
            title: "Sophomore Project",
            credits: 2,
            description: "A team-oriented project work consisting of a small project to build skills in needs assessment, group problem solving, and written and oral technical presentations.",
            prereqs: ["CSI 2300 with a grade of C or higher"]
          },
          {
            code: "STA 2226",
            title: "Applied Probability and Statistics",
            credits: 4,
            description: "Introduction to probability and statistics as applied to the physical, biological and social sciences and to engineering. Applications of special distributions and nonparametric techniques. Regression analysis and analysis of variance.",
            prereqs: ["MTH 1222 with a grade of (C) or higher or MTH 1554 with a grade of (C) or higher"]
          },
          {
            code: "----",
            title: "Approved Science Elective",
            credits: 4,
            description: "An approved science elective course.",
            prereqs:[]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          }
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "CSI 3370",
            title: "Software Engineering and Practice",
            credits: 4,
            description: "Introduction to software engineering and practice. Topics include software process models, project and software management, requirements analysis, architecture modeling, implementation and system integration, quality assurance, and testing. The course includes a team project.",
            prereqs: ["CSI 2300"]
          },
          {
            code: "CSI 3450",
            title: "Database Design and Implementation",
            credits: 4,
            description: "Introduction to the design, implementation and management of database systems. Topics include planning, designing, and implementing a practical database using a relational database server for an application utilizing entity relationship diagrams, normal forms, and understanding relational database schemas. Advanced topics include concurrency control, query optimization, and introduction to database systems administration. The course includes a semester-long team project.",
            prereqs: ["CSI 2290 or CSI 2300"]
          },
          {
            code: "CSI 3660",
            title: "System Administration",
            credits: 4,
            description: "This course teaches the skills necessary to analyze, deploy, manage and troubleshoot Linux servers. Topics include user authentication management, system configuration and management, periodic tasks automation, data backup techniques, server deployments, system maintenance and performance analysis, and security aspects of Linux systems.",
            prereqs: ["CSI 1320 or CSI 1420"]
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
            code: "CSI 4240",
            title: "Cloud Computing",
            credits: 4,
            description: "The course explores latest advances in hardware and software, system architecture, and new programming paradigms that are used to develop high-throughput distributed computer systems. Topics covered include computer clusters, virtual machines, automated data centers, cloud platform architectures, service-oriented architectures, cloud programming and software environments, grid computing, and peer-to-peer computing. The course will be supplemented by selected topics from recent technical literature. It includes a semester-long team project. *Approved Slash Course. Credit can only be earned for CSI 4240 or CSI 5240. ",
            prereqs: ["Major Standing"]
          },
          {
            code: "CSI 4460",
            title: "Information Security",
            credits: 4,
            description: "Introduction to cryptography and its application to networking and operating system security. Topics covered include secret key and public key cryptographic algorithms, hash functions, authentication, digital signature, digital certificate, key management, email security, web security, SSL/TLS, IP security and wireless security, firewalls, intrusion detection and traceback techniques, security threats and countermeasures, and legal and ethical issues. Independent research on network security is required as student projects. *Approved Slash Course. Credit can only be earned for CSI 4460 or CSI 5460.",
            prereqs: ["CSI 2470"]
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "Approved professional elective course.",
            prereqs: []
          }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "CSI 4480",
            title: "Information Security Practices",
            credits: 4,
            description: "Introduction to both theoretical and hands-on aspects of vulnerability assessment, penetration testing, and system hardening. Topics include basics of confidentiality, integrity and authentication; footprinting, scanning, assessment and validations of systems and application vulnerabilities; system remediation, implementation of security policies using host and network level firewalls and intrusion detection and prevention system. Cross-listed with CSI 5480. With laboratory.",
            prereqs: ["CSI 2470"]
          },
          {
            code: "CSI 4700",
            title: "Software Security",
            credits: 4,
            description: "Introduction to research in foundations of software security. This course surveys common software vulnerabilities, including buffer overflows, format string attacks, cross-site scripting and botnets. The course also discusses common defense mechanisms, including static code analysis, reference monitors, language-based security, secure information flow and others. Cross-listed with CSI 5700.",
            prereqs: ["CSI 4700"]
          },
          {
            code: "----",
            title: "Flexible elective",
            credits: 3,
            description: "Approved flexible elective",
            prereqs: []
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "Approved professional elective course.",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CSI 4740",
            title: "Cyber Laws and Digital Forensics",
            credits: 4,
            description: "This course provides a general overview of the fundamentals of computer forensics, the role of a cyber forensics specialist, computer forensic evidence and introduction of real world problems in collecting and processing digital evidence. Cross-listed with CSI 5740.",
            prereqs: ["Major Standing"]
          },
          {
            code: "CSI 4999",
            title: "Senior Capstone Project",
            credits: 4,
            description: "A team-oriented senior project to synthesize the knowledge and skills gained in the CS/IT curricula. Written and oral reports are required in addition to a working demo.",
            prereqs: ["Major Standing, CSI 3370 and (CSI 3450 or CSI 4140  or CSI 4170  or CSI 4600  or CSI 4700 ) and (CSI 3150 or CSI 3210  or CSI 3610 or CSI 3620 or CSI 3640 or CSI 4180  or CSI 4460  or CSI 4480  or CSI 4810 )"]
          },
          {
            code: "----",
            title: "Flexible elective",
            credits: 3,
            description: "Approved flexible elective",
            prereqs: []
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "Approved professional elective course.",
            prereqs: []
          }
        ]
      }
    ]
  },

  "ai": {
    name: "Artificial Itelligence",
    description:
      "The Bachelor of Artificial Intelligence degree provides students the opportunity to gain cutting-edge AI knowledge and skills with a solid theoretical foundation as well as a good understanding of different application areas. This bachelor program prepares students for a productive career in industry, lifelong learning, and for graduate study in AI. The BS in AI is strategically designed to build on the strengths of existing computing programs on campus and produce well-rounded students with a balance between strong theoretical foundations as well as practical and hands-on technical skills. The program also includes a strong professional component for the development of skills in technical communication, ethics, and teamwork. The program was designed to satisfy the local and national industry needs and student learning perspectives.",
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
            code: "CSI 1420",
            title: "Introduction to C Programming and Unix",
            credits: 4,
            description:
              "Topics include binary numbers and C programming concepts such as data types, bitwise operations, control flow, arrays, pointers, structures, and input/output. Basic Unix commands and shell programming are covered, as well as Unix utilities for developing and debugging C programs. With laboratory. Students can receive credits for only one of CSI 1300, CSI 1320, CSI 1420, or EGR 1400.",
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
            code: "MTH 1555",
            title: "Calculus II",
            credits: 4,
            description:
              "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "CSI 2300",
            title: "Object-Oriented Computing",
            credits: 4,
            description:
              "Introduction to object-oriented computer programming using a high-level programming language such as Java. Classes, member functions, inheritance, polymorphism and operator overloading. Design methodologies and introduction to software engineering principles and practices. Basic data structures, algorithms and event driven programming concepts are introduced. With laboratory.",
            prereqs: ["EGR1400 or CSI1300 or CSI1320 or CSI1420 with a grade of C or higher"]
          },
          {
            code: "STA 2226",
            title: "Applied Probability and Statistics",
            credits: 4,
            description: "Introduction to probability and statistics as applied to the physical, biological and social sciences and to engineering. Applications of special distributions and nonparametric techniques. Regression analysis and analysis of variance.",
            prereqs: ["MTH 1222 with a grade of (C) or higher or MTH 1554 with a grade of (C) or higher"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          }
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "CSI 2120",
            title: "Discrete Structures with Applications",
            credits: 4,
            description:
              "Presents fundamental concepts in discrete structures including number systems, computer representation of numbers, number theory, logic and proof, Boolean algebra, set theory, relations and functions, growth of functions and asymptotic notations, induction and recursion, combinatorial counting, and their applications in computing disciplines. With laboratory. Students can receive credit for CSI 2120 or APM 2663, but not both.",
            prereqs: ["MTH 1441 with a grade of C or higher and (CSI1320 or CSI1420) with a grade of C or higher"]
          },
          {
            code: "CSI 2310",
            title: "Data Structures",
            credits: 4,
            description: "This course covers data structures using object oriented programming. The fundamental data structures in computer science, including stacks, queues, lists and trees are covered in detail. Concepts of design, analysis and verification are discussed in the context of abstract data types. Examples of applications taken from numeric and symbolic domains are used. With laboratory.",
            prereqs: ["CSI 2300"]
          },
          {
            code: "CSI 2490",
            title: "Introduction to Artificial Intelligence",
            credits: 4,
            description: "This is an introductory course to artificial intelligence that covers fundamental topics in AI, including search, reasoning, knowledge representation, and planning. The goal of this course is to provide an overview of the artificial intelligence field. Through lectures, discussions, and homework assignments, students will learn basic AI concepts and principles.",
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
            code: "MTH 2775",
            title: "Linear Algebra",
            credits: 4,
            description: "Study of general vector spaces, linear systems of equations, linear transformations and compositions, Eigenvalues, eigenvectors, diagonalization, modeling and orthogonality. Provides a transition to formal mathematics.",
            prereqs: ["MTH 1555 with a grade of (C) or higher"]
          },
          {
            code: "CSI 2999",
            title: "Sophomore Project",
            credits: 2,
            description: "A team-oriented project work consisting of a small project to build skills in needs assessment, group problem solving, and written and oral technical presentations.",
            prereqs: ["CSI 2300 with a grade of C or higher"]
          },
          {
            code: "----",
            title: "Approved Science Elective",
            credits: 4,
            description: "An approved science elective course.",
            prereqs:[]
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
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "CSI 3370",
            title: "Software Engineering and Practice",
            credits: 4,
            description: "Introduction to software engineering and practice. Topics include software process models, project and software management, requirements analysis, architecture modeling, implementation and system integration, quality assurance, and testing. The course includes a team project.",
            prereqs: ["CSI 2300"]
          },
          {
            code: "CSI 3610",
            title: "Design and Analysis of Algorithms",
            credits: 4,
            description: "Computer algorithms, their design and analysis. Strategies constructing algorithmic solutions, including divide-and-conquer, dynamic programming and greedy algorithms. Computational complexity as it pertains to time and space is used to evaluate the algorithms. A general overview of complexity classes is given. Students can receive credits for CSI 3610 or CSI 3620, but not both. Identical with APM 3610.",
            prereqs: ["Major Standing, (CSI 2310 or CSI 2290) and (CSI 2120 or APM 2663)"]
          },
          {
            code: "CSI 4100",
            title: "Ethics and Bias in AI",
            credits: 4,
            description: "In this course students will acquire the tools to critically think, read, and write about AI in sociotechnical contexts. They will master the vocabulary and concepts necessary to identify, interrogate, and plan for the ethical implications of AI as a technological, social, and cultural phenomenon. Cross-listed with CSI 5100.",
            prereqs: ["Major Standing"]
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
            code: "CSI 4130",
            title: "Artificial Intelligence",
            credits: 4,
            description: "This course provides an introduction to the fundamental techniques of artificial intelligence for problem solving and inference. Topics include uninformed and informed search, adversarial search, reasoning under uncertainty, knowledge representation, planning, and machine learning models. Individual or group projects on current applications in AI. Cross-listed with CSI 5130.",
            prereqs: ["Major Standing, (EGR 2600 or STA 2221 or STA 2226) and (CSI 3610 or CSI 3620)"]
          },
          {
            code: "CSI 4140",
            title: "Deep Learning and Applications",
            credits: 4,
            description: "Introduction to learning, background knowledge for computer vision and natural language processing, linear models for regression and classification, perceptron learning, backpropagation and shallow neural networks, deep learning basics and software frameworks, convolutional neural networks, applications in object detection and semantic segmentation, autoencoders, visualization of learned convolution masks, recurrent neural networks, applications to sequences, generative adversarial networks, reinforcement learning. Cross-listed with CSI 5140.",
            prereqs: ["Major Standing, (CSI 2560 or APM 2555 or MTH 2775) and (EGR 2600 or STA 2221 or STA 2226)"]
          },
          {
            code: "CSI 4150",
            title: "AI for IT Operations",
            credits: 4,
            description: "This course introduces participants to MLOps tools and best practices for deploying, evaluating, monitoring and operating production ML systems on the Cloud. MLOps is a discipline focused on the deployment, testing, monitoring, and automation of ML systems in production. Cross-listed with CSI 5150.",
            prereqs: ["Major Standing"]
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "Approved professional elective course.",
            prereqs: []
          }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "CSI 4170",
            title: "Machine Learning",
            credits: 4,
            description: "Introduction to recognition and learning; Bayes decision theory; parametric and nonparametric methods including Hidden Markov models; Discriminant functions including support vector machines; Multilayer neural networks; Decision and regression trees for learning; Performance estimation; Unsupervised learning and clustering; Subspace methods; Application. *Approved Slash Course. Credit can only be earned for CSI 4170 or CSI 5170.",
            prereqs: ["Major Standing, (CSI 2560 or APM 2555 or MTH 2775) and (EGR 2600 or STA 2221 or STA2226)"]
          },
          {
            code: "CSI 4180",
            title: "Natural Language Processing",
            credits: 4,
            description: "This course introduces the linguistic, mathematical, and computational fundamentals of natural language processing: the creation of computer programs that model human languages (e.g., English), enabling applications like automatic text categorization, machine translation, and chatbots. Topics include text preprocessing, language modeling, classification, tagging, parsing, semantics, discourse and dialog analysis, text generation, and the use of modern NLP toolkits. Non-CS majors should have some programming background. Cross-listed with CSI 5180.",
            prereqs: ["Major Standing, (CSI 2560 or APM 2555 or MTH 2775) and (EGR 2600 or STA 2221 or STA 2226)"]
          },
          {
            code: "----",
            title: "Flexible elective",
            credits: 3,
            description: "Approved flexible elective",
            prereqs: []
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "Approved professional elective course.",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CSI 4810",
            title: "Information Retrieval and Knowledge Discovery",
            credits: 4,
            description: "This course covers the models for information retrieval from text and multimedia databases. Methodologies for database indexing and visualization are discussed. Statistical and deterministic algorithms for discovering knowledge from databases, including, decision trees, clustering, regression, and neural models are covered. Cross-listed with CSI 5810. *Approved Slash Course. Credit can only be earned for CSI 4810 or CSI 5810",
            prereqs: ["Major Standing, (CSI 2560 or APM 2555 or MTH 2775) and (EGR 2600 or STA 2221 or STA 2226)"]
          },
          {
            code: "CSI 4999",
            title: "Senior Capstone Project",
            credits: 4,
            description: "A team-oriented senior project to synthesize the knowledge and skills gained in the CS/IT curricula. Written and oral reports are required in addition to a working demo.",
            prereqs: ["Major Standing, CSI 3370 and (CSI 3450 or CSI 4140  or CSI 4170  or CSI 4600  or CSI 4700 ) and (CSI 3150 or CSI 3210  or CSI 3610 or CSI 3620 or CSI 3640 or CSI 4180  or CSI 4460  or CSI 4480  or CSI 4810 )"]
          },
          {
            code: "----",
            title: "Flexible elective",
            credits: 3,
            description: "Approved flexible elective",
            prereqs: []
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "Approved professional elective course.",
            prereqs: []
          }
        ]
      }
    ]
  },
  
  "ise": {
    name: "Industrial and Systems Engineering",
    description:
      "The profession of Industrial and Systems Engineering offers the widest range of choices in technical areas and career options. Other engineering disciplines apply skills to very specific areas. Industrial and Systems Engineering gives you the opportunity to work in a variety of businesses. Whether it is distributing products worldwide, manufacturing superior automobiles, or streamlining the procedures in an operating room, all of these situations share the common goal of increasing efficiencies and saving companies money. The most distinctive aspect of Industrial and Systems Engineering is the career and job flexibility it offers and the faster pathway to leadership positions it provides. Industrial and Systems Engineers work in various industries including automotive, energy, healthcare, advanced and digital manufacturing, defense, logistics, service, aerospace, entertainment and others. The BSE in Industrial and Systems Engineering program is accredited by the Engineering Accreditation Commission of ABET, https://www.abet.org, under the General Criteria and the both Industrial Engineering and in Systems Engineering Program Criteria.",
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
            code: "EGR 1400",
            title: "Computer Problem Solving in Engineering",
            credits: 4,
            description:
              "General methods of problem solving and principles of algorithmic design using a high-level language such as Visual C#. Introduction to MATLAB. Applications will be drawn from problems in mechanical, electrical and computer engineering and computer science. Offered fall and winter.",
            prereqs: ["MTH1554 or equivalent"]
          },
          {
            code: "CHM 1440",
            title: "General Chemistry I",
            credits: 4,
            description: "States of matter, atomic structure, bonding and molecular structure, chemical reactions. Recommended preparation is three years high school mathematics and one year of high school chemistry.",
            prereqs: ["Score of 22 or higher on ACT mathematics exam or score of 550 or higher on SAT mathematics exam or MTH 0662 with a grade of C or better or equivalent or placement above MTH 0662 "]
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
            code: "MTH 1555",
            title: "Calculus II",
            credits: 4,
            description:
              "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "EGR 1200",
            title: "Engineering Graphics and CAD",
            credits: 1,
            description:
              "An introduction to the techniques for creating solid models of engineering designs. Topics include three-dimensional modeling of parts and assemblies, visualization, orthographic project views and layouts, auxiliary, sectional, and cutout views, exploded views, dimensioning and tolerancing, bill of materials and computer-generated design documentation. Offered fall and winter.",
            prereqs: ["MTH 1441 or (MTH 1331 and MTH 1332) or placement"]
          },
          {
            code: "EGR 2400",
            title: "Introduction to Electrical and Computer Engineering",
            credits: 4,
            description: "An introduction to the fundamentals of electrical and computer engineering, DC and AC circuits, digital logic circuits, combinational logic design, sequential circuits, introduction to electronics, operational amplifiers and DC electromechanical machines. With laboratory. Offered fall and winter.",
            prereqs: ["MTH 1554, MTH 1555 and PHY 1510 and (CSI 1420 or EGR 1400)"]
          },
          {
            code: "PHY 1510",
            title: "Introductory Physics I",
            credits: 4,
            description: "Classical mechanics and thermodynamics. For science, mathematics and engineering students.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          }
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "APM 2555",
            title: "Introduction to Differential Equations with Matrix Algebra",
            credits: 4,
            description:
              "Introduction to ordinary differential equations, Laplace transforms, linear systems, matrices, vectors, independence, Eigenvalues and eigenvectors, and applications. Students cannot receive credit for both APM 2555 and APM 2559.",
            prereqs: ["MTH 1555 with a grade of (C) or higher"]
          },
          {
            code: "EGR 2600",
            title: "Introduction to Industrial and Systems Engineering",
            credits: 4,
            description: "Overview of industrial and systems engineering: perspectives, tools and models. Indepth coverage of probability and statistics in engineering: density and distribution functions, population and sampling distributions, confidence intervals, hypothesis testing and introduction to discrete-event simulation. Offered fall and winter.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "PHY 1520",
            title: "Introductory Physics II",
            credits: 4,
            description: "Sound, light, electricity and magnetism.",
            prereqs: ["PHY 1510, MTH 1555"]
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
            code: "EGR 2500",
            title: "Introduction to Thermal Engineering",
            credits: 4,
            description: "Introduction to the fundamentals of classical thermodynamics and heat transfer, first and second laws of thermodynamics, thermodynamic property relationships;, application to engineering systems and processes, introduction to conduction, convection and radiation, steady 1-D conduction and extended surfaces and lumped capacitance method. Offered fall and winter.",
            prereqs: ["CHM 1440, PHY 1510, and EGR 1400, APM 2555 or (APM 2559 and MTH 2775)"]
          },
          {
            code: "EGR 2800",
            title: "Design and Analysis of Electromechanical Systems",
            credits: 2,
            description: "Design, analysis, and testing of electromechanical systems; static equilibrium of particles and rigid bodies; introduction to microprocessors; team design project dealing with technical, economic, safety, environmental, and social aspects of a real-world engineering problem; written, oral and visual communication. With laboratory. Offered fall and winter.",
            prereqs: ["EGR 1200, EGR 2400, APM 2555 or (APM 2559 and MTH 2775), EGR 2500, EGR 2600"]
          },
          {
            code: "APM 2663",
            title: "Discrete Mathematics",
            credits: 4,
            description: "Concepts and methods of discrete mathematics with an emphasis on their application to computer science. Logic and proofs, sets and relations, algorithms, induction and recursion, combinatorics, graphs and trees.",
            prereqs: ["MTH 1555 with a grade of (C) or higher"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          }
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "ISE 3318",
            title: "Engineering Statistics and Economic Analysis I",
            credits: 4,
            description: "Simple linear and multiple linear regression analysis, design of experiments - single factor, full factorial, fractional factorial design. Taguchi’s method, control charts, and time series analysis. Engineering cost models, equivalence analysis, estimation of net present value, rate of return, depreciation and taxes, incremental analysis and uncertainty in cash flow. Offered fall.",
            prereqs: ["Major Standing, EGR 2600"]
          },
          {
            code: "ISE 3341",
            title: "Ergonomics an Word Design",
            credits: 4,
            description: "Design, analysis, and measurement of work: work/time studies, pre-determined time studies, and line/work balancing techniques for both repetitive and non-repetitive work. Anthropometry and techniques for consideration of anthropometric data in the design and analysis of work. Offered fall. With laboratory.",
            prereqs: ["Major Standing"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          },
          {
            code: "----",
            title: "Math or Science elective course",
            credits: 4,
            description: "An approved math or science elective course",
            prereqs: []
          },
        ],
        winter: [
          {
            code: "ISE 3330",
            title: "Engineering and Operations Research",
            credits: 3,
            description: "Introduction to operations research models used in decisionmaking and system performance evaluation. Topics include linear programming including simplex method and duality theory, integer linear programming, the assignment and transportation problems, network flows and dynamic programming. Cross-listed with MOR 3330. Offered winter.",
            prereqs: ["Major Standing"]
          },
          {
            code: "ISE 4469",
            title: "Computer Simulation of Discrete Event Systems",
            credits: 4,
            description: "Simulation as modeling tool for discrete-event systems, general principles of simulation, statistical models, input modeling, random variable generation, model building using a commercial simulation language, model verification and validation, determination of run length, output analysis variance reduction techniques. Design and optimization of production service systems. Offered winter.",
            prereqs: ["Major Standing, ISE 3318"]
          },
          {
            code: "ISE 4484",
            title: "Flexible an Learn Manufacturing Systems",
            credits: 4,
            description: "Flexible manufacturing concepts and tools such as: material transport and automated warehousing (AS/RS); Programmable Logic Controllers (PLC); Design for Assembly; Geometric Dimensioning & Tolerancing (GD&T); group technology. Lean concepts and tools such as: 5S; visual management; seven wastes; one-piece flow; Toyota Production System (TPS); Total Quality Management (TQM); Single Minute Exchange of Dies (SMED). With laboratory.&nbsp;Credit cannot be received for both ISE 4484 and ME 4710. Offered winter.",
            prereqs: ["Major Standing"]
          }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "ISE 4483",
            title: "Production Systems and Workflow Analysis",
            credits: 4,
            description: "Design issues to control the flow of material in manufacturing systems from forecast to finished product. Topics include aggregate planning and disaggregation, inventory control, MRP, JIT systems, scheduling, project planning and resource balancing, application of lean principles, theory of constraints and supply chain, facilities planning and layout. Offered fall.",
            prereqs: ["Major Standing, ISE 3330"]
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "An approved professional elective course",
            prereqs: []
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "An approved professional elective course",
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
            code: "ISE 4485",
            title: "Statistical Quality Analysis",
            credits: 4,
            description: "Fundamentals of statistical quality control, control charts for variable and attribute data, custom charts, DNOM charts, estimation of process capability, statistical tolerancing and sampling plans. Fundamentals of design of experiments and application to product/process design. Taguchi’s approach to robust design and related topics. Offered winter.",
            prereqs: ["Major Standing, ISE 3318"]
          },
          {
            code: "ISE 4487",
            title: "Foundations of Systems Engineering",
            credits: 4,
            description: "Techniques for generation, analysis and verification of traceable product requirements. System performance and structural modeling using object, behavioral and other models. Techniques for analysis of system for serviceability, reliability, maintainability and testability. System alternative trade-off study techniques. System life cycle and other tools for implementation of systems engineering techniques. Offered winter.",
            prereqs: ["Major Standing"]
          },
          {
            code: "ISE 4481",
            title: "Senior Design",
            credits: 4,
            description: "Capstone design project selected from manufacturing systems, automotive or industrial systems, instrumentation and measurement, and control systems. Develops system approach to design; preparation of specifications, scheduling, modeling, simulation, and technological, financial environmental aspects. Teamwork is emphasized.",
            prereqs: ["Offered fall and winter, ISE 3318, ISE 3330, ISE 3341 and major standing, ISE 4483"]
          },
          {
            code: "----",
            title: "Professional Elective",
            credits: 4,
            description: "An professional elective credit",
            prereqs: []
          }
        ]
      }
    ]
  },

  "bioengineering": {
    name: "Bioengineering",
    description:
      "The B.S. in Bioengineering program is accredited by the Engineering Accreditation Commission of ABET, https://www.abet.org, under the General Criteria and the Bioengineering Program Criteria. In order to earn the degree of Bachelor of Science with a major in Bioengineering, students must complete a minimum of 129 credits including satisfying general education requirements. Bioengineering students must also complete all listed requirements for the following sections: Mathematics & Sciences, Engineering Core, and Required Professional Subjects.",
    requiredCredits: 128,
    years: [
      {
        title: "Freshman Year",
        fall: [
          {
            code: "BIO 1200",
            title: "Biology I",
            credits: 4,
            description:
              "Introduction to cellular and molecular biology, enzymology, metabolism, genetics, cell division. One year of high school chemistry is strongly recommended.",
            prereqs: []
          },
          {
            code: "BIO 1201",
            title: "Biology Laboratory",
            credits: 1,
            description:
              "Laboratory and field experience emphasizing scientific method, scientific writing, Mendelian genetics, vertebrate anatomy and animal and plant diversity. Offered fall and winter semester.",
            prereqs: ["BIO 1200 or BIO 1300 with a grade of (C) or higher"]
          },
          {
            code: "EGR 1400",
            title: "Computer Problem Solving in Engineering",
            credits: 4,
            description: "General methods of problem solving and principles of algorithmic design using a high-level language such as Visual C#. Introduction to MATLAB. Applications will be drawn from problems in mechanical, electrical and computer engineering and computer science. Offered fall and winter.",
            prereqs: ["MTH 1554 or equivalent"]
          },
          {
            code: "MTH 1554",
            title: "Calculus I",
            credits: 4,
            description: "A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus.",
            prereqs: ["MTH 1441 with a grade of (C) or higher, or MH 1331 and MTH 1332, each with a grade of (C) or higher or placement"]
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
            code: "EGR 1200",
            title: "Engineering Graphics and CAD",
            credits: 4,
            description:
              "An introduction to the techniques for creating solid models of engineering designs. Topics include three-dimensional modeling of parts and assemblies, visualization, orthographic project views and layouts, auxiliary, sectional, and cutout views, exploded views, dimensioning and tolerancing, bill of materials and computer-generated design documentation. Offered fall and winter.",
            prereqs: ["MTH 1441 or (MTH 1331 and MTH 1332) or placement"]
          },
          {
            code: "CSI 2400",
            title: "Introduction to Electrical and Computer Engineering",
            credits: 4,
            description:
              "An introduction to the fundamentals of electrical and computer engineering, DC and AC circuits, digital logic circuits, combinational logic design, sequential circuits, introduction to electronics, operational amplifiers and DC electromechanical machines. With laboratory. Offered fall and winter.",
            prereqs: ["MTH 1555 and PHY 1510 and (CSI 1420 or EGR 1400)"]
          },
          {
            code: "MTH 1555",
            title: "Calculus II",
            credits: 4,
            description:
              "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "PHY 1510",
            title: "Introductory Physics I",
            credits: 4,
            description: "Classical mechanics and thermodynamics. For science, mathematics and engineering students.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          }
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "APM 2555",
            title: "Introduction to Differential Equations with Matrix Algebra",
            credits: 4,
            description:
              "Introduction to ordinary differential equations, Laplace transforms, linear systems, matrices, vectors, independence, Eigenvalues and eigenvectors, and applications. Students cannot receive credit for both APM 2555 and APM 2559.",
            prereqs: ["MTH 1555 with a grade of (C) or higher"]
          },
          {
            code: "CHM 1440",
            title: "General Chemistry I",
            credits: 4,
            description: "States of matter, atomic structure, bonding and molecular structure, chemical reactions. Recommended preparation is three years high school mathematics and one year of high school chemistry",
            prereqs: ["Score of 22 or higher on ACT mathematics exam or score of 550 or higher on SAT mathematics exam or MTH 0662 with a grade of C or better or equivalent or placement above MTH 0662 "]
          },
          {
            code: "CHM 1470",
            title: "General Chemistry Laboratory I",
            credits: 4,
            description: "Experimental investigation of chemical phenomena and measurements.  Accompanies CHM 1440 but does not have to be taken concurrently.  May be taken with permission by students who have completed CHM 1430.",
            prereqs: ["CHM 1440"]
          },
          {
            code: "EGR 2600",
            title: "Introduction to Industrial and Systems Engineering",
            credits: 4,
            description: "Overview of industrial and systems engineering: perspectives, tools and models. Indepth coverage of probability and statistics in engineering: density and distribution functions, population and sampling distributions, confidence intervals, hypothesis testing and introduction to discrete-event simulation. Offered fall and winter.",
            prereqs: ["MTH 1555"]
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
            code: "EGR 2500",
            title: "Introduciton to Thermal Engineering",
            credits: 4,
            description: "Introduction to the fundamentals of classical thermodynamics and heat transfer, first and second laws of thermodynamics, thermodynamic property relationships;, application to engineering systems and processes, introduction to conduction, convection and radiation, steady 1-D conduction and extended surfaces and lumped capacitance method. Offered fall and winter.",
            prereqs: ["CHM 1440, PHY 1510, APM 2555, and EGR 1400"]
          },
          {
            code: "EGR 2800",
            title: "Design and Analysis of Electromechanical System",
            credits: 4,
            description: "Design, analysis, and testing of electromechanical systems; static equilibrium of particles and rigid bodies; introduction to microprocessors; team design project dealing with technical, economic, safety, environmental, and social aspects of a real-world engineering problem; written, oral and visual communication. With laboratory. Offered fall and winter.",
            prereqs: ["EGR 1200, EGR 2400, APM 2555 or (APM 2559 and MTH 2775), EGR 2500, EGR 2600"]
          },
          {
            code: "MTH 2554",
            title: "Multivariable Calculus",
            credits: 4,
            description: "A study of vectors, polar coordinates, three-dimensional geometry, differential calculus of functions of several variables, exact differential equations, multiple integrals, line and surface integrals and vector fields.",
            prereqs:["MTH 1555 with a grade of (C) or higher"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          },
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "CHM 1450",
            title: "General Chemistry II",
            credits: 4,
            description: "Chemical reactions, kinetics, equilibrium, acid-base chemistry, thermodynamics, and electrochemistry.",
            prereqs: ["CHM 1440 with a grade of (C) or higher"]
          },
          {
            code: "CHM 1480",
            title: "General Chemistry Laboraty II",
            credits: 4,
            description: "Training in basic techniques of chemistry experimentation.",
            prereqs: ["CHM 1440 and CHM 1470, each with a grade of (C) or higher, CHM 1450"]
          },
          {
            code: "BE 3150",
            title: "Bioinstrumentation",
            credits: 4,
            description: "An introduction to the fundamental aspects of instrumentation for biomedical signals, using specific applications to demonstrate these principles.  Proper instrumentation designs and patient safety are emphasized. Offered winter.",
            prereqs: ["Major Standing, EGR 2400"]
          },
          {
            code: "BE 3899",
            title: "Introduction to Engineering Biology",
            credits: 4,
            description: "This course is a survey of topics and careers in engineering biology. It aims to help students choose their track for the remainder of the program and gain a general view of the field. Topics include bioinformatics, computational biology, electronic devices, biosensors, biomedical and biophysical engineering, and quantitative biology.",
            prereqs: ["Major Standing, EGR 2400"]
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
            code: "BIO 2600",
            title: "Human Physiology",
            credits: 4,
            description: "Detailed study of general physiological principles and mechanisms with emphasis on systemic physiology. Normal physiology of individual organ systems will be explored, with stress on the role each plays in the human homeostatic balance. Offered fall and winter semesters.",
            prereqs: ["BIO 1200 with a grade of (C) or higher"]
          },
          {
            code: "BIO 3621",
            title: "Physiology Laboratory",
            credits: 1,
            description: "Laboratory exercises illustrating the principles of human physiology through experimental measurements and computer simulations.",
            prereqs: ["BIO 2600, BIO 2640, or BIO 3620 with a grade of (C) or higher"]
          },
          {
            code: "CHM 2340",
            title: "Organic Chemistry I",
            credits: 4,
            description: "Introduction to the structure, properties and reactivity of organic compounds. ",
            prereqs: ["CHM 1450 and CHM 1480, each with a grade of (C) or higher"]
          },
          {
            code: "PHY 1520",
            title: "Introductory Physics II",
            credits: 4,
            description: "Sound, light, electricity and magnetism.",
            prereqs: ["PHY 1510, MTH 1555"]
          },
          {
            code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
          }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "----",
            title: "Professional Track",
            credits: 4,
            description: "Professional track ",
            prereqs: [""]
          },
          {
            code: "----",
            title: "Professional Track",
            credits: 4,
            description: "Professional track ",
            prereqs: [""]
          },
          {
            code: "----",
            title: "Professional Track",
            credits: 4,
            description: "Professional track ",
            prereqs: [""]
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
            code: "BE 4999",
            title: "Research Project/Capstone Design",
            credits: 4,
            description: "Students integrate multi-disciplinary knowledge and the various skills in laboratory work and communication to solve problems using engineering biology principles under real world constraints. Students will present project proposals to the faculty advisory panel, demonstrate feasibility, implement the projects, present the final projects, and compete for best project.",
            prereqs: ["Major Standing and senior status"]
          },
          {
            code: "PHY 3250",
            title: "Biological Physics",
            credits: 4,
            description: "Applications of physics to biology, including biomechanics, fluid dynamics, statistical mechanics, diffusion, bioelectricity, biomagnetism, feedback and control.",
            prereqs: ["PHY 1020 or PHY 1520 and MTH 1555 recommended"]
          },
          {
            code: "----",
            title: "Professional Track",
            credits: 4,
            description: "Professional track ",
            prereqs: [""]
          },
        ]
      }
    ]
  },
  
 "it": {
    name: "Information Technology",
    description:"The program leading to a Bachelor of Science degree in Information Technology (IT) equips students for a successful career in IT and graduate studies in diverse disciplines. Emphasizing technical foundations, problem-solving skills, and hands-on practice, the curriculum equips students to create and enhance IT solutions using both established and emerging technologies. Covering key areas such as programming, web systems, networking, human-computer interaction, databases, information management, and project management, the program incorporates a strong focus on professional development, including technical communication, ethical considerations, and teamwork. The Bachelor of Science in Information Technology program is accredited by the Computing Accreditation Commission of ABET.",
    requiredCredits: 128,
    years: [
      {
        title: "Freshman Year",
        fall:[
          {code:"CSI 1320",title:"Introduction to Python Programming and Unix",credits:4,description:"Algorithmic programming using Python. Topics include data storage and manipulation, binary numbers, bitwise operations, control structures, and functions. Introduction to fundamental data structures and script programming. Basic Unix commands and Unix utilities will be covered. With laboratory. Students can receive credit for only one of CSI 1300, CSI 1320, CSI 1420, or EGR 1400. Intended for Information Technology majors and minors. (Formerly CSI 1310).",prereqs: ["MTH0662"]},
          {code:"MTH 1554",title:"Calculus I",credits:4,description:"A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus.",prereqs: ["MTH 1441 with a grade of (C) or higher, or MTH 1331 and MTH 1332, each with a grade of (C) or higher or placement"]},
          {code: "GenEd",title: "General Education",credits: 4,description: "General education credit.",prereqs: []},
          {code: "GenEd",title: "General Education",credits: 4,description: "General education credit.",prereqs: []},
        ],
        winter:[
          {code:"CSI 1210",title:"Problem Solving Using VBA and Excel",credits:4,description:"Introduction to problem solving and programming using Excel and VBA. Students will be able to demonstrate knowledge of common Excel functions, and tools like charts and tables, in addition to writing VBA for Excel and one other MS Office application. Automation of tasks will be accomplished through the use of Excel macros, VBA code, and an understanding of programming structures such as loops and decisions, variables and event driven procedures. Students can receive credit for CSI 1200 or CSI 1210, but not both. Intended for Information Technology majors and minors.",prereqs:[]},
          {code:"CSI 2300",title:"Object-Oriented Computing",credits:4,description:"Introduction to object-oriented computer programming using a high-level programming language such as Java. Classes, member functions, inheritance, polymorphism and operator overloading. Design methodologies and introduction to software engineering principles and practices. Basic data structures, algorithms and event driven programming concepts are introduced. With laboratory.",prereqs:["EGR 1400 or CSI 1300 or CSI 1320 or CSI 1420 with a grade of C or higher"]},
          {code:"STA 2221",title:"Introduction to Statistical Methods",credits:4,description:"Introduction to statistical thinking and applications to industrial and similar processes. Descriptive statistics, distributions, and probability models useful in process control and systems reliability; confidence intervals, hypothesis testing, regression, and basic experimental design. Statistical concepts to be reinforced with case studies promoting problem solving skills and statistical thinking. Mathematics and statistics majors cannot use STA 2221 to replace STA 2226.",prereqs:["MTH 1221 with a grade of (C) or higher; or MTH 1441 with a grade of (C) or higher; or MTH 1331 with a grade of (C) or higher; or placement"]},
          {code: "GenEd",title: "General Education",credits: 4,description: "General education credit.",prereqs: []}
        ]
      },
      {
        title:"Sophomore Year",
        fall:[
          {code:"APM 1663",title:"Mathematics for Information Technology",credits:4,description:"Systems of linear equations, matrix algebra and linear transformations. Elementary combinatorics, recursion and induction, sets and relations. Enrollment is limited to students in the Bachelor of Science in Information Technology program or with permission of the department. APM 1663 cannot be used to replace APM 2663 or MTH 2775.",prereqs:["MTH 1222 with a grade of (C) or higher or MTH 1554 with a grade of (C) or higher"]},
          {code:"CSI 2470",title:"Introduction to Computer Networks",credits:4,description:"An introduction to fundamental concepts for design and analyses of computer networks. Topics covered include the physical layer, network protocols, Local Area Networks, Internet, wireless and mobile networks, network security, and socket programming. With laboratory.",prereqs:["CSI 1320 or CSI 1420"]},
          {code: "GenEd",title: "General Education",credits: 4,description: "General education credit.",prereqs: []},
          {code: "GenEd",title: "General Education",credits: 4,description: "General education credit.",prereqs: []}
        ],
        winter:[
          {code:"CSI 2440",title:"Computer Systems",credits:4,description:"Introduction to computer hardware and operating systems. Hardware topics include processors, GPU’s, memory, secondary storage devices, and other I/O devices and interfaces. Operating systems topics include file systems, memory management, and process management.",prereqs:["CSI 1300 or CSI 1320 or CSI 1420"]},
          {code:"CSI 2999",title:"Sophomore Project",credits:2,description:"A team-oriented project work consisting of a small project to build skills in needs assessment, group problem solving, and written and oral technical presentations. ",prereqs:["CSI 2300"]},
          {code:"Science Elective",title:"Approved science elective",credits:4,description:"",prereqs:[]},
          {code: "GenEd",title: "General Education",credits: 4,description: "General education credit.",prereqs: []},
          {code: "GenEd",title: "General Education",credits: 4,description: "General education credit.",prereqs: []}
        ]
      },
      {
        title:"Junior Year",
        fall:[
          {code:"CSI 3150",title:"Web and Mobile Systems",credits:4,description:"An introduction to web and mobile systems. Development of interactive web systems using front-end technologies such as HTML, CSS and JavaScript during the first half of the semester. A cross platform JavaScript framework, such as React Native along with React Library, for mobile apps development during the second half. Formerly CSI 2520. With laboratory.",prereqs:["CSI 2300"]},
          {code:"CSI 3210",title:"User Experience Design",credits:4,description:"User experience is concerned with a user’s total experience when interacting with digital products. The course considers ways to design digital products that are sensitive to user needs and contexts of use. It introduces hands-on learning of contemporary methods and tools for designing the user experience of digital products.",prereqs:[]},
          {code:"CSI 3480",title:"Security and Privacy in Computing",credits:4,description:"An introduction to principles and practices of security and privacy. Topics include an introduction to cryptography, host/network exploits and countermeasures, information risk assessment, access control, threat and incident management, information privacy concepts, privacy requirements, privacy-enhancing technologies, information privacy management, and legal and regulatory requirements. With laboratory.",prereqs:["CSI 1320 or CSI 1420"]},
          {code:"",title:"Communication and leadership",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"CSI 3370",title:"Software Engineering and Practice",credits:4,description:"Introduction to software engineering and practice. Topics include software process models, project and software management, requirements analysis, architecture modeling, implementation and system integration, quality assurance, and testing. The course includes a team project.",prereqs:["CSI 2300"]},
          {code:"CSI 3450",title:"Database Design and Implementation",credits:4,description:"Introduction to the design, implementation and management of database systems. Topics include planning, designing, and implementing a practical database using a relational database server for an application utilizing entity relationship diagrams, normal forms, and understanding relational database schemas. Advanced topics include concurrency control, query optimization, and introduction to database systems administration. The course includes a semester-long team project. ",prereqs:["CSI 2290 or CSI 2300"]},
          {code:"CSI 3620",title:"Data Structures and Algorithms",credits:4,description:"Introduction to data abstraction and computer algorithms. The basic data structures in computer science, including stacks, queues, lists, and trees are covered. Core algorithmic concepts including divide-and-conquer, dynamic programming, and greedy and graph algorithms are discussed. Students can receive credits for CSI 3610 or CSI 3620, but not both. Intended for Information Technology majors.",prereqs:["CSI 1320 or CSI 2300 or CSI 2330"]},
          {code:"",title:"Professional elective",credits:4,description:"",prereqs:[]}
        ]
      },
      {
        title:"Senior Year",
        fall:[
          {code:"CSI 3660",title:"System Administration",credits:4,description:"This course teaches the skills necessary to analyze, deploy, manage and troubleshoot Linux servers. Topics include user authentication management, system configuration and management, periodic tasks automation, data backup techniques, server deployments, system maintenance and performance analysis, and security aspects of Linux systems. ",prereqs:["CSI 1320 or CSI 1420 "]},
          {code:"",title:"Professional training",credits:2,description:"",prereqs:[]},
          {code:"",title:"Professional elective",credits:4,description:"",prereqs:[]},
          {code:"",title:"Flexible elective",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"CSI 4160",title:"Integrated Computing Systems",credits:4,description:"The course integrates various system components such as databases, web servers, user APIs, and cloud technologies and services. Topics include integration of various devices with web servers and cloud services. Students will gain hands-on experience in developing and integrating each of these system components with exposure to appropriate hardware, software, and simulation platforms. Cross-listed with CSI 5160.",prereqs:["CSI 2470, CSI 3150, CSI 3450"]},
          {code:"CSI 4430",title:"IT Project Management",credits:4,description:"Principles, practices, and tools used in planning and implementing IT projects involving hardware, software, and networks to create a product, service, or result. Using the framework of IT project life cycle, the course covers various aspects of project initiation, planning, scheduling, monitoring, and quality control. Selecting and procuring IT systems, project team management, cost and effort estimation, risk management, and mini-case studies leading to a real-world team project. Formerly CSI 4410. *Approved Slash Course. Credit can only be earned for CSI 4430 or CSI 4530.",prereqs:["CSI 3370 "]},
          {code:"CSI 4999",title:"Senior Capstone Project",credits:4,description:"A team-oriented senior project to synthesize the knowledge and skills gained in the CS/IT curricula. Written and oral reports are required in addition to a working demo.",prereqs:["CSI 3370 and (CSI 3450 or CSI 4140  or CSI 4170  or CSI 4600  or CSI 4700 ) and (CSI 3150 or CSI 3210  or CSI 3610 or CSI 3620 or CSI 3640 or CSI 4180  or CSI 4460  or CSI 4480  or CSI 4810 )"]},
          {code:"",title:"Professional elective",credits:4,description:"",prereqs:[]}
        ]
      }
    ]
  },
  
  "mre":{
    name:"Mechatronics and Robotics Engineering",
    description:"The undergraduate program in Mechatronics and Robotics Engineering, B.S.E. will provide educational experiences aimed toward producing graduates who will become successful practitioners in an engineering or related career, pursue graduate study and/or continuing education opportunities in electrical engineering, computer engineering, or other related disciplines, demonstrate leadership and excel in multidisciplinary and multicultural environments, and function as responsible members of society with an awareness of the ethical and social ramifications of their work.",
    requiredCredits:128,
    years: [
      {
        title:"Freshman Year",
        fall:[
          {code:"CHM 1440",title:"General Chemistry I",credits:4,description:"States of matter, atomic structure, bonding and molecular structure, chemical reactions. Recommended preparation is three years high school mathematics and one year of high school chemistry.",prereqs:["Score of 22 or higher on ACT mathematics exam or score of 550 or higher on SAT mathematics exam or MTH 0662 with a grade of C or better or equivalent or placement above MTH 0662 "]},
          {code:"EGR 1200",title:"Engineering Graphics and CAD",credits:1,description:"An introduction to the techniques for creating solid models of engineering designs. Topics include three-dimensional modeling of parts and assemblies, visualization, orthographic project views and layouts, auxiliary, sectional, and cutout views, exploded views, dimensioning and tolerancing, bill of materials and computer-generated design documentation. Offered fall and winter. ",prereqs:["MTH 1441 or (MTH 1331 and MTH 1332) or placement"]},
          {code:"EGR 1400",title:"Computer Problem Solving in Engineering",credits:4,description:"General methods of problem solving and principles of algorithmic design using a high-level language such as Visual C#. Introduction to MATLAB. Applications will be drawn from problems in mechanical, electrical and computer engineering and computer science. Offered fall and winter. ",prereqs:["MTH 1554 or equivalent"]},
          {code:"MTH 1554",title:"Calculus I",credits:4,description:"A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus. ",prereqs:["MTH 1441 with a grade of (C) or higher, or MTH 1331 and MTH 1332, each with a grade of (C) or higher or placemen"]},
          {code:"",title:"",credits:4,description:"",prereqs:[]},
          {code:"WRT/GenEd",title:"WRT or General Education",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"EGR 2400",title:"Introduction to Electrical and Computer Engineering",credits:4,description:"An introduction to the fundamentals of electrical and computer engineering, DC and AC circuits, digital logic circuits, combinational logic design, sequential circuits, introduction to electronics, operational amplifiers and DC electromechanical machines. With laboratory. Offered fall and winter.",prereqs:["MTH 1554, Pre/Corequisite(s): MTH 1555 and PHY 1510 and (CSI 1420 or EGR 1400)"]},
          {code:"MTH 1555",title:"Calculus II",credits:4,description:"A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",prereqs:["MTH 1554 with a grade of (C) or higher"]},
          {code:"PHY 1510",title:"Introductory Physics I",credits:4,description:"Classical mechanics and thermodynamics. For science, mathematics and engineering students.",prereqs:["MTH 1554"]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ]
      },
      {
        title:"Sophomore Year",
        fall:[
          {code:"APM 2555",title:"Introduction to Differential Equations with Matrix Algebra",credits:4,description:"Introduction to ordinary differential equations, Laplace transforms, linear systems, matrices, vectors, independence, Eigenvalues and eigenvectors, and applications. Students cannot receive credit for both APM 2555 and APM 2559.",prereqs:["MTH 1555 with a grade of (C) or higher"]},
          {code:"ECE 2005",title:"Electric Circuits",credits:4,description:"Modeling and analysis of circuits with dependent sources; non-ideal operational amplifiers. Transient and forced responses in RC, RL and RLC circuits. Series and parallel resonant circuits. AC power, three-phase circuits, magnetically coupled circuits. Wye-delta transforms. Introduction to frequency response. Use of PSPICE. With laboratory.",prereqs:["EGR 2400, Pre/Corequisite(s): APM 2555 or (APM 2559 and MTH 2775)"]},
          {code:"PHY 1520",title:"Introductory Physics II",credits:4,description:"Sound, light, electricity and magnetism. ",prereqs:["PHY 1510, Pre/Corequisite(s): MTH 1555"]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"EGR 2500",title:"Introduction to Thermal Engineering",credits:4,description:"Introduction to the fundamentals of classical thermodynamics and heat transfer, first and second laws of thermodynamics, thermodynamic property relationships;, application to engineering systems and processes, introduction to conduction, convection and radiation, steady 1-D conduction and extended surfaces and lumped capacitance method. Offered fall and winter.",prereqs:["CHM 1440, PHY 1510, and EGR 1400, Pre/Corequisite(s): APM 2555 or (APM 2559 and MTH 2775)"]},
          {code:"EGR 2600",title:"Introduction to Industrial and Systems Engineering",credits:4,description:"Overview of industrial and systems engineering: perspectives, tools and models. Indepth coverage of probability and statistics in engineering: density and distribution functions, population and sampling distributions, confidence intervals, hypothesis testing and introduction to discrete-event simulation. Offered fall and winter.",prereqs:["MTH 1555"]},
          {code:"EGR 2800",title:"Design and Analysis of Electromechanical Systems",credits:4,description:"Design, analysis, and testing of electromechanical systems; static equilibrium of particles and rigid bodies; introduction to microprocessors; team design project dealing with technical, economic, safety, environmental, and social aspects of a real-world engineering problem; written, oral and visual communication. With laboratory. Offered fall and winter.",prereqs:["EGR 1200, EGR 2400, APM 2555 or (APM 2559 and MTH 2775), Pre/Corequisite(s): EGR 2500, EGR 2600 "]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ]
      },
      {
        title:"Junior Year",
        fall:[
          {code:"ECE 3540",title:"Introduction to ROS",credits:4,description:"Hands-on experience in the development of robotic applications. Students will obtain experience on developing and implementing software that enables a robot to: obtain sensory information, process the data, perceive the environment, create a plan for the robot to perform, and execute the plan.",prereqs:[]},
          {code:"",title:"Required Professional Subject Choice 1 of 2",credits:4,description:"",prereqs:[]},
          {code:"ECE 3204",title:"Signals and Systems",credits:4,description:"Basic signals, average value, average power and energy. Laplace transform and inverse Laplace transform, and transfer function concept and approach in the analysis of electrical and mechanical lumped-parameter linear systems. Systems modeling and analysis in Laplace and differential equation domains. Natural and forced responses of linear time-invariant systems and concept of convolution. Fourier analysis of signals and systems: Fourier series and Fourier transform, power spectral density, energy spectral density, band width and filters. ",prereqs:["ECE 2005 "]},
          {code:"MTH 2554",title:"Multivariable Calculus",credits:4,description:"A study of vectors, polar coordinates, three-dimensional geometry, differential calculus of functions of several variables, exact differential equations, multiple integrals, line and surface integrals and vector fields. ",prereqs:["MTH 1555 with a grade of (C) or higher"]}
        ],
        winter:[
          {code:"",title:"Required Professional Subject Choice 2 of 2",credits:4,description:"",prereqs:[]},
          {code:"",title:"Professional Elective (Depth or Concentration 1 of 6)",credits:4,description:"",prereqs:[]},
          {code:"",title:"Professional Elective (Depth or Concentration 2 of 6)",credits:4,description:"",prereqs:[]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ]
      },
      {
        title:"Senior Year",
        fall:[
          {code:"",title:"Professional Elective (Depth or Concentration 3 of 6)",credits:4,description:"",prereqs:[]},
          {code:"",title:"Professional Elective (Depth or Concentration 4 of 6)",credits:4,description:"",prereqs:[]},
          {code:"",title:"Mathematics and Sciences elective",credits:4,description:"",prereqs:[]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"",title:"Professional Elective (Depth or Concentration 5 of 6)",credits:4,description:"",prereqs:[]},
          {code:"",title:"Professional Elective (Depth or Concentration 6 of 6)",credits:4,description:"",prereqs:[]},
          {code:"ECE 4999",title:"Senior Design",credits:4,description:"Capstone design projects selected from a wide variety of areas related to electrical and computer engineering. Develops system approach to design: preparation of specifications, scheduling, modeling, simulations, and technological, financial and environmental aspects. Multi-disciplinary teamwork is emphasized. Prototyping, testing and completion of the project are required. Presentation of results required.",prereqs:["(ECE 3100 or ECE 3204) and (ECE 3600 or ECE 3720) and any 4000 level ECE course"]},
          {code:"GenEd",title:"General education",credits:4,description:"",prereqs:[]}
        ]
      }
    ]
  },
  
  "mechanical-engineering":{
    name:"Mechanical Engineering",
    description:"The field of mechanical engineering offers career opportunities in areas such as design, analysis, test development, research and the manufacturing of various products. Oakland University’s mechanical engineering program provides students with a foundation in the fundamental concepts and principles associated with mechanics of solids, thermodynamics, fluid and thermal energy, materials, manufacturing, design of mechanical systems, electrical circuits, computer programming and software utilization.   A strong laboratory experience and the utilization of instrumentation and computer simulation tools are interwoven through the curriculum. The program also provides numerous engineering design experiences. The BSE in Mechanical Engineering program is accredited by the Engineering Accreditation Commission of ABET, https://www.abet.org, under the General Criteria and the Mechanical Engineering Program Criteria.",
    requiredCredits:128,
    years: [
      {
        title:"Freshman Year",
        fall:[
          {code:"CHM 1440",title:"General Chemistry I",credits:4,description:"States of matter, atomic structure, bonding and molecular structure, chemical reactions. Recommended preparation is three years high school mathematics and one year of high school chemistry.",prereqs:["Score of 22 or higher on ACT mathematics exam or score of 550 or higher on SAT mathematics exam or MTH 0662 with a grade of C or better or equivalent or placement above MTH 0662 "]},
          {code:"EGR 1200",title:"Engineering Graphics and CAD",credits:1,description:"An introduction to the techniques for creating solid models of engineering designs. Topics include three-dimensional modeling of parts and assemblies, visualization, orthographic project views and layouts, auxiliary, sectional, and cutout views, exploded views, dimensioning and tolerancing, bill of materials and computer-generated design documentation. Offered fall and winter.",prereqs:["MTH 1441 or (MTH 1331 and MTH 1332) or placement"]},
          {code:"EGR 1400",title:"Computer Problem Solving in Engineering",credits:4,description:"General methods of problem solving and principles of algorithmic design using a high-level language such as Visual C#. Introduction to MATLAB. Applications will be drawn from problems in mechanical, electrical and computer engineering and computer science. Offered fall and winter.",prereqs:["MTH 1554 or equivalent"]},
          {code:"MTH 1554",title:"Calculus I",credits:4,description:"A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus.",prereqs:["MTH 1441 with a grade of (C) or higher, or MTH 1331 and MTH 1332, each with a grade of (C) or higher or placement"]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"EGR 2400",title:"Introduction to Electrical and Computer Engineering",credits:4,description:"An introduction to the fundamentals of electrical and computer engineering, DC and AC circuits, digital logic circuits, combinational logic design, sequential circuits, introduction to electronics, operational amplifiers and DC electromechanical machines. With laboratory. Offered fall and winter.",prereqs:["MTH 1554, Pre/Corequisite(s): MTH 1555 and PHY 1510 and (CSI 1420 or EGR 1400)"]},
          {code:"MTH 1555",title:"Calculus II",credits:4,description:"A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",prereqs:["MTH 1554 with a grade of (C) or higher"]},
          {code:"PHY 1510",title:"Introductory Physics I",credits:4,description:"Classical mechanics and thermodynamics. For science, mathematics and engineering students.",prereqs:["MTH 1554"]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ]
      },
      {
        title:"Sophomore Year",
        fall:[
          {code:"APM 2555",title:"Introduction to Differential Equations with Matrix Algebra",credits:4,description:"Introduction to ordinary differential equations, Laplace transforms, linear systems, matrices, vectors, independence, Eigenvalues and eigenvectors, and applications. Students cannot receive credit for both APM 2555 and APM 2559. ",prereqs:["MTH 1555 with a grade of (C) or higher"]},
          {code:"EGR 2500",title:"Introduction to Thermal Engineering",credits:4,description:"Introduction to the fundamentals of classical thermodynamics and heat transfer, first and second laws of thermodynamics, thermodynamic property relationships;, application to engineering systems and processes, introduction to conduction, convection and radiation, steady 1-D conduction and extended surfaces and lumped capacitance method. Offered fall and winter.",prereqs:["CHM 1440, PHY 1510, and EGR 1400, Pre/Corequisite(s): APM 2555 or (APM 2559 and MTH 2775)"]},
          {code:"PHY 1520",title:"Introductory Physics II",credits:4,description:"Sound, light, electricity and magnetism.",prereqs:["MTH 1555"]},
          {code:"GenEd",title:"General Education ",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"EGR 2600",title:"Introduction to Industrial and Systems Engineering",credits:4,description:"Overview of industrial and systems engineering: perspectives, tools and models. Indepth coverage of probability and statistics in engineering: density and distribution functions, population and sampling distributions, confidence intervals, hypothesis testing and introduction to discrete-event simulation. Offered fall and winter.",prereqs:["MTH 1555"]},
          {code:"EGR 2800",title:"Design and Analysis of Electromechanical Systems",credits:4,description:"",prereqs:["EGR 1200, EGR 2400, APM 2555 or (APM 2559 and MTH 2775), Pre/Corequisite(s): EGR 2500, EGR 2600 "]},
          {code:"MTH 2554",title:"Multivariable Calculus",credits:4,description:"A study of vectors, polar coordinates, three-dimensional geometry, differential calculus of functions of several variables, exact differential equations, multiple integrals, line and surface integrals and vector fields. ",prereqs:[]},
          {code:"GenEd",title:"General Education ",credits:4,description:"",prereqs:[]}
        ]
      },
      {
        title:"Junior Year",
        fall:[
          {code:"ME 3200",title:"Engineering Mechanics",credits:4,description:"Dynamics of particles and rigid bodies: kinematics, Newton’s Second Law, work and energy, linear and angular impulse and momentum. With laboratory. Offered fall and winter. ",prereqs:["EGR 2800 with a grade of (C) or higher"]},
          {code:"ME 3500",title:"Introduction to Fluid and Thermal Energy Transport",credits:4,description:"The fundamentals of fluid mechanics and heat transfer; fluid statics, conservation of mass and momentum; inviscid flow; internal viscous flow analysis; introduction to boundary layer theory; heat diffusion equation; dimensionless correlations of convection heat transfer, applications to engineering problems. With laboratory; includes experiment design. Offered fall and winter. ",prereqs:["EGR 2500 with a grade of (C) or higher, MTH 2554, Pre/Corequisite(s): EGR 2800"]},
          {code:"ME 3700",title:"Properties of Materials",credits:4,description:"The atomic, molecular and crystalline structure of solids, including a description of x-ray analysis, metallography and other methods of determining structure, correlation of structure with the electric, magnetic and mechanical properties of solids. With laboratory. Offered fall and winter. ",prereqs:["CHM 1440 and PHY 1520"]},
          {code:"GenEd",title:"General Education ",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"ME 3250",title:"Mechanics of Materials",credits:4,description:"Introduction to the mechanics of deformable bodies: distribution of stress and strain in beams, shafts, columns, pressure vessels and other structural elements, factor of safety, yield criteria of materials with applications to design. With laboratory. Offered fall and winter.",prereqs:["EGR 2800 with a grade of (C) or higher"]},
          {code:"ME 3300",title:"Computer-Aided Design",credits:3,description:"Use of engineering software in design and analysis such as: solid modeling of machine parts, projection views layout, parametric and knowledge-based design, assembly design, sheet and metal design, bill of materials, structure design, introduction of finite element method, engineering optimization, space analysis and clash detection, mechanism and kinematics of assemblies. Offered fall and winter.",prereqs:["ME 3200, ME 3250"]},
          {code:"",title:"Professional Elective",credits:4,description:"",prereqs:[]},
          {code:"",title:"Approved Math/Science elective",credits:4,description:"",prereqs:[]}
        ]
      },
      {
        title:"Senior Year",
        fall:[
          {code:"ME 4200",title:"Vibrations and Controls",credits:4,description:"Linear free and forced response of one- and multiple-degree freedom systems. Equations of motion of discrete systems. Vibration isolation, rotating imbalance and vibration absorbers. Transfer function and state-space approaches to modeling dynamic systems. Time and frequency domain and analysis and design of control systems. Use of MATLAB. Offered fall and winter.",prereqs:["ME 3200, MTH 2554, APM 2555 or (APM 2559 and MTH 2775)"]},
          {code:"ME 4500",title:"Energy Systems Analysis and Design",credits:4,description:"The analysis and design of thermodynamic systems. Applications include thermodynamic cycles for power, thermodynamics of non-reacting mixtures including psychrometry, concepts of available energy and application to process/system optimization, the thermodynamics of reacting mixtures, including chemical equilibrium concepts, applied to combustion systems. With project. Offered fall and winter. ",prereqs:["EGR 2500 with a grade of (C) or higher"]},
          {code:"",title:"Professional Elective",credits:4,description:"",prereqs:[]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ],
        winter:[
          {code:"ME 4300",title:"Mechanical Systems Design",credits:4,description:"Study of systems involving mechanical elements. Includes safety, stress, strength, deflection economic and social considerations, optimization criteria and strategies. Analysis and design of fasteners, springs, welds, bearings, power transmitting elements and complex structures subjected to static and/or dynamic loads. With project. Offered fall and winter. ",prereqs:["ME 3200, ME 3300, ME 3700, ME 3250"]},
          {code:"ME 4999",title:"Senior Mechanical Engineering Design Project",credits:4,description:"Multi-disciplinary team experience in engineering design, emphasizing realistic constraints such as safety, economic factors, reliability, aesthetics, ethics and societal impact. Projects will be supervised by engineering faculty. Generally offered fall, winter.",prereqs:["ME 3200, ME 3250, ME 3300, ME 3500, ME 3700"]},
          {code:"",title:"Professional Elective",credits:4,description:"",prereqs:[]},
          {code:"GenEd",title:"General Education",credits:4,description:"",prereqs:[]}
        ]
      }
    ]
  },
  
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
            code: "CSI 1420",
            title: "Introduction to C Programming and Unix",
            credits: 4,
            description:
              "Introduction to programming and problem solving using C and Unix. The topics include fundamentals of C programming and basic Unix commands including file organization, user commands, and utilities in Unix and creating, editing, executing, and debugging C programs. Introduction to shell programming.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "WRT 1050",
            title: "Composition I",
            credits: 4,
            description: "A course emphasizing the rhetorical and stylistic demands of college writing through focus on experiential, analytical, and expressive writing. Students learn to generate, organize and develop their ideas and to make choices as writers that are appropriate to the rhetorical situation",
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
            code: "PHY 1510 and PHY 1100",
            title: "Introductory Physics I with Lab",
            credits: 5,
            description: "Classical mechanics and thermodynamics. For science, mathematics and engineering students. PHY 1510 and PHY 1100 together satisfy the university general education requirement in the natural science and technology knowledge exploration area.",
            prereqs: []
          },
            {
               code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []  
            }
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "CSI 2310",
            title: "Data Structures",
            credits: 4,
            description:
              "This course covers data structures using object oriented programming. The fundamental data structures in computer science, including stacks, queues, lists and trees are covered in detail. Concepts of design, analysis and verification are discussed in the context of abstract data types. Examples of applications taken from numeric and symbolic domains are used.",
            prereqs: ["CSI 2300"]
              
          },
          {
            code: "EGR 2400",
            title: "Introduction to Electrical and Computer Engineering",
            credits: 4,
            description: "An introduction to the fundamentals of electrical and computer engineering; DC and AC circuits, digital logic circuits; combinational logic design; sequential circuits, introduction to electronics, operational amplifiers, DC electromechanical machines. With laboratory. Offered fall, winter.",
            prereqs: ["CSI 1420"]
          },
          {
            code: "PHY 1620",
            title: "Fundamentals of Physics II",
            credits: 4,
            description: "Sound, light, electricity and magnetism. This course has common lectures with PHY 1520. Satisfies the university general education requirement in the knowledge applications integration area. Prerequisite for knowledge applications integration: completion of the general education requirement in the natural science and technology knowledge exploration area.",
            prereqs: ["PHY 1510, MTH 1555"]
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
            code: "MTH 2775",
            title: "Linear Algebra",
            credits: 4,
            description: "Study of general vector spaces, linear systems of equations, linear transformations and compositions, Eigenvalues, eigenvectors, diagonalization, modeling and orthogonality. Provides a transition to formal mathematics.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "CSI 2470",
            title: "Introduction to Computer Networks",
            credits: 4,
            description: "An introduction to fundamental concepts for design and analyses of computer networks. Topics covered include the physical layer, network protocols, Local Area Networks, Internet, wireless and mobile networks, network security, and socket programming..",
            prereqs: ["CSI 2300"]
          },
          {
            code: "CSI 2999",
            title: "Sophomore Project",
            credits: 2,
            description: "A team-oriented project work consisting of a small project to build skills in needs assessment, group problem solving, and written and oral technical presentations.",
            prereqs: ["CSI 2300"]
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
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "STA 2226",
            title: "Applied Probability and Statistics",
            credits: 4,
            description: "Introduction to probability and statistics as applied to the physical, biological and social sciences and to engineering. Applications of special distributions and nonparametric techniques. Regression analysis and analysis of variance.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "CSI 3610",
            title: "Design and Analysis of Algorithm",
            credits: 4,
            description: "Computer algorithms, their design and analysis. Strategies constructing algorithmic solutions, including divide-and- conquer, dynamic programming and greedy algorithms. Development of algorithms for parallel and distributed architectures. Computational complexity as it pertains to time and space is used to evaluate the algorithms. A general overview of complexity classes is given.",
            prereqs: ["CSI 2310"]
          },
          {
            code: "CSI 3640",
            title: "Computer Organization",
            credits: 4,
            description: "Assembly language, addressing modes, RISC and CISC architectures, assemblers, loaders, linkers arithmetic and logic unit, hardware functional units, input/output organization, memory organization, cache memory, virtual memory, control unit, pipelining, parallel computer organization.",
            prereqs: ["EGR 2400"]
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
            code: "CSI 3350",
            title: "Programming Languages",
            credits: 4,
            description: "Fundamental concepts in programming languages. Several high-level languages are studied in depth and their approaches to the fundamental issues in language design are compared. Issues include: data types and structures, control structures, binding times, run-time storage organization, flexibility vs. efficiency, compiled vs. interpreted languages, strong vs. weak typing, block structure and scope of names. ",
            prereqs: ["CSI 2310 and MTH 2775"]
          },
          {
            code: "CSI 3430",
            title: "Theory of Computation",
            credits: 4,
            description: "Formal models of computation, ranging from finite state automata to Turing machines. Computational models are used to discuss the languages recognized by these machines and address issues of computability. ",
            prereqs: []
          },
          {
            code: "CSI 3370",
            title: "Software Engineering and Practice",
            credits: 4,
            description: "Introduction to software engineering and practice. Topics include software process models, project management, requirements analysis, software quality assurance, and testing.",
            prereqs: []
          },
             {
                code: "GenEd",
            title: "General Education",
            credits: 4,
            description: "General education credit.",
            prereqs: []
            }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "CSI 3450",
            title: "Database Design and Implementation",
            credits: 4,
            description: "Introduction to the design and implementation of database systems. Include designing a practical database for an application using normal forms, understanding relational database schemas, planning and implementing a database using software such as Oracle and Microsoft SQL Server, advanced database topics in redundancy, replication, load balancing, compatibility, ODBC and JDBC, and database systems administration.",
            prereqs: []
          },
          {
            code: "Professional Elective",
            title: "Professional Elective Course of your choice",
            credits: 4,
            description: "Any 3000, 4000, or 5000 level engineering or computer science or information technology courses..",
            prereqs: []
          },
          {
            code: "TRACK",
            title: "Professional Track Course of your choice",
            credits: 4,
            description: "Professional Track Course.",
            prereqs: []
          },
             {
                code: "Professional Training",
            title: "Professional Training Unergraduate Research",
            credits: 4,
            description: "The student performs research under the supervision of a faculty member. Prior permission required. Oral and written presentations about the research are required.",
            prereqs: []
            }
        ],
        winter: [
          {
            code: "CSI 4500",
            title: "Fundamentals of Operating Systems",
            credits: 4,
            description: "Introduction to the concepts and design of operating systems. Typical topics include: sequential processes, concurrent processes, processor management, memory management, scheduling, file management, and resource protection.",
            prereqs: ["CSI 3610 and CSI 3640"]
          },
          {
            code: "CSI 4999",
            title: "Senior Capstone Project",
            credits: 4,
            description: "A team-oriented senior project to synthesize the knowledge and skills gained in the CS/IT curricula. Written and oral reports are required in addition to a working demo.",
            prereqs: ["CSI 3370, CSI 3450, CSI 3500, CSI 3520, CSI 3640"]
          },
          {
            code: "Professional Elective",
            title: "Professional Elective Course of your choice",
            credits: 4,
            description: "Any 3000, 4000, or 5000 level engineering or computer science or information technology courses..",
            prereqs: []
          },
            {
          code: "TRACK",
            title: "Professional Track Course of your choice",
            credits: 4,
            description: "Professional Track Course.",
            prereqs: []
            }
        ]
      }
    ]
  },
"ce": {
  name: "Computer Engineering",
  description:
    "The computer engineering program at Oakland University is designed to provide students with the basic knowledge and skills needed to function effectively in computer-related activities in the years ahead. It is unique in offering a focus on wireless embedded systems. A balance between theoretical and practical experience and an emphasis on the software and hardware aspects of computers are key elements to the university’s computer engineering major. ",
  requiredCredits: 128,
  years: [
    {
      title: "Freshman Year",
      fall: [
        {
          code: "EGR 120",
          title: "Engineering Graphics and CAD",
          credits: 1,
          description: "An introduction to the techniques for creating solid models of engineering designs. Topics include three-dimensional modeling of parts and assemblies, visualization, orthographic project views and layouts, auxiliary, sectional, and cutout views, exploded views, dimensioning and tolerancing, bill of materials, and computer-generated design documentation.",
          prereqs: []
        },
        {
          code: "MTH 154",
          title: "Calculus I",
          credits: 4,
          description: "A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus. Satisfies the university general education requirement in the formal reasoning knowledge foundation area.",
          prereqs: ["MTH 141"]
        },
        {
          code: "EGR 141",
          title: "Computer Problem Solving in Engineering and Computer Science",
          credits: 4,
          description: "General methods of problem solving and principles of algorithmic design using a high-level language such as Visual Basic.NET. Introduction to MATLAB. Applications will be drawn from problems in mechanical, electrical and computer engineering and computer science.",
          prereqs: ["MTH 154"]
        },
        {
          code: "CHM 143",
          title: "Chemical Principles",
          credits: 4,
          description: "States of matter, atomic structure, bonding and molecular structure, chemical reactions",
          prereqs: []
        },
        {
          code: "WRT/Gen Ed",
          title: "Writing & Rhetoric / General Education",
          credits: 4,
          description: "General education credit.",
          prereqs: []
        }
      ],
      winter: [
        {
          code: "EGR 240",
          title: "Introduction to Electrical and Computer Engineering",
          credits: 4,
          description: "An introduction to the fundamentals of electrical and computer engineering; DC and AC circuits, digital logic circuits; combinational logic design; sequential circuits, introduction to electronics, operational amplifiers, DC electromechanical machines.",
          prereqs: ["EGR 141"]
        },
        {
          code: "MTH 155",
          title: "Calculus II",
          credits: 4,
          description: "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates, and parametric curves. Satisfies the university general education requirement for the knowledge applications integration area.",
          prereqs: ["MTH 154"]
        },
        {
          code: "PHY 151",
          title: "Introductory Physics I",
          credits: 5,
          description: "Integrated lecture-laboratory. Classical mechanics and thermodynamics. For science, mathematics and engineering students.",
          prereqs: []
        },
        {
          code: "Gen Ed",
          title: "General Education",
          credits: 4,
          description: "General education credit.",
          prereqs: []
        }
      ]
    },

    {
      title: "Sophomore Year",
      fall: [
        {
          code: "EGR 250",
          title: "Introduction to Thermal Engineering",
          credits: 4,
          description: "Introduction to the fundamentals of classical thermodynamics and heat transfer; first and second laws of thermodynamics; thermodynamic property relationships; application to engineering systems and processes, steady and transient conduction in solids; introduction to convection heat transfer correlations.",
          prereqs: []
        },
        {
          code: "ECE 276",
          title: "Electric Circuits",
          credits: 4,
          description: "Modeling and analysis of circuits with dependent sources; non-ideal operational amplifiers. Transient and forced responses in RC, RL and RLC circuits. Series and parallel resonant circuits. AC power, three-phase circuits, magnetically coupled circuits. Wye-delta transforms. Introduction to frequency response. Use of PSPICE.",
          prereqs: ["EGR 240"]
        },
        {
          code: "APM 255",
          title: "Introduction to Differential Equations with Matrix Algebra",
          credits: 4,
          description: "Introduction to ordinary differential equations, Laplace transforms, linear systems, matrices, vectors, independence, Eigenvalues and eigenvectors, and applications.",
          prereqs: ["MTH 155"]
        },
        {
          code: "PHY 152",
          title: "Introductory Physics II",
          credits: 5,
          description: "Integrated lecture-laboratory. Sound, light, electricity and magnetism.",
          prereqs: ["PHY 151"]
        }
      ],
      winter: [
        {
          code: "EGR 260",
          title: "Introduction to Industrial and Systems Engineering",
          credits: 4,
          description: "Overview of industrial and systems engineering: perspectives, tools and models. In depth coverage of probability and statistics in engineering: density and distribution functions, population and sampling distributions, confidence intervals, hypothesis testing and introduction to discrete-event simulation",
          prereqs: ["MTH 155"]
        },
        {
          code: "EGR 280",
          title: "Design and Analysis of Electromechanical Systems",
          credits: 4,
          description: "Design, analysis, and testing of electromechanical systems; statics, linear and rotational dynamics; introduction to microprocessors; team design project dealing with technical, economic, safety, environmental, and social aspects of a real-world engineering problem; written, oral, and visual communication, engineering ethics. ",
          prereqs: ["EGR 120, EGR 240"]
        },
        {
          code: "APM 263",
          title: "Discrete Mathematics",
          credits: 4,
          description: "Concepts and methods of discrete mathematics with an emphasis on their application to computer science. Logic and proofs, sets and relations, algorithms, induction and recursion, combinatorics, graphs and trees.",
          prereqs: ["MTH 155"]
        },
        {
          code: "Gen Ed",
          title: "General Education",
          credits: 4,
          description: "General education credit.",
          prereqs: []
        }
      ]
    },

    {
      title: "Junior Year",
      fall: [
        {
          code: "CSE 230",
          title: "Object-Oriented Computing I",
          credits: 4,
          description: "Introduction to object-oriented computer programming using a high-level programming language such as Java. Classes, member functions, inheritance, polymorphism and operator overloading. Design methodologies and introduction to software engineering principles and practices. Basic data structures are introduced.",
          prereqs: ["EGR 141"]
        },
        {
          code: "ECE 327",
          title: "Electronic Circuits and Devices I",
          credits: 4,
          description: "Characteristics and models of nonlinear circuit elements, such as diodes, BJTs and MOSFETs. Analysis and design of circuits employing these devices, including power supplies, voltage regulators, and amplifiers; Biasing and circuit stability issues",
          prereqs: ["ECE 276"]
        },
        {
          code: "ECE 335",
          title: "Signals and Systems",
          credits: 4,
          description: "Basic signals, average value, average power, and energy. Laplace transform and inverse Laplace transform, and transfer function concept and approach in the analysis of electrical and mechanical lumped-parameter linear systems. Systems modeling and analysis in Laplace and differential equation domains. Natural and forced responses of linear time-invariant systems, and concept of convolution. Fourier analysis of signals and systems: Fourier series and Fourier transform, power spectral density, energy spectral density, band width, and filters.",
          prereqs: ["ECE 276"]
        },
        {
          code: "Gen Ed",
          title: "General Education",
          credits: 4,
          description: "General education credit.",
          prereqs: []
        }
      ],
      winter: [
        {
          code: "CSE 231",
          title: "Object-Oriented Computing II",
          credits: 4,
          description: "A second course in programming, with emphasis on data abstraction and object-oriented design. The basic data structures in computer science, including stacks, queues, lists and trees, are covered in detail. Concepts of design, analysis and verification are discussed in the context of abstract data types. Examples of applications taken from numeric and symbolic domains are used.",
          prereqs: ["CSE 230"]
        },
        {
          code: "CSE 364",
          title: "Computer Organization",
          credits: 4,
          description: "Assembly language, addressing modes, RISC and CISC architectures, assemblers, loaders, linkers arithmetic and logic unit, hardware functional units, input/output organization, memory organization, cache memory, virtual memory, control unit, pipelining, parallel computer organization.",
          prereqs: ["EGR 240"]
        },
        {
          code: "ECE 378",
          title: "Digital Logic and Microprocessor Design",
          credits: 4,
          description: "Development of components and techniques needed to design basic digital circuits and systems for controllers, computers, communication and related applications. Design and analysis of combinational and sequential logic circuits using a hardware description language such as VHDL. Design of dedicated microprocessors and their implementation in an FPGA.",
          prereqs: ["EGR 240"]
        },
        {
          code: "Gen Ed",
          title: "General Education",
          credits: 4,
          description: "General education credit.",
          prereqs: []
        }
      ]
    },

    {
      title: "Senior Year",
      fall: [
        {
          code: "ECE 470",
          title: "Microprocessors-based Systems Design",
          credits: 4,
          description: "Application of microprocessors and microcomputers to the solution of typical problems, interfacing microprocessors with external systems such as sensors, displays and keyboards; programming considerations, microcomputer system and memory system design. A laboratory, design course; several short design projects and one large design project. Written report and oral presentation required.",
          prereqs: ["ECE 378"]
        },
        {
          code: "PROF ELEC",
          title: "Professional Elective",
          credits: 4,
          description: "Approved 3000/4000/5000-level engineering/CS/IT elective.",
          prereqs: []
        },
        {
          code: "PROF ELEC",
          title: "Professional Elective",
          credits: 4,
          description: "Approved 3000/4000/5000-level engineering/CS/IT elective.",
          prereqs: []
        },
        {
          code: "Gen Ed",
          title: "General Education",
          credits: 3,
          description: "General education credit.",
          prereqs: []
        }
      ],
      winter: [
        {
          code: "ECE 491",
          title: "Senior Design",
          credits: 4,
          description: "Capstone design projects selected from a wide variety of areas related to electrical and computer engineering. Develops system approach to design: preparation of specifications, scheduling, modeling, simulations, and technological, financial and environmental aspects. Multi-disciplinary teamwork is emphasized. Prototyping, testing and completion of the project are required. Presentation of results required",
          prereqs: ["ECE 327, ECE 378, and ECE 470"]
        },
        {
          code: "PROF ELEC",
          title: "Professional Elective",
          credits: 4,
          description: "Approved 3000/4000/5000-level engineering/CS/IT elective.",
          prereqs: []
        },
        {
          code: "Gen Ed",
          title: "General Education",
          credits: 4,
          description: "General education credit.",
          prereqs: []
        },
        {
          code: "MTH/SCI ELEC",
          title: "Approved Math or Science Elective",
          credits: 4,
          description: "Advisor-approved upper-level math or science elective.",
          prereqs: []
        }
      ]
    }
  ]
},
  
"ds": {
  name: "Data Science",
  description:
    "The program in Data Science leading to a Bachelor of Science degree prepares students for a productive career in the industry and for graduate studies in diverse disciplines. The curriculum integrates quantitative analysis and computer science, setting it apart from other fields. Through hands-on projects and practical exploration of programming languages like Python and R, students delve into machine learning algorithms, data visualization techniques, and database management, gaining invaluable insights into complex dataset analysis. The curriculum places a strong emphasis on data ethics, ensuring graduates are adept at responsibly navigating diverse contexts. Capstone projects encourage the application of knowledge to solve complex problems, fostering critical thinking and innovation. With a strong focus on professional development, including technical communication and teamwork, the program ensures that graduates are well-prepared for a dynamic career in data science, equipping them with the skills and knowledge needed to excel in the rapidly evolving field.",
  requiredCredits: 128,
  years: [
    {
      title: "Freshman Year",
      fall: [
        {
          code: "CSI 1320",
          title: "Introduction to Python Programming and Unix",
          credits: 4,
          description:
            "Algorithmic programming using Python. Topics include data storage and manipulation, binary numbers, bitwise operations, control structures, and functions. Introduction to fundamental data structures and script programming. Basic Unix commands and Unix utilities will be covered",
          prereqs: []
        },
        {
          code: "MTH 1554",
          title: "Calculus I",
          credits: 4,
          description:
            "A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus.",
          prereqs: []
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
            "Introduction to object-oriented computer programming using a high-level programming language such as Java. Classes, member functions, inheritance, polymorphism and operator overloading. Design methodologies and introduction to software engineering principles and practices. Basic data structures, algorithms and event driven programming concepts are introduced.",
          prereqs: ["CSI 1320"]
        },
        {
          code: "MTH 1555",
          title: "Calculus II",
          credits: 4,
          description:
            "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",
          prereqs: ["MTH 1554"]
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
      ]
    },

    {
      title: "Sophomore Year",
      fall: [
        {
          code: "CSI 2120 or APM 2663",
          title: "Discrete Structures with Applications / Discrete Mathematics",
          credits: 4,
          description:
            "Concepts and methods of discrete mathematics with an emphasis on their application to computer science. Logic and proofs, sets and relations, algorithms, induction and recursion, combinatorics, graphs and trees.",
          prereqs: ["MTH 1555"]
        },
        {
          code: "CSI 2810",
          title: "Introduction to Data Science in Python",
          credits: 4,
          description:
            "An introductory level overview of data science lifecycle topics including data acquisition, management, preparation, analysis, model development and deployment, and data visualization.Students will gain practical experience by learning and applying libraries and packages that comprise Python data analysis ecosystem. It emphasizes concepts and strategies for writing Python code.",
          prereqs: ["CSI 1320"]
        },
        {
          code: "SCI ELEC",
          title: "Approved Science Elective",
          credits: 4,
          description:
            "Advisor-approved lab science course supporting the data science major.",
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
          code: "CSI 2310",
          title: "Data Structures",
          credits: 4,
          description:
            "This course covers data structures using object oriented programming. The fundamental data structures in computer science, including stacks, queues, lists and trees are covered in detail. Concepts of design, analysis and verification are discussed in the context of abstract data types. Examples of applications taken from numeric and symbolic domains are used. With laboratory.",
          prereqs: ["CSI 2300"]
        },
        {
          code: "CSI 2999",
          title: "Sophomore Project",
          credits: 2,
          description:
            "A team-oriented project work consisting of a small project to build skills in needs assessment, group problem solving, and written and oral technical presentations.",
          prereqs: ["CSI 2300"]
        },
        {
          code: "CSI 2560 or MTH 2775",
          title: "Computational Linear Algebra / Linear Algebra",
          credits: 4,
          description:
            "Vectors, matrices, linear systems, orthogonality, eigenvalues/eigenvectors; computation and applications.",
          prereqs: ["MTH 1555"]
        },
        {
          code: "STA 2226",
          title: "Applied Probability and Statistics",
          credits: 4,
          description:
            "Introduction to probability and statistics as applied to the physical, biological and social sciences and to engineering. Applications of special distributions and nonparametric techniques. Regression analysis and analysis of variance.",
          prereqs: ["MTH 1554"]
        },
        {
          code: "GenEd",
          title: "General Education",
          credits: 4,
          description: "General education credit.",
          prereqs: []
        }
      ]
    },

    {
      title: "Junior Year",
      fall: [
        {
          code: "CSI 3450",
          title: "Database Design and Implementation",
          credits: 4,
          description:
            "Introduction to the design, implementation and management of database systems. Topics include planning, designing, and implementing a practical database using a relational database server for an application utilizing entity relationship diagrams, normal forms, and understanding relational database schemas. Advanced topics include concurrency control, query optimization, and introduction to database systems administration. The course includes a semester-long team project.",
          prereqs: ["CSI 2300"]
        },
        {
          code: "CSI 3610",
          title: "Design and Analysis of Algorithms",
          credits: 4,
          description:
            "Computer algorithms, their design and analysis. Strategies constructing algorithmic solutions, including divide-and-conquer, dynamic programming and greedy algorithms. Computational complexity as it pertains to time and space is used to evaluate the algorithms. A general overview of complexity classes is given. ",
          prereqs: ["CSI 2310"]
        },
        {
          code: "CSI 3860",
          title: "Contemporary Issues in Data Science",
          credits: 3,
          description:
            "The course provides an introduction to the relationship between data, ethics, governance, policy, and society to help students think explicitly about their social responsibilities as data scientists using case studies and examples. The course emphasizes writing and critical thinking.",
          prereqs: ["WRT 1060"]
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
          code: "CSI 3820",
          title: "Data Visualization",
          credits: 3,
          description:
            "The course introduces interactive data visualization. Students learn best practices in data visualization and how to design and implement dashboards for use by stakeholders. It provides hands-on experiences using popular visualization software such as Tableau. Students practice data visualization skills in multiple assignments and a comprehensive semester-long team project. ",
          prereqs: ["CSI 1320"]
        },
        {
          code: "CSI 3480",
          title: "Security and Privacy in Computing",
          credits: 4,
          description:
            "An introduction to principles and practices of security and privacy. Topics include an introduction to cryptography, host/network exploits and countermeasures, information risk assessment, access control, threat and incident management, information privacy concepts, privacy requirements, privacy-enhancing technologies, information privacy management, and legal and regulatory requirements.",
          prereqs: ["CSI 1320"]
        },
        {
          code: "STA 4002 or STA 4111",
          title: "Applied Linear Models I / Statistical Methods in Data Science",
          credits: 4,
          description:
            "Review of basic results from probability and statistics, linear regression, model testing and transformations, matrix methods in multiple regression, polynomial regression, indicator variables, basics of experimental design, one-way ANOVA with fixed and random effects, multiple comparisons, and randomized blocks. Required background: a first course in statistics.",
          prereqs: ["STA 2226"]
        },
        {
          code: "APP AREA",
          title: "Application Area",
          credits: 4,
          description:
            "Advisor-approved domain sequence (e.g., business, bio, social science, engineering) for applied depth.",
          prereqs: []
        }
      ]
    },

    {
      title: "Senior Year",
      fall: [
        {
          code: "STA 4840",
          title: "Introduction to R for Data Science",
          credits: 4,
          description:
            "Data import/export, data frames, relational data, vectors/matrices/arrays, functions and iterations, data visualization, R  Markdown, R packages for data science, applications to statistical modeling and analysis.",
          prereqs: ["STA 2226"]
        },
        {
          code: "APP AREA",
          title: "Application Area",
          credits: 4,
          description:
            "Continuation of domain sequence aligned with student interests/career goals.",
          prereqs: []
        },
        {
          code: "PROF ELEC",
          title: "Professional Elective",
          credits: 4,
          description:
            "Approved upper-level CS/DS/IT/ENG/STA elective to deepen technical expertise.",
          prereqs: []
        },
        {
          code: "PROF ELEC",
          title: "Professional Elective",
          credits: 4,
          description:
            "Approved upper-level CS/DS/IT/ENG/STA elective to deepen technical expertise.",
          prereqs: []
        }
      ],
      winter: [
        {
          code: "CSI 4810",
          title: "Information Retrieval and Knowledge Discovery",
          credits: 4,
          description:
            "This course covers the models for information retrieval from text and multimedia databases. Methodologies for database indexing and visualization are discussed. Statistical and deterministic algorithms for discovering knowledge from databases, including, decision trees, clustering, regression, and neural models are covered..",
          prereqs: ["CSI 2560, APM 2555, or MTH 2775"]
        },
        {
          code: "CSI 4820",
          title: "Big Data Analysis with Cloud Computing",
          credits: 4,
          description:
            "Topics related to storage, management, and analysis of Big Data on cloud platform by introducing technologies like Hadoop with MapReduce, Spark, Pig, and Hive. It also covers modeling and implementation of Big Data using various NoSQL databases such as Key-value, Columnar, Document, and graph-based. It includes a semester-long team project.",
          prereqs: ["CSI 1320 or CSI 2300"]
        },
        {
          code: "CSI 4990",
          title: "Data Science Capstone",
          credits: 4,
          description:
            "The primary objective of this senior project is to apply the technical knowledge gained in the data science curricula to the domain of an application area. In addition to a working demo, written reports and oral presentations are required. It should only be taken after completion of the application area courses.",
          prereqs: ["CSI 3450"]
        },
        {
          code: "PROF ELEC",
          title: "Professional Elective",
          credits: 4,
          description:
            "Approved upper-level CS/DS/IT/ENG/STA elective to broaden or specialize.",
          prereqs: []
        }
      ]
    }
  ]
},
  
  "ee": {
    name: "Electrical Engineering",
    description: "Electrical engineering is a broad field encompassing a number of disciplines. Oakland University’s undergraduate program in electrical engineering is designed to provide students with the basic knowledge and skills for challenging careers in electrical engineering in the coming decades. The curriculum offers strong fundamentals in analog and digital circuits, communications, computers, controls, electromagnetics, electronics including VLSI systems, electronic devices, and power systems. In addition, a strong laboratory component of the program offers numerous design opportunities and allows students to relate theoretical ideas to practical problems using modern equipment and hardware/software tools. The program also provides numerous engineering design experiences. Electrical and computer engineering faculty members are engaged in research related to new developments in the field. Their activities contribute to a well-developed, up-to-date curriculum. The BSE in Electrical Engineering program is accredited by the Engineering Accreditation Commission of ABET.",
    requiredCredits: 128,
    years: [
      {
        title: "Freshman Year",
        fall: [
          {
            code: "EGR 1200",
            title: "Engineering Graphics and CAD",
            credits: 1,
            description: "An introduction to the techniques for creating solid models of engineering designs. Topics include three-dimensional modeling of parts and assemblies, visualization, orthographic project views and layouts, auxiliary, sectional, and cutout views, exploded views, dimensioning and tolerancing, bill of materials, and computer-generated design documentation. Offered fall and winter.",
            prereqs: ["MTH 1441"]
          },
          {
            code: "MTH 1554",
            title: "Calculus I",
            credits: 4,
            description: "A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus. Satisfies the university general education requirement in the formal reasoning knowledge foundation area.",
            prereqs: ["MTH 1441"]
          },
          {
            code: "EGR 1400",
            title: "Computer Problem Solving in Engineering and Computer Science",
            credits: 4,
            description: "General methods of problem solving and principles of algorithmic design using a high-level language such as Visual C#. Introduction to MATLAB. Applications will be drawn from problems in mechanical, electrical and computer engineering and computer science. Offered fall, winter.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "CHM 1430",
            title: "Chemical Principles",
            credits: 4,
            description: "States of matter, atomic structure, bonding and molecular structure, chemical reactions. This course has common lectures with CHM 1440. (Students may not receive credit for both CHM 1430 and CHM 1440). CHM 1430 does not satisfy the university general education requirement in the natural science and technology knowledge exploration area. Recommended preparation is three years of high school mathematics and one year of high school chemistry. Restricted to engineering and computer science majors.",
            prereqs: ["MTH 0662"]
          },
          {
            code: "WRT/general-education",
            title: "Writing or General Education",
            credits: 4,
            description: "General WRT/Education Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "EGR 2400",
            title: "Introduction to Electrical and Computer Engineering",
            credits: 4,
            description: "An introduction to the fundamentals of electrical and computer engineering; DC and AC circuits, digital logic circuits; combinational logic design; sequential circuits, introduction to electronics, operational amplifiers, DC electromechanical machines. With laboratory. Offered fall, winter. Satisfies the university general education requirement in the natural science and technology knowledge exploration area.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "MTH 1555",
            title: "Calculus II",
            credits: 4,
            description: "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates, and parametric curves. Satisfies the university general education requirement for the knowledge applications integration area. Prerequisites for knowledge applications: completion of the university general education requirement in the formal reasoning knowledge foundation area.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "PHY 1610",
            title: "Fundamentals of Physics I",
            credits: 4,
            description: "Classical mechanics and thermodynamics. For science, mathematics and engineering students. This course has common lectures with PHY 1510. PHY 1610 does not satisfy the university general education requirement in the natural science and technology knowledge exploration area.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "ECE 2005",
            title: "Electric Circuits",
            credits: 4,
            description: "Modeling and analysis of circuits with dependent sources; non-ideal operational amplifiers. Transient and forced responses in RC, RL and RLC circuits. Series and parallel resonant circuits. AC power, three-phase circuits, magnetically coupled circuits. Wye-delta transforms. Introduction to frequency response. Use of PSPICE. With laboratory.",
            prereqs: ["EGR 2400"]
          },
          {
            code: "APM 2555",
            title: "Introduction to Differential Equations with Matrix Algebra",
            credits: 4,
            description: "Introduction to ordinary differential equations, Laplace transforms, linear systems, matrices, vectors, independence, Eigenvalues and eigenvectors, and applications. Students cannot receive credit for both APM 2555 and APM 2559.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "PHY 1620",
            title: "Fundamentals of Physics II",
            credits: 4,
            description: "Sound, light, electricity and magnetism. This course has common lectures with PHY 1520. Satisfies the university general education requirement in the knowledge applications integration area. Prerequisite for knowledge applications integration: completion of the general education requirement in the natural science and technology knowledge exploration area.",
            prereqs: ["PHY 1610"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "EGR 2500",
            title: "Introduction to Thermal Engineering",
            credits: 4,
            description: "Introduction to the fundamentals of classical thermodynamics and heat transfer; first and second laws of thermodynamics; thermodynamic property relationships; application to engineering systems and processes; introduction to conduction, convection and radiation; steady 1-D conduction and extended surfaces; lumped capacitance method. Offered fall and winter. Satisfies the university general education requirement in the natural science and technology knowledge exploration area.",
            prereqs: ["CHM 1430"]
          },
          {
            code: "EGR 2600",
            title: "Introduction to Industrial and Systems Engineering",
            credits: 4,
            description: "Overview of industrial and systems engineering: perspectives, tools and models. In depth coverage of probability and statistics in engineering: density and distribution functions, population and sampling distributions, confidence intervals, hypothesis testing and introduction to discrete-event simulation. Offered fall, winter.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "EGR 2800",
            title: "Design and Analysis of Electromechanical Systems",
            credits: 4,
            description: "Design, analysis, and testing of electromechanical systems; static equilibrium of particles and rigid bodies; introduction to microprocessors; team design project dealing with technical, economic, safety, environmental, and social aspects of a real-world engineering problem; written, oral, and visual communication. With Laboratory. Offered fall and winter.",
            prereqs: ["EGR 1200"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "MTH 2554",
            title: "Multivariable Calculus",
            credits: 4,
            description: "A study of vectors, polar coordinates, three-dimensional geometry, differential calculus of functions of several variables, exact differential equations, multiple integrals, line and surface integrals, and vector fields.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "ECE 3100",
            title: "Electronic Circuits and Devices I",
            credits: 4,
            description: "Characteristics and models of nonlinear circuit elements, such as diodes, BJTs and MOSFETs. Analysis and design of circuits employing these devices, including power supplies, voltage regulators, and amplifiers; Biasing and circuit stability issues. Use of Operational amplifiers, discrete circuit elements; and PSPICE software for circuit design is emphasized in the lab. With Laboratory.",
            prereqs: ["ECE 2005"]
          },
          {
            code: "ECE 3204",
            title: "Signals and Systems",
            credits: 4,
            description: "Basic signals, average value, average power, and energy. Laplace transform and inverse Laplace transform, and transfer function concept and approach in the analysis of electrical and mechanical lumped-parameter linear systems. Systems modeling and analysis in Laplace and differential equation domains. Natural and forced responses of linear time-invariant systems, and concept of convolution. Fourier analysis of signals and systems: Fourier series and Fourier transform, power spectral density, energy spectral density, band width, and filters.",
            prereqs: ["MTH 2554"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "ECE 3105",
            title: "Electronic Circuits and Devices II",
            credits: 4,
            description: "Analysis and design of functional analog circuits with particular specifications. Frequency responses of analog circuits. Building blocks for integrated circuits including current mirror, differential pairs and output stage. Active filters. Interface circuits for micro-electro-mechanical systems (MEMS) and sensors. A laboratory session is integrated to enhance students’ experience in circuit design and analysis.",
            prereqs: ["ECE 3100"]
          },
          {
            code: "ECE 3300",
            title: "Electromagnetics I",
            credits: 4,
            description: "This is an introductory course in electromagnetics. A thorough review of waves, phasors, and vector calculus is provided to lay the mathematical foundation to cover the key topics in this course. The key topics include transmission lines, electrostatics, magnetostatics, and touches upon time-varying fields.",
            prereqs: ["ECE 2005…"]
          },
          {
            code: "ECE 3600",
            title: "Electrical Machines",
            credits: 4,
            description: "Magnetic circuits, transformers, magnetic energy, force/torque and heat dissipation. DC and AC machines and their equivalent circuits, torque analysis and power efficiency. Three phase transformers, synchronous and induction machines. Per unit system and introduction to power distribution. With Laboratories in transformers, DC and AC machines.",
            prereqs: ["ECE 2005"]
          },
          {
            code: "ECE 2700",
            title: "Digital Logic Design",
            credits: 4,
            description: "Boolean algebra; number systems and arithmetic, combinational logic circuits; synchronous sequential circuits; asynchronous sequential circuits; introduction to a hardware description language (HDL). With laboratory.",
            prereqs: ["ECE 2400"]
          }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "Mathematics/Sciences Elective",
            title: "Mathematics & Sciences Elective",
            credits: 4,
            description: "Mathematics/Sciences Elective",
            prereqs: []
          },
          {
            code: "Key Course-Area 1",
            title: "Key Course-Area 1",
            credits: 4,
            description: "Key Course Class",
            prereqs: []
          },
          {
            code: "Key Course-Area 2",
            title: "Key Course-Area 2",
            credits: 4,
            description: "Key Course Class",
            prereqs: []
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          },
          {
            code: "Elective-Area 1",
            title: "Elective Area 1",
            credits: 4,
            description: "Elective Class",
            prereqs: []
          },
          {
            code: "ECE Elective",
            title: "ECE Elective",
            credits: 4,
            description: "ECE class",
            prereqs: []
          },
          {
            code: "ECE 4999",
            title: "Senior Design",
            credits: 4,
            description: "Capstone design projects selected from a wide variety of areas related to electrical and computer engineering. Develops system approach to design: preparation of specifications, scheduling, modeling, simulations, and technological, financial and environmental aspects. Multi-disciplinary teamwork is emphasized. Prototyping, testing and completion of the project are required. Presentation of results required. Satisfies the university general education requirement for a capstone experience. Satisfies the university general education requirement for a writing intensive course in the major. Prerequisite for writing intensive: completion of the university writing foundation requirement.",
            prereqs: ["ECE 3100", "ECE 3105"]
          }
        ]
      }
    ]
  },

  "es": {
    name: "Engineering Chemistry",
    description: "The program in engineering chemistry, which is offered by the Department of Chemistry in cooperation with the School of Engineering and Computer Science, leads to the Bachelor of Science degree with a major in engineering chemistry. It is intended for well-qualified students who seek a basic preparation in engineering along with a highly professional chemistry program. Students in this program are not required to complete the College of Arts and Sciences college exploratory requirements. To earn the degree of Bachelor of Science with a major in engineering chemistry, students must complete a minimum of 128 credits, satisfy writing requirement (also see Undergraduate degree requirements) and meet the following requirements:",
    requiredCredits: 128,
    years: [
      {
        title: "Freshman Year",
        fall: [
          {
            code: "CHM 1440",
            title: "General Chemistry I",
            credits: 4,
            description: "States of matter, atomic structure, bonding and molecular structure, chemical reactions. Recommended preparation is three years high school mathematics and one year of high school chemistry.",
            prereqs: ["MTH 0662"]
          },
          {
            code: "CHM 1470",
            title: "General Chemistry Laboratory I",
            credits: 1,
            description: "Experimental investigation of chemical phenomena and measurements.  Accompanies CHM 1440 but does not have to be taken concurrently.  May be taken with permission by students who have completed CHM 1430.",
            prereqs: ["CHM 1440"]
          },
          {
            code: "EGR 1200",
            title: "Engineering Graphics and CAD",
            credits: 1,
            description: "An introduction to the techniques for creating solid models of engineering designs. Topics include three-dimensional modeling of parts and assemblies, visualization, orthographic project views and layouts, auxiliary, sectional, and cutout views, exploded views, dimensioning and tolerancing, bill of materials and computer-generated design documentation. Offered fall and winter.",
            prereqs: ["MTH 1441"]
          },
          {
            code: "EGR 1400",
            title: "Computer Problem Solving in Engineering",
            credits: 4,
            description: "General methods of problem solving and principles of algorithmic design using a high-level language such as Visual C#. Introduction to MATLAB. Applications will be drawn from problems in mechanical, electrical and computer engineering and computer science. Offered fall and winter.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "MTH 1554",
            title: "Calculus I",
            credits: 4,
            description: "A detailed study of limits, continuity, derivatives of algebraic and transcendental functions, applications of derivatives, numerical techniques, integrals and the Fundamental Theorem of Calculus.",
            prereqs: ["MTH 1441"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CHM 1450",
            title: "General Chemistry II",
            credits: 4,
            description: "Chemical reactions, kinetics, equilibrium, acid-base chemistry, thermodynamics, and electrochemistry.",
            prereqs: ["CHM 1440"]
          },
          {
            code: "CHM 1480",
            title: "General Chemistry Laboratory II",
            credits: 1,
            description: "Training in basic techniques of chemistry experimentation.",
            prereqs: ["CHM 1450"]
          },
          {
            code: "MTH 1555",
            title: "Calculus II",
            credits: 4,
            description: "A detailed study of methods of integration, applications of the integrals, improper integrals, sequences, series and power series, polar coordinates and parametric curves.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "PHY 1510",
            title: "Introductory Physics I",
            credits: 4,
            description: "Classical mechanics and thermodynamics. For science, mathematics and engineering students.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ]
      },
      {
        title: "Sophomore Year",
        fall: [
          {
            code: "CHM 2340",
            title: "Organic Chemistry I",
            credits: 4,
            description: "Introduction to the structure, properties and reactivity of organic compounds. ",
            prereqs: ["CHM 1450"]
          },
          {
            code: "MTH 2554",
            title: "Multivariable Calculus",
            credits: 4,
            description: "A study of vectors, polar coordinates, three-dimensional geometry, differential calculus of functions of several variables, exact differential equations, multiple integrals, line and surface integrals and vector fields.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "PHY 1520",
            title: "Introductory Physics II",
            credits: 4,
            description: "Sound, light, electricity and magnetism.",
            prereqs: ["PHY 1510"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "APM 2555",
            title: "Introduction to Differential Equations with Matrix Algebra",
            credits: 4,
            description: "Introduction to ordinary differential equations, Laplace transforms, linear systems, matrices, vectors, independence, Eigenvalues and eigenvectors, and applications. Students cannot receive credit for both APM 2555 and APM 2559.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "CHM 2350",
            title: "Organic Chemistry II",
            credits: 4,
            description: "A continuation of CHM 2340. A study of the organic chemistry of functional groups and an introduction to biologically important organic compounds.",
            prereqs: ["CHM 2340"]
          },
          {
            code: "CHM 2370",
            title: "Organic Chemistry Laboratory",
            credits: 2,
            description: "Basic organic laboratory manipulations at the semi-micro level, synthesis, spectroscopy and chromatography.",
            prereqs: ["CHM 1480"]
          },
          {
            code: "EGR 2400",
            title: "Introduction to Electrical and Computer Engineering",
            credits: 4,
            description: "An introduction to the fundamentals of electrical and computer engineering, DC and AC circuits, digital logic circuits, combinational logic design, sequential circuits, introduction to electronics, operational amplifiers and DC electromechanical machines. With laboratory. Offered fall and winter.",
            prereqs: ["MTH 1554"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ]
      },
      {
        title: "Junior Year",
        fall: [
          {
            code: "CHM 3250",
            title: "Analytical Chemistry",
            credits: 4,
            description: "Acid-base, complexation, precipitation, oxidation-reduction and phase-distribution principles, along with fundamentals of spectroscopy, chromatography and statistics, are studied and applied to chemical analysis. Four hours of lecture and eight hours of laboratory per week.",
            prereqs: ["CHM 1450"]
          },
          {
            code: "EGR 2500",
            title: "Introduction to Thermal Engineering",
            credits: 4,
            description: "Introduction to the fundamentals of classical thermodynamics and heat transfer, first and second laws of thermodynamics, thermodynamic property relationships;, application to engineering systems and processes, introduction to conduction, convection and radiation, steady 1-D conduction and extended surfaces and lumped capacitance method. Offered fall and winter.",
            prereqs: ["CHM 1440"]
          },
          {
            code: "EGR 2600",
            title: "Introduction to Industrial and Systems Engineering",
            credits: 4,
            description: "Overview of industrial and systems engineering: perspectives, tools and models. Indepth coverage of probability and statistics in engineering: density and distribution functions, population and sampling distributions, confidence intervals, hypothesis testing and introduction to discrete-event simulation. Offered fall and winter.",
            prereqs: ["MTH 1555"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CHM 3420",
            title: "Physical Chemistry I",
            credits: 4,
            description: "Kinetics, applications of thermodynamics to chemical systems and equilibria. MTH 2554 and APM 2555",
            prereqs: ["CHM 1450"]
          },
          {
            code: "EGR 2800",
            title: "Design and Analysis of Electromechanical Systems",
            credits: 4,
            description: "Design, analysis, and testing of electromechanical systems; static equilibrium of particles and rigid bodies; introduction to microprocessors; team design project dealing with technical, economic, safety, environmental, and social aspects of a real-world engineering problem; written, oral and visual communication. With laboratory. Offered fall and winter.",
            prereqs: ["EGR 2600"]
          },
          {
            code: "ME 3500",
            title: "Introduction to Fluid and Thermal Energy Transport",
            credits: 4,
            description: "The fundamentals of fluid mechanics and heat transfer; fluid statics, conservation of mass and momentum; inviscid flow; internal viscous flow analysis; introduction to boundary layer theory; heat diffusion equation; dimensionless correlations of convection heat transfer, applications to engineering problems. With laboratory; includes experiment design. Offered fall and winter.",
            prereqs: ["EGR 2800"]
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ]
      },
      {
        title: "Senior Year",
        fall: [
          {
            code: "CHM 3430",
            title: "Physical Chemistry II",
            credits: 4,
            description: "Introduction to quantum mechanics, statistical mechanics and molecular spectroscopy. This course may be taken before CHM 3420. MTH 2554 and APM 2555, recommended prerequisites.",
            prereqs: ["CHM 1450…"]
          },
          {
            code: "CHM 4710",
            title: "Structure and Synthesis of Polymers",
            credits: 3,
            description: "Preparation, properties and structure of selected inorganic and organic polymers. Both chemical theory and technological and organic polymers. Both chemical theory and technological applications will be discussed.",
            prereqs: ["CHM 2350"]
          },
          {
            code: "CHM 4XXX",
            title: "CHM Lecture or Laboratory above CHM 4000",
            credits: 3,
            description: "Any lab credit above 3000",
            prereqs: []
          },
          {
            code: "Professional Elective",
            title: "Professional Elective",
            credits: 4,
            description: "Professional Class",
            prereqs: []
          }
        ],
        winter: [
          {
            code: "CHM 3480",
            title: "Physical Chemistry Laboratory",
            credits: 2,
            description: "Experiments in thermodynamics, kinetics, phase equilibria, and advanced spectroscopy with emphasis on mathematical treatment of experimental data. MTH 2554 and APM 2555, recommended prerequisites. ",
            prereqs: ["CHM 3420…"]
          },
          {
            code: "CHM 4996",
            title: "Independent Research",
            credits: 3,
            description: "Undergraduate research with at least eight hours per week in the laboratory. Requires a written report.",
            prereqs: []
          },
          {
            code: "ME 4999",
            title: "Senior Mechanical Engineering Design Project",
            credits: 4,
            description: "Alternative to CHM 4996",
            prereqs: ["ME 3200"]
          },
          {
            code: "Professional Elective",
            title: "Professional Elective",
            credits: 4,
            description: "Professional Class",
            prereqs: []
          },
          {
            code: "General-Education",
            title: "General Education Course",
            credits: 4,
            description: "General Education Class",
            prereqs: []
          }
        ]
      }
    ]
  },
  
};
window.majorsData = majorsData;