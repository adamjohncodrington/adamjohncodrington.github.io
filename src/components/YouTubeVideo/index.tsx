import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  margin-top: 10px;
`;

export const YouTubeVideo: React.FC<IYouTubeVideo> = ({ id, quality }) => {
  const URL_VIDEO_QUALITY: string | undefined =
    quality === "720p" ? "VQ=HD720" : "1080p" ? "VQ=HD1080" : undefined;

  const URL_SUFFIX: string | undefined = URL_VIDEO_QUALITY
    ? "?" + URL_VIDEO_QUALITY
    : undefined;

  const VIDEO_SRC: string = "https://www.youtube.com/embed/" + id + URL_SUFFIX;

  return (
    <VideoContainer data-test="video-container">
      <iframe
        title={id}
        width="100%"
        src={VIDEO_SRC}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};
