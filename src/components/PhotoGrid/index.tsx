import React from "react";
import styled from "styled-components";

import { GridWithColumns, SquareImage } from "primitives";
import { shuffleArray } from "utils";

export const CardPhotosContainer = styled(GridWithColumns)`
  margin-top: 10px;
`;

export const PhotoGrid = ({
  photos,
  columnCount,
  shuffle = true
}: IPhotoGrid) => {
  const PHOTOS = shuffle ? shuffleArray(photos) : photos;

  return (
    <CardPhotosContainer columnCount={columnCount}>
      {PHOTOS.map((photo: IPhoto, index: number) => (
        <div key={index} data-test="image-container">
          <SquareImage photo={photo} size="100%" />
        </div>
      ))}
    </CardPhotosContainer>
  );
};
