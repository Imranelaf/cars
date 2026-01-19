'use client'
import { Person } from "@/app/About/page"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"


interface Props {
  activePerson: Person
  setActivePerson: (person: Person | null) => void
}

export default function ShowCastsInfo({activePerson, setActivePerson}: Props){

    useGSAP(() => {
        if(activePerson){
            gsap.fromTo('.displayCastInfo', {
                x: '100vw'
            }, {
                x: 0,
                duration: 1,
                ease: 'power4.out'
            })
        }
    }, [activePerson])

    const handleClose = () => {
        gsap.to('.displayCastInfo', {
            x: '100vw',
            duration: 0.5,
            ease: 'power4.in',
            onComplete: () => {
                setActivePerson(null)
                document.body.style.overflow = "auto"
            }
        })
    }

    return(
        <div className="fixed inset-0 z-50 displayCastInfo flex">
            {/* Overlay - click to close */}
            <div 
                className="lg:w-1/2 w-0 h-full bg-black/50 cursor-pointer "
                onClick={handleClose}
            />

            {/* Content panel */}
            <div className="lg:w-1/2 w-full h-full bg-[#eae7d4] overflow-y-auto">
                <div className="p-5">
                    {/* Close button */}
                    <button 
                        className="m-3 p-3 group rounded-lg transition-colors duration-300 cursor-pointer border-2" 
                        onClick={handleClose}
                        aria-label="Close"
                    >
                        <Image 
                            src="/images/icon-close.svg" 
                            alt="Close icon" 
                            width={24}
                            height={24}
                            className=" group hover:scale-105 hover:rotate-180 duration-300" 
                        /> 
                    </button>

                    {/* Person image */}
                    <Image
                        src={activePerson.pic}
                        alt={activePerson.lname}
                        height={250}
                        width={300}
                        className="rounded-lg mb-4"
                    />
                    
                    {/* Person name */}
                    <h1 className="lg:text-7xl text-4xl chunko-bold text-red-500 mb-4">
                        {activePerson.lname} 
                        <span className="text-black">{activePerson.fname}</span>
                    </h1>
                
                    {/* Bio text */}
                    <h6 className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        {activePerson.bio}
                    </h6>
                </div>
            </div>
        </div>
    )
}