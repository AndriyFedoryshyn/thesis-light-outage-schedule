"use client";

import { ChangeEvent, useState, type FC } from "react";

import styles from "./Header.module.scss";
import { Area } from "@/types/AreasType";
import { Div } from "@/components/ui/Div/Div";

interface HeaderFormProps {
  onSearch: (searchTerm: string) => void;
  settlements: Area[];
}

export const HeaderForm: FC<HeaderFormProps> = ({ onSearch, settlements }) => {
  const [search, setSearch] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Area[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);

    if (query.trim() === "") {
      setFilteredSuggestions([]);
      setNoResults(false);
      onSearch(query);
      return;
    }

    const filtered = settlements.filter((settlement) =>
      settlement.name.uk.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setNoResults(filtered.length === 0);
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles["headerForm"]}>
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

      {filteredSuggestions.length > 0 && (
        <ul className={styles["suggestionsDropdown"]}>
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className={styles["suggestionsItem"]}
              onClick={() => {
                setSearch(suggestion.name.uk);
                onSearch(suggestion.name.uk);
                setFilteredSuggestions([]);
                setNoResults(false);
              }}
            >
              {suggestion.name.uk}
            </li>
          ))}
        </ul>
      )}

      {noResults && (
        <Div className={styles["noResultsMessage"]}>Нічого не знайдено</Div>
      )}
    </form>
  );
};
