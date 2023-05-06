import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { ForwardedRef, forwardRef, useEffect } from 'react'
import PageTransition from '@/components/pageTransition'
import Slider from '@/components/slider'
import Link from 'next/link'
import Header from '@/components/header'
import { JetBrainsMonoBold } from '@/styles/fonts/fonts'

const Home = forwardRef(function Homepage(props: {}, ref: ForwardedRef<HTMLDivElement>) {
  useEffect(() => {
    console.log('u r in home now')
  }, [])
  return (
    <>
      <PageTransition ref={ref}>
        <Head>
          <title>南京邮电大学大学生科学技术协会</title>
          <meta name="description" content="一个学生组织" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main}`}>
          <Header />
          <section id='top'>
            <Slider color='#FFB422' title='Igniting the thought.' description='SAST 全新官网上线' action='有什么新鲜功能  ￫' image='https://aliyun.sastimg.mxte.cc/images/2023/05/06/_a96c5293-9d5a-4ccf-ae2a-fae32646d4ab0961070d1ee9e4e7.jpg' />
          </section>
          <section id='intro' className={styles.intro}>
            <div className={styles.contentWrap}>
              <div className={styles.head}>
                <div className={`${styles.title} ${JetBrainsMonoBold.className}`}>我们是谁？</div>
                <div className={`${styles.subtitle} ${JetBrainsMonoBold.className}`}>Who we are</div>
              </div>
              <div className={styles.content}>南京邮电大学大学生科学技术协会（Students’ Association for Science and Technology），简称SAST，中文简称南邮校科协，成立于1992年。 <br />
                它是在校团委指导下，依照国家法规和大学生规章制度，独立开展活动的学生科技文化及学术研究的组织，也是校团委直属的组织中唯一一个技术类的学生组织。南邮校科协现分为技术中心、办公中心、创新中心三大中心，其中创新中心下还设有CG爱好者协会、ERP协会、安全技术协会等九个直属社团，组织管理有序，机构设置严谨。南邮校科协本着学以致用的务实原则，结合我校的特点，广泛地开展各项具有学术性、知识性、实践性的科技创新活动，引领全校同学学习科学、热爱科学、拓宽视野、提高创新意识、深化专业知识、优化知识结构，培养复合型人才。历届校科协成员有很多凭借着优异的成绩被各类知名公司聘用、顶尖高校录取。 南京邮电大学大学生科学技术协会始终以“增强科技意识，活跃学术气氛，提高创新能力，培养科技人才”为目标，努力让更多的南邮学子在这里点燃梦想，成功启航！</div>
            </div>
            <div className={`${styles.contentWrap} ${styles.data}`}>
              <Image src='/background_pattern_1.png' alt='pattern' className={`${styles.pattern}`} height={472} width={562}></Image>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  )
})

export default Home