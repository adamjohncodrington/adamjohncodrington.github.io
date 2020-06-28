import styled, { css } from "styled-components";

import { CSS } from "@styles";

interface IGridColumnDiv {
  columnGap?: PxValue;
  equalWidthColumns: boolean;
}

export const GridColumnDiv = styled.div(
  ({ columnGap, equalWidthColumns = true }: IGridColumnDiv) => css`
    ${equalWidthColumns ? CSS.GRID_COLUMN_EQUAL_WIDTHS : CSS.GRID_COLUMN}

    ${columnGap &&
    css`
      column-gap: ${columnGap};
    `}
  `
);
