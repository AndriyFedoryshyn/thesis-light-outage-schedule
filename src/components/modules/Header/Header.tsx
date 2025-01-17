import { type FC } from "react";

import Image from "next/image";

import { HeaderForm } from "./HeaderForm";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles["header"]} role="banner">
      <div className={styles["headerContainer"]}>
        <div className={styles["headerContainerRow"]}>
          <div
            className={styles["headerLogo"]}
            role="img"
            aria-label="Логотип компанії Energy-UA"
            data-role="Header Logo"
            tabIndex={0}
          >
            <Image
              className={styles["headerLogoIcon"]}
              src={"/icons/energy_logo.svg"}
              alt="Логотип компанії Energy-UA"
              width={55}
              height={55}
              priority
            />
            <div className={styles["headerLogoHeadings"]}>
              <h4 className={styles["headerLogoHeading"]}>Energy-UA</h4>
              <h5 className={styles["headerLogoSubheading"]}>
                Графіки відключень
              </h5>
            </div>
          </div>

          <div className={styles["headerLocation"]} tabIndex={0}>
            <Image
              src={"/icons/location_logo.svg"}
              className={styles["headerLocationIcon"]}
              alt="Логотип локації"
              width={15}
              height={15}
              priority
            />
            <h5 className={styles["headerLocationMark"]}>Львівська обл.</h5>
          </div>
        </div>
      </div>

      <div className={styles["headerMainHeadingContainer"]}>
        <h1
          className={styles["headerMainHeading"]}
          aria-live="polite"
          tabIndex={0}
        >
          Графік відключення електроенергії у Львівській області
        </h1>

        <HeaderForm />
      </div>
    </header>
  );
};
