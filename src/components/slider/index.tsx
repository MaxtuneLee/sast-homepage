import React, { useEffect } from 'react';
import { JetBrainsMonoBold } from '@/styles/fonts/fonts';
import styles from '@/styles/Slider.module.scss'
import Image from 'next/image';
import themeColor from '@/utils/colors';
import { useAnimate } from 'framer-motion';

function Slider(props: {
  title: string,
  description: string,
  action: string,
  image: any,
  color: string
}) {
  const [scope, animate] = useAnimate()
  useEffect(() => {
    animate([["h2", { opacity: [0, 1], y: [100, 0] }, { at: 0, ease: 'easeInOut', duration: .8 }],
    ["p", { opacity: [0, 1], y: [100, 0] }, { at: +0.2, ease: 'easeInOut', duration: .8 }],
    ["button", { opacity: [0, 1], y: [100, 0] }, { at: +0.3, ease: 'easeInOut', duration: .8 }]])
  }, [])
  return (
    <div className={styles.slider}>
      <div className={styles.left} style={{ background: props.color }}>
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
      </div>
      <div className={styles.right}>
        <Image priority src={props.image} alt="background" className={styles.image} width='500' height='500' />
      </div>
    </div>
  );
}


export default Slider;
