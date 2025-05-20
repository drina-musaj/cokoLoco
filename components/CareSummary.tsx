'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import Button from '@mui/material/Button';


const CareSummary = () => {
  const selectedMood = useSelector((state: RootState) => state.mood.value);
  const selectedTreat = useSelector((state: RootState) => state.treat.value);
  const selectedActivity = useSelector((state: RootState) => state.activity?.value || '');
  
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [recommendation, setRecommendation] = useState('');
  
  useEffect(() => {
    let feedback = '';
    let recommend = '';
    
    if (selectedMood && selectedActivity && selectedTreat) {
      if (selectedMood === 'Sleepy' && selectedActivity === 'Take a nap' && selectedTreat === 'Treats') {
        feedback = "Perfect choices! Coko is contentedly napping after enjoying some treats.";
      } else if (selectedMood === 'Confused' && selectedActivity === 'Play with toy') {
        feedback = "Great job! Playing has helped Coko overcome confusion.";
      } else if (selectedMood === 'Interrupted' && selectedActivity === 'Scratching post') {
        feedback = "Coko is working out frustration on the scratching post. Good choice!";
      } else {
        feedback = `Coko is ${selectedMood.toLowerCase()} and ${
          selectedActivity === 'Play with toy' ? 'enjoying playtime' : 
          selectedActivity === 'Scratching post' ? 'scratching happily' : 
          'taking a peaceful nap'
        } while savoring ${selectedTreat.toLowerCase()}.`;
        recommend = "Coko appreciates your attention and care!";
      }
    } else {
      if (!selectedMood && !selectedActivity && !selectedTreat) {
        feedback = "Coko is waiting for your interaction!";
        recommend = "Start by selecting Coko's mood for today.";
      } else {
        feedback = "You've started caring for Coko!";
        
      }
    }
    
    setFeedbackMessage(feedback);
    setRecommendation(recommend);
    
    
  }, [selectedMood, selectedActivity, selectedTreat]);
  
  return (
    <div className="min-h-screen bg-[#17124C] text-white p-8 bg-cover bg-center">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl text-center md:text-6xl">
              Coko's Day
              <span className="font-[playfair] italic font-normal md:text-6xl pl-4 md:pl-6">Summary</span>
            </h1>
            
          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-[#2F226B]/30 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl mb-6 font-semibold mt-4">Today's Care Summary</h2>
              <p className="text-lg mb-6">{feedbackMessage}</p>
              
              <div className="flex flex-col gap-4 text-center">
                <div className="bg-[#0D0A2E] p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">Mood</p>
                  <p>{selectedMood || "Not set"}</p>
                </div>
                <div className="bg-[#0D0A2E] p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">Activity</p>
                  <p>{selectedActivity || "Not set"}</p>
                </div>
                <div className="bg-[#0D0A2E] p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">Food</p>
                  <p>{selectedTreat || "Not set"}</p>
                </div>
              </div>
            </div>
           
          </div>
          
          <div className="bg-[#2F226B]/30 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 mb-8">
              <Image 
                src={selectedMood ? `/coko-${selectedMood.toLowerCase()}.png` : '/cokohero.svg'}
                alt="Coko Current State" 
                fill 
                className="object-contain" 
              />
            </div>
            
            <div className="text-center space-y-4 w-full max-w-md">
              <p className="text-xl">Continue your journey with Coko</p>
              
              <div className="">
                <Button href="/" variant="contained" color='secondary'>
                  Start Again
                </Button>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareSummary;