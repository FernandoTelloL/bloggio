import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

export const Pagination = () => {
  return (
    <>
      <ul className='pagination flex justify-between items-center text-sm text-slate-500'>
        <li className='page-item border border-slate-500 rounded-full p-2'>
          <a className='page-link md:flex items-center gap-2' href='#'>
            <RiArrowLeftLine />
            <span className='hidden md:block px-2'> Anterior </span>
          </a>
        </li>
        <div className='flex gap-2 md:gap-4 lg:gap-6 items-center'>
          <li className='page-item bg-slate-900 text-slate-200 rounded-full w-4 h-4 flex justify-center items-center p-3 '>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <li className='page-item '>
            <a className='page-link' href='#'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              3
            </a>
          </li>
          <li>...</li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              8
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              9
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              10
            </a>
          </li>
        </div>
        <li className='page-item border border-slate-500 rounded-full p-2'>
          <a className='page-link md:flex items-center gap-2' href='#'>
            <span className='hidden md:block px-2'> Siguiente </span>
            <RiArrowRightLine />
          </a>
        </li>
      </ul>
    </>
  )
}
