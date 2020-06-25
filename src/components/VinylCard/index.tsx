import React, { ReactElement } from "react";
import styled from "styled-components";

import { FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";

const TextContainer = styled.div`
  margin-left: 10px;
  flex: 1;

  > *:not(:last-child) {
    padding-bottom: 5px;
  }
`;

const ArtworkLinkWrapper = styled.a`
  > * {
    display: block;
  }
`;

export const VinylCard: React.FC<IVinylCard> = ({
  artist: { name },
  title,
  year,
  artwork,
  link
}) => {
  const artist: string = moveTheSuffixToPrefix(name);
  const artworkSize: string = "100px";

  const ArtworkImage: ReactElement = (
    <SquareImage dataTest="vinyl-artwork" size={artworkSize} imgSrc={artwork} />
  );

  const ArtworkPlusWrapper: ReactElement = link ? (
    <ArtworkLinkWrapper href={link}>{ArtworkImage}</ArtworkLinkWrapper>
  ) : (
    ArtworkImage
  );

  return (
    <FlexRow data-test="vinyl-card">
      {ArtworkPlusWrapper}

      <TextContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <CardSubtitleBold>{artist}</CardSubtitleBold>

        <div>{year}</div>
      </TextContainer>
    </FlexRow>
  );
};
