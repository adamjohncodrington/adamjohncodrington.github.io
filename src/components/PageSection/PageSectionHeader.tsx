import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { SvgIcon, Headers } from "../../primitives";

const { PageSectionTitle } = Headers;

const PageSectionHeaderContainer = styled.div`
  display: flex;
  padding: ${props => props.theme.section.header.padding};
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1;
`;

const PageSectionPrimaryCount = styled.span`
  margin-left: ${props => props.theme.section.count.margin.left};
`;

const PageSectionSecondaryCount = styled(PageSectionPrimaryCount)`
  opacity: ${props => props.theme.fadedOpacity};
`;

const StyledIcon = styled(SvgIcon)`
  padding-top: ${props => props.theme.section.icon.padding.top};
`;

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
      <TextContainer data-test="section-header-text-container">
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
      </TextContainer>

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
