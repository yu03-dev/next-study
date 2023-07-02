import Image from "next/image";
import styles from "./Description.module.css";
import { ReactNode } from "react";

export function Description(props: { children: ReactNode }) {
  return (
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}
