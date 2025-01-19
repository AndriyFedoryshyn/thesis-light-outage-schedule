import { type FC } from "react";

import { Div } from "@/components/ui/Div/Div";
import { Heading } from "@/components/ui/Heading/Heading";

import { ChartList } from "./ChartList";
import { chartButtons } from "@/static/chartButtons";

import styles from "./ButtonsChart.module.scss";

const chartListClassNames = {
  list: styles["chartList"],
  listItem: styles["chartListItem"],
  button: styles["chartListItemButton"],
  numberOfGroup: styles["chartListItemNumberOfGroup"],
};

export const ButtonChart: FC = () => {
  return (
    <Div className={styles["buttonsChartBlock"]}>
      <Heading level="h2" className={styles["chartHeading"]}>
        Перейти до графіка за чергою
      </Heading>

      <ChartList classNames={chartListClassNames} list={chartButtons} />
    </Div>
  );
};
