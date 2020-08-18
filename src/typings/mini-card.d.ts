interface IMiniCard extends I__Favourite, I_Sort, I__Video, I__Star {
  primaryText: string;
  primaryTextAlt?: string;

  secondaryText?: string;

  anomaly?: boolean;
  details?: IMiniCardPanelDetail[];
  primaryCount?: number;
  secondaryCount?: number;

  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  greaterCountPadding?: boolean;
}

interface IMiniCardHeader extends IMiniCard, IDisclosureHeader {}

interface IMiniCardPanelDetail extends I_Sort, I__Favourite, I__Video {
  mainText: string[];
  secondaryText?: string;
  dates?: Date[];
  index?: number;
  headerLink?: string;
  year?: number;
}

interface IMiniCardPanelDetailHeader
  extends IMiniCardPanelDetail,
    IDisclosureHeader {}
