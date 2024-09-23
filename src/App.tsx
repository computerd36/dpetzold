import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts'

// Pages
import { PageLanding } from "./routes/PageLanding";
import { PageLegalDisclosure } from "./routes/PageLegalDisclosure";

// Components
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { DockComponent } from "./components/DockComponent";



export default function App() {

  const [storedDarkMode] = useLocalStorage('darkMode', false);


  return (
    <main className={storedDarkMode ? 'dark' : 'light'}>
      <DarkModeSwitch />
      <DockComponent />

      <Routes>
        <Route path="/" element={<PageLanding />} />
        <Route path="/legal" element={<PageLegalDisclosure />} />
      </Routes>
    </main>
  )
}