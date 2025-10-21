import { useRef } from "react"
import Infos from "../Informations"

const data = [
    {
        src: '1.mp4',
        title: 'Starting',
        para: "Let's go"
    },
    {
        src: '2.mp4',
        title: 'Racing',
        para: "Lightning"
    },
    {
        src: '3.mp4',
        title: 'Troubles',
        para: "Accident"
    },
    {
        src: '4.mp4',
        title: 'finish line',
        para: "Is he win?"
    },
]

export default function VideosCards() {

    const videoRef = useRef([])

    const playVideo = (index)=>{
        videoRef.current && videoRef.current[index].play()
    }

    const pausedVideo = (index)=>{
        if(videoRef.current){ 
            videoRef.current[index].pause()
            videoRef.current[index].currentTime = 0 
        }}
   return(
            <section className="w-fit lg:flex ">
        <div className="relative lg:w-1/2 w-full h-screen flex flex-col gap-5 overflow-auto hideScrollBare ">

           {
            data.map((item,index)=>(

                <div key={item.src}
                className="w-full h-[20vh] luckiest-guy-regular rounded-sm h-auto bg-[#eae7d4] text-red-500 p-1 lg:p-4 text-center cursor-pointer  hover:bg-red-500 hover:text-[#eae7d4] duration-500"
                onMouseEnter={()=>playVideo(index)}
                onMouseLeave={()=>pausedVideo(index)}
                >
                    <video src={`./videos/${item.src}`}
                    className="h-auto w-full rounded-sm"
                    ref={(el) => videoRef.current[index] = el}
                    muted
                    playsInline
                    />
                    <h1 className="lg:text-2xl font-semibold !text-black">{item.title}</h1>
                    <h2 className="lg:text-5xl text-2xl font-extrabold ">{item.para}</h2>



                </div>
            ))
           }


           
        </div>
        <div className="lg:w-1/2 lg:p-5 p-1 mt-5">
           <Infos />
           </div>
        </section>

   )}