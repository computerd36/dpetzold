import { motion } from "framer-motion";
import { FloatingDock } from "../ui/floating-dock";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const links = [
    {
        title: "LinkedIn",
        icon: (
            <IconBrandLinkedin className="h-full w-full text-slate-900 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/dpetzold",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-slate-900 dark:text-neutral-300" />
        ),
        href: "https://github.com/computerd36",
    },
    {
        title: "Email",
        icon: (
            <IconMail className="h-full w-full text-slate-900 dark:text-neutral-300" />
        ),
        href: "mailto:deniz.petzold@gmail.com",
    },
];


export function DockComponent() {
    return (
        <div className="fixed bottom-4 z-50 left-1/2 transform -translate-x-1/2">
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 120 }}
            >
                <FloatingDock
                    items={links}
                />
            </motion.div>
        </div>
    );
}
