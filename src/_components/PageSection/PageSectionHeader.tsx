import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { H2, FlexRowGrow } from "_primitives";

import {
  PageSectionHeaderContainer,
  StyledIcon,
  PageSectionPrimaryCount,
  PageSectionSecondaryCount
} from "./styles";

type PageSectionHeaderProps = {
  text: string;
  showCounts: boolean;
  data: Array<any>;
  icon?: IImageSrc;
  dataTest: string;
};

export const PageSectionHeader: React.FC<PageSectionHeaderProps> = ({
  text,
  showCounts,
  data,
  icon,
  dataTest
}) => {
  const starredDataCount = data && data.filter(item => item.star).length;
  const theme: ITheme = useContext(ThemeContext);

  return (
    <PageSectionHeaderContainer data-test={dataTest}>
      <FlexRowGrow data-test="section-header-text-container">
        <H2 data-test="section-header-text">{text}</H2>

        {showCounts && data && data.length > 1 && (
          <PageSectionPrimaryCount data-test="section-count">
            {data.length}
          </PageSectionPrimaryCount>
        )}

        {showCounts && starredDataCount > 0 && (
          <PageSectionSecondaryCount data-test="section-count">
            {starredDataCount}
          </PageSectionSecondaryCount>
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
