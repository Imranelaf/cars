import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function imagesPostersAnimation() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");

    gsap.set(sections, { rotate: 15, scale: 0.5, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".imagesContainer",
        pin: true,
        scrub: 2,
        start: "top top",
        end: () => `+=${window.innerWidth + (sections.length + 2)}`
      }
    });

    sections.forEach((section, i) => {
      tl.to(section, { rotate: 0, scale: 1, opacity: 1, duration: 0.5 }, "<");
      if (i !== sections.length - 1) {
        tl.to(sections, { xPercent: -85 * i , duration: 1, ease: "none" });
      }
    });
  });
}
