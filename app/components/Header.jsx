'use client';
import React, { useState, useEffect } from 'react';

// Komponenter
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //Ta bort event/scroll
    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header className={`${header ? 'py-4 shadow-lg dark:bg-accent' : 'py-4 dark:bg-transparent'} sticky top-0 z-30 transition-all`}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-6 bg-zinc-700 px-3 py-1.5 rounded-full'>
            {/* Nav */}
            <Nav containerStyles='hidden xl:flex gap-10 pr-10 pl-2 items-center' 
                 linkStyles='relative hover:text-sky-400 transition-all' 
                 underlineStyles='absolute left-0 top-full h-[2px] bg-sky-400 w-full'/>
            <ThemeToggler />
            {/* MobilNav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header