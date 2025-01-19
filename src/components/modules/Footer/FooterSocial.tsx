import { type FC } from "react";

import Image from "next/image";

import styles from "./Footer.module.scss";

export const FooterSocial: FC = () => {
  return (
    <ul
      className={styles["footerSocialList"]}
      role="list"
      aria-label="Social media links"
    >
      <li className={styles["footerSocialListItem"]}>
        <a
          href="https://facebook.com"
          aria-label="Visit our Facebook page"
          className={styles["footerSocialLink"]}
          tabIndex={0}
        >
          <Image
            src={"/icons/socialIcons/facebook.svg"}
            alt="Facebook Icon"
            width={32}
            height={32}
          />
        </a>
      </li>
      <li className={styles["footerSocialListItem"]}>
        <a
          href="https://twitter.com"
          aria-label="Visit our Twitter page"
          className={styles["footerSocialLink"]}
          tabIndex={0}
        >
          <Image
            src={"/icons/socialIcons/twitterx.svg"}
            alt="Twitter Icon"
            width={32}
            height={32}
          />
        </a>
      </li>
      <li className={styles["footerSocialListItem"]}>
        <a
          href="https://telegram.org"
          aria-label="Visit our Telegram channel"
          className={styles["footerSocialLink"]}
          tabIndex={0}
        >
          <Image
            src={"/icons/socialIcons/telegram.svg"}
            alt="Telegram Icon"
            width={32}
            height={32}
          />
        </a>
      </li>
    </ul>
  );
};
