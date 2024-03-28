"use client";
import React, { ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Template = ({children}: {children: ReactNode}) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(".banner", {
      yPercent: 0,
    }).to(".banner", {
      yPercent: 100,
      stagger: 0.2,
    })

  }, [])

  return (
    <div>
      <div className="banner" style={{left: '0'}}></div>
      <div className="banner" style={{left: '25%'}}></div>
      <div className="banner" style={{left: '50%'}}></div>
      <div className="banner" style={{left: '75%'}}></div>
      {children}
    </div>
  )
}

export default Template;
