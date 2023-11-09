import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default App;

// import React from "react"

// import { useState } from 'react';

// import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage'

// import sunrise from './public/sunrise.jpg';

// import Header from './components/Header';
// import Footer from './components/Footer';

// const [currentPage, handlePageChange] = useState('About Me'); // Have 'About Me' in 'useState' so that's where webpage wills start.

//   const renderPage = () => {
    
//     if (currentPage === 'About Me') {
//       return <AboutPage />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <PortfolioPage />;
//     }
//     if (currentPage === 'Contact') {
//       return <ContactPage />;
//     }
//     if (currentPage === 'Resume') {
//       return <ResumePage />;
//     }
//   };

//   return (
//     <>
//       {/* <div className='flex p-8'> */}
//       <div className='container'>
//         <img src={sunrise} alt='sunrise' className='w-full h-auto' />
//         <div className='absolute top-0 left-0 font-bold text-white p-4 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
//           Scott Clarke
//         </div>
//         {/* <h1 className='font-bold text-4xl'>Scott Clarke</h1> */}
//         <Header
//           currentPage={currentPage}
//           handlePageChange={handlePageChange}
//         ></Header>
//       </div>
//       {/* </div> */}
//       <main>{renderPage()}</main>
//       <Footer></Footer>
//     </>
//   );

// console.log(currentTab); 
    // When user clicks on 'About Me' and 'Portfolio', 'currentTab' has no value.
    // However, when user clicks on 'Contact' and 'Resume, 'currentTab' registers those values.
    // Also, when user clicks on 'Portfolio', it takes the user to the 'About Me' page.

    {/* <Header></Header>
      <Footer></Footer> */}