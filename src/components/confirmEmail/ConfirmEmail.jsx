import React from 'react'
import './ConfirmEmail.css'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/emailSlice'
import { useNavigate } from 'react-router-dom'

const ConfirmEmail = () => {

  const email = useSelector(selectEmail)
  const navigate = useNavigate()

  const handleReturn = () => {
    navigate('/')
  }

  return (
    <main className="confirm__container">
      <img className='success__icon' src="./images/icon-success.svg" alt="success_icon" />
      <h1 className="success__title">Thanks for subscribing!</h1>
      <p className="success__text">A confirmation email has been sent to <span>{email}</span>.
        Please open it and click the button inside to confirm your subscription.</p>
      <button onClick={handleReturn} className='success__button'>Dismiss message</button>
    </main>
  )
}

export default ConfirmEmail