import React, { FC } from "react";
import styled, { css } from "styled-components";

interface I__MarginTop {
  marginTop?: string;
}

export const StyledVideoContainer = styled.div(
  ({ marginTop }: I__MarginTop) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `
);

interface IYouTubeVideo extends IVideo, I__MarginTop {
  className?: string;
}

export const YouTubeVideo: FC<IYouTubeVideo> = ({
  className,
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
    <StyledVideoContainer marginTop={marginTop} className={className}>
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
