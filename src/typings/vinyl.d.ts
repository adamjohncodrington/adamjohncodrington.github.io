interface IVinyl {
  musician: IMusician;
  title: string;
  year: number;
  artwork: IPhoto;
  appleMusicId: string;
  signed?: true;
  notes?: string;
  purchased?: boolean;
}

interface IVinylCard extends IVinyl {
  hideYear?: boolean;
}
