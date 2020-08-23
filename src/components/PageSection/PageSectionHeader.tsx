import React, { FC } from "react";

import { FlexRowGrow } from "primitives";

import {
  PageSectionHeaderContainer,
  PageSectionTitle,
  PageSectionCount,
  PageSectionStarredCount,
  PageSectionSvgContainer
} from "./styles";

interface IPageSectionHeader extends IDisclosureHeader {
  title: string;
  count?: number;
  starCount?: number;
  SvgIcon?: ISvgIcon;
}

export const PageSectionHeader: FC<IPageSectionHeader> = ({
  title,
  panelVisible,
  SvgIcon,
  count,
  starCount
}) => (
  <PageSectionHeaderContainer>
    <FlexRowGrow data-test="section-header-title-and-counts">
      <PageSectionTitle bold={panelVisible} data-test="section-header-title">
        {title}
      </PageSectionTitle>

      {count && count > 1 && (
        <PageSectionCount data-test="section-header-count">
          {count}
        </PageSectionCount>
      )}

      {starCount && starCount > 0 && (
        <PageSectionStarredCount data-test="section-header-starred-count">
          {starCount}
        </PageSectionStarredCount>
      )}
    </FlexRowGrow>

    {SvgIcon && (
      <PageSectionSvgContainer>
        <SvgIcon data-test="section-header-icon" />
      </PageSectionSvgContainer>
    )}
  </PageSectionHeaderContainer>
);
