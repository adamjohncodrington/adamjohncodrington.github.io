interface MiniCardProps
  extends I__Favourite,
    I_Sort,
    I__Photos,
    I__Video,
    I__Star {
  primaryText: string;
  primaryTextAlt?: string;

  secondaryText?: string;

  details?: MiniCardPanelDetailProps[];
  primaryCount?: number;
  secondaryCount?: number;

  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  greaterCountPadding?: boolean;
}

interface IMiniCardHeader extends MiniCardProps, IDisclosureHeader {}

interface MiniCardPanelDetailProps extends I_Sort, I__Favourite, I__Video {
  mainText: string[];
  secondaryText?: string;
  dates?: Date[];
  index?: number;
  headerLink?: string;
  year?: number;
}

interface IMiniCardPanelDetailHeader
  extends MiniCardPanelDetailProps,
    IDisclosureHeader {}
