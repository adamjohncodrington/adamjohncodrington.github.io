import React from "react";
import styled, { css } from "styled-components";
import { FREE_IMAGE_HOST_URL_PREFIX } from "config";

interface IStyledImage extends I_Theme {
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
  photo: IPhoto;
  circle?: boolean;
  size: string;
}

export const SquareImage = ({
  className,
  circle = false,
  dataTest,
  photo: { freeimagehostId, title },
  size
}: ISquareImage) => {
  const FREE_IMAGE_HOST_URL_SUFFIX: string =
    freeimagehostId.slice(-4) !== ".jpg"
      ? freeimagehostId + ".jpg"
      : freeimagehostId;

  return (
    <StyledImage
      className={className}
      circle={circle}
      title={title}
      data-test={dataTest}
      src={FREE_IMAGE_HOST_URL_PREFIX + FREE_IMAGE_HOST_URL_SUFFIX}
      size={size}
    />
  );
};
