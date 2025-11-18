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
    },

    ce: {
      id: "ce",
      name: "Computer Engineering",
      desc: "The Minor in Computer Engineering is open to all students who are not majoring in Electrical and/or Computer Engineering.",
      groups: [
        {
          title: "GROUP A",
          subtitle: "Required Course",
          courses: [
            { code: "ECE 3720", title: "Microprocessors", credits: 4, desc: "Fundamental principles, operation, and application of microprocessors; programming microprocessors in assembly and C languages; programming peripherals such as timers, interrupts, ADCs, UART, PWM; interfacing microprocessors with external devices. Includes laboratory assignments and a final design project." },
          ]
        },
        {
          title: "GROUP B",
          subtitle: "Pick two courses",
          courses: [
            { code: "ECE 2700", title: "Digital Logic Design", credits: 4, desc: "Boolean algebra; number systems and arithmetic, combinational logic circuits; synchronous sequential circuits; asynchronous sequential circuits; introduction to a hardware description language (HDL). " },
            { code: "ECE 4772", title: "High Performance Embedded Programming", credits: 4, desc: "Real-time embedded system programming, analysis, and optimization using advanced processors such as the Intel Atom. Topics covered include real-time programming, multi-threaded systems, multi-core software development, as well as optimization of processor utilization, speed, and memory requirements." },
            { code: "ECE 4710", title: "Computer Hardware Design", credits: 4, desc: "Development of components and techniques needed to design digital circuits and systems for controllers, computers, communication and related applications. Unsigned/signed integer and real arithmetic operations. Design and timing simulation of special-purpose processors in VHDL and their FPGA implementation. Microprocessor design."},
            { code: "ECE 4721", title: "Embedded Systems Design", credits: 4, desc: "Real-time embedded system design. Topics include ARM architecture, I/O interfacing (including CAN bus and Bluetooth), real-time programming, multi-threading/multi-tasking for real-time applications, task scheduling, and design of applications with real-time operating systems for embedded controllers. Practical experience with embedded software development tools for C programming." },
          ]
        },
        {
          title: "GROUP C",
          subtitle: "Pick two courses",
          courses: [
            { code: "ECE 4415", title: "Microcomputer-based Control Systems", credits: 4, desc: "Computer-aided engineering, modeling, analysis, design, evaluation and visualization of dynamical and control systems including algorithms for digital logic, filters, controllers and estimators. Microcomputer-based hardware/software implementation of algorithms including data acquisition, signal conditioning and power processing circuits, computer interface and data communications, input and output devices, graphics displays. Model-based rapid prototyping of embedded microcontrollers and PIC processors. Experiments and projects emphasize real-time applications, programming and hardware integration." },
            { code: "ECE 4740", title: "Embedded Artificial Intelligence (AI)", credits: 4, desc: "Foundations of AI algorithms and implementation of AI in embedded systems (microcontroller or custom hardware). Topics include neural networks, fuzzy logic, decision trees, clustering, reinforcement, and self-organizing methods in applications for low-cost mobile systems with limited processing power and battery life.  The theory, common implementations, and techniques for simplifying calculations and modifying algorithms for implementations in embedded systems will be presented. Students will participate in hands-on exercises in implementing these on targets of microcontrollers or by designing digital circuits for FPGAs." },
            { code: "ECE 4780", title: "Embedded Security", credits: 4, desc: "This course focuses on vulnerabilities in digital system design, physical attack detection and prevention, and wireless security for IOT and automotive applications. FPGA based secure systems, cryptographic hardware/chips, Trust Zone, Root Trust, hardware security module, edge lock, crypto service manager, physically unclonable function and secure-core based design are covered." }
          ]
        }
      ],
      notes: [
        "A minimum grade of (C) must be earned for each individual course. ",
        "At least 12 credits of the minor must be completed at OU.",
        "At least 8 credits of courses chosen for the Minor in Computer Engineering must be non-duplicative with coursework in the student’s major, concentration, or another minor."
      ]
    },
    
    "computer-science": {
      id: "computer-science",
      name: "Computer Science ",
      desc: "The Computer Science minor is designed to complement a wide array of majors, enabling students to pursue their primary interests while acquiring applied knowledge and transferable competencies in designing, implementing, and utilizing computing tools and methodologies. ",
      groups: [
        {
          title: "GROUP A",
          subtitle: "Pick one course",
          courses: [
            { code: "CSI 1320", title: "Introduction to Python Programming and Unix", credits: 4, desc: "Algorithmic programming using Python. Topics include data storage and manipulation, binary numbers, bitwise operations, control structures, and functions. Introduction to fundamental data structures and script programming. Basic Unix commands and Unix utilities will be covered." },
            { code: "CSI 1420", title: "Introduction to C Programming and Unix", credits: 4, desc: "Topics include binary numbers and C programming concepts such as data types, bitwise operations, control flow, arrays, pointers, structures, and input/output. Basic Unix commands and shell programming are covered, as well as Unix utilities for developing and debugging C programs." }
          ]
        },
        {
          title: "GROUP B",
          subtitle: "Required Course",
          courses: [
            { code: "CSI 2300", title: "Object-Oriented Computing", credits: 4, desc: "Introduction to object-oriented computer programming using a high-level programming language such as Java. Classes, member functions, inheritance, polymorphism and operator overloading. Design methodologies and introduction to software engineering principles and practices. Basic data structures, algorithms and event driven programming concepts are introduced." }
          ]
        },
        {
          title: "GROUP C",
          subtitle: "Pick one course",
          courses: [
            { code: "CSI 3610", title: "Design and Analysis of Algorithms", credits: 4, desc: "Computer algorithms, their design and analysis. Strategies constructing algorithmic solutions, including divide-and-conquer, dynamic programming and greedy algorithms. Computational complexity as it pertains to time and space is used to evaluate the algorithms. A general overview of complexity classes is given." },
            { code: "CSI 3620", title: "Data Structures and Algorithms", credits: 4, desc: "Introduction to data abstraction and computer algorithms. The basic data structures in computer science, including stacks, queues, lists, and trees are covered. Core algorithmic concepts including divide-and-conquer, dynamic programming, and greedy and graph algorithms are discussed." }
          ]
        },
        {
          title: "GROUP D",
          subtitle: "Pick one course",
          courses: [
    { code: "CSI 3150", title: "Web and Mobile Systems", credits: 4, desc: "An introduction to web and mobile systems. Development of interactive web systems using front-end technologies such as HTML, CSS and JavaScript during the first half of the semester. A cross platform JavaScript framework, such as React Native along with React Library, for mobile apps development during the second half." },
    { code: "CSI 3370", title: "Software Engineering and Practice", credits: 4, desc: "Introduction to software engineering and practice. Topics include software process models, project and software management, requirements analysis, architecture modeling, implementation and system integration, quality assurance, and testing. The course includes a team project." },
    { code: "CSI 3430", title: "Theory of Computation", credits: 4, desc: "Formal models of computation, ranging from finite state automata to Turing machines. Computational models are used to discuss the languages recognized by these machines and address issues of computability." },
    { code: "CSI 3450", title: "Database Design and Implementation", credits: 4, desc: "Introduction to the design, implementation and management of database systems. Topics include planning, designing, and implementing a practical database using a relational database server for an application utilizing entity relationship diagrams, normal forms, and understanding relational database schemas. Advanced topics include concurrency control, query optimization, and introduction to database systems administration. The course includes a semester-long team project." },
    { code: "CSI 3480", title: "Security and Privacy in Computing", credits: 4, desc: "An introduction to principles and practices of security and privacy. Topics include an introduction to cryptography, host/network exploits and countermeasures, information risk assessment, access control, threat and incident management, information privacy concepts, privacy requirements, privacy-enhancing technologies, information privacy management, and legal and regulatory requirements. " },
    { code: "CSI 3660", title: "System Administration", credits: 4, desc: "This course teaches the skills necessary to analyze, deploy, manage and troubleshoot Linux servers. Topics include user authentication management, system configuration and management, periodic tasks automation, data backup techniques, server deployments, system maintenance and performance analysis, and security aspects of Linux systems." },
    { code: "CSI 3680", title: "Script Programming", credits: 4, desc: "An in-depth coverage of Python scripting and Unix shell programming to quickly automate various repetitive and complex tasks.  The goal is to do more with less code compared to traditional programming languages.  It includes rapid prototyping examples from multiple domains such as system administration, web applications, data wrangling, and system integration." },
    { code: "CSI 4230", title: "Android Application Development", credits: 4, desc: "The course focuses on Android application development using underlying frameworks, architecture, design, and implementation. Both classroom theory and hands-on labs enable students to gain in-depth experience in developing real-world Android applications. Topics include Android user interface development, Android application framework components, sensors integration, networking and persistent storage." },
    { code: "CSI 4240", title: "Cloud Computing", credits: 4, desc: "The course explores latest advances in hardware and software, system architecture, and new programming paradigms that are used to develop high-throughput distributed computer systems. Topics covered include computer clusters, virtual machines, automated data centers, cloud platform architectures, service-oriented architectures, cloud programming and software environments, grid computing, and peer-to-peer computing. The course will be supplemented by selected topics from recent technical literature. It includes a semester-long team project." },
    { code: "CSI 4350", title: "Programming Languages", credits: 4, desc: "Fundamental concepts in programming languages. Several high-level languages are studied in depth and their approaches to the fundamental issues in language design are compared. Issues include: scanning and parsing, type checking and type inference, control structures, operational semantics, binding times, run-time storage organization, compilation vs interpretation, block structure and scope of names. " },
    { code: "CSI 4370", title: "Software Verification and Testing", credits: 4, desc: "This course is designed to introduce the basic principles and techniques, facilitated by state-of-the-art software tools, in software verification and testing. Real-world examples are adopted to help understand and practice the underlying theory." },
    { code: "CSI 4380", title: "Game Programming", credits: 4, desc: "The course teaches game development skills that can be applied in various industries. Students learn to utilize various assets, game objects, and components to create diverse genres of 2D and 3D games in the Unity game engine using C# or other similar tools. Additionally, students collaborate in teams to produce fully functional games." },
    { code: "CSI 4500", title: "Operating Systems", credits: 4, desc: "Introduction to the concepts and design of operating systems. Typical topics include: sequential processes, concurrent processes, processor management, memory management, scheduling, file management, and resource protection. " },
    { code: "CSI 4650", title: "Parallel and Distributed Computing", credits: 4, desc: "This course provides an integrated view of the architecture, principles, and programming of parallel and distributed systems. Topics include instruction-level parallelism and its limitations, classification of parallel systems, shared-memory and distributed-memory architectures, distributed storage systems, foundation of parallel algorithms, distributed systems architecture, and programming interfaces for parallel and distributed computing." }
  ]
}

      ],
      notes: [
        "Students interested in pursuing the minor must submit a completed Minor Authorization Form that identifies the appropriately selected courses to the Minor Faculty Adviser in the Department of Computer Science and Engineering (CSE) for approval.",
        "A minimum grade of C is required in each course for the minor.",
        "Students must complete a minimum of six credits of the minor at the 3000 level or above, and at least half of the minor credit requirements must be earned at Oakland University.",
        "At least 8 credits of courses chosen for the Computer Science minor must be non-duplicative with coursework in the student’s major, concentration, or another minor.",
        "Students must fulfill the prerequisites for the courses they select as part of the minor. The minimum 15 credits for the minor requirement do not include prerequisite courses.",
        " Students must obtain permission from the CSE Department in order to register for CSI designated courses numbered 3000 or higher."
      ]
    },
    ds: {
      id: "ds",
      name: "Data Science",
      desc: "The Data Science minor is designed to complement a wide array of majors, enabling students to pursue their primary interests while acquiring applied knowledge and transferable competencies in extracting insights from complex data.",
      groups: [
        {
          title: "GROUP A",
          subtitle: "Both courses are required",
          courses: [
            { code: "CSI 1320", title: "Introduction to Python Programming and Unix", credits: 4, desc: "Algorithmic programming using Python. Topics include data storage and manipulation, binary numbers, bitwise operations, control structures, and functions. Introduction to fundamental data structures and script programming. Basic Unix commands and Unix utilities will be covered." },
            { code: "CSI 2810", title: "Introduction to Data Science in Python", credits: 4, desc: "An introductory level overview of data science lifecycle topics including data acquisition, management, preparation, analysis, model development and deployment, and data visualization.Students will gain practical experience by learning and applying libraries and packages that comprise Python data analysis ecosystem. It emphasizes concepts and strategies for writing Python code." }
          ]
        },
        {
          title: "GROUP B",
          subtitle: "Pick one course",
          courses: [
            { code: "CSI 3820", title: "Data Visualization", credits: 3, desc: "The course introduces interactive data visualization. Students learn best practices in data visualization and how to design and implement dashboards for use by stakeholders. It provides hands-on experiences using popular visualization software such as Tableau. Students practice data visualization skills in multiple assignments and a comprehensive semester-long team project." },
            { code: "CSI 3860", title: "Contemporary Issues in Data Science", credits: 3, desc: "The course provides an introduction to the relationship between data, ethics, governance, policy, and society to help students think explicitly about their social responsibilities as data scientists using case studies and examples. The course emphasizes writing and critical thinking." }
          ]
        },
       {
  title: "GROUP C",
  subtitle: "Pick one course",
  courses: [
    { code: "CSI 3450", title: "Database Design and Implementation", credits: 4, desc: "Introduction to the design, implementation and management of database systems. Topics include planning, designing, and implementing a practical database using a relational database server for an application utilizing entity relationship diagrams, normal forms, and understanding relational database schemas. Advanced topics include concurrency control, query optimization, and introduction to database systems administration. The course includes a semester-long team project."},
    { code: "CSI 3680", title: "Script Programming", credits: 4, desc: "An in-depth coverage of Python scripting and Unix shell programming to quickly automate various repetitive and complex tasks.  The goal is to do more with less code compared to traditional programming languages.  It includes rapid prototyping examples from multiple domains such as system administration, web applications, data wrangling, and system integration." },
    { code: "CSI 4450", title: "Database System I", credits: 4, desc: "This course introduces the fundamental concepts of NoSQL databases required to effectively manage the data storage and query requirements of modern-day applications in a scalable manner. The course covers the architecture, implementation, and use cases of four major NoSQL database categories: document, key-value stores, column-oriented, and graph." },
    { code: "CSI 4780", title: "Bioinformatics", credits: 4, desc: "This course covers the fundamental algorithms and computational methods for study of biological sequence data for comparative biology and evolution with the focus on discovery of genome content, function and organization. Specific methodologies covered include the algorithms for searching sequence databases, pair-wise and multiple sequence alignment, phylogenetic methods, and methods for pattern recognition and functional inference from sequence data." },
    { code: "CSI 4810", title: "Information Retrieval and Knowledge Discovery", credits: 4, desc: "This course covers the models for information retrieval from text and multimedia databases. Methodologies for database indexing and visualization are discussed. Statistical and deterministic algorithms for discovering knowledge from databases, including, decision trees, clustering, regression, and neural models are covered." },
    { code: "CSI 4820", title: "Big Data Analysis with Cloud Computing", credits: 4, desc: "Topics related to storage, management, and analysis of Big Data on cloud platform by introducing technologies like Hadoop with MapReduce, Spark, Pig, and Hive. It also covers modeling and implementation of Big Data using various NoSQL databases such as Key-value, Columnar, Document, and graph-based. It includes a semester-long team project." }
  ]
}

      ],
      notes: [
        "Some courses may have additional science prerequisites.",
        "At least half of the minor credits must be taken at OU."
      ]
    },
    // you can keep adding for ce, computer-science, ds, etc. in the same shape
  };

  window.MINOR_DATA = MINOR_DATA;
})();
