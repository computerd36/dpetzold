import { Project, Skill } from "../types";

//Screenshot imports 
import egenusScreenshot from "../assets/project-screenshots/egenus-screenshot.webp";
import rootrackScreenshot from "../assets/project-screenshots/rootrack-screenshot.webp";
import dbfahrtrichtungScreenshot from "../assets/project-screenshots/dbfahrtrichtung-screenshot.webp";
import andreagottiScreenshot from "../assets/project-screenshots/andreagotti-screenshot.webp";
import blattwerkScreenshot from "../assets/project-screenshots/blattwerk-screenshot.webp";

//Logo imports
import capgeminiLogo from "../assets/logos/capgemini-logo.webp";
import catenamediaLogo from "../assets/logos/catenamedia-logo.webp";
import oszimtLogo from "../assets/logos/oszimt-logo.webp";
import bhtLogo from "../assets/logos/bht-logo.webp";

export const workExperience = [
    {
        title: "RLE Mobility",
        description: "Test Driver (Working Student)",
        date: "Nov 24 - Jan 25"
    },
    {
        title: "Capgemini",
        description: "Software Engineering (Working Student)",
        date: "Apr 24 - Nov 24",
        avatar: capgeminiLogo
    },
    {
        title: "Catena Media",
        description: "Technical Operations (Internship)",
        date: "Nov 19 - Feb 20",
        avatar: catenamediaLogo
    }
];

export const education = [
    {
        title: "Berlin University of Applied Sciences and Technology",
        description: "Media Informatics (B.Sc.)",
        date: "2021 - now",
        avatar: bhtLogo
    },
    {
        title: "OSZ IMT",
        description: "Information Technology Assistant",
        date: "2016 - 2020",
        avatar: oszimtLogo
    }
];

export const skills: Skill[] = [
    {
        title: "TypeScript",
        type: "language"
    },
    {
        title: "Java",
        type: "language"
    },
    {
        title: "Python",
        type: "language"
    },
    {
        title: "React",
        type: "framework"
    },
    {
        title: "Jest",
        type: "framework"
    },
    {
        title: "Vitest",
        type: "framework"
    },
    {
        title: "Angular",
        type: "framework"
    },
    {
        title: "Node",
        type: "framework"
    },
    {
        title: "Express",
        type: "framework"
    },
    {
        title: "Spring Boot",
        type: "framework"
    },
    {
        title: "MongoDB",
        type: "technology"
    },
    {
        title: "PostgreSQL",
        type: "technology"
    },
    {
        title: "Tailwind",
        type: "framework"
    },
    {
        title: "Framer Motion",
        type: "framework"
    },
    {
        title: "Docker",
        type: "technology"
    },
    {
        title: "Mapbox",
        type: "technology"
    },
    {
        title: "Firefox Addon Development",
        type: "technology"
    }
];

export const projects: Project[] = [
    {
        title: "egenus",
        duration: "Apr 2024 - now",
        description: "Designed and developed a social platform to promote the digital participation of people in need. Our application helps people in difficult life situations to access support services more easily and enables social institutions to better present and manage their services.",
        technologies: ["Typescript", "React", "Tailwind", "NextUI", "Node", "Express", "MongoDB", "Mapbox"],
        thumbnail: egenusScreenshot,
        links: [
            {
                url: "https://egenus.org",
                title: "Website",
                type: "website"
            },
            {
                url: "https://egenus.app",
                title: "Webapp",
                type: "app"
            }
        ]
    },
    {
        title: "Rootrack",
        duration: "Jun 2024 - Nov 2024",
        description: "Designed and developed a web app that allows users of the gambling site Roobet to get accurate statistics and insights into their gambling behavior, their losses and winnings as well as special incidents as the platform itself does not offer such functionality.",
        technologies: ["Typescript", "React", "Recharts", "Tailwind", "Framer Motion"],
        thumbnail: rootrackScreenshot,
        links: [
            {
                url: "https://rootrack.me",
                title: "Webapp",
                type: "app"
            },
            {
                url: "https://github.com/computerd36/rootrack",
                title: "Github",
                type: "github"
            }
        ]
    },
    {
        title: "Blattwerk e.V.",
        duration: "Oct 2024 - Jan 2025",
        description: "Conceptualized, designed, and developed a full-stack website for Berlin-based cannabis social club Blattwerk e.V., integrating a user-friendly sign-up flow, a custom backend, and intricate Framer Motion animations for a dynamic, engaging experience.",
        technologies: ["Typescript", "React", "Tailwind", "Framer Motion", "Node", "Express", "Airtable"],
        thumbnail: blattwerkScreenshot,
        links: [
            {
                url: "https://blattwerkev.de",
                title: "Website",
                type: "website"
            }
        ]
    },
    {
        title: "DB Fahrtrichtung",
        duration: "Jan 2024 - Feb 2024",
        description: "DB Fahrtrichtung is a Firefox addon that extends the seat reservation process on bahn.de, the website of the national railway company of Germany, with a direct link to the carriage routing on fernbahn.de, allowing users to easily determine the direction of travel of their train.",
        technologies: ["Javascript", "Firefox Addon Development"],
        thumbnail: dbfahrtrichtungScreenshot,
        links: [
            {
                url: "https://addons.mozilla.org/de/firefox/addon/db-fahrtrichtung/",
                title: "Firefox Addon",
                type: "firefox"
            },
            {
                url: "https://github.com/computerd36/DB-Fahrtrichtung",
                title: "Github",
                type: "github"
            }
        ]
    },
    {
        title: "Andrea Gotti",
        duration: "Oct 2023 - Jan 2024",
        description: "Designed and developed a portfolio website for the artist Andrea Gotti, on which he can dynamically upload and present his paintings and publications. Especially optimized for touch devices. No UI framework used, just pure CSS.",
        technologies: ["Typescript", "React"],
        thumbnail: andreagottiScreenshot,
        links: [
            {
                url: "https://andreagotti.art",
                title: "Website",
                type: "website"
            }
        ]
    },
];