import { Spacer } from "@nextui-org/react";

//dynamic data
import { workExperience, education, skills, projects } from "../data/denizData";
import { ListCard } from "../components/ListCard";
import { SkillChip } from "../components/SkillChip";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export function PageLanding() {

    return (
        <div className="w-full min-h-dvh bg-slate-50 dark:bg-neutral-900 px-8 md:px-[10%] xl:px-[25%] 2xl:px-[30%] pt-12 md:pt-24 relative">

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, duration: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-neutral-200 flex gap-4">
                    <span>Hey, I'm Deniz!</span>
                    <motion.div
                        animate={{ rotate: [0, 15, -15, 15, -15, 0], scale: [1, 1.1, 1.1, 1.1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 2, repeatDelay: 2, type: "tween" }}
                    >👋</motion.div>
                </h1>
                <p className="text-md md:text-xl text-slate-800 dark:text-neutral-300 mt-4">
                    Software Engineer from Berlin-Kreuzberg who loves to develop modern web applications that help and advance people.
                </p>
            </motion.div>

            <Spacer y={8} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                <h2 className="text-xl font-bold text-slate-900 dark:text-neutral-300 mb-1">About</h2>
                <p className="text-sm text-slate-600 dark:text-neutral-400">
                    I am studying Media Computer Science at Berlin University of Applied Sciences (BHT) and have been working intensively with web development since 2018. I am a big fan of open-source software and love working on projects that make the world a better place. You can find details of my experience, skills and projects below.
                </p>
            </motion.div>

            <Spacer y={8} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <h2 className="text-xl font-bold text-slate-900 dark:text-neutral-300 mb-1">Work Experience</h2>
                {workExperience.map((item, index) => (
                    <ListCard key={index + item.title} title={item.title} description={item.description} date={item.date} avatarUrl={item.avatar} />
                ))}
            </motion.div>

            <Spacer y={8} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <h2 className="text-xl font-bold text-slate-900 dark:text-neutral-300 mb-1">Education</h2>
                {education.map((item, index) => (
                    <ListCard key={index + item.title} title={item.title} description={item.description} date={item.date} avatarUrl={item.avatar} />
                ))}
            </motion.div>

            <Spacer y={8} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
            >
                <h2 className="text-xl font-bold text-slate-900 dark:text-neutral-300 mb-1">Skills</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex w-full gap-1 flex-wrap mb-1">
                        {skills.filter(skill => skill.type === "language").map((skill, index) => (
                            <SkillChip key={index + skill.title} title={skill.title} />
                        ))}
                    </div>
                    <div className="flex w-full gap-1 flex-wrap mb-1">
                        {skills.filter(skill => skill.type === "framework").map((skill, index) => (
                            <SkillChip key={index + skill.title} title={skill.title} />
                        ))}
                    </div>
                    <div className="flex w-full gap-1 flex-wrap mb-1">
                        {skills.filter(skill => skill.type === "technology").map((skill, index) => (
                            <SkillChip key={index + skill.title} title={skill.title} />
                        ))}
                    </div>
                    <div className="flex w-full gap-1 flex-wrap mb-1">
                        {skills.filter(skill => skill.type === "service").map((skill, index) => (
                            <SkillChip key={index + skill.title} title={skill.title} />
                        ))}
                    </div>
                </div>
            </motion.div>

            <Spacer y={8} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
            >
                <h2 className="text-4xl font-bold text-slate-900 dark:text-neutral-300 text-center mb-1">My favorite projects</h2>
                <p className="text-xl text-slate-600 dark:text-neutral-400 text-center">Here are the projects that I am proud of and that I particularly enjoyed developing.</p>
            </motion.div>
            <Spacer y={8} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}

            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index + project.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                            className="flexgrow"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <Spacer y={14} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <h2 className="text-4xl font-bold text-slate-900 dark:text-neutral-300 text-center mb-1">Contact</h2>
                <p className="text-xl text-slate-600 dark:text-neutral-400 text-center">
                    Would you like to talk to me? Just <a href="mailto:deniz.petzold@gmail.com" target="_blank" className="text-blue-600 dark:text-blue-400 font-semibold">send me an email</a> or <a href="https://www.linkedin.com/in/dpetzold/" target="_blank" className="text-blue-600 dark:text-blue-400 font-semibold">contact me on LinkedIn</a> and I will get back to you as soon as possible.
                </p>
            </motion.div>

            <Spacer y={20} />

            <p className="text-slate-600 text-sm dark:text-neutral-400 pb-2 flex items-center justify-between"><span>© Deniz Petzold {new Date().getFullYear()}</span><Link to={'/legal'} aria-label="Link to legal notice" className="text-blue-600 dark:text-blue-400 font-semibold">Legal</Link></p>
            <Spacer y={10} />
        </div >
    );
}
