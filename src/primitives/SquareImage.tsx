import React from "react";
import styled, { css } from "styled-components";

interface IStyledImage {
  size: string;
}

const StyledImage = styled.img(
  ({ size }: IStyledImage) => css`
    height: ${size};
    width: ${size};
    margin: 0;
  `
);

interface ISquareImage {
  dataTest?: string;
  imgSrc: string;
  size: string;
}

export const SquareImage = ({ dataTest, imgSrc, size }: ISquareImage) => (
  <StyledImage data-test={dataTest} src={imgSrc} size={size} />
);
