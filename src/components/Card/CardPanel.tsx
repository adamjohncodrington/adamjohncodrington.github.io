import React, { FC } from "react";

import { PhotoGrid } from "../PhotoGrid";
import { YouTubeVideo } from "../YouTubeVideo";

export const CardPanel: FC<ICard> = ({ video, photos }) => (
  <>
    {photos && <PhotoGrid photos={photos} />}
    {video && <YouTubeVideo {...video} marginTop="10px" />}
  </>
);
