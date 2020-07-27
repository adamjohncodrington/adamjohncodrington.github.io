interface IMiniCardPanelItem extends I__Favourite {
  video?: IVideo;
  mainText?: Array<string>;
  dates?: Array<Date>;
  index?: number;
  headerLink?: string;
  year?: number;
}

interface IMiniCard
  extends I__SecondaryText,
    I_PastFutureCounts,
    I__Favourite,
    I__Star {
  text: string;
  doNotIncludeInList?: boolean;
  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  isLeaderboardItem?: boolean;
  details?: Array<IMiniCardPanelItem>;
}

interface IMiniCardHeader extends IMiniCard, IDisclosureHeader {}

interface IMiniCardPanelItemHeader
  extends IMiniCardPanelItem,
    IDisclosureHeader {}
