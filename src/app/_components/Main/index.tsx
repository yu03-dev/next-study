"use client";
import { useReduce } from "@/app/_hooks/useReduce";
import { Description } from "../Description";
import { Links } from "../Links";
import { Title } from "../Title";
import styles from "./Main.module.css";

export type ITEM = {
  href: string;
  title: string;
  description: string;
};

const ITEMS: ITEM[] = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Explore the Next.js 13 playground.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Main(props: { page: string }) {
  const { links, handleReduce } = useReduce(ITEMS);
  return (
    <div className={styles.main}>
      <Description>
        <code className={styles.code}>src/app/page.tsx</code>
      </Description>
      <Title page={props.page} handleReduce={handleReduce} />
      <Links items={links} />
    </div>
  );
}
