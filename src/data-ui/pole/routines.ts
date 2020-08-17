import { POLE_ROUTINES as DATA } from "data-raw";

export const IMPROVISATION: IPoleRoutine[] = DATA.filter(
  ({ category }: IPoleRoutine): boolean =>
    category === "contemporary-improv" || category === "exotic-improv"
);

export const EXOTIC: IPoleRoutine[] = DATA.filter(
  ({ category }: IPoleRoutine): boolean => category === "exotic-class"
);

export const CONTEMPORARY: IPoleRoutine[] = DATA.filter(
  ({ category }: IPoleRoutine): boolean => category === "contemporary-class"
);

export const QUARANTINE: IPoleRoutine[] = DATA.filter(
  ({ category }: IPoleRoutine): boolean => category === "quarantine"
);

export const SHOWCASE: IPoleRoutine[] = DATA.filter(
  ({ category }: IPoleRoutine): boolean => category === "showcase"
);
