import { Route, Routes } from 'react-router-dom'
// import { useLocalStorage } from 'react-use'
import { Layout } from '../components'
import { useUserStore } from '../store/userStore'
import { AboutUs, Categories, CocinaPage, CreatePost, DeportesPage, DetailPost, HomePage, LoginPage, OtrosCategoriesPage, PaternidadPage, SaludPage, SignUp, TecnologiaPage, ViajesPage } from './../pages'
import { ProtectedRoutes } from './../utils/ProtectedRoutes'

export const RoutesConfig = () => {
  const { logged } = useUserStore()
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create-user' element={<SignUp />} />
        <Route path='/detail-post/:id' element={<DetailPost />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category-viajes' element={<ViajesPage />} />
        <Route path='/category-salud' element={<SaludPage />} />
        <Route path='/category-cocina' element={<CocinaPage />} />
        <Route path='/category-tecnologia' element={<TecnologiaPage />} />
        <Route path='/category-paternidad' element={<PaternidadPage />} />
        <Route path='/category-deportes' element={<DeportesPage />} />
        <Route path='/category-otros' element={<OtrosCategoriesPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<HomePage />} />

        <Route element={<ProtectedRoutes canActivate={logged} />}>
          <Route path='/create-post' element={<CreatePost />} />
        </Route>
      </Route>
    </Routes>
  )
}
