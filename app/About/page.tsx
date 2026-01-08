'use client'
import AboutAnimation from "@/components/animations/AboutAnimation"
import ShowCastsInfo from "@/components/ui/ShowCastsInfo"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useState } from "react"

const data=[
    {
        fname:'John ',
        lname: 'Lasseter',
        job: 'Director',
        pic: '/images/Crew/John_Lasseter.webp',
        bio: "John Lasseter is a pivotal American animator, director, and producer, famous for spearheading Pixar Animation Studios and revolutionizing CGI films like Toy Story, Cars, and A Bug's Life, alongside his leadership roles at Walt Disney Animation Studios before departing in 2018 due to misconduct allegations. He began at Disney, was fired for pushing computer animation, then joined Lucasfilm's computer graphics division (which became Pixar), directing classics and serving as Chief Creative Officer at both studios, earning multiple Academy Awards. "

    },
     {
        fname:'Joe ',
        lname:'Ranft',
        job: 'Co-director/Writer',
        pic: '/images/Crew/Joe_Ranft.webp',
        bio: "Joseph 'Joe' Ranft (1960-2005) was a celebrated American animator, screenwriter, storyboard artist, and voice actor, known for his pivotal creative roles at Pixar and Disney, contributing to classics like Toy Story, The Lion King, Beauty and the Beast, A Bug's Life, and Cars, voicing beloved characters like Heimlich and Jacques, and tragically passing away in a car accident at age 45, leaving a legacy as a 'Disney Legend'. "

    },
     {
        fname:'Owen ',
        lname:'Wilson',
        job: "McQueen'S voice",
        pic: '/images/Crew/Owen_Wilson.webp',
        bio: "Owen Cunningham Wilson (born November 18, 1968)[3] is an American actor and screenwriter. He has frequently worked with filmmaker Wes Anderson, with whom he has shared writing and acting credits on the films Bottle Rocket (1996), Rushmore (1998), and The Royal Tenenbaums (2001)—the latter received a nomination for the Academy Award and BAFTA Award for Best Screenplay. He has also appeared in Anderson's The Life Aquatic with Steve Zissou (2004), The Darjeeling Limited (2007), Fantastic Mr. Fox (2009), The Grand Budapest Hotel (2014), and The French Dispatch (2021)."
    },
]
    
export type Person = typeof data[0]

export default function About() {

  const [activePerson, setActivePerson]= useState<Person | null>(null)

  

        useGSAP(() => {
          AboutAnimation()
  },
)

        const cardClick = (item: typeof data[0]  )=>{
        document.body.style.overflow = "hidden"
        setActivePerson(item)
    }

    

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
                        <div key={item.lname} className="h-fit card group my-2 lg:w-1/3 w-full bg-[#eae7d4] hover:bg-[#ded6a6] duration-300 uppercase p-4 rounded-sm flex flex-col items-center text-center cursor-pointer" 
                            onClick={()=>cardClick(item)
                            }
                          >
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

            { activePerson &&
                <ShowCastsInfo activePerson={activePerson} setActivePerson={setActivePerson}/>
            }

            
   

        </section>
    )
}