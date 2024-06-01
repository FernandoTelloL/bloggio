const API_BASE_URL = 'https://bloggio-api.onrender.com'

export const ENDPOINTS = {
  // obtener todos los posts desde el más reciente usando paginación
  getAllPostsByDateAndPage: `${API_BASE_URL}/Post/GetAllPostByDateAndPage`,

  // obtener todas las categorias
  getAllCategories: `${API_BASE_URL}/api/v1/Category/GetAll`,

  // crear un nuevo post
  createPost: `${API_BASE_URL}/Post/Create`,

  // obtener todos los posts de la categoría Viajes, usando paginación
  getAllPostByViajesCategory: `${API_BASE_URL}/Post/find-all-by-filters`,

  // obtener todos los posts de la categoría Salud, usando paginación
  getAllPostBySaludCategory: `${API_BASE_URL}/Post/find-all-by-filters`,

  // obtener todos los posts de la categoría Cocina, usando paginacion
  getAllPostByCocinaCategory: `${API_BASE_URL}/Post/find-all-by-filters`,

  // obtener todos los posts de la categoría Tecnología, usando paginación
  getAllPostByTecnologiaCategory: `${API_BASE_URL}/Post/find-all-by-filters`,

  // obtener todos los posts de la categoria Paternidad, usando paginación
  getAllPostByPaternidadCategory: `${API_BASE_URL}/Post/find-all-by-filters`,

  // obtener todos los posts de la categoria Deportes, usando paginación
  getAllPostByDeportesCategory: `${API_BASE_URL}/Post/find-all-by-filters`

}
