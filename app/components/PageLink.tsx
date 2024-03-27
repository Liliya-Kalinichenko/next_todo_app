"use client"
import { Box, Link, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Colors } from '../theme/colors';

const PageLink = () => {
  const linkImg = useRef<HTMLAnchorElement | null>(null);

  useGSAP(() => {
    gsap.to(linkImg.current, {
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: 'expo.inOut'
    })

  }, []);

  return (
    <Link 
      ref={linkImg}             
      href="/todos" 
      sx={{
        position: 'absolute', 
        top: '10%', 
        right: '8%', 
        opacity: 0,
        transform: 'scale(0.5)',
        width: '100px', 
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        '&:hover': {
          '.page-link': {
            transform: 'scale(1)',
            opacity: 1,
          },          
        },
      }}
    >
      <Box
        className="link"  
        sx={{
          position: 'absolute',
          backgroundImage: 'url(/2.png)',
          width: '100%', 
          height: '100%',
          backgroundSize: 'cover',          
        }}
      ></Box>
      <Typography
        className="page-link"
        sx={{           
          width: '100%',
          height: '100%',
          transform: 'scale(0.3)',
          transformOrigin: 'center center', 
          textAlign: 'center',
          opacity: 0,
          transition: 'all 1s ease',
          textTransform: 'uppercase',
          letterSpacing: '8px', 
          color: Colors.light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
        }}
      >        
        More Details
      </Typography>
      

    </Link>
  )
}

export default PageLink
