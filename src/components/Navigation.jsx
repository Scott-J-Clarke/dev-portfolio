/* eslint-disable react/prop-types */
function Navigation(props) {
  
  const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <div> 
      <ul className='flex flex-col flex-wrap md:flex-row justify-between text-2xl w-full'>
        {pages.map((page) => (
          <li
            className={`nav-item ${props.currentPage === page ? 'is-active' : ''} px-4 mr-4`}
            key={page}
            >
              <a
                href={'#' + page.toLowerCase()}
                onClick={() => props.handlePageChange(page)}
                className={`nav-link ${props.currentPage === page ? 'active' : ''} text-gray-500 hover:text-gray-700 focus:text-gray-800`}
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
