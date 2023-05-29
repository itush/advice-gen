"use client";
import { useState, useEffect } from "react";
export default function Home() {

  const [adviceId, setAdviceId] = useState('');
  const [adviceText, setAdviceText] = useState('');

  useEffect(() => {
    getRandomAdvice();
  })

  function getRandomAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setAdviceId(`Advice #${data.slip.id}`);
        setAdviceText(data.slip.advice);
      })
      .catch(error => console.error(error));
  }

  return (
    <main>
      <section className='advice-card relative w-[80%] min-h-[192px] 
    flex flex-col justify-center items-center
    mx-auto bg-GrayishBlue my-16 rounded-md'>

        <h1 className='text-NeonGreen text-center'>{adviceId}</h1>
        <p className='text-white text-center my-8'>{adviceText}</p>

        <div className="flexitems-center">
          <hr className="w-full" />
          <picture className="w-full">
          <source media="(min-width:768px)" srcSet='/pattern-divider-desktop.svg' type='image/webp' />
          <source media="(min-width:0px)" srcSet='/pattern-divider-mobile.svg' type='image/webp' />
          <img src='/pattern-divider-mobile.svg' alt='divider'></img>
        </picture>
          <hr className="w-full" />
        </div>

        <div className='dice-button w-[48px] h-[48px] flex justify-center items-center 
        absolute top-[90%]
        mx-auto bg-NeonGreen rounded-full hover:cursor-pointer hover:shadow-dice-btn-shadow'

          onClick={getRandomAdvice}>
          <img src="/icon-dice.svg" alt="dice" />

        </div>
      </section>



      <div >
        Challenge by <a href="tusharthe.vercel.app" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Tushar Biswas</a>.
      </div>

    </main>
  )
}
