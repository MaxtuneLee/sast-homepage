import Link from 'next/link'
import styles from './index.module.scss'
import Image from 'next/image'
import { useRef } from 'react'
const Footer = () => {
    const year = useRef(new Date().getFullYear())
    return (
        <footer className={styles.footerWrap}>
            <div className={styles.footerBody}>
                <Image src={'/sast-white.png'} alt={'logo'} width={100} height={65} />
                <div className={styles.footerSection}>
                    <div className={styles.title}>SAST 服务</div>
                    <div className={styles.content}>
                        <div className={styles.link}><Link href={'https://link.sast.fun'}>Link</Link></div>
                        <div className={styles.link}><Link href={'https://oj.sast.fun'}>OnlineJudge</Link></div>
                        <div className={styles.link}><Link href={'https://evento.sast.fun'}>Evento</Link></div>
                        <div className={styles.link}><Link href={'https://approve.sast.fun'}>Approve</Link></div>
                        <div className={styles.link}><Link href={'https://freshcup.sast.fun'}>FreshCup</Link></div>
                        {/* <div className={styles.link}>AtSAST</div> */}
                    </div>
                </div>
                <div className={styles.footerSection}>
                    <div className={styles.title}>SAST 社区</div>
                    <div className={styles.content}>
                        <div className={styles.link}>GitHub</div>
                        <div className={styles.link}>FeiShu</div>
                        <div className={styles.link}>QQ</div>
                    </div>
                </div>
                <div className={styles.footerSection}>
                    <div className={styles.title}>联系我们</div>
                    <div className={styles.content}>
                        <div className={styles.item}>Email: <Link href={'mailto:sast@sast.fun'}>sast@sast.fun</Link></div>
                        <div className={styles.item}>地址: 南京市栖霞区文苑路9号南京邮电大学仙林校区大学生活动中心一楼青柚创新汇</div>
                    </div>
                </div>
            </div>
            <div className={styles.divide} />
            <div className={styles.bottom}>
                <div className={styles.item}>&copy; 1992-{year.current} SAST</div>
                <div className={styles.item}>Powered by SAST Software R&D Department</div>
            </div>
        </footer>
    )
}
export default Footer