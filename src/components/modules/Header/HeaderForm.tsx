"use client";

import { ChangeEvent, useState, type FC } from "react";

import styles from "./Header.module.scss";

type Search = string;

export const HeaderForm: FC = () => {
  const [search, setSearch] = useState<Search>("");

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className={styles["headerForm"]}
      aria-labelledby="searchForm"
    >
      <label htmlFor="searchInput" className={styles["headerFormSerachLabel"]}>
        Введіть населений пункт для пошуку
      </label>
      <input
        id="searchInput"
        className={styles["headerFormSearch"]}
        value={search}
        onChange={handleSearchChange}
        type="text"
        placeholder="Населений пункт"
        aria-label="Населений пункт для пошуку"
        aria-required="true"
        tabIndex={0}
      />
    </form>
  );
};
