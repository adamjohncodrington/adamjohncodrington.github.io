import styled, { css } from "styled-components";

import { CSS } from "@styles";

interface IGridColumnDiv {
  columnGap?: PxValue;
}

export const GridColumnDiv = styled.div(
  ({ columnGap }: IGridColumnDiv) => css`
    ${CSS.GRID_COLUMN_EQUAL_WIDTHS}

    ${columnGap &&
    css`
      column-gap: ${columnGap};
    `}
  `
);
