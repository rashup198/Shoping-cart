import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='h-screen flex flex-col gap-y-4 justify-center items-center'>
    <div class="custom-loader"></div>
    <h1 className='text-xl'>Loading</h1>
    </div>
  )
}

export default Spinner
