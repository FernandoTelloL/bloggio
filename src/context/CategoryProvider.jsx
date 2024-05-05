/* eslint-disable react/prop-types */
// Este archivo trabaja de la mano con TiposControlContext

import { useState } from "react"
import { CategoryContext } from './CategoryContext';

export const CategoryProvider = ({ children }) => {

  const [category, setCategory] = useState([])

  return (
    <CategoryContext.Provider value={ { category, setCategory } }>
      { children }
    </CategoryContext.Provider>
  )
}
