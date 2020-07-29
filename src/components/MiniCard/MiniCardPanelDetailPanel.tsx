import React from "react";

import { YouTubeVideo } from "../YouTubeVideo";

export const MiniCardPanelDetailPanel: React.FC<IMiniCardPanelDetail> = ({
  video
}) => {
  if (!video) return null;

  return <div>{video && <YouTubeVideo {...video} marginTop="5px" />}</div>;
};
