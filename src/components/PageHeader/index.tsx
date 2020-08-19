import React from "react";
import styled, { css } from "styled-components";

import { H1 } from "primitives";

const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  text-transform: lowercase;

  background: black;
  color: white;
  padding: 5px;
`;

const PageHeaderCount = styled.span(
  ({ theme: { pageHeader } }: I_Theme) => css`
    padding: ${pageHeader.count.padding.all};
  `
);

interface IPageHeader {
  titleText: string;
  count?: number;
}

export const PageHeader: React.FC<IPageHeader> = ({ titleText, count }) => (
  <PageHeaderContainer data-test="page-heading-container">
    <H1 bold={true} data-test="page-heading-title">
      {titleText}
    </H1>

    {count && count > 0 && (
      <PageHeaderCount data-test="page-heading-count">{count}</PageHeaderCount>
    )}
  </PageHeaderContainer>
);
