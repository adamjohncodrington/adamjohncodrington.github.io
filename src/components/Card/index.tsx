import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { CardHeader } from "./CardHeader";
import { CardPanel } from "./CardPanel";

export const Card: FC<CardProps> = props => {
  const { video, photos } = props;
  const panelExists: boolean = !!(video || (photos && photos.length > 0));

  return (
    <Disclosure
      panelExists={panelExists}
      Header={headerProps => (
        <CardHeader {...props} {...headerProps} panelExists={panelExists} />
      )}
      Panel={() => <CardPanel {...props} />}
    />
  );
};
