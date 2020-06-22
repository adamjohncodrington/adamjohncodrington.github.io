import { EVENT_CARD_TYPES } from "_constants";
import { formatNames, isInFuture } from "_utils";

interface IMapDataToEventCards {
  data: Array<any>;
  eventCardType: IEventCardType;
}

export const mapToEventCardData = ({
  data,
  eventCardType
}: IMapDataToEventCards): Array<IEventCard> => {
  const mapDataToEventCard = ({
    title,
    subtitle,
    headline,
    festival,
    support,
    lineup,
    dates,
    venue,
    favourite,
    company,
    ticketType,
    play,
    cast,
    theatre
  }: any): IEventCard => ({
    //@ts-ignore
    title: formatNames(
      title
        ? title
        : eventCardType === EVENT_CARD_TYPES.GIG
        ? headline
          ? headline
          : festival
        : eventCardType === EVENT_CARD_TYPES.THEATRE
        ? play
        : null
    ),
    //@ts-ignore
    subtitle: formatNames(
      subtitle
        ? subtitle
        : eventCardType === EVENT_CARD_TYPES.GIG
        ? lineup
          ? lineup
          : support
        : eventCardType === EVENT_CARD_TYPES.THEATRE
        ? cast
        : null
    ),
    //@ts-ignore
    body: formatNames(
      eventCardType === EVENT_CARD_TYPES.GIG
        ? venue
        : eventCardType === EVENT_CARD_TYPES.THEATRE
        ? theatre
        : null
    ),
    dates,
    company: company.sort((a: IFriend, b: IFriend) =>
      a.initials > b.initials ? 1 : -1
    ),
    favourite,
    disclaimer:
      eventCardType === EVENT_CARD_TYPES.GIG && isInFuture(dates) && ticketType
  });

  return data.map((item: any) => mapDataToEventCard(item));
};
