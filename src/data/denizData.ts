import { Project } from "../types";

export const workExperience = [
    {
        title: "Capgemini",
        description: "Software Engineering (Working Student)",
        date: "Apr 24 - now",
        avatarUrl: "https://assets.kununu.com/media/prod/profiles/logos/091a080e-a944-4625-9aa1-de90080f51fa_1_66b0be734ecca.gif"
    },
    {
        title: "Catena Media",
        description: "Technical Operations (Internship)",
        date: "Nov 19 - Feb 20",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdw2cHt6NjvQ04kSVerWas7JxTAKpdsw9viQ&s"
    }
];

export const education = [
    {
        title: "Berlin University of Applied Sciences and Technology",
        description: "Media Informatics (B.Sc.)",
        date: "2021 - now",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx85lfs4LGrFTEHnDv76OuKV6J6yc0qYIIZg&s"
    },
    {
        title: "OSZ IMT",
        description: "Information Technology Assistant",
        date: "2016 - 2020",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHo-AWsxBP0CxyWxWA2Sg6zvbLb-XWESp9ZA&s"
    }
];

export const skills = [
    "TypeScript",
    "Java",
    "React",
    "Angular",
    "Node",
    "Express",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "Tailwind",
    "Docker",
    "Mapbox",
    "Firefox Addon Development",
];

export const projects: Project[] = [
    {
        title: "egenus",
        duration: "Apr 2024 - now",
        description: "Designed and developed a social platform to promote the digital participation of people in need. Our application helps people in difficult life situations to access support services more easily and enables social institutions to better present and manage their services.",
        technologies: ["Typescript", "React", "Tailwind", "NextUI", "Node", "Express", "MongoDB", "Mapbox"],
        thumbnailUrl: "./egenus-screenshot.png",
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
        duration: "Jun 2024 - Sep 2024",
        description: "Designed and developed a web app that allows users of the gambling site Roobet to get accurate statistics and insights into their gambling behavior, their losses and winnings as well as special incidents as the platform itself does not offer such functionality.",
        technologies: ["Typescript", "React", "Recharts", "Tailwind", "Flowbite"],
        thumbnailUrl: "./rootrack-screenshot.png",
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
        title: "DB Fahrtrichtung",
        duration: "Jan 2024 - Feb 2024",
        description: "DB Fahrtrichtung is a Firefox addon that extends the seat reservation process on bahn.de, the website of the national railway company of Germany, with a direct link to the carriage routing on fernbahn.de, allowing users to easily determine the direction of travel of their train.",
        technologies: ["Javascript", "Firefox Addon Development"],
        thumbnailUrl: "./dbfahrtrichtung-screenshot.png",
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
        thumbnailUrl: "./andreagotti-screenshot.png",
        links: [
            {
                url: "https://andreagotti.art",
                title: "Website",
                type: "website"
            }
        ]
    },
];