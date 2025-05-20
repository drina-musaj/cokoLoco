'use client';

import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setMood } from '@/app/redux/moodSlice';
import { RootState } from '@/app/redux/store';

import cokoSleepy from '@/public/coko-sleepy.png';
import cokoConfused from '@/public/coko-confused.png';
import cokoInterrupted from '@/public/coko-interrupted.png';

const moods = [
  {
    name: 'Sleepy',
    image: cokoSleepy,
  },
  {
    name: 'Confused',
    image: cokoConfused,
  },
  {
    name: 'Interrupted',
    image: cokoInterrupted,
  },
];

const Card = () => {
  const dispatch = useDispatch();
  const selectedMood = useSelector((state: RootState) => state.mood.value);

  return (
    <div className="bg-[#0D0A2E] min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-center font-semibold text-4xl md:text-6xl text-white">
        Choose Coko's mood
        <span className="font-[playfair] italic font-normal md:text-6xl pl-6">for the day</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 w-full max-w-6xl">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => dispatch(setMood(mood.name))}
            className={`bg-gray-900 rounded-lg p-4 transition-transform hover:scale-105 flex flex-col items-center ${selectedMood === mood.name ? 'ring-4 ring-pink-400' : ''}`}
          >
            <h2 className="text-xl text-white italic mb-4">{mood.name}</h2>
            <div className="w-48 h-48 relative">
              <Image src={mood.image} alt={mood.name} fill className="object-contain" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
