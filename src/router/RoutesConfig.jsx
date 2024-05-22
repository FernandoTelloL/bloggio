import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { useLocalStorage } from 'react-use'
import { HomePage } from './../pages/HomePage'
import { LoginPage } from './../pages/LoginPage'
import { SignUp } from './../pages/SignUp'
import { DetailPost } from './../pages/DetailPost'
import { ProtectedRoutes } from './../utils/ProtectedRoutes'
import { CreatePost } from './../pages/CreatePost'
import { Categories } from './../pages/Categories'
import { AboutUs } from './../pages/AboutUs'

export const RoutesConfig = () => {
  const [user] = useLocalStorage('user')
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <HomePage />
          </div>
        }
      />

      <Route
        path='/home'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <HomePage />
          </div>
        }
      />

      <Route
        path='/login'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <LoginPage />
          </div>
        }
      />

      <Route
        path='/create-user'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <SignUp />
          </div>
        }
      />

      <Route
        path='/detail-post'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <DetailPost />
          </div>
        }
      />

      <Route element={<ProtectedRoutes canActivate={user?.userNickName !== undefined} />}>
        <Route
          path='/create-post'
          element={
            <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
              <CreatePost />
            </div>
          }
        />
      </Route>

      <Route
        path='/categories'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <Categories />
          </div>
        }
      />

      <Route
        path='/categories'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <Categories />
          </div>
        }
      />

      <Route
        path='/about'
        element={
          <div className='font-nunito p-6 md:max-w-[1200px] md:w-[90%] lg:w-[80%] md:m-auto text-gray-800 min-h-screen'>
            <AboutUs />
          </div>
        }
      />
    </Routes>
  )
}
