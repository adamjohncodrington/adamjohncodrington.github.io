import React, { FC } from "react";

import { sortMiniCardPanelDetails } from "utils";

import { YouTubeVideo } from "../YouTubeVideo";

import { MiniCardPanelDetail } from "./MiniCardPanelDetail";
import { StyledOl } from "./styles";

export const MiniCardPanel: FC<IMiniCard> = ({ panelDetails, video }) =>
  video ? (
    <YouTubeVideo {...video} marginTop="5px" />
  ) : panelDetails ? (
    <StyledOl>
      {sortMiniCardPanelDetails(panelDetails).map(
        (detail: IMiniCardPanelDetail, i: number) => (
          <MiniCardPanelDetail
            key={i}
            index={panelDetails.length > 1 ? i + 1 : undefined}
            {...detail}
          />
        )
      )}
    </StyledOl>
  ) : null;
