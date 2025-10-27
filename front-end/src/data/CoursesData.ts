
// Instructor for a course
export interface Instructor {
  name: string;
  rating: number;
  totalReviews: number;
  students: number;
  views: string;
  bioLink: string;
  avatar: string;
}

// Detailed course information
export interface CourseDetailProps {
  category: string;
  title: string;
  instructor: Instructor;
  date: string;
  enrolledCount: number;
  about: string;
  description: string;
  tags: string[];
  objectives: string[];
  materials: string[];
  requirements: string[];
  audience: string[];
  videoThumbnail: string;
  videoUrl: string;
  price: string; 
  level: string; 
  duration: string; 
  subject: string;
  language: string;
}

// Main course card structure
export interface Course {
  id: number;
  title: string;
  date: string;
  students: string;
  views: string;
  rating: string;
  teacher: string;
  price: string;
  imageUrl: string;
  teacherImageUrl: string;
  details: CourseDetailProps;
}


// export const Courses: Course[] = [
//     { id: 1, category: "", title: "Environmental Science and Sustainability", date: "October 4, 2024", students: "432", views: "1.2k", rating: "5.0", teacher: "Anthony Steven", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 2, category: "", title: "Introduction to Computer Science", date: "October 15, 2024", students: "874", views: "3.7k", rating: "4.5", teacher: "Sarah Johnson", price: "$120", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 3, category: "", title: "Modern Art History", date: "October 22, 2024", students: "290", views: "2.1k", rating: "4.8", teacher: "Michael Brown", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 4, category: "", title: "Principles of Economics", date: "October 8, 2024", students: "512", views: "1.9k", rating: "4.3", teacher: "Emily Davis", price: "$75", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 5, category: "", title: "Data Structures & Algorithms", date: "October 19, 2024", students: "621", views: "2.8k", rating: "4.9", teacher: "David Wilson", price: "$150", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 6, category: "", title: "Digital Marketing Fundamentals", date: "October 12, 2024", students: "398", views: "1.5k", rating: "4.6", teacher: "Olivia Martinez", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 7, category: "", title: "Creative Writing Workshop", date: "October 27, 2024", students: "245", views: "1.1k", rating: "4.2", teacher: "James Taylor", price: "$90", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 8, category: "", title: "Physics for Engineers", date: "October 6, 2024", students: "512", views: "2.6k", rating: "4.7", teacher: "Sophia Anderson", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 9, category: "", title: "Psychology of Human Behavior", date: "October 21, 2024", students: "631", views: "3.2k", rating: "4.9", teacher: "William Thomas", price: "$110", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 10, category: "", title: "Global Politics and Society", date: "October 14, 2024", students: "489", views: "2.0k", rating: "4.4", teacher: "Emma Moore", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.pngg", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 11, category: "", title: "Artificial Intelligence Basics", date: "October 3, 2024", students: "754", views: "4.1k", rating: "4.8", teacher: "Anthony Steven", price: "$200", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 12, category: "", title: "Blockchain and Cryptocurrency", date: "October 9, 2024", students: "389", views: "2.3k", rating: "4.5", teacher: "Sarah Johnson", price: "$180", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 13, category: "", title: "Sustainable Architecture", date: "October 20, 2024", students: "274", views: "1.4k", rating: "4.7", teacher: "Michael Brown", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 14, category: "", title: "Human-Computer Interaction", date: "October 16, 2024", students: "512", views: "2.7k", rating: "4.6", teacher: "Emily Davis", price: "$130", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 15, category: "", title: "Financial Planning Essentials", date: "October 5, 2024", students: "432", views: "1.8k", rating: "4.3", teacher: "David Wilson", price: "$95", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 16, category: "", title: "Photography Masterclass", date: "October 18, 2024", students: "391", views: "1.6k", rating: "4.9", teacher: "Olivia Martinez", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 17, category: "", title: "Web Development Bootcamp", date: "October 11, 2024", students: "712", views: "3.5k", rating: "4.8", teacher: "James Taylor", price: "$140", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 18, category: "", title: "Music Theory for Beginners", date: "October 23, 2024", students: "268", views: "1.2k", rating: "4.4", teacher: "Sophia Anderson", price: "$60", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 19, category: "", title: "Entrepreneurship 101", date: "October 2, 2024", students: "543", views: "2.9k", rating: "4.7", teacher: "William Thomas", price: "$150", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 20, category: "", title: "Creative Coding", date: "October 26, 2024", students: "321", views: "1.5k", rating: "4.5", teacher: "Emma Moore", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.pngg", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 21, category: "", title: "Machine Learning Essentials", date: "October 7, 2024", students: "688", views: "3.8k", rating: "4.9", teacher: "Anthony Steven", price: "$210", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 22, category: "", title: "Nutrition and Wellness", date: "October 13, 2024", students: "312", views: "1.7k", rating: "4.6", teacher: "Sarah Johnson", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 23, category: "", title: "Astrophysics for Everyone", date: "October 17, 2024", students: "256", views: "1.3k", rating: "4.8", teacher: "Michael Brown", price: "$100", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 24, category: "", title: "Yoga and Mindfulness", date: "October 10, 2024", students: "398", views: "2.0k", rating: "4.5", teacher: "Emily Davis", price: "Free", imageUrl: "/assets/img/all-img/courses-image-1.png", teacherImageUrl: "/assets/img/all-img/teacher-img.png" },
//     { id: 25, category: "", title: "Creative Problem Solving", date: "October 25, 2024", students: "431", views: "2.2k", rating: "4.7", teacher: "David Wilson", price: "$125", imageUrl: "/assets/img/all-img/courses-image-1.pngg", teacherImageUrl: "/assets/img/all-img/teacher-img.png" }
// ];

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
      price: "$0",
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
    price: "$120",
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
      price: "$120",
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
      price: "$0",
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
    price: "$75",
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
      price: "$75",
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
    price: "$150",
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
      price: "$150",
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
      price: "$0",
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
    price: "$90",
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
      price: "$90",
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
      price: "$0",
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
    price: "$110",
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
      price: "$110",
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
      price: "$0",
      level: "Undergraduate",
      duration: "22.1 hours",
      subject: "Political Science",
      language: "English",
    },
  },
];
