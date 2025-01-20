"use client";

import { useState, type FC } from "react";

import { Section } from "@/components/ui/Section/Section";
import { Div } from "@/components/ui/Div/Div";
import { Heading } from "@/components/ui/Heading/Heading";
import { alphabet } from "@/static/alphabet";

import { Areas } from "@/types/AreasType";

import styles from "./SettlementsList.module.scss";

interface SettlementsListProps {
  searchQuery: string;
  data: Areas;
}

export const SettlementsList: FC<SettlementsListProps> = ({
  searchQuery,
  data,
}) => {
  const [selectedLetter, setSelectedLetter] = useState<string>("А");

  const filteredData = data
    ?.filter((area) => {
      const matchesLetter = area.name.uk
        .toLowerCase()
        .startsWith(selectedLetter.toLowerCase());
      const matchesSearch = area.name.uk
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesLetter && matchesSearch;
    })
    .sort((a, b) => a.name.uk.localeCompare(b.name.uk));

  return (
    <Section className={styles["settlementsList"]}>
      <Div className={styles["settlementsListContainer"]}>
        <Div className={styles["settlementsListInfo"]}>
          <Heading level="h2" className={styles["settlementsListHeading"]}>
            Перелік населених пунктів
          </Heading>
          <Div
            className={styles["settlementsListAlphabet"]}
            role="region"
            aria-labelledby="alphabet-filter"
          >
            {alphabet.map((letter) => (
              <button
                key={letter.id}
                className={styles["settlementsListAlphabetButton"]}
                onClick={() => setSelectedLetter(letter.letter)}
                aria-pressed={selectedLetter === letter.letter}
                aria-label={`Фільтрувати за літерою ${letter.letter}`}
              >
                {letter.letter}
              </button>
            ))}
          </Div>
        </Div>

        <ul
          className={styles["settlementsListAreas"]}
          role="list"
          aria-labelledby="settlements-list"
        >
          <span
            id="settlements-list"
            className={styles["settlementsListAlphabetLetter"]}
            aria-live="polite"
          >
            {selectedLetter}
          </span>
          {filteredData?.map((area) => (
            <li
              key={area.id}
              className={styles["settlementsListAreasItem"]}
              role="listitem"
            >
              <span>{area.name.uk}</span>
            </li>
          ))}
        </ul>
      </Div>
    </Section>
  );
};
