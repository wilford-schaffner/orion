export type Assignment = {
  id: string
  classCode: string
  className: string
  assignmentName: string
  description: string
  dueDate: string
  dueLabel: string
  section: "today" | "upcoming"
  groupCount: number
  memberHeadshots: string[]
  extraMemberCount: number
}

export type StudyGroup = {
  id: string
  name: string
  memberInitials: string[]
  extraMemberCount: number
}

export type ClassItem = {
  id: string
  code: string
  name: string
}

export type Category = {
  id: string
  label: string
  icon:
    | "exam-prep"
    | "quiet"
    | "collab"
    | "homework"
    | "lab"
    | "project"
}

export type FeaturedEvent = {
  id: string
  title: string
  subtitle: string
  dateLabel: string
  isOfficial: boolean
  imageUrl: string
}

export const assignments: Assignment[] = [
  {
    id: "chem-midterm",
    classCode: "DTR",
    className: "Design Thinking & Research",
    assignmentName: "Midterm Study Guide",
    description: "Review key concepts and practice questions for the midterm.",
    dueDate: "2026-05-20",
    dueLabel: "Today",
    section: "today",
    groupCount: 4,
    memberHeadshots: [
      "/images/headshots/headshot_01.jpg",
      "/images/headshots/headshot_02.jpg",
      "/images/headshots/headshot_03.jpg",
    ],
    extraMemberCount: 4,
  },
  {
    id: "hist-essay",
    classCode: "HIST",
    className: "World History II",
    assignmentName: "Essay Draft Workshop",
    description: "Peer review and refine your essay draft before submission.",
    dueDate: "2026-05-20",
    dueLabel: "Today",
    section: "today",
    groupCount: 4,
    memberHeadshots: [
      "/images/headshots/headshot_04.jpg",
      "/images/headshots/headshot_05.jpg",
    ],
    extraMemberCount: 2,
  },
  {
    id: "bio-lab",
    classCode: "BIO",
    className: "Cell Biology",
    assignmentName: "Lab Report 4",
    description: "Analyze experiment data and write up your findings.",
    dueDate: "2026-05-21",
    dueLabel: "Tomorrow",
    section: "upcoming",
    groupCount: 4,
    memberHeadshots: [
      "/images/headshots/headshot_06.jpg",
      "/images/headshots/headshot_07.jpg",
      "/images/headshots/headshot_08.jpg",
    ],
    extraMemberCount: 5,
  },
  {
    id: "calc-hw",
    classCode: "MATH",
    className: "Calculus II",
    assignmentName: "Problem Set 8",
    description: "Work through integration and series problems together.",
    dueDate: "2026-05-22",
    dueLabel: "Thu",
    section: "upcoming",
    groupCount: 4,
    memberHeadshots: [
      "/images/headshots/headshot_09.jpg",
      "/images/headshots/headshot_10.jpg",
      "/images/headshots/headshot_11.jpg",
    ],
    extraMemberCount: 6,
  },
  {
    id: "econ-quiz",
    classCode: "ECON",
    className: "Microeconomics",
    assignmentName: "Chapter 12 Quiz Prep",
    description: "Study supply, demand, and market equilibrium for the quiz.",
    dueDate: "2026-05-23",
    dueLabel: "Fri",
    section: "upcoming",
    groupCount: 4,
    memberHeadshots: [
      "/images/headshots/headshot_12.jpg",
      "/images/headshots/headshot_13.jpg",
    ],
    extraMemberCount: 3,
  },
  {
    id: "cs-project",
    classCode: "CS",
    className: "Data Structures",
    assignmentName: "Final Project Milestone",
    description: "Check in on project progress and get feedback on your design.",
    dueDate: "2026-05-24",
    dueLabel: "Sat",
    section: "upcoming",
    groupCount: 4,
    memberHeadshots: [
      "/images/headshots/headshot_14.jpg",
      "/images/headshots/headshot_15.jpg",
    ],
    extraMemberCount: 3,
  },
  {
    id: "phys-set",
    classCode: "PHYS",
    className: "Physics I",
    assignmentName: "Mechanics Problem Set",
    description: "Solve force and motion problems from this week's lecture.",
    dueDate: "2026-05-25",
    dueLabel: "Sun",
    section: "upcoming",
    groupCount: 4,
    memberHeadshots: [
      "/images/headshots/headshot_16.jpg",
      "/images/headshots/headshot_17.jpg",
      "/images/headshots/headshot_20.jpg",
    ],
    extraMemberCount: 4,
  },
]

export const featuredEvents: FeaturedEvent[] = [
  {
    id: "library-kickoff",
    title: "Library Finals Week Kickoff",
    subtitle: "Campus-wide quiet study session",
    dateLabel: "May 21",
    isOfficial: true,
    imageUrl: "/images/campus/GJTHg9LacAA3jlV.jpg",
  },
  {
    id: "cs-review",
    title: "CS Study Lounge",
    subtitle: "Open review for data structures finals",
    dateLabel: "May 22",
    isOfficial: true,
    imageUrl: "/images/campus/download.jpeg",
  },
  {
    id: "writing-center",
    title: "Writing Center Drop-in",
    subtitle: "Peer tutors for essay workshops",
    dateLabel: "May 23",
    isOfficial: true,
    imageUrl: "/images/campus/6NHUHQRS3AL4QUNPKK3GJDBB64.avif",
  },
  {
    id: "math-tutoring",
    title: "Math Tutoring Marathon",
    subtitle: "TA-led calculus review sessions",
    dateLabel: "May 24",
    isOfficial: true,
    imageUrl: "/images/campus/C5PJZPT7PZGNVLRZU6NZXDMHRU.avif",
  },
  {
    id: "study-hall",
    title: "Residence Hall Study Hall",
    subtitle: "Collaborative prep for intro courses",
    dateLabel: "May 25",
    isOfficial: true,
    imageUrl: "/images/campus/210514_Campus-DroneAerial_13.avif",
  },
  {
    id: "exam-jam",
    title: "Finals Exam Jam",
    subtitle: "Open floor group study with snacks",
    dateLabel: "May 26",
    isOfficial: true,
    imageUrl: "/images/campus/download%20(1).jpeg",
  },
]

export const classes: ClassItem[] = [
  { id: "dtr", code: "DTR", name: "Design Thinking" },
  { id: "hist", code: "HIST", name: "World History II" },
  { id: "math", code: "MATH", name: "Calculus II" },
  { id: "cs", code: "CS", name: "Data Structures" },
  { id: "bio", code: "BIO", name: "Cell Biology" },
]

export const categories: Category[] = [
  { id: "exam-prep", label: "Exam Prep", icon: "exam-prep" },
  { id: "quiet", label: "Quiet Study", icon: "quiet" },
  { id: "collab", label: "Collaborative", icon: "collab" },
  { id: "homework", label: "Homework Help", icon: "homework" },
  { id: "lab", label: "Lab Review", icon: "lab" },
  { id: "project", label: "Group Projects", icon: "project" },
]

export const groupsByAssignmentId: Record<string, StudyGroup[]> = {
  "chem-midterm": [
    {
      id: "g1",
      name: "Exam Prep — Quiet",
      memberInitials: ["AK", "JM", "LS"],
      extraMemberCount: 4,
    },
    {
      id: "g2",
      name: "Flashcard Sprint",
      memberInitials: ["RB", "TC", "DW"],
      extraMemberCount: 6,
    },
    {
      id: "g3",
      name: "Library Room 204",
      memberInitials: ["EP", "FN"],
      extraMemberCount: 3,
    },
    {
      id: "g4",
      name: "Evening Review",
      memberInitials: ["GH", "IK", "AK"],
      extraMemberCount: 5,
    },
  ],
  "hist-essay": [
    {
      id: "g1",
      name: "Thesis Workshop",
      memberInitials: ["RB", "TC"],
      extraMemberCount: 4,
    },
    {
      id: "g2",
      name: "Peer Review Circle",
      memberInitials: ["JM", "LS", "DW"],
      extraMemberCount: 2,
    },
    {
      id: "g3",
      name: "Citation Check",
      memberInitials: ["EP", "FN"],
      extraMemberCount: 6,
    },
    {
      id: "g4",
      name: "Writing Lounge",
      memberInitials: ["AK", "GH"],
      extraMemberCount: 3,
    },
  ],
  "calc-hw": [
    {
      id: "g1",
      name: "Problem Set Jam",
      memberInitials: ["DW", "EP", "FN"],
      extraMemberCount: 5,
    },
    {
      id: "g2",
      name: "Integration Practice",
      memberInitials: ["AK", "JM"],
      extraMemberCount: 4,
    },
    {
      id: "g3",
      name: "Office Hours Prep",
      memberInitials: ["LS", "RB", "TC"],
      extraMemberCount: 3,
    },
    {
      id: "g4",
      name: "Whiteboard Session",
      memberInitials: ["GH", "IK", "DW"],
      extraMemberCount: 6,
    },
  ],
  "cs-project": [
    {
      id: "g1",
      name: "Code Review",
      memberInitials: ["GH", "IK", "AK"],
      extraMemberCount: 4,
    },
    {
      id: "g2",
      name: "Debug Party",
      memberInitials: ["JM", "LS"],
      extraMemberCount: 5,
    },
    {
      id: "g3",
      name: "API Design",
      memberInitials: ["RB", "TC", "DW"],
      extraMemberCount: 2,
    },
    {
      id: "g4",
      name: "Demo Prep",
      memberInitials: ["EP", "FN"],
      extraMemberCount: 6,
    },
  ],
  "bio-lab": [
    {
      id: "g1",
      name: "Microscopy Review",
      memberInitials: ["AM", "BL"],
      extraMemberCount: 3,
    },
    {
      id: "g2",
      name: "Data Analysis",
      memberInitials: ["CR", "DW"],
      extraMemberCount: 4,
    },
    {
      id: "g3",
      name: "Report Writing",
      memberInitials: ["EP", "FN"],
      extraMemberCount: 5,
    },
    {
      id: "g4",
      name: "Pre-lab Prep",
      memberInitials: ["GH", "IK"],
      extraMemberCount: 2,
    },
  ],
  "econ-quiz": [
    {
      id: "g1",
      name: "Graph Practice",
      memberInitials: ["JT", "KM"],
      extraMemberCount: 4,
    },
    {
      id: "g2",
      name: "Concept Review",
      memberInitials: ["AK", "JM"],
      extraMemberCount: 6,
    },
    {
      id: "g3",
      name: "Practice Quiz",
      memberInitials: ["LS", "RB"],
      extraMemberCount: 3,
    },
    {
      id: "g4",
      name: "Office Hours Group",
      memberInitials: ["TC", "DW"],
      extraMemberCount: 5,
    },
  ],
  "phys-set": [
    {
      id: "g1",
      name: "Problem Set Jam",
      memberInitials: ["NP", "OQ"],
      extraMemberCount: 4,
    },
    {
      id: "g2",
      name: "Conceptual Review",
      memberInitials: ["RS", "AK"],
      extraMemberCount: 3,
    },
    {
      id: "g3",
      name: "Whiteboard Session",
      memberInitials: ["JM", "LS"],
      extraMemberCount: 6,
    },
    {
      id: "g4",
      name: "Exam Prep",
      memberInitials: ["GH", "IK", "DW"],
      extraMemberCount: 5,
    },
  ],
}

const dueLabelOrder: Record<string, number> = {
  Today: 0,
  Tomorrow: 1,
}

export function getSortedAssignments(): Assignment[] {
  return [...assignments].sort((a, b) => {
    const orderA = dueLabelOrder[a.dueLabel] ?? 2
    const orderB = dueLabelOrder[b.dueLabel] ?? 2
    if (orderA !== orderB) return orderA - orderB
    return a.dueDate.localeCompare(b.dueDate)
  })
}

export function getAssignment(id: string): Assignment | undefined {
  return assignments.find((a) => a.id === id)
}

export function getGroupsForAssignment(id: string): StudyGroup[] {
  return groupsByAssignmentId[id] ?? groupsByAssignmentId["chem-midterm"]
}
