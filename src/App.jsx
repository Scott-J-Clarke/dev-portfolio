import { Route, Routes } from "react-router-dom"

import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path='resume' element={<ResumePage />} />
      </Routes>
    </>
  )
}

export default App;
