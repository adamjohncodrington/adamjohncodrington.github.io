import styled, { css } from "styled-components";

import { SVG } from "resources";

const size: string = "0.75rem";

interface IArrow {
  panelVisible: boolean;
}

export const Arrow = styled(SVG.ARROW_DOWN)(
  ({ panelVisible }: IArrow) => css`
    height: ${size};
    width: ${size};

    ${!panelVisible &&
    css`
      transform: rotate(-90deg);
    `}
  `
);
