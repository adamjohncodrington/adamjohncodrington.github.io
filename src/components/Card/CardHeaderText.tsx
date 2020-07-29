import React from "react";

import { CardTitle, CardSubtitle } from "primitives";

import {
  CardNote,
  CardCountdown,
  CardTextContainer,
  CardSecondaryBody
} from "./styles";

export const CardHeaderText: React.FC<ICardHeader> = ({
  panelVisible,
  title,
  subtitle,
  favourite,
  body,
  secondaryBody,
  note,
  countdownText,
  isStatic
}) => (
  <CardTextContainer data-test="card-container">
    <CardTitle
      bold={!isStatic && panelVisible}
      data-test="card-title"
      favourite={favourite}
    >
      {title}
    </CardTitle>

    {subtitle && (
      <CardSubtitle bold={false} data-test="card-subtitle">
        {subtitle}
      </CardSubtitle>
    )}

    {body && <span data-test="card-body">{body}</span>}

    {secondaryBody && (
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
