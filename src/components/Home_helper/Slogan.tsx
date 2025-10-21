import '../../App.css'

export default function Slogan() {

    return (
        <section className="h-screen w-10/12 luckiest-guy-bold text-4xl md:text-6xl lg:text-8xl text-[#eae7d4]">
            <div className="h-full flex flex-col lg:flex-row lg:justify-between">
                {/* Main content */}
                <div className="flex-1 flex items-center justify-center">
                    {/* Large screens */}
                    <div className="hidden lg:flex flex-col items-center">
                        <h1>Life's Journey</h1>
                        <h1 className='text-9xl text-red-500 italic'>Enjoy</h1>
                        <div className='flex gap-3 items-center mt-4'>
                            <h1>The</h1>
                            <img
                                src="./images/mcqueen.gif"
                                alt="Winking"
                                className="w-70"
                            />
                            <h1>Ride</h1>
                        </div>
                    </div>

                    {/* Small screens */}
                    <div className="lg:hidden text-[#eae7d4] flex flex-col items-center w-full px-4">
                        <h1>Life's Journey</h1>
                        <h1 className='text-5xl text-red-500 italic'>Enjoy</h1>
                        <h1>The ride</h1>
                        <img
                            src="./images/mcqueen.gif"
                            alt="Winking"
                            className="w-50"
                        />
                        <div className='w-full text-base overflow-hidden my-4 p-1 border-2 rounded-sm'>
                            <div className="flex gap-4 animate-scroll">
                                {Array.from({ length: 8}).map((_, index) => (
                                    <p key={index} className="text-[#eae7d4] tracking-wider font-semibold whitespace-nowrap">PIXAR</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrolling bar for large screens */}
                <div className='hidden lg:block border-2 border-[#eae7d4] overflow-hidden w-14 my-4 h-10/12 rounded-sm'>
                    <div className="flex flex-col gap-9 items-center animate-scroll-vertical">
                        {Array.from({ length: 16 }).map((_, index) => (
                            <p key={index} className="text-[#eae7d4] text-base tracking-wider font-semibold whitespace-nowrap rotate-180" style={{writingMode: 'vertical-rl'}}>PIXAR</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}