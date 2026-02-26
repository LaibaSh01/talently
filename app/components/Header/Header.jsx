"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Button from "../ui/Button/Button";
import Plus from "@/public/icons/Plus";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">talently</Link>

        <nav>
          <ul>
            <li><Link href="#process">Process</Link></li>
            <li><Link href="#recruiting">Recruiting</Link></li>
            <li><Link href="#roles">Roles</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="#recruiters">Recruiters</Link></li>
          </ul>
        </nav>

        <Button>Get in touch</Button>

        {/* Mobile Toggle */}
        <div
          className={`${styles.menuToggle} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Plus />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li><Link href="#process" onClick={handleCloseMenu}>Process</Link></li>
          <li><Link href="#recruiting" onClick={handleCloseMenu}>Recruiting</Link></li>
          <li><Link href="#roles" onClick={handleCloseMenu}>Roles</Link></li>
          <li><Link href="#testimonials" onClick={handleCloseMenu}>Testimonials</Link></li>
          <li><Link href="#recruiters" onClick={handleCloseMenu}>Recruiters</Link></li>
        </ul>

        <Button onClick={handleCloseMenu}>Get in touch</Button>
      </div>
    </header>
  );
}