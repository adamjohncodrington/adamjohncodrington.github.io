import React from "react";
import styled from "styled-components";

import { FlexRow, Text } from "../../../primitives";

const StyledFlexRow = styled(FlexRow)`
  font-style: italic;
`;

const Disclaimer = styled(Text.P.XS)`
  margin: 8px 0 0 4px;
`;

const EventCardCountdownContainer = styled(Text.P.S)`
  font-weight: bold;
  margin-top: 5px;
  text-align: left;
`;

interface EventCardCountdownProps {
  days: number;
  disclaimer?: string;
}

export const EventCardCountdown: React.FC<EventCardCountdownProps> = ({
  days,
  disclaimer
}) => (
  <StyledFlexRow>
    <EventCardCountdownContainer>
      {days === 0
        ? "TODAY"
        : days === 1
        ? days + " DAY TO GO"
        : days + " DAYS TO GO"}
    </EventCardCountdownContainer>
    {disclaimer && <Disclaimer>({disclaimer})</Disclaimer>}
  </StyledFlexRow>
);
