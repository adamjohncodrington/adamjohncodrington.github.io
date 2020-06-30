import { isInFuture } from "./basic";

interface IGigCards {
  gigCards: Array<IGigCard>;
}

interface IGetMusicianCounts extends IGigCards {
  musician: IMusician;
}

export const getMusicianCounts = ({
  musician,
  gigCards
}: IGetMusicianCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  gigCards.forEach(({ headline, support, lineup, dates }: IGigCard): void => {
    if (
      headline === musician ||
      (support && support.includes(musician)) ||
      (lineup && lineup.includes(musician))
    ) {
      if (isInFuture(dates[0])) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface IGetFestivalCounts extends IGigCards {
  festival: IFestival;
}

export const getFestivalCounts = ({
  festival,
  gigCards
}: IGetFestivalCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  gigCards.forEach((gig: IGigCard): void => {
    if (gig.festival === festival) {
      if (isInFuture(gig.dates[0])) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface IGetFriendGigCounts extends IGigCards {
  friend: IFriend;
}

export const getFriendGigCounts = ({
  friend,
  gigCards
}: IGetFriendGigCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  gigCards.forEach(({ company, dates }: IGigCard): void => {
    if (company.includes(friend)) {
      if (isInFuture(dates[0])) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface ITravelCards {
  travelCards: Array<ITravelCard>;
}

interface IGetFriendTravelCounts extends ITravelCards {
  friend: IFriend;
}

export const getFriendTravelCounts = ({
  friend,
  travelCards
}: IGetFriendTravelCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  travelCards.forEach(({ company, dates }: ITravelCard): void => {
    if (company.includes(friend)) {
      if (isInFuture(dates[0])) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface ITheatreCards {
  theatreCards: Array<ITheatreCard>;
}

interface IGetFriendTheatreCounts extends ITheatreCards {
  friend: IFriend;
}

export const getFriendTheatreCounts = ({
  friend,
  theatreCards
}: IGetFriendTheatreCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  theatreCards.forEach(({ company, date }: ITheatreCard): void => {
    if (company.includes(friend)) {
      if (isInFuture(date)) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface IGetMusicVenueCounts extends IGigCards {
  musicVenue: IMusicVenue;
}

export const getMusicVenueCounts = ({
  musicVenue,
  gigCards
}: IGetMusicVenueCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  gigCards.forEach(({ venue, dates }: IGigCard): void => {
    if (venue === musicVenue) {
      if (isInFuture(dates[0])) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface IGetActorCounts extends ITheatreCards {
  actor: IActor;
}

export const getActorCounts = ({
  actor,
  theatreCards
}: IGetActorCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  theatreCards.forEach(({ cast, date }: ITheatreCard): void => {
    if (cast && cast.includes(actor)) {
      if (isInFuture(date)) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface IGetTheatreCounts extends ITheatreCards {
  theatre: ITheatreVenue;
}

export const getTheatreCounts = ({
  theatre,
  theatreCards
}: IGetTheatreCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  theatreCards.forEach((theatreCard: ITheatreCard): void => {
    if (theatre === theatreCard.theatre) {
      if (isInFuture(theatreCard.date)) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

interface IGetPlayCounts extends ITheatreCards {
  play: IPlay;
}

export const getPlayCounts = ({
  play,
  theatreCards
}: IGetPlayCounts): IFuturePastCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  theatreCards.forEach((theatreCard: ITheatreCard): void => {
    if (theatreCard.play === play) {
      if (isInFuture(theatreCard.date)) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { pastCount, futureCount };
};

//TODO: DELETE THE BELOW!!!!!!!!!

interface IGetPageSectionItemCounts {
  itemToCount: any;
  dataToCompareAgainst: Array<any>;
}
export const getPageSectionItemCounts = ({
  itemToCount,
  dataToCompareAgainst
}: IGetPageSectionItemCounts) => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  dataToCompareAgainst.forEach((dataItem: any) => {
    if (
      // LOCATION
      (dataItem.title && dataItem.title.includes(itemToCount)) ||
      (dataItem.hidden && dataItem.hidden.includes(itemToCount)) ||
      (dataItem.subtitle && dataItem.subtitle.includes(itemToCount))
    ) {
      // if (isInFuture(dataItem.dates)) {
      //   futureCount += 1;
      // } else {
      //   pastCount += 1;
      // }
      pastCount += 1;
      // futureCount += 1;
    }
  });

  return { futureCount, pastCount };
};
