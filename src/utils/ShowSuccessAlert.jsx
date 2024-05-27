import 'animate.css'
import Swal from 'sweetalert2'

export const ShowSuccessAlert = (text) => {
  return (
    Swal.fire({
      title: '¡Éxito!',
      text,
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'my-custom-alert',
        content: 'my-custom-alert-content',
        confirmButton: 'my-custom-confirm-button'
      },
      confirmButtonText: 'OK'
    })
  )
}
