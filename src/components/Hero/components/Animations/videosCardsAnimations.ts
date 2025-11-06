import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function useVideoCardsAnimation() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cards = gsap.utils.toArray(".videos")

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
  }, [])
}
