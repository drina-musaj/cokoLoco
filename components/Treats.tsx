'use client';
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setTreat } from '@/app/redux/treatslice2';

import { RootState } from '@/app/redux/store';
import snack from '@/public/snack.svg'
import wetFood from '@/public/wet-food.svg'
import HardFood from '@/public/hard-food.svg'


 const treats = [
  {
    name: 'Treats',
    image: snack,
  },
  {
    name: 'Wet food',
    image: wetFood,
  },
  {
    name: 'Dry Food :/',
    image: HardFood,
  },
];

const Treats = () => {

  const dispatch = useDispatch();
    const selectedTreat = useSelector((state: RootState) => state.treat.value);

 
  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-[#0D0A2E] min-h-screen text-white justify-around">
      <h2 className="font-[playfair] italic font-normal text-6xl left-10">...Food?</h2>
      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 w-full max-w-6xl">
            {treats.map((treat) => (
              <button
                key={treat.name}
                onClick={() => dispatch(setTreat(treat.name))}
                className={`bg-[#2F226B]/30 backdrop-blur-sm rounded-lg p-4 transition-transform hover:scale-105 flex flex-col items-center ${selectedTreat === treat.name ? 'ring-4 ring-pink-400' : ''}`}
              >
                <h2 className="text-xl text-white italic mb-4">{treat.name}</h2>
                <div className="w-48 h-80 relative">
                  <Image src={treat.image} alt={treat.name} fill className="object-contain" />
                </div>
              </button>
            ))}
      </div>
    
    </div>
  );
};

export default Treats;
