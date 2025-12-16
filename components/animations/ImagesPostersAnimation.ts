import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function imagesPostersAnimation() {
  const sections = gsap.utils.toArray(".panel");
  const mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    gsap.set(sections, { rotate: 15, scale: 0.5, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".imagesContainer",
        pin: true,
        scrub: 2,
        start: "top top",
        end: () => `+=${window.innerWidth * (sections.length + 2)}`
      }
    });

    sections.forEach((section, i) => {
      tl.to(section, { rotate: 0, scale: 1, opacity: 1, duration: 0.5 }, "<");
      if (i !== sections.length - 1) {
        tl.to(sections, { xPercent: -85 * (i + 1), duration: 1, ease: "none" });
      }
    });
  });

  mm.add("(max-width: 799px)", () => {
    sections.forEach((panel) => {
      gsap.from(panel, {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 90%",
          end: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    });
  });
}