import React, { FC } from "react";

import { isInFuture as isInFutureUtil } from "utils";

import { Disclosure } from "../Disclosure";

import { MiniCardPanelDetailHeader } from "./MiniCardPanelDetailHeader";
import { MiniCardPanelDetailPanel } from "./MiniCardPanelDetailPanel";
import { StyledLi } from "./styles";

export const MiniCardPanelDetail: FC<IMiniCardPanelDetail> = props => {
  const { index, dates, video } = props;
  const isInFuture: boolean = !!(dates && isInFutureUtil(dates[0]));
  const panelExists: boolean = !!video;

  const isStaticProp: I__IsStatic = {
    isStatic: !panelExists
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
