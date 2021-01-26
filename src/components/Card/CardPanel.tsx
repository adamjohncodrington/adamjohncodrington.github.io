import React, { FC } from "react";
import styled from "styled-components";

import { PhotoGrid } from "../PhotoGrid";
import { YouTubeVideo } from "../YouTubeVideo";

const StyledPanelContainer = styled.div`
  > * {
    margin-top: 0.625rem;
  }
`;

export const CardPanel: FC<CardProps> = ({ video, photos }) => (
  <StyledPanelContainer>
    {photos && <PhotoGrid photos={photos} />}
    {video && <YouTubeVideo {...video} />}
  </StyledPanelContainer>
);
