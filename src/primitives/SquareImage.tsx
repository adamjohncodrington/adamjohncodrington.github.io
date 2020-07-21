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
    display: block;
  `
);

interface ISquareImage extends IClassName {
  dataTest?: string;
  photo: IPhoto;
  size: string;
}

export const SquareImage = ({
  className,
  dataTest,
  photo: { url },
  size
}: ISquareImage) => (
  <StyledImage
    className={className}
    data-test={dataTest}
    src={url}
    size={size}
  />
);
