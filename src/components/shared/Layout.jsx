import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { Headers } from '../header/Headers'

export const Layout = () => {
  return (
    <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen '>
      <Headers />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
