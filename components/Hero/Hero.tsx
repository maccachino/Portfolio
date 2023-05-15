import React from "react";

// styles
import styles from './Hero.module.scss';

// next
import Link from "next/link";

// components
import Button from "../Button/Button";

const Hero = () => {

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.textWrapper}>
        <span>Hi, my name is</span>
        <h1>
          Matija Petrovic.
          <br />
          <span>
            I am frontend web developer.
          </span>
        </h1>
        <p>
          Talented and ambitious Frontend Web Developer with experience in React projects since January 2022.
          Team player who will put project&apos;s and team&apos;s needs in the first place.
        </p>
        <Link href='https://exquisite-hotteok-429e72.netlify.app/' target="blank">
          <Button>Resume</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
