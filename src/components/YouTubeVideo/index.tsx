import React from "react";
import styled from "styled-components";

const StyledIFrame = styled.iframe`
  margin-top: 10px;
  width: 100%;
`;

export const YouTubeVideo: React.FC<IYouTubeVideo> = ({ youtubeId }) => (
  <StyledIFrame
    src={"https://www.youtube.com/embed/" + youtubeId}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
