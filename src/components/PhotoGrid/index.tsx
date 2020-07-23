import React from "react";
import styled from "styled-components";

import { GridWithColumns, SquareImage } from "primitives";
import { shuffle } from "utils";

export const EventCardPhotosContainer = styled(GridWithColumns)`
  margin-top: 10px;
`;

export const PhotoGrid = ({
  photos,
  columnCount,
  randomise = true
}: IPhotoGrid) => {
  const PHOTOS = randomise ? shuffle(photos) : photos;

  return (
    <EventCardPhotosContainer columnCount={columnCount}>
      {PHOTOS.map((photo: IPhoto, index: number) => (
        <div key={index} data-test="image-container">
          <SquareImage photo={photo} size="100%" />
        </div>
      ))}
    </EventCardPhotosContainer>
  );
};
