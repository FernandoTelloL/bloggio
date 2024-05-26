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

export const fetchCreatePost = async ({ formData }) => {
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
    // onShowSuccessAlert()
    console.log('Respuesta del servidor:', result)
  } catch (error) {
    console.error('Error al enviar la petición:', error)
    // onShowErrorAlert('Error al enviar la petición: ' + error.message)
  }
}
