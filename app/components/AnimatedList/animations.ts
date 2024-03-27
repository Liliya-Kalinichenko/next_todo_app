import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const horizontalScroll = (
  trigger: React.RefObject<HTMLDivElement>, 
  section: React.RefObject<HTMLUListElement>,
  itemsLenght: number,
) => {
  const tl = gsap.timeline();
    tl.fromTo(section.current, {
      translateX: 0,
    }, {
      translateX: `${(itemsLenght - 1) * -100}vw`,
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: trigger.current,
        start: 'top top',
        end: '2000 top',
        scrub: true,
        pin: true,
      }
    })

  return tl;
}