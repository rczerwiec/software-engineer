import { toast } from "react-toastify"

interface IToast {
  type:  "success" | "error"
  message: string
}

function displayToast({ type, message }: IToast) {
  switch (type) {
    case "success":
      return toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      })

    case "error":
      return toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      })

  }
}

export default displayToast