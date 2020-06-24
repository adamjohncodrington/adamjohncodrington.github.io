import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { FlexRowGrow } from "primitives";

import {
  PageSectionHeaderContainer,
  StyledIcon,
  PageSectionTitle,
  PageSectionCount,
  PageSectionStarredCount
} from "./styles";

type PageSectionHeaderProps = {
  text: string;
  icon?: IImageSrc;
  count?: number;
  starredCount?: number;
  dataTest: string;
};

export const PageSectionHeader: React.FC<PageSectionHeaderProps> = ({
  text,
  icon,
  count,
  starredCount,
  dataTest
}) => {
  const theme: ITheme = useContext(ThemeContext);

  return (
    <PageSectionHeaderContainer data-test={dataTest}>
      <FlexRowGrow data-test="section-header-title-and-counts">
        <PageSectionTitle data-test="section-header-title">
          {text}
        </PageSectionTitle>

        {count && count > 1 && (
          <PageSectionCount data-test="section-header-count">
            {count}
          </PageSectionCount>
        )}

        {starredCount && starredCount > 0 && (
          <PageSectionStarredCount data-test="section-header-starred-count">
            {starredCount}
          </PageSectionStarredCount>
        )}
      </FlexRowGrow>

      {icon && (
        <StyledIcon
          data-test="section-header-icon"
          icon={icon}
          size={theme.section.icon.size}
        />
      )}
    </PageSectionHeaderContainer>
  );
};
