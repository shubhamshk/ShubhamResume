import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const PORTFOLIO_DATA = {
    personal: {
        name: "Shubham Kumar",
        title: "Software Developer",
        email: "shubhamshk07@gmail.com",
        phone: "+91 8987205708",
        location: "Remote / India",
        bio: "I build scalable, beautiful web experiences. With a strong foundation in Full Stack Development and AI/ML, I solve real-world problems through clean code and system thinking.",
        links: {
            github: "https://github.com/shubhamshk",
            linkedin: "https://www.linkedin.com/in/shubham-shk/", // Placeholder
            leetcode: "https://leetcode.com", // Placeholder
            email: "mailto:shubhamshk07@gmail.com",
        },
    },
    skills: {
        languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
        frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux", "HTML", "CSS"],
        backend: ["Node.js", "Express.js", "Django", "MongoDB", "Prisma"],
        tools: ["Git", "Docker", "AWS", "VSCode", "Postman", "Figma"],
        ai_ml: ["TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas", "LLMs"],
    },
    experience: [
        {
            company: "Amazon",
            role: "ML Engineer",
            period: "Aug 2025 - Present",
            type: "Remote",
            description: [
                "Explored topics including Deep Learning, Large Language Models (LLMs), Inference and Reinforcement Learning.",
                "Deployed a novel deep learning model using TensorFlow and optimized model training time by 30% by implementing distributed training strategies across Amazon EC2 GPU instances.",
            ],
        },
        {
            company: "OasisInfoByte",
            role: "Software Engineer Intern",
            period: "May 2023 - June 2023",
            type: "Remote",
            description: [
                "Designed a full-stack movie streaming platform that attracted 500+ users in the first month, enabling content discovery and playback using the TMDB API.",
                "Engineered a RESTful API using Node.js and Express.js, processing 5,000+ requests/day with an average.",
            ],
        },
        {
            company: "Open Source Hackathon",
            role: "Hacktoberfest Winner",
            period: "Sep 2023 - Oct 2023",
            type: "Remote",
            description: [
                "Contributed to 5+ open-source projects during Hacktoberfest 2023 as a Full Stack Engineer, fixing bugs and implementing new features in production-level codebases.",
                "Opened and merged 30+ high-quality pull requests; collaborated with international developers.",
            ],
        },
    ],
    projects: [
        {
            title: "PhotoFlow - Social Media App",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "TailwindCSS"],
            description: "Developed a full-stack social media platform with authentication, user profiles, real-time messaging, and media uploads.",
            image: "https://res.cloudinary.com/dkwxxfewv/image/upload/v1767711639/Screenshot_2026-01-06_202741_o3dk6f.png",
            highlights: [
                "Used secure JWT authentication and Socket.IO for real-time chat.",
                "Integrated Cloudinary for media uploads.",
                "Optimized MongoDB queries for scalability.",
            ],
            links: { demo: "https://photoflow-front.onrender.com/", github: "https://github.com/shubhamshk/PhotoFLow---Full-Fledged-Social-Media-App" },
        },
        {
            title: "AI RESUME BUDDY",
            tech: ["React.js", "TypeScript", "Zustand", "Tailwind", "OpenAI API"],
            description: "Created an AI-powered resume screening system that analyzed 1,000+ resumes against industry standards.",
            image: "https://res.cloudinary.com/dkwxxfewv/image/upload/v1767710827/Screenshot_2025-07-22_205621_ngocdh.png",
            highlights: [
                "Scored resumes with 95% accuracy.",
                "Provided section-wise feedback improving quality scores by 40%.",
                "Delivered a fully working production-ready tool.",
            ],
            links: { demo: "https://ai-resume-analyser-neon.vercel.app/", github: "https://github.com/shubhamshk/Ai_Resume_Analyser" },
        },
        {
            title: "VIDEO STREAMING PLATFORM",
            tech: ["React.js", "TypeScript", "TMDB API", "Redux", "Tailwind", "MongoDB"],
            description: "Created a Movie/Series streaming platform using React and TMDB API.",
            image: "https://res.cloudinary.com/dkwxxfewv/image/upload/v1767710828/Screenshot_2025-08-01_222024_xuboyz.png",
            highlights: [
                "Established RESTful API integration with caching strategies.",
                "Reduced data retrieval latency by 120ms.",
            ],
            links: { demo: "https://movie-app-noflix.vercel.app/", github: "https://github.com/shubhamshk/Movie-app-Noflix" },
        },
    ],
    education: {
        school: "Amity University",
        degree: "Bachelor of Technology, CSE",
        year: "Expected 2026",
        cgpa: "7.16",
    },
    certifications: [
        "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        "Coding Blocks DSA with Java",
    ],
};
