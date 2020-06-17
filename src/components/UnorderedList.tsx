import React from "react";
import styled, { css } from "styled-components";

import { Ul } from "../primitives";

interface UnorderedListProps {
  title: string;
  items: Array<string>;
  showBullets?: boolean;
}

type StyledLiProps = { showBullets: boolean };
const StyledLi = styled.li(
  ({ showBullets }: StyledLiProps) =>
    showBullets &&
    css`
      margin-left: 16px;
    `
);

export const UnorderedList: React.FC<UnorderedListProps> = ({
  title,
  items,
  showBullets = false
}) => {
  return (
    <Ul>
      <strong>{title}</strong>

      {items.map((item: string, index: number) => (
        <StyledLi key={index} showBullets={showBullets}>
          {item}
        </StyledLi>
      ))}
    </Ul>
  );
};
