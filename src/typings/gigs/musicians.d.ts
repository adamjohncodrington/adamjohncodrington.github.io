interface IAlbum {
  title: string;
  year: number;
  artwork: IPhoto;
  appleMusicUrl: string;
  notes?: string;
  purchased?: boolean;
  signed?: true;
}

interface IVinyl extends IAlbum {
  artist: string;
}

interface IMusician extends INameFavourite {
  previousStageName?: { name: string; yearDeprecated: number };
  noLongerExists?: boolean;
  albums?: Array<IAlbum>;
}
