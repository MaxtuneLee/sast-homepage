import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAnimate, useMotionValueEvent, useScroll } from "framer-motion";

function Header() {
  const [scope, animate] = useAnimate();
  const [scrolled, setScrolled] = useState(false);
  const [collapse, setCollapse] = useState(false)
  const [subMenu, setSubMenu] = useState<string | null>(null)
  const { scrollY } = useScroll();
  const router = useRouter();
  const path = router.asPath;
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 120) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  console.log(path.split('/').includes('departments'), path)
  // useEffect(() => {
  //   // animate(scope.current, { opacity: [0, 1] }, { duration: 0.5 });
  // }, [scrolled]);
  return (
    <div
      className={`${styles.headerWrap} ${scrolled ? "backgroundBlur" : ""}`}
      ref={scope}
      style={
        scrolled
          ? {
            backgroundColor: "rgb(255 255 255 / 70%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: 'blur(15px)',
            borderWidth: "0px 0px 1px 0px",
            borderStyle: "solid",
            borderImage: "linear-gradient(to right, rgb(0 0 0 / 30%) 0%, rgb(255 255 255) 70%) 1",
          }
          : {}
      }
    >
      <Image src="/sast_logo_black.png" className={styles.logo} alt="logo" width={67} height={42} />
      <div className={styles.menu}>
        <Link href="/" scroll={false}>
          <div
            className={styles.item}
            style={path === "/" ? { color: "var(--normal-black)" } : {}}
          >
            主页
          </div>
        </Link>
        <div onMouseOver={() => { setSubMenu('department') }} onMouseLeave={() => { setSubMenu(null) }}>
          <div className={styles.item} style={path.split('/').includes('departments') ? { color: "var(--normal-black)" } : {}}>部门介绍</div>
          <div className={styles.subMenu} style={{ visibility: subMenu === 'department' ? 'visible' : 'hidden', opacity: subMenu === 'department' ? 1 : 0 }}>
            <Link href="/departments/technology" scroll={false}>
              <div className={styles.item} style={path === "/departments/technology" ? { color: "var(--normal-black)" } : {}}>技术类</div>
            </Link>
            <Link href="/departments/construction" scroll={false}>
              <div className={styles.item} style={path === "/departments/construction" ? { color: "var(--normal-black)" } : {}}>建设类</div>
            </Link>
          </div>
        </div>
        <Link href="/activities" scroll={false}>
          <div className={styles.item}>活动介绍</div>
        </Link>
        <Link href="/join" scroll={false}>
          <div className={styles.item}>加入我们</div>
        </Link>
      </div>
      <div className={`${styles.mobileMenuIcon} ${collapse ? styles.show : ''}`} onClick={() => {
        setCollapse(prev => { return !prev })
        console.log(collapse)
      }}></div>
      <div className={`${styles.mobileMenu} ${collapse ? styles.show : ''}`}>
        <Link href="/" scroll={false}>
          <div
            className={styles.item}
            style={path === "/" ? { color: "var(--normal-black)" } : {}}
          >
            主页
          </div>
        </Link>
        <div className={styles.subItem}>
          <div className={styles.item} onClick={(e) => { setSubMenu(prev => prev ? null : 'department'); }} style={path.split('/').includes('departments') ? { color: "var(--normal-black)" } : {}} >部门介绍</div>
          <div className={styles.subMenu} style={{ gridTemplateRows: subMenu === 'department' ? '1fr 1fr' : '0fr 0fr', minHeight: '0px' }}>
            <Link className={styles.item} href="/departments/technology" scroll={false}>
              <div className={styles.item} style={path === "/departments/technology" ? { color: "var(--normal-black)" } : {}}>技术类</div>
            </Link>
            <Link className={styles.item} href="/departments/construction" scroll={false}>
              <div className={styles.item} style={path === "/departments/construction" ? { color: "var(--normal-black)" } : {}}>建设类</div>
            </Link>
          </div>
        </div>
        <Link href="/activities" scroll={false}>
          <div className={styles.item}>活动介绍</div>
        </Link>
        <Link href="/join" scroll={false}>
          <div className={styles.item}>加入我们</div>
        </Link>
      </div>
      <Link className={styles.userOptions} href="https://link.sast.fun" scroll={false}>
        Login with SAST Link
        <Image src='/avatar.png' alt='avatar' width={20} height={20} />
      </Link>
    </div>
  );
}

export default Header;
