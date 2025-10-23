import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const data = [
        {
            name: 'Lightning mcQueen',
            image: 'McQueen.webp'
        },
        {
            name: 'Cruz Ramirez',
            image: 'Cruz_Ramirez.webp'
        },
        {
            name: 'Doc Hudson',
            image: 'Doc_Hudson.webp'
        },
        {
            name: 'Jackson Storm',
            image: 'Jackson_Storm.webp'
        },
        {
            name: 'Martin',
            image: 'Martin.webp'
        },
        {
            name: 'Sally Carrera',
            image: 'Sally_Carrera.webp'
        },
    ]

export default function Images() {
    
    useGSAP(()=>{

        gsap.registerPlugin(ScrollTrigger);
       /*  gsap.set('.panel', {opacity:.5}) */

        const sections = gsap.utils.toArray('.panel');

        gsap.to(sections,{
            xPercent: -86 * (sections.length - 2),
            scrollTrigger:{
                trigger: '.imagesContainer',
                pin:true,
                scrub:2,
            },
        });

        /* sections.forEach(()=>{
            gsap.to('.panel', {opacity:1})
        }) */

        

        

    })

    
    
 
    
    return (
        <div className="min-h-screen imagesContainer h-fit w-full font-extrabold ">
            <h6 className="lg:text-8xl text-6xl mx-8">Characters</h6>
            <h6 className="lg:text-9xl text-6xl mx-4 !text-red-500 ">Posters</h6>
            <div className="overflow-x-hidden ">
            <div className="h-auto w-fit p-4 lg:flex lg:gap-8 images">

                {
                    data.map((item) => (
                        <div key={item.name} className="w-full mt-3 panel">
                        <img 
                                
                        src={`./images/Posters/${item.image}`}
                        alt={`${item.name}`}
                        className="rounded-xl lg:min-w-120 h-110"
                        />
                                <h6 className="text-center text-2xl border-2 border-red-500 rounded-xl mt-1">{item.name}</h6>
                                </div>
                        ))
                }



            </div>
            </div>

        </div>
    )
}