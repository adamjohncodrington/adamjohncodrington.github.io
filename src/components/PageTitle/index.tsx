import React from "react";
import styled, { ThemeContext } from "styled-components";

import { FlexRow, H1, SquareImage, Link } from "primitives";

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

const PaddedFlexRow = styled(FlexRow)`
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

export const PageTitle: React.FC<PageTitleProps> = ({
  titleText,
  pastCount,
  futureCount,
  icon
}) => {
  const theme: ITheme = React.useContext(ThemeContext);

  return (
    <PaddedFlexRow data-test="page-title-container">
      <TitleTextContainer data-test="page-title-text-container">
        <H1 data-test="page-title-text">{titleText}</H1>

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

      <Link data-test="page-title-icon-link" to="/">
        <SvgContainer>
          <SquareImage
            data-test="page-title-icon"
            imgSrc={icon}
            size={theme.page.icon.size}
          />
        </SvgContainer>
      </Link>
    </PaddedFlexRow>
  );
};
