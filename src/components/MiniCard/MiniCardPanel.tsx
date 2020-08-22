import React, { FC } from "react";

import { sortMiniCardPanelDetails } from "utils";

import { PhotoGrid } from "../PhotoGrid";
import { YouTubeVideo } from "../YouTubeVideo";

import { MiniCardPanelDetail } from "./MiniCardPanelDetail";
import { StyledOl } from "./styles";

export const MiniCardPanel: FC<IMiniCard> = ({ details, video }) => {
  if (video) return <YouTubeVideo {...video} marginTop="5px" />;

  if (details) {
    if (details[0].photo)
      return (
        <PhotoGrid
          photos={details.map(
            ({ photo }: IMiniCardPanelDetail): IPhoto =>
              photo || { freeimagehostId: "" }
          )}
        />
      );

    return (
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
    );
  }

  return null;
};
