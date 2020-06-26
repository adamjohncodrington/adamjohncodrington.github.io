import React from "react";
import styled from "styled-components";

import { FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix } from "@utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";

const TextContainer = styled.div`
  margin-left: 10px;
  flex: 1;

  > *:not(:last-child) {
    padding-bottom: 5px;
  }
`;

const Artwork = styled(SquareImage)`
  display: block;
`;

export const VinylCard: React.FC<IVinylCard> = ({
  artist: { name },
  title,
  year,
  artwork,
  appleMusic
}) => {
  const artist: string = moveTheSuffixToPrefix(name);
  const artworkSize: string = "100px";

  return (
    <FlexRow data-test="vinyl-card">
      <a href={appleMusic}>
        <Artwork dataTest="vinyl-artwork" size={artworkSize} imgSrc={artwork} />
      </a>

      <TextContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <CardSubtitleBold>{artist}</CardSubtitleBold>

        <div>{year}</div>
      </TextContainer>
    </FlexRow>
  );
};
