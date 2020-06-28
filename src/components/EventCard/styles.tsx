import styled, { css } from "styled-components";

import { FlexColumn, FlexRow } from "primitives";
import { CSS } from "@styles";

export const EventCardCountdownNoteContainer = styled(FlexRow)(
  ({ theme: { eventCard } }: IThemeProp) => css`
    font-style: italic;

    > :not(:first-child) {
      margin-left: ${eventCard.countdownNote.horizontalGap};
      padding-top: ${eventCard.countdownNote.note.padding.top};
    }
  `
);

export const EventCardNote = styled.div(() => CSS.FONT_SIZE_75_PERCENT);

export const EventCardMainContainer = styled(FlexColumn)(
  ({ theme: { eventCard } }: IThemeProp) => css`
    > *:not(:first-child) {
      margin-top: ${eventCard.notFirstChild.margin.top};
    }
  `
);

export const EventCardDates = styled.div(() => CSS.FONT_SIZE_75_PERCENT);

export const EventCardCompanyContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-end;

  > * {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;
