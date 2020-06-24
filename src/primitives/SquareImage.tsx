import React from "react";
import styled from "styled-components";

interface IStyledImage {
  size: string;
}
const StyledImage = styled.img`
  height: ${({ size }: IStyledImage) => size};
  width: ${({ size }: IStyledImage) => size};
  margin: 0;
`;

interface ISquareImage {
  className?: string;
  imgSrc: string;
  size: string;
}

export const SquareImage = ({ className, imgSrc, size }: ISquareImage) => (
  <StyledImage
    className={className}
    data-test="svg-icon"
    src={imgSrc}
    size={size}
  />
);
