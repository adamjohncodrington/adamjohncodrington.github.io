import React from "react";
import styled, { css } from "styled-components";

interface StyledLiProps {
  showBullets?: boolean;
  addPaddingTop?: boolean;
}
const StyledLi = styled.li`
  ${({ showBullets }: StyledLiProps) =>
    showBullets &&
    css`
      // margin-left: 18px;
    `}

  ${({ addPaddingTop }: StyledLiProps) =>
    addPaddingTop &&
    css`
      padding-top: 10px;
    `}
`;

interface StyledUlProps {
  showBullets?: boolean;
}
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${({ showBullets }: StyledUlProps) =>
    showBullets &&
    css`
      list-style-type: square;
      list-style-position: inside;
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
        <StyledLi
          key={index}
          showBullets={showBullets}
          addPaddingTop={item.addPaddingTop}
        >
          {item.text}
        </StyledLi>
      ))}
    </Ul>
  );
};
