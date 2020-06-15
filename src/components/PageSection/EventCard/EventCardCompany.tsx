import React from "react";
import styled from "styled-components";

import { Circle, FlexRow } from "../../../primitives";
import { EVENT_CARD_TYPES } from "../../../constants";

const StyledCircle = styled(Circle)`
  margin: 0 0 5px 5px;
`;

interface ICompanyContainer {
  eventType: IEventCardType;
}
const CompanyContainer = styled(FlexRow)`
  max-width: ${({ eventType }: ICompanyContainer) =>
    eventType === EVENT_CARD_TYPES.TRIP ? "60%" : "35%"};

  padding-top: 3px;
  margin-left: 5px;

  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  // This means that the wrapping friend circles are equally spaced
  max-height: 0;
`;

interface EventCardCompanyProps {
  company: Array<IFriend>;
  eventType: IEventCardType;
}

export const EventCardCompany: React.FC<EventCardCompanyProps> = ({
  company,
  eventType
}) => (
  <CompanyContainer
    eventType={eventType}
    data-test="event-card-company-container"
  >
    {company.map((item: IFriend, index: number) => (
      //@ts-ignore
      <StyledCircle
        data-test={"event-card-company-item-" + (index + 1)}
        key={index}
        size="20px"
        fontSize="9px"
      >
        {item.initials}
      </StyledCircle>
    ))}
  </CompanyContainer>
);
