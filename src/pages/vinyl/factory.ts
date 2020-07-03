import { MUSICIANS } from "@constants";

const vinyls: Array<IVinylCard | undefined> = Object.values(MUSICIANS)
  .filter(({ albums }: IMusician): boolean => !!albums)
  .map(
    ({ name, albums }: IMusician): Array<IVinylCard> | undefined =>
      albums &&
      albums.map((album: IAlbum): IVinylCard => ({ artist: name, ...album }))
  )
  .flat()
  .sort((a: IVinylCard | undefined, b: IVinylCard | undefined): number =>
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
  (vinyl: IVinylCard | undefined) => vinyl && !vinyl.purchased
);

const COLLECTION = vinyls.filter(
  (vinyl: IVinylCard | undefined) => vinyl && vinyl.purchased
);

export const FACTORY = { WISH_LIST, COLLECTION };
