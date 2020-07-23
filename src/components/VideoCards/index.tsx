import React from "react";
import styled from "styled-components";

import { Li } from "primitives";
import { getDatesText } from "utils";

import { CardTitle } from "../styles";
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

export const VideoCard: React.FC<IVideoCard> = ({ title, dates, ...video }) => (
  <Disclosure
    Header={({ panelIsVisible }) => (
      <VideoCardHeaderContainer>
        <CardTitle bold={panelIsVisible}>{title}</CardTitle>
        <StyledDateText>{getDatesText(dates)}</StyledDateText>
      </VideoCardHeaderContainer>
    )}
    Panel={<YouTubeVideo marginTop="10px" {...video} />}
  />
);

export const VideoCards: React.FC<IVideoCards> = ({ videoCards }) => (
  <>
    {videoCards.map((videoCard: IVideoCard, index: number) => (
      <Li key={index}>
        <VideoCard {...videoCard} />
      </Li>
    ))}
  </>
);
