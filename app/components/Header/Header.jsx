import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "../ui/Button/Button";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerContent}>
        <Link href="/">talently</Link>

        <nav>
          <ul>
            <li>
              <Link href="#process">Process</Link>
            </li>

            <li>
              <Link href="#recruiting">Recruiting</Link>
            </li>

            <li>
              <Link href="#roles">Roles</Link>
            </li>

            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>

            <li>
              <Link href="#recruiters">Recruiters</Link>
            </li>
          </ul>
        </nav>

        <Button>Get in touch</Button>
      </div>
    </header>
  );
}
