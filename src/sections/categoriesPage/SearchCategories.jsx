import { useState } from 'react'

export const SearchCategories = () => {
  const categories = [
    { id: 1, name: 'Tecnología' },
    { id: 2, name: 'Viajes' },
    { id: 3, name: 'Salud' },
    { id: 4, name: 'Deportes' },
    { id: 5, name: 'Moda' },
    { id: 6, name: 'Cocina' }
  ]

  const [showFiltersModal, setShowFiltersModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para manejar la búsqueda de categorías
  }

  const handleOpenFiltersModal = () => {
    setShowFiltersModal(true)
  }

  const handleCloseFiltersModal = () => {
    setShowFiltersModal(false)
  }

  return (
    <div className='flex flex-col w-full mb-6'>
      <section className='w-full mb-4'>
        <form onSubmit={handleSubmit} className='w-full flex justify-between'>
          <input
            type='text'
            name='searchCategories'
            id='searchCategories'
            placeholder='Ingresa categoría o título'
            className='p-2 w-full rounded-lg  text-sm ring-1 ring-slate-400'
          />
          <button className='bg-amber-400 rounded-lg ml-2 py-2 px-4 font-bold' onClick={handleOpenFiltersModal}>
            Filtros
          </button>
          <button className='bg-amber-400 rounded-lg ml-2 py-2 px-4 font-bold'>
            Buscar
          </button>
        </form>
      </section>

      {/* Ventana modal de filtros */}
      {showFiltersModal && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-30'>
          <div className='bg-white p-4 rounded-lg w-96'>
            <h2 className='text-lg font-semibold mb-4'>Filtros</h2>
            <div className='space-y-2'>
              {categories.map((category) => (
                <div key={category.id} className='flex items-center'>
                  <input type='checkbox' id={`category-${category.id}`} className='form-checkbox h-5 w-5 text-blue-500' />
                  <label htmlFor={`category-${category.id}`} className='ml-2'>{category.name}</label>
                </div>
              ))}
            </div>
            <button
              className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
              onClick={handleCloseFiltersModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
