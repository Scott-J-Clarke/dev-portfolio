import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route exact path="/" element={ <AboutPage/> } />
        <Route path="portfolio" element={ <PortfolioPage/> } />
        <Route path="contact" element={ <ContactPage/> } />
      </Routes>
      </>
  )
}

export default App;
