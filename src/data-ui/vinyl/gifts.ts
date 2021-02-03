import { VINYL_COLLECTION as DATA } from "data-raw";

export const GIFTS: Vinyl[] = DATA.filter(({ gift }: Vinyl): boolean => !!gift);
