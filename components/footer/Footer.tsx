'use client'

import gsap from "gsap/all"
import { useState } from "react"
import ReachedOut from "../ui/ReachedOut"

export default function Footer() {
    const [reached, setReached] = useState(false)

    const clicked = () => {
        const tl = gsap.timeline()
        tl.to('.topBotton', {
            y: 10,
            duration: .2,
            repeat: 1,
            yoyo: true,
            onComplete: () => setReached(true)
        })

    }

    const Closed = ()=>{
        setReached(false)
    }

    return (
        <div className="w-full min-h-screen ">

            <div className="flex lg:m-5 m-1 cursor-pointer" onClick={() => clicked()}>
                <img src="/images/botton/button-top.svg" alt="button-top" className="absolute  topBotton z-0 " />
                <img src="/images/botton/button-bottom.svg" alt="button-bottom" className="z-10" />
            </div>
            {
                reached && (
                    <div className="bg-[#eae7d4] w-full lg:w-1/2 min-h-1/2 h-fit lg:p-5 flex flex-col items-center rounded-lg absolute lg:left-[20%]">
                        
                        <button onClick={Closed}> 
                            <img
                            src="./images/icon-close.svg" 
                            alt="Close Botton" 
                            className="border-2 lg:p-3 p-2 cursor-pointer bg-red-500 hover:scale-105 duration-300 lg:absolute lg:inset-3" />
                         </button>
                         <h1 className="lg:text-6xl">REACHED OUT</h1>
                        <ReachedOut  textColor='#575656' bgColor='#eae7d4' />
                    </div>
                )
            }

        </div>
    )
}