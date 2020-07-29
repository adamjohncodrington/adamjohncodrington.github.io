import React, { FC } from "react";

import { YouTubeVideo } from "../YouTubeVideo";

import { MiniCardPanelDetail } from "./MiniCardPanelDetail";
import { StyledOl } from "./styles";

export const MiniCardPanel: FC<IMiniCard> = ({ details, video }) => {
  if (video) return <YouTubeVideo {...video} marginTop="5px" />;

  if (details)
    return (
      <StyledOl>
        {details.map((detail: IMiniCardPanelDetail, i: number) => (
          <MiniCardPanelDetail
            key={i}
            index={details.length > 1 ? i + 1 : undefined}
            {...detail}
          />
        ))}
      </StyledOl>
    );

  return null;
};
