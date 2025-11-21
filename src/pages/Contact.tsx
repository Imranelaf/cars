import NavBar from "../components/NavBar";

export default function Contact(){

    return(
   
             <section className="bgColor w-full min-h-screen h-fit">
                          <div className="p-5">
                            <NavBar />
                          </div>

                        
            <div>
                    <h2 className="text-3xl font-bold mb-6">REACHED OUT</h2>
                    <div className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="w-full bg-transparent border-b-2 border p-2 focus:outline-none focus:border-red-500 placeholder-gray-400"
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full bg-transparent border-b-2 p-2 focus:outline-none focus:border-red-500 placeholder-gray-400"
                        />
                        <textarea 
                            placeholder="Message" 
                            rows={6}
                            className="w-full bg-transparent border-2 p-2 focus:outline-none focus:border-red-500  placeholder-gray-400"
                        ></textarea>
                        <button 
                            type="button"
                            className="bg-red-500 px-8 py-3 font-bold hover:bg-red-600 transition-colors"
                        >
                            SEND
                        </button>
                    </div>
                </div>
        </section>
    )
}