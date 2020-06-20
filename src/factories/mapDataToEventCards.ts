import { EVENT_CARD_TYPES } from "../constants";
import { formatNames, isInFuture } from "../utils";

interface IMapDataToEventCards {
  data: Array<UnformattedEventItem>;
  eventType: IEventCardType;
}

type UnformattedEventItem = any;

export const mapDataToEventCards = ({
  data,
  eventType
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
        : eventType === EVENT_CARD_TYPES.GIG
        ? headline
          ? headline
          : festival
        : eventType === EVENT_CARD_TYPES.THEATRE
        ? play
        : null
    ),
    //@ts-ignore
    subtitle: formatNames(
      subtitle
        ? subtitle
        : eventType === EVENT_CARD_TYPES.GIG
        ? lineup
          ? lineup
          : support
        : eventType === EVENT_CARD_TYPES.THEATRE
        ? cast
        : null
    ),
    //@ts-ignore
    body: formatNames(
      eventType === EVENT_CARD_TYPES.GIG
        ? venue
        : eventType === EVENT_CARD_TYPES.THEATRE
        ? theatre
        : null
    ),
    dates,
    company: company.sort((a: IFriend, b: IFriend) =>
      a.initials > b.initials ? 1 : -1
    ),
    eventType,
    favourite,
    disclaimer:
      eventType === EVENT_CARD_TYPES.GIG && isInFuture(dates) && ticketType
  });

  return data.map((item: UnformattedEventItem) => mapDataToEventCard(item));
};
