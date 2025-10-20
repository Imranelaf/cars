import '../../App.css'

export default function Slogan(){

    return(
        <section className=" w-[80vw] h-screen flex justify-evenly">
            <div className="luckiest-guy-regular flex flex-col items-center text-8xl baseColor">
            <h1 >Life's a journey</h1>
            <h1 className="text-9xl tracking-wider italic text-red-500">Enjoy</h1>
            <div className="flex gap-4 h-auto items-center">
            <h1>The</h1>
            <img 
                src="./images/mcqueen.gif" 
                alt="mcqueen image" 
                className="w-50 select-none mt-2"
                draggable={false}
                />
            <h1>Trip</h1>
            </div>
            </div>
            <div className="relative h-full">
                <div className="border-2 border-[#eae7d4] w-auto h-[85vh] flex flex-col gap-9 rounded-sm mt-2 overflow-hidden">
                    <div className="scrollingBar flex flex-col gap-9">
                        {Array.from({ length: 16}).map((_, index) => (
                            <p key={index} className="text-[#eae7d4] rotate-270 mt-4 tracking-wider font-semibold">PIXAR</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}