"use client";

import type { FC } from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
import styles from "./ThemeToggle.module.scss";

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <label htmlFor="theme" className={styles["theme"]}>
      <span className={styles["theme__toggle-wrap"]}>
        <input
          type="checkbox"
          className={styles["theme__toggle"]}
          id="theme"
          role="switch"
          name="theme"
          value="dark"
          checked={isDarkMode}
          onChange={toggleTheme}
          aria-checked={isDarkMode ? "true" : "false"}
          aria-label="Toggle dark mode"
          title={`
            ${isDarkMode ? "Вимкнути темну тему" : "Увімкнти темну тему"}
            `}
          tabIndex={0}
        />
        <span className={styles["theme__fill"]}></span>
        <span className={styles["theme__icon"]}>
          {[...Array(9)].map((_, index) => (
            <span key={index} className={styles["theme__icon-part"]}></span>
          ))}
        </span>
      </span>
    </label>
  );
};
