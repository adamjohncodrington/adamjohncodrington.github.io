import { VINYL_COLLECTION as DATA } from "data-raw";
import { Photo } from "types";

import { mapVinylToPhoto } from "./utils";

export const ARTWORK: Photo[] = DATA.map(mapVinylToPhoto);
