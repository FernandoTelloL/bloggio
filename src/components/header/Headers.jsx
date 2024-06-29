/* eslint-disable react/prop-types */

import { Logo } from './Logo'
import { Navbar } from './Navbar'

export const Headers = () => {
  return (
    <header className='flex justify-between items-center mb-24  '>
      <Logo />
      <Navbar />
    </header>
  )
}
