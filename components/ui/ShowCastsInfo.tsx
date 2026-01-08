'use client'
import { Person } from "@/app/About/page"
import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import Image from "next/image"


interface Props {
  activePerson: Person
  setActivePerson: (person: Person | null) => void
}
export default function ShowCastsInfo({activePerson,setActivePerson }:Props){


    useGSAP(()=>{
        if(activePerson){
        gsap.fromTo('.displayCastInfo',{
            x:'+=100vw'
        },
        {
            x:0,
            duration:1,
            ease:'power4'
        }
        )
    }
}, [activePerson])

    const handleClose = ()=>{
        gsap.to('.displayCastInfo',{
            x:'+=100vw',
            onComplete: ()=>{
                setActivePerson(null)
                document.body.style.overflow = "auto"}
        })
    }

    

    return(
        <div className="fixed top-0 w-full h-full displayCastInfo overflow-hidden overscroll-none" >
              <div className="absolute lg:w-1/2  lg:h-full w-0 h-0 bg-black/50">

              </div>

              <div className="absolute right-0 lg:w-1/2 w-full h-full bg-[#eae7d4] p-5">
              <button className="m-3 p-3 border-3 group cursor-pointer" onClick={handleClose}>
                <img src="images/icon-close.svg" alt="Close icon" className="hover:scale-105 hover:rotate-180 duration-300" /> 
              </button>
             <Image
              src={activePerson.pic}
               alt={activePerson.lname}
              height={250}
               width={300}
               className="rounded-lg"
              
               
               />
                
                <h1 className="lg:text-7xl text-5xl chunko-bold text-red-500">{activePerson.lname} <span className=" text-black ">{activePerson.fname} </span></h1>
             
              <p className="!text-gray-700">{activePerson.bio}</p>
              </div>
              
            </div>
    )
}