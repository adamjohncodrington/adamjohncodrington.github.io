import { EVENT_CARD_TYPES } from "../constants";
import { formatNames, isInFuture } from "../utils";

type UnformattedEventItem = any;
interface IMapDataToEventCards {
  data: Array<UnformattedEventItem>;
  eventCardType: IEventCardType;
}

export const mapDataToEventCards = ({
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
  }: UnformattedEventItem): IEventCard => ({
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
    eventCardType,
    favourite,
    disclaimer:
      eventCardType === EVENT_CARD_TYPES.GIG && isInFuture(dates) && ticketType
  });

  return data.map((item: UnformattedEventItem) => mapDataToEventCard(item));
};
