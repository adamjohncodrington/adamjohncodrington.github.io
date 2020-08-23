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

  return (
    <StyledLi key={index} isInFuture={isInFuture}>
      <Disclosure
        panelExists={panelExists}
        Header={headerProps => (
          <MiniCardPanelDetailHeader
            {...headerProps}
            {...props}
            panelExists={panelExists}
          />
        )}
        Panel={() => <MiniCardPanelDetailPanel {...props} />}
      />
    </StyledLi>
  );
};
