'use client'

import PicturesAnimation from "@/components/animations/PicturesAnimation"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

const real_cars = [
        "https://cdn.pixabay.com/photo/2019/11/19/16/57/corvette-4637919_1280.jpg",
        "https://cdn.pixabay.com/photo/2021/11/18/02/45/car-6805260_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/02/03/10/02/sports-car-4815234_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/11/15/19/03/corvette-4629064_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/24/20/31/car-2678274_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/05/05/13/38/corvette-5133147_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/03/26/18/02/lexus-4083289_1280.jpg",
        'https://images.unsplash.com/photo-1533264093455-62a61badea2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGV4dXMlMjBSQ3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1598551292015-e171a0c8a85c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGV4dXMlMjBSQ3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1598551292182-1df7b0c7504c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExleHVzJTIwUkN8ZW58MHx8MHx8fDA%3D',
        "https://cdn.pixabay.com/photo/2019/07/02/09/12/car-racing-4311924_1280.jpg",
        'https://images.unsplash.com/photo-1711513503774-33bf1bfcfade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxleHVzJTIwY2FyJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D',
        "https://cdn.motor1.com/images/mgl/2okzM/s1/2002-cadillac-cien.jpg",
        "https://cdn.motor1.com/images/mgl/zoMrE/s1/2002-cadillac-cien.jpg",
        "https://cdn.motor1.com/images/mgl/6JWvE/s1/2002-cadillac-cien.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwpyTX4qiFdIl6ITug-SsleqXvW_f98BO2w&s",
        "https://i0.wp.com/i.redd.it/sxzwll3ncg0b1.jpg?resize=1200%2C800&ssl=1"
      ]
  

export default function Pictures() {

    useGSAP(()=>{

        PicturesAnimation()
    })
    

  return (
    <section className="bgColor w-full min-h-screen p-4 overflow-x-hidden ">

      <div className="CarsInReal text-[#eae7d4] chunko lg:text-9xl text-6xl lg:p-4 p-2 text-center uppercase flex flex-col lg:flex-row items-center justify-center">
        <h1><span className="text-red-500">Cars</span><br /> in real life</h1> 
       
        <Image 
          src="/images/wheel.webp"
          alt="wheel"
          height={300}
          width={300}
          className="wheel"
          draggable={false}
        />

      </div>

      <div className="
        columns-[500px]
        gap-4
        
      ">
        {real_cars.map((pic) => (
          <img
            key={pic}
            src={pic}
            alt="car"
            loading="lazy"
            className="pic mb-4 w-full break-inside-avoid border border-[#eae7d4] hover:scale-105 hover:border-red-500 duration-500 will-change-transform"
            style={{opacity:0}}
            />
        ))}
      </div>
    </section>
  )
}
