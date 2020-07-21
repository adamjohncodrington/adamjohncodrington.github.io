interface IPerson extends INameFavourite {
  initials: string;
}

interface IFriend extends IPerson {
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

interface IPoleInstructor extends IPerson {
  stageName?: string;
}
