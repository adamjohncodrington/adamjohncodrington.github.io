import React, { FC } from "react";

import { MiniCardPanelItem } from "./MiniCardPanelItem";
import { StyledOl } from "./styles";

export const MiniCardPanel: FC<IMiniCard> = ({ details }) => {
  if (!details) return null;

  return (
    <StyledOl>
      {details.map((detail: IMiniCardPanelItem, index: number) => (
        <MiniCardPanelItem
          key={index}
          index={details.length > 1 ? index + 1 : undefined}
          {...detail}
        />
      ))}
    </StyledOl>
  );
};
