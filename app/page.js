"use client";
import { useState, useEffect } from "react";

export default function Home() {

  const [adviceId, setAdviceId] = useState('');
  const [adviceText, setAdviceText] = useState('');

  useEffect(() => {
    getRandomAdvice();
  })

  function getRandomAdvice() {
    /*Using Fetch API to make a GET request to the API*/
    fetch('https://api.adviceslip.com/advice')

    /*Handling the response from the API request
    (The arrow function passed as an argument to "then";
     takes a single argument "response" and calls the json method on it to parse the response body as JSON data.
    */
      .then(response => response.json())

      /*Handling the parsed JSON data returned by the previous then method. The arrow function passed as an argument to then takes a single argument (data) and updates the state of the component with the advice ID and text. */
      .then(data => {
        setAdviceId(`Advice #${data.slip.id}`);
        setAdviceText(`"${data.slip.advice}"`);
      })
      .catch(error => console.error(error));
  }

  return (
    <main className="flex flex-col min-h-[100vh] items-center justify-center">

      <section className='advice-card relative w-[80%] h-96 
      flex flex-col justify-center items-center
      mx-auto bg-DarkGrayishBlue  rounded-md lg:w-[60%]'>

        <h1 className='uppercase text-NeonGreen text-center font-medium my-2'>{adviceId}</h1>
        <p className='text-LightCyan text-lg text-center px-2 font-bold 
        flex justify-center items-center w-full h-48 lg:text-2xl'>

          <span>{adviceText}</span>

        </p>

        <div className='w-[80%]'>
          <img src="/pattern-divider-mobile.svg" alt="divider" className="block w-full sm:hidden" />
          <img src="/pattern-divider-desktop.svg" alt="divider" className="hidden w-full sm:block" />
        </div>

        <div className='dice-button w-[48px] h-[48px] flex justify-center items-center 
        absolute top-[94%]
        mx-auto bg-NeonGreen rounded-full hover:cursor-pointer hover:shadow-dice-btn-shadow'
          onClick={getRandomAdvice}>

          <img src="/icon-dice.svg" alt="dice" />

        </div>
      </section>



      <div className='text-center text-xs  text-gray-500' >
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://tusharthe.vercel.app/" target="_blank">Tushar Biswas</a>.
      </div>



    </main>
  )
}
