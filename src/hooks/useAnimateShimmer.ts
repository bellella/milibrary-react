import { Animate, AnimateInterface } from '@milibrary/core';
import React, { useEffect } from 'react';


const innerWidth = window.innerWidth - 50;
const innerHeight = window.innerHeight - 50;

const useAnimateShimmer = () => {
  const refs = React.useRef<HTMLElement[]>([]);
  const chkk = React.useRef<boolean>(true);

  const moveForever = (ani: AnimateInterface, x: number = 0, y: number = 0, scale = 1) => {
    const nextX = Math.max(100, Math.min(((Math.random() * 500 - 250)) + x, innerWidth));
    const nextY = Math.max(100, Math.min(((Math.random() * 500 - 250)) + y, innerHeight));
    const newScale = Math.random() * 3.5 + 0.5;
    const duration = Math.random() * 2500 + 2500;
    ani.setKeyframes([
      { transform: `translate(${x}px, ${y}px) scale(${scale})` },
      { transform: `translate(${nextX}px, ${nextY}px) scale(${newScale})` }
    ])
      .setDuration(duration)
      .play().then(() => {
        if (chkk.current) {
          moveForever(ani, nextX, nextY, newScale);
        }
      });
  }

  React.useEffect(() => {
    const anis = [];
    if (refs.current && refs.current.length) {
      refs.current.forEach((r, i) => {
        const ani = Animate().addElement(r).setFill('forwards');
        anis.push(ani);
        moveForever(ani, i * 100, (Math.random() * 900)
        )
          ;
      })
    }
  }, [refs.current]);

  useEffect(() => () => {
    chkk.current = false;
  }, []);
  return {
    refs
  }
}

export default useAnimateShimmer;