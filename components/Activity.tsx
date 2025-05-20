'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setActivity } from '@/app/redux/activitySlice'; 
import { RootState } from '@/app/redux/store';

import playToy from '@/public/play-toy.svg';
import scratch from '@/public/scratch-post.svg';
import nap from '@/public/nap.svg';
import sleepAnimation from '@/public/coko-sleepy.svg'

const activities = [
  {
    name: 'Play with toy',
    image: playToy,
    description: 'Coko loves chasing things!'
  },
  {
    name: 'Scratching post',
    image: scratch,
    description: 'Time to sharpen those claws'
  },
  {
    name: 'Take a nap',
    image: nap,
    description: 'Coko needs some rest'
  },
];

const Activity = () => {
  const dispatch = useDispatch();
  const selectedActivity = useSelector((state: RootState) => state.activity?.value || '');
  const selectedMood = useSelector((state: RootState) => state.mood.value);
  const [animation, setAnimation] = useState('');
  
  const handleActivitySelect = (activity: string) => {
    dispatch(setActivity(activity));
    
    if (activity === 'Play with toy') {
      setAnimation('bounce');
    } else if (activity === 'Scratching post') {
      setAnimation('scratch');
    } else {
      setAnimation('sleep');
    }
    
    setTimeout(() => setAnimation(''), 3000);
  };

  return (
    <div className="bg-[#0D0A2E] min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-center font-semibold text-4xl md:text-6xl text-white">
        What should Coko
        <span className="font-[playfair] italic font-normal md:text-6xl pl-6">do today?</span>
      </h1>
      
      {selectedMood && (
        <div className="mb-8 mt-4 bg-[#2F226B]/30 backdrop-blur-sm px-6 py-2 rounded-full">
          <p className="text-white">Coko is feeling: ✨ <span className="font-bold">{selectedMood}</span> ✨</p>
        </div>
      )}
      
    
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 w-full max-w-6xl">
        {activities.map((activity) => (
          <button
            key={activity.name}
            onClick={() => handleActivitySelect(activity.name)}
            className={`bg-gray-900 rounded-lg p-4 transition-transform hover:scale-105 flex flex-col items-center ${
              selectedActivity === activity.name ? 'ring-4 ring-pink-400' : ''
            }`}
          >
            <h2 className="text-xl text-white italic mb-2">{activity.name}</h2>
            <div className="w-48 h-48 relative">
              <Image src={activity.image} alt={activity.name} fill className="object-contain" />
            </div>
            <p className="text-gray-300 mt-4 text-center">{activity.description}</p>
          </button>
        ))}
      </div>
        <div className="relative h-64 w-full max-w-md my-8 flex items-center justify-center">
        {animation && (
          <div className={`relative w-48 h-48 ${
            animation === 'bounce' ? 'animate-bounce' : 
            animation === 'scratch' ? 'animate-pulse' : 
            animation === 'sleep' ? 'animate-pulse opacity-70' : ''
          }`}>
            <Image 
              src={selectedMood ? `/coko-${selectedMood.toLowerCase()}.svg` : '/cokohero.svg'}
              alt="Coko Animation" 
              fill 
              className="object-contain" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;