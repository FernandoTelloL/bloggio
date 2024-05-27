import 'animate.css'
import Swal from 'sweetalert2'

export const ShowErrorAlert = (text) => {
  return (
    Swal.fire({
      title: 'Error!',
      text,
      icon: 'error',
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
