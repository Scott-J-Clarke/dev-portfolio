import { useEffect } from 'react';

function Nav(props) {
  
  const {
    currentTab,
    handleTabChange
  } = props;

  return (
    <nav>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a
            href='#about'
            onClick={() => handleTabChange('About Me')}
            className={currentTab === 'About Me' ? 'text-blue-500 hover:text-blue-800': ''}
            >
              About Me
            </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;

// Import 'Link' is needed for former linking structure to work:
// import { Link } from 'react-router-dom';

// Comment out links that worked to try a different structure:
// export default function Nav() {
//     return (
//         <nav>
//         <ul>
//           <li>
//             <Link to="/">About Me</Link>
//           </li>
//           <li>
//             <Link to="/portfolio">Portfolio</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/resume">Resume</Link>
//           </li>
//         </ul>
//       </nav> 
//     )
// }
