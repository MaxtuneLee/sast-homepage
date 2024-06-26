import React, { useEffect } from 'react';
import { JetBrainsMonoBold } from '@/styles/fonts/fonts';
import styles from './CTA.module.scss'
import Image from 'next/image';
import themeColor from '@/utils/colors';
import { useAnimate } from 'framer-motion';
import { cta } from '@/types/cta';
import Link from 'next/link';

function CTA(props: cta) {
  const [scope, animate] = useAnimate()
  useEffect(() => {
    animate([["h2", { opacity: [0, 1], y: [20, 0] }, { at: 0, ease: 'easeInOut', duration: .8 }],
    ["p", { opacity: [0, 1], y: [20, 0] }, { at: +0.2, ease: 'easeInOut', duration: .8 }],
    ["button", { opacity: [0, 1], y: [20, 0] }, { at: +0.3, ease: 'easeInOut', duration: .8 }]])
  }, [])
  return (
    <div className={styles.cta}>
      <div className={styles.left} style={{ background: props.color }}>
        <div className={styles.content} ref={scope}>
          <h2 className={`${styles.title} ${JetBrainsMonoBold.className}`}>
            {props.title}
          </h2>
          <p className={`${styles.description} ${JetBrainsMonoBold.className}`}>
            {props.description}
          </p>
          {
            props.href ? (
              <Link href={props.href} >
                <button className={styles.action}>
                  {props.action}
                </button>
              </Link>
            ) : <></>
          }
        </div>
      </div>
      <div className={styles.right}>
        <Image priority src={props.image} alt="background" className={styles.image} width='1920' height='1080' />
      </div>
    </div>
  );
}


export default CTA;
