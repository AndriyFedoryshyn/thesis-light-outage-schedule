import { type FC } from "react";

import { Div } from "@/components/ui/Div/Div";

import { Heading } from "@/components/ui/Heading/Heading";
import { FooterSocial } from "./FooterSocial";

import { informationList } from "@/static/informationList";

import styles from "./Footer.module.scss";

export const FooterInformation: FC = () => {
  return (
    <Div className={styles["footerInformation"]}>
      <Heading level="h4" className={styles["footerInformationHeading"]}>
        Інформація та підтримка
      </Heading>

      <ul
        className={styles["footerInformationList"]}
        role="list"
        aria-labelledby="footer-information-list"
      >
        {informationList.map((listItem) => (
          <li
            key={listItem.id}
            className={styles["footerInformationListItem"]}
            tabIndex={0}
            role="listitem"
            aria-label={listItem.title}
          >
            {listItem.title}
          </li>
        ))}
      </ul>

      <FooterSocial />
    </Div>
  );
};
