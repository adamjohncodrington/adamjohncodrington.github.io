import React from "react";

import { isInFuture } from "utils";

import { Disclosure } from "../Disclosure";

import { MiniCardPanelItemHeader } from "./MiniCardPanelItemHeader";
import { MiniCardPanelItemPanel } from "./MiniCardPanelItemPanel";
import { StyledLi } from "./styles";

export const MiniCardPanelItem: React.FC<IMiniCardPanelItem> = props => {
  const { index, dates, video } = props;
  const IS_IN_FUTURE: boolean = isInFuture(dates[0]);

  return (
    <StyledLi key={index} isInFuture={IS_IN_FUTURE}>
      <Disclosure
        isStatic={!video}
        Header={hProps => <MiniCardPanelItemHeader {...hProps} {...props} />}
        Panel={() => <MiniCardPanelItemPanel {...props} />}
      />
    </StyledLi>
  );
};
