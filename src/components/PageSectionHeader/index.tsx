import React from "react";

import { FlexRowGrow } from "primitives";

import {
  PageSectionHeaderContainer,
  PageSectionTitle,
  PageSectionCount,
  PageSectionStarredCount,
  PageSectionSvgContainer
} from "./styles";

interface IPageSectionHeader {
  title: string;
  count?: number;
  starCount?: number;
  SvgIcon?: ISvgIcon;
  dataTest: string;
}

export const PageSectionHeader: React.FC<IPageSectionHeader> = ({
  title,
  SvgIcon,
  count,
  starCount,
  dataTest
}) => (
  <PageSectionHeaderContainer data-test={dataTest}>
    <FlexRowGrow data-test="section-header-title-and-counts">
      <PageSectionTitle data-test="section-header-title">
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
