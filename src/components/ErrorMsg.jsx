import React from 'react'
import { toast } from 'react-toastify'

const ErrorMsg = ({msg}) => {
  return (
    <div>
            {toast.error(msg)}
    </div>
  )
}

export default ErrorMsg