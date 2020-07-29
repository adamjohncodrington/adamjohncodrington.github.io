interface IMiniCardPanelDetail extends I_Sort, I__Favourite, I__Video {
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
    I__Video,
    I__Star {
  sort: string | number;
  text: string;
  doNotIncludeInList?: boolean;
  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  isLeaderboardItem?: boolean;
  details?: Array<IMiniCardPanelDetail>;
}

interface IMiniCardHeader extends IMiniCard, IDisclosureHeader {}

interface IMiniCardPanelDetailHeader
  extends IMiniCardPanelDetail,
    IDisclosureHeader {}
