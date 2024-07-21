// import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

// export const Pagination = () => {
//   return (
//     <>
//       <ul className='pagination flex justify-between items-center text-sm text-slate-500'>
//         <li className='page-item border border-slate-500 rounded-full p-2'>
//           <a className='page-link md:flex items-center gap-2' href='#'>
//             <RiArrowLeftLine />
//             <span className='hidden md:block px-2'> Anterior </span>
//           </a>
//         </li>
//         <div className='flex gap-2 md:gap-4 lg:gap-6 items-center'>
//           <li className='page-item bg-slate-900 text-slate-200 rounded-full w-4 h-4 flex justify-center items-center p-3 '>
//             <a className='page-link' href='#'>
//               1
//             </a>
//           </li>
//           <li className='page-item '>
//             <a className='page-link' href='#'>
//               2
//             </a>
//           </li>
//           <li className='page-item'>
//             <a className='page-link' href='#'>
//               3
//             </a>
//           </li>
//           <li>...</li>
//           <li className='page-item'>
//             <a className='page-link' href='#'>
//               8
//             </a>
//           </li>
//           <li className='page-item'>
//             <a className='page-link' href='#'>
//               9
//             </a>
//           </li>
//           <li className='page-item'>
//             <a className='page-link' href='#'>
//               10
//             </a>
//           </li>
//         </div>
//         <li className='page-item border border-slate-500 rounded-full p-2'>
//           <a className='page-link md:flex items-center gap-2' href='#'>
//             <span className='hidden md:block px-2'> Siguiente </span>
//             <RiArrowRightLine />
//           </a>
//         </li>
//       </ul>
//     </>
//   )
// }

import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = (event) => {
    event.preventDefault() // Prevenir el comportamiento por defecto del enlace
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNext = (event) => {
    event.preventDefault() // Prevenir el comportamiento por defecto del enlace
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  const handlePageClick = (page, event) => {
    event.preventDefault() // Prevenir el comportamiento por defecto del enlace
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item rounded-full ${i === currentPage ? 'bg-slate-900 text-slate-200' : 'bg-slate-100 text-slate-500'}`}
        >
          <button
            className='page-link'
            onClick={(event) => handlePageClick(i, event)}
            disabled={i === currentPage} // Deshabilitar el botón de la página actual
          >
            {i}
          </button>
        </li>
      )
    }
    return pageNumbers
  }

  return (
    <ul className='pagination flex justify-between items-center text-sm'>
      <li className='page-item border border-slate-500 rounded-full p-2'>
        <a className='page-link md:flex items-center gap-2' href='#' onClick={handlePrevious}>
          <RiArrowLeftLine />
          <span className='hidden md:block px-2'> Anterior </span>
        </a>
      </li>
      <div className='flex gap-2 md:gap-4 lg:gap-6 items-center'>
        {renderPageNumbers()}
      </div>
      <li className='page-item border border-slate-500 rounded-full p-2'>
        <a className='page-link md:flex items-center gap-2' href='#' onClick={handleNext}>
          <span className='hidden md:block px-2'> Siguiente </span>
          <RiArrowRightLine />
        </a>
      </li>
    </ul>
  )
}
