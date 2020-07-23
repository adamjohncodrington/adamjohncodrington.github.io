import React from "react";
import styled from "styled-components";

import { Li } from "primitives";
import { getDatesText } from "utils";

import { CardTitleBold } from "../styles";
import { Disclosure } from "../Disclosure";
import { YouTubeVideo } from "../YouTubeVideo";

const VideoCardHeaderContainer = styled.div`
  *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const VideoCard: React.FC<IVideoCard> = ({ title, dates, ...video }) => (
  <Disclosure
    Header={() => (
      <VideoCardHeaderContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <div>{getDatesText(dates)}</div>
      </VideoCardHeaderContainer>
    )}
    Panel={<YouTubeVideo marginTop="5px" {...video} />}
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
