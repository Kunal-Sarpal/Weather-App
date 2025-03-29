import React from 'react'

const ErrorMsg = ({msg}) => {
  return (
    <div>
        <div className=' absolute  top-2  right-4 w-fit px-4 rounded py-2 border-2 text-red-500 font-normal border-red-500 bg-red-200'>
            {msg}
            
        </div>
    </div>
  )
}

export default ErrorMsg