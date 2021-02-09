import { PHOTOS as photos } from "resources";
import { Photo } from "types";

export const PHOTOS: Photo[] = Object.values(photos.GIGS).flat();
