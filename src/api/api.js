import { ShowErrorAlert } from '../utils/ShowErrorAlert'
import { ShowSuccessAlert } from '../utils/ShowSuccessAlert'
import { ENDPOINTS } from './apiEndpoints'

// obtener todos los posts ordenados por fecha de creacion
export const fetchAllPosts = async (limit, offset) => {
  try {
    const response = await fetch(ENDPOINTS.getAllPostsByDateAndPage, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        limit,
        offset
      })
    })

    if (!response.ok) {
      throw new Error('Hubo un problema con la conexión a la base de datos')
    }

    const responseData = await response.json()
    return responseData.data
  } catch (error) {
    console.error('Hubo un error con la llamada al servidor', error)
    throw error
  }
}

// obtener todas las categorias
export const fetchAllCategories = async () => {
  try {
    const response = await fetch(ENDPOINTS.getAllCategories)
    if (!response.ok) {
      throw new Error('Error al obtener las categorías')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al cargar las categorías:', error)
  }
}

// crear nuevo post
export const fetchCreatePost = async (formData) => {
  console.log(formData)
  try {
    const response = fetch(ENDPOINTS.createPost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData
    })

    if (!response.ok) {
      throw new Error('Hubo un problema con la petición: ' + response.status)
    }

    const result = (await response).json()

    ShowSuccessAlert(
      'Tu post se ha creado correctamente. Seras redirigido a la página principal.'
    )
    console.log('Respuesta del servidor:', result)
  } catch (error) {
    console.error('Error al enviar la petición:', error)
    ShowErrorAlert('Error al enviar la petición: ' + error.message)
  }
}

// obtener todos los posts de la categoría Viajes, usando paginación
export const fetchGetAllPostByViajesCategory = async (filters) => {
  try {
    const response = await fetch(ENDPOINTS.getAllPostByViajesCategory, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    })
  } catch (error) {}
}
