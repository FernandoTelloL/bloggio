import { useForm } from 'react-hook-form'
import { Headers } from './../components'
import { useUserStore } from '../store/userStore'
import { useNavigate } from 'react-router-dom'
import { ShowErrorAlert } from '../utils/ShowErrorAlert'

export const LoginPage = () => {
  const basepath = 'https://bloggio-blo-latest.onrender.com'
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const { setUser, setLogged } = useUserStore()

  const onSubmit = async ({ username, password }) => {
    const dataFormated = { userNickname: username, userPassword: password }
    try {
      const response = await fetch(`${basepath}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataFormated)
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        // Guardar datos del usuario en local storage
        localStorage.setItem('user', JSON.stringify(data))
        setUser(data.username, data.password)
        setLogged()
        navigate('/', { replace: true })
      } else {
        ShowErrorAlert('Credenciales incorrectas. Por favor, intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error en la solicitud de login:', error)
      ShowErrorAlert('Ocurrió un error. Por favor, intenta de nuevo más tarde.')
    }
  }

  return (
    <>
      <Headers />

      <div className='flex flex-col justify-between mt-20'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-2xl font-extrabold mb-4 md:text-3xl md:mb-8'>
            Login
          </h1>
          <form
            className='w-[90%] md:w-2/3 lg:w-1/3'
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Input nombre de usuario */}
            <div className='mb-6'>
              <label className='block text-sm'>Nombre usuario</label>
              <input
                type='text'
                name='username'
                {...register('username', {
                  required: true,
                  maxLength: 15
                })}
                className='w-full border rounded-lg px-3 py-2 ring-1 ring-slate-400 text-sm ring:border-secondary focus:outline-secondary transition-all'
              />
              {errors.username?.type === 'required' && (
                <p className='text-sm text-red-700 font-bold transition-all'>
                  El campo Nombre de usuario es requerido.
                </p>
              )}
              {errors.username?.type === 'maxLength' && (
                <p className='text-sm text-red-700 font-bold transition-all'>
                  El campo Nombre de usuario debe tener máximo 15 caracteres.
                </p>
              )}
            </div>

            {/* Input contraseña */}
            <div className='mb-6'>
              <label className='block text-sm'>Contraseña</label>
              <input
                type='password'
                {...register('password', {
                  required: true,
                  minLength: 6
                })}
                className='w-full border rounded-lg px-3 py-2 ring-1 ring-slate-400 text-sm ring:border-secondary focus:outline-secondary transition-all'
              />
              {errors.password?.type === 'minLength' && (
                <p className='text-sm text-red-700 font-bold transition-all'>
                  La contraseña debe tener mínimo 6 caracteres.
                </p>
              )}
            </div>
            <input
              type='submit'
              value='Enviar'
              className='bg-slate-950 text-slate-300 px-5 py-2 rounded-lg block w-[100%] shadow-2xl md:mt-10 md:py-4'
            />
          </form>
        </div>
      </div>
    </>
  )
}
