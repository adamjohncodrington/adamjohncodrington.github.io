import React from "react";

import { isInFuture as isInFutureUtil } from "utils";

import { Disclosure } from "../Disclosure";

import { MiniCardPanelDetailHeader } from "./MiniCardPanelDetailHeader";
import { MiniCardPanelDetailPanel } from "./MiniCardPanelDetailPanel";
import { StyledLi } from "./styles";

export const MiniCardPanelDetail: React.FC<IMiniCardPanelDetail> = props => {
  const { index, dates, video } = props;
  const isInFuture: boolean = !!(dates && isInFutureUtil(dates[0]));

  const isStaticProp: I__IsStatic = {
    isStatic: !video
  };

  return (
    <StyledLi key={index} isInFuture={isInFuture}>
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
