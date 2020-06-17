import React from "react";
import styled, { css } from "styled-components";

interface StyledLiProps extends ThemeProps {
  addPaddingTop: boolean | undefined;
}
const StyledLi = styled.li`
  ${({
    addPaddingTop,
    theme: { listItemGroupVerticalSpacing }
  }: StyledLiProps) =>
    addPaddingTop &&
    css`
      padding-top: ${listItemGroupVerticalSpacing};
    `}
`;

interface StyledUlProps {
  showBullets?: boolean;
}
const Ul = styled.ul`
  margin: 0;
  padding: 0;

  ${({ showBullets }: StyledUlProps) =>
    showBullets
      ? css`
          list-style-type: square;
          list-style-position: inside;
        `
      : css`
          list-style-type: none;
        `}
`;

interface UnorderedListProps {
  title: string;
  items: Array<IListItemWithPaddingTopFlag>;
  showBullets?: boolean;
}
export const UnorderedList: React.FC<UnorderedListProps> = ({
  title,
  items,
  showBullets = false
}) => {
  return (
    <Ul showBullets={showBullets}>
      <strong>{title}</strong>

      {items.map((item: IListItemWithPaddingTopFlag, index: number) => (
        <StyledLi key={index} addPaddingTop={item.addPaddingTop}>
          {item.text}
        </StyledLi>
      ))}
    </Ul>
  );
};
