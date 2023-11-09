function Navigation(props) {
  
  const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <div className='pages text-center'>
      <ul className='nav nav-pages'>
        {pages.map((page) => (
          <li
            className={
              props.currentPage === page ? 'nav-item is-active' : 'nav-item' // Is there a non-Bootstrap way to do this?
            }
            key={page}
            >
              <a
                href={'#' + page.toLowerCase()}
                onClick={() => props.handlePageChange(page)}
                className={
                  props.currentPage === page ? 'nav-link active' : 'nav-link' // Is there a non-Bootstrap way to do this?
                }
              >
                {page}
              </a>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;


// const { currentPage, handlePageChange } = props;

  // Changed '#about' to '/about'
  // Changed '#portfolio' to '/portfolio'
  // Why do '#about' and '#portfolio' exist as hrefs but '/about' and '/portfolio' do not exist?

  // return (
  //   <nav>
  //     <ul className='flex flex-row space-x-8 place-content-center'>
  //       <li className='nav-item'>
  //         <a
  //           href='/about'
  //           onClick={() => handlePageChange('About Me')}
      
  //           className={currentPage === 'About Me'}
  //           >
  //             About Me
  //           </a>
  //       </li>

  //       <li className='nav-item'>
  //         <a
  //           href='/portfolio'
  //           onClick={() => handlePageChange('Portfolio')}

  //           className={currentPage === 'Portfolio'}
  //           >
  //             Portfolio
  //         </a>
  //       </li>

  //       <li className='nav-item'>
  //         <a
  //           href='#contact'
  //           onClick={() => handlePageChange('Contact')}

  //           className={currentPage === 'Contact'}
  //           >
  //             Contact
  //           </a>
  //       </li>

  //       <li className='nav-item'>
  //         <a
  //           href='#resume'
  //           onClick={() => handlePageChange('Resume')}

  //           className={currentPage === 'Resume'}
  //           >
  //             Resume
  //           </a>
  //       </li>

  //     </ul>
  //   </nav>
  // )
