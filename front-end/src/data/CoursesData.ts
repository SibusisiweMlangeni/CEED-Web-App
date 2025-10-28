export interface Instructor {
  name?: string;
  rating?: number;
  totalReviews?: number;
  students?: number;
  views?: string;
  bioLink?: string;
  avatar?: string;
}

export interface Dean {
  name?: string;
  email?: string;
  office?: string; 
  phone?: string; 
}

export interface CourseDetailProps {
  category?: string;
  title?: string;
  date?: string;
  about?: string;
  description?: string;
  tags?: string[];
  objectives?: string[];
  materials?: string[];
  requirements?: string[];
  audience?: string[];
  enrolledCount?: number;
  videoThumbnail?: string;
  videoUrl?: string;
  level?: string;
  duration?: string;
  subject?: string;
  language?: string;
  mode?: string;       // (Online, Hybrid, Location)
  credits?: number | string;
  instructor?: Instructor;
  price?:string | number;
}

export interface Course {
  id: number;
  title: string;
  courseCode?: string; 
  date: string;
  closingDate?: string;
  students: number | string;
  views: string;
  rating: string;
  teacher: string;
  price?: string;
  duration?: string;
  level?:string;
  language?:string;
  mode?:string;
  credits?:string | number;
  priceAmount?: string | number;
  imageUrl: string;
  teacherImageUrl: string;
  details?: CourseDetailProps;
  accreditation?:string;
  tags?: string[];
}

export interface Discipline {
  id: number;
  name: string;
  code: string;
  description: string;
  imageUrl: string;
  icon: string;
  careerPaths: string[];
  averageDuration: string;
  averageRating: number;
  numberOfCourses: number;
  closingDate: string;
  featured: boolean;
  courses: Course[];
}

export interface Faculty {
  id: number;
  name: string;
  code: string;
  description: string;
  imageUrl: string;
  icon: string;
  location?: string;
  established?: string;
  disciplines: Discipline[];
  establishedYear?: string | number;
  dean?: string | Dean;
  contactEmail?: string;
  totalDisciplines?: number | string;
  totalStudents?: number | string;
  featured?: string | boolean;
  averageDuration?: string;
  averageRating?: string | number;
  numberOfDisciplines?: string | number;
  closingDate?: string;
}

export interface MenuFacultyItem {
  name: string;
  disciplines: string[];
}

export const Courses: Course[] = [
  {
    id: 1,
    title: "Tebello Environmental Science and Sustainability",
    date: "October 4, 2024",
    students: "432",
    views: "1.2k",
    rating: "5.0",
    teacher: "Anthony Steven",
    price: "Free",
    imageUrl: "/assets/img/all-img/courses-image-1.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Science",
      title: "Environmental Science and Sustainability",
      instructor: {
        name: "Anthony Steven",
        rating: 5.0,
        totalReviews: 134,
        students: 432,
        views: "1.2k",
        bioLink: "/instructors/anthony-steven",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 4, 2024",
      enrolledCount: 432,
      about:
        "Explore how ecosystems function, the impact of human activity, and strategies for sustainability in a changing world.",
      description:
        "This course introduces the principles of environmental science, exploring sustainability, climate systems, biodiversity, and energy use. You’ll learn practical methods for creating a greener planet.",
      tags: ["Sustainability", "Environment", "Climate"],
      objectives: [
        "Understand ecological principles and sustainability challenges.",
        "Identify major environmental issues and global impacts.",
        "Learn about renewable energy and conservation strategies.",
      ],
      materials: ["Lecture videos", "Research papers", "Assignments"],
      requirements: ["Interest in sustainability", "Basic science knowledge"],
      audience: ["Students", "Researchers", "Environmental Enthusiasts"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      level: "Intermediate",
      duration: "18.5 hours",
      subject: "Environmental Studies",
      language: "English",
    },
  },
  {
    id: 2,
    title: "Introduction to Computer Science",
    date: "October 15, 2024",
    students: "874",
    views: "3.7k",
    rating: "4.5",
    teacher: "Sarah Johnson",
    price: "R120",
    imageUrl: "/assets/img/all-img/courses-image-2.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Technology",
      title: "Introduction to Computer Science",
      instructor: {
        name: "Sarah Johnson",
        rating: 4.5,
        totalReviews: 412,
        students: 874,
        views: "3.7k",
        bioLink: "/instructors/sarah-johnson",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 15, 2024",
      enrolledCount: 874,
      about:
        "Get started with computer science fundamentals, algorithms, and programming logic.",
      description:
        "This course covers key computer science topics including algorithms, data structures, and problem-solving techniques using modern programming languages.",
      tags: ["Programming", "Algorithms", "Tech Basics"],
      objectives: [
        "Learn computational thinking and logic.",
        "Understand how computers process data.",
        "Write basic programs using modern tools.",
      ],
      materials: ["Videos", "Practice exercises", "Code challenges"],
      requirements: ["Basic math skills", "Willingness to learn"],
      audience: ["Beginners", "Students", "Tech Enthusiasts"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      level: "Beginner",
      duration: "23.4 hours",
      subject: "Computer Science",
      language: "English",
    },
  },
  {
    id: 3,
    title: "Modern Art History",
    date: "October 22, 2024",
    students: "290",
    views: "2.1k",
    rating: "4.8",
    teacher: "Michael Brown",
    price: "Free",
    imageUrl: "/assets/img/all-img/courses-image-3.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Arts & Culture",
      title: "Modern Art History",
      instructor: {
        name: "Michael Brown",
        rating: 4.8,
        totalReviews: 254,
        students: 290,
        views: "2.1k",
        bioLink: "/instructors/michael-brown",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 22, 2024",
      enrolledCount: 290,
      about:
        "Discover the evolution of modern art movements and the artists who shaped them.",
      description:
        "From Impressionism to Abstract Expressionism, this course explores the social and political contexts that influenced major art movements of the 19th and 20th centuries.",
      tags: ["Art", "Culture", "History"],
      objectives: [
        "Understand the development of modern art.",
        "Identify key artists and movements.",
        "Explore the relationship between art and society.",
      ],
      materials: ["Slides", "Videos", "Museum resources"],
      requirements: [
        "Curiosity about art",
        "No prior art knowledge required",
      ],
      audience: ["Students", "Art Lovers", "Historians"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R0",
      level: "Beginner",
      duration: "14.2 hours",
      subject: "Art History",
      language: "English",
    },
  },
  {
    id: 4,
    title: "Principles of Economics",
    date: "October 8, 2024",
    students: "512",
    views: "1.9k",
    rating: "4.3",
    teacher: "Emily Davis",
    price: "R75",
    imageUrl: "/assets/img/all-img/courses-image-4.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Business",
      title: "Principles of Economics",
      instructor: {
        name: "Emily Davis",
        rating: 4.3,
        totalReviews: 378,
        students: 512,
        views: "1.9k",
        bioLink: "/instructors/emily-davis",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 8, 2024",
      enrolledCount: 512,
      about:
        "Learn the foundational principles of economics, including supply, demand, and market equilibrium.",
      description:
        "This course introduces micro and macroeconomic concepts, exploring how societies allocate resources and how economies grow over time.",
      tags: ["Economics", "Finance", "Business"],
      objectives: [
        "Understand key economic theories.",
        "Analyze market structures and competition.",
        "Explore global trade and fiscal policy.",
      ],
      materials: ["PDF notes", "Quizzes", "Video lectures"],
      requirements: ["Basic math", "Interest in markets"],
      audience: ["Students", "Business Majors", "Policy Makers"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R75",
      level: "Undergraduate",
      duration: "19.7 hours",
      subject: "Economics",
      language: "English",
    },
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    date: "October 19, 2024",
    students: "621",
    views: "2.8k",
    rating: "4.9",
    teacher: "David Wilson",
    price: "R150",
    imageUrl: "/assets/img/all-img/courses-image-5.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Technology",
      title: "Data Structures & Algorithms",
      instructor: {
        name: "David Wilson",
        rating: 4.9,
        totalReviews: 512,
        students: 621,
        views: "2.8k",
        bioLink: "/instructors/david-wilson",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 19, 2024",
      enrolledCount: 621,
      about:
        "Master the core building blocks of programming and efficient problem-solving techniques.",
      description:
        "Learn about arrays, trees, graphs, sorting, and searching algorithms — essential concepts for coding interviews and real-world software design.",
      tags: ["Algorithms", "Programming", "Software"],
      objectives: [
        "Understand key data structures and their applications.",
        "Implement efficient algorithms.",
        "Optimize solutions for performance.",
      ],
      materials: ["Code examples", "Assignments", "Lecture notes"],
      requirements: ["Basic programming skills"],
      audience: ["Developers", "CS Students", "Job Seekers"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R150",
      level: "Advanced",
      duration: "27.8 hours",
      subject: "Computer Science",
      language: "English",
    },
  },
  {
    id: 6,
    title: "Digital Marketing Fundamentals",
    date: "October 12, 2024",
    students: "398",
    views: "1.5k",
    rating: "4.6",
    teacher: "Olivia Martinez",
    price: "Free",
    imageUrl: "/assets/img/all-img/courses-image-6.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Business",
      title: "Digital Marketing Fundamentals",
      instructor: {
        name: "Olivia Martinez",
        rating: 4.6,
        totalReviews: 289,
        students: 398,
        views: "1.5k",
        bioLink: "/instructors/olivia-martinez",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 12, 2024",
      enrolledCount: 398,
      about:
        "Learn how to plan and execute successful digital marketing strategies.",
      description:
        "This course covers SEO, content marketing, social media, and paid advertising techniques that help brands grow their online presence.",
      tags: ["Marketing", "SEO", "Social Media"],
      objectives: [
        "Understand key digital marketing channels.",
        "Create an effective marketing plan.",
        "Analyze campaigns with data-driven insights.",
      ],
      materials: ["Videos", "Templates", "Case Studies"],
      requirements: ["Basic computer skills", "Interest in marketing"],
      audience: ["Marketers", "Entrepreneurs", "Students"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R0",
      level: "Beginner",
      duration: "15.6 hours",
      subject: "Marketing",
      language: "English",
    },
  },
  {
    id: 7,
    title: "Creative Writing Workshop",
    date: "October 27, 2024",
    students: "245",
    views: "1.1k",
    rating: "4.2",
    teacher: "James Taylor",
    price: "R90",
    imageUrl: "/assets/img/all-img/courses-image-7.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Literature",
      title: "Creative Writing Workshop",
      instructor: {
        name: "James Taylor",
        rating: 4.2,
        totalReviews: 189,
        students: 245,
        views: "1.1k",
        bioLink: "/instructors/james-taylor",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 27, 2024",
      enrolledCount: 245,
      about:
        "Develop your storytelling voice and learn how to craft compelling fiction and non-fiction.",
      description:
        "Through writing exercises, feedback sessions, and analysis of great works, you'll improve your writing style, structure, and creativity.",
      tags: ["Writing", "Creativity", "Storytelling"],
      objectives: [
        "Develop a consistent writing practice.",
        "Understand narrative structure.",
        "Enhance editing and revision skills.",
      ],
      materials: ["Writing prompts", "PDF notes"],
      requirements: ["Basic grammar knowledge", "Passion for writing"],
      audience: ["Writers", "Students", "Professionals"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R90",
      level: "Intermediate",
      duration: "12.8 hours",
      subject: "Creative Writing",
      language: "English",
    },
  },
  {
    id: 8,
    title: "Physics for Engineers",
    date: "October 6, 2024",
    students: "512",
    views: "2.6k",
    rating: "4.7",
    teacher: "Sophia Anderson",
    price: "Free",
    imageUrl: "/assets/img/all-img/courses-image-8.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Engineering",
      title: "Physics for Engineers",
      instructor: {
        name: "Sophia Anderson",
        rating: 4.7,
        totalReviews: 346,
        students: 512,
        views: "2.6k",
        bioLink: "/instructors/sophia-anderson",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 6, 2024",
      enrolledCount: 512,
      about:
        "A comprehensive course on physics principles essential for engineering applications.",
      description:
        "Covers topics like mechanics, thermodynamics, and electromagnetism, focusing on their practical applications in engineering systems.",
      tags: ["Physics", "Engineering", "Science"],
      objectives: [
        "Apply physics concepts to solve engineering problems.",
        "Understand the fundamentals of forces and energy.",
        "Explore real-world case studies in physics.",
      ],
      materials: ["Lecture notes", "Simulations", "Practice problems"],
      requirements: ["High school physics", "Math background"],
      audience: ["Engineering students", "Science Majors"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R0",
      level: "Undergraduate",
      duration: "20.3 hours",
      subject: "Physics",
      language: "English",
    },
  },
  {
    id: 9,
    title: "Psychology of Human Behavior",
    date: "October 21, 2024",
    students: "631",
    views: "3.2k",
    rating: "4.9",
    teacher: "William Thomas",
    price: "R110",
    imageUrl: "/assets/img/all-img/courses-image-9.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Social Science",
      title: "Psychology of Human Behavior",
      instructor: {
        name: "William Thomas",
        rating: 4.9,
        totalReviews: 502,
        students: 631,
        views: "3.2k",
        bioLink: "/instructors/william-thomas",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 21, 2024",
      enrolledCount: 631,
      about:
        "Examine how humans think, feel, and act across different social contexts.",
      description:
        "This course provides insights into cognitive, social, and behavioral psychology, helping you understand why people behave the way they do.",
      tags: ["Psychology", "Behavior", "Mind"],
      objectives: [
        "Understand the basics of human cognition.",
        "Explore social behavior and influence.",
        "Analyze emotional responses and motivation.",
      ],
      materials: ["Case studies", "Videos", "Discussion guides"],
      requirements: ["Interest in psychology"],
      audience: ["Students", "Therapists", "Managers"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R110",
      level: "Intermediate",
      duration: "17.9 hours",
      subject: "Psychology",
      language: "English",
    },
  },
  {
    id: 10,
    title: "Global Politics and Society",
    date: "October 14, 2024",
    students: "489",
    views: "2.0k",
    rating: "4.4",
    teacher: "Emma Moore",
    price: "Free",
    imageUrl: "/assets/img/all-img/courses-image-10.png",
    teacherImageUrl: "/assets/img/all-img/teacher-img.png",
    details: {
      category: "Politics",
      title: "Global Politics and Society",
      instructor: {
        name: "Emma Moore",
        rating: 4.4,
        totalReviews: 276,
        students: 489,
        views: "2.0k",
        bioLink: "/instructors/emma-moore",
        avatar: "/assets/img/all-img/teacher-img.png",
      },
      date: "October 14, 2024",
      enrolledCount: 489,
      about:
        "Understand international relations and the forces that shape global policy.",
      description:
        "This course examines political ideologies, global institutions, and how economic and social factors influence world politics.",
      tags: ["Politics", "Society", "Governance"],
      objectives: [
        "Learn about international organizations.",
        "Analyze political systems and power dynamics.",
        "Discuss global issues like climate and migration.",
      ],
      materials: ["Articles", "Videos", "Case discussions"],
      requirements: ["Interest in global affairs"],
      audience: ["Students", "Policy Analysts", "Journalists"],
      videoThumbnail: "/assets/img/all-img/course-video.png",
      videoUrl: "https://youtu.be/SbuRnwgG8rs?si=Oew2tM_U0WQPjJte",
      price: "R0",
      level: "Undergraduate",
      duration: "22.1 hours",
      subject: "Political Science",
      language: "English",
    },
  },
];

export const FacultiesData: Faculty[] = [
  {
    "id": 1,
    "name": "Faculty of Science",
    "code": "SCI",
    "description": "The Faculty of Science fosters curiosity, research, and innovation. It provides students with analytical, experimental, and computational skills to understand the natural and physical world.",
    "imageUrl": "/assets/img/faculties/science-banner.png",
    "icon": "bx bx-flask",
    "establishedYear": 1923,
    "dean": "Prof. Naledi Mthembu",
    "contactEmail": "science@university.ac.za",
    "location": "Main Campus, Block A",
    "totalDisciplines": 4,
    "totalStudents": 14800,
    "featured": true,
    "disciplines": [
      {
        "id": 1,
        "name": "Environmental Science",
        "code": "ENVSCI",
        "description": "Explore ecosystems, sustainability, and climate resilience through hands-on environmental research and policy engagement.",
        "imageUrl": "/assets/img/disciplines/environmental-science.jpg",
        "icon": "bx bx-globe",
        "careerPaths": [
          "Environmental Consultant",
          "Climate Policy Analyst",
          "Sustainability Officer",
          "Conservation Researcher"
        ],
        "averageDuration": "3 - 4 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "October 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 101,
            "title": "Environmental Science and Sustainability",
            "courseCode": "ENV101",
            "date": "October 4, 2025",
            "closingDate": "September 15, 2025",
            "students": 432,
            "views": "1.2k",
            "rating": "5.0",
            "teacher": "Dr. Anthony Steven",
            "teacherImageUrl": "/assets/img/all-img/teacher-anthony.png",
            "price": "Free",
            "imageUrl": "/assets/img/all-img/env-sustainability.png",
            "duration": "18.5 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Online",
            "credits": 12,
            "accreditation": "CHE / SAQA Approved",
            "tags": [
              "Sustainability",
              "Ecosystems",
              "Climate"
            ],
            "details": {
              "category": "Science",
              "title": "Environmental Science and Sustainability",
              "instructor": {
                "name": "Dr. Anthony Steven",
                "rating": 5,
                "totalReviews": 134,
                "students": 432,
                "views": "1.2k",
                "bioLink": "/instructors/anthony-steven",
                "avatar": "/assets/img/all-img/teacher-anthony.png"
              },
              "about": "Explore how ecosystems function, human impact, and strategies for sustainable futures.",
              "description": "Students gain a foundation in environmental systems, biodiversity, and sustainability science, applying theory to real-world ecological problems.",
              "objectives": [
                "Understand ecological systems and sustainability models.",
                "Analyze global environmental challenges.",
                "Explore renewable energy and resource management."
              ],
              "materials": [
                "Lecture videos",
                "Case studies",
                "Research assignments"
              ],
              "requirements": [
                "Matric Science",
                "Interest in sustainability"
              ],
              "audience": [
                "Students",
                "Researchers",
                "Environmentalists"
              ],
              "videoThumbnail": "/assets/img/all-img/env-video.png",
              "videoUrl": "https://youtu.be/environment101",
              "subject": "Environmental Studies"
            }
          },
          {
            "id": 102,
            "title": "Climate Change and Global Policy",
            "courseCode": "ENV202",
            "date": "February 15, 2025",
            "closingDate": "January 20, 2025",
            "students": 280,
            "views": "860",
            "rating": "4.9",
            "teacher": "Prof. Lerato Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R950",
            "imageUrl": "/assets/img/all-img/climate-policy.png",
            "duration": "24 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 16,
            "accreditation": "CHE / SAQA Approved",
            "tags": [
              "Climate",
              "Policy",
              "Sustainability"
            ],
            "details": {
              "category": "Science",
              "title": "Climate Change and Global Policy",
              "instructor": {
                "name": "Prof. Lerato Mokoena",
                "rating": 4.9,
                "totalReviews": 98,
                "students": 280,
                "views": "1.2k",
                "bioLink": "/instructors/lerato-mokoena",
                "avatar": "/assets/img/all-img/teacher-lerato.png"
              },
              "about": "Learn global climate frameworks, mitigation strategies, and sustainable development governance.",
              "description": "An advanced course focusing on the Paris Agreement, SDGs, and Africa’s role in climate resilience planning.",
              "objectives": [
                "Understand climate frameworks and agreements.",
                "Analyze climate policy implementation.",
                "Evaluate sustainability outcomes."
              ],
              "materials": [
                "Policy briefs",
                "Guest lectures",
                "Research tasks"
              ],
              "requirements": [
                "Prior environmental studies",
                "English proficiency"
              ],
              "audience": [
                "Policymakers",
                "Researchers",
                "Students"
              ],
              "videoThumbnail": "/assets/img/all-img/climate-video.png",
              "videoUrl": "https://youtu.be/climate-policy",
              "price": "R950",
              "subject": "Climate Policy"
            }
          },
          {
            "id": 103,
            "title": "Biodiversity and Conservation Management",
            "courseCode": "ENV303",
            "date": "May 6, 2025",
            "closingDate": "April 12, 2025",
            "students": 190,
            "views": "640",
            "rating": "4.7",
            "teacher": "Dr. Jabu Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-jabu.png",
            "price": "R720",
            "imageUrl": "/assets/img/all-img/biodiversity.png",
            "duration": "16 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "In-person",
            "credits": 14,
            "tags": [
              "Conservation",
              "Wildlife",
              "Ecology"
            ],
            "details": {
              "category": "Science",
              "title": "Biodiversity and Conservation Management",
              "instructor": {
                "name": "Dr. Jabu Nkosi",
                "rating": 4.7,
                "totalReviews": 89,
                "students": 190,
                "views": "1.2k",
                "bioLink": "/instructors/jabu-nkosi",
                "avatar": "/assets/img/all-img/teacher-jabu.png"
              },
              "about": "Protecting ecosystems and species diversity through science and management.",
              "description": "Learn biodiversity assessment methods, conservation planning, and sustainable ecosystem management.",
              "objectives": [
                "Assess biodiversity using modern techniques.",
                "Understand conservation frameworks.",
                "Apply adaptive management principles."
              ],
              "materials": [
                "Fieldwork",
                "Case reports",
                "Presentations"
              ],
              "requirements": [
                "Interest in wildlife or ecology"
              ],
              "audience": [
                "Students",
                "Conservationists",
                "Policy advisors"
              ],
              "videoThumbnail": "/assets/img/all-img/biodiversity-video.png",
              "videoUrl": "https://youtu.be/biodiversity101",
              "price": "R720",
              "subject": "Ecology"
            }
          },
          {
            "id": 104,
            "title": "Renewable Energy Systems",
            "courseCode": "ENV404",
            "date": "July 2, 2025",
            "closingDate": "June 10, 2025",
            "students": 320,
            "views": "980",
            "rating": "4.8",
            "teacher": "Eng. Thabo Makhubela",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1100",
            "imageUrl": "/assets/img/all-img/renewable-energy.png",
            "duration": "20 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 18,
            "tags": [
              "Renewable Energy",
              "Sustainability",
              "Engineering"
            ],
            "details": {
              "category": "Science",
              "title": "Renewable Energy Systems",
              "instructor": {
                "name": "Eng. Thabo Makhubela",
                "rating": 4.8,
                "totalReviews": 123,
                "students": 320,
                "views": "1.2k",
                "bioLink": "/instructors/thabo-makhubela",
                "avatar": "/assets/img/all-img/teacher-thabo.png"
              },
              "about": "An applied course on solar, wind, and hydro energy systems and their environmental impacts.",
              "description": "Students explore renewable technologies, energy conversion, and sustainable energy design.",
              "objectives": [
                "Understand renewable energy principles.",
                "Model solar and wind systems.",
                "Assess energy project sustainability."
              ],
              "materials": [
                "Lectures",
                "Project work",
                "Lab simulations"
              ],
              "requirements": [
                "Basic physics knowledge"
              ],
              "audience": [
                "Engineering students",
                "Sustainability professionals"
              ],
              "videoThumbnail": "/assets/img/all-img/energy-video.png",
              "videoUrl": "https://youtu.be/renewable-energy",
              "price": "R1100",
              "subject": "Renewable Energy"
            }
          }
        ]
      },
      {
        "id": 2,
        "name": "Physics",
        "code": "PHY",
        "description": "Physics explores the laws of nature, from the smallest subatomic particles to the vastness of galaxies. Students develop strong analytical and mathematical skills applicable to research, technology, and innovation.",
        "imageUrl": "/assets/img/disciplines/physics.jpg",
        "icon": "bx bx-atom",
        "careerPaths": [
          "Research Scientist",
          "Data Analyst",
          "Quantum Engineer",
          "Renewable Energy Specialist"
        ],
        "averageDuration": "3 - 4 years",
        "averageRating": 4.7,
        "numberOfCourses": 4,
        "closingDate": "October 12, 2025",
        "featured": false,
        "courses": [
          {
            "id": 201,
            "title": "Introduction to Classical Mechanics",
            "courseCode": "PHY101",
            "date": "March 5, 2025",
            "closingDate": "February 10, 2025",
            "students": 520,
            "views": "1.5k",
            "rating": "4.8",
            "teacher": "Prof. Sipho Molefe",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R850",
            "imageUrl": "/assets/img/all-img/physics-mechanics.png",
            "duration": "20 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "In-person",
            "credits": 12,
            "tags": [
              "Motion",
              "Forces",
              "Energy"
            ],
            "details": {
              "category": "Science",
              "title": "Introduction to Classical Mechanics",
              "instructor": {
                "name": "Prof. Sipho Molefe",
                "rating": 4.8,
                "totalReviews": 210,
                "views": "1.2k",
                "students": 520,
                "bioLink": "/instructors/sipho-molefe",
                "avatar": "/assets/img/all-img/teacher-sipho.png"
              },
              "about": "Study motion, Newton’s laws, and energy conservation using mathematical and experimental methods.",
              "description": "This foundational physics course introduces mechanical systems and motion dynamics, providing a base for engineering and scientific careers.",
              "objectives": [
                "Apply Newton’s laws to real-world problems.",
                "Understand energy conservation principles.",
                "Perform kinematic and dynamic analysis."
              ],
              "materials": [
                "Textbook",
                "Simulation software",
                "Lab experiments"
              ],
              "requirements": [
                "Mathematics proficiency",
                "Basic science knowledge"
              ],
              "audience": [
                "Undergraduate physics students",
                "Engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/mechanics-video.png",
              "videoUrl": "https://youtu.be/mechanics101",
              "price": "R850",
              "subject": "Physics"
            }
          },
          {
            "id": 202,
            "title": "Quantum Physics Fundamentals",
            "courseCode": "PHY202",
            "date": "June 8, 2025",
            "closingDate": "May 18, 2025",
            "students": 310,
            "views": "950",
            "rating": "4.9",
            "teacher": "Dr. Aisha Mahomed",
            "teacherImageUrl": "/assets/img/all-img/teacher-aisha.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/quantum-physics.png",
            "duration": "25 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 18,
            "tags": [
              "Quantum Mechanics",
              "Wave-Particle Duality",
              "Quantum Computing"
            ],
            "details": {
              "category": "Science",
              "title": "Quantum Physics Fundamentals",
              "instructor": {
                "name": "Dr. Aisha Mahomed",
                "rating": 4.9,
                "totalReviews": 130,
                "students": 310,
                "views": "1.2k",
                "bioLink": "/instructors/aisha-mahomed",
                "avatar": "/assets/img/all-img/teacher-aisha.png"
              },
              "about": "A modern introduction to quantum mechanics covering superposition, uncertainty, and quantum systems.",
              "description": "Students will explore wave-particle duality, quantum probability, and applications in quantum technology and computation.",
              "objectives": [
                "Understand the core principles of quantum theory.",
                "Apply Schrödinger’s equation to basic systems.",
                "Explore quantum computing concepts."
              ],
              "materials": [
                "Lecture notes",
                "Lab exercises",
                "Quantum simulator access"
              ],
              "requirements": [
                "Introductory physics",
                "Calculus knowledge"
              ],
              "audience": [
                "Science students",
                "Quantum enthusiasts"
              ],
              "videoThumbnail": "/assets/img/all-img/quantum-video.png",
              "videoUrl": "https://youtu.be/quantum101",
              "price": "R1,200",
              "subject": "Quantum Physics"
            }
          },
          {
            "id": 203,
            "title": "Thermodynamics and Statistical Mechanics",
            "courseCode": "PHY303",
            "date": "August 11, 2025",
            "closingDate": "July 25, 2025",
            "students": 270,
            "views": "830",
            "rating": "4.6",
            "teacher": "Prof. Daniel Kgosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-daniel.png",
            "price": "R980",
            "imageUrl": "/assets/img/all-img/thermodynamics.png",
            "duration": "22 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "In-person",
            "credits": 16,
            "tags": [
              "Heat",
              "Energy Transfer",
              "Entropy"
            ],
            "details": {
              "category": "Science",
              "title": "Thermodynamics and Statistical Mechanics",
              "instructor": {
                "name": "Prof. Daniel Kgosi",
                "rating": 4.6,
                "totalReviews": 102,
                "students": 270,
                "views": "1.2k",
                "bioLink": "/instructors/daniel-kgosi",
                "avatar": "/assets/img/all-img/teacher-daniel.png"
              },
              "about": "Explore the principles of energy, entropy, and equilibrium systems through macroscopic and microscopic perspectives.",
              "description": "This course bridges thermodynamics and statistical mechanics with applications in materials science and atmospheric physics.",
              "objectives": [
                "Understand thermodynamic laws.",
                "Relate microscopic behavior to macroscopic properties.",
                "Analyze thermal systems in equilibrium."
              ],
              "materials": [
                "Lab experiments",
                "Simulations",
                "Problem sets"
              ],
              "requirements": [
                "Basic physics",
                "Calculus II"
              ],
              "audience": [
                "Physics majors",
                "Engineering students"
              ],
              "videoThumbnail": "/assets/img/all-img/thermo-video.png",
              "videoUrl": "https://youtu.be/thermo101",
              "price": "R980",
              "subject": "Thermodynamics"
            }
          },
          {
            "id": 204,
            "title": "Astrophysics and Cosmology",
            "courseCode": "PHY404",
            "date": "September 18, 2025",
            "closingDate": "August 30, 2025",
            "students": 150,
            "views": "720",
            "rating": "4.9",
            "teacher": "Dr. Nomusa Zwide",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomusa.png",
            "price": "R1,350",
            "imageUrl": "/assets/img/all-img/astrophysics.png",
            "duration": "26 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 20,
            "tags": [
              "Astronomy",
              "Cosmology",
              "Space Science"
            ],
            "details": {
              "category": "Science",
              "title": "Astrophysics and Cosmology",
              "instructor": {
                "name": "Dr. Nomusa Zwide",
                "rating": 4.9,
                "totalReviews": 120,
                "students": 150,
                "views": "1.2k",
                "bioLink": "/instructors/nomusa-zwide",
                "avatar": "/assets/img/all-img/teacher-nomusa.png"
              },
              "about": "A comprehensive study of stellar structures, galaxies, and cosmological theories describing the universe.",
              "description": "This course explores the physics of celestial bodies, dark matter, and cosmological models that describe the universe’s evolution.",
              "objectives": [
                "Understand stellar evolution and black holes.",
                "Explore cosmological principles and observations.",
                "Analyze modern astrophysical data."
              ],
              "materials": [
                "Star charts",
                "Simulation software",
                "Research papers"
              ],
              "requirements": [
                "Intermediate physics",
                "Interest in space sciences"
              ],
              "audience": [
                "Physics majors",
                "Astronomy enthusiasts"
              ],
              "videoThumbnail": "/assets/img/all-img/astro-video.png",
              "videoUrl": "https://youtu.be/astro101",
              "price": "R1,350",
              "subject": "Astrophysics"
            }
          }
        ]
      },
      {
        "id": 3,
        "name": "Chemistry",
        "code": "CHEM",
        "description": "Chemistry studies the composition, structure, and transformation of matter. Students learn to explore the microscopic building blocks that define materials, life, and industrial processes.",
        "imageUrl": "/assets/img/disciplines/chemistry.jpg",
        "icon": "bx bx-flask",
        "careerPaths": [
          "Analytical Chemist",
          "Pharmaceutical Researcher",
          "Materials Scientist",
          "Chemical Engineer"
        ],
        "averageDuration": "3 - 4 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "October 20, 2025",
        "featured": false,
        "courses": [
          {
            "id": 301,
            "title": "General Chemistry Fundamentals",
            "courseCode": "CHE101",
            "date": "February 10, 2025",
            "closingDate": "January 20, 2025",
            "students": 610,
            "views": "1.4k",
            "rating": "4.9",
            "teacher": "Dr. Mbali Nkuna",
            "teacherImageUrl": "/assets/img/all-img/teacher-mbali.png",
            "price": "R800",
            "imageUrl": "/assets/img/all-img/general-chemistry.png",
            "duration": "20 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "In-person",
            "credits": 12,
            "tags": [
              "Atoms",
              "Molecules",
              "Reactions"
            ],
            "details": {
              "category": "Science",
              "title": "General Chemistry Fundamentals",
              "instructor": {
                "name": "Dr. Mbali Nkuna",
                "rating": 4.9,
                "totalReviews": 156,
                "students": 610,
                "views": "1.2k",
                "bioLink": "/instructors/mbali-nkuna",
                "avatar": "/assets/img/all-img/teacher-mbali.png"
              },
              "about": "An introduction to the principles of chemistry, including atomic structure, bonding, and reactions.",
              "description": "Students will explore chemical fundamentals with practical lab experiments and problem-solving exercises.",
              "objectives": [
                "Understand chemical bonding and reaction mechanisms.",
                "Perform basic lab experiments safely.",
                "Apply stoichiometry in real contexts."
              ],
              "materials": [
                "Lab manual",
                "Safety gear",
                "Lecture slides"
              ],
              "requirements": [
                "Matric Science",
                "Basic Mathematics"
              ],
              "audience": [
                "Science undergraduates",
                "Lab assistants in training"
              ],
              "videoThumbnail": "/assets/img/all-img/chemistry-video.png",
              "videoUrl": "https://youtu.be/general-chemistry",
              "price": "R800",
              "subject": "Chemistry"
            }
          },
          {
            "id": 302,
            "title": "Organic Chemistry: Structure and Function",
            "courseCode": "CHE202",
            "date": "April 8, 2025",
            "closingDate": "March 15, 2025",
            "students": 420,
            "views": "1.1k",
            "rating": "4.8",
            "teacher": "Prof. Pieter Van Rensburg",
            "teacherImageUrl": "/assets/img/all-img/teacher-pieter.png",
            "price": "R950",
            "imageUrl": "/assets/img/all-img/organic-chemistry.png",
            "duration": "22 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 16,
            "tags": [
              "Organic Chemistry",
              "Molecules",
              "Carbon Compounds"
            ],
            "details": {
              "category": "Science",
              "title": "Organic Chemistry: Structure and Function",
              "instructor": {
                "name": "Prof. Pieter Van Rensburg",
                "rating": 4.8,
                "totalReviews": 114,
                "students": 420,
                "views": "1.2k",
                "bioLink": "/instructors/pieter-van-rensburg",
                "avatar": "/assets/img/all-img/teacher-pieter.png"
              },
              "about": "A detailed study of carbon-based compounds, reaction mechanisms, and organic synthesis.",
              "description": "Covers organic structure, reactivity, and synthesis methods essential for pharmaceutical and industrial applications.",
              "objectives": [
                "Master the structure and behavior of organic molecules.",
                "Identify reaction types and their outcomes.",
                "Develop lab synthesis and purification skills."
              ],
              "materials": [
                "Textbook",
                "Reaction models",
                "Lab access"
              ],
              "requirements": [
                "Introductory chemistry knowledge"
              ],
              "audience": [
                "Science majors",
                "Pre-med students"
              ],
              "videoThumbnail": "/assets/img/all-img/organic-video.png",
              "videoUrl": "https://youtu.be/organic-chem101",
              "price": "R950",
              "subject": "Organic Chemistry"
            }
          },
          {
            "id": 303,
            "title": "Physical Chemistry: Thermodynamics and Kinetics",
            "courseCode": "CHE303",
            "date": "June 12, 2025",
            "closingDate": "May 20, 2025",
            "students": 290,
            "views": "850",
            "rating": "4.7",
            "teacher": "Dr. Xolani Maseko",
            "teacherImageUrl": "/assets/img/all-img/teacher-xolani.png",
            "price": "R1,100",
            "imageUrl": "/assets/img/all-img/physical-chemistry.png",
            "duration": "24 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "In-person",
            "credits": 18,
            "tags": [
              "Thermodynamics",
              "Kinetics",
              "Reactions"
            ],
            "details": {
              "category": "Science",
              "title": "Physical Chemistry: Thermodynamics and Kinetics",
              "instructor": {
                "name": "Dr. Xolani Maseko",
                "rating": 4.7,
                "totalReviews": 92,
                "students": 290,
                "views": "1.2k",
                "bioLink": "/instructors/xolani-maseko",
                "avatar": "/assets/img/all-img/teacher-xolani.png"
              },
              "about": "Study energy transfer and reaction rates at the molecular level.",
              "description": "This course links thermodynamic laws to molecular behavior, equipping students to analyze reaction dynamics and system equilibria.",
              "objectives": [
                "Understand the first and second laws of thermodynamics.",
                "Measure reaction rates experimentally.",
                "Apply kinetic models to chemical systems."
              ],
              "materials": [
                "Lab instruments",
                "Calculations software",
                "Problem sets"
              ],
              "requirements": [
                "Basic calculus",
                "General chemistry"
              ],
              "audience": [
                "Chemistry majors",
                "Materials researchers"
              ],
              "videoThumbnail": "/assets/img/all-img/physical-video.png",
              "videoUrl": "https://youtu.be/thermo-kinetics",
              "price": "R1,100",
              "subject": "Physical Chemistry"
            }
          },
          {
            "id": 304,
            "title": "Analytical and Instrumental Chemistry",
            "courseCode": "CHE404",
            "date": "August 25, 2025",
            "closingDate": "August 5, 2025",
            "students": 240,
            "views": "770",
            "rating": "4.8",
            "teacher": "Dr. Faith Baloyi",
            "teacherImageUrl": "/assets/img/all-img/teacher-faith.png",
            "price": "R1,250",
            "imageUrl": "/assets/img/all-img/analytical-chemistry.png",
            "duration": "26 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 20,
            "tags": [
              "Spectroscopy",
              "Chromatography",
              "Analysis"
            ],
            "details": {
              "category": "Science",
              "title": "Analytical and Instrumental Chemistry",
              "instructor": {
                "name": "Dr. Faith Baloyi",
                "rating": 4.8,
                "totalReviews": 105,
                "students": 240,
                "views": "1.2k",
                "bioLink": "/instructors/faith-baloyi",
                "avatar": "/assets/img/all-img/teacher-faith.png"
              },
              "about": "Master modern laboratory instrumentation and analytical techniques.",
              "description": "Covers chromatography, spectroscopy, and quantitative methods for accurate chemical analysis and quality control.",
              "objectives": [
                "Operate spectroscopic and chromatographic instruments.",
                "Interpret experimental data.",
                "Understand analytical quality assurance processes."
              ],
              "materials": [
                "Instrument manuals",
                "Data analysis worksheets"
              ],
              "requirements": [
                "Organic and physical chemistry background"
              ],
              "audience": [
                "Analytical chemists",
                "Laboratory technicians"
              ],
              "videoThumbnail": "/assets/img/all-img/analytical-video.png",
              "videoUrl": "https://youtu.be/analytical101",
              "price": "R1,250",
              "subject": "Analytical Chemistry"
            }
          }
        ]
      },
      {
        "id": 4,
        "name": "Computer Science",
        "code": "COMP",
        "description": "Computer Science explores computation, algorithms, data structures, and systems that power modern technology. Students gain practical and theoretical knowledge to design, build, and optimize digital solutions for real-world challenges.",
        "imageUrl": "/assets/img/disciplines/computer-science.jpg",
        "icon": "bx bx-desktop",
        "careerPaths": [
          "Software Engineer",
          "Data Scientist",
          "AI Researcher",
          "Cybersecurity Analyst",
          "Systems Architect"
        ],
        "averageDuration": "3 - 4 years",
        "averageRating": 4.9,
        "numberOfCourses": 4,
        "closingDate": "November 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 401,
            "title": "Introduction to Programming with Python",
            "courseCode": "CSC101",
            "date": "February 15, 2025",
            "closingDate": "January 25, 2025",
            "students": 850,
            "views": "2.1k",
            "rating": "4.9",
            "teacher": "Dr. Naledi Phiri",
            "teacherImageUrl": "/assets/img/all-img/teacher-naledi.png",
            "price": "R950",
            "imageUrl": "/assets/img/all-img/python-course.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "Python",
              "Programming",
              "Algorithms"
            ],
            "details": {
              "category": "Computer Science",
              "title": "Introduction to Programming with Python",
              "instructor": {
                "name": "Dr. Naledi Phiri",
                "rating": 4.9,
                "totalReviews": 210,
                "students": 850,
                "views": "1.2k",
                "bioLink": "/instructors/naledi-phiri",
                "avatar": "/assets/img/all-img/teacher-naledi.png"
              },
              "about": "Learn the fundamentals of programming using Python, the most popular language for beginners and professionals alike.",
              "description": "Covers basic syntax, variables, loops, functions, and problem-solving techniques for practical coding skills.",
              "objectives": [
                "Understand programming logic and data types.",
                "Write and debug simple Python programs.",
                "Apply problem-solving techniques using algorithms."
              ],
              "materials": [
                "Video tutorials",
                "Coding exercises",
                "Project files"
              ],
              "requirements": [
                "Basic computer literacy"
              ],
              "audience": [
                "Beginners",
                "High school graduates",
                "Non-technical learners"
              ],
              "videoThumbnail": "/assets/img/all-img/python-video.png",
              "videoUrl": "https://youtu.be/python101",
              "price": "R950",
              "subject": "Programming"
            }
          },
          {
            "id": 402,
            "title": "Data Structures and Algorithms",
            "courseCode": "CSC202",
            "date": "April 10, 2025",
            "closingDate": "March 20, 2025",
            "students": 640,
            "views": "1.7k",
            "rating": "4.8",
            "teacher": "Prof. Bongani Molefe",
            "teacherImageUrl": "/assets/img/all-img/teacher-bongani.png",
            "price": "R1,100",
            "imageUrl": "/assets/img/all-img/data-structures.png",
            "duration": "30 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "In-person",
            "credits": 16,
            "tags": [
              "Algorithms",
              "Data Structures",
              "Efficiency"
            ],
            "details": {
              "category": "Computer Science",
              "title": "Data Structures and Algorithms",
              "instructor": {
                "name": "Prof. Bongani Molefe",
                "rating": 4.8,
                "totalReviews": 178,
                "students": 640,
                "views": "1.2k",
                "bioLink": "/instructors/bongani-molefe",
                "avatar": "/assets/img/all-img/teacher-bongani.png"
              },
              "about": "An in-depth look at the fundamental building blocks of efficient programming.",
              "description": "Teaches how to design, implement, and analyze data structures such as lists, trees, and graphs to solve computational problems efficiently.",
              "objectives": [
                "Design optimal data structures for given problems.",
                "Analyze time and space complexity.",
                "Understand core algorithmic strategies."
              ],
              "materials": [
                "Lecture notes",
                "Coding projects",
                "Practice problems"
              ],
              "requirements": [
                "Intro to programming",
                "Basic mathematics"
              ],
              "audience": [
                "Undergraduate CS students",
                "Aspiring software engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/dsa-video.png",
              "videoUrl": "https://youtu.be/dsa-basics",
              "price": "R1,100",
              "subject": "Algorithms"
            }
          },
          {
            "id": 403,
            "title": "Web Development with React and Node.js",
            "courseCode": "CSC303",
            "date": "June 18, 2025",
            "closingDate": "May 25, 2025",
            "students": 780,
            "views": "2.5k",
            "rating": "4.9",
            "teacher": "Ms. Thandi Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thandi.png",
            "price": "R1,300",
            "imageUrl": "/assets/img/all-img/web-dev.png",
            "duration": "28 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 18,
            "tags": [
              "React",
              "Node.js",
              "Web Development"
            ],
            "details": {
              "category": "Computer Science",
              "title": "Web Development with React and Node.js",
              "instructor": {
                "name": "Ms. Thandi Mokoena",
                "rating": 4.9,
                "totalReviews": 245,
                "students": 780,
                "views": "1.2k",
                "bioLink": "/instructors/thandi-mokoena",
                "avatar": "/assets/img/all-img/teacher-thandi.png"
              },
              "about": "Build responsive, scalable web applications using modern JavaScript frameworks.",
              "description": "Learn full-stack development with React for frontend and Node.js for backend. Includes real-world projects and deployment practice.",
              "objectives": [
                "Build dynamic web interfaces using React.",
                "Create REST APIs with Node.js and Express.",
                "Integrate frontend and backend systems seamlessly."
              ],
              "materials": [
                "Project templates",
                "GitHub examples",
                "Video walkthroughs"
              ],
              "requirements": [
                "Basic JavaScript knowledge"
              ],
              "audience": [
                "Web developers",
                "Software engineering students"
              ],
              "videoThumbnail": "/assets/img/all-img/webdev-video.png",
              "videoUrl": "https://youtu.be/react-nodejs",
              "price": "R1,300",
              "subject": "Web Development"
            }
          },
          {
            "id": 404,
            "title": "Artificial Intelligence and Machine Learning",
            "courseCode": "CSC404",
            "date": "September 5, 2025",
            "closingDate": "August 15, 2025",
            "students": 520,
            "views": "2.2k",
            "rating": "4.9",
            "teacher": "Dr. Kabelo Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-kabelo.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/ai-ml.png",
            "duration": "36 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Online",
            "credits": 20,
            "tags": [
              "AI",
              "Machine Learning",
              "Neural Networks"
            ],
            "details": {
              "category": "Computer Science",
              "title": "Artificial Intelligence and Machine Learning",
              "instructor": {
                "name": "Dr. Kabelo Dlamini",
                "rating": 4.9,
                "totalReviews": 312,
                "students": 520,
                "views": "1.2k",
                "bioLink": "/instructors/kabelo-dlamini",
                "avatar": "/assets/img/all-img/teacher-kabelo.png"
              },
              "about": "Explore how intelligent systems learn and make decisions using data.",
              "description": "This course introduces core concepts in AI, including supervised learning, neural networks, and data modeling using Python and TensorFlow.",
              "objectives": [
                "Understand AI and ML fundamentals.",
                "Implement machine learning models in Python.",
                "Evaluate model performance and bias."
              ],
              "materials": [
                "Python notebooks",
                "Datasets",
                "Recorded lectures"
              ],
              "requirements": [
                "Intermediate Python",
                "Linear algebra basics"
              ],
              "audience": [
                "Data scientists",
                "AI enthusiasts",
                "Researchers"
              ],
              "videoThumbnail": "/assets/img/all-img/ai-video.png",
              "videoUrl": "https://youtu.be/ai-ml-basics",
              "price": "R1,500",
              "subject": "Artificial Intelligence"
            }
          }
        ]
      },
      {
        "id": 5,
        "name": "Mathematics",
        "code": "MATH",
        "description": "Mathematics forms the foundation of logic, structure, and quantitative analysis across all scientific and technological fields. This discipline equips students with analytical thinking, problem-solving, and computational modeling skills applicable in various industries.",
        "imageUrl": "/assets/img/disciplines/mathematics.jpg",
        "icon": "bx bx-calculator",
        "careerPaths": [
          "Data Analyst",
          "Actuarial Scientist",
          "Quantitative Researcher",
          "Statistician",
          "Mathematics Educator"
        ],
        "averageDuration": "3 - 4 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "November 15, 2025",
        "featured": false,
        "courses": [
          {
            "id": 501,
            "title": "Calculus I: Differential and Integral Calculus",
            "courseCode": "MAT101",
            "date": "February 12, 2025",
            "closingDate": "January 25, 2025",
            "students": 730,
            "views": "1.6k",
            "rating": "4.8",
            "teacher": "Prof. Ahmed Osman",
            "teacherImageUrl": "/assets/img/all-img/teacher-ahmed.png",
            "price": "R950",
            "imageUrl": "/assets/img/all-img/calculus.png",
            "duration": "26 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "Calculus",
              "Derivatives",
              "Integrals"
            ],
            "details": {
              "category": "Mathematics",
              "title": "Calculus I: Differential and Integral Calculus",
              "instructor": {
                "name": "Prof. Ahmed Osman",
                "rating": 4.8,
                "totalReviews": 182,
                "students": 730,
                "views": "1.2k",
                "bioLink": "/instructors/ahmed-osman",
                "avatar": "/assets/img/all-img/teacher-ahmed.png"
              },
              "about": "Learn the principles of differentiation and integration, and their applications in science and engineering.",
              "description": "This foundational course explores limits, derivatives, integrals, and their use in solving real-world problems related to motion, growth, and optimization.",
              "objectives": [
                "Understand the concept of limits and continuity.",
                "Apply differentiation techniques to analyze change.",
                "Solve integration problems with real-world relevance."
              ],
              "materials": [
                "Textbook",
                "Problem sets",
                "Video lectures"
              ],
              "requirements": [
                "High school mathematics"
              ],
              "audience": [
                "Science and engineering students"
              ],
              "videoThumbnail": "/assets/img/all-img/calculus-video.png",
              "videoUrl": "https://youtu.be/calculus101",
              "price": "R950",
              "subject": "Calculus"
            }
          },
          {
            "id": 502,
            "title": "Linear Algebra and Vector Spaces",
            "courseCode": "MAT202",
            "date": "April 15, 2025",
            "closingDate": "March 20, 2025",
            "students": 540,
            "views": "1.3k",
            "rating": "4.9",
            "teacher": "Dr. Refilwe Molewa",
            "teacherImageUrl": "/assets/img/all-img/teacher-refilwe.png",
            "price": "R1,050",
            "imageUrl": "/assets/img/all-img/linear-algebra.png",
            "duration": "24 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "In-person",
            "credits": 16,
            "tags": [
              "Matrices",
              "Vectors",
              "Linear Systems"
            ],
            "details": {
              "category": "Mathematics",
              "title": "Linear Algebra and Vector Spaces",
              "instructor": {
                "name": "Dr. Refilwe Molewa",
                "rating": 4.9,
                "totalReviews": 163,
                "students": 540,
                "views": "1.2k",
                "bioLink": "/instructors/refilwe-molewa",
                "avatar": "/assets/img/all-img/teacher-refilwe.png"
              },
              "about": "Understand the structure of vector spaces and how to manipulate matrices to solve systems of equations.",
              "description": "Explores matrix algebra, determinants, eigenvalues, and their applications in data science, machine learning, and physics.",
              "objectives": [
                "Master matrix operations and transformations.",
                "Apply eigenvalue analysis in practical contexts.",
                "Relate linear algebra concepts to computer science and physics."
              ],
              "materials": [
                "Lecture slides",
                "Practice sheets",
                "Software simulations"
              ],
              "requirements": [
                "Basic calculus"
              ],
              "audience": [
                "Mathematics and computer science students"
              ],
              "videoThumbnail": "/assets/img/all-img/linear-video.png",
              "videoUrl": "https://youtu.be/linear-algebra",
              "price": "R1,050",
              "subject": "Linear Algebra"
            }
          },
          {
            "id": 503,
            "title": "Statistics and Probability for Data Analysis",
            "courseCode": "MAT303",
            "date": "June 20, 2025",
            "closingDate": "May 30, 2025",
            "students": 890,
            "views": "2.2k",
            "rating": "4.9",
            "teacher": "Dr. Ethan Jacobs",
            "teacherImageUrl": "/assets/img/all-img/teacher-ethan.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/statistics.png",
            "duration": "30 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Online",
            "credits": 18,
            "tags": [
              "Statistics",
              "Probability",
              "Data Analysis"
            ],
            "details": {
              "category": "Mathematics",
              "title": "Statistics and Probability for Data Analysis",
              "instructor": {
                "name": "Dr. Ethan Jacobs",
                "rating": 4.9,
                "totalReviews": 208,
                "students": 890,
                "views": "1.2k",
                "bioLink": "/instructors/ethan-jacobs",
                "avatar": "/assets/img/all-img/teacher-ethan.png"
              },
              "about": "Learn how to collect, analyze, and interpret data using statistical tools and probability theory.",
              "description": "Covers descriptive statistics, probability distributions, hypothesis testing, and regression models for business, health, and tech applications.",
              "objectives": [
                "Use statistical software to analyze datasets.",
                "Understand sampling methods and distributions.",
                "Apply regression and hypothesis testing in decision-making."
              ],
              "materials": [
                "Datasets",
                "R scripts",
                "Case studies"
              ],
              "requirements": [
                "Basic math and Excel knowledge"
              ],
              "audience": [
                "Business analysts",
                "Researchers",
                "Students"
              ],
              "videoThumbnail": "/assets/img/all-img/stats-video.png",
              "videoUrl": "https://youtu.be/statistics-course",
              "price": "R1,200",
              "subject": "Statistics"
            }
          },
          {
            "id": 504,
            "title": "Mathematical Modelling and Simulation",
            "courseCode": "MAT404",
            "date": "August 30, 2025",
            "closingDate": "August 10, 2025",
            "students": 410,
            "views": "1.1k",
            "rating": "4.8",
            "teacher": "Prof. Susan Ndlovu",
            "teacherImageUrl": "/assets/img/all-img/teacher-susan.png",
            "price": "R1,400",
            "imageUrl": "/assets/img/all-img/mathematical-modeling.png",
            "duration": "28 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 20,
            "tags": [
              "Modeling",
              "Simulation",
              "Applied Mathematics"
            ],
            "details": {
              "category": "Mathematics",
              "title": "Mathematical Modelling and Simulation",
              "instructor": {
                "name": "Prof. Susan Ndlovu",
                "rating": 4.8,
                "totalReviews": 134,
                "students": 410,
                "views": "1.2k",
                "bioLink": "/instructors/susan-ndlovu",
                "avatar": "/assets/img/all-img/teacher-susan.png"
              },
              "about": "Explore how mathematical models simulate real-world systems in economics, engineering, and biology.",
              "description": "Students will construct and analyze models, use differential equations, and run simulations to predict and optimize outcomes in various disciplines.",
              "objectives": [
                "Formulate mathematical models from real-world problems.",
                "Use simulation tools to analyze system behavior.",
                "Apply mathematical reasoning in predictive analytics."
              ],
              "materials": [
                "Simulation software",
                "Case projects",
                "Datasets"
              ],
              "requirements": [
                "Calculus and differential equations"
              ],
              "audience": [
                "Applied mathematicians",
                "Engineers",
                "Data scientists"
              ],
              "videoThumbnail": "/assets/img/all-img/modeling-video.png",
              "videoUrl": "https://youtu.be/maths-models",
              "price": "R1,400",
              "subject": "Applied Mathematics"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Faculty of Engineering and the Built Environment",
    "code": "ENG",
    "description": "The Faculty of Engineering equips students with the technical, analytical, and creative skills needed to design and improve the physical and digital infrastructure of modern society. Through hands-on training and research, students prepare to become innovators shaping industries, cities, and technologies of the future.",
    "imageUrl": "/assets/img/faculties/engineering.jpg",
    "icon": "bx bx-buildings",
    "dean": {
      "name": "Prof. Lerato Molefe",
      "email": "lerato.molefe@ceed.ac.za",
      "office": "Engineering Building, Room 201",
      "phone": "+27 21 555 7890"
    },
    "contactEmail": "engineering@ceed.ac.za",
    "averageDuration": "4 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 4,
    "featured": true,
    "closingDate": "December 10, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Civil Engineering",
        "code": "CIVIL",
        "description": "Civil Engineering focuses on the design, construction, and maintenance of infrastructure projects such as roads, bridges, buildings, and water systems. Students learn to integrate science, technology, and sustainability in engineering design to shape the built environment.",
        "imageUrl": "/assets/img/disciplines/civil-engineering.jpg",
        "icon": "bx bx-buildings",
        "careerPaths": [
          "Structural Engineer",
          "Transportation Engineer",
          "Geotechnical Consultant",
          "Urban Infrastructure Planner",
          "Project Manager"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "November 25, 2025",
        "featured": true,
        "courses": [
          {
            "id": 201,
            "title": "Structural Analysis and Design",
            "courseCode": "CIV101",
            "date": "February 20, 2025",
            "closingDate": "January 30, 2025",
            "students": 510,
            "views": "1.4k",
            "rating": "4.9",
            "teacher": "Prof. Themba Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-themba.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/structural-engineering.png",
            "duration": "30 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 16,
            "tags": [
              "Structures",
              "Design",
              "Load Analysis"
            ],
            "details": {
              "category": "Civil Engineering",
              "title": "Structural Analysis and Design",
              "instructor": {
                "name": "Prof. Themba Khumalo",
                "rating": 4.9,
                "totalReviews": 175,
                "students": 510,
                "views": "1.2k",
                "bioLink": "/instructors/themba-khumalo",
                "avatar": "/assets/img/all-img/teacher-themba.png"
              },
              "about": "Learn to analyze structural components and design systems that ensure stability and safety.",
              "description": "Covers methods of analyzing beams, frames, and trusses, introducing principles of structural design using modern tools.",
              "objectives": [
                "Perform static and dynamic load calculations.",
                "Design safe and efficient structures.",
                "Apply sustainability principles in civil design."
              ],
              "materials": [
                "Software models",
                "Design projects",
                "Lecture slides"
              ],
              "requirements": [
                "Basic physics and mathematics"
              ],
              "audience": [
                "Engineering students",
                "Construction professionals"
              ],
              "videoThumbnail": "/assets/img/all-img/structural-video.png",
              "videoUrl": "https://youtu.be/structural-design",
              "price": "R1,200",
              "subject": "Structural Engineering"
            }
          },
          {
            "id": 202,
            "title": "Geotechnical Engineering and Soil Mechanics",
            "courseCode": "CIV202",
            "date": "April 14, 2025",
            "closingDate": "March 20, 2025",
            "students": 360,
            "views": "980",
            "rating": "4.7",
            "teacher": "Dr. Andile Moyo",
            "teacherImageUrl": "/assets/img/all-img/teacher-andile.png",
            "price": "R1,350",
            "imageUrl": "/assets/img/all-img/geotechnical.png",
            "duration": "28 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "In-person",
            "credits": 16,
            "tags": [
              "Soil",
              "Foundations",
              "Geotechnics"
            ],
            "details": {
              "category": "Civil Engineering",
              "title": "Geotechnical Engineering and Soil Mechanics",
              "instructor": {
                "name": "Dr. Andile Moyo",
                "rating": 4.7,
                "totalReviews": 139,
                "students": 360,
                "views": "1.2k",
                "bioLink": "/instructors/andile-moyo",
                "avatar": "/assets/img/all-img/teacher-andile.png"
              },
              "about": "Understand the mechanical behavior of soil and its role in foundation design.",
              "description": "This course introduces soil properties, testing, and classification with practical applications in foundation and earth structure design.",
              "objectives": [
                "Identify soil types and their engineering properties.",
                "Perform field and lab soil tests.",
                "Design shallow and deep foundations."
              ],
              "materials": [
                "Lab manuals",
                "Testing kits",
                "Data sheets"
              ],
              "requirements": [
                "Basic structural knowledge"
              ],
              "audience": [
                "Civil engineers",
                "Construction supervisors"
              ],
              "videoThumbnail": "/assets/img/all-img/geo-video.png",
              "videoUrl": "https://youtu.be/soil-mechanics",
              "price": "R1,350",
              "subject": "Geotechnical Engineering"
            }
          },
          {
            "id": 203,
            "title": "Transportation Systems and Highway Design",
            "courseCode": "CIV303",
            "date": "June 22, 2025",
            "closingDate": "May 30, 2025",
            "students": 420,
            "views": "1.2k",
            "rating": "4.8",
            "teacher": "Dr. Jason Ndlovu",
            "teacherImageUrl": "/assets/img/all-img/teacher-jason.png",
            "price": "R1,400",
            "imageUrl": "/assets/img/all-img/transportation-engineering.png",
            "duration": "32 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 18,
            "tags": [
              "Transportation",
              "Urban Planning",
              "Infrastructure"
            ],
            "details": {
              "category": "Civil Engineering",
              "title": "Transportation Systems and Highway Design",
              "instructor": {
                "name": "Dr. Jason Ndlovu",
                "rating": 4.8,
                "totalReviews": 152,
                "students": 420,
                "views": "1.2k",
                "bioLink": "/instructors/jason-ndlovu",
                "avatar": "/assets/img/all-img/teacher-jason.png"
              },
              "about": "Learn how to plan and design safe, efficient transportation systems for urban and rural areas.",
              "description": "Covers principles of traffic flow, pavement design, road geometry, and transport policy. Students develop design projects using simulation software.",
              "objectives": [
                "Apply transportation design standards.",
                "Analyze road safety and efficiency.",
                "Integrate sustainability into transport systems."
              ],
              "materials": [
                "Simulation software",
                "Design projects",
                "Case studies"
              ],
              "requirements": [
                "Intro to civil engineering"
              ],
              "audience": [
                "Civil and transport engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/transport-video.png",
              "videoUrl": "https://youtu.be/transportation101",
              "price": "R1,400",
              "subject": "Transportation Engineering"
            }
          },
          {
            "id": 204,
            "title": "Water Resources and Environmental Systems",
            "courseCode": "CIV404",
            "date": "August 28, 2025",
            "closingDate": "August 5, 2025",
            "students": 310,
            "views": "870",
            "rating": "4.8",
            "teacher": "Prof. Zanele Sithole",
            "teacherImageUrl": "/assets/img/all-img/teacher-zanele.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/water-engineering.png",
            "duration": "34 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Online",
            "credits": 20,
            "tags": [
              "Hydrology",
              "Water Systems",
              "Environment"
            ],
            "details": {
              "category": "Civil Engineering",
              "title": "Water Resources and Environmental Systems",
              "instructor": {
                "name": "Prof. Zanele Sithole",
                "rating": 4.8,
                "totalReviews": 128,
                "students": 310,
                "views": "1.2k",
                "bioLink": "/instructors/zanele-sithole",
                "avatar": "/assets/img/all-img/teacher-zanele.png"
              },
              "about": "Study the management of water systems and sustainable environmental design.",
              "description": "This course integrates hydrology, hydraulics, and environmental engineering for sustainable water resource management and climate adaptation.",
              "objectives": [
                "Model water distribution and treatment systems.",
                "Understand hydrologic cycle processes.",
                "Design systems for sustainable urban water management."
              ],
              "materials": [
                "GIS data",
                "Simulation tools",
                "Lecture notes"
              ],
              "requirements": [
                "Fluid mechanics",
                "Environmental awareness"
              ],
              "audience": [
                "Civil engineers",
                "Environmental specialists"
              ],
              "videoThumbnail": "/assets/img/all-img/water-video.png",
              "videoUrl": "https://youtu.be/water-resources",
              "price": "R1,500",
              "subject": "Water Engineering"
            }
          }
        ]
      },
      {
        "id": 2,
        "name": "Electrical Engineering",
        "code": "ELEC",
        "description": "Electrical Engineering focuses on the study, design, and application of electrical systems, circuits, and electronic devices. Students learn to design power systems, control systems, and communication networks that power modern technology.",
        "imageUrl": "/assets/img/disciplines/electrical-engineering.jpg",
        "icon": "bx bx-plug",
        "careerPaths": [
          "Power Systems Engineer",
          "Electronics Designer",
          "Control Systems Engineer",
          "Telecommunications Engineer",
          "Automation Specialist"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "November 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 205,
            "title": "Circuit Analysis and Design",
            "courseCode": "ELE101",
            "date": "February 25, 2025",
            "closingDate": "January 30, 2025",
            "students": 480,
            "views": "1.2k",
            "rating": "4.8",
            "teacher": "Prof. Sipho Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/circuit-analysis.png",
            "duration": "28 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 16,
            "tags": [
              "Circuits",
              "Voltage",
              "Current"
            ],
            "details": {
              "category": "Electrical Engineering",
              "title": "Circuit Analysis and Design",
              "instructor": {
                "name": "Prof. Sipho Dlamini",
                "rating": 4.8,
                "totalReviews": 160,
                "students": 480,
                "views": "1.2k",
                "bioLink": "/instructors/sipho-dlamini",
                "avatar": "/assets/img/all-img/teacher-sipho.png"
              },
              "about": "Understand electrical circuit principles and learn to design functional circuits.",
              "description": "Covers Ohm’s law, Kirchhoff’s laws, AC/DC analysis, and practical circuit design projects using simulation software.",
              "objectives": [
                "Analyze series and parallel circuits.",
                "Design and test basic electrical circuits.",
                "Understand power and energy calculations."
              ],
              "materials": [
                "Lab kits",
                "Simulation software",
                "Lecture slides"
              ],
              "requirements": [
                "Basic physics and math"
              ],
              "audience": [
                "Electrical engineering students",
                "Technicians"
              ],
              "videoThumbnail": "/assets/img/all-img/circuit-video.png",
              "videoUrl": "https://youtu.be/circuit-analysis",
              "price": "R1,200",
              "subject": "Circuit Design"
            }
          },
          {
            "id": 206,
            "title": "Electronics and Microcontrollers",
            "courseCode": "ELE202",
            "date": "April 18, 2025",
            "closingDate": "March 25, 2025",
            "students": 420,
            "views": "1.1k",
            "rating": "4.9",
            "teacher": "Dr. Lerato Mahlangu",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R1,350",
            "imageUrl": "/assets/img/all-img/electronics.png",
            "duration": "30 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 18,
            "tags": [
              "Microcontrollers",
              "Embedded Systems",
              "Electronics"
            ],
            "details": {
              "category": "Electrical Engineering",
              "title": "Electronics and Microcontrollers",
              "instructor": {
                "name": "Dr. Lerato Mahlangu",
                "rating": 4.9,
                "totalReviews": 145,
                "students": 420,
                "views": "1.2k",
                "bioLink": "/instructors/lerato-mahlangu",
                "avatar": "/assets/img/all-img/teacher-lerato.png"
              },
              "about": "Learn to design and program electronic devices using microcontrollers.",
              "description": "Covers digital and analog electronics, microcontroller programming, sensors, and IoT applications.",
              "objectives": [
                "Program microcontrollers for automation tasks.",
                "Design circuits for embedded applications.",
                "Integrate sensors and actuators in projects."
              ],
              "materials": [
                "Microcontroller kits",
                "Programming IDE",
                "Lecture notes"
              ],
              "requirements": [
                "Intro to circuits"
              ],
              "audience": [
                "Electrical engineers",
                "Electronics enthusiasts"
              ],
              "videoThumbnail": "/assets/img/all-img/electronics-video.png",
              "videoUrl": "https://youtu.be/microcontrollers101",
              "price": "R1,350",
              "subject": "Electronics"
            }
          },
          {
            "id": 207,
            "title": "Power Systems and Renewable Energy",
            "courseCode": "ELE303",
            "date": "June 25, 2025",
            "closingDate": "May 30, 2025",
            "students": 370,
            "views": "950",
            "rating": "4.8",
            "teacher": "Prof. Kabelo Mthembu",
            "teacherImageUrl": "/assets/img/all-img/teacher-kabelo.png",
            "price": "R1,400",
            "imageUrl": "/assets/img/all-img/power-systems.png",
            "duration": "32 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "In-person",
            "credits": 20,
            "tags": [
              "Power Systems",
              "Renewables",
              "Energy"
            ],
            "details": {
              "category": "Electrical Engineering",
              "title": "Power Systems and Renewable Energy",
              "instructor": {
                "name": "Prof. Kabelo Mthembu",
                "rating": 4.8,
                "totalReviews": 130,
                "students": 370,
                "views": "1.2k",
                "bioLink": "/instructors/kabelo-mthembu",
                "avatar": "/assets/img/all-img/teacher-kabelo.png"
              },
              "about": "Study electrical power generation, transmission, and renewable energy integration.",
              "description": "Includes generation technologies, smart grids, solar and wind energy, and system stability analysis.",
              "objectives": [
                "Design power generation and distribution systems.",
                "Integrate renewable energy sources.",
                "Analyze load and grid stability."
              ],
              "materials": [
                "Simulation software",
                "Lab experiments",
                "Textbook"
              ],
              "requirements": [
                "Circuits knowledge"
              ],
              "audience": [
                "Electrical engineers",
                "Energy specialists"
              ],
              "videoThumbnail": "/assets/img/all-img/power-video.png",
              "videoUrl": "https://youtu.be/power-systems",
              "price": "R1,400",
              "subject": "Power Engineering"
            }
          },
          {
            "id": 208,
            "title": "Control Systems and Automation",
            "courseCode": "ELE404",
            "date": "August 30, 2025",
            "closingDate": "August 10, 2025",
            "students": 320,
            "views": "820",
            "rating": "4.9",
            "teacher": "Dr. Nomsa Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomsa.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/control-systems.png",
            "duration": "34 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 20,
            "tags": [
              "Automation",
              "Control Systems",
              "Industrial Engineering"
            ],
            "details": {
              "category": "Electrical Engineering",
              "title": "Control Systems and Automation",
              "instructor": {
                "name": "Dr. Nomsa Khumalo",
                "rating": 4.9,
                "totalReviews": 142,
                "students": 320,
                "views": "1.2k",
                "bioLink": "/instructors/nomsa-khumalo",
                "avatar": "/assets/img/all-img/teacher-nomsa.png"
              },
              "about": "Learn to design, model, and control automated industrial and robotic systems.",
              "description": "Covers PID controllers, feedback systems, sensors, actuators, and industrial automation projects.",
              "objectives": [
                "Design control systems for real-world applications.",
                "Implement automation using sensors and actuators.",
                "Analyze system stability and performance."
              ],
              "materials": [
                "Simulation tools",
                "Lab kits",
                "Project files"
              ],
              "requirements": [
                "Basic circuits and electronics"
              ],
              "audience": [
                "Electrical engineers",
                "Automation specialists"
              ],
              "videoThumbnail": "/assets/img/all-img/control-video.png",
              "videoUrl": "https://youtu.be/control-systems",
              "price": "R1,500",
              "subject": "Control Systems"
            }
          }
        ]
      },
      {
        "id": 3,
        "name": "Mechanical Engineering",
        "code": "MECH",
        "description": "Mechanical Engineering focuses on the design, analysis, and manufacturing of mechanical systems. Students learn to create efficient machines, engines, and thermal systems that power industries, vehicles, and energy solutions.",
        "imageUrl": "/assets/img/disciplines/mechanical-engineering.jpg",
        "icon": "bx bx-cog",
        "careerPaths": [
          "Mechanical Design Engineer",
          "Manufacturing Engineer",
          "Automotive Engineer",
          "Aerospace Engineer",
          "Energy Systems Engineer"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "December 5, 2025",
        "featured": true,
        "courses": [
          {
            "id": 209,
            "title": "Thermodynamics and Heat Transfer",
            "courseCode": "MECH101",
            "date": "February 28, 2025",
            "closingDate": "February 5, 2025",
            "students": 450,
            "views": "1.1k",
            "rating": "4.8",
            "teacher": "Prof. Thabo Mkhize",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1,250",
            "imageUrl": "/assets/img/all-img/thermodynamics.png",
            "duration": "30 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 16,
            "tags": [
              "Thermodynamics",
              "Heat Transfer",
              "Energy Systems"
            ],
            "details": {
              "category": "Mechanical Engineering",
              "title": "Thermodynamics and Heat Transfer",
              "instructor": {
                "name": "Prof. Thabo Mkhize",
                "rating": 4.8,
                "totalReviews": 150,
                "students": 450,
                "views": "1.2k",
                "bioLink": "/instructors/thabo-mkhize",
                "avatar": "/assets/img/all-img/teacher-thabo.png"
              },
              "about": "Learn the principles of energy, heat, and their applications in mechanical systems.",
              "description": "Covers laws of thermodynamics, heat exchangers, energy efficiency, and practical engineering applications.",
              "objectives": [
                "Understand energy conservation and heat transfer principles.",
                "Analyze thermodynamic cycles.",
                "Design efficient thermal systems."
              ],
              "materials": [
                "Lecture notes",
                "Simulation software",
                "Lab experiments"
              ],
              "requirements": [
                "Physics and calculus basics"
              ],
              "audience": [
                "Mechanical engineering students",
                "Energy engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/thermo-video.png",
              "videoUrl": "https://youtu.be/thermodynamics",
              "price": "R1,250",
              "subject": "Thermodynamics"
            }
          },
          {
            "id": 210,
            "title": "Mechanics of Materials",
            "courseCode": "MECH202",
            "date": "April 20, 2025",
            "closingDate": "March 25, 2025",
            "students": 390,
            "views": "980",
            "rating": "4.8",
            "teacher": "Dr. Siphelele Zulu",
            "teacherImageUrl": "/assets/img/all-img/teacher-siphelele.png",
            "price": "R1,300",
            "imageUrl": "/assets/img/all-img/mechanics.png",
            "duration": "28 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "In-person",
            "credits": 16,
            "tags": [
              "Stress Analysis",
              "Materials",
              "Structures"
            ],
            "details": {
              "category": "Mechanical Engineering",
              "title": "Mechanics of Materials",
              "instructor": {
                "name": "Dr. Siphelele Zulu",
                "rating": 4.8,
                "totalReviews": 138,
                "students": 390,
                "views": "1.2k",
                "bioLink": "/instructors/siphelele-zulu",
                "avatar": "/assets/img/all-img/teacher-siphelele.png"
              },
              "about": "Understand how materials behave under different forces and design safe structures.",
              "description": "Covers stress-strain relationships, elasticity, plasticity, and applications in beams, shafts, and pressure vessels.",
              "objectives": [
                "Analyze material behavior under load.",
                "Perform stress calculations for engineering components.",
                "Apply material science principles to design."
              ],
              "materials": [
                "Problem sets",
                "Lab exercises",
                "Simulation tools"
              ],
              "requirements": [
                "Calculus and physics knowledge"
              ],
              "audience": [
                "Mechanical and civil engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/mechanics-video.png",
              "videoUrl": "https://youtu.be/mechanics-materials",
              "price": "R1,300",
              "subject": "Material Mechanics"
            }
          },
          {
            "id": 211,
            "title": "Fluid Mechanics and Hydraulics",
            "courseCode": "MECH303",
            "date": "June 28, 2025",
            "closingDate": "June 5, 2025",
            "students": 350,
            "views": "920",
            "rating": "4.7",
            "teacher": "Prof. Zandile Dube",
            "teacherImageUrl": "/assets/img/all-img/teacher-zandile.png",
            "price": "R1,400",
            "imageUrl": "/assets/img/all-img/fluid-mechanics.png",
            "duration": "32 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 18,
            "tags": [
              "Fluid Mechanics",
              "Hydraulics",
              "Thermal Systems"
            ],
            "details": {
              "category": "Mechanical Engineering",
              "title": "Fluid Mechanics and Hydraulics",
              "instructor": {
                "name": "Prof. Zandile Dube",
                "rating": 4.7,
                "totalReviews": 130,
                "students": 350,
                "views": "1.2k",
                "bioLink": "/instructors/zandile-dube",
                "avatar": "/assets/img/all-img/teacher-zandile.png"
              },
              "about": "Study the behavior of fluids and their applications in mechanical and industrial systems.",
              "description": "Covers fluid statics, dynamics, flow in pipes, pumps, turbines, and practical hydraulics applications.",
              "objectives": [
                "Understand fluid properties and flow behavior.",
                "Analyze hydraulic systems.",
                "Apply fluid mechanics in engineering design."
              ],
              "materials": [
                "Simulation software",
                "Lab experiments",
                "Case studies"
              ],
              "requirements": [
                "Basic mechanics and mathematics"
              ],
              "audience": [
                "Mechanical engineers",
                "Industrial designers"
              ],
              "videoThumbnail": "/assets/img/all-img/fluid-video.png",
              "videoUrl": "https://youtu.be/fluid-mechanics",
              "price": "R1,400",
              "subject": "Fluid Mechanics"
            }
          },
          {
            "id": 212,
            "title": "Mechanical Design and CAD",
            "courseCode": "MECH404",
            "date": "September 5, 2025",
            "closingDate": "August 15, 2025",
            "students": 310,
            "views": "860",
            "rating": "4.9",
            "teacher": "Dr. Nomfundo Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomfundo.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/mechanical-design.png",
            "duration": "34 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Online",
            "credits": 20,
            "tags": [
              "CAD",
              "Design",
              "Mechanical Systems"
            ],
            "details": {
              "category": "Mechanical Engineering",
              "title": "Mechanical Design and CAD",
              "instructor": {
                "name": "Dr. Nomfundo Nkosi",
                "rating": 4.9,
                "totalReviews": 140,
                "students": 310,
                "views": "1.2k",
                "bioLink": "/instructors/nomfundo-nkosi",
                "avatar": "/assets/img/all-img/teacher-nomfundo.png"
              },
              "about": "Learn mechanical design principles and use CAD software to develop real-world systems.",
              "description": "Covers engineering drawing, CAD modeling, kinematics, and mechanical system design for projects and industry applications.",
              "objectives": [
                "Create mechanical designs using CAD tools.",
                "Analyze mechanical systems for efficiency and safety.",
                "Translate concepts into detailed engineering models."
              ],
              "materials": [
                "CAD software",
                "Project files",
                "Tutorial videos"
              ],
              "requirements": [
                "Intro to mechanics and physics"
              ],
              "audience": [
                "Mechanical engineers",
                "Design engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/design-video.png",
              "videoUrl": "https://youtu.be/mechanical-design",
              "price": "R1,500",
              "subject": "Mechanical Design"
            }
          }
        ]
      },
      {
        "id": 4,
        "name": "Chemical Engineering",
        "code": "CHEMENG",
        "description": "Chemical Engineering focuses on the design, optimization, and operation of processes that convert raw materials into valuable products. Students learn to apply chemistry, biology, physics, and mathematics to solve problems in energy, materials, and manufacturing industries.",
        "imageUrl": "/assets/img/disciplines/chemical-engineering.jpg",
        "icon": "bx bx-flask",
        "careerPaths": [
          "Process Engineer",
          "Materials Scientist",
          "Biochemical Engineer",
          "Energy and Petrochemical Engineer",
          "Environmental Process Consultant"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "December 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 213,
            "title": "Chemical Process Fundamentals",
            "courseCode": "CHE101",
            "date": "March 1, 2025",
            "closingDate": "February 10, 2025",
            "students": 420,
            "views": "1.0k",
            "rating": "4.8",
            "teacher": "Prof. Nkosinathi Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-nkosinathi.png",
            "price": "R1,300",
            "imageUrl": "/assets/img/all-img/chemical-process.png",
            "duration": "28 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 16,
            "tags": [
              "Chemical Processes",
              "Unit Operations",
              "Reaction Engineering"
            ],
            "details": {
              "category": "Chemical Engineering",
              "title": "Chemical Process Fundamentals",
              "instructor": {
                "name": "Prof. Nkosinathi Dlamini",
                "rating": 4.8,
                "totalReviews": 145,
                "students": 420,
                "views": "1.2k",
                "bioLink": "/instructors/nkosinathi-dlamini",
                "avatar": "/assets/img/all-img/teacher-nkosinathi.png"
              },
              "about": "Learn the basics of chemical process operations, including reaction kinetics, heat and mass transfer.",
              "description": "Introduces students to core principles of chemical processes, including reactor design, separation techniques, and process safety considerations.",
              "objectives": [
                "Understand unit operations and process flow.",
                "Analyze chemical reactions and energy balances.",
                "Design simple chemical processes safely and efficiently."
              ],
              "materials": [
                "Lab manuals",
                "Simulation software",
                "Lecture notes"
              ],
              "requirements": [
                "Intro to chemistry and physics"
              ],
              "audience": [
                "Chemical engineering students",
                "Process engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/chemical-video.png",
              "videoUrl": "https://youtu.be/chemical-process",
              "price": "R1,300",
              "subject": "Chemical Processes"
            }
          },
          {
            "id": 214,
            "title": "Biochemical Engineering",
            "courseCode": "CHE202",
            "date": "May 5, 2025",
            "closingDate": "April 10, 2025",
            "students": 360,
            "views": "890",
            "rating": "4.9",
            "teacher": "Dr. Lerato Sithole",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R1,400",
            "imageUrl": "/assets/img/all-img/biochemical.png",
            "duration": "30 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "In-person",
            "credits": 18,
            "tags": [
              "Bioprocesses",
              "Enzymes",
              "Fermentation"
            ],
            "details": {
              "category": "Chemical Engineering",
              "title": "Biochemical Engineering",
              "instructor": {
                "name": "Dr. Lerato Sithole",
                "rating": 4.9,
                "totalReviews": 138,
                "students": 360,
                "views": "1.2k",
                "bioLink": "/instructors/lerato-sithole",
                "avatar": "/assets/img/all-img/teacher-lerato.png"
              },
              "about": "Explore how biological systems are used in industrial chemical processes.",
              "description": "Covers enzyme kinetics, fermentation, bioreactor design, and applications in pharmaceuticals, food, and energy production.",
              "objectives": [
                "Design and operate bioreactors.",
                "Apply biochemical principles in manufacturing.",
                "Optimize bioprocesses for efficiency."
              ],
              "materials": [
                "Lab kits",
                "Lecture notes",
                "Research papers"
              ],
              "requirements": [
                "Intro to chemistry and biology"
              ],
              "audience": [
                "Chemical and biochemical engineers",
                "Biotech students"
              ],
              "videoThumbnail": "/assets/img/all-img/biochem-video.png",
              "videoUrl": "https://youtu.be/biochemical-engineering",
              "price": "R1,400",
              "subject": "Biochemical Engineering"
            }
          },
          {
            "id": 215,
            "title": "Process Simulation and Optimization",
            "courseCode": "CHE303",
            "date": "July 10, 2025",
            "closingDate": "June 20, 2025",
            "students": 330,
            "views": "820",
            "rating": "4.8",
            "teacher": "Prof. Kabelo Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-kabelo.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/process-simulation.png",
            "duration": "32 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Hybrid",
            "credits": 20,
            "tags": [
              "Simulation",
              "Optimization",
              "Process Design"
            ],
            "details": {
              "category": "Chemical Engineering",
              "title": "Process Simulation and Optimization",
              "instructor": {
                "name": "Prof. Kabelo Nkosi",
                "rating": 4.8,
                "totalReviews": 130,
                "students": 330,
                "views": "1.2k",
                "bioLink": "/instructors/kabelo-nkosi",
                "avatar": "/assets/img/all-img/teacher-kabelo.png"
              },
              "about": "Use software tools to model, simulate, and optimize chemical processes.",
              "description": "Covers process flow modeling, optimization techniques, sensitivity analysis, and industrial applications using leading simulation software.",
              "objectives": [
                "Model chemical processes using simulation software.",
                "Optimize efficiency and safety of chemical operations.",
                "Analyze process performance and troubleshoot."
              ],
              "materials": [
                "Simulation software",
                "Tutorials",
                "Case studies"
              ],
              "requirements": [
                "Chemical process fundamentals"
              ],
              "audience": [
                "Chemical engineers",
                "Process designers"
              ],
              "videoThumbnail": "/assets/img/all-img/simulation-video.png",
              "videoUrl": "https://youtu.be/process-simulation",
              "price": "R1,500",
              "subject": "Process Simulation"
            }
          },
          {
            "id": 216,
            "title": "Environmental and Safety Engineering",
            "courseCode": "CHE404",
            "date": "September 15, 2025",
            "closingDate": "August 25, 2025",
            "students": 310,
            "views": "790",
            "rating": "4.9",
            "teacher": "Dr. Zanele Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-zanele.png",
            "price": "R1,600",
            "imageUrl": "/assets/img/all-img/environmental-safety.png",
            "duration": "34 hours",
            "level": "Advanced",
            "language": "English",
            "mode": "Online",
            "credits": 20,
            "tags": [
              "Safety",
              "Environment",
              "Process Engineering"
            ],
            "details": {
              "category": "Chemical Engineering",
              "title": "Environmental and Safety Engineering",
              "instructor": {
                "name": "Dr. Zanele Nkosi",
                "rating": 4.9,
                "totalReviews": 125,
                "students": 310,
                "views": "1.2k",
                "bioLink": "/instructors/zanele-nkosi",
                "avatar": "/assets/img/all-img/teacher-zanele.png"
              },
              "about": "Learn to design safe and environmentally sustainable chemical processes.",
              "description": "Covers industrial safety standards, environmental regulations, risk assessment, and sustainable process design in chemical engineering.",
              "objectives": [
                "Implement safety protocols in chemical processes.",
                "Evaluate environmental impact and compliance.",
                "Design sustainable and eco-friendly processes."
              ],
              "materials": [
                "Safety manuals",
                "Regulatory documents",
                "Case studies"
              ],
              "requirements": [
                "Process fundamentals"
              ],
              "audience": [
                "Chemical engineers",
                "Safety officers",
                "Environmental consultants"
              ],
              "videoThumbnail": "/assets/img/all-img/safety-video.png",
              "videoUrl": "https://youtu.be/chemical-safety",
              "price": "R1,600",
              "subject": "Environmental Safety"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Faculty of Health Sciences and Medicine",
    "code": "HLS",
    "description": "Health Sciences faculty training future doctors, nurses, pharmacists, and public health specialists.",
    "imageUrl": "/assets/img/faculties/health-sciences.jpg",
    "icon": "bx bx-heart",
    "dean": {
      "name": "Prof. Nomusa Dlamini",
      "email": "nomusa.dlamini@ceed.ac.za"
    },
    "contactEmail": "health@ceed.ac.za",
    "averageDuration": "4-6 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "December 5, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Medicine",
        "code": "MED",
        "description": "Study of human health, disease diagnosis, and treatment.",
        "imageUrl": "/assets/img/disciplines/medicine.jpg",
        "icon": "bx bx-heart",
        "careerPaths": [
          "Doctor",
          "Surgeon",
          "Medical Researcher"
        ],
        "averageDuration": "6 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 901,
            "title": "Introduction to Medicine",
            "courseCode": "MED101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 300,
            "views": "1200",
            "rating": "4.9",
            "teacher": "Prof. Amanda Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-amanda.png",
            "price": "R2,500",
            "imageUrl": "/assets/img/all-img/intro-medicine.png",
            "duration": "40 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 24
          }
        ]
      },
      {
        "id": 2,
        "name": "Nursing",
        "code": "NUR",
        "description": "Study of patient care, healthcare systems, and clinical practices.",
        "imageUrl": "/assets/img/disciplines/nursing.jpg",
        "icon": "bx bx-plus-medical",
        "careerPaths": [
          "Registered Nurse",
          "Clinical Nurse",
          "Nurse Educator"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Nov 28, 2025",
        "featured": true,
        "courses": [
          {
            "id": 902,
            "title": "Foundations of Nursing",
            "courseCode": "NUR101",
            "date": "Mar 1, 2025",
            "closingDate": "Feb 10, 2025",
            "students": 250,
            "views": "950",
            "rating": "4.8",
            "teacher": "Dr. Thabo Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R2,200",
            "imageUrl": "/assets/img/all-img/foundations-nursing.png",
            "duration": "35 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 22
          }
        ]
      },
      {
        "id": 3,
        "name": "Pharmacy",
        "code": "PHAR",
        "description": "Study of medicines, drug formulations, and pharmacology.",
        "imageUrl": "/assets/img/disciplines/pharmacy.jpg",
        "icon": "bx bx-pill",
        "careerPaths": [
          "Pharmacist",
          "Clinical Pharmacologist",
          "Research Scientist"
        ],
        "averageDuration": "5 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 1, 2025",
        "featured": true,
        "courses": [
          {
            "id": 903,
            "title": "Introduction to Pharmacy",
            "courseCode": "PHAR101",
            "date": "Apr 1, 2025",
            "closingDate": "Mar 10, 2025",
            "students": 200,
            "views": "850",
            "rating": "4.8",
            "teacher": "Prof. Sipho Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R2,400",
            "imageUrl": "/assets/img/all-img/intro-pharmacy.png",
            "duration": "38 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 24
          }
        ]
      },
      {
        "id": 4,
        "name": "Physiotherapy",
        "code": "PHYS",
        "description": "Study of rehabilitation, movement therapy, and physical health.",
        "imageUrl": "/assets/img/disciplines/physiotherapy.jpg",
        "icon": "bx bx-walk",
        "careerPaths": [
          "Physiotherapist",
          "Rehabilitation Specialist",
          "Sports Therapist"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 5, 2025",
        "featured": true,
        "courses": [
          {
            "id": 904,
            "title": "Introduction to Physiotherapy",
            "courseCode": "PHYS101",
            "date": "May 1, 2025",
            "closingDate": "Apr 10, 2025",
            "students": 180,
            "views": "800",
            "rating": "4.7",
            "teacher": "Dr. Lerato Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R2,300",
            "imageUrl": "/assets/img/all-img/intro-physiotherapy.png",
            "duration": "36 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 22
          }
        ]
      },
      {
        "id": 5,
        "name": "Public Health",
        "code": "PH",
        "description": "Study of population health, epidemiology, and health promotion.",
        "imageUrl": "/assets/img/disciplines/public-health.jpg",
        "icon": "bx bx-health",
        "careerPaths": [
          "Public Health Officer",
          "Epidemiologist",
          "Health Policy Analyst"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 905,
            "title": "Foundations of Public Health",
            "courseCode": "PH101",
            "date": "Jun 1, 2025",
            "closingDate": "May 10, 2025",
            "students": 160,
            "views": "750",
            "rating": "4.8",
            "teacher": "Prof. Nomsa Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomsa.png",
            "price": "R2,200",
            "imageUrl": "/assets/img/all-img/foundations-public-health.png",
            "duration": "35 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 22
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Faculty of Commerce, Business, Management and Economics",
    "code": "COM",
    "description": "Commerce faculty offering programs in Accounting, Economics, Management, and Finance.",
    "imageUrl": "/assets/img/faculties/commerce.jpg",
    "icon": "bx bx-line-chart",
    "dean": {
      "name": "Prof. Thabo Nkosi",
      "email": "thabo.nkosi@ceed.ac.za"
    },
    "contactEmail": "commerce@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.7,
    "numberOfDisciplines": 6,
    "featured": true,
    "closingDate": "November 30, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Accounting",
        "code": "ACC",
        "description": "Study of financial reporting, auditing, taxation, and management accounting.",
        "imageUrl": "/assets/img/disciplines/accounting.jpg",
        "icon": "bx bx-book",
        "careerPaths": [
          "Chartered Accountant",
          "Financial Analyst",
          "Auditor",
          "Tax Consultant"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 4,
        "closingDate": "Nov 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 301,
            "title": "Financial Accounting I",
            "courseCode": "ACC101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 320,
            "views": "1.1k",
            "rating": "4.8",
            "teacher": "Prof. Linda Dube",
            "teacherImageUrl": "/assets/img/all-img/teacher-linda.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/financial-accounting.png",
            "duration": "25 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "Accounting",
              "Finance",
              "Bookkeeping"
            ],
            "details": {
              "category": "Accounting",
              "title": "Financial Accounting I",
              "instructor": {
                "name": "Prof. Linda Dube",
                "rating": 4.8,
                "totalReviews": 110,
                "students": 320,
                "bioLink": "/instructors/linda-dube",
                "avatar": "/assets/img/all-img/teacher-linda.png"
              },
              "about": "Introduction to basic financial statements and bookkeeping.",
              "description": "Covers the fundamentals of accounting principles, financial statements, and double-entry bookkeeping.",
              "objectives": [
                "Understand financial statements",
                "Record financial transactions",
                "Apply accounting principles"
              ],
              "materials": [
                "Lecture notes",
                "Exercises",
                "Videos"
              ],
              "requirements": [
                "Basic math"
              ],
              "audience": [
                "Undergraduates",
                "Accounting students"
              ],
              "videoThumbnail": "/assets/img/all-img/accounting-video.png",
              "videoUrl": "https://youtu.be/financial-accounting",
              "price": "R1,200",
              "subject": "Financial Accounting"
            }
          }
        ]
      },
      {
        "id": 2,
        "name": "Economics",
        "code": "ECON",
        "description": "Study of production, distribution, and consumption of goods and services.",
        "imageUrl": "/assets/img/disciplines/economics.jpg",
        "icon": "bx bx-line-chart",
        "careerPaths": [
          "Economist",
          "Policy Analyst",
          "Researcher",
          "Financial Consultant"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 4,
        "closingDate": "Nov 20, 2025",
        "featured": true,
        "courses": [
          {
            "id": 302,
            "title": "Microeconomics",
            "courseCode": "ECON101",
            "date": "Mar 1, 2025",
            "closingDate": "Feb 10, 2025",
            "students": 280,
            "views": "900",
            "rating": "4.7",
            "teacher": "Dr. Sipho Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R1,100",
            "imageUrl": "/assets/img/all-img/microeconomics.png",
            "duration": "22 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "Economics",
              "Markets",
              "Supply-Demand"
            ],
            "details": {
              "category": "Economics",
              "title": "Microeconomics",
              "instructor": {
                "name": "Dr. Sipho Nkosi",
                "rating": 4.7,
                "totalReviews": 100,
                "students": 280,
                "bioLink": "/instructors/sipho-nkosi",
                "avatar": "/assets/img/all-img/teacher-sipho.png"
              },
              "about": "Study of individual economic units and market mechanisms.",
              "description": "Covers demand, supply, elasticity, market equilibrium, and consumer behavior.",
              "objectives": [
                "Understand market forces",
                "Analyze consumer choices",
                "Study firm behavior"
              ],
              "materials": [
                "Lecture slides",
                "Case studies",
                "Exercises"
              ],
              "requirements": [
                "Basic math"
              ],
              "audience": [
                "Undergraduates",
                "Economics students"
              ],
              "videoThumbnail": "/assets/img/all-img/economics-video.png",
              "videoUrl": "https://youtu.be/microeconomics",
              "price": "R1,100",
              "subject": "Economics"
            }
          }
        ]
      },
      {
        "id": 3,
        "name": "Finance",
        "code": "FIN",
        "description": "Study of investment, capital markets, risk management, and corporate finance.",
        "imageUrl": "/assets/img/disciplines/finance.jpg",
        "icon": "bx bx-money",
        "careerPaths": [
          "Financial Analyst",
          "Investment Banker",
          "Risk Manager",
          "Portfolio Manager"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.8,
        "numberOfCourses": 4,
        "closingDate": "Nov 25, 2025",
        "featured": true,
        "courses": [
          {
            "id": 303,
            "title": "Corporate Finance",
            "courseCode": "FIN101",
            "date": "Apr 1, 2025",
            "closingDate": "Mar 10, 2025",
            "students": 310,
            "views": "1.0k",
            "rating": "4.8",
            "teacher": "Prof. Thandi Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thandi.png",
            "price": "R1,300",
            "imageUrl": "/assets/img/all-img/corporate-finance.png",
            "duration": "26 hours",
            "level": "Intermediate",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "Finance",
              "Investments",
              "Corporate"
            ],
            "details": {
              "category": "Finance",
              "title": "Corporate Finance",
              "instructor": {
                "name": "Prof. Thandi Mokoena",
                "rating": 4.8,
                "totalReviews": 105,
                "students": 310,
                "bioLink": "/instructors/thandi-mokoena",
                "avatar": "/assets/img/all-img/teacher-thandi.png"
              },
              "about": "Study of financial decision-making in corporations.",
              "description": "Covers capital budgeting, financing decisions, cost of capital, and risk management.",
              "objectives": [
                "Understand corporate financial management",
                "Analyze investment decisions",
                "Study risk management"
              ],
              "materials": [
                "Lecture notes",
                "Case studies",
                "Financial models"
              ],
              "requirements": [
                "Basic accounting"
              ],
              "audience": [
                "Finance students",
                "Business analysts"
              ],
              "videoThumbnail": "/assets/img/all-img/finance-video.png",
              "videoUrl": "https://youtu.be/corporate-finance",
              "price": "R1,300",
              "subject": "Finance"
            }
          }
        ]
      },
      {
        "id": 4,
        "name": "Management",
        "code": "MGMT",
        "description": "Study of business strategy, organizational behavior, and operational management.",
        "imageUrl": "/assets/img/disciplines/management.jpg",
        "icon": "bx bx-briefcase",
        "careerPaths": [
          "Manager",
          "Business Consultant",
          "Project Manager",
          "Entrepreneur"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 4,
        "closingDate": "Nov 28, 2025",
        "featured": true,
        "courses": [
          {
            "id": 304,
            "title": "Principles of Management",
            "courseCode": "MGMT101",
            "date": "May 1, 2025",
            "closingDate": "Apr 10, 2025",
            "students": 290,
            "views": "950",
            "rating": "4.7",
            "teacher": "Dr. Peter Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-peter.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/management.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "Management",
              "Leadership",
              "Business Strategy"
            ],
            "details": {
              "category": "Management",
              "title": "Principles of Management",
              "instructor": {
                "name": "Dr. Peter Khumalo",
                "rating": 4.7,
                "totalReviews": 102,
                "students": 290,
                "bioLink": "/instructors/peter-khumalo",
                "avatar": "/assets/img/all-img/teacher-peter.png"
              },
              "about": "Introduction to management theories and practices.",
              "description": "Covers leadership, organizational behavior, decision-making, and strategic planning.",
              "objectives": [
                "Understand management principles",
                "Apply leadership skills",
                "Plan business strategies"
              ],
              "materials": [
                "Lecture slides",
                "Exercises",
                "Case studies"
              ],
              "requirements": [
                "Basic business knowledge"
              ],
              "audience": [
                "Business students",
                "Future managers"
              ],
              "videoThumbnail": "/assets/img/all-img/management-video.png",
              "videoUrl": "https://youtu.be/principles-management",
              "price": "R1,200",
              "subject": "Management"
            }
          }
        ]
      },
      {
        "id": 5,
        "name": "Marketing",
        "code": "MKT",
        "description": "Study of market research, advertising, branding, and customer behavior.",
        "imageUrl": "/assets/img/disciplines/marketing.jpg",
        "icon": "bx bx-bullseye",
        "careerPaths": [
          "Marketing Manager",
          "Brand Strategist",
          "Digital Marketer",
          "Market Analyst"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 4,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 305,
            "title": "Introduction to Marketing",
            "courseCode": "MKT101",
            "date": "Jun 1, 2025",
            "closingDate": "May 10, 2025",
            "students": 270,
            "views": "880",
            "rating": "4.7",
            "teacher": "Prof. Nomsa Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomsa.png",
            "price": "R1,100",
            "imageUrl": "/assets/img/all-img/marketing.png",
            "duration": "22 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "Marketing",
              "Advertising",
              "Branding"
            ],
            "details": {
              "category": "Marketing",
              "title": "Introduction to Marketing",
              "instructor": {
                "name": "Prof. Nomsa Khumalo",
                "rating": 4.7,
                "totalReviews": 98,
                "students": 270,
                "bioLink": "/instructors/nomsa-khumalo",
                "avatar": "/assets/img/all-img/teacher-nomsa.png"
              },
              "about": "Introduction to marketing principles and consumer behavior.",
              "description": "Covers marketing strategy, market segmentation, promotion, branding, and customer analysis.",
              "objectives": [
                "Understand marketing fundamentals",
                "Analyze customer behavior",
                "Develop marketing strategies"
              ],
              "materials": [
                "Lecture notes",
                "Case studies",
                "Videos"
              ],
              "requirements": [
                "Basic business knowledge"
              ],
              "audience": [
                "Business students",
                "Aspiring marketers"
              ],
              "videoThumbnail": "/assets/img/all-img/marketing-video.png",
              "videoUrl": "https://youtu.be/introduction-marketing",
              "price": "R1,100",
              "subject": "Marketing"
            }
          }
        ]
      },
      {
        "id": 6,
        "name": "Human Resources",
        "code": "HR",
        "description": "Study of recruitment, employee relations, training, and organizational behavior.",
        "imageUrl": "/assets/img/disciplines/hr.jpg",
        "icon": "bx bx-user",
        "careerPaths": [
          "HR Manager",
          "Talent Acquisition Specialist",
          "Training Coordinator",
          "HR Consultant"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 4,
        "closingDate": "Dec 5, 2025",
        "featured": true,
        "courses": [
          {
            "id": 306,
            "title": "Human Resource Management",
            "courseCode": "HR101",
            "date": "Jul 1, 2025",
            "closingDate": "Jun 10, 2025",
            "students": 260,
            "views": "850",
            "rating": "4.7",
            "teacher": "Dr. Lerato Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/hr.png",
            "duration": "23 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12,
            "tags": [
              "HR",
              "Recruitment",
              "Employee Relations"
            ],
            "details": {
              "category": "Human Resources",
              "title": "Human Resource Management",
              "instructor": {
                "name": "Dr. Lerato Mokoena",
                "rating": 4.7,
                "totalReviews": 95,
                "students": 260,
                "bioLink": "/instructors/lerato-mokoena",
                "avatar": "/assets/img/all-img/teacher-lerato.png"
              },
              "about": "Learn how to manage workforce effectively.",
              "description": "Covers recruitment, training, performance management, labor laws, and employee engagement.",
              "objectives": [
                "Understand HR practices",
                "Manage employee relations",
                "Implement training and development"
              ],
              "materials": [
                "Lecture notes",
                "Case studies",
                "Workshops"
              ],
              "requirements": [
                "Basic business knowledge"
              ],
              "audience": [
                "Business students",
                "HR professionals"
              ],
              "videoThumbnail": "/assets/img/all-img/hr-video.png",
              "videoUrl": "https://youtu.be/hr-management",
              "price": "R1,200",
              "subject": "Human Resources"
            }
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "Faculty of Humanities, Arts and Social Sciences",
    "code": "HUM",
    "description": "Humanities faculty offering programs in Psychology, Sociology, Languages, Philosophy, and Anthropology.",
    "imageUrl": "/assets/img/faculties/humanities.jpg",
    "icon": "bx bx-book-open",
    "dean": {
      "name": "Prof. Zanele Sithole",
      "email": "zanele.sithole@ceed.ac.za"
    },
    "contactEmail": "humanities@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.8,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "November 25, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Psychology",
        "code": "PSY",
        "description": "Study of the human mind, behavior, and mental processes.",
        "imageUrl": "/assets/img/disciplines/psychology.jpg",
        "icon": "bx bx-brain",
        "careerPaths": [
          "Clinical Psychologist",
          "Counselor",
          "Researcher",
          "Organizational Psychologist"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 401,
            "title": "Introduction to Psychology",
            "courseCode": "PSY101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 250,
            "views": "900",
            "rating": "4.8",
            "teacher": "Dr. Amanda Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-amanda.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/intro-psychology.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 2,
        "name": "Sociology",
        "code": "SOC",
        "description": "Study of society, social behavior, and cultural norms.",
        "imageUrl": "/assets/img/disciplines/sociology.jpg",
        "icon": "bx bx-people",
        "careerPaths": [
          "Sociologist",
          "Policy Analyst",
          "Researcher",
          "Social Worker"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 25, 2025",
        "featured": true,
        "courses": [
          {
            "id": 404,
            "title": "Introduction to Sociology",
            "courseCode": "SOC101",
            "date": "Feb 5, 2025",
            "closingDate": "Jan 15, 2025",
            "students": 230,
            "views": "800",
            "rating": "4.7",
            "teacher": "Prof. Zanele Sithole",
            "teacherImageUrl": "/assets/img/all-img/teacher-zanele.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/intro-sociology.png",
            "duration": "23 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 3,
        "name": "Languages",
        "code": "LANG",
        "description": "Study of linguistics, communication, and literature.",
        "imageUrl": "/assets/img/disciplines/languages.jpg",
        "icon": "bx bx-book-open",
        "careerPaths": [
          "Translator",
          "Linguist",
          "Writer",
          "Educator"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 28, 2025",
        "featured": true,
        "courses": [
          {
            "id": 407,
            "title": "Introduction to Linguistics",
            "courseCode": "LANG101",
            "date": "Feb 10, 2025",
            "closingDate": "Jan 20, 2025",
            "students": 200,
            "views": "700",
            "rating": "4.7",
            "teacher": "Dr. Thabo Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1,150",
            "imageUrl": "/assets/img/all-img/intro-linguistics.png",
            "duration": "22 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 4,
        "name": "Philosophy",
        "code": "PHIL",
        "description": "Study of ethics, logic, reasoning, and the nature of knowledge.",
        "imageUrl": "/assets/img/disciplines/philosophy.jpg",
        "icon": "bx bx-lightbulb",
        "careerPaths": [
          "Philosopher",
          "Ethics Consultant",
          "Teacher",
          "Researcher"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.6,
        "numberOfCourses": 1,
        "closingDate": "Nov 25, 2025",
        "featured": true,
        "courses": [
          {
            "id": 410,
            "title": "Introduction to Philosophy",
            "courseCode": "PHIL101",
            "date": "Feb 15, 2025",
            "closingDate": "Jan 25, 2025",
            "students": 190,
            "views": "680",
            "rating": "4.6",
            "teacher": "Prof. Zanele Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-zanele.png",
            "price": "R1,100",
            "imageUrl": "/assets/img/all-img/intro-philosophy.png",
            "duration": "22 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 5,
        "name": "Anthropology",
        "code": "ANTH",
        "description": "Study of human societies, cultures, and evolution.",
        "imageUrl": "/assets/img/disciplines/anthropology.jpg",
        "icon": "bx bx-globe",
        "careerPaths": [
          "Anthropologist",
          "Researcher",
          "Cultural Consultant",
          "Policy Analyst"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 413,
            "title": "Cultural Anthropology",
            "courseCode": "ANTH101",
            "date": "Feb 20, 2025",
            "closingDate": "Jan 30, 2025",
            "students": 180,
            "views": "650",
            "rating": "4.7",
            "teacher": "Dr. Nomsa Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomsa.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/cultural-anthropology.png",
            "duration": "23 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "Faculty of Education",
    "code": "EDU",
    "description": "Education faculty preparing future teachers and education specialists in various levels and subjects.",
    "imageUrl": "/assets/img/faculties/education.jpg",
    "icon": "bx bx-chalkboard",
    "dean": {
      "name": "Prof. Sipho Molefe",
      "email": "sipho.molefe@ceed.ac.za"
    },
    "contactEmail": "education@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.7,
    "numberOfDisciplines": 4,
    "featured": true,
    "closingDate": "November 20, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Teacher Training",
        "code": "TT",
        "description": "Training and development programs for future educators.",
        "imageUrl": "/assets/img/disciplines/teacher-training.jpg",
        "icon": "bx bx-chalkboard",
        "careerPaths": [
          "Primary School Teacher",
          "Secondary School Teacher",
          "Lecturer",
          "Education Consultant"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 501,
            "title": "Foundations of Teacher Training",
            "courseCode": "TT101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 15, 2025",
            "students": 200,
            "views": "700",
            "rating": "4.7",
            "teacher": "Dr. Nomusa Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomusa.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/foundations-teacher-training.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 2,
        "name": "Curriculum Development",
        "code": "CD",
        "description": "Study of curriculum planning, design, and implementation.",
        "imageUrl": "/assets/img/disciplines/curriculum-development.jpg",
        "icon": "bx bx-book-content",
        "careerPaths": [
          "Curriculum Developer",
          "Education Specialist",
          "Instructional Designer"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.6,
        "numberOfCourses": 1,
        "closingDate": "Nov 28, 2025",
        "featured": true,
        "courses": [
          {
            "id": 502,
            "title": "Curriculum Design Principles",
            "courseCode": "CD101",
            "date": "Mar 1, 2025",
            "closingDate": "Feb 10, 2025",
            "students": 180,
            "views": "650",
            "rating": "4.6",
            "teacher": "Prof. Thabo Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1,150",
            "imageUrl": "/assets/img/all-img/curriculum-design.png",
            "duration": "22 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 3,
        "name": "Special Needs Education",
        "code": "SNE",
        "description": "Education programs designed for students with special needs.",
        "imageUrl": "/assets/img/disciplines/special-needs.jpg",
        "icon": "bx bx-accessibility",
        "careerPaths": [
          "Special Needs Teacher",
          "Education Therapist",
          "Inclusive Education Specialist"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 503,
            "title": "Introduction to Special Needs Education",
            "courseCode": "SNE101",
            "date": "Apr 1, 2025",
            "closingDate": "Mar 10, 2025",
            "students": 160,
            "views": "600",
            "rating": "4.7",
            "teacher": "Dr. Lerato Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R1,200",
            "imageUrl": "/assets/img/all-img/special-needs-intro.png",
            "duration": "23 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 4,
        "name": "Educational Leadership",
        "code": "EDL",
        "description": "Study of leadership practices and management in educational institutions.",
        "imageUrl": "/assets/img/disciplines/educational-leadership.jpg",
        "icon": "bx bx-badge",
        "careerPaths": [
          "School Principal",
          "Education Administrator",
          "Policy Maker"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.6,
        "numberOfCourses": 1,
        "closingDate": "Dec 5, 2025",
        "featured": true,
        "courses": [
          {
            "id": 504,
            "title": "Principles of Educational Leadership",
            "courseCode": "EDL101",
            "date": "May 1, 2025",
            "closingDate": "Apr 10, 2025",
            "students": 150,
            "views": "580",
            "rating": "4.6",
            "teacher": "Prof. Sipho Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R1,250",
            "imageUrl": "/assets/img/all-img/educational-leadership.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "Faculty of Law",
    "code": "LAW",
    "description": "Law faculty offering programs in Constitutional, Criminal, International, and Commercial Law.",
    "imageUrl": "/assets/img/faculties/law.jpg",
    "icon": "bx bx-gavel",
    "dean": {
      "name": "Prof. Andile Ndlovu",
      "email": "andile.ndlovu@ceed.ac.za"
    },
    "contactEmail": "law@ceed.ac.za",
    "averageDuration": "4 years",
    "averageRating": 4.8,
    "numberOfDisciplines": 4,
    "featured": true,
    "closingDate": "December 1, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Constitutional Law",
        "code": "CLAW",
        "description": "Study of the constitution, fundamental rights, and government structure.",
        "imageUrl": "/assets/img/disciplines/constitutional-law.jpg",
        "icon": "bx bx-gavel",
        "careerPaths": [
          "Constitutional Lawyer",
          "Legal Advisor",
          "Policy Analyst"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 601,
            "title": "Introduction to Constitutional Law",
            "courseCode": "CLAW101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 200,
            "views": "750",
            "rating": "4.8",
            "teacher": "Prof. Thabo Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/intro-constitutional-law.png",
            "duration": "25 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 2,
        "name": "Criminal Law",
        "code": "CRIM",
        "description": "Study of crime, criminal behavior, and the legal system.",
        "imageUrl": "/assets/img/disciplines/criminal-law.jpg",
        "icon": "bx bx-shield",
        "careerPaths": [
          "Criminal Lawyer",
          "Prosecutor",
          "Defense Attorney"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 28, 2025",
        "featured": true,
        "courses": [
          {
            "id": 602,
            "title": "Introduction to Criminal Law",
            "courseCode": "CRIM101",
            "date": "Mar 1, 2025",
            "closingDate": "Feb 10, 2025",
            "students": 180,
            "views": "700",
            "rating": "4.7",
            "teacher": "Dr. Nomsa Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomsa.png",
            "price": "R1,450",
            "imageUrl": "/assets/img/all-img/intro-criminal-law.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 3,
        "name": "International Law",
        "code": "INTL",
        "description": "Study of legal rules governing relations between nations.",
        "imageUrl": "/assets/img/disciplines/international-law.jpg",
        "icon": "bx bx-world",
        "careerPaths": [
          "International Lawyer",
          "Diplomat",
          "Legal Consultant"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 5, 2025",
        "featured": true,
        "courses": [
          {
            "id": 603,
            "title": "Principles of International Law",
            "courseCode": "INTL101",
            "date": "Apr 1, 2025",
            "closingDate": "Mar 10, 2025",
            "students": 170,
            "views": "680",
            "rating": "4.8",
            "teacher": "Prof. Sipho Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R1,550",
            "imageUrl": "/assets/img/all-img/international-law.png",
            "duration": "26 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 4,
        "name": "Commercial Law",
        "code": "COML",
        "description": "Study of business law, contracts, and corporate regulations.",
        "imageUrl": "/assets/img/disciplines/commercial-law.jpg",
        "icon": "bx bx-briefcase",
        "careerPaths": [
          "Corporate Lawyer",
          "Legal Advisor",
          "Compliance Officer"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 604,
            "title": "Introduction to Commercial Law",
            "courseCode": "COML101",
            "date": "May 1, 2025",
            "closingDate": "Apr 10, 2025",
            "students": 160,
            "views": "650",
            "rating": "4.7",
            "teacher": "Dr. Lerato Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/commercial-law.png",
            "duration": "25 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "name": "Faculty of Agricultural and Environmental Sciences",
    "code": "AGR",
    "description": "Agriculture faculty offering programs in Agronomy, Horticulture, Animal Science, Soil Science, and Agricultural Economics.",
    "imageUrl": "/assets/img/faculties/agriculture.jpg",
    "icon": "bx bx-leaf",
    "dean": {
      "name": "Prof. Thandiwe Nkosi",
      "email": "thandiwe.nkosi@ceed.ac.za"
    },
    "contactEmail": "agriculture@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.7,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "November 28, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Agronomy",
        "code": "AGRY",
        "description": "Study of crop production and soil management.",
        "imageUrl": "/assets/img/disciplines/agronomy.jpg",
        "icon": "bx bx-leaf",
        "careerPaths": [
          "Agronomist",
          "Farm Manager",
          "Researcher"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 701,
            "title": "Introduction to Agronomy",
            "courseCode": "AGRY101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 180,
            "views": "700",
            "rating": "4.7",
            "teacher": "Prof. Thabo Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1,300",
            "imageUrl": "/assets/img/all-img/intro-agronomy.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 2,
        "name": "Horticulture",
        "code": "HORT",
        "description": "Study of garden crops, fruits, vegetables, and ornamental plants.",
        "imageUrl": "/assets/img/disciplines/horticulture.jpg",
        "icon": "bx bx-flower",
        "careerPaths": [
          "Horticulturist",
          "Landscape Designer",
          "Researcher"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.6,
        "numberOfCourses": 1,
        "closingDate": "Nov 28, 2025",
        "featured": true,
        "courses": [
          {
            "id": 702,
            "title": "Principles of Horticulture",
            "courseCode": "HORT101",
            "date": "Mar 1, 2025",
            "closingDate": "Feb 10, 2025",
            "students": 160,
            "views": "650",
            "rating": "4.6",
            "teacher": "Dr. Nomsa Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-nomsa.png",
            "price": "R1,250",
            "imageUrl": "/assets/img/all-img/horticulture.png",
            "duration": "23 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 3,
        "name": "Animal Science",
        "code": "ANSC",
        "description": "Study of livestock, breeding, nutrition, and management.",
        "imageUrl": "/assets/img/disciplines/animal-science.jpg",
        "icon": "bx bx-dog",
        "careerPaths": [
          "Animal Scientist",
          "Veterinary Technician",
          "Farm Manager"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 1, 2025",
        "featured": true,
        "courses": [
          {
            "id": 703,
            "title": "Introduction to Animal Science",
            "courseCode": "ANSC101",
            "date": "Apr 1, 2025",
            "closingDate": "Mar 10, 2025",
            "students": 150,
            "views": "620",
            "rating": "4.7",
            "teacher": "Prof. Sipho Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R1,300",
            "imageUrl": "/assets/img/all-img/animal-science.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 4,
        "name": "Soil Science",
        "code": "SOIL",
        "description": "Study of soil properties, fertility, and conservation.",
        "imageUrl": "/assets/img/disciplines/soil-science.jpg",
        "icon": "bx bx-crop",
        "careerPaths": [
          "Soil Scientist",
          "Agricultural Consultant",
          "Environmental Scientist"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.6,
        "numberOfCourses": 1,
        "closingDate": "Dec 5, 2025",
        "featured": true,
        "courses": [
          {
            "id": 704,
            "title": "Fundamentals of Soil Science",
            "courseCode": "SOIL101",
            "date": "May 1, 2025",
            "closingDate": "Apr 10, 2025",
            "students": 140,
            "views": "600",
            "rating": "4.6",
            "teacher": "Dr. Lerato Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R1,250",
            "imageUrl": "/assets/img/all-img/soil-science.png",
            "duration": "23 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 5,
        "name": "Agricultural Economics",
        "code": "AGEC",
        "description": "Study of economic principles applied to agriculture and agribusiness.",
        "imageUrl": "/assets/img/disciplines/agricultural-economics.jpg",
        "icon": "bx bx-money",
        "careerPaths": [
          "Agricultural Economist",
          "Policy Analyst",
          "Farm Manager"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 705,
            "title": "Principles of Agricultural Economics",
            "courseCode": "AGEC101",
            "date": "Jun 1, 2025",
            "closingDate": "May 10, 2025",
            "students": 130,
            "views": "580",
            "rating": "4.7",
            "teacher": "Prof. Amanda Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-amanda.png",
            "price": "R1,300",
            "imageUrl": "/assets/img/all-img/agricultural-economics.png",
            "duration": "24 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "name": "Faculty of Information and Communication Technology",
    "code": "ICT",
    "description": "Information and Communication Technology faculty offering programs in Computer Science, Software Engineering, Cybersecurity, Data Science, and AI.",
    "imageUrl": "/assets/img/faculties/ict.jpg",
    "icon": "bx bx-desktop",
    "dean": {
      "name": "Prof. Kabelo Dlamini",
      "email": "kabelo.dlamini@ceed.ac.za"
    },
    "contactEmail": "ict@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "December 10, 2025",
    "disciplines": [
      {
        "id": 1,
        "name": "Computer Science",
        "code": "CS",
        "description": "Study of algorithms, programming, and computing systems.",
        "imageUrl": "/assets/img/disciplines/computer-science.jpg",
        "icon": "bx bx-desktop",
        "careerPaths": [
          "Software Developer",
          "Systems Analyst",
          "Researcher"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 801,
            "title": "Introduction to Computer Science",
            "courseCode": "CS101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 300,
            "views": "1000",
            "rating": "4.8",
            "teacher": "Dr. Amanda Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-amanda.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/intro-computer-science.png",
            "duration": "26 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 2,
        "name": "Software Engineering",
        "code": "SE",
        "description": "Study of software development, lifecycle, and project management.",
        "imageUrl": "/assets/img/disciplines/software-engineering.jpg",
        "icon": "bx bx-code",
        "careerPaths": [
          "Software Engineer",
          "Project Manager",
          "QA Analyst"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 28, 2025",
        "featured": true,
        "courses": [
          {
            "id": 802,
            "title": "Introduction to Software Engineering",
            "courseCode": "SE101",
            "date": "Mar 1, 2025",
            "closingDate": "Feb 10, 2025",
            "students": 250,
            "views": "900",
            "rating": "4.7",
            "teacher": "Prof. Thabo Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1,450",
            "imageUrl": "/assets/img/all-img/intro-software-engineering.png",
            "duration": "25 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 3,
        "name": "Cybersecurity",
        "code": "CYB",
        "description": "Study of protecting computer systems, networks, and data.",
        "imageUrl": "/assets/img/disciplines/cybersecurity.jpg",
        "icon": "bx bx-lock",
        "careerPaths": [
          "Cybersecurity Analyst",
          "Network Security Engineer",
          "Ethical Hacker"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 1, 2025",
        "featured": true,
        "courses": [
          {
            "id": 803,
            "title": "Introduction to Cybersecurity",
            "courseCode": "CYB101",
            "date": "Apr 1, 2025",
            "closingDate": "Mar 10, 2025",
            "students": 220,
            "views": "850",
            "rating": "4.8",
            "teacher": "Dr. Sipho Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/intro-cybersecurity.png",
            "duration": "26 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 4,
        "name": "Data Science",
        "code": "DS",
        "description": "Study of data analysis, statistics, and machine learning.",
        "imageUrl": "/assets/img/disciplines/data-science.jpg",
        "icon": "bx bx-data",
        "careerPaths": [
          "Data Scientist",
          "Data Analyst",
          "Business Intelligence Analyst"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 5, 2025",
        "featured": true,
        "courses": [
          {
            "id": 804,
            "title": "Introduction to Data Science",
            "courseCode": "DS101",
            "date": "May 1, 2025",
            "closingDate": "Apr 10, 2025",
            "students": 200,
            "views": "800",
            "rating": "4.8",
            "teacher": "Prof. Amanda Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-amanda.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/intro-data-science.png",
            "duration": "25 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      },
      {
        "id": 5,
        "name": "AI & Robotics",
        "code": "AIROB",
        "description": "Study of artificial intelligence, machine learning, and robotic systems.",
        "imageUrl": "/assets/img/disciplines/ai-robotics.jpg",
        "icon": "bx bx-robot",
        "careerPaths": [
          "AI Engineer",
          "Robotics Specialist",
          "Automation Engineer"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 805,
            "title": "Introduction to AI & Robotics",
            "courseCode": "AIROB101",
            "date": "Jun 1, 2025",
            "closingDate": "May 10, 2025",
            "students": 180,
            "views": "750",
            "rating": "4.9",
            "teacher": "Dr. Lerato Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R1,550",
            "imageUrl": "/assets/img/all-img/intro-ai-robotics.png",
            "duration": "26 hours",
            "level": "Beginner",
            "language": "English",
            "mode": "Hybrid",
            "credits": 12
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "name": "Faculty of Theology, Religion and Divinity",
    "code": "TRD",
    "description": "Exploring the depth of human spirituality, faith, and ethics through academic and applied study of religion and theology.",
    "imageUrl": "/assets/img/faculties/theology.jpg",
    "icon": "bx bx-book-open",
    "dean": {
      "name": "Prof. Kabelo Dlamini",
      "email": "kabelo.dlamini@ceed.ac.za"
    },
    "contactEmail": "ict@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "December 10, 2025",
    "disciplines": [
      {
        "id": 151,
        "name": "Theology",
        "code": "TH",
        "description": "Study of divine nature, religious beliefs, and the practice of faith across cultures and traditions.",
        "imageUrl": "/assets/img/disciplines/theology.jpg",
        "icon": "bx bx-church",
        "careerPaths": [
          "Theologian",
          "Pastor",
          "Religious Scholar"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1501,
            "title": "Foundations of Theology",
            "courseCode": "TH101",
            "date": "Feb 10, 2025",
            "closingDate": "Jan 15, 2025",
            "students": 90,
            "views": "480",
            "rating": "4.8",
            "teacher": "Prof. Lerato Molefe",
            "teacherImageUrl": "/assets/img/all-img/teacher-lerato.png",
            "price": "R4,200",
            "imageUrl": "/assets/img/all-img/foundations-theology.png",
            "details": {
              "category": "Theology",
              "about": "An introduction to Christian theology, exploring doctrines, scripture, and tradition.",
              "description": "This course introduces key theological concepts such as revelation, salvation, and the nature of God, with comparative perspectives from major world religions.",
              "tags": [
                "Faith",
                "Doctrine",
                "Philosophy"
              ],
              "objectives": [
                "Understand the core themes of Christian theology.",
                "Examine theological discourse across denominations.",
                "Develop analytical skills in interpreting sacred texts."
              ],
              "materials": [
                "Textbooks",
                "Scriptures",
                "Research papers"
              ],
              "requirements": [
                "Interest in theology",
                "Basic literacy in religious studies"
              ],
              "audience": [
                "Students",
                "Clergy",
                "Religious Scholars"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example21",
              "level": "Beginner",
              "duration": "40 hours",
              "subject": "Theology",
              "language": "English",
              "mode": "Hybrid",
              "credits": 20,
              "instructor": {
                "name": "Prof. Lerato Molefe",
                "rating": 4.8,
                "totalReviews": 72,
                "students": 90,
                "views": "480",
                "bioLink": "/instructors/lerato-molefe",
                "avatar": "/assets/img/all-img/teacher-lerato.png"
              }
            }
          }
        ]
      },
      {
        "id": 152,
        "name": "Biblical Studies",
        "code": "BS",
        "description": "Academic study of the Bible, including its languages, history, and interpretation.",
        "imageUrl": "/assets/img/disciplines/biblical-studies.jpg",
        "icon": "bx bx-book",
        "careerPaths": [
          "Biblical Scholar",
          "Translator",
          "Religious Educator"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1502,
            "title": "Introduction to Biblical Studies",
            "courseCode": "BS101",
            "date": "Feb 12, 2025",
            "closingDate": "Jan 20, 2025",
            "students": 85,
            "views": "430",
            "rating": "4.9",
            "teacher": "Dr. Mpho Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-mpho.png",
            "price": "R4,600",
            "imageUrl": "/assets/img/all-img/intro-biblical-studies.png",
            "details": {
              "category": "Biblical Studies",
              "about": "Explore the historical, linguistic, and cultural context of the Bible.",
              "description": "Students examine key biblical texts, learning to interpret scripture critically and contextually with respect to original languages and modern application.",
              "tags": [
                "Scripture",
                "Hermeneutics",
                "Translation"
              ],
              "objectives": [
                "Gain familiarity with biblical texts and genres.",
                "Develop interpretation and translation skills.",
                "Understand cultural backgrounds of biblical literature."
              ],
              "materials": [
                "Bible texts",
                "Commentaries",
                "Study guides"
              ],
              "requirements": [
                "Interest in biblical history",
                "Open mind for interpretation"
              ],
              "audience": [
                "Students",
                "Seminarians",
                "Researchers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example22",
              "level": "Intermediate",
              "duration": "36 hours",
              "subject": "Biblical Studies",
              "language": "English",
              "mode": "Hybrid",
              "credits": 22,
              "instructor": {
                "name": "Dr. Mpho Dlamini",
                "rating": 4.9,
                "totalReviews": 81,
                "students": 85,
                "views": "430",
                "bioLink": "/instructors/mpho-dlamini",
                "avatar": "/assets/img/all-img/teacher-mpho.png"
              }
            }
          }
        ]
      },
      {
        "id": 153,
        "name": "Religious Education",
        "code": "RE",
        "description": "Training for teaching religion and spirituality in diverse educational contexts.",
        "imageUrl": "/assets/img/disciplines/religious-education.jpg",
        "icon": "bx bx-chalkboard",
        "careerPaths": [
          "Religious Educator",
          "Curriculum Developer",
          "Spiritual Counsellor"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1503,
            "title": "Principles of Religious Education",
            "courseCode": "RE101",
            "date": "Feb 14, 2025",
            "closingDate": "Jan 22, 2025",
            "students": 75,
            "views": "400",
            "rating": "4.7",
            "teacher": "Prof. Naledi Radebe",
            "teacherImageUrl": "/assets/img/all-img/teacher-naledi.png",
            "price": "R4,300",
            "imageUrl": "/assets/img/all-img/principles-religious-education.png",
            "details": {
              "category": "Religious Education",
              "about": "Learn the pedagogical foundations of teaching religion and spirituality.",
              "description": "This course explores how to teach world religions, ethics, and spirituality in inclusive classroom settings.",
              "tags": [
                "Education",
                "Spirituality",
                "Pedagogy"
              ],
              "objectives": [
                "Understand theories of religious learning.",
                "Develop curriculum design for diverse classrooms.",
                "Promote interfaith dialogue and respect."
              ],
              "materials": [
                "Lesson plans",
                "Articles",
                "Audio resources"
              ],
              "requirements": [
                "Interest in education",
                "Patience and empathy"
              ],
              "audience": [
                "Teachers",
                "Students",
                "Counsellors"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example23",
              "level": "Beginner",
              "duration": "30 hours",
              "subject": "Religious Education",
              "language": "English",
              "mode": "Online",
              "credits": 18,
              "instructor": {
                "name": "Prof. Naledi Radebe",
                "rating": 4.7,
                "totalReviews": 66,
                "students": 75,
                "views": "400",
                "bioLink": "/instructors/naledi-radebe",
                "avatar": "/assets/img/all-img/teacher-naledi.png"
              }
            }
          }
        ]
      },
      {
        "id": 154,
        "name": "Ethics",
        "code": "ETH",
        "description": "Study of moral philosophy, applied ethics, and the ethical dimensions of society and faith.",
        "imageUrl": "/assets/img/disciplines/ethics.jpg",
        "icon": "bx bx-balance",
        "careerPaths": [
          "Ethicist",
          "Policy Advisor",
          "Academic Researcher"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Dec 10, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1504,
            "title": "Introduction to Ethics and Moral Philosophy",
            "courseCode": "ETH101",
            "date": "Feb 18, 2025",
            "closingDate": "Jan 25, 2025",
            "students": 70,
            "views": "390",
            "rating": "4.9",
            "teacher": "Dr. Lwazi Mthembu",
            "teacherImageUrl": "/assets/img/all-img/teacher-lwazi.png",
            "price": "R4,500",
            "imageUrl": "/assets/img/all-img/intro-ethics.png",
            "details": {
              "category": "Ethics",
              "about": "An introduction to moral philosophy and applied ethics in contemporary issues.",
              "description": "Explores theories of right and wrong, moral reasoning, and ethical applications in politics, religion, and personal conduct.",
              "tags": [
                "Philosophy",
                "Morality",
                "Reasoning"
              ],
              "objectives": [
                "Understand moral theories and principles.",
                "Apply ethical reasoning to complex problems.",
                "Evaluate ethical arguments and decisions."
              ],
              "materials": [
                "Books",
                "Philosophical texts",
                "Lecture notes"
              ],
              "requirements": [
                "Critical thinking",
                "Interest in philosophy"
              ],
              "audience": [
                "Students",
                "Professionals",
                "Philosophers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example24",
              "level": "Intermediate",
              "duration": "35 hours",
              "subject": "Ethics",
              "language": "English",
              "mode": "Hybrid",
              "credits": 21,
              "instructor": {
                "name": "Dr. Lwazi Mthembu",
                "rating": 4.9,
                "totalReviews": 73,
                "students": 70,
                "views": "390",
                "bioLink": "/instructors/lwazi-mthembu",
                "avatar": "/assets/img/all-img/teacher-lwazi.png"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "name": "Faculty of Arts, Design and Architecture",
    "code": "ADA",
    "description": "Explore creativity, design thinking, visual arts, and innovative architecture.",
    "imageUrl": "/assets/img/faculties/arts-design.jpg",
    "icon": "bx bx-palette",
    "dean": {
      "name": "Prof. Kabelo Dlamini",
      "email": "kabelo.dlamini@ceed.ac.za"
    },
    "contactEmail": "ict@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "December 10, 2025",
    "disciplines": [
      {
        "id": 111,
        "name": "Fine Arts",
        "code": "FA",
        "description": "Study of painting, sculpture, drawing, and other artistic expressions.",
        "imageUrl": "/assets/img/disciplines/fine-arts.jpg",
        "icon": "bx bx-brush",
        "careerPaths": [
          "Artist",
          "Curator",
          "Art Teacher"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1101,
            "title": "Introduction to Fine Arts",
            "courseCode": "FA101",
            "date": "Mar 1, 2025",
            "closingDate": "Feb 10, 2025",
            "students": 120,
            "views": "500",
            "rating": "4.8",
            "teacher": "Prof. Thandiwe Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-thandiwe.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/intro-fine-arts.png",
            "details": {
              "category": "Fine Arts",
              "about": "Explore visual creativity and develop fundamental artistic skills.",
              "description": "This course introduces techniques in painting, sculpture, and mixed media while encouraging personal expression.",
              "tags": [
                "Painting",
                "Sculpture",
                "Art History"
              ],
              "objectives": [
                "Develop artistic techniques.",
                "Understand art history and theory.",
                "Create original artworks."
              ],
              "materials": [
                "Sketchbook",
                "Paints",
                "Tools"
              ],
              "requirements": [
                "Interest in art",
                "Creativity"
              ],
              "audience": [
                "Students",
                "Artists",
                "Hobbyists"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example3",
              "level": "Beginner",
              "duration": "25 hours",
              "subject": "Fine Arts",
              "language": "English",
              "mode": "Hybrid",
              "credits": 12,
              "instructor": {
                "name": "Prof. Thandiwe Mokoena",
                "rating": 4.8,
                "totalReviews": 64,
                "students": 120,
                "views": "500",
                "bioLink": "/instructors/thandiwe-mokoena",
                "avatar": "/assets/img/all-img/teacher-thandiwe.png"
              }
            }
          }
        ]
      },
      {
        "id": 112,
        "name": "Graphic Design",
        "code": "GD",
        "description": "Study of visual communication, typography, and digital media design.",
        "imageUrl": "/assets/img/disciplines/graphic-design.jpg",
        "icon": "bx bx-pencil",
        "careerPaths": [
          "Graphic Designer",
          "UI/UX Designer",
          "Branding Specialist"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1102,
            "title": "Introduction to Graphic Design",
            "courseCode": "GD101",
            "date": "Mar 5, 2025",
            "closingDate": "Feb 15, 2025",
            "students": 100,
            "views": "450",
            "rating": "4.7",
            "teacher": "Dr. Sipho Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R1,400",
            "imageUrl": "/assets/img/all-img/intro-graphic.png",
            "details": {
              "category": "Graphic Design",
              "about": "Learn the principles of digital design and visual storytelling.",
              "description": "This course teaches typography, layout, branding, and digital software tools for creative communication.",
              "tags": [
                "Typography",
                "Branding",
                "Digital Design"
              ],
              "objectives": [
                "Master design software.",
                "Develop visual communication skills.",
                "Create professional design projects."
              ],
              "materials": [
                "Adobe Suite",
                "Sketchbook",
                "Laptop"
              ],
              "requirements": [
                "Creativity",
                "Basic computer skills"
              ],
              "audience": [
                "Students",
                "Designers",
                "Freelancers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example4",
              "level": "Beginner",
              "duration": "22 hours",
              "subject": "Graphic Design",
              "language": "English",
              "mode": "Hybrid",
              "credits": 12,
              "instructor": {
                "name": "Dr. Sipho Dlamini",
                "rating": 4.7,
                "totalReviews": 58,
                "students": 100,
                "views": "450",
                "bioLink": "/instructors/sipho-dlamini",
                "avatar": "/assets/img/all-img/teacher-sipho.png"
              }
            }
          }
        ]
      },
      {
        "id": 113,
        "name": "Interior Design",
        "code": "ID",
        "description": "Design functional and aesthetic indoor spaces for homes, offices, and public spaces.",
        "imageUrl": "/assets/img/disciplines/interior-design.jpg",
        "icon": "bx bx-home",
        "careerPaths": [
          "Interior Designer",
          "Space Planner",
          "Set Designer"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1103,
            "title": "Introduction to Interior Design",
            "courseCode": "ID101",
            "date": "Mar 10, 2025",
            "closingDate": "Feb 20, 2025",
            "students": 90,
            "views": "400",
            "rating": "4.7",
            "teacher": "Prof. Lindiwe Nkosi",
            "teacherImageUrl": "/assets/img/all-img/teacher-lindiwe.png",
            "price": "R1,500",
            "imageUrl": "/assets/img/all-img/intro-interior.png",
            "details": {
              "category": "Interior Design",
              "about": "Learn to design beautiful, functional interiors using design principles and tools.",
              "description": "This course introduces concepts of space planning, furniture layout, lighting, and color theory for interior environments.",
              "tags": [
                "Space Planning",
                "Furniture",
                "Lighting"
              ],
              "objectives": [
                "Understand interior design principles.",
                "Develop space planning skills.",
                "Create aesthetically pleasing interiors."
              ],
              "materials": [
                "Sketchbook",
                "CAD Software",
                "Measuring tools"
              ],
              "requirements": [
                "Creativity",
                "Attention to detail"
              ],
              "audience": [
                "Students",
                "Designers",
                "Architects"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example5",
              "level": "Beginner",
              "duration": "20 hours",
              "subject": "Interior Design",
              "language": "English",
              "mode": "Hybrid",
              "credits": 12,
              "instructor": {
                "name": "Prof. Lindiwe Nkosi",
                "rating": 4.7,
                "totalReviews": 55,
                "students": 90,
                "views": "400",
                "bioLink": "/instructors/lindiwe-nkosi",
                "avatar": "/assets/img/all-img/teacher-lindiwe.png"
              }
            }
          }
        ]
      },
      {
        "id": 114,
        "name": "Industrial Design",
        "code": "IND",
        "description": "Design of products, tools, and equipment with a focus on functionality and usability.",
        "imageUrl": "/assets/img/disciplines/industrial-design.jpg",
        "icon": "bx bx-cog",
        "careerPaths": [
          "Product Designer",
          "Industrial Designer",
          "UX Designer"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.6,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1104,
            "title": "Introduction to Industrial Design",
            "courseCode": "IND101",
            "date": "Mar 12, 2025",
            "closingDate": "Feb 22, 2025",
            "students": 80,
            "views": "350",
            "rating": "4.6",
            "teacher": "Dr. Johan van der Merwe",
            "teacherImageUrl": "/assets/img/all-img/teacher-johan.png",
            "price": "R1,450",
            "imageUrl": "/assets/img/all-img/intro-industrial.png",
            "details": {
              "category": "Industrial Design",
              "about": "Learn product design principles, materials, and manufacturing processes.",
              "description": "This course covers design thinking, prototyping, and user-centered design for industrial products.",
              "tags": [
                "Prototyping",
                "Materials",
                "Ergonomics"
              ],
              "objectives": [
                "Understand industrial design process.",
                "Develop product prototypes.",
                "Apply ergonomic and usability principles."
              ],
              "materials": [
                "CAD Software",
                "Prototyping materials",
                "Sketches"
              ],
              "requirements": [
                "Creativity",
                "Problem-solving"
              ],
              "audience": [
                "Students",
                "Designers",
                "Engineers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example6",
              "level": "Beginner",
              "duration": "22 hours",
              "subject": "Industrial Design",
              "language": "English",
              "mode": "Hybrid",
              "credits": 12,
              "instructor": {
                "name": "Dr. Johan van der Merwe",
                "rating": 4.6,
                "totalReviews": 50,
                "students": 80,
                "views": "350",
                "bioLink": "/instructors/johan-van-der-merwe",
                "avatar": "/assets/img/all-img/teacher-johan.png"
              }
            }
          }
        ]
      },
      {
        "id": 115,
        "name": "Architecture",
        "code": "ARCH",
        "description": "Design and planning of buildings and urban spaces.",
        "imageUrl": "/assets/img/disciplines/architecture.jpg",
        "icon": "bx bx-building",
        "careerPaths": [
          "Architect",
          "Urban Planner",
          "Project Designer"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1105,
            "title": "Introduction to Architecture",
            "courseCode": "ARCH101",
            "date": "Mar 15, 2025",
            "closingDate": "Feb 25, 2025",
            "students": 75,
            "views": "300",
            "rating": "4.8",
            "teacher": "Prof. Maria Botha",
            "teacherImageUrl": "/assets/img/all-img/teacher-maria.png",
            "price": "R1,600",
            "imageUrl": "/assets/img/all-img/intro-architecture.png",
            "details": {
              "category": "Architecture",
              "about": "Learn architectural principles, design thinking, and building planning.",
              "description": "This course introduces architecture concepts, building design, and urban planning fundamentals.",
              "tags": [
                "Buildings",
                "Urban Planning",
                "Design"
              ],
              "objectives": [
                "Understand architectural principles.",
                "Develop building design skills.",
                "Explore urban planning concepts."
              ],
              "materials": [
                "CAD Software",
                "Sketches",
                "Blueprints"
              ],
              "requirements": [
                "Creativity",
                "Mathematics"
              ],
              "audience": [
                "Students",
                "Architects",
                "Designers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example7",
              "level": "Beginner",
              "duration": "25 hours",
              "subject": "Architecture",
              "language": "English",
              "mode": "Hybrid",
              "credits": 14,
              "instructor": {
                "name": "Prof. Maria Botha",
                "rating": 4.8,
                "totalReviews": 60,
                "students": 75,
                "views": "300",
                "bioLink": "/instructors/maria-botha",
                "avatar": "/assets/img/all-img/teacher-maria.png"
              }
            }
          }
        ]
      },
      {
        "id": 116,
        "name": "Fashion Design",
        "code": "FD",
        "description": "Design and create apparel, accessories, and fashion collections.",
        "imageUrl": "/assets/img/disciplines/fashion-design.jpg",
        "icon": "bx bx-t-shirt",
        "careerPaths": [
          "Fashion Designer",
          "Stylist",
          "Fashion Entrepreneur"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1106,
            "title": "Introduction to Fashion Design",
            "courseCode": "FD101",
            "date": "Mar 20, 2025",
            "closingDate": "Feb 28, 2025",
            "students": 80,
            "views": "380",
            "rating": "4.7",
            "teacher": "Prof. Naledi Khumalo",
            "teacherImageUrl": "/assets/img/all-img/teacher-naledi.png",
            "price": "R1,550",
            "imageUrl": "/assets/img/all-img/intro-fashion.png",
            "details": {
              "category": "Fashion Design",
              "about": "Learn the fundamentals of designing clothing, textiles, and accessories.",
              "description": "This course covers sketching, pattern making, sewing, and trend analysis for fashion design.",
              "tags": [
                "Clothing",
                "Textiles",
                "Trend Analysis"
              ],
              "objectives": [
                "Develop design and sewing skills.",
                "Understand fashion trends.",
                "Create original apparel designs."
              ],
              "materials": [
                "Sketchbook",
                "Sewing tools",
                "Fabric samples"
              ],
              "requirements": [
                "Creativity",
                "Interest in fashion"
              ],
              "audience": [
                "Students",
                "Aspiring Designers",
                "Fashion Enthusiasts"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example8",
              "level": "Beginner",
              "duration": "22 hours",
              "subject": "Fashion Design",
              "language": "English",
              "mode": "Hybrid",
              "credits": 12,
              "instructor": {
                "name": "Prof. Naledi Khumalo",
                "rating": 4.7,
                "totalReviews": 52,
                "students": 80,
                "views": "380",
                "bioLink": "/instructors/naledi-khumalo",
                "avatar": "/assets/img/all-img/teacher-naledi.png"
              }
            }
          }
        ]
      },
      {
        "id": 117,
        "name": "Film and Multimedia",
        "code": "FM",
        "description": "Study film production, media content creation, and digital storytelling.",
        "imageUrl": "/assets/img/disciplines/film-multimedia.jpg",
        "icon": "bx bx-video",
        "careerPaths": [
          "Film Director",
          "Editor",
          "Multimedia Producer"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Nov 30, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1107,
            "title": "Introduction to Film and Multimedia",
            "courseCode": "FM101",
            "date": "Mar 25, 2025",
            "closingDate": "Mar 5, 2025",
            "students": 85,
            "views": "390",
            "rating": "4.8",
            "teacher": "Dr. Thabo Mthembu",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R1,600",
            "imageUrl": "/assets/img/all-img/intro-film.png",
            "details": {
              "category": "Film and Multimedia",
              "about": "Learn the art of film-making, editing, and multimedia production.",
              "description": "This course introduces video production, storytelling, cinematography, and post-production techniques.",
              "tags": [
                "Film",
                "Video Production",
                "Editing"
              ],
              "objectives": [
                "Understand filmmaking principles.",
                "Learn video editing techniques.",
                "Create multimedia content."
              ],
              "materials": [
                "Camera",
                "Editing software",
                "Storyboards"
              ],
              "requirements": [
                "Creativity",
                "Interest in media"
              ],
              "audience": [
                "Students",
                "Filmmakers",
                "Content Creators"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example9",
              "level": "Beginner",
              "duration": "24 hours",
              "subject": "Film and Multimedia",
              "language": "English",
              "mode": "Hybrid",
              "credits": 12,
              "instructor": {
                "name": "Dr. Thabo Mthembu",
                "rating": 4.8,
                "totalReviews": 56,
                "students": 85,
                "views": "390",
                "bioLink": "/instructors/thabo-mthembu",
                "avatar": "/assets/img/all-img/teacher-thabo.png"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "name": "Faculty of Veterinary Science",
    "code": "VET",
    "description": "Focuses on animal health, welfare, and management of domestic and wild species.",
    "imageUrl": "/assets/img/faculties/veterinary.jpg",
    "icon": "bx bx-paw",
    "dean": {
      "name": "Prof. Kabelo Dlamini",
      "email": "kabelo.dlamini@ceed.ac.za"
    },
    "contactEmail": "ict@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "December 10, 2025",
    "disciplines": [
      {
        "id": 121,
        "name": "Veterinary Medicine",
        "code": "VETMED",
        "description": "Study of animal diseases, treatments, and preventive care.",
        "imageUrl": "/assets/img/disciplines/veterinary-medicine.jpg",
        "icon": "bx bx-plus-medical",
        "careerPaths": [
          "Veterinarian",
          "Animal Surgeon",
          "Researcher"
        ],
        "averageDuration": "6 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Dec 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1201,
            "title": "Introduction to Veterinary Medicine",
            "courseCode": "VET101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 100,
            "views": "500",
            "rating": "4.9",
            "teacher": "Prof. Johan van Heerden",
            "teacherImageUrl": "/assets/img/all-img/teacher-johan.png",
            "price": "R5,500",
            "imageUrl": "/assets/img/all-img/intro-vet-medicine.png",
            "details": {
              "category": "Veterinary Medicine",
              "about": "Learn fundamentals of animal anatomy, physiology, and medical care.",
              "description": "This course introduces basic veterinary practices, animal health monitoring, and preventive medicine.",
              "tags": [
                "Animal Health",
                "Veterinary Care",
                "Preventive Medicine"
              ],
              "objectives": [
                "Understand animal anatomy and physiology.",
                "Learn basic medical procedures.",
                "Apply preventive care strategies."
              ],
              "materials": [
                "Textbooks",
                "Lab equipment",
                "Case studies"
              ],
              "requirements": [
                "Interest in animals",
                "Biology knowledge"
              ],
              "audience": [
                "Students",
                "Veterinary Assistants",
                "Researchers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example10",
              "level": "Beginner",
              "duration": "30 hours",
              "subject": "Veterinary Medicine",
              "language": "English",
              "mode": "Hybrid",
              "credits": 24,
              "instructor": {
                "name": "Prof. Johan van Heerden",
                "rating": 4.9,
                "totalReviews": 80,
                "students": 100,
                "views": "500",
                "bioLink": "/instructors/johan-van-heerden",
                "avatar": "/assets/img/all-img/teacher-johan.png"
              }
            }
          }
        ]
      },
      {
        "id": 122,
        "name": "Animal Health",
        "code": "AH",
        "description": "Study of diseases, nutrition, and welfare of domestic animals.",
        "imageUrl": "/assets/img/disciplines/animal-health.jpg",
        "icon": "bx bx-heart",
        "careerPaths": [
          "Veterinary Technician",
          "Animal Health Officer",
          "Farm Consultant"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1202,
            "title": "Introduction to Animal Health",
            "courseCode": "AH101",
            "date": "Feb 5, 2025",
            "closingDate": "Jan 15, 2025",
            "students": 90,
            "views": "450",
            "rating": "4.8",
            "teacher": "Dr. Zanele Mthembu",
            "teacherImageUrl": "/assets/img/all-img/teacher-zanele.png",
            "price": "R4,500",
            "imageUrl": "/assets/img/all-img/intro-animal-health.png",
            "details": {
              "category": "Animal Health",
              "about": "Learn to monitor, treat, and manage health in domestic animals.",
              "description": "This course teaches basic animal care, nutrition, and common disease management practices.",
              "tags": [
                "Animal Care",
                "Nutrition",
                "Disease Management"
              ],
              "objectives": [
                "Monitor animal health.",
                "Apply basic treatment procedures.",
                "Ensure welfare standards."
              ],
              "materials": [
                "Lab manuals",
                "Case studies",
                "Animal care kits"
              ],
              "requirements": [
                "Interest in animals",
                "Biology knowledge"
              ],
              "audience": [
                "Students",
                "Veterinary Technicians",
                "Farm Managers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example11",
              "level": "Beginner",
              "duration": "28 hours",
              "subject": "Animal Health",
              "language": "English",
              "mode": "Hybrid",
              "credits": 20,
              "instructor": {
                "name": "Dr. Zanele Mthembu",
                "rating": 4.8,
                "totalReviews": 70,
                "students": 90,
                "views": "450",
                "bioLink": "/instructors/zanele-mthembu",
                "avatar": "/assets/img/all-img/teacher-zanele.png"
              }
            }
          }
        ]
      },
      {
        "id": 123,
        "name": "Wildlife Health and Management",
        "code": "WHM",
        "description": "Study of wild animal health, conservation, and ecosystem management.",
        "imageUrl": "/assets/img/disciplines/wildlife-health.jpg",
        "icon": "bx bx-leaf",
        "careerPaths": [
          "Wildlife Veterinarian",
          "Conservationist",
          "Ecologist"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Dec 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1203,
            "title": "Introduction to Wildlife Health and Management",
            "courseCode": "WHM101",
            "date": "Feb 10, 2025",
            "closingDate": "Jan 20, 2025",
            "students": 70,
            "views": "400",
            "rating": "4.9",
            "teacher": "Prof. Pieter Botha",
            "teacherImageUrl": "/assets/img/all-img/teacher-pieter.png",
            "price": "R5,000",
            "imageUrl": "/assets/img/all-img/intro-wildlife.png",
            "details": {
              "category": "Wildlife Health",
              "about": "Learn to care for and manage wildlife populations in natural habitats.",
              "description": "This course covers wildlife diseases, conservation strategies, and ecosystem management techniques.",
              "tags": [
                "Wildlife",
                "Conservation",
                "Ecosystem"
              ],
              "objectives": [
                "Understand wildlife biology and health.",
                "Apply conservation practices.",
                "Manage wildlife populations responsibly."
              ],
              "materials": [
                "Field guides",
                "Lab manuals",
                "Case studies"
              ],
              "requirements": [
                "Interest in wildlife",
                "Biology knowledge"
              ],
              "audience": [
                "Students",
                "Ecologists",
                "Wildlife Managers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example12",
              "level": "Beginner",
              "duration": "32 hours",
              "subject": "Wildlife Health and Management",
              "language": "English",
              "mode": "Hybrid",
              "credits": 24,
              "instructor": {
                "name": "Prof. Pieter Botha",
                "rating": 4.9,
                "totalReviews": 65,
                "students": 70,
                "views": "400",
                "bioLink": "/instructors/pieter-botha",
                "avatar": "/assets/img/all-img/teacher-pieter.png"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "name": "Faculty of Military Science",
    "code": "MIL",
    "description": "Focuses on defence studies, military technology, strategy, and security management.",
    "imageUrl": "/assets/img/faculties/military.jpg",
    "icon": "bx bx-shield",
    "dean": {
      "name": "Prof. Kabelo Dlamini",
      "email": "kabelo.dlamini@ceed.ac.za"
    },
    "contactEmail": "ict@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "December 10, 2025",
    "disciplines": [
      {
        "id": 131,
        "name": "Defence Studies",
        "code": "DS",
        "description": "Study of national defence, military strategy, and operations.",
        "imageUrl": "/assets/img/disciplines/defence-studies.jpg",
        "icon": "bx bx-badge-check",
        "careerPaths": [
          "Military Officer",
          "Strategist",
          "Defence Analyst"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1301,
            "title": "Introduction to Defence Studies",
            "courseCode": "DS101",
            "date": "Feb 1, 2025",
            "closingDate": "Jan 10, 2025",
            "students": 60,
            "views": "300",
            "rating": "4.8",
            "teacher": "Prof. Andile Ngcobo",
            "teacherImageUrl": "/assets/img/all-img/teacher-andile.png",
            "price": "R3,500",
            "imageUrl": "/assets/img/all-img/intro-defence.png",
            "details": {
              "category": "Defence Studies",
              "about": "Learn the fundamentals of national defence, security policy, and military strategy.",
              "description": "This course covers military theory, strategy, operational planning, and the history of warfare.",
              "tags": [
                "Military Strategy",
                "Security",
                "Operations"
              ],
              "objectives": [
                "Understand military theory.",
                "Analyze defence policies.",
                "Apply strategic planning methods."
              ],
              "materials": [
                "Textbooks",
                "Case studies",
                "Simulation exercises"
              ],
              "requirements": [
                "Interest in military",
                "Analytical skills"
              ],
              "audience": [
                "Students",
                "Military Officers",
                "Defence Analysts"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example13",
              "level": "Beginner",
              "duration": "28 hours",
              "subject": "Defence Studies",
              "language": "English",
              "mode": "Hybrid",
              "credits": 20,
              "instructor": {
                "name": "Prof. Andile Ngcobo",
                "rating": 4.8,
                "totalReviews": 50,
                "students": 60,
                "views": "300",
                "bioLink": "/instructors/andile-ngcobo",
                "avatar": "/assets/img/all-img/teacher-andile.png"
              }
            }
          }
        ]
      },
      {
        "id": 132,
        "name": "Military Technology",
        "code": "MT",
        "description": "Study of modern military equipment, weapons systems, and technological innovations.",
        "imageUrl": "/assets/img/disciplines/military-technology.jpg",
        "icon": "bx bx-cpu",
        "careerPaths": [
          "Military Engineer",
          "Weapons Specialist",
          "Technologist"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1302,
            "title": "Introduction to Military Technology",
            "courseCode": "MT101",
            "date": "Feb 5, 2025",
            "closingDate": "Jan 15, 2025",
            "students": 55,
            "views": "280",
            "rating": "4.7",
            "teacher": "Dr. Pieter van Zyl",
            "teacherImageUrl": "/assets/img/all-img/teacher-pieter.png",
            "price": "R3,800",
            "imageUrl": "/assets/img/all-img/intro-military-tech.png",
            "details": {
              "category": "Military Technology",
              "about": "Learn about weapons systems, defense technology, and modern military innovations.",
              "description": "This course introduces technological applications in defense, including weapons, vehicles, and communication systems.",
              "tags": [
                "Weapons",
                "Technology",
                "Innovation"
              ],
              "objectives": [
                "Understand military tech applications.",
                "Analyze weapons systems.",
                "Explore modern defense innovations."
              ],
              "materials": [
                "Manuals",
                "Simulation exercises",
                "Field studies"
              ],
              "requirements": [
                "Interest in technology",
                "Analytical skills"
              ],
              "audience": [
                "Students",
                "Engineers",
                "Military Officers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example14",
              "level": "Beginner",
              "duration": "26 hours",
              "subject": "Military Technology",
              "language": "English",
              "mode": "Hybrid",
              "credits": 20,
              "instructor": {
                "name": "Dr. Pieter van Zyl",
                "rating": 4.7,
                "totalReviews": 48,
                "students": 55,
                "views": "280",
                "bioLink": "/instructors/pieter-van-zyl",
                "avatar": "/assets/img/all-img/teacher-pieter.png"
              }
            }
          }
        ]
      },
      {
        "id": 133,
        "name": "Strategic Studies",
        "code": "SS",
        "description": "Study of strategic planning, policy development, and defense management.",
        "imageUrl": "/assets/img/disciplines/strategic-studies.jpg",
        "icon": "bx bx-compass",
        "careerPaths": [
          "Strategist",
          "Policy Analyst",
          "Military Planner"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1303,
            "title": "Introduction to Strategic Studies",
            "courseCode": "SS101",
            "date": "Feb 10, 2025",
            "closingDate": "Jan 20, 2025",
            "students": 50,
            "views": "250",
            "rating": "4.8",
            "teacher": "Prof. Thabo Dlamini",
            "teacherImageUrl": "/assets/img/all-img/teacher-thabo.png",
            "price": "R3,600",
            "imageUrl": "/assets/img/all-img/intro-strategic.png",
            "details": {
              "category": "Strategic Studies",
              "about": "Learn strategic analysis, planning, and policy-making for national security.",
              "description": "This course introduces military strategy, policy development, and operational planning techniques.",
              "tags": [
                "Strategy",
                "Policy",
                "Planning"
              ],
              "objectives": [
                "Understand strategic theory.",
                "Develop planning skills.",
                "Analyze defense policies."
              ],
              "materials": [
                "Textbooks",
                "Case studies",
                "Simulations"
              ],
              "requirements": [
                "Interest in strategy",
                "Analytical skills"
              ],
              "audience": [
                "Students",
                "Military Officers",
                "Analysts"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example15",
              "level": "Beginner",
              "duration": "28 hours",
              "subject": "Strategic Studies",
              "language": "English",
              "mode": "Hybrid",
              "credits": 20,
              "instructor": {
                "name": "Prof. Thabo Dlamini",
                "rating": 4.8,
                "totalReviews": 52,
                "students": 50,
                "views": "250",
                "bioLink": "/instructors/thabo-dlamini",
                "avatar": "/assets/img/all-img/teacher-thabo.png"
              }
            }
          }
        ]
      },
      {
        "id": 134,
        "name": "Security Management",
        "code": "SM",
        "description": "Study of organizational security, risk assessment, and crisis management.",
        "imageUrl": "/assets/img/disciplines/security-management.jpg",
        "icon": "bx bx-lock",
        "careerPaths": [
          "Security Manager",
          "Risk Analyst",
          "Crisis Manager"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 15, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1304,
            "title": "Introduction to Security Management",
            "courseCode": "SM101",
            "date": "Feb 15, 2025",
            "closingDate": "Jan 25, 2025",
            "students": 55,
            "views": "270",
            "rating": "4.7",
            "teacher": "Dr. Sipho Mthethwa",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R3,700",
            "imageUrl": "/assets/img/all-img/intro-security.png",
            "details": {
              "category": "Security Management",
              "about": "Learn organizational security practices, risk assessment, and crisis response.",
              "description": "This course covers security policy, risk management, and crisis response strategies for organizations.",
              "tags": [
                "Security",
                "Risk Management",
                "Crisis Management"
              ],
              "objectives": [
                "Understand organizational security.",
                "Assess risks effectively.",
                "Develop crisis management plans."
              ],
              "materials": [
                "Case studies",
                "Simulation exercises",
                "Manuals"
              ],
              "requirements": [
                "Interest in security",
                "Analytical skills"
              ],
              "audience": [
                "Students",
                "Security Officers",
                "Managers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example16",
              "level": "Beginner",
              "duration": "26 hours",
              "subject": "Security Management",
              "language": "English",
              "mode": "Hybrid",
              "credits": 20,
              "instructor": {
                "name": "Dr. Sipho Mthethwa",
                "rating": 4.7,
                "totalReviews": 50,
                "students": 55,
                "views": "270",
                "bioLink": "/instructors/sipho-mthethwa",
                "avatar": "/assets/img/all-img/teacher-sipho.png"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "name": "Faculty of Maritime and Ocean Sciences",
    "code": "MOS",
    "description": "Dedicated to the study and management of marine environments, ocean systems, and maritime industries.",
    "imageUrl": "/assets/img/faculties/maritime.jpg",
    "icon": "bx bx-anchor",
    "dean": {
      "name": "Prof. Kabelo Dlamini",
      "email": "kabelo.dlamini@ceed.ac.za"
    },
    "contactEmail": "ict@ceed.ac.za",
    "averageDuration": "3-4 years",
    "averageRating": 4.9,
    "numberOfDisciplines": 5,
    "featured": true,
    "closingDate": "December 10, 2025",
    "disciplines": [
      {
        "id": 141,
        "name": "Marine Biology",
        "code": "MB",
        "description": "Study of marine life forms, ecosystems, and their interactions with the environment.",
        "imageUrl": "/assets/img/disciplines/marine-biology.jpg",
        "icon": "bx bx-water",
        "careerPaths": [
          "Marine Biologist",
          "Research Scientist",
          "Conservation Specialist"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Dec 20, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1401,
            "title": "Introduction to Marine Biology",
            "courseCode": "MB101",
            "date": "Feb 10, 2025",
            "closingDate": "Jan 15, 2025",
            "students": 80,
            "views": "420",
            "rating": "4.9",
            "teacher": "Dr. Nandi Cele",
            "teacherImageUrl": "/assets/img/all-img/teacher-nandi.png",
            "price": "R4,800",
            "imageUrl": "/assets/img/all-img/intro-marine-bio.png",
            "details": {
              "category": "Marine Biology",
              "about": "Explore ocean ecosystems, marine species, and conservation methods.",
              "description": "An introduction to the biology of marine organisms, including their physiology, behavior, and ecological relationships.",
              "tags": [
                "Marine Life",
                "Ecosystems",
                "Conservation"
              ],
              "objectives": [
                "Understand marine biodiversity.",
                "Study ecological interactions in marine systems.",
                "Explore conservation and sustainability practices."
              ],
              "materials": [
                "Field guides",
                "Lab manuals",
                "Research papers"
              ],
              "requirements": [
                "Interest in marine science",
                "Basic biology knowledge"
              ],
              "audience": [
                "Students",
                "Researchers",
                "Conservationists"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example17",
              "level": "Beginner",
              "duration": "32 hours",
              "subject": "Marine Biology",
              "language": "English",
              "mode": "Hybrid",
              "credits": 24,
              "instructor": {
                "name": "Dr. Nandi Cele",
                "rating": 4.9,
                "totalReviews": 68,
                "students": 80,
                "views": "420",
                "bioLink": "/instructors/nandi-cele",
                "avatar": "/assets/img/all-img/teacher-nandi.png"
              }
            }
          }
        ]
      },
      {
        "id": 142,
        "name": "Oceanography",
        "code": "OC",
        "description": "Study of ocean processes, currents, and climate systems.",
        "imageUrl": "/assets/img/disciplines/oceanography.jpg",
        "icon": "bx bx-globe",
        "careerPaths": [
          "Oceanographer",
          "Climate Scientist",
          "Researcher"
        ],
        "averageDuration": "4 years",
        "averageRating": 4.8,
        "numberOfCourses": 1,
        "closingDate": "Dec 20, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1402,
            "title": "Introduction to Oceanography",
            "courseCode": "OC101",
            "date": "Feb 15, 2025",
            "closingDate": "Jan 25, 2025",
            "students": 70,
            "views": "410",
            "rating": "4.8",
            "teacher": "Prof. Themba Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-themba.png",
            "price": "R5,200",
            "imageUrl": "/assets/img/all-img/intro-oceanography.png",
            "details": {
              "category": "Oceanography",
              "about": "Learn the physical and chemical processes that shape our oceans.",
              "description": "Covers marine geology, ocean circulation, and the role of oceans in the global climate system.",
              "tags": [
                "Climate",
                "Oceans",
                "Currents"
              ],
              "objectives": [
                "Understand ocean currents and tides.",
                "Analyze climate-ocean relationships.",
                "Explore marine geological structures."
              ],
              "materials": [
                "Data sets",
                "Charts",
                "Satellite images"
              ],
              "requirements": [
                "Physics or Earth Science background",
                "Interest in marine systems"
              ],
              "audience": [
                "Students",
                "Scientists",
                "Researchers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example18",
              "level": "Intermediate",
              "duration": "36 hours",
              "subject": "Oceanography",
              "language": "English",
              "mode": "Hybrid",
              "credits": 25,
              "instructor": {
                "name": "Prof. Themba Mokoena",
                "rating": 4.8,
                "totalReviews": 65,
                "students": 70,
                "views": "410",
                "bioLink": "/instructors/themba-mokoena",
                "avatar": "/assets/img/all-img/teacher-themba.png"
              }
            }
          }
        ]
      },
      {
        "id": 143,
        "name": "Maritime Transport and Logistics",
        "code": "MTL",
        "description": "Study of maritime operations, port management, and global logistics systems.",
        "imageUrl": "/assets/img/disciplines/maritime-transport.jpg",
        "icon": "bx bx-ship",
        "careerPaths": [
          "Port Manager",
          "Logistics Specialist",
          "Marine Operations Manager"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.7,
        "numberOfCourses": 1,
        "closingDate": "Dec 20, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1403,
            "title": "Introduction to Maritime Transport and Logistics",
            "courseCode": "MTL101",
            "date": "Feb 20, 2025",
            "closingDate": "Jan 30, 2025",
            "students": 75,
            "views": "380",
            "rating": "4.7",
            "teacher": "Dr. Zandile Mokoena",
            "teacherImageUrl": "/assets/img/all-img/teacher-zandile.png",
            "price": "R4,900",
            "imageUrl": "/assets/img/all-img/intro-maritime.png",
            "details": {
              "category": "Maritime Transport and Logistics",
              "about": "Learn about maritime operations, logistics, and port management systems.",
              "description": "This course covers shipping logistics, port operations, and maritime safety regulations.",
              "tags": [
                "Shipping",
                "Logistics",
                "Ports"
              ],
              "objectives": [
                "Understand maritime transport systems.",
                "Manage port operations efficiently.",
                "Apply global logistics principles."
              ],
              "materials": [
                "Case studies",
                "Charts",
                "Simulation software"
              ],
              "requirements": [
                "Interest in logistics",
                "Organizational skills"
              ],
              "audience": [
                "Students",
                "Logistics Managers",
                "Port Operators"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example19",
              "level": "Beginner",
              "duration": "30 hours",
              "subject": "Maritime Transport",
              "language": "English",
              "mode": "Hybrid",
              "credits": 20,
              "instructor": {
                "name": "Dr. Zandile Mokoena",
                "rating": 4.7,
                "totalReviews": 58,
                "students": 75,
                "views": "380",
                "bioLink": "/instructors/zandile-mokoena",
                "avatar": "/assets/img/all-img/teacher-zandile.png"
              }
            }
          }
        ]
      },
      {
        "id": 144,
        "name": "Nautical Science",
        "code": "NS",
        "description": "Study of navigation, seamanship, and maritime safety procedures.",
        "imageUrl": "/assets/img/disciplines/nautical-science.jpg",
        "icon": "bx bx-map",
        "careerPaths": [
          "Ship Navigator",
          "Marine Pilot",
          "Deck Officer"
        ],
        "averageDuration": "3 years",
        "averageRating": 4.9,
        "numberOfCourses": 1,
        "closingDate": "Dec 20, 2025",
        "featured": true,
        "courses": [
          {
            "id": 1404,
            "title": "Introduction to Nautical Science",
            "courseCode": "NS101",
            "date": "Feb 25, 2025",
            "closingDate": "Feb 5, 2025",
            "students": 60,
            "views": "350",
            "rating": "4.9",
            "teacher": "Capt. Sipho Khuzwayo",
            "teacherImageUrl": "/assets/img/all-img/teacher-sipho.png",
            "price": "R5,300",
            "imageUrl": "/assets/img/all-img/intro-nautical.png",
            "details": {
              "category": "Nautical Science",
              "about": "Learn the principles of ship navigation, meteorology, and maritime law.",
              "description": "This course covers navigation techniques, maritime communication, and safety protocols at sea.",
              "tags": [
                "Navigation",
                "Safety",
                "Maritime Law"
              ],
              "objectives": [
                "Understand ship navigation systems.",
                "Apply safety procedures.",
                "Interpret meteorological data."
              ],
              "materials": [
                "Charts",
                "Navigation instruments",
                "Simulation software"
              ],
              "requirements": [
                "Interest in maritime careers",
                "Basic math and physics"
              ],
              "audience": [
                "Students",
                "Seafarers",
                "Deck Officers"
              ],
              "videoThumbnail": "/assets/img/all-img/course-video.png",
              "videoUrl": "https://youtu.be/example20",
              "level": "Intermediate",
              "duration": "34 hours",
              "subject": "Nautical Science",
              "language": "English",
              "mode": "Hybrid",
              "credits": 22,
              "instructor": {
                "name": "Capt. Sipho Khuzwayo",
                "rating": 4.9,
                "totalReviews": 70,
                "students": 60,
                "views": "350",
                "bioLink": "/instructors/sipho-khuzwayo",
                "avatar": "/assets/img/all-img/teacher-sipho.png"
              }
            }
          }
        ]
      }
    ]
  }
]

export const FacultiesMenuData: MenuFacultyItem[] = [
    {
      name: "Faculty of Humanities, Arts and Social Sciences",
      disciplines: [
        "Psychology",
        "Sociology",
        "History",
        "Political Science",
        "Philosophy",
        "Languages and Linguistics",
        "Anthropology",
        "Communication Studies",
        "International Relations"
      ]
    },
    {
      name: "Faculty of Science",
      disciplines: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Environmental Science",
        "Geology",
        "Computer Science",
        "Statistics"
      ]
    },
    {
      name: "Faculty of Engineering and the Built Environment",
      disciplines: [
        "Civil Engineering",
        "Electrical and Electronic Engineering",
        "Mechanical Engineering",
        "Chemical Engineering",
        "Industrial Engineering",
        "Mining Engineering",
        "Architecture",
        "Urban and Regional Planning",
        "Construction Management"
      ]
    },
    {
      name: "Faculty of Health Sciences and Medicine",
      disciplines: [
        "Medicine (MBChB)",
        "Nursing",
        "Physiotherapy",
        "Occupational Therapy",
        "Dentistry",
        "Pharmacy",
        "Public Health",
        "Medical Laboratory Science",
        "Dietetics and Nutrition"
      ]
    },
    {
      name: "Faculty of Law",
      disciplines: [
        "Bachelor of Laws (LLB)",
        "Legal Theory",
        "Human Rights Law",
        "Commercial Law",
        "Criminal Law",
        "Constitutional Law"
      ]
    },
    {
      name: "Faculty of Commerce, Business, Management and Economics",
      disciplines: [
        "Accounting",
        "Economics",
        "Business Management",
        "Finance",
        "Marketing",
        "Human Resource Management",
        "Entrepreneurship",
        "Supply Chain Management",
        "Information Systems"
      ]
    },
    {
      name: "Faculty of Education",
      disciplines: [
        "Foundation Phase Teaching",
        "Intermediate and Senior Phase Teaching",
        "Educational Psychology",
        "Curriculum Studies",
        "Inclusive Education",
        "Higher Education Leadership"
      ]
    },
    {
      name: "Faculty of Agricultural and Environmental Sciences",
      disciplines: [
        "Agriculture",
        "Animal Science",
        "Crop Science",
        "Agricultural Economics",
        "Environmental Management",
        "Forestry",
        "Aquaculture"
      ]
    },
    {
      name: "Faculty of Information and Communication Technology",
      disciplines: [
        "Computer Science",
        "Information Systems",
        "Software Engineering",
        "Data Science",
        "Cybersecurity",
        "Artificial Intelligence"
      ]
    },
    {
      name: "Faculty of Theology, Religion and Divinity",
      disciplines: [
        "Theology",
        "Biblical Studies",
        "Religious Education",
        "Ethics"
      ]
    },
    {
      name: "Faculty of Arts, Design and Architecture",
      disciplines: [
        "Fine Arts",
        "Graphic Design",
        "Interior Design",
        "Industrial Design",
        "Architecture",
        "Fashion Design",
        "Film and Multimedia"
      ]
    },
    {
      name: "Faculty of Veterinary Science",
      disciplines: [
        "Veterinary Medicine",
        "Animal Health",
        "Wildlife Health and Management"
      ]
    },
    {
      name: "Faculty of Military Science",
      disciplines: [
        "Defence Studies",
        "Military Technology",
        "Strategic Studies",
        "Security Management"
      ]
    },
    {
      name: "Faculty of Maritime and Ocean Sciences",
      disciplines: [
        "Marine Biology",
        "Oceanography",
        "Maritime Transport and Logistics",
        "Nautical Science"
      ]
    }
]
