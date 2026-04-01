import { useEffect, useRef } from 'react';
import s from './AuroraBackground.module.scss';

export default function AuroraBackground() {
  const auroraRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (auroraRef.current) {
            // Using pixels ensures perfectly 1:1 cursor tracking
            auroraRef.current.style.setProperty('--x', `${e.clientX}px`);
            auroraRef.current.style.setProperty('--y', `${e.clientY}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Set initial center position
    if (auroraRef.current) {
      auroraRef.current.style.setProperty('--x', `${window.innerWidth / 2}px`);
      auroraRef.current.style.setProperty('--y', `${window.innerHeight / 2}px`);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className={s.wrapper} ref={auroraRef}></div>;
}
