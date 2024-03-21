import React, { useRef, useState } from 'react'
import './NewsLetterForm.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEmail } from '../../redux/emailSlice'


const NewsLetterForm = () => {

  const emailRef = useRef(null)
  const [emailError, setEmailError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const email = emailRef.current.value

    if(!validateEmail(email)) {
      setEmailError('Valid email required')
    } else {
      dispatch(setEmail(email))
      navigate('/mensaje-enviado')
    }

  }

  const validateEmail = (email) => {
    // TODO: Expresión regular para validar el formato de un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form className="formulario__news" noValidate onSubmit={handleSubmit}>
      <div className='form__label'>
        <label className='form__email' htmlFor="email">Email Address</label>
        {emailError && <span className='validacion__error'>{emailError}</span>}
      </div>
      <input 
        className={`input__email ${emailError ? 'error' : ''}`}
        type="email" 
        name="email" id="email" 
        placeholder='email@company.com' 
        ref={emailRef} 
        />
      <button className='submit__button' >Subscribe to monthly newsletter</button>
    </form>
  )
}

export default NewsLetterForm