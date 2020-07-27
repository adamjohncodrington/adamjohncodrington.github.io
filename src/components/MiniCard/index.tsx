import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { MiniCardPanel } from "./MiniCardPanel";
import { MiniCardHeader } from "./MiniCardHeader";

export const MiniCard: FC<IMiniCard> = props => {
  const isStaticProp: I__IsStatic = {
    isStatic: !props.details
  };

  return (
    <li>
      <Disclosure
        {...isStaticProp}
        Header={headerProps => (
          <MiniCardHeader {...headerProps} {...props} {...isStaticProp} />
        )}
        Panel={() => <MiniCardPanel {...props} />}
      />
    </li>
  );
};
