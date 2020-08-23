import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { MiniCardPanel } from "./MiniCardPanel";
import { MiniCardHeader } from "./MiniCardHeader";

export const MiniCard: FC<IMiniCard> = props => {
  const { details, video, photos } = props;
  const panelExists: boolean = !!(video || photos || details);

  return (
    <Disclosure
      panelExists={panelExists}
      Header={headerProps => (
        <MiniCardHeader {...props} {...headerProps} panelExists={panelExists} />
      )}
      Panel={() => <MiniCardPanel {...props} />}
    />
  );
};
