import React from "react";
import styled, { ThemeContext } from "styled-components";

import { FlexRowDiv, Headers, SvgIcon, Link } from "../../primitives";

const { PageTitle } = Headers;

const TitleTextContainer = styled.div`
  display: flex;
  flex: 1;
  text-transform: lowercase;
  margin-bottom: ${props => props.theme.page.header.margin.bottom};
`;

const PageTitlePrimaryCount = styled.span`
  padding: ${props => props.theme.page.count.padding};
`;

const PageTitleSecondaryCount = styled(PageTitlePrimaryCount)`
  opacity: ${props => props.theme.fadedOpacity};
`;

const PaddedFlexRowDiv = styled(FlexRowDiv)`
  padding-bottom: ${props => props.theme.pageTitleMarginBottom};
`;

const SvgContainer = styled.div`
  margin-top: ${props => props.theme.page.icon.margin.top};
`;

interface PageTitleProps {
  titleText: string;
  pastCount?: number;
  futureCount?: number;
  icon: IImageSrc;
}

export const PageTitleComponent: React.FC<PageTitleProps> = ({
  titleText,
  pastCount,
  futureCount,
  icon
}) => {
  const theme: ITheme = React.useContext(ThemeContext);

  return (
    <PaddedFlexRowDiv data-test="page-title-container">
      <TitleTextContainer data-test="page-title-text-container">
        <PageTitle data-test="page-title-text">{titleText}</PageTitle>

        {!!pastCount && pastCount > 0 && (
          <PageTitlePrimaryCount data-test="page-title-past-count">
            {pastCount}
          </PageTitlePrimaryCount>
        )}
        {!!futureCount && futureCount > 0 && (
          <PageTitleSecondaryCount data-test="page-title-future-count">
            {futureCount}
          </PageTitleSecondaryCount>
        )}
      </TitleTextContainer>

      <Link data-test="page-title-link" to="/">
        <SvgContainer>
          <SvgIcon icon={icon} size={theme.page.icon.size} />
        </SvgContainer>
      </Link>
    </PaddedFlexRowDiv>
  );
};
