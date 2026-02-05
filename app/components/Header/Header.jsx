import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerContent}>
        <Link href="/">talently</Link>

        <nav>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>

            <li>
              <Link href="/">Roles</Link>
            </li>

            <li>
              <Link href="/">Hiring</Link>
            </li>

            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </nav>

        <button className={styles.darkBtn}>Get in touch</button>
      </div>
    </header>
  );
}
