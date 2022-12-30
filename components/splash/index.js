import Particle from "../particle/particle";
import { useEffect, useState, useRef } from "react";
import SplashImg from '../../assets/image/splash.png';

import Image from "next/image";

const Splash = () => {

  const INIHEIGHT = 110;
  const UNIT = 9;

  const [height, setHeight] = useState(INIHEIGHT);
  const [top, setTop] = useState(0);
  const [scale, setScale] = useState(1);

  const MYLT = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollControl);
  }, []);

  const scrollControl = () => {
    let opacity = 1 - scrollY / innerHeight;
    let scale = 0.2 + 0.8 * opacity;
    let offset = parseInt( UNIT * 100 * scrollY / innerHeight );
    let newHeight = INIHEIGHT + offset;
    let canvas = document.querySelector("canvas");
    let video = document.querySelector("video");
    let canvasContainer = document.querySelector("#canvas");

    canvas.style.opacity = opacity;    
    setHeight( newHeight );
    setTop( - offset );
    setScale(scale);

    // Controls opacity of canvas container from 0.9 ~ 1
    let conOpacity = 1 - ( scrollY - 0.5 * innerHeight ) / ( 0.5 * innerHeight );
    canvasContainer.style.opacity =  conOpacity;

    // Hide canvas if the scroll is over the inner height
    if(scrollY > innerHeight) {
      canvasContainer.style.display = "none";
      MYLT.current.style.display = "none";
      video.style.position = "absolute";
      video.style.top = "100vh";
      if(video.paused) {
        video.muted = true;
        video.play();
      }
    }
    else {
      canvasContainer.style.display = "block";
      MYLT.current.style.display = "block";
      video.style.position = "fixed";
      video.style.top = 0;
      if(!video.paused) video.pause();
    }
  };

  return (
    <>
      <Particle />
      <div ref={ MYLT } className="absolute top-[calc(50vh-110px)] z-50 left-0">
        <div className="overflow-hidden flex max-w-[100vw]" style={{height:height, marginTop: top}}>
          <Image src={SplashImg} alt="splash" className="h-[590px]" style={{transform:`scale(${scale})`}} />
        </div>
        <div className="overflow-hidden -scale-y-100" style={{height:height}}>
          <Image src={SplashImg} alt="splash" className="h-[590px]" style={{transform:`scale(${scale})`}} />
        </div>
      </div>
    </>
  );
};

export default Splash;
