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

interface IFlexRowDynamic extends I_Bold, I_Italic {
  alignItems?: "baseline" | "center";
  firstDirectChildCss?: FlattenSimpleInterpolation;
}

export const FlexRowDynamic = styled(FlexRow)(
  ({ alignItems, bold, firstDirectChildCss, italic }: IFlexRowDynamic) => css`
    ${
      firstDirectChildCss &&
      css`
        > :first-child {
          ${firstDirectChildCss};
        }
      `
    }
    ${
      alignItems &&
      css`
        align-items: ${alignItems};
      `
    }
    ${
      bold &&
      css`
        * {
          font-weight: bold;
        }
      `
    }
    ${
      italic &&
      css`
        * {
          font-style: italic;
        }
      `
    }
  `
);
