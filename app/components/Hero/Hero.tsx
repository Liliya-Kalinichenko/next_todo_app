"use client"

import React, { ReactNode, useRef} from 'react';
import './Hero.css';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  createScrollTriger, 
  imgAnimation, 
  imgHolderAnimation, 
  introButton, 
  introImage, 
  introLetters, 
  lettersAnimation 
} from './animation';
import { IconButton } from '@mui/material';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Colors } from '@/app/theme/colors';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

gsap.registerPlugin(ScrollToPlugin);

const Hero = ({children}: {children: ReactNode}) => {
  const webContent = useRef<HTMLDivElement | null>(null);
  const lettersLeft = useRef<HTMLDivElement | null>(null);
  const lettersRight = useRef<HTMLDivElement | null>(null);
  const contentHolder = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);
  const imgHolder = useRef<HTMLDivElement | null>(null);
  const img = useRef<HTMLImageElement| null>(null);
  let contentHolderHeight = 0;
  
  useGSAP(() => {    
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
      .add(introButton(button) , '-=1')
      .add(createScrollTriger(webContent))
      .add(lettersAnimation(lettersLeft, -1))
      .add(lettersAnimation(lettersRight, 1))
      .add(imgHolderAnimation(imgHolder))
      .add(imgAnimation(img))    

  }, []);

  const handleClick = () => {
    gsap.to(window, {
      duration: 3.5, 
      scrollTo: contentHolderHeight * 2,
      ease: 'power2.in'
    })
  }

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
        <IconButton
          ref={button}
          size="large"
          className="trigger-button" 
          sx={{
            position: 'fixed', 
            top: '90%', 
            left: '50%', 
            color: Colors.light, 
          }} 
          onClick={() => handleClick()}
        >
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </IconButton>
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
