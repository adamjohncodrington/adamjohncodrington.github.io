import React from "react";

import { Symbol } from "../Symbol";

import { CardSymbolsContainer } from "./styles";

export const CardHeaderSymbols: React.FC<ICard> = ({
  company,
  video,
  photos,
  hidePhotosIcon,
  hideVideoIcon,
  hideCompanySymbols
}) => {
  if (!(company.length > 0 || video)) return null;

  return (
    <CardSymbolsContainer>
      {company.length > 0 &&
        !hideCompanySymbols &&
        company
          .sort((a: IFriend, b: IFriend): number =>
            a.initials > b.initials ? 1 : -1
          )
          .map(({ initials }: IFriend, index: number) => (
            <Symbol key={index} type="friend" opacity="50%">
              {initials}
            </Symbol>
          ))}

      {photos && !hidePhotosIcon && (
        <Symbol type="photo" opacity={!hideCompanySymbols ? "100%" : "50%"} />
      )}

      {video && !hideVideoIcon && (
        <Symbol type="video" opacity={!hideCompanySymbols ? "100%" : "50%"} />
      )}
    </CardSymbolsContainer>
  );
};
