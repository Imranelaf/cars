
export default function Contact(){

    return(
       
   
             <section className="bgColor w-full h-[87vh] flex flex-col slogan justify-center items-center">
                        
            <div className="text-center">
                <h1 className="text-[#eae7d4] lg:text-6xl text-3xl text-bold">WHAT'S ON YOURS</h1>
                <h1 className="text-red-500 lg:text-8xl text-5xl text-extrabold">MIND?</h1>
            </div>
            <div>
                <div className="text-[#eae7d4] flex lg:flex-row flex-col text-sm placeholder:text-sm"> 
                <input
                     type="text"
                     placeholder="FULL NAME"
                     className="bg-[#575656] lg:w-[21vw] w-[80vw] h-[3rem] font-semibold p-2 rounded-lg placeholder-[#eae7d4] placeholder:tracking-wide outline-none m-2" />
                <input type="email" placeholder="EMAIL" className="bg-[#575656] lg:w-[21vw] w-[80vw] h-[3rem] font-semibold p-2 rounded-lg placeholder-[#eae7d4] placeholder:tracking-wide outline-none m-2"  />
                
                </div>
                <div className="flex flex-col text-[#eae7d4] items-center">
                <textarea name="text" id="" placeholder="MESSAGE" className="bg-[#575656] lg:w-[43vw] w-[80vw] h-[10rem] font-semibold p-2 rounded-lg placeholder-[#eae7d4] placeholder:text-sm placeholder:tracking-wide outline-none m-2"  />
                    <button className="group bg-red-500 rounded-lg px-6 py-3 overflow-hidden lg:w-[43vw] w-[80vw]">
                        <span className="inline-block text-2xl font-black tracking-wider transition-transform duration-300 group-hover:scale-150">
                            SENT
                        </span>
                    </button>

                </div>
            </div>
           </section>

           
    )
}