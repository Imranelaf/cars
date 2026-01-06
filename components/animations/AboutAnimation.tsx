import gsap from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

export default function AboutAnimation(){
     gsap.registerPlugin(SplitText, ScrollTrigger)
    
    
          /* text animation */
        const split = SplitText.create('.text', { type: 'words' })
    
        gsap.from('.speed', {
          x: '+=120vw',
          duration: 1,
          ease: 'bounce.out',
        })
    
        gsap.fromTo(
          '.heart',
          { scale: 0.9 },
          {
            scale: 1,
            duration: 0.7,
            repeat: -1,
            repeatDelay: 0.5,
            ease: 'elastic.out',
          }
        )
    
        document.fonts.ready.then(() => {
          gsap.from(split.words, {
            yPercent: 'random[-400,400]',
            rotation: 'random[-30,30]',
            autoAlpha: 0,
            stagger: {
              amount: 1,
              from: 'random',
            },
          })
        })
    
          /* Cards animation */
    
          const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.imagePoster',
        pin: true,
        start: 'top top',
        end: '+=200%',
        scrub: 2,
      },
    })
        tl.fromTo(
          '.card',
          {
            x: '100vw',
            rotate: 50,
            scale: 0.6,
          },
          {
            x: 0,
            rotate: 0,
            ease: 'power3.out',
            stagger: 0.15,
          }
        ).to('.card',{
          scale:1,
          ease:'power1.inOut',
          stagger:.2
        })
    
    
        tl.to({}, { duration: 1.5 }) // extend pinned section to keep cards visible longer
    
    return null
}