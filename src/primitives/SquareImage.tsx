import React from "react";
import styled, { css } from "styled-components";

import { Photo } from "types";
import { constructFreeImageHostUrl } from "styles";

interface IStyledImage extends ThemeProp {
  size: string;
  circle: boolean;
}

const StyledImage = styled.img(
  ({ circle, size, theme: { boxShadow } }: IStyledImage) => css`
    height: ${size};
    width: ${size};
    margin: 0;
    display: block;
    box-shadow: ${boxShadow.dark};

    ${circle &&
    css`
      border-radius: 50%;
    `}
  `
);

interface ISquareImage {
  className?: string;
  dataTest?: string;
  photo: Photo;
  circle?: boolean;
  size: string;
}

export const SquareImage = ({
  className,
  circle = false,
  dataTest,
  photo: { freeimagehostId, title },
  size
}: ISquareImage) => (
  <StyledImage
    className={className}
    circle={circle}
    title={title}
    data-test={dataTest}
    src={constructFreeImageHostUrl(freeimagehostId)}
    size={size}
  />
);
