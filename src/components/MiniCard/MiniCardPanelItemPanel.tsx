import React from "react";

import { YouTubeVideo } from "../YouTubeVideo";

export const MiniCardPanelItemPanel: React.FC<IMiniCardPanelItem> = ({
  video
}) => {
  if (!video) return null;

  return <div>{video && <YouTubeVideo {...video} marginTop="5px" />}</div>;
};
