import { useState, useEffect, useContext } from 'react';
import { CardCategory, Pagination } from "../../components";
import img1 from "../../assets/images/img2.webp";
import img2 from "../../assets/images/img1.webp";
import { CategoryContext } from "../../context/CategoryContext";

export const AllPostsCategories = () => {

  const { setCategory, category } = useContext(CategoryContext)

  // useEffect para obtener los TIPOS de control del API al cargar la pagina
  useEffect(() => {

    const fetchData = async () => {

      try {
        // aqui la direccion del back con el ARRAY DE OBJETOS CON LOS TIPOS DE CONTROL
        const response = await fetch(`http://localhost:7878/Category/GetAll`);

        if (!response.ok) {
          throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`);
        }

        const category = await response.json();
        setCategory(category)

      } catch (error) {
        console.error('Error al hacer el fetch:', error);
      }

    }

    fetchData()
  }, [setCategory])


  return (
    <section>
      <h2 className="text-3xl font-bold">All Posts</h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          category.map(cat => (
            <CardCategory key={cat.categoryId} img={img1} imgHeight="h-50" title={cat.categoryDesc} />
          ))
        }
      </div>
      <section>
        <Pagination />
      </section>
    </section>
  );
};
