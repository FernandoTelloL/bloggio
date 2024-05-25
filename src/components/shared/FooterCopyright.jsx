import {
  RiTwitterFill,
  RiInstagramFill,
  RiFacebookCircleFill,
  RiGithubFill
} from 'react-icons/ri'

export const FooterCopyright = () => {
  return (
    <section className='mt-10 md:flex md:justify-between md:items-center lg:mb-7 '>
      <div className='text-center mb-6 md:mb-0'>
        2024 - <span className='font-bold'>TrustCode Company</span>. Todos los
        derechos reservados
      </div>
      <ul className='flex justify-evenly text-xl md:gap-4 md:text-2xl'>
        <li>
          <a href='#'>
            <RiTwitterFill />
          </a>
        </li>
        <li>
          <a href='#'>
            <RiInstagramFill />
          </a>
        </li>
        <li>
          <a href='#'>
            <RiFacebookCircleFill />
          </a>
        </li>
        <li>
          <a href='#'>
            <RiGithubFill />
          </a>
        </li>
      </ul>
    </section>
  )
}
