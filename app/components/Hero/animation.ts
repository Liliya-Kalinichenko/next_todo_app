import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const introLetters = (className: string) => {
  const tl = gsap.timeline();

  tl.to(className, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    })

  return tl;
};

export const introImage = (imgHolder: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline();

  tl.to(imgHolder.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    })

  return tl;
};

export const createScrollTriger = (webContent: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline();
    ScrollTrigger.create({
      trigger: webContent.current,
      start: "-0.1% top",
      end: "bottom bottom",
      onEnter: () => {
        tl.set(webContent.current, {position: "absolute", top: "200%"})
      },
      onLeaveBack: () => {
        tl.set(webContent.current, {position: "fixed", top: "0"})
      }
    })

  return tl;
};

export const lettersAnimation = (lettersLeft: React.RefObject<HTMLDivElement>, direction: number) => {
  const tl = gsap.timeline();

  tl.to(lettersLeft.current, {
    x: innerWidth * 3 * direction,
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
      start: "top top",
      end: "+=300%",
      scrub: 1,
    }
  })

  return tl;
};

export const imgHolderAnimation = (imgHolder: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline();

  tl.to(imgHolder.current, {
  rotation: 0,
  scale: 1,
  x: 0,
  y: 0,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power2.inOut",
  scrollTrigger: {
    start: "top top",
    end: "+=200%",
    scrub: 1,
  }
})

  return tl;
};

export const imgAnimation = (img: React.RefObject<HTMLImageElement>) => {
  const tl = gsap.timeline();

  tl.to(img.current, {
  scale: 1,
  rotation: 0,
  x: 0,
  y: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    start: "top top",
    end: "+=200%",
    scrub: 1,
  }
})

  return tl;
};

