import React, { FC } from "react";
import { css } from "styled-components";

import { CardTitle, CardSubtitle, FlexRowDynamic } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { CardDisclaimer, CardTextContainer, CardSecondaryBody } from "./styles";

export const CardHeaderText: FC<ICardHeader> = ({
  panelVisible,
  panelExists,
  title,
  subtitle,
  favourite,
  body,
  secondaryBody,
  disclaimer
}) => (
  <CardTextContainer data-test="card-container">
    <FlexRowDynamic
      bold={false}
      italic={false}
      alignItems="center"
      firstDirectChildCss={css`
        margin-right: 0.375rem;
      `}
    >
      <CardTitle
        bold={panelExists && panelVisible}
        data-test="card-title"
        favourite={favourite}
      >
        {moveTheSuffixToPrefix(title)}
      </CardTitle>
    </FlexRowDynamic>
    {subtitle && (
      <CardSubtitle bold={false} data-test="card-subtitle">
        {moveTheSuffixToPrefix(subtitle)}
      </CardSubtitle>
    )}
    {body && <span data-test="card-body">{moveTheSuffixToPrefix(body)}</span>}
    {secondaryBody && (
      <CardSecondaryBody data-test="card-secondary-body">
        {moveTheSuffixToPrefix(secondaryBody)}
      </CardSecondaryBody>
    )}
    {disclaimer && (
      <CardDisclaimer data-test="card-disclaimer">{`(${moveTheSuffixToPrefix(
        disclaimer
      )})`}</CardDisclaimer>
    )}
  </CardTextContainer>
);
