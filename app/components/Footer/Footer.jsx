import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return <footer className={`${styles.footer}`}>
    <div className="container">
      <div className={styles.footerContent}>
        <div className={styles.mainContent}>
          <Link href="/">talently</Link>
          <div className={styles.linksGrid}>
               <ul>
            <li>
              <Link href="#process">Process</Link>
            </li>

            <li>
              <Link href="#roles">Roles</Link>
            </li>

            <li>
              <Link href="#recruiters">Recruiters</Link>
            </li>
          </ul>

           <ul>
            <li>
              <Link href="/">Contact</Link>
            </li>

            <li>
              <Link href="/">Blog</Link>
            </li>

            <li>
              <Link href="/">Terms</Link>
            </li>
          </ul>

           <ul>
            <li>
              <Link href="/">X (Twitter)</Link>
            </li>

            <li>
              <Link href="/">Instagram</Link>
            </li>

            <li>
              <Link href="/">LinkedIn</Link>
            </li>
          </ul>
          </div>
        </div>

       <p>© 2026 Inometic. All rights reserved.</p>

      </div>
    </div>

    <div className={styles.footerGlow}></div>
  </footer>;
}
