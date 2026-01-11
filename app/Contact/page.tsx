import ReachedOut from '@/components/ui/ReachedOut'


export default function Contact(){

    return(
       
   
             <section className="bgColor w-full h-[87vh] flex flex-col slogan justify-center items-center">
                        
            <div className="text-center">
                <h1 className="text-[#eae7d4] lg:text-6xl text-3xl text-bold">WHAT'S ON YOURS</h1>
                <h1 className="text-red-500 lg:text-8xl text-5xl text-extrabold">MIND?</h1>
            </div>
           
            <ReachedOut  textColor='#eae7d4' bgColor='#575656'/>
         

           </section>

           
    )
}