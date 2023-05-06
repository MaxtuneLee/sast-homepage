import React, { ForwardedRef, forwardRef, useEffect } from 'react';
import styles from '@/styles/Departments.module.scss'
import PageTransition from '@/components/pageTransition';
import { Inter } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';

const Departments= forwardRef(function Department(props: {}, ref: ForwardedRef<HTMLDivElement>){
  useEffect(()=>{
    console.log('u r in department now')
  },[])
  return (
    <>
      <PageTransition ref={ref}>
        <main className={`${styles.main}`}>
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>src/pages/index.tsx</code>
            </p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>

          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>

          <div className={styles.grid}>
            <Link
              href="/departments"
              className={styles.card}
            >
              <h2>
                Docs <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </Link>
          </div>
        </main>
      </PageTransition>
    </>
  );
})

export default Departments;
