import React from "react";

import { GridColumnDiv, FlexRow } from "primitives";

import { RoundedSymbol } from "../RoundedSymbol";

import { CardHeaderPhoto } from "./CardHeaderPhoto";
import { CardHeaderText } from "./CardHeaderText";
import { CardSymbolsContainer } from "./styles";

export const CardHeader: React.FC<ICardHeader> = props => {
  const {
    company,
    video,
    photos,
    hidePhotosIcon,
    hideVideoIcon,
    hideCompanySymbols
  } = props;

  return (
    <FlexRow>
      <CardHeaderPhoto {...props} />

      <GridColumnDiv data-test="card-grid-container" equalWidthColumns={false}>
        <CardHeaderText {...props} />

        {(company.length > 0 || video) && (
          <CardSymbolsContainer>
            {company.length > 0 &&
              !hideCompanySymbols &&
              company
                .sort((a: IFriend, b: IFriend): number =>
                  a.initials > b.initials ? 1 : -1
                )
                .map(({ initials }: IFriend, index: number) => (
                  <RoundedSymbol key={index} type="friend" opacity="50%">
                    {initials}
                  </RoundedSymbol>
                ))}

            {photos && !hidePhotosIcon && (
              <RoundedSymbol
                type="photo"
                opacity={!hideCompanySymbols ? "100%" : "50%"}
              />
            )}
            {video && !hideVideoIcon && (
              <RoundedSymbol
                type="video"
                opacity={!hideCompanySymbols ? "100%" : "50%"}
              />
            )}
          </CardSymbolsContainer>
        )}
      </GridColumnDiv>
    </FlexRow>
  );
};
