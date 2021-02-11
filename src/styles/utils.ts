import { FREE_IMAGE_HOST_URL_PREFIX } from "config";
import { Photo } from "types";

export const getTwoColorDiagonal = ([color1, color2]: [
  string,
  string
]): string => `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`;

export const constructFreeImageHostUrl = (freeimagehostId: string): string =>
  FREE_IMAGE_HOST_URL_PREFIX + freeimagehostId + ".jpg";

export const getBackgoundImageUrl = ({ freeimagehostId }: Photo): string =>
  `url("${constructFreeImageHostUrl(freeimagehostId)}")`;
