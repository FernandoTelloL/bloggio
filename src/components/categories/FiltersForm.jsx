import { useState } from 'react'

/* eslint-disable react/prop-types */
export const FiltersForm = ({ onSubmit }) => {
  const [filters, setFilters] = useState({
    categoryName: '',
    date_end: '',
    date_start: '',
    limit: 10,
    offset: 1,
    postTitle: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(filters)
  }

  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <div>
        <label>Category Name:</label>
        <input type='text' name='categoryName' value={filters.categoryName} onChange={handleChange} />
      </div>
      <div>
        <label>Date Start:</label>
        <input type='date' name='date_start' value={filters.date_start} onChange={handleChange} />
      </div>
      <div>
        <label>Date End:</label>
        <input type='date' name='date_end' value={filters.date_end} onChange={handleChange} />
      </div>
      <div>
        <label>Post Title:</label>
        <input type='text' name='postTitle' value={filters.postTitle} onChange={handleChange} />
      </div>
      <button type='submit'>Apply Filters</button>
    </form>
  )
}
