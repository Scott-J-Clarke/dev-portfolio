import { useState } from 'react';

// Commented out while working on setting up and nesting files:
import Header from './components/Header';
import Nav from './components/Nav';
// import Project from './components/Project';
// import Footer from './components/Footer';

// Commented out while working on setting up '<Header />' and '<Nav />' files:
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage'

function App() {
  const [currentTab, handleTabChange] = useState('About Me');

  const renderTab = () => {
    if (currentTab === 'About Me') {
      return <AboutPage />;
    }
    if (currentTab === 'Portfolio') {
      return <PortfolioPage />;
    }
    // if (currentTab === 'Contact') {
    //   return <ContactPage />;
    // }
    // if (currentTab === 'Resume') {
    //   return <ResumePage />;
    // }
    return <AboutPage />;
  };

  return (
    <>
    <h1>Scott Clarke | {currentTab}</h1>
    <Header
      currentTab={currentTab}
      handleTabChange={handleTabChange}
    ></Header>
    <main>{renderTab()}</main>
    {/* <Footer></Footer> */}
    </>
  );
}

export default App;

// If not setting routes from 'App.jsx', then this import seems unnecessary:

// import { Route, Routes } from "react-router-dom"

// return (
    // <>
      {/* <Header /> */}
      {/* <Nav /> */}
      {/* <AboutPage /> */}
      {/* <PortfolioPage /> */}
      {/* <Project /> */}
      {/* <ContactPage /> */}
      {/* <ResumePage /> */}
      {/* <Footer /> */}
      
      {/* Comment out "<Routes>" while trying to use a different format: */}
      {/* <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path='resume' element={<ResumePage />} />
      </Routes> */}
    // </>
  // )
// }
