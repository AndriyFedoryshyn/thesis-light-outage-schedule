"use client";

import { useRef, useEffect, type FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/ui/Heading/Heading";

import styles from "./AlertBanner.module.scss";

export const AlertBanner: FC = () => {
  const alertRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    alertRef.current?.focus();
  }, []);

  return (
    <div
      className={styles["alertBanner"]}
      ref={alertRef}
      role="alert"
      tabIndex={-1}
      aria-live="assertive"
    >
      <Image
        className={styles["alertBannerIcon"]}
        src={"/icons/alert_icon.svg"}
        alt="Alert Icon"
        priority
        role="image"
        aria-hidden={true}
        width={8}
        height={32}
      />

      <Heading level="h2" className={styles["alertBannerHeading"]}>
        УВАГА! Через ракетну атаку і пошкодження об&apos;єктів інфраструктури в
        області застосовано аварійні та превентивні відключення. Актуальну
        інформацію можна{" "}
        <Link
          href={"/#"}
          className={styles["alertBannerMoreLink"]}
          tabIndex={0}
          aria-label="Дізнатися актуальну інформацію тут"
        >
          дізнатися ТУТ
        </Link>
        .
      </Heading>
    </div>
  );
};
