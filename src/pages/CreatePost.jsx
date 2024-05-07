import { useForm } from "react-hook-form"
import { useState } from "react"
import { TextEditor, Headers } from "../components"
import Swal from "sweetalert2"
import parse from "html-react-parser"
import "./CreatePost.css"
import "animate.css"
import { useNavigate } from "react-router-dom"

export const CreatePost = () => {
  const navigate = useNavigate() // Obtenemos la función de navegación del contexto

  const [mainContent, setMainContent] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onShowSuccessAlert = () => {
    Swal.fire({
      title: "¡Éxito!",
      text: "Tu post se ha creado correctamente. Seras redirigido a la página principal.",
      icon: "success",
      showClass: {
        popup: "animate__animated animate__fadeInDown"
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp"
      },
      customClass: {
        popup: "my-custom-alert",
        content: "my-custom-alert-content",
        confirmButton: "my-custom-confirm-button"
      },
      confirmButtonText: "OK"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/") // Navegamos a la página principal
      }
    })
  }

  const onShowErrorAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "Es obligatorio contenido en el cuerpo del post.",
      icon: "error",
      showClass: {
        popup: "animate__animated animate__fadeInDown"
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp"
      },
      customClass: {
        popup: "my-custom-alert",
        content: "my-custom-alert-content",
        confirmButton: "my-custom-confirm-button"
      },
      confirmButtonText: "OK"
    })
  }

  const onSubmit = (data) => {
    if (mainContent === "") {
      onShowErrorAlert()
      return
    }

    data.mainContent = mainContent
    onShowSuccessAlert()

    // console.log("data con info: ", data)
  }

  return (
    <>
      <Headers />
      <h1 className="text-2xl text-center font-extrabold mb-6">CREAR POST</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
        <div className="mb-6">
          <label htmlFor="title" className="block mb-1">
            Título Principal:
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm tracking-wider focus:shadow-md focus:outline-none"
          />
          {errors.title && (
            <span className="text-red-500">
              El título principal es requerido
            </span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="subtitle" className="block mb-1">
            Subtítulo:
          </label>
          <input
            type="text"
            id="subtitle"
            {...register("subtitle", { required: true })}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm tracking-wider focus:shadow-md focus:outline-none"
          />
          {errors.subtitle && (
            <span className="text-red-500">El subtitulo es requerido</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block mb-1">
            Descripción Corta:
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm tracking-wider focus:shadow-md focus:outline-none"
          ></textarea>
          {errors.description && (
            <span className="text-red-500">
              La descripción corta es requerida
            </span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="mainImage" className="block mb-1">
            Imagen Principal:
          </label>
          <input
            type="file"
            id="mainImage"
            {...register("mainImage", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          {errors.mainImage && (
            <span className="text-red-500">
              La imagen principal es requerida
            </span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="body" className="block mb-1">
            Cuerpo del Post:
          </label>
          <TextEditor
            mainContent={mainContent}
            setMainContent={setMainContent}
          />
        </div>

        <div className="mb-10">
          <label className="block mb-1">Tags:</label>
          <div className="flex justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("tags")}
                value="Tecnología"
                className="mr-2"
              />
              Tecnología
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("tags")}
                value="Viajes"
                className="mr-2"
              />
              Viajes
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("tags")}
                value="Comida"
                className="mr-2"
              />
              Comida
            </label>
          </div>
        </div>

        <div className="mb-6 flex flex-col">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 leading-8"
          >
            Publicar
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mb-4 leading-8"
          >
            Guardar en Borrador
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg leading-8"
          >
            Descartar
          </button>
        </div>
      </form>
      <ul>
        {/* {parse(`
    <li class="bar">Item 1</li>
    <li>Item 2</li>
  `)} */}
      </ul>
    </>
  )
}
