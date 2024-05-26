'use client';

/*
import { PiMoonLight, PiSun } from "react-icons/pi";
import { useTheme } from 'next-themes';
import React from 'react';
const ThemeToggler = () => {

const { theme, setTheme } = useTheme();
  return (
    <div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex gap-2 bg-slate-500 p-2 rounded-full text-white">
            <PiSun className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <PiMoonLight className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </button>
    </div>
  )
}

export default ThemeToggler;*/
import { PiMoonLight, PiSun } from "react-icons/pi";
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const iconSize = '1.4rem'; // Ange önskad storlek här

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <button onClick={toggleTheme} className="flex justify-center gap-2 bg-slate-500 p-2 rounded-full text-white relative transition duration-300  hover:bg-slate-600" style={{ width: '2.5rem', height: '2.5rem' }}>
        <PiSun className="transition-all" style={{ width: iconSize, height: iconSize, transform: theme === 'dark' ? 'scale(0)' : 'scale(1)' }} />
        <PiMoonLight className="absolute transition-all" style={{ width: iconSize, height: iconSize, transform: theme === 'dark' ? 'scale(1)' : 'scale(0)' }} />
      </button>
    </div>
  );
};

export default ThemeToggler;