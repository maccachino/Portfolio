import React, { useState } from "react";

// next
import Link from "next/link";

// styles
import styles from './Navigation.module.scss';

// icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

// components
import Button from "../Button/Button";

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className={styles.navWrapper} id="home">
      <Link href="#home" className={styles.logo}>M</Link>
      <div className={styles.menuIcon} onClick={handleShowNavbar}>
        <GiHamburgerMenu />
      </div>
      <div className={`${styles.nav} ${showNavbar && styles.active}`}>
        <div className={styles.linkWrapper}>
          <Link onClick={handleShowNavbar} href="#home">Home</Link>
          <Link onClick={handleShowNavbar} href="#about">About</Link>
          <Link onClick={handleShowNavbar} href="#projects">Projects</Link>
          <Link onClick={handleShowNavbar} href="#contact">Contact</Link>
        </div>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttons}>
            <Link href="https://github.com/maccachino" target="blank">
              <BsGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/matija-petrovi%C4%87-3b5830215/" target="blank">
              <BsLinkedin />
            </Link>
          </div>
          <Link href='https://exquisite-hotteok-429e72.netlify.app/' target="blank">
            <Button>Resume</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
