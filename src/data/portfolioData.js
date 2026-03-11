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
    { name: "SQL", category: "Database", color: "#afdcfeff" }
  ],

  projects: [
    {
      title: "Space Exploration",
      subtitle: "Cosmic Discovery Platform",
      description: "Discover the wonders of the universe with our space exploration website. Dive into the latest discoveries, missions, and innovations driving humanity’s journey beyond Earth.",
      techStack: ["HTML", "CSS"],
      liveDemo: "https://cosmiccoders.niat.tech/",
      image: "linear-gradient(135deg, rgba(8,145,178,0.2) 0%, rgba(14,165,233,0.1) 100%)"
    },
    {
      title: "Arithmetic Calculator",
      subtitle: "Interactive Computing Utility",
      description: "Built a stylish arithmetic calculator performing basic operations. Designed with an elegant gradient UI, smooth animations, and beginner-friendly logic tailored for responsiveness.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://lily07.niat.tech/",
      image: "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.1) 100%)"
    },
    {
      title: "Rock Paper Scissors Game",
      subtitle: "Interactive Web Game",
      description: "Developed an interactive Rock-Paper-Scissors game featuring a vibrant UI with pastel gradient backgrounds, smooth animations, and engaging instantaneous visual feedback.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://emily.niat.tech/",
      image: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(139,92,246,0.1) 100%)"
    },
    {
      title: "User Management Dashboard",
      subtitle: "Full-Stack Control Panel",
      description: "Developed a full-stack user management system utilizing robust architectural patterns. Implemented secure CRUD operations and REST APIs to add, view, update, and delete users.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Medha207/User-Management-Dashboard",
      image: "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(6,182,212,0.1) 100%)"
    },
    {
      title: "Fin Track",
      subtitle: "Secure Fintech Application",
      description: "Built a complete backend application for user authentication and data management. Integrated JWT authentication, bcrypt hashing, and robust RESTful APIs following a strict MVC architecture.",
      techStack: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/Medha207/Fintech",
      image: "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(239,68,68,0.1) 100%)"
    },
    {
      title: "EmotFix",
      subtitle: "Mood-Based Recommendation Engine",
      description: "Designed an innovative mood-based movie platform featuring responsive custom glowing cards and 3D backgrounds. Includes secure authentication, dedicated backend routes, and real-time reviews.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Medha207/EmotFix/tree/master",
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
