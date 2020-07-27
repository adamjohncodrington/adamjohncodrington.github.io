import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { MiniCardPanel } from "./MiniCardPanel";
import { MiniCardHeader } from "./MiniCardHeader";

export const MiniCard: FC<IMiniCard> = props => {
  const { details } = props;
  return (
    <li>
      <Disclosure
        isStatic={!details}
        Header={headerProps => <MiniCardHeader {...headerProps} {...props} />}
        Panel={() => <MiniCardPanel {...props} />}
      />
    </li>
  );
};
