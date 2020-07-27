import React from "react";

import { isInFuture } from "utils";

import { Disclosure } from "../Disclosure";

import { MiniCardPanelItemHeader } from "./MiniCardPanelItemHeader";
import { MiniCardPanelItemPanel } from "./MiniCardPanelItemPanel";
import { StyledLi } from "./styles";

export const MiniCardPanelItem: React.FC<IMiniCardPanelItem> = props => {
  const { index, dates, video } = props;
  const IS_IN_FUTURE: boolean = isInFuture(dates[0]);

  const isStaticProp: I__IsStatic = {
    isStatic: !video
  };

  return (
    <StyledLi key={index} isInFuture={IS_IN_FUTURE}>
      <Disclosure
        {...isStaticProp}
        Header={headerProps => (
          <MiniCardPanelItemHeader
            {...headerProps}
            {...props}
            {...isStaticProp}
          />
        )}
        Panel={() => <MiniCardPanelItemPanel {...props} />}
      />
    </StyledLi>
  );
};
