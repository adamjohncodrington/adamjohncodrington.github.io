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

export type Retailer = { name: string; online: boolean; branch?: string };

export type VinylColor = string | [string, string] | { photo: Photo };

export type VinylAppearance = {
  color: VinylColor;
  inches: 7 | 10 | 12;
  sides: 2 | 4;
};

export type Vinyl = VinylAppearance & {
  appleMusicId: string;
  artwork: Photo;
  costExcDelivery: number;
  gift?: Gift;
  musician: Musician;
  purchaseCondition: "new" | "used";
  retailer: Retailer;
  signed: boolean;
  title: string;
  year: number;
};
