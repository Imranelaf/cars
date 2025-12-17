import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function useVideoCardsAnimation() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cards = gsap.utils.toArray<HTMLElement>(".videos")
    const mm = gsap.matchMedia();

    mm.add("(max-width: 799px)", () => {
    cards.forEach((panel) => {
      gsap.from(panel, {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 100%",
          end: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    });
  });
    

    mm.add("(min-width: 800px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoContainer",
        pin: true,
        scrub: true,
        start: "top top",
        end: `+=${window.innerHeight * (cards.length)}`
      }
    })

    // Set initial states for the last cards only
    gsap.set(cards.slice(2), { rotate: 15, scale: 0.5, opacity:0})

    cards.forEach((video, i) => {
      if (i > 1) {
        tl.to(video, {
          rotate: 0,
          scale: 1,
         opacity:1,
          duration: .2,
          
        }, '<')
      }

      if (i !== cards.length - 1) {
        tl.to(cards, { yPercent: -95 * (i + 1), duration: .5, ease: "none" })
      }
    })
  })
  }, [])
}
