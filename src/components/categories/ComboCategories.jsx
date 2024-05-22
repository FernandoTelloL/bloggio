import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'
import { usePostStore } from '../../store/postStore'

export const ComboCategories = () => {
  const { setCategory } = usePostStore()
  const animatedComponents = makeAnimated()
  const basepath = 'https://bloggio-api.onrender.com'

  // Estado para almacenar las opciones de categorías
  const [categories, setCategories] = useState([])

  // Función para cargar las opciones de categorías de manera asíncrona
  const loadOptions = async (inputValue, callback) => {
    // Llamamos al callback con las opciones obtenidas de las categorías
    callback(categories)
  }

  // Función para formatear las categorías
  const formatCategories = (data) => {
    return data.map(category => ({
      value: category.categoryId,
      label: category.categoryName
    }))
  }

  // Llamada a la API para obtener las categorías y guardarlas en el estado
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${basepath}/api/v1/Category/GetAll`)
        if (!response.ok) {
          throw new Error('Error al obtener las categorías')
        }
        const data = await response.json()
        const formattedCategories = formatCategories(data)
        setCategories(formattedCategories)
      } catch (error) {
        console.error('Error al cargar las categorías:', error)
      }
    }

    fetchCategories()
  }, [])

  // Manejador de cambio de selección
  const handleCategoryChange = (selectedOption) => {
    // Aquí puedes manejar la selección de categoría como desees
    console.log('Categoría seleccionada:', selectedOption.value)
    setCategory(selectedOption.value)
  }

  return (
    <AsyncSelect
      components={animatedComponents}
      loadOptions={loadOptions}
      onChange={handleCategoryChange}
      defaultOptions={categories}
      placeholder='Selecciona una categoría'
    />
  )
}
