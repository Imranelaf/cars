'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useEffect } from "react"

export default function About() {


        useGSAP(()=>{
        gsap.registerPlugin(SplitText);
        const tl = gsap.timeline();
        let splet = SplitText.create('.text',{
            type:'words'
        })

        tl.from(".speed", {
            x: '+=120vw',
            duration: 1,
            ease: "bounce.out",
            yoyo:true,
            
        }).fromTo('.heart',
            { scale: 0.9 },
            { scale: 1, 
            duration: .7,
            repeat:-1,
            repeatDelay:.5,
            ease:'elastic.out'
        })


         
        document.fonts.ready.then(()=>{
            gsap.from(splet.words,{
            yPercent: 'random[-400, 400]',
            rotation: 'random[-30, 30]',
            yoyo:true,
            autoAlpha:0,
            delay:1,
            stagger:{
                amount:1,
                from:'random'
            }
        })

        }) 
        })

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
      

        </section>
    )
}