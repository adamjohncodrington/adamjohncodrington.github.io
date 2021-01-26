import { POLE_ROUTINES as DATA } from "data-raw";

export const IMPROVISATION: PoleRoutine[] = DATA.filter(
  ({ category }: PoleRoutine): boolean =>
    category === "contemporary-improv" || category === "exotic-improv"
);

export const EXOTIC: PoleRoutine[] = DATA.filter(
  ({ category }: PoleRoutine): boolean => category === "exotic-class"
);

export const CONTEMPORARY: PoleRoutine[] = DATA.filter(
  ({ category }: PoleRoutine): boolean => category === "contemporary-class"
);

export const QUARANTINE: PoleRoutine[] = DATA.filter(
  ({ category }: PoleRoutine): boolean => category === "quarantine"
);

export const SHOWCASE: PoleRoutine[] = DATA.filter(
  ({ category }: PoleRoutine): boolean => category === "showcase"
);
