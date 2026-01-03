import gsap from "gsap/all"

export default function PicturesAnimation(){

   
        
              const tl = gsap.timeline()
              
                tl.to('.wheel',{
                  
                  rotate:360,
                  repeat:-1,
                  duration:3,
                  ease:'none',
        
                }).from('.CarsInReal',{
                  x:'-=100vw',
                  duration:1.5,
                  ease: "elastic.out(1,0.5)",
                }, 0).to('.pic',{opacity:1, duration:.5, stagger:{
                  from: "edges",
                  ease: "power3.inOut",
                  amount: 1.5
                } })
    return null
}