import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { Text, Headers, SvgIcon } from "../../primitives";

const { H2 } = Headers;

const Container = styled.div`
  display: flex;
  padding: ${props => props.theme.section.header.padding};
`;

const SectionCount = styled(Text.Span.S)`
  margin-left: ${props => props.theme.section.count.margin.left};
`;

const SectionSubcount = styled(SectionCount)`
  opacity: ${props => props.theme.fadedOpacity};
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1;
`;

const StyledIcon = styled(SvgIcon)`
  padding-top: ${props => props.theme.section.icon.padding.top};
`;

type PageSectionHeaderProps = {
  text: string;
  showCounts: boolean;
  data: any;
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
  const theme = useContext(ThemeContext);

  return (
    <Container data-test={dataTest}>
      <TextContainer data-test="section-header-text-container">
        <H2 data-test="section-header-text">{text}</H2>

        {showCounts && data && data.length > 1 && (
          <SectionCount data-test="section-count">{data.length}</SectionCount>
        )}

        {showCounts && starredDataCount > 0 && (
          <SectionSubcount data-test="section-count">
            {starredDataCount}
          </SectionSubcount>
        )}
      </TextContainer>

      {icon && (
        <StyledIcon
          data-test="section-header-icon"
          icon={icon}
          size={theme.section.icon.size}
        />
      )}
    </Container>
  );
};
