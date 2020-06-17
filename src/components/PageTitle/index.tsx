import React from "react";
import styled, { ThemeContext } from "styled-components";

import { FlexRow, Headers, Text, SvgIcon, Link } from "../../primitives";

const { H1 } = Headers;

const TitleTextContainer = styled.div`
  display: flex;
  flex: 1;
  text-transform: lowercase;
  margin-bottom: ${props => props.theme.page.header.margin.bottom};
`;

const PastCount = styled(Text.Span.SM)`
  padding: ${props => props.theme.page.count.padding};
`;

const FutureCount = styled(PastCount)`
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
  const theme = React.useContext(ThemeContext);

  return (
    <PaddedFlexRow data-test="page-title-container">
      <TitleTextContainer data-test="page-title-text-container">
        <H1 data-test="page-title-text">{titleText}</H1>

        {!!pastCount && pastCount > 0 && (
          <PastCount data-test="page-title-past-count">{pastCount}</PastCount>
        )}
        {!!futureCount && futureCount > 0 && (
          <FutureCount data-test="page-title-future-count">
            {futureCount}
          </FutureCount>
        )}
      </TitleTextContainer>

      <Link data-test="page-title-link" to="/">
        <SvgContainer>
          <SvgIcon icon={icon} size={theme.page.icon.size} />
        </SvgContainer>
      </Link>
    </PaddedFlexRow>
  );
};
