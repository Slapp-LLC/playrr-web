import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center ">
      <div className="mt-10">
        <Image
          src={'/images/Hero.png'}
          alt="hero image"
          width={700}
          height={700}
        />
      </div>
      <div className="flex-col w-10/12 text-center sm:text-left  sm:w-4/12">
        <h1 className="font-ibm text-white text-5xl">PLAYRR</h1>
        <h3 className="text-lime font-bebas text-3xl my-2">
          No te quedes sin jugar!
        </h3>
        <p className="text-gray-custom text-xl font-roboto font-light">
          Bienvenido a Playrr, donde siempre tendrás una oportunidad para jugar.
          ¿Te falta gente para el fútbol? ¿Buscas un equipo para baloncesto o
          voleibol? ¡Playrr al rescate! Encuentra partidos, únete a la acción,
          mantén viva la emoción. Con Playrr, nunca te quedarás sin jugar.
        </p>
      </div>
    </section>
  );
};

export default Hero;
