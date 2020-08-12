import React from "react";
import styled from "styled-components";

import { PhotoLink } from "../PhotoLink";

import { GridWithColumns } from "primitives";
import { shuffleArray } from "utils";

export const CardPhotosContainer = styled(GridWithColumns)`
  margin-top: 10px;
`;

export const PhotoGrid = ({ photos }: IPhotoGrid) => {
  const validPhotos: IPhoto[] = photos.filter(
    ({ hide }: IPhoto): boolean => !hide
  );

  const validPhotoCount: number = validPhotos.length;

  const columnCount: number =
    validPhotoCount === 1
      ? 1
      : validPhotoCount === 2
      ? 2
      : validPhotoCount === 3
      ? 3
      : validPhotoCount === 4
      ? 2
      : validPhotoCount > 32
      ? 4
      : validPhotoCount > 18
      ? 3
      : 2;

  const numberOfPhotosToRemove: number = validPhotoCount % columnCount;

  const shuffled: IPhoto[] = shuffleArray(validPhotos);
  const filtered: IPhoto[] = shuffled.filter(
    (photo: IPhoto, index: number) =>
      index < validPhotoCount - numberOfPhotosToRemove
  );

  return (
    <CardPhotosContainer columnCount={columnCount}>
      {filtered.map((photo: IPhoto, index: number) => (
        <div key={index} data-test="image-container">
          <PhotoLink photo={photo} />
        </div>
      ))}
    </CardPhotosContainer>
  );
};
