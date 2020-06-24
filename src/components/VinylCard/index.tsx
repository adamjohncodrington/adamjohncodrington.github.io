import React from "react";
import styled from "styled-components";

import { FlexRow } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";

//TODO: move to theme
const VinylArtwork = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 15px;
`;

const TextContainer = styled.div`
  flex: 1;

  > *:not(:last-child) {
    padding-bottom: 5px;
  }
`;

export const VinylCard: React.FC<IVinylCard> = ({
  artist: { name },
  title,
  year,
  artwork
}) => {
  const artist: string = moveTheSuffixToPrefix(name);

  return (
    <FlexRow data-test="vinyl-card">
      <VinylArtwork src={artwork} />

      <TextContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <CardSubtitleBold>{artist}</CardSubtitleBold>

        <div>{year}</div>
      </TextContainer>
    </FlexRow>
  );
};
