import { useLocalStorage } from 'usehooks-ts'
import { MdDarkMode } from "react-icons/md";

export function DarkModeSwitch() {

    const [storedDarkMode, setStoredDarkMode] = useLocalStorage('darkMode', false);

    const toggle = () => {
        setStoredDarkMode(!storedDarkMode);
    };

    return (
        <button
            className="w-10 h-10 fixed top-5 right-5 flex items-center justify-center rounded-3xl border bg-slate-50 dark:bg-neutral-900"
            onClick={toggle}
        >
            <MdDarkMode className="text-neutral-900 dark:text-slate-50" />
        </button>
    );
}
