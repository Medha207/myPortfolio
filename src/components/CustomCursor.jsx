import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the cursor follower
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Listen for hover on clickable elements to expand the cursor
    const handleMouseOver = (e) => {
      const isOverClickable = !!(
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('magnetic')
      );
      
      setIsHovered((prev) => {
        if (prev !== isOverClickable) {
          return isOverClickable;
        }
        return prev;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Tiny precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Smooth glowing ring follower */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-primary/50 rounded-full pointer-events-none z-[99] flex items-center justify-center mix-blend-screen shadow-[0_0_20px_rgba(14,165,233,0.3)]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? 'rgba(14,165,233,0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(14,165,233,0.8)' : 'rgba(14,165,233,0.5)',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
