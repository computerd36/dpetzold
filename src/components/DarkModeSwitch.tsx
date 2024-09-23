import { useLocalStorage } from 'usehooks-ts'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export function DarkModeSwitch() {

    const [storedDarkMode, setStoredDarkMode] = useLocalStorage('darkMode', false);

    const toggle = () => {
        setStoredDarkMode(!storedDarkMode);
    };

    return (
        <button
            className="w-10 h-10 fixed top-5 right-5 z-20 flex items-center justify-center rounded-3xl border bg-slate-50 dark:bg-neutral-900"
            onClick={toggle}
            aria-label={storedDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {
                storedDarkMode ? (
                    <MdLightMode className='text-slate-50 hover:scale-110 transition-all' />
                ) : (
                    <MdDarkMode className='text-neutral-900 hover:scale-110 transition-all' />
                )
            }
        </button>
    );
}
