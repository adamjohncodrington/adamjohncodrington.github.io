import React, { FC } from "react";
import styled from "styled-components";

import { PhotoLink } from "../PhotoLink";

import { GridWithColumns } from "primitives";
import { shuffleArray } from "utils";

export const CardPhotosContainer = styled(GridWithColumns)`
  margin-top: 0.5rem;
`;

const generateColumnCount = (photoCount: number): number => {
  switch (photoCount) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 2;
    default:
      if (photoCount > 32) return 4;
      if (photoCount > 18) return 3;
      return 2;
  }
};

export const PhotoGrid: FC<IPhotoGrid> = props => {
  const { photos } = props;

  const validPhotos: IPhoto[] = photos.filter(
    ({ hide }: IPhoto): boolean => !hide
  );
  const validPhotoCount: number = validPhotos.length;

  const { columnCount = generateColumnCount(validPhotoCount) } = props;

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
