"use client";

import { type FC } from "react";

import { ukraineRegions } from "@/static/regions";

import { Div } from "@/components/ui/Div/Div";
import { Heading } from "@/components/ui/Heading/Heading";

import styles from "./Footer.module.scss";
import { FooterInformation } from "./FooterInformation";

export const Footer: FC = () => {
  const handleKeyDown = (event: React.KeyboardEvent, regionName: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      alert(`Navigating to region: ${regionName}`);
    }
  };

  return (
    <footer className={styles["footer"]}>
      <Div className={styles["footerContainer"]}>
        <Div className={styles["footerRegionsList"]}>
          <Heading level="h3" className={styles["regionsListHeading"]}>
            Інші області
          </Heading>
          <ul className={styles["regionsList"]} role="list">
            {ukraineRegions.map((region) => (
              <li
                key={region.id}
                className={styles["regionsListItem"]}
                role="listitem"
              >
                <button
                  className={styles["regionsListButton"]}
                  aria-label={`Перейти до області ${region.name}`}
                  onKeyDown={(event) => handleKeyDown(event, region.name)}
                >
                  {region.name}
                </button>
              </li>
            ))}
          </ul>
        </Div>
        <FooterInformation />
      </Div>
    </footer>
  );
};
