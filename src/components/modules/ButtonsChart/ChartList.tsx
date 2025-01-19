"use client";

import { type FC } from "react";

import { ButtonChart, ButtonsChart } from "@/types/ButtonsChartType";

interface ChartListProps {
  classNames: {
    list: string;
    listItem: string;
    button: string;
    numberOfGroup: string;
  };
  list: ButtonsChart;
}

export const ChartList: FC<ChartListProps> = ({ classNames, list }) => {
  const handleKeyDown = (event: React.KeyboardEvent, group: string) => {
    if (event.key === "Enter" || event.key === "") {
      event.preventDefault();
      alert(`Navigating to group: ${group}`);
    }
  };

  return (
    <ul className={classNames.list}>
      {list.map((listItem: ButtonChart) => (
        <li key={listItem.id} className={classNames.listItem} role="listitem">
          <button
            title={`Група ${listItem.numberOfGroup}`}
            aria-label={`Перейти до графіка групи ${listItem.group}`}
            className={classNames.button}
            onKeyDown={(e) => handleKeyDown(e, listItem.group)}
          >
            {listItem.group}{" "}
            <span className={classNames.numberOfGroup} aria-hidden="true">
              {listItem.numberOfGroup}
            </span>{" "}
          </button>
        </li>
      ))}
    </ul>
  );
};
