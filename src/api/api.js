import { ShowErrorAlert } from '../utils/ShowErrorAlert'
import { ShowSuccessAlert } from '../utils/ShowSuccessAlert'
import { ENDPOINTS } from './apiEndpoints'

// fetch para login
export const fetchLogin = async (formData) => {
  try {
    const response = await fetch(ENDPOINTS.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Hubo un problema con la petición: ' + response.status)
    }

    const result = await response.json()

    return result
  } catch (error) {
    ShowErrorAlert('Error al autenticarr usuario: ' + error.message)
  }
}

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
  try {
    const response = await fetch(ENDPOINTS.createPost, {
      method: 'POST',
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

    if (!response.ok) {
      throw new Error('Hubo un problema con la conexión a la base de datos')
    }

    const responseData = await response.json()

    console.log(responseData.data)
    return responseData.data
  } catch (error) {
    console.error('Error al cargar los posts de la categoría Viajes:', error)
  }
}

// obtener todos los posts de la categoría Salud, usando paginación
export const fetchGetAllPostBySaludCategory = async (filters) => {
  try {
    const response = await fetch(ENDPOINTS.getAllPostBySaludCategory, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    })

    if (!response.ok) {
      throw new Error('Hubo un problema con la conexión a la base de datos')
    }

    const responseData = await response.json()

    console.log(responseData.data)
    return responseData.data
  } catch (error) {
    console.error('Error al cargar los posts de la categoría Salud:', error)
  }
}

// obtener todos los posts de lacategoria Cocina, usando paginacion
export const fetchGetAllPostByCocinaCategory = async (filters) => {
  try {
    const response = await fetch(ENDPOINTS.getAllPostByCocinaCategory, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    })

    if (!response.ok) {
      throw new Error('Hubo un problema con la conexión a la base de datos')
    }

    const responseData = await response.json()

    console.log(responseData.data)
    return responseData.data
  } catch (error) {
    console.error('Error al cargar los posts de la categoría Cocina:', error)
  }
}

// obtener todos los posts de la categoría Paternidad, usando paginación
export const fetchGetAllPostByPaternidadCategory = async (filters) => {
  try {
    const response = await fetch(ENDPOINTS.getAllPostByPaternidadCategory, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    })

    if (!response.ok) {
      throw new Error('Hubo un problema con la conexión a la base de datos')
    }

    const responseData = await response.json()

    console.log(responseData.data)
    return responseData.data
  } catch (error) {
    console.error('Error al cargar los posts de la categoría Paternidad:', error)
  }
}

// obtener todos los posts de la categoría Deportes, usando paginación
export const fetchGetAllPostByDeportesCategory = async (filters) => {
  try {
    const response = await fetch(ENDPOINTS.getAllPostByDeportesCategory, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    })

    if (!response.ok) {
      throw new Error('Hubo un problema con la conexión a la base de datos')
    }

    const responseData = await response.json()

    console.log(responseData.data)
    return responseData.data
  } catch (error) {
    console.error('Error al cargar los posts de la categoría Deportes:', error)
  }
}
