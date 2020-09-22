import { MUSIC_EVENTS as DATA } from "data-raw";

import { UP_NEXT } from "./upcoming";

const totalGigsPastAndPresent: number = DATA.length;
const totalFutureGigs: number = UP_NEXT.length;
const totalGigsSoFar: number = totalGigsPastAndPresent - totalFutureGigs;

export const pageCount: number = totalGigsSoFar;
