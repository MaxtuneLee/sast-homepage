import React, { useEffect } from 'react';
import styles from '@/styles/Header.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAnimate } from 'framer-motion';


function Header() {
  const [scope, animate] = useAnimate()
  const router = useRouter()
  const path = router.asPath
  console.log(path)
  useEffect(() => {
    animate(scope.current, { opacity: [0, 1] }, { duration: .5 })
  }, [])
  return (
    <div className={styles.headerWrap} ref={scope}>
      <Image src='/sast_logo_black.png' alt='logo' width={67} height={42} />
      <div className={styles.menu}>
        <Link href='/'><div className={styles.item} style={path === '/' ? { color: 'var(--normal-black)' } : {}}>主页</div></Link>
        <Link href='/departments'><div className={styles.item}>部门介绍</div></Link>
        <Link href='/activities'><div className={styles.item}>活动介绍</div></Link>
        <Link href='/join'><div className={styles.item}>加入我们</div></Link>
      </div>
      {/* <div className={styles.userOptions}>
        Login with SAST Link
        <Image src='/avatar.png' alt='avatar' width={58} height={58} />
      </div> */}
    </div>
  );
}

export default Header;
