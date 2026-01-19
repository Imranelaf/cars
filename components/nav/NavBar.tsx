'use client'
import Link from 'next/link';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const bar = [
  { name: 'VIDEOS', path: '/Videos' },
  { name: 'PICTURES', path: '/Pictures' },
  { name: 'ABOUT', path: '/About' },
  { name: 'CONTACT', path: '/Contact' }
];

export default function NavBar() {

  /* State used to toggle the mobile (hamburger) navigation menu */
  const [isOpen, setIsOpen] = useState(false);
  
  /* Ref for the navbar element */
  const navRef = useRef<HTMLElement>(null);
  
  /* Track last scroll position */
  const lastScrollY = useRef(0);

  useGSAP(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN - hide navbar
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        // Scrolling UP - show navbar
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
    <nav 
      ref={navRef}
      className="flex border-2 border-[#eae7d4] bg-[#2a3037] rounded-sm p-4 justify-between items-center text-[#eae7d4] relative"
    >
      
      {/* Logo */}
      <p className="text-lg sm:text-xl font-bold">
        <Link href="/">Cars</Link>
      </p>

      {/* Desktop Menu (visible on large screens only) */}
      <ul className="hidden lg:flex gap-6 xl:gap-12 mr-8 font-black text-lg xl:text-xl">
        {bar.map(word => (
          <li key={word.name} className="cursor-pointer group flex">
            
            {/* Animated split-letter effect */}
            {word.name.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block squizingLetter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link href={word.path}>{letter}</Link>
              </span>
            ))}

          </li>
        ))}
      </ul>

      {/* Hamburger Button  */}
      <button
        className="lg:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {/* separated lines */}
        <span
          className={`w-7 h-0.5 bg-[#eae7d4] transition-all duration-300 
            ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`w-7 h-0.5 bg-[#eae7d4] transition-all duration-300 
            ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`w-7 h-0.5 bg-[#eae7d4] transition-all duration-300 
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Mobile Slide-in Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-full sm:w-80 bg-[#2a3037] 
          border-l-2 border-[#eae7d4] transition-transform duration-300 ease-in-out z-40 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-8 mt-24 px-8 font-black text-2xl">
          {bar.map(word => (
            <li
              key={word.name}
              className="cursor-pointer group flex border-b-2 border-[#eae7d4]/30 pb-4"
              onClick={() => setIsOpen(false)}  /* Close menu when clicking a link */
            >
              <span className="inline-block">
                <Link href={word.path}>{word.name}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (click to close mobile menu) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}