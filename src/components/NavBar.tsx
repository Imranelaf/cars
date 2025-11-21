import { useState } from 'react';
import { Link } from 'react-router';
const bar = [{
  name: 'VIDEOS',
  path: '/videos'
},

{
  name: 'PICTURES',
  path: '/pictures'
},
{
  name: 'ABOUT',
  path: '/about'
},
{
  name: 'CONTACT',
  path: '/contact'
}];



export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex border-2 border-[#eae7d4] rounded-sm p-4 justify-between items-center text-[#eae7d4] relative">
      <p className="text-lg sm:text-xl font-bold">Cars</p>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 xl:gap-12 mr-8 font-black text-lg xl:text-xl">
        {bar.map(word => (
          <li key={word.name} className="cursor-pointer group flex">
            {word.name.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block squizingLetter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`${word.path}`}>{letter}</Link>
              </span>
            ))}
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        className="lg:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-7 h-0.5 bg-[#eae7d4] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
        />
        <span
          className={`w-7 h-0.5 bg-[#eae7d4] transition-all duration-300 ${isOpen ? 'opacity-0' : ''
            }`}
        />
        <span
          className={`w-7 h-0.5 bg-[#eae7d4] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-full sm:w-80 bg-[#2a3037] border-l-2 border-[#eae7d4] transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="flex flex-col gap-8 mt-24 px-8 font-black text-2xl">
          {bar.map(word => (
            <li
              key={word.name}
              className="cursor-pointer group flex border-b-2 border-[#eae7d4]/30 pb-4"
              onClick={() => setIsOpen(false)}
            >
             
                <span
                  key={word.name}
                  className="inline-block"
                >
                  <Link to={`${word.path}`}>{word.name}</Link>
                  
                </span>
              
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}