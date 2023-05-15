import React, { ReactNode } from "react";

// next
import Link from "next/link";

// styles
import styles from './Button.module.scss';

interface Props {
  children?: ReactNode;
}

const Button = ({ children }: Props) => {

  return (
    <div className={styles.buttonWrapper} id="home">
      <button>
        {children}
      </button>
    </div>
  );
};

export default Button;
