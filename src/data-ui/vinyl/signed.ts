import { VINYL_COLLECTION as DATA } from "data-raw";

export const SIGNED: Vinyl[] = DATA.filter(
  ({ signed }: Vinyl): boolean => signed
);
