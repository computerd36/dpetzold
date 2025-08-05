import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts'
import { Analytics } from '@vercel/analytics/react';

// Pages
import { PageLanding } from "./routes/PageLanding";
import { PageLegalDisclosure } from "./routes/PageLegalDisclosure";

// Components
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { DockComponent } from "./components/DockComponent";



export default function App() {

  const [storedDarkMode] = useLocalStorage('darkMode', true);

  return (
    <main className={`${storedDarkMode ? 'dark' : 'light'}`}>
      <DarkModeSwitch />
      <DockComponent />
      <Analytics />

      <Routes>
        <Route path="/" element={<PageLanding />} />
        <Route path="/legal" element={<PageLegalDisclosure />} />
      </Routes>
    </main>
  )
}