import React, { useEffect, useState } from 'react'
import './NewsLetter.css'
import NewsLetterForm from '../newsLetterForm/NewsLetterForm'
import imageDesktop from '/images/illustration-sign-up-desktop.svg'; 
import imageMobile from '/images/illustration-sign-up-mobile.svg'; 


const NewsLetter = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(screenWidth)

  return (
    <main className="signup__container">
      <div className="main__content">
        <h1 className="content__title">Stay updated!</h1>
        <p className="content__text">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="content__list">
          <li className="list__item">Product discovery and building what matters</li>
          <li className="list__item">Measuring to ensure updates are a success</li>
          <li className="list__item">And much more!</li>
        </ul>
        <NewsLetterForm />
      </div>
      <img className='img__newsletter' src={screenWidth <= 750 ? imageMobile : imageDesktop} alt="image__newsletter" />
    </main>
  )
}

export default NewsLetter