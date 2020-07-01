import { DATA } from "../data";

import { UP_NEXT } from "./up-next";

const totalGigsPastAndPresent: number = DATA.ALL.length;
const totalFutureGigs: number = UP_NEXT.length;
const totalGigsSoFar: number = totalGigsPastAndPresent - totalFutureGigs;

export const pageCount: number = totalGigsSoFar;
