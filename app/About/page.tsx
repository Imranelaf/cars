'use client'
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useEffect } from "react"

export default function About() {

    useEffect(()=>{
        gsap.registerPlugin(SplitText);
        let splet = SplitText.create('.text',{
            type:'words'
        })
        document.fonts.ready.then(()=>{
            gsap.from(splet.words,{
            yPercent: 'random[-400, 400]',
            rotation: 'random[-30, 30]',
            yoyo:true,
            autoAlpha:0,
            stagger:{
                amount:1,
                from:'random'
            }
        })
        }) 
        
    },[])

    return (
       
        <section className="bgColor w-full min-h-screen h-fit">
            <div className="w-full h-fit flex flex-col items-center p-4">
                <h1 className="text-[#eae7d4] chunko lg:text-9xl text-6xl lg:p-4 p-2 text-center ">A World Built on <br />
                    <span className="text-red-500"> Speed </span> 
                    and 
                    <span className="text-red-500"> Heart </span>
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