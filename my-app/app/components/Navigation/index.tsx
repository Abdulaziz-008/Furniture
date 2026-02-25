"use client";
import { useState } from "react";
import styles from "./style.module.css";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        {/* Left Links */}
        <div className={styles.navLeft}>
          <ul className={menuOpen ? styles.active : ""}>
            <li>Furniture</li>
            <li>Why Feather</li>
            <li>Feather for Business</li>
          </ul>
        </div>

        {/* Right Links */}
        <div className={styles.navRight}>
          <ul className={menuOpen ? styles.active : ""}>
            <li>Check if We Deliver</li>
            <li>Search</li>
            <li>Account</li>
          </ul>
        </div>

        {/* Burger */}
        <div
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>
    </div>
  );
}