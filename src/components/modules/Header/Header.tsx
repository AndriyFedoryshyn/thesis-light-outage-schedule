import { type FC } from "react";

import Image from "next/image";

import { HeaderForm } from "./HeaderForm";
import { Div } from "@/components/ui/Div/Div";
import { Heading } from "@/components/ui/Heading/Heading";

import styles from "./Header.module.scss";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";

export const Header: FC = () => {
  return (
    <header className={styles["header"]} role="banner">
      <Div className={styles["headerContainer"]}>
        <Div className={styles["headerContainerRow"]}>
          <Div
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
            <Div className={styles["headerLogoHeadings"]}>
              <Heading level="h4" className={styles["headerLogoHeading"]}>
                Energy-UA
              </Heading>
              <Heading level="h5" className={styles["headerLogoSubheading"]}>
                Графіки відключень
              </Heading>
            </Div>
          </Div>
          <Div className={styles["headerLocationThemeBlock"]}>
            <Div className={styles["headerLocation"]} tabIndex={0}>
              <Image
                src={"/icons/location_logo.svg"}
                className={styles["headerLocationIcon"]}
                alt="Логотип локації"
                width={15}
                height={15}
                priority
              />
              <h5 className={styles["headerLocationMark"]}>Львівська обл.</h5>
            </Div>
            <ThemeToggle />
          </Div>
        </Div>
      </Div>

      <Div className={styles["headerMainHeadingContainer"]}>
        <Heading
          level="h1"
          className={styles["headerMainHeading"]}
          aria-live="polite"
          tabIndex={0}
        >
          Графік відключення електроенергії у Львівській області
        </Heading>

        <HeaderForm />
      </Div>
    </header>
  );
};
