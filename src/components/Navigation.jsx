function Navigation(props) {
  
  const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <div className='pages'> 
      <ul className='nav nav-pages flex flex-row space-x-12'> {/* Nav links should be spread (not in one central line). */}
        {pages.map((page) => (
          <li
            className={`nav-item ${props.currentPage === page ? 'is-active' : ''}`}
            key={page}
            >
              <a
                href={'#' + page.toLowerCase()}
                onClick={() => props.handlePageChange(page)}
                className={`nav-link ${props.currentPage === page ? 'active' : ''}`}
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


// function Navigation(props) {
  
//   const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];

//   return (
//     <div className='pages text-center'> {/* Nav links should be spread (not in one central line). */}
//       <ul className='nav nav-pages'>
//         {pages.map((page) => (
//           <li
//             className={
//               props.currentPage === page ? 'nav-item is-active' : 'nav-item' // Is there a non-Bootstrap way to do this?
//             }
//             key={page}
//             >
//               <a
//                 href={'#' + page.toLowerCase()}
//                 onClick={() => props.handlePageChange(page)}
//                 className={
//                   props.currentPage === page ? 'nav-link active' : 'nav-link' // Is there a non-Bootstrap way to do this?
//                 }
//               >
//                 {page}
//               </a>
//             </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Navigation;