import React from "react";
import styled from "styled-components";

import { H1 } from "primitives";

const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  text-align: center;
  display: flex;
  text-transform: lowercase;
  margin-bottom: ${props => props.theme.page.header.margin.bottom};
`;

const PageHeaderCount = styled.span`
  padding: ${props => props.theme.page.count.padding};
`;

interface PageTitleProps {
  titleText: string;
  count?: number;
}

export const PageHeader: React.FC<PageTitleProps> = ({ titleText, count }) => (
  <PageHeaderContainer data-test="page-header-container">
    <H1 data-test="page-header-title">{titleText}</H1>

    {!!count && count > 0 && (
      <PageHeaderCount data-test="page-header-count">{count}</PageHeaderCount>
    )}
  </PageHeaderContainer>
);
