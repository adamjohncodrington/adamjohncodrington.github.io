import React, { FC } from "react";

import { sortMiniCardPanelDetails } from "utils";

import { PhotoGrid } from "../PhotoGrid";
import { YouTubeVideo } from "../YouTubeVideo";

import { MiniCardPanelDetail } from "./MiniCardPanelDetail";
import { StyledOl } from "./styles";

export const MiniCardPanel: FC<IMiniCard> = ({ details, photos, video }) => {
  if (video) return <YouTubeVideo {...video} marginTop="5px" />;
  if (photos) return <PhotoGrid photos={photos} />;
  if (details) {
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
