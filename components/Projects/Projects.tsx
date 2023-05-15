import React from "react";

// styles
import styles from './Projects.module.scss';

// bootstrap
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

// next
import Link from "next/link";
import Image from "next/image";

// assets
import fitcher from '../../assets/fitcher.png';
import wikibet from '../../assets/wikibet.png';

// icons
import { GoLinkExternal } from 'react-icons/go';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SlFolder } from 'react-icons/sl';

const Projects = () => {

  return (
    <div className={styles.projectsWrapper} id="projects">
      <div className={styles.tabsWrapper}>
        <h3>Companies and Projects</h3>
        <Tabs
          defaultActiveKey="lioneve"
          id="companies-and-projects"
          className="mb-3"
        >
          <Tab tabClassName={styles.tab} eventKey="lioneve" title="Lioneve Media">
            <div className={styles.tabWrapper}>
              <div className={styles.textWrapper}>
                <h4>
                  Frontend Developer
                  <span>
                    &nbsp;@&nbsp;Lioneve Media
                  </span>
                </h4>
                <div className={styles.linksWrapper}>
                  <Link href='https://lionevemedia.com/' target="blank">
                    <GoLinkExternal />
                  </Link>
                  <Link href='https://www.linkedin.com/company/lioneve/' target="blank">
                    <BsLinkedin />
                  </Link>
                </div>
                <p>March 2021 - January 2022 & March 2022 - April 2023</p>
                <ul className={styles.list}>
                  <li>
                    Developing websites using HTML, CSS, and JS stack with Bootstrap
                  </li>
                  <li>
                    Developing websites using WordPress content management system
                  </li>
                  <li>
                    SEO for WordPress websites using tools like Yoast with Ahrefs and Semrush analytics
                  </li>
                  <li>
                    Worked on a web application called <span>Fitcher</span> with React, Typescript, Next, Redux, and SCSS using software like Jira,
                    Bitbucket, Vercel, and Figma
                  </li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <div>
                  <Link href='http://fitcher.com/' target="blank">
                    <Image src={fitcher} alt="fitcher" />
                  </Link>
                </div>
              </div>
            </div>
          </Tab>
          <Tab tabClassName={styles.tab} eventKey="sigma" title="SiGMA">
            <div className={styles.tabWrapper}>
              <div className={styles.textWrapper}>
                <h4>
                  Frontend Developer
                  <span>
                    &nbsp;@&nbsp;SiGMA
                  </span>
                </h4>
                <div className={styles.linksWrapper}>
                  <Link href='https://sigma.world/' target="blank">
                    <GoLinkExternal />
                  </Link>
                  <Link href='https://www.linkedin.com/company/sigma-world/' target="blank">
                    <BsLinkedin />
                  </Link>
                </div>
                <p>January 2022 - February 2022</p>
                <ul className={styles.list}>
                  <li>
                    Worked on online casino called <span>Wikibet</span> using React, Typescript, Next, Redux, and Styled Components stack
                  </li>
                  <li>
                    Also, Figma and GitHub were used for this project
                  </li>
                  <li>
                    Building WordPress websites using various themes and plugins
                  </li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <div>
                  <Link href='https://www.wikibet.com/' target="blank">
                    <Image src={wikibet} alt="fitcher" />
                  </Link>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
        <div className={styles.personalProjectsWrapper}>
          <h4>Personal Projects</h4>
          <div className={styles.personalProjects}>
            <div className={styles.cardWrapper}>
              <Card style={{
                width: '90%',
                backgroundColor: '#112240',
                padding: '1rem',
                marginBottom: '2rem'
              }}>
                <Card.Header style={{
                  borderBottom: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent'
                }}>
                  <SlFolder />
                  <div className={styles.iconsWrapper}>
                    <Link href='https://aesthetic-salmiakki-d3b9c5.netlify.app/' target="blank">
                      <GoLinkExternal />
                    </Link>
                    <Link href='https://github.com/maccachino/Salestrekker' target="blank">
                      <BsGithub />
                    </Link>
                  </div>
                </Card.Header>
                <Card.Body style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around'
                }}>
                  <h5>
                    Salestrekker
                  </h5>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                  </Card.Text>
                  <Card.Footer style={{
                    borderTop: 'none',
                    padding: '1rem 0',
                    display: 'flex',
                    backgroundColor: 'transparent'
                  }}>
                    <span>React</span>
                    <span>Sass</span>
                    <span>Bootstrap</span>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
            <div className={styles.cardWrapper}>
              <Card style={{
                width: '90%',
                backgroundColor: '#112240',
                padding: '1rem',
                marginBottom: '2rem',
                display: 'flex',
                justifySelf: 'center'
              }}>
                <Card.Header style={{
                  borderBottom: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent'
                }}>
                  <SlFolder />
                  <div className={styles.iconsWrapper}>
                    <Link href='https://gilded-sable-40666f.netlify.app/' target="blank">
                      <GoLinkExternal />
                    </Link>
                    <Link href='https://github.com/maccachino/Shop-Practice' target="blank">
                      <BsGithub />
                    </Link>
                  </div>
                </Card.Header>
                <Card.Body style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around'
                }}>
                  <h5>
                    Shop
                  </h5>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&apos;s content.
                  </Card.Text>
                  <Card.Footer style={{
                    borderTop: 'none',
                    padding: '1rem 0',
                    display: 'flex',
                    backgroundColor: 'transparent'
                  }}>
                    <span>HTML</span>
                    <span>Sass</span>
                    <span>Bootstrap</span>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
