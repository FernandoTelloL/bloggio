import Swal from 'sweetalert2'

export const ShowConfirmationDeleteAlert = async (urlDelete, onDelete, setDropdownVisible) => {
  const result = await Swal.fire({
    title: '¿Estás seguro que deseas eliminar?',
    text: 'No podrás revertir esto.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo!'
  })

  if (result.isConfirmed) {
    try {
      await fetch(urlDelete, {
        method: 'DELETE'
      })

      setDropdownVisible(false) // Ocultar el menú después de la confirmación
      Swal.fire(
        'Eliminado!',
        'El post ha sido eliminado.',
        'success'
      )
      onDelete() // Notificar al componente padre que se eliminó el post
    } catch (error) {
      console.error('Error eliminando el componente:', error)
      Swal.fire(
        'Error!',
        'Hubo un problema en la eliminación.',
        'error'
      )
    }
  }
}
