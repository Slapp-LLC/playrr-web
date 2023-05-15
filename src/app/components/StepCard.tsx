import React from 'react';

interface StepCardProps {
  title: string;
  text: string;
}

const StepCard: React.FC<StepCardProps> = ({ title, text }) => {
  return (
    <div className="my-2 text-center sm:text-left sm:w-3/12">
      <p className="text-white font-medium text-xl font-roboto">{title}</p>
      <p className="text-gray-custom text-lg ">{text}</p>
    </div>
  );
};

export default StepCard;
