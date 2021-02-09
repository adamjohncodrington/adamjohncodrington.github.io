import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { Li } from "./Lists";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexRowBaseline = styled(FlexRow)`
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexSpan = styled.span`
  display: flex;
`;

export const FlexRowGrow = styled(FlexRow)`
  flex: 1;
`;

export const FlexSpanGrow = styled(FlexSpan)`
  flex: 1;
`;

export const FlexLiGrow = styled(Li)`
  display: flex;
  flex: 1;
`;

interface IFlexRowDynamic extends I_Bold, I__Faded, I_Italic, ThemeProp {
  alignItems?: "top" | "baseline" | "center";
  svgCss?: FlattenSimpleInterpolation;
}

export const FlexRowDynamic = styled(FlexRow)(
  ({
    alignItems,
    bold,
    faded,
    svgCss,
    italic,
    theme: { fadedOpacity }
  }: IFlexRowDynamic) => css`
    ${svgCss &&
    css`
      svg {
        ${svgCss};
      }
    `}
    ${faded &&
    css`
      opacity: ${fadedOpacity};
    `}
    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}
    ${bold &&
    css`
      * {
        font-weight: bold;
      }
    `}
    ${italic &&
    css`
      * {
        font-style: italic;
      }
    `}
  `
);
