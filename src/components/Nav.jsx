{/* Want to add styling on line below so that nav tabs will highlight on hover. */}
{/* How can I do this using Tailwind? */}
{/* Is there a way to add a ternary operator and Tailwind styling on line 19, 30, 41? */}

import { useEffect } from 'react';

function Nav(props) {
  
  const { currentTab, handleTabChange } = props;

  return (
    <nav>
      <ul className='flex flex-row'>
        <li className='nav-item'>
          <a
            href='#about'
            onClick={() => handleTabChange('About Me')}
      
            className={currentTab === 'About Me'}
            >
              About Me
            </a>
        </li>

        <li className='nav-item'>
          <a
            href='#portfolio'
            onClick={() => handleTabChange('Portfolio')}

            className={currentTab === 'Portfolio'}
            >
              Portfolio
          </a>
        </li>

        <li className='nav-item'>
          <a
            href='#contact'
            onClick={() => handleTabChange('Contact')}

            className={currentTab === 'Contact'}
            >
              Contact
            </a>
        </li>

        <li className='nav-item'>
          <a
            href='#resume'
            onClick={() => handleTabChange('Resume')}

            className={currentTab === 'Resume'}
            >
              Resume
            </a>
        </li>

      </ul>
    </nav>
  )
}

export default Nav;
