import styled, { css } from "styled-components";

import { FlexLiGrow } from "primitives";
import { CSS } from "@styles";

export const CountedListItemContainer = styled(FlexLiGrow)``;

interface ICountedListItemText extends IThemeProp {
  favourite?: boolean;
  star?: boolean;
  faded: boolean;
}

export const CountedListItemText = styled.span`
  ${({ favourite, star, faded, theme }: ICountedListItemText) => css`
    flex: 1;

    ${favourite && CSS.PSEUDO_ELEMENT_HEART}
    ${star && CSS.PSEUDO_ELEMENT_STAR}
    ${
      faded &&
      css`
        opacity: ${theme.fadedOpacity};
      `
    }
  `}
`;

export const CountedListItemPastCount = styled.span`
  ${({ theme: { countedListItem } }: IThemeProp) => css`
    font-weight: bold;
    text-align: right;
    width: ${countedListItem.count.width};
    margin-left: ${countedListItem.count.margin.left};
  `}
`;

export const CountedListItemFutureCount = styled(CountedListItemPastCount)`
  ${({ theme: { fadedOpacity } }: IThemeProp) => css`
    opacity: ${fadedOpacity};
  `}
`;
