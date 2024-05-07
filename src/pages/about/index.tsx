import Header from "@/components/header"
import TransitionLayout from "@/components/transitionLayout"
import Head from "next/head"
import styles from './About.module.scss'

const About = () => {
    return (
        <>
            <Head>
                <title>关于校科协</title>
            </Head>
            <TransitionLayout>
                <main className={styles.main}>
                    <Header />

                </main>
            </TransitionLayout>
        </>
    )
}

export default About