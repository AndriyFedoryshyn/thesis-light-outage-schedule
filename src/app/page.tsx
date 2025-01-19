import { type FC } from "react";

import { AlertBanner } from "@/components/modules/AlertBanner/AlertBanner";
import { Section } from "@/components/ui/Section/Section";
import { ButtonChart } from "@/components/modules/ButtonsChart/ButtonsChart";

import styles from "@/styles/pages/Home.module.scss";

const App: FC = () => {
  return (
    <Section className={styles["home"]}>
      <AlertBanner />
      <ButtonChart />
    </Section>
  );
};

export default App;
