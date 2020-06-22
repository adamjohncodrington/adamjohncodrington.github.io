import React from "react";
import styled from "styled-components";

interface IStyledImage {
  size: string;
}
const StyledImage = styled.img`
  height: ${(props: IStyledImage) => props.size};
  width: ${(props: IStyledImage) => props.size};
  margin: 0;
`;

interface ISvgIcon {
  className?: string;
  icon: string;
  size: string;
}

export const SvgIcon = ({ className, icon, size }: ISvgIcon) => (
  <StyledImage
    className={className}
    data-test="svg-icon"
    src={icon}
    size={size}
  />
);
