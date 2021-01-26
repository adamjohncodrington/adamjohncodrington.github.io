import React, { FC } from "react";

import { YouTubeVideo } from "../YouTubeVideo";

export const MiniCardPanelDetailPanel: FC<MiniCardPanelDetailProps> = ({
  video
}) => {
  if (!video) return null;

  return <div>{video && <YouTubeVideo {...video} marginTop="5px" />}</div>;
};
