import { MUSIC_EVENTS as DATA } from "data";

import { UP_NEXT } from "./up-next";

const totalGigsPastAndPresent: number = DATA.length;
const totalFutureGigs: number = UP_NEXT.length;
const totalGigsSoFar: number = totalGigsPastAndPresent - totalFutureGigs;

export const pageCount: number = totalGigsSoFar;
