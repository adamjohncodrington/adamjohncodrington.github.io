import { EVENT_CARD_TYPES } from "../../constants";

import { formatData, isInFuture } from "../local";

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
    title: formatData(
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
    subtitle: formatData(
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
    body: formatData(
      eventType === EVENT_CARD_TYPES.GIG
        ? venue
        : eventType === EVENT_CARD_TYPES.THEATRE
        ? theatre
        : null
    ),
    dates,
    company,
    eventType,
    favourite,
    disclaimer:
      eventType === EVENT_CARD_TYPES.GIG && isInFuture(dates) && ticketType
  });

  return data.map((item: UnformattedEventItem) => mapDataToEventCard(item));
};
