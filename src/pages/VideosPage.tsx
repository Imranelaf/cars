import NavBar from "../components/NavBar";

export default function VideosPage(){
    return(
        <section className="bgColor w-full min-h-screen h-fit overflow-hidden">
              <div className="p-5">
                <NavBar />
              </div>
              <div className="flex h-[85vh] w-full items-center justify-center gap-9 items-center animate-scroll-horizontal rotate-20">
                        {Array.from({ length: 24}).map((_, index) => (
                            <p key={index} className="text-[#eae7d4] text-base tracking-widest font-extrabold whitespace-nowrap text-xl opacity-40 lg:!text-7xl " >VIDEOS</p>
                        ))}
                    </div>

                    
              
            </section>
    )
}