import React from "react";
import styled from "styled-components";

import { CardTitle, CardSubtitle } from "primitives";
import { getDatesText, moveTheSuffixToPrefix } from "utils";

import { Disclosure } from "../Disclosure";
import { YouTubeVideo } from "../YouTubeVideo";

const VideoCardHeaderContainer = styled.div`
  *:not(:first-child) {
    margin-top: 5px;
  }
`;

const StyledDateText = styled.div`
  font-size: 75%;
`;

export const VideoCard: React.FC<IVideoCard> = ({
  title,
  subtitle,
  dates,
  ...video
}) => (
  <Disclosure
    Header={({ panelIsVisible }) => (
      <VideoCardHeaderContainer>
        <CardTitle bold={panelIsVisible}>
          {moveTheSuffixToPrefix(title)}
        </CardTitle>

        {subtitle && (
          <CardSubtitle bold={panelIsVisible}>{subtitle}</CardSubtitle>
        )}

        <StyledDateText>{getDatesText(dates)}</StyledDateText>
      </VideoCardHeaderContainer>
    )}
    Panel={() => <YouTubeVideo marginTop="10px" {...video} />}
  />
);
