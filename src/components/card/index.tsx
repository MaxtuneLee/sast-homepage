import React from "react";
import styles from "@/styles/Card.module.scss";
import { card } from "@/types/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Card(props: card) {
  return (
    <motion.div
      initial={{
        scale: 1,
        x: 0,
        y: 0,
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      }}
      whileHover={{
        scale: 1.001,
        x: 3,
        y: -3,
        boxShadow: "-3px 3px 0px 0px rgba(0,0,0,1)",
        transition: {
          duration: 0.2,
          type: "spring",
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      style={{ borderRadius: "10px" }}
    >
      <div className={styles.card}>
        <div className={styles.head}>
          <div className={styles.cardIcon}>
            <Image
              src={props.icon}
              alt="department icon"
              width={65}
              height={65}
            />
          </div>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
        <Link href={props.link}>
          <div className={styles.link} style={{ color: props.linkColor }}>
            {props.linkText}
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Card;
