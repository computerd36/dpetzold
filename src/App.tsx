import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts'

// Pages
import { PageLanding } from "./routes/PageLanding";
import { PageImprint } from "./routes/PageImprint";
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
        <Route path="/imprint" element={<PageImprint />} />
      </Routes>
    </main>
  )
}