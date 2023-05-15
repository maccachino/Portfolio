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
              Hello! My name is Brittany and I enjoy creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes
              — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              <br />
              <br />
              Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency,
              a start-up, a huge corporation, and a student-led design studio.
              My main focus these days is building accessible, inclusive products and digital experiences at Upstatement
              for a variety of clients.
              <br />
              <br />
              I also recently launched a course that covers everything you need to build a web app with the Spotify API
              using Node & React.
              <br />
              <br />
            </p>
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
