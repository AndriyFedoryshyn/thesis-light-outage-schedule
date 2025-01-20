"use client";

import { useState } from "react";

import { AlertBanner } from "@/components/modules/AlertBanner/AlertBanner";
import { Section } from "@/components/ui/Section/Section";
import { ButtonChart } from "@/components/modules/ButtonsChart/ButtonsChart";
import { SettlementsList } from "@/components/modules/SettlementsList/SettlementsList";

import styles from "@/styles/pages/Home.module.scss";
import { Header } from "@/components/modules/Header/Header";
import { useFetch } from "@/hooks/useFetch";
import { Areas } from "@/types/AreasType";

export const HomeClient = () => {
  const { data } = useFetch<Areas>({
    url: "/api/locations.json",
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  const settlements: Areas = data || [];

  const handleSearch = (searchTerm: string) => {
    setSearchQuery(searchTerm);
  };

  return (
    <>
      <Header onSearch={handleSearch} settlements={settlements} />
      <Section className={styles["home"]}>
        <AlertBanner />
        <ButtonChart />
        <SettlementsList data={data as Areas} searchQuery={searchQuery} />
      </Section>
    </>
  );
};
