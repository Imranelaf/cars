import { useRef } from "react"

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
        src: '1.mp4',
        title: 'finish line',
        para: "Win?"
    },
]

export default function VideosCards() {
    const videorefs = useRef([]);

    const handleMouseEnter = (index) => {
        if (videorefs.current[index]) {
            videorefs.current[index].play();
        }
    };

    const handleMouseLeave = (index) => {
        if (videorefs.current[index]) {
            videorefs.current[index].pause();
            videorefs.current[index].currentTime = 0;
        }
    };

    return (
        <div className="w-full h-screen flex flex-col gap-5 overflow-y-auto p-5 scrollbar-hide">
           
            {
                data.map((item, index) => (
                    <div 
                        key={`${item.src}-${index}`} 
                        className="bg-[#eae7d4] p-4 w-5/12 rounded-sm flex flex-col items-center cursor-pointer text-red-500 hover:squizingLetter hover:bg-red-500 hover:!text-[#eae7d4] flex-shrink-0"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <video
                            src={`./videos/${item.src}`}
                            className="rounded-sm w-full"
                            ref={(el) => videorefs.current[index] = el}
                            muted
                            playsInline
                        />
                        <h1 className="tracking-wider text-larg text-black font-bold">{item.title}</h1>
                        <h1 className="luckiest-guy-regular text-3xl tracking-widest italic">{item.para}</h1>
                    </div>
                ))
            }
        </div>
    )
}