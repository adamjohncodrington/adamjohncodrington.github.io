import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { MiniCardPanel } from "./MiniCardPanel";
import { MiniCardHeader } from "./MiniCardHeader";

export const MiniCard: FC<IMiniCard> = props => {
  const { details } = props;

  const staticProp: I__IsStatic = {
    isStatic: !details
  };

  return (
    <li>
      <Disclosure
        {...staticProp}
        Header={hProps => (
          <MiniCardHeader {...hProps} {...props} {...staticProp} />
        )}
        Panel={() => <MiniCardPanel {...props} />}
      />
    </li>
  );
};
