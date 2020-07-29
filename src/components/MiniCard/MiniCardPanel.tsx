import React, { FC } from "react";

import { sortMiniCardPanelDetails } from "utils";

import { YouTubeVideo } from "../YouTubeVideo";

import { MiniCardPanelDetail } from "./MiniCardPanelDetail";
import { StyledOl } from "./styles";

export const MiniCardPanel: FC<IMiniCard> = ({ details, video }) =>
  video ? (
    <YouTubeVideo {...video} marginTop="5px" />
  ) : details ? (
    <StyledOl>
      {sortMiniCardPanelDetails(details).map(
        (detail: IMiniCardPanelDetail, i: number) => (
          <MiniCardPanelDetail
            key={i}
            index={details.length > 1 ? i + 1 : undefined}
            {...detail}
          />
        )
      )}
    </StyledOl>
  ) : null;
