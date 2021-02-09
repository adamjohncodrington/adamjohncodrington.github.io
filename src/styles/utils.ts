import { FREE_IMAGE_HOST_URL_PREFIX } from "config";
import { Photo } from "types";

export const getTwoColorDiagonal = (color1: string, color2: string): string =>
  `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`;

export const getBackgoundImageUrl = (photo: Photo): string =>
  `url("${FREE_IMAGE_HOST_URL_PREFIX + photo.freeimagehostId}")`;
