'use client'
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/spaceBg.svg')" }}
    >
      <div className="relative w-full h-[600px] flex items-center justify-center">
    
        <svg viewBox="0 0 500 500" className="absolute w-[1500px] h-[1500px]">
          <defs>
            <path
              id="arcPath"
              d="M 180,350 A 120,100 0 1,1 300,350"
              fill="transparent"
            />
          </defs>
          <text
            fill="#ED75F0"
            fontSize="42"
            fontWeight="bold"
            textAnchor="middle"
            className="uppercase"
          >
            <textPath href="#arcPath" startOffset="50%">
              IT'S A COKO LOCO WORLD
            </textPath>
          </text>
        </svg>

       
        <div
          className="relative w-[600px] h-[600px] transition-transform duration-500 hover:rotate-6 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={hovered ? "/cokohero2.svg" : "/cokohero.svg"}
            alt="Coko Hero"
            fill
            className="object-contain transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}
