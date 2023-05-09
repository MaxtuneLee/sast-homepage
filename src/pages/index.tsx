import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import { JetBrainsMonoBold, JetBrainsMonoRegular } from "@/styles/fonts/fonts";
import TransitionLayout from "@/components/transitionLayout";
import { cta } from "@/types/cta";
import Slide from "@/components/slide";
import Card from "@/components/card";
import { RoughNotation } from "react-rough-notation";
import { useRef } from "react";
import { useInView } from "framer-motion";

const slidePages: cta[] = [
  {
    color: "#FFB422",
    title: "Igniting the thought.",
    description: "SAST 全新官网上线",
    action: "有什么新鲜功能  ￫",
    href: "/about",
    image:
      "https://aliyun.sastimg.mxte.cc/images/2023/05/06/_a96c5293-9d5a-4ccf-ae2a-fae32646d4ab0961070d1ee9e4e7.jpg",
  },
  {
    color: "#ccd4e3",
    title: "一个一个一个标题",
    description: "一个一个一个描述的问题",
    action: "了解更多",
    href: "/about",
    image:
      "https://aliyun.sastimg.mxte.cc/images/2022/10/02/D5766E4DBA6752DBED9223F157F68505.jpg",
  },
  {
    color: "#FFB422",
    title: "Igniting the thought.",
    description: "SAST 全新官网上线",
    action: "有什么新鲜功能  ￫",
    href: "/about",
    image:
      "https://aliyun.sastimg.mxte.cc/images/2023/05/06/_a96c5293-9d5a-4ccf-ae2a-fae32646d4ab0961070d1ee9e4e7.jpg",
  },
  {
    color: "#ccd4e3",
    title: "一个一个一个标题",
    description: "一个一个一个描述的问题",
    action: "了解更多",
    href: "/about",
    image:
      "https://aliyun.sastimg.mxte.cc/images/2022/10/02/D5766E4DBA6752DBED9223F157F68505.jpg",
  },
];

function Home() {
  const departmentTitleRef = useRef(null)
  const isInView = useInView(departmentTitleRef, { once: true })
  return (
    <>
      <TransitionLayout>
        <Head>
          <title>南京邮电大学大学生科学技术协会</title>
          <meta name="description" content="一个学生组织" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main}`}>
          <Header />
          <section id="top">
            <Slide pages={slidePages} />
          </section>
          <section id="intro" className={styles.intro}>
            <div className={styles.contentWrap}>
              <div className={styles.contentBox}>
                <div className={styles.head}>
                  <div
                    className={`${styles.title} ${JetBrainsMonoBold.className}`}
                  >
                    我们是谁？
                  </div>
                  <div
                    className={`${styles.subtitle} ${JetBrainsMonoBold.className}`}
                  >
                    Who we are
                  </div>
                </div>
                <div className={styles.content}>
                  南京邮电大学大学生科学技术协会（Students’ Association for
                  Science and
                  Technology），简称SAST，中文简称南邮校科协，成立于1992年。{" "}
                  <br />
                  它是在校团委指导下，依照国家法规和大学生规章制度，独立开展活动的学生科技文化及学术研究的组织，也是校团委直属的组织中唯一一个技术类的学生组织。南邮校科协现分为技术中心、办公中心、创新中心三大中心，其中创新中心下还设有CG爱好者协会、ERP协会、安全技术协会等九个直属社团，组织管理有序，机构设置严谨。南邮校科协本着学以致用的务实原则，结合我校的特点，广泛地开展各项具有学术性、知识性、实践性的科技创新活动，引领全校同学学习科学、热爱科学、拓宽视野、提高创新意识、深化专业知识、优化知识结构，培养复合型人才。历届校科协成员有很多凭借着优异的成绩被各类知名公司聘用、顶尖高校录取。
                  南京邮电大学大学生科学技术协会始终以“增强科技意识，活跃学术气氛，提高创新能力，培养科技人才”为目标，努力让更多的南邮学子在这里点燃梦想，成功启航！
                </div>
              </div>

            </div>
            <div className={`${styles.contentWrap} ${styles.data}`}>
              <Image
                src="/background_pattern_1.png"
                alt="pattern"
                className={`${styles.pattern}`}
                height={472}
                width={562}
              ></Image>
              <div
                className={`${styles.dataWrap} ${JetBrainsMonoBold.className}`}
              >
                <div className={styles.dataItem}>
                  <div className={styles.dataNumber}>
                    31<span className={styles.unit}>年</span>
                  </div>
                  <div
                    className={`${styles.dataDescription} ${JetBrainsMonoRegular.className}`}
                  >
                    梦始于1992年
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataNumber}>
                    362
                    <span className={styles.unit}>
                      m<sup>2</sup>
                    </span>
                  </div>
                  <div
                    className={`${styles.dataDescription} ${JetBrainsMonoRegular.className}`}
                  >
                    活动室空间
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataNumber}>
                    100<span className={styles.unit}>%</span>
                  </div>
                  <div
                    className={`${styles.dataDescription} ${JetBrainsMonoRegular.className}`}
                  >
                    毕业明确去向
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataNumber}>
                    40+<span className={styles.unit}>项</span>
                  </div>
                  <div
                    className={`${styles.dataDescription} ${JetBrainsMonoRegular.className}`}
                  >
                    承办科创比赛
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataNumber}>
                    200+<span className={styles.unit}>项</span>
                  </div>
                  <div
                    className={`${styles.dataDescription} ${JetBrainsMonoRegular.className}`}
                  >
                    成员获校级以上奖项
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataNumber}>
                    550+<span className={styles.unit}>人</span>
                  </div>
                  <div
                    className={`${styles.dataDescription} ${JetBrainsMonoRegular.className}`}
                  >
                    各部门总计人数
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="photo" className={styles.photo}>
            <div className={styles.title} style={JetBrainsMonoBold.style}>
              2021年会
            </div>
          </section>
          <section id="departments" className={styles.departments}>
            <div className={styles.contentWrap}>
              <div className={styles.contentBox}>
                <div className={styles.head}>
                  <div
                    className={`${styles.title} ${JetBrainsMonoBold.className}`}
                    ref={departmentTitleRef}
                  >
                    <RoughNotation type="box" color="orange" strokeWidth={5} show={isInView} animationDuration={2000} animationDelay={200}>
                      我们的部门
                    </RoughNotation>
                  </div>
                  <div
                    className={`${styles.subtitle} ${JetBrainsMonoBold.className}`}
                  >
                    Our Departments
                  </div>
                  <div>
                    在校科协，每个人都能找到属于自己的位置，你想从哪里
                    <RoughNotation type="highlight" color="rgba(0, 117, 255, 0.2)" strokeWidth={3} show={isInView} animationDuration={2000} animationDelay={1000}>
                      开始你的故事
                    </RoughNotation>呢？
                  </div>
                </div>
              </div>
              <div className={styles.departmentCardWrap}>
                <Card
                  icon="/icons/rnd.svg"
                  title="聚集源自于兴趣"
                  description="社团始于兴趣相投，南邮校科协始终坚持初心，将兴趣作为一直以来的驱动力。在南邮校科协的技术类部门，每一位同学都是因为共同的兴趣爱好或者相似的追求而聚集在一起。在这里，互相帮助、共同进步是一个不变的主题。开源平等、薪火相传是科协一直坚守不变的使命。"
                  link="/department/tech"
                  linkText="探索校科协技术类部门  ￫"
                  linkColor="#21a2e6"
                />
                <Card
                  icon="/icons/smile.svg"
                  title="互联网管理思维"
                  description="科协的建设和形象与管理类部门密不可分。在科协，管理类部门承载着三十届以来科协建设的点点滴滴。自由、开放、交流，这是贯穿在科协人骨子里的特质。在科协，我们剔除掉形式主义，归繁杂琐事于至简至善。高质高效，是我们最终期待的目的。"
                  link="/department/office"
                  linkText="探索校科协建设类部门  ￫"
                  linkColor="#d3217b"
                />
                <Card
                  icon="/icons/light_bulb.svg"
                  title="聚集源自于兴趣"
                  description="社团始于兴趣相投，南邮校科协始终坚持初心，将兴趣作为一直以来的驱动力。在南邮校科协的技术类部门，每一位同学都是因为共同的兴趣爱好或者相似的追求而聚集在一起。在这里，互相帮助、共同进步是一个不变的主题。开源平等、薪火相传是科协一直坚守不变的使命。"
                  link="/department/rnd"
                  linkText="探索校科协技术类部门  ￫"
                  linkColor="#ea9518"
                />
              </div>
            </div>
          </section>
        </main>
      </TransitionLayout>
    </>
  );
}

export default Home;
