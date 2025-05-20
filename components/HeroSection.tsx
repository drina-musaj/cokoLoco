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
      <div className="relative w-full max-h-[600px] flex items-center justify-center">
    
        <svg viewBox="0 0 500 500" className="absolute max-w-[1500px] max-h-[1500px]">
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
          className="relative max-w-[500px] max-h-[500px] transition-transform duration-500 hover:rotate-6 cursor-pointer flex justify-center items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={hovered ? "/cokohero2.svg" : "/cokohero.svg"}
            alt="Coko Hero"
            width={200}
            height={200}
            className="object-contain transition-opacity duration-300 md:w-[500px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
