import { PHOTOS } from "resources";
import * as MUSICIANS from "../musicians";

export const ARCTIC_MONKEYS_FAVOURITE_WORST_NIGHTMARE: IVinyl = {
  musician: MUSICIANS.ARCTIC_MONKEYS,
  title: "Favourite Worst Nightmare",
  purchased: true,
  appleMusicId: "favourite-worst-nightmare/251126923",
  year: 2007,
  artwork: PHOTOS.ALBUMS.ARCTIC_MONKEYS_FAVOURITE_WORST_NIGHTMARE
};

export const KATE_NASH_MADE_OF_BRICKS: IVinyl = {
  musician: MUSICIANS.KATE_NASH,
  title: "Made of Bricks",
  artwork: PHOTOS.ALBUMS.KATE_NASH_MADE_OF_BRICKS,
  appleMusicId: "made-of-bricks-bonus-track-version/1440791847",
  year: 2007,
  purchased: true
};

export const PARAMORE_RIOT: IVinyl = {
  musician: MUSICIANS.PARAMORE,
  artwork: PHOTOS.ALBUMS.PARAMORE_RIOT,
  title: "Riot!",
  appleMusicId: "riot/604804755",
  year: 2007
};
