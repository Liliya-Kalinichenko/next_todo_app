"use client"

import React, { ReactNode, useRef } from 'react';
import './Hero.css';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  createScrollTriger, 
  imgAnimation, 
  imgHolderAnimation, 
  introImage, 
  introLetters, 
  lettersAnimation 
} from './animation';

const Hero = ({children}: {children: ReactNode}) => {
  const webContent = useRef<HTMLDivElement | null>(null);
  const lettersLeft = useRef<HTMLDivElement | null>(null);
  const lettersRight = useRef<HTMLDivElement | null>(null);
  const contentHolder = useRef<HTMLDivElement | null>(null);
  const imgHolder = useRef<HTMLDivElement | null>(null);
  const img = useRef<HTMLImageElement| null>(null);
  
  useGSAP(() => {
    let contentHolderHeight = 0;
    
    if (contentHolder.current) {
      contentHolderHeight = contentHolder.current.offsetHeight;
    }
    const imageHolderHeight = window.innerHeight;
    const addScrollHeight = window.innerHeight;    
    const totalBodyHeight = imageHolderHeight + contentHolderHeight + addScrollHeight;
    document.body.style.height = `${totalBodyHeight}px`
    
  }, []);
  
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.add(introLetters('.header__letters-item'))
      .add(introImage(imgHolder), '-=1.5')
      .add(createScrollTriger(webContent))
      .add(lettersAnimation(lettersLeft, -1))
      .add(lettersAnimation(lettersRight, 1))
      .add(imgHolderAnimation(imgHolder))
      .add(imgAnimation(img))    

  }, []);

  return (
    <>
      <div className="header">
        <div ref={lettersLeft} className="header__letters">
          <div className="header__letters-item">t</div>
          <div className="header__letters-item">o</div>
          <div className="header__letters-item">d</div>
          <div className="header__letters-item">o</div>
        </div>
        <div ref={lettersRight} className="header__letters">
          <div className="header__letters-item">l</div>
          <div className="header__letters-item">i</div>
          <div className="header__letters-item">s</div>
          <div className="header__letters-item">t</div>
        </div>
      </div>

      <div ref={webContent} className="main">
        <div ref={imgHolder} className="img__wrapper">
          <Image 
            layout="fill" 
            ref={img}
            src="/main.jpg" 
            alt="Hero Image" 
          />
        </div>

        <div ref={contentHolder} className="content__wrapper">
          {children}
        </div>
      </div>
    </>
  );
};

export default Hero;
