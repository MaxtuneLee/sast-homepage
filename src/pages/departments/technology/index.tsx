import Header from "@/components/header"
import TransitionLayout from "@/components/transitionLayout"
import Head from "next/head"
import styles from './index.module.scss'
import CTA from "@/components/CTA"

const Technology = () => {
    return (
        <>
            <Head>
                <title>技术类部门</title>
            </Head>
            <TransitionLayout>
                <main>
                    <Header />
                    <CTA title='技术类部门' description="聚集源于兴趣" color="#a6cee5" image='https://aliyun.sastimg.mxte.cc/images/2023/11/25/milad-fakurian-RI7l-rspNpY-unsplash7896d32417131c7b.md.jpg' />
                </main>
            </TransitionLayout>
        </>
    )
}
export default Technology