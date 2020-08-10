import { POLE_ROUTINES as DATA } from "data-raw";

export const IMPROVISATION: Array<IPoleRoutine> = DATA.filter(
  ({ category }: IPoleRoutine): boolean =>
    category === "contemporary-improv" || category === "exotic-improv"
);

export const EXOTIC: Array<IPoleRoutine> = DATA.filter(
  ({ category }: IPoleRoutine): boolean => category === "exotic-class"
);

export const CONTEMPORARY: Array<IPoleRoutine> = DATA.filter(
  ({ category }: IPoleRoutine): boolean => category === "contemporary-class"
);

export const QUARANTINE: Array<IPoleRoutine> = DATA.filter(
  ({ category }: IPoleRoutine): boolean => category === "quarantine"
);
