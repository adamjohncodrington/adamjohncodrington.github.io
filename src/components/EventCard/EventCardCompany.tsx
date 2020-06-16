import React from "react";
import styled from "styled-components";

import { Circle, FlexRow } from "../../primitives";

const StyledCircle = styled(Circle)`
  margin: 0 0 5px 5px;
`;

const CompanyContainer = styled(FlexRow)`
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
}

export const EventCardCompany: React.FC<EventCardCompanyProps> = ({
  company
}) => (
  <CompanyContainer data-test="event-card-company-container">
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
