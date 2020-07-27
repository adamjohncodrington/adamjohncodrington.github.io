import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { MiniCardPanel } from "./MiniCardPanel";
import { MiniCardHeader } from "./MiniCardHeader";

export const MiniCard: FC<IMiniCard> = props => {
  const { details } = props;
  const isStaticProp: I__IsStatic = {
    isStatic: !details
  };

  return (
    <li>
      <Disclosure
        {...isStaticProp}
        Header={headerProps => (
          <MiniCardHeader {...props} {...headerProps} {...isStaticProp} />
        )}
        Panel={() => <MiniCardPanel {...props} />}
      />
    </li>
  );
};
