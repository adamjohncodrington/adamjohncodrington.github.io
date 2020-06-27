import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { FlexRowGrow, SquareImage } from "primitives";

import {
  PageSectionHeaderContainer,
  PageSectionTitle,
  PageSectionCount,
  PageSectionStarredCount
} from "./styles";

type PageSectionHeaderProps = {
  title: string;
  icon?: IImageSrc;
  count?: number;
  starCount?: number;
  dataTest: string;
};

export const PageSectionHeader: React.FC<PageSectionHeaderProps> = ({
  title,
  icon,
  count,
  starCount,
  dataTest
}) => {
  const theme: ITheme = useContext(ThemeContext);

  return (
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

      {icon && (
        <SquareImage
          data-test="section-header-icon"
          imgSrc={icon}
          size={theme.section.icon.size}
        />
      )}
    </PageSectionHeaderContainer>
  );
};
