import styled, { css } from "styled-components";

import { FlexLiGrow } from "primitives";

export const CountedListItemContainer = styled(FlexLiGrow)``;

interface ICountedListItemText extends IThemeProp {
  favourite?: boolean;
  star?: boolean;
  faded: boolean;
}

export const CountedListItemText = styled.span`
  flex: 1;

  ${({ favourite }: ICountedListItemText) =>
    favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}

  ${({ star }: ICountedListItemText) =>
    star &&
    css`
      ::before {
        content: "★ ";
      }
    `}


  ${({ theme: { fadedOpacity }, faded }: ICountedListItemText) =>
    faded &&
    css`
      opacity: ${fadedOpacity};
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
