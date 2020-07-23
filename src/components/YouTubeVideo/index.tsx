import React from "react";
import styled, { css } from "styled-components";

interface I_MarginTop {
  marginTop: string;
}

export const StyledVideoContainer = styled.div(
  ({ marginTop }: I_MarginTop) =>
    css`
      margin-top: ${marginTop};
    `
);

interface IYouTubeVideo extends IVideo {
  marginTop: string;
}

export const YouTubeVideo: React.FC<IYouTubeVideo> = ({
  youtubeId,
  quality,
  marginTop
}) => {
  const urlVideoQuality: string | undefined =
    quality === "720p" ? "VQ=HD720" : "1080p" ? "VQ=HD1080" : undefined;

  const urlSuffix: string | undefined = urlVideoQuality
    ? "?" + urlVideoQuality
    : undefined;

  const src: string = "https://www.youtube.com/embed/" + youtubeId + urlSuffix;

  return (
    <StyledVideoContainer marginTop={marginTop}>
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
