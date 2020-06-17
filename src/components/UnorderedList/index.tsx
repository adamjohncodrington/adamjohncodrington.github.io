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
      margin-left: 16px;
    `}

  ${({ addPaddingTop }: StyledLiProps) =>
    addPaddingTop &&
    css`
      padding-top: 10px;
    `}
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
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
    <Ul>
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
