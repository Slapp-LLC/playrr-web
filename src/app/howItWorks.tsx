import Image from 'next/image';
import React from 'react';
import StepCard from './components/StepCard';

const HowItWorks = () => {
  const steps = [
    {
      title: '1. Regístrate',
      text: 'Crea tu cuenta de Playrr con solo unos clics. Es rápido, fácil y, lo mejor de todo, ¡es gratis!',
    },
    {
      title: '2. Busca Partidos',
      text: 'Navega por nuestra lista de partidos abiertos en tu área y encuentra el que mejor se ajuste a tu horario y nivel de habilidad.',
    },
    {
      title: '3. Únete',
      text: '¿Encontraste el partido perfecto? Únete con solo un clic y prepárate para la acción.',
    },
    {
      title: '4. Juega',
      text: '¡Llegó la hora! Dirígete al lugar del partido, conoce a tus nuevos compañeros de equipo y ¡a jugar!',
    },
    {
      title: '5. Conecta',
      text: 'Después del partido, conecta con tus compañeros de equipo y rivales. Haz nuevos amigos y planea futuros partidos.',
    },
    {
      title: '6. Repite',
      text: '¿Te lo pasaste bien? ¡Genial! Sigue buscando, uniendo y jugando partidos con Playrr. Nunca más te quedarás sin jugar.',
    },
  ];
  return (
    <section className="flex py-20 justify-between ">
      <div className="w-11/12 flex-col items-center mx-auto">
        <h4 className="font-bebas text-lime text-3xl mx-auto text-center">
          Como funciona?
        </h4>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6  justify-center mt-10">
          {steps.map((step, index) => (
            <StepCard key={index} title={step.title} text={step.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
