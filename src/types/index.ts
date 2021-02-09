export type Person = { name: string; initials: string };

export type FitnessInstructor = Person & {
  stageName?: string;
};

export type Friend = Person & {
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
};

export type Gift = { from: Person };

export type Photo = {
  date?: Date;
  freeimagehostId: string;
  hide?: boolean;
  href?: string;
  title?: string;
};

export type Musician = {
  excludeFromBucketList?: boolean;
  favourite?: boolean;
  name: string;
  noLongerExists?: boolean;
  previousStageName?: { name: string; yearDeprecated: number };
};

export type Retailer = {
  name: string;
  online: boolean;
  branch?: string;
};

export type VinylColor = string | [string, string] | { photo: Photo };

export type Vinyl = {
  appleMusicId: string;
  artwork: Photo;
  color: VinylColor;
  costExcDelivery: number;
  gift?: Gift;
  inches: 7 | 10 | 12;
  musician: Musician;
  retailer: Retailer;
  sides: 2 | 4;
  signed: boolean;
  title: string;
  year: number;
};
