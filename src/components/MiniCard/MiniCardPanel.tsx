import React, { FC } from "react";
import styled from "styled-components";

import { sortMiniCardPanelDetails } from "utils";

import { PhotoGrid } from "../PhotoGrid";
import { YouTubeVideo } from "../YouTubeVideo";

import { MiniCardPanelDetail } from "./MiniCardPanelDetail";
import { StyledOl } from "./styles";

const StyledPanelContainer = styled.div`
  > * {
    margin-top: 0.375rem;
    margin-bottom: 0.25rem;
  }
`;

export const MiniCardPanel: FC<MiniCardProps> = ({
  details,
  photos,
  video
}) => {
  if (video)
    return (
      <StyledPanelContainer>
        <YouTubeVideo {...video} />
      </StyledPanelContainer>
    );

  if (photos)
    return (
      <StyledPanelContainer>
        <PhotoGrid photos={photos} />
      </StyledPanelContainer>
    );

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
