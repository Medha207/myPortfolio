import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Rocket 
} from 'lucide-react';

export const portfolioData = {
  hero: {
    name: "Medha Adusumalli",
    greeting: "Hello, I'm Medha Adusumalli",
    headline: "Full Stack Developer",
    subHeadline: "Future AI Innovator",
    subtext: "I build intelligent digital experiences that turn ideas into reality.",
  },
  
  about: [
    {
      id: 1,
      title: "The Spark",
      description: "A curious student discovering the vast, boundless world of technology.",
      icon: 'spark' // Mapped in component
    },
    {
      id: 2,
      title: "The Foundation",
      description: "Learning programming fundamentals and unlocking the logic behind the digital universe.",
      icon: 'terminal'
    },
    {
      id: 3,
      title: "The Builder",
      description: "Engineering scalable web applications from frontend interfaces to complex backend systems.",
      icon: 'database'
    },
    {
      id: 4,
      title: "The Visionary",
      description: "Exploring artificial intelligence, machine learning, and innovative tech paradigms.",
      icon: 'cpu'
    },
    {
      id: 5,
      title: "The Creator",
      description: "Creating impactful digital products that redefine user experiences and solve real-world problems.",
      icon: 'rocket'
    }
  ],

  skills: [
    { name: "HTML", category: "Frontend", color: "#e34c26" },
    { name: "CSS", category: "Frontend", color: "#264de4" },
    { name: "JavaScript", category: "Frontend", color: "#f0db4f" },
    { name: "React", category: "Frontend", color: "#61dafb" },
    { name: "Node.js", category: "Backend", color: "#339933" },
    { name: "Express", category: "Backend", color: "#ffffff" },
    { name: "MongoDB", category: "Database", color: "#4d724eff" },
    { name: "Python", category: "Backend/AI", color: "#3776AB" },
    { name: "SQL", category: "Database", color: "#afdcfeff" },
    { name: "Gen AI", category: "AI", color: "#a855f7" },
    { name: "Prompt Engineering", category: "AI", color: "#06b6d4" }
  ],

  projects: [
    {
      title: "Ca Phe Bistro",
      subtitle: "Production Café Website",
      description: "Designed and developed a production-ready website for a real-client café with responsive UI, modern UX, and mobile-first design. Delivered a fully polished, business-facing product with optimized performance and intuitive navigation.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js"],
      liveDemo: "https://caphebistro.in/",
      image: "linear-gradient(135deg, rgba(8,145,178,0.2) 0%, rgba(14,165,233,0.1) 100%)"
    },
    {
      title: "Arithmetic Calculator",
      subtitle: "Interactive Computing Utility",
      description: "Built a fully responsive arithmetic calculator featuring a gradient UI and smooth animations for an enhanced user experience.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://lily07.niat.tech/",
      image: "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.1) 100%)"
    },
    {
      title: "Rock Paper Scissors Game",
      subtitle: "Interactive Web Game",
      description: "Developed an interactive browser game with pastel gradient UI, smooth animations, and real-time visual feedback.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://emily.niat.tech/",
      image: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(139,92,246,0.1) 100%)"
    },
    {
      title: "User Management Dashboard",
      subtitle: "Full-Stack Control Panel",
      description: "Developed a full-stack CRUD dashboard for admin user management with REST APIs for add, view, update, and delete operations. Architected clean separation of concerns across a React frontend and Express/MongoDB backend.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js (MERN)"],
      liveDemo: "https://user-management-dashboard-s4eb.vercel.app/",
      image: "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(6,182,212,0.1) 100%)"
    },
    {
      title: "FinTrack",
      subtitle: "Secure Fintech Application",
      description: "Built a secure backend with JWT authentication and bcrypt password hashing, following MVC architecture and REST API best practices. Implemented full CRUD operations for financial data; deployed on Vercel/Render and validated with Postman.",
      techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
      liveDemo: "https://fintech1-sigma.vercel.app/",
      image: "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(239,68,68,0.1) 100%)"
    },
    {
      title: "EmotiFix",
      subtitle: "Mood-Based Recommendation Engine",
      description: "Built a full-stack MERN app that recommends movies by user-selected emotions, integrating trailer previews and ratings. Implemented JWT-based authentication, RESTful Node.js + Express APIs, and a fully responsive React frontend.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js (MERN)"],
      liveDemo: "https://emot-fix.vercel.app/",
      image: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.1) 100%)"
    }
  ],

  innovation: {
    statement: [
      "I don't just write code.",
      "I build experiences.",
      "I create solutions that shape the future."
    ]
  },

  vision: {
    description: "Driven by a relentless pursuit of forward-thinking technology, my ambition is to build intelligent, AI-powered applications that challenge the status quo and deliver deeply impactful digital products for a connected world."
  },

  contact: {
    email: "medhaadusumalli@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/medha-adusumalli",
      github: "https://github.com/Medha207"
    }
  }
};
