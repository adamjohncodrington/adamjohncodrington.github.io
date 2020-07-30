import React from "react";
import styled from "styled-components";

import { PhotoLink } from "../PhotoLink";

import { GridWithColumns } from "primitives";
import { shuffleArray } from "utils";

export const CardPhotosContainer = styled(GridWithColumns)`
  margin-top: 10px;
`;

export const PhotoGrid = ({ photos, columnCount }: IPhotoGrid) => {
  const validPhotos: Array<IPhoto> = photos.filter(
    ({ hide }: IPhoto): boolean => !hide
  );
  const validPhotoCount: number = validPhotos.length;
  const numberOfPhotosToRemove: number = validPhotoCount % columnCount;
  const shuffled: Array<IPhoto> = shuffleArray(validPhotos);
  const filtered: Array<IPhoto> = shuffled.filter(
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
