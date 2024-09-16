import { Route, Routes } from "react-router-dom";
import { PageLanding } from "./routes/PageLanding";

export default function App() {



  return (
    <Routes>
      <Route path="/" element={<PageLanding />} />
    </Routes>
  )
}