import React from "react";
import styled, { css } from "styled-components";
import { FREE_IMAGE_HOST_URL_PREFIX } from "config";

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

interface ISquareImage {
  className?: string;
  dataTest?: string;
  photo: IPhoto;
  size: string;
}

export const SquareImage = ({
  className,
  dataTest,
  photo: { freeimagehostId },
  size
}: ISquareImage) => (
  <StyledImage
    className={className}
    data-test={dataTest}
    src={FREE_IMAGE_HOST_URL_PREFIX + freeimagehostId}
    size={size}
  />
);
