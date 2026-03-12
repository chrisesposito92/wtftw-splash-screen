/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate app load completion after splash screen
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const text = "WTFTW";
  const letters = text.split("");

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-transparent">
      {/* Splash Screen Container */}
      <motion.div 
        className="relative flex flex-col items-center"
        animate={isReady ? { scale: 1.1, opacity: 0, filter: "blur(10px)" } : { scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Subtle glow behind the logo */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 rounded-full blur-[60px] -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        />

        {/* Logo Mark */}
        <div className="relative w-56 h-40 sm:w-72 sm:h-48 mb-8">
          <svg viewBox="0 0 200 140" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="20%" stopColor="#d8b4fe" stopOpacity="0.8" /> {/* Light Purple */}
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />   {/* Purple */}
                <stop offset="80%" stopColor="#d8b4fe" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <clipPath id="logo-clip">
                <polygon points="10,0 55,0 90,120 45,120" />
                <polygon points="190,0 145,0 110,120 155,120" />
                <polygon points="75,35 75,100 120,67.5" />
                <polygon points="85,20 120,45 95,0" />
              </clipPath>
            </defs>

            <g stroke="white" strokeWidth="2" strokeLinejoin="round" fill="white">
              {/* Left Stem */}
              <motion.polygon 
                points="10,0 55,0 90,120 45,120"
                initial={{ opacity: 0, x: -40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Right Stem */}
              <motion.polygon 
                points="190,0 145,0 110,120 155,120"
                initial={{ opacity: 0, x: 40, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Play Button */}
              <motion.polygon 
                points="75,35 75,100 120,67.5"
                initial={{ opacity: 0, scale: 0.5, transformOrigin: "97.5px 67.5px" }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.5 }}
              />
              {/* Top Wedge */}
              <motion.polygon 
                points="85,20 120,45 95,0"
                initial={{ opacity: 0, y: -20, scale: 0.8, transformOrigin: "100px 19px" }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              />
            </g>

            {/* Color Sweep Overlay */}
            <motion.g clipPath="url(#logo-clip)">
              <motion.rect
                y="0"
                width="200"
                height="140"
                fill="url(#sweep)"
                initial={{ x: -200 }}
                animate={{ x: 200 }}
                transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
              />
            </motion.g>
          </svg>
        </div>

        {/* Text Logo */}
        <div className="overflow-hidden flex ml-[0.15em]">
          {letters.map((letter, i) => (
            <motion.span 
              key={i}
              className="text-white text-5xl sm:text-7xl font-black tracking-[0.15em] drop-shadow-lg"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
