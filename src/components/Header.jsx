import { useState } from 'react';

import Navigation from './Navigation';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import ResumePage from '../pages/ResumePage'

function Header() {
    const [currentPage, handlePageChange] = useState('About Me'); // Does this set <AboutPage /> as landing spot?

    const renderPage = () => {
        switch(currentPage) {
            case "About Me":
                return <AboutPage />;
            case "Portfolio":
                return <PortfolioPage />;
            case "Contact":
                return <ContactPage />;
            case "Resume":
                return <ResumePage />;
        }
    };
    
    return (
        <div className='p-5'>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <a
                        className='navbar-item'
                        rel='noreferrer'
                        target='_blank'
                        href='https://github.com/Scott-J-Clarke?tab=repositories'
                    >
                        <span className='text-4xl'>Scott Clarke</span>
                    </a>
                </div>
            </nav>
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    )
}

export default Header;
