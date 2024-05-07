import React, { useEffect, useRef } from 'react';
import styles from './Slide.module.scss'
import { AnimatePresence, useAnimate, motion } from 'framer-motion';
import { JetBrainsMonoBold } from '@/styles/fonts/fonts';
import { cta } from '@/types/cta';
import Link from 'next/link';
import Image from 'next/image';

function Slide(props: {
  pages: cta[],
}) {
  const [scope, animate] = useAnimate()
  const [imgScope, imgAnimate] = useAnimate()
  const [[currentPage, direction], setPage] = React.useState([0, 0])
  const currentPageRef = useRef(0)
  useEffect(() => {
    const slideTimeout = setInterval(() => {
      console.log('current page', currentPageRef.current)
      if (currentPageRef.current === props.pages.length - 1) {
        console.log('hello')
        setPage([0, 10])
        currentPageRef.current = 0
      }
      else {
        console.log(currentPage, currentPageRef.current, props.pages.length)
        setPage([currentPageRef.current + 1, 10])
        currentPageRef.current += 1
      }
    }, 5000)
    return () => { clearInterval(slideTimeout) }
  }, [])
  console.log(currentPage)
  useEffect(() => {
    animate([["h2", { opacity: [0, 1], y: [20, 0] }, { at: 0, ease: 'easeInOut', duration: .8 }],
    ["p", { opacity: [0, 1], y: [20, 0] }, { at: +0.2, ease: 'easeInOut', duration: .8 }],
    ["button", { opacity: [0, 1], y: [20, 0] }, { at: +0.3, ease: 'easeInOut', duration: .8 }],])
    imgAnimate([imgScope.current, { opacity: [0, 1], x: -currentPageRef.current * window.innerWidth / 2 }, { at: 0, ease: 'easeIn', duration: 1 }])
  }, [currentPage])
  const imageArray: string[] = props.pages.map((page: cta) => page.image)
  const pageInfoArray = props.pages.map((page: cta) => {
    const { image, ...ret } = page
    return ret
  })
  /**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = (newDirection: number) => {
    setPage([currentPage + newDirection, newDirection]);
  };

  return (
    <div className={styles.slider}>
      {/* <div className={styles.left} style={{ background: props.color }}>
        <div className={styles.content} ref={scope}>
          <h2 className={`${styles.title} ${JetBrainsMonoBold.className}`}>
            {props.title}
          </h2>
          <p className={`${styles.description} ${JetBrainsMonoBold.className}`}>
            {props.description}
          </p>
          <button className={styles.action}>
            {props.action}
          </button>
        </div>
      </div> */}
      {/* <div className={styles.right}>
        <Image priority src={props.image} alt="background" className={styles.image} width='500' height='500' />
      </div> */}
      <AnimatePresence initial={false} mode='popLayout'>
        <motion.div
          key={currentPage}
          className={styles.left}
          // style={{ background: pageInfoArray[currentPage].color }}
          initial={{ background: pageInfoArray[currentPage - 1] ? pageInfoArray[currentPage - 1].color : pageInfoArray[pageInfoArray.length - 1].color }}
          animate={{ background: pageInfoArray[currentPage].color }}
          exit={{ background: pageInfoArray[currentPage + 1] ? pageInfoArray[currentPage + 1].color : pageInfoArray[0].color }}
          transition={{ duration: 1 }}
        >
          <div className={styles.content} ref={scope}>
            <h2 className={`${styles.title} ${JetBrainsMonoBold.className}`}>
              {pageInfoArray[currentPage].title}
            </h2>
            <p className={`${styles.description} ${JetBrainsMonoBold.className}`}>
              {pageInfoArray[currentPage].description}
            </p>
            {
              pageInfoArray[currentPage].href ? (
                <Link href={pageInfoArray[currentPage].href as string}>
                  <button className={styles.action}>
                    {pageInfoArray[currentPage].action}
                  </button>
                </Link>
              ) : <></>
            }
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence initial={false} custom={direction} mode='wait'>
        {/* <motion.img
          className={styles.right}
          key={currentPage}
          src={imageArray[currentPage]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
          }}
        // drag="x"
        // dragConstraints={{ left: 0, right: 0 }}
        // dragElastic={1}
        // onDragEnd={(e, { offset, velocity }) => {
        //   const swipe = swipePower(offset.x, velocity.x);

        //   if (swipe < -swipeConfidenceThreshold) {
        //     paginate(1);
        //   } else if (swipe > swipeConfidenceThreshold) {
        //     paginate(-1);
        //   }
        // }}
        /> */}
        <div className={styles.right}>
          <motion.div className={`${styles.imageWrap} imageWrap`} initial={{ x: 0 }} animate={{ x: `calc(-${currentPage} * (${100}vw))` }} ref={imgScope} transition={{ duration: .5, ease: 'easeInOut' }}>
            {
              imageArray.map((page, index) => (
                <Image priority src={page} key={index} alt="background" className={styles.image} width='1920' height='1080' />
              ))
            }
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Slide;
