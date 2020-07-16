import React from "react";
import styled from "styled-components";

import { GridWithColumns, SquareImage } from "primitives";

export const EventCardPhotosContainer = styled(GridWithColumns)`
  margin-top: 10px;
`;

interface IPhotoGrid extends IPhotos, IColumnCount {}

export const PhotoGrid = ({ photos, columnCount }: IPhotoGrid) => {
  if (!(photos && photos.length > 0)) return null;

  return (
    <EventCardPhotosContainer columnCount={columnCount}>
      {photos.map((photo: IJpgSrc) => (
        <div data-test="image-container">
          <SquareImage imgSrc={photo} size="100%" />
        </div>
      ))}
    </EventCardPhotosContainer>
  );
};
