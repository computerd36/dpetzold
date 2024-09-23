import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts'

// Pages
import { PageLanding } from "./routes/PageLanding";
import { PageImpress } from "./routes/PageImpress";



export default function App() {

  const [storedDarkMode] = useLocalStorage('darkMode', false);


  return (
    <main className={storedDarkMode ? 'dark' : 'light'}>
      <Routes>
        <Route path="/" element={<PageLanding />} />
        <Route path="/impress" element={<PageImpress />} />
      </Routes>
    </main>
  )
}