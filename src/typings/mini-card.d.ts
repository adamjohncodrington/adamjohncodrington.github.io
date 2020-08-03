interface IMiniCardPanelDetail extends I_Sort, I__Favourite, I__Video {
  mainText: Array<string>;
  secondaryText?: string;
  dates?: Array<Date>;
  index?: number;
  headerLink?: string;
  year?: number;
}

interface IMiniCard
  extends I__SecondaryText,
    I__Favourite,
    I_Sort,
    I__Video,
    I__Star {
  primaryText: string;
  anomaly?: boolean;
  details?: Array<IMiniCardPanelDetail>;
  primaryCount?: number;
  secondaryCount?: number;

  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  greaterCountPadding?: boolean;
}

interface IMiniCardHeader extends IMiniCard, IDisclosureHeader {}

interface IMiniCardPanelDetailHeader
  extends IMiniCardPanelDetail,
    IDisclosureHeader {}
