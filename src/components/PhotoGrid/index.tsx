import React from "react";
import styled from "styled-components";

import { GridTwoColumns, SquareImage } from "primitives";

export const EventCardPhotosContainer = styled(GridTwoColumns)`
  margin-top: 10px;
`;

export const PhotoGrid = ({ photos }: IPhotos) => {
  if (!(photos && photos.length > 0)) return null;

  return (
    <EventCardPhotosContainer>
      {photos.map((photo: IJpgSrc) => (
        <div data-test="image-container">
          <SquareImage imgSrc={photo} size="100%" />
        </div>
      ))}
    </EventCardPhotosContainer>
  );
};
