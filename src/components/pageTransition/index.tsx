import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef } from 'react';


const PageTransition = forwardRef(function PT({ children, ...rest }: HTMLMotionProps<'div'>, ref: React.ForwardedRef<HTMLDivElement>) {
  const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <motion.div
      ref={ref}
      initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
      animate={
        { WebkitMaskImage: visibleMask, maskImage: visibleMask }
      }
      exit={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
      transition={{ duration: .3, ease: [0, 0.71, 0.2, 1.01] }}
      // {...rest}
    >
      {children}
    </motion.div>
  );
})

export default PageTransition;
