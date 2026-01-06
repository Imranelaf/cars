'use client'
import AboutAnimation from "@/components/animations/AboutAnimation"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

const data=[
    {
        fname:'John ',
        lname: 'Lasseter',
        job: 'Director',
        pic: '/images/Crew/John_Lasseter.webp'
    },
     {
        fname:'Joe ',
        lname:'Ranft',
        job: 'Co-director/Writer',
        pic: '/images/Crew/Joe_Ranft.webp'
    },
     {
        fname:'Owen ',
        lname:'Wilson',
        job: "McQueen'S voice",
        pic: '/images/Crew/Owen_Wilson.webp'
    },
]
    

export default function About() {


        useGSAP(() => {
          AboutAnimation()
  },
)


    return (
       
        <section className="bgColor w-full min-h-screen h-fit overflow-x-hidden">
            <div className="w-full h-fit flex flex-col items-center p-4">
                <h1 className="text-[#eae7d4] chunko lg:text-9xl text-6xl lg:p-4 p-2 text-center uppercase ">A World Built on <br />
                    <span className="text-red-500 speed inline-block "> Speed </span> 
                    and 
                    <span className="text-red-500 heart inline-block"> Heart </span>
                </h1>
                <p className="lg:w-1/2 w-full lg:text-3xl text-lg Grand-Regular text-center tracking-wider italic m-4 text">
                    Released in 2006 by Pixar Animation Studios and distributed by Walt Disney Pictures, 
                    Cars takes place in a world where vehicles are alive, each with their own personality, 
                    dreams, and flaws. At the center of the story is Lightning McQueen, a rising star who learns that 
                    true victory isn’t just about crossing the finish line, but about friendship, humility, 
                    and finding meaning off the beaten path.
                </p>
            </div>
 
            <div className="min-h-screen h-fit w-full p-2 lg:flex gap-3 imagePoster">

                {
                    data.map((item)=>(
                        <div key={item.lname} className="h-fit card group my-2 lg:w-1/3 w-full bg-[#eae7d4] hover:bg-[#ded6a6] duration-300 uppercase p-4 rounded-sm flex flex-col items-center text-center cursor-pointer" >
                            <Image
                                src={item.pic}
                                alt="Jeo Ranft"
                                height={550}
                                width={450}
                                className="relative h-1/2 w-full lg:h-3/5 lg:w-4/5 rounded-sm group-hover:scale-105 duration-500"
                            />
                            
                            <h1 className="text-xl font-bold underline ">{item.job}</h1>
                            <div className="flex flex-row ">
                            <h1 className="lg:text-7xl text-5xl flex flex-col chunko-bold text-red-500">{item.lname} <span className=" text-black ">{item.fname} </span></h1>
                    </div>
                    

                </div>

                    ))
                }

            </div>

        </section>
    )
}