import styled, { css } from "styled-components";

import { SVG } from "resources";

interface IArrow {
  panelVisible: boolean;
  size: string;
}

export const Arrow = styled(SVG.ARROW_DOWN)(
  ({ panelVisible, size }: IArrow) => css`
    height: ${size};
    width: ${size};

    ${!panelVisible &&
    css`
      transform: rotate(-90deg);
    `}
  `
);
