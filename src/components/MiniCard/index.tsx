import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { MiniCardPanel } from "./MiniCardPanel";
import { MiniCardHeader } from "./MiniCardHeader";

export const MiniCard: FC<IMiniCard> = props => {
  const { panelDetails, video } = props;
  const isStaticProp: I__IsStatic = {
    isStatic: !panelDetails && !video
  };

  return (
    <Disclosure
      {...isStaticProp}
      Header={headerProps => (
        <MiniCardHeader {...props} {...headerProps} {...isStaticProp} />
      )}
      Panel={() => <MiniCardPanel {...props} />}
    />
  );
};
