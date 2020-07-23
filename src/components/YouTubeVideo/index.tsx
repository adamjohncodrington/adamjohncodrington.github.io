import React from "react";
import styled from "styled-components";

export const StyledVideoContainer = styled.div`
  margin-top: 5px;
`;

export const YouTubeVideo: React.FC<IVideo> = ({ youtubeId, quality }) => {
  const urlVideoQuality: string | undefined =
    quality === "720p" ? "VQ=HD720" : "1080p" ? "VQ=HD1080" : undefined;

  const urlSuffix: string | undefined = urlVideoQuality
    ? "?" + urlVideoQuality
    : undefined;

  const src: string = "https://www.youtube.com/embed/" + youtubeId + urlSuffix;

  return (
    <StyledVideoContainer>
      <iframe
        title={youtubeId}
        width="100%"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </StyledVideoContainer>
  );
};
