import React from "react";

import { CardTitle, CardSubtitle } from "primitives";

import {
  CardNote,
  CardCountdown,
  CardTextContainer,
  CardSecondaryBody
} from "./styles";

export const CardHeaderText: React.FC<ICardHeader> = props => {
  const {
    panelVisible,
    title,
    subtitle,
    favourite,
    hideFavouriteIcon,
    body,
    secondaryBody,
    note,
    countdownText,
    isStatic,
    hideBody,
    hideSecondaryBody,
    hideSubtitle
  } = props;

  return (
    <CardTextContainer data-test="card-container">
      <CardTitle
        bold={!isStatic && panelVisible}
        data-test="card-title"
        favourite={!hideFavouriteIcon && favourite}
      >
        {title}
      </CardTitle>

      {subtitle && !hideSubtitle && (
        <CardSubtitle bold={false} data-test="card-subtitle">
          {subtitle}
        </CardSubtitle>
      )}

      {body && !hideBody && <span data-test="card-body">{body}</span>}

      {secondaryBody && !hideSecondaryBody && (
        <CardSecondaryBody data-test="card-secondary-body">
          {secondaryBody}
        </CardSecondaryBody>
      )}

      {countdownText && (
        <>
          <CardCountdown data-test="card-countdown">
            {countdownText}
          </CardCountdown>

          {note && <CardNote data-test="card-note">{`(${note})`}</CardNote>}
        </>
      )}
    </CardTextContainer>
  );
};
