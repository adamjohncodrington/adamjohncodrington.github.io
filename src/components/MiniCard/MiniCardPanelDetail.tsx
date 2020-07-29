import React from "react";

import { isInFuture } from "utils";

import { Disclosure } from "../Disclosure";

import { MiniCardPanelDetailHeader } from "./MiniCardPanelDetailHeader";
import { MiniCardPanelDetailPanel } from "./MiniCardPanelDetailPanel";
import { StyledLi } from "./styles";

export const MiniCardPanelDetail: React.FC<IMiniCardPanelDetail> = props => {
  const { index, dates, video } = props;
  const IS_IN_FUTURE: boolean = !!(dates && isInFuture(dates[0]));

  const isStaticProp: I__IsStatic = {
    isStatic: !video
  };

  return (
    <StyledLi key={index} isInFuture={IS_IN_FUTURE}>
      <Disclosure
        {...isStaticProp}
        Header={headerProps => (
          <MiniCardPanelDetailHeader
            {...headerProps}
            {...props}
            {...isStaticProp}
          />
        )}
        Panel={() => <MiniCardPanelDetailPanel {...props} />}
      />
    </StyledLi>
  );
};
