import React from "react";
import styled, { css } from "styled-components";

import { H1 } from "primitives";

const PageHeaderContainer = styled.div(
  ({ theme: { pageHeader } }: I_Theme) => css`
    display: flex;
    justify-content: center;
    text-transform: lowercase;
    margin-bottom: ${pageHeader.margin.bottom};
  `
);

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
  <PageHeaderContainer data-test="page-header-container">
    <H1 bold={false} data-test="page-header-title">
      {titleText}
    </H1>

    {count && count > 0 && (
      <PageHeaderCount data-test="page-header-count">{count}</PageHeaderCount>
    )}
  </PageHeaderContainer>
);
