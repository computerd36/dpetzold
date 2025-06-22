export type WorkExperience = {
    title: string;
    description: string;
    date: string;
    avatar?: string;
}

export type Education = {
    title: string;
    description: string;
    date: string;
    avatar?: string;
}

export type Skill = {
    title: string;
    type: "language" | "framework" | "technology" | "service";
}


export type Project = {
    title: string;
    duration: string;
    description: string;
    technologies: string[];
    thumbnail: string;
    thumbnailAlt: string;
    links?: {
        url: string;
        title: string;
        type: 'github' | 'website' | 'app' | 'firefox';
    }[];
}