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
  
  /* Ref for mobile menu */
  const mobileMenuRef = useRef<HTMLUListElement>(null);
  
  /* Track last scroll position */
  const lastScrollY = useRef(0);

  // Navbar scroll animation
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

  // Mobile menu toggle with GSAP
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      
      setTimeout(() => {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            ease: 'power3.out'
          }
        );
      }, 10);
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          setIsOpen(false);
          document.body.style.overflow = 'auto';
        }
      });
    }
  };

  const closeMenu = () => {
    gsap.to(mobileMenuRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    });
  };

  return (
    <nav 
      ref={navRef}
      className="flex flex-col border-2 border-[#eae7d4] bg-[#2a3037] rounded-sm text-[#eae7d4] relative"
    >
      {/* Top bar with logo and hamburger */}
      <div className="flex justify-between items-center lg:p-4 p-2">
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

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 z-50"
          onClick={toggleMenu}
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
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul 
          ref={mobileMenuRef}
          className="lg:hidden flex flex-col gap-4 px-6 pb-6 font-black text-xl overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          {bar.map(word => (
            <li
              key={word.name}
              className="cursor-pointer border-b-2 border-[#eae7d4]/30 p-3"
              onClick={closeMenu}
            >
              <Link href={word.path}>{word.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}