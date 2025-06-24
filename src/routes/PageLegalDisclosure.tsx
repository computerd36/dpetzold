import { Spacer } from "@nextui-org/react";


export function PageLegalDisclosure() {
    return (
        <div className="w-full min-h-dvh bg-slate-50 dark:bg-neutral-900 px-8 md:px-[10%] xl:px-[25%] 2xl:px-[30%] pt-12 md:pt-24 relative">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-neutral-200 flex">Legal Disclosure</h1>
            <Spacer y={8} />
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 text-left font-semibold">
                Information according to § 5 DDG
            </p>
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 text-left">
                Deniz Ludwig Petzold<br />
                Hasenheide 94<br />
                10967 Berlin
            </p>
            <Spacer y={4} />
            <h2 className="text-2xl md:text-3xl text-zinc-800 font-medium dark:text-zinc-200 text-left">Contact</h2>
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 text-left">
                Telefon: 015678 402840<br />
                E-Mail: <a
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    href="mailto:mail@dpetzold.dev"
                    
                >mail@dpetzold.dev</a><br />
            </p>
        </div>
    )
}