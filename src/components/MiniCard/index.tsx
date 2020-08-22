import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { MiniCardPanel } from "./MiniCardPanel";
import { MiniCardHeader } from "./MiniCardHeader";

export const MiniCard: FC<IMiniCard> = props => {
  const { details, video, primaryText } = props;
  const panelExists: boolean = !!(video || details);
  const isStaticProp: I__IsStatic = {
    isStatic: !panelExists
  };

  if (!panelExists) return <div>{primaryText}</div>;

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
