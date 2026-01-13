'use client'

import gsap from "gsap/all"
import { useEffect, useRef, useState } from "react"
import ReachedOut from "../ui/ReachedOut"
import Image from "next/image"
import { useGSAP } from "@gsap/react"

export default function Footer() {
    const [reached, setReached] = useState(false)
    const star1 = useRef<HTMLImageElement>(null)
    const star2 = useRef<HTMLImageElement>(null)


    // Animated the botton when the user click on it
    const clicked = () => {
        gsap.to('.topBotton', {
            y: 10,
            duration: .2,
            repeat: 1,
            yoyo: true,
            onComplete: () => setReached(true)
        })

    }

    // Close the Reached out component when the user click on close botton
    const Closed = () => {
        setReached(false)
    }

    const button = useRef<HTMLDivElement>(null)

    //Making the botton image react to mouse mouvement
    useGSAP(() => {
        const handleMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (clientX - centerX) / 50;
            const moveY = (clientY - centerY) / 50;


            gsap.to(button.current, {
                x: moveX * 1.5,
                y: moveY * 1.5,
                rotation: moveX * .1,
                scale: 1.03,
                duration: 0.3,
                ease: "power2.out"
            })




        }
        window.addEventListener('mousemove', handleMove)

        return () => window.removeEventListener('mousemove', handleMove)
    }, [reached])

    useGSAP(() => {
        // Create a shining/twinkling effect
        const tl = gsap.timeline({ repeat: -1 })
        const tl2 = gsap.timeline({ repeat: -1 })
        tl.to(star1.current, {
            x: -150,
            opacity: 1,
            scale: 1.3,
            rotation: 100,
            duration: 1.5,
            ease: "sine.inOut",

        }).to(star1.current, {
            x: -300,
            opacity: 0,
            scale: .1,
            rotation: 180,
            duration: 1,
            ease: "sine.inOut",

        })
        tl2.to(star2.current, {
            y: -80,
            x: 40,
            opacity: 1,
            scale: 1.3,
            rotation: 100,
            duration: 1.5,
            delay: .2,
            ease: "sine.inOut",

        }).to(star2.current, {
            y: -150,
            opacity: 0,
            scale: .1,
            rotation: 180,
            duration: 1,
            ease: "sine.inOut",

        })
    })



    return (
        <div className="w-full min-h-screen flex flex-col items-end lg:p-12">
            <div className="w-full h-full">
                <div className="flex flex-col lg:items-end items-center">
                    <p className="lg:text-8xl md:text-5xl text-4xl chunko text-[]">REACHED OUT</p>
                    <div className="w-full flex lg:justify-end lg:mr-[15%] ml-[15%] rotate-3">
                        <Image src="/images/botton/contact-arrow.svg" alt="arrow" draggable={false} height={200} width={200} className="w-[5rem] md:w-[8rem] lg:w-[10rem] m-4" />
                    </div>
                    <div className="flex lg:m-5 m-1 cursor-pointer w-full justify-end" onClick={() => clicked()} ref={button}>
                        <div className=" absolute justify-around">

                            <img src="/images/botton/button-star-1.svg" alt="botton start" ref={star1} className=" scale-10 opacity-0" />
                            <img src="/images/botton/button-star-2.svg" alt="botton start" ref={star2} className="scale-10 opacity-0" />
                        </div>
                        <img src="/images/botton/button-top.svg" alt="button-top" className="absolute  topBotton z-0 " />
                        <img src="/images/botton/button-bottom.svg" alt="button-bottom" className="z-10" />
                    </div>
                </div>


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
                        <ReachedOut textColor='#575656' bgColor='#eae7d4' />
                    </div>
                )
            }

        </div>
    )
}