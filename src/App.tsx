import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import CoverLetterRoute from "routes/cover/CoverLetterRoute"
import ResumeRoute from "routes/resume/ResumeRoute"
import RootRoute from "routes/root/RootRoute"

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRoute />} />
        <Route path="/cover" element={<CoverLetterRoute />} />
        <Route path="/resume" element={<ResumeRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
