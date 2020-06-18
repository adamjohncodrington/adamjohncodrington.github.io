import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Headers, FlexRowGrow } from "../../primitives";

import {
  PageSectionHeaderContainer,
  StyledIcon,
  PageSectionPrimaryCount,
  PageSectionSecondaryCount
} from "./styles";

const { PageSectionTitle } = Headers;

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
  //@ts-ignore
  const starredDataCount = data && data.filter(item => item.star).length;
  const theme: ITheme = useContext(ThemeContext);

  return (
    <PageSectionHeaderContainer data-test={dataTest}>
      <FlexRowGrow data-test="section-header-text-container">
        <PageSectionTitle data-test="section-header-text">
          {text}
        </PageSectionTitle>

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
