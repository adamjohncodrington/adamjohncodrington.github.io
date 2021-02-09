import { VINYL_COLLECTION as DATA } from "data-raw";
import { Vinyl } from "types";

export const GIFTS: Vinyl[] = DATA.filter(({ gift }: Vinyl): boolean => !!gift);
