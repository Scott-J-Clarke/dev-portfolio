import { useState } from 'react';

import Navigation from './Navigation';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import ResumePage from '../pages/ResumePage'

function Header() {
    const [currentPage, handlePageChange] = useState();

    const renderPage = () => {
        switch(currentPage) {
            case 'About':
                return <AboutPage />;
            case 'Portfolio':
                return <PortfolioPage />;
            case 'Contact':
                return <ContactPage />;
            case 'Resume':
                return <ResumePage />;
            default:
                return <AboutPage />;
        }
    };
    
    return (
        <div className='p-5'>
            <nav className='flex flex-col items-center md:flex-row md:justify-between'>
                <div className='navbar-brand mb-4 md:mb-0 md:mr-4'>
                    <span className='text-4xl p-5'>Scott Clarke</span>
                </div>
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            </nav>
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    )
}

export default Header;
