import React from 'react'
import { Link } from 'react-router-dom'

const AdmissionSuccessful = () => {
  return (
    <>
      <h1 className='main_title'>Your Admission is Successful!</h1>
      <Link to="/">
        <p className='text_center'>
          Go back home
        </p>
      </Link>
    </>
  )
}

export default AdmissionSuccessful