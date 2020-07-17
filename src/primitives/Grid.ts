import styled, { css } from "styled-components";

import { CSS } from "styles";

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

export const GridWithColumns = styled.div(({ columnCount }: IColumnCount) => {
  const gridTemplateAreas: string =
    columnCount === 4
      ? `"col1 col2 col3 col4"`
      : columnCount === 3
      ? `"col1 col2 col3"`
      : `"col1 col2"`;

  return css`
    display: grid;
    grid-template-areas: ${gridTemplateAreas};
  `;
});
