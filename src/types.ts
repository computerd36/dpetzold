export type WorkExperience = {
    title: string;
    description: string;
    date: string;
    avatarUrl?: string;
}

export type Education = {
    title: string;
    description: string;
    date: string;
    avatarUrl?: string;
}

export type Project = {
    title: string;
    duration: string;
    description: string;
    technologies: string[];
    thumbnailUrl: string;
    links?: {
        url: string;
        title: string;
        type: 'github' | 'website' | 'app' | 'firefox';
    }[];
}