import React from "react";

// styles
import styles from './Sidebar.module.scss';

// next
import Link from "next/link";

// icons
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Sidebar = () => {

  return (
    <div className={styles.sidebarWrapper}>
      <Link href="https://github.com/maccachino" target="blank">
        <BsGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/matija-petrovi%C4%87-3b5830215/" target="blank">
        <BsLinkedin />
      </Link>
    </div>
  );
};

export default Sidebar;
