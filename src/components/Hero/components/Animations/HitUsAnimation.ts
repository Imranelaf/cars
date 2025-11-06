import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function HitUsAnimation(){

     useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        // Header animation with ScrollTrigger
        gsap.fromTo('.Header',
            {
                x: '100%',
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'bounce.inOuts',
                scrollTrigger: {
                    trigger: '.hitusup',
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Horizontal line animation
        gsap.fromTo('.horizontal-line',
            {
                scaleX: 0,
                transformOrigin: 'left'
            },
            {
                scaleX: 1,
                duration: 1.2,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: '.hitusup',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Contact section animation
        gsap.fromTo('.contact',
            {
                x: -100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Reach us section animation
        gsap.fromTo('.reach-us',
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.reach-us',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Vertical divider animation
        gsap.fromTo('.vertical-divider',
            {
                scaleY: 0,
                transformOrigin: 'top'
            },
            {
                scaleY: 1,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: '.content-section',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Stagger animation for contact items
        gsap.fromTo('.contact-item',
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Hover animation for social media items
        const socialItems = document.querySelectorAll('.social-item');
        socialItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    x: 10,
                    color: '#ef4444',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    x: 0,
                    color: '#000000',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

    }, []);
}