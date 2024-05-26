import 'animate.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const MessageSucces = () => {
  const navigate = useNavigate()
  const onShowSuccessAlert = () => {
    Swal.fire({
      title: '¡Éxito!',
      text: 'Tu post se ha creado correctamente. Seras redirigido a la página principal.',
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
  }

  return onShowSuccessAlert
}
