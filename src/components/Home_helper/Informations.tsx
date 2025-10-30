

export default function Infos(){
    return(
        <div className="w-full h-full informations flex flex-col justify-center items-center">
            <img src="./images/curved-text.webp" alt="PIXAR CURVED TEXT"
            className="w-60 lg:w-auto imageRotation"
             
            />
            <h6 className="lg:m-4 m-2 text-center lg:text-3xl">
                A rookie race car, <span className="font-extrabold lg:text-4xl">Lightning McQueen</span>, gets stranded in the forgotten town of <span className="lg:text-6xl italic">Radiator Springs</span>  on Route
                 66. Forced to repair the main road, he learns about <span className="underline italic font-extrabold lg:text-5xl">friendship, humility</span>, and the importance 
                 of <span className="text-2xl lg:text-5xl italic">community</span>  from the quirky locals, realizing that slowing down to appreciate life is more 
                 rewarding than fame.</h6>
        </div>
    )
}