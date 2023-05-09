import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAnimate, useMotionValueEvent, useScroll } from "framer-motion";

function Header() {
  const [scope, animate] = useAnimate();
  const [scrolled, setScrolled] = useState(false);
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
  useEffect(() => {
    // animate(scope.current, { opacity: [0, 1] }, { duration: 0.5 });
  }, [scrolled]);
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
      <Image src="/sast_logo_black.png" alt="logo" width={67} height={42} />
      <div className={styles.menu}>
        <Link href="/" scroll={false}>
          <div
            className={styles.item}
            style={path === "/" ? { color: "var(--normal-black)" } : {}}
          >
            主页
          </div>
        </Link>
        <Link href="/departments" scroll={false}>
          <div className={styles.item}>部门介绍</div>
        </Link>
        <Link href="/activities" scroll={false}>
          <div className={styles.item}>活动介绍</div>
        </Link>
        <Link href="/join" scroll={false}>
          <div className={styles.item}>加入我们</div>
        </Link>
      </div>
      {/* <div className={styles.userOptions}>
        Login with SAST Link
        <Image src='/avatar.png' alt='avatar' width={58} height={58} />
      </div> */}
    </div>
  );
}

export default Header;
