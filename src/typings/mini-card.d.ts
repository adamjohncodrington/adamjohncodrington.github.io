interface MiniCardProps extends I__Favourite, I_Sort, I__Video, I__Star {
  primaryText: string;
  primaryTextAlt?: string;
  photos?: Photo[];

  secondaryText?: string;

  details?: MiniCardPanelDetailProps[];
  primaryCount?: number;
  secondaryCount?: number;

  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  greaterCountPadding?: boolean;
}

interface IMiniCardHeader extends MiniCardProps, DisclosureHeader {}

interface MiniCardPanelDetailProps extends I_Sort, I__Favourite, I__Video {
  mainText: string[];
  secondaryText?: string;
  dates?: Date[];
  dateTBA?: boolean;
  index?: number;
  headerLink?: string;
  year?: number;
}

interface IMiniCardPanelDetailHeader
  extends MiniCardPanelDetailProps,
    DisclosureHeader {}
