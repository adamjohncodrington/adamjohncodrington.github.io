import { MUSICIANS } from "@constants";
import { getMusicianStageNameAtTime } from "utils";

const vinyls: Array<IVinyl | undefined> = Object.values(MUSICIANS)
  .filter(({ albums }: IMusician): boolean => !!albums)
  .map((musician: IMusician): Array<IVinyl> | undefined => {
    const { albums } = musician;
    return (
      albums &&
      albums.map(
        (album: IAlbum): IVinyl => ({
          artist: getMusicianStageNameAtTime({ musician, year: album.year }),
          ...album
        })
      )
    );
  })
  .flat()
  .sort((a: IVinyl | undefined, b: IVinyl | undefined): number =>
    a && b
      ? a.year < b.year
        ? 1
        : a.year === b.year
        ? a.artist < b.artist
          ? -1
          : 1
        : -1
      : 0
  );

const WISH_LIST = vinyls.filter(
  (vinyl: IVinyl | undefined) => vinyl && !vinyl.purchased
);

const COLLECTION = vinyls.filter(
  (vinyl: IVinyl | undefined) => vinyl && vinyl.purchased
);

export const FACTORY = { WISH_LIST, COLLECTION };
