import React from "react";

// styles
import styles from './Contact.module.scss';

// next
import Link from "next/link";

// components
import Button from "../Button/Button";

const Contact = () => {

  return (
    <div className={styles.contactWrapper} id="contact">
      <div className={styles.contact}>
        <h3>Get In Touch</h3>
        <p>
          Although I&apos;m not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <Link href='mailto:maccadroid01@gmail.com' target="blank">
          <Button>Email</Button>
        </Link>
      </div>
      <div className={styles.footer}>
        <p>Designed & Bulit by Matija Petrovic</p>
      </div>
    </div>
  );
};

export default Contact;
