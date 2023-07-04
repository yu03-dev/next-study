import Link from "next/link";
import styles from "./Header.module.css";

type NavItem = {
  href: string;
  name: string;
};

const NavItems: NavItem[] = [
  { href: "/", name: "Index" },
  { href: "/about", name: "About" },
  { href: "/todo", name: "Todo" },
  { href: "/counter", name: "Counter" },
];

export function Header() {
  return (
    <header className={styles.header}>
      {NavItems.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <span className={styles.span}>{item.name}</span>
          </Link>
        );
      })}
    </header>
  );
}
