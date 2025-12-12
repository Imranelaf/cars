import { useEffect } from "react"
import imagesPostersAnimation from "../animations/ImagesPostersAnimation"
import { useGSAP } from "@gsap/react"


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

        imagesPostersAnimation()


        
  
    
    
    return (
        <div className="min-h-screen imagesContainer h-fit w-full font-extrabold ">
            <h6 className="lg:text-8xl text-6xl mx-8">Characters</h6>
            <h6 className="lg:text-9xl text-6xl mx-4 !text-red-500 ">Posters</h6>
            <div className="overflow-x-hidden ">
            <div className="h-auto w-fit p-4 lg:flex lg:gap-8 images">

                {
                    data.map((item) => (
                        <div key={item.name} className="w-full mt-3 panel ">
                        <img 
                        loading="lazy"        
                        src={`./images/Posters/${item.image}`}
                        alt={`${item.name}`}
                        draggable='false'
                        className="rounded-xl lg:min-w-120 h-110 hover:border-4 cursor-pointer hover:border-red-500 duration-200"
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