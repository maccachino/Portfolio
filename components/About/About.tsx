import React from "react";

// styles
import styles from './About.module.scss';

// next
import Image from "next/image";

// assets
import image from '../../assets/matija.jpeg';

// icons
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3, SiJavascript, SiTypescript, SiNextdotjs, SiRedux } from 'react-icons/si';
import { FaReact, FaSass } from 'react-icons/fa';

const About = () => {

  return (
    <div className={styles.aboutWrapper} id="about">
      <div className={styles.textWrapper}>
        <h3>About Me</h3>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <p>
              Hello there! I&apos;m Matija Petrovic, a passionate frontend web developer with
              over 2 and a half years of hands-on experience in crafting engaging
              and dynamic user experiences. My journey in the ever-evolving
              realm of web development has been nothing short of exhilarating.
            </p>
            <p>
              I thrive on turning imaginative concepts into tangible, pixel-perfect realities. With a strong foundation in HTML, CSS,
              and JavaScript, I specialize in building robust and responsive web applications. My toolkit includes cutting-edge
              technologies like React, Next.js, and Redux, enabling me to create seamless, interactive, and user-friendly interfaces.
            </p>
            <p>
              Throughout my professional journey, I&apos;ve had the privilege of working on diverse
              projects that have honed my skills and broadened my perspective.
            </p>
            <h3>Why Work With Me:</h3>
            <ul>
              <li>
                <strong>Collaboration:</strong> I value open communication and collaboration, believing that the best solutions emerge
                from a shared exchange of ideas.
              </li>
              <li> 
                <strong>Detail-Oriented:</strong> My keen eye for detail ensures that every line of code and every
                design element aligns seamlessly for a polished end product.
              </li>
              <li>
                <strong>Adaptability:</strong> In the dynamic world of web development, adaptability is key.
                I&apos;m always eager to embrace new challenges and expand my skill set.
              </li>
            </ul>
          </div>
          <Image src={image} alt="Matija Petrovic" />
        </div>
        <div className={styles.skillsWrapper}>
          <h4>Technologies I&apos;ve been working with</h4>
          <div className={styles.skills}>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <ImHtmlFive />
                  <p>HTML5</p>
                </div>
                <div className={styles.skillBack}>
                  <ImHtmlFive />
                  <p>HTML5</p>
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <SiCss3 />
                  <p>CSS3</p>
                </div>
                <div className={styles.skillBack}>
                  <SiCss3 />
                  <p>CSS3</p>
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <SiJavascript />
                  <p>JavaScript</p>
                </div>
                <div className={styles.skillBack}>
                  <SiJavascript />
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <SiTypescript />
                  <p>TypeScript</p>
                </div>
                <div className={styles.skillBack}>
                  <SiTypescript />
                  <p>TypeScript</p>
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <FaReact />
                  <p>React</p>
                </div>
                <div className={styles.skillBack}>
                  <FaReact />
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <SiNextdotjs />
                  <p>Next.js</p>
                </div>
                <div className={styles.skillBack}>
                  <SiNextdotjs />
                  <p>Next.js</p>
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <SiRedux />
                  <p>Redux</p>
                </div>
                <div className={styles.skillBack}>
                  <SiRedux />
                  <p>Redux</p>
                </div>
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.skillInner}>
                <div className={styles.skillFront}>
                  <FaSass />
                  <p>Sass</p>
                </div>
                <div className={styles.skillBack}>
                  <FaSass />
                  <p>Sass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
