import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { CardHeader } from "./CardHeader";
import { CardPanel } from "./CardPanel";

export const Card: FC<ICard> = props => {
  const { video, photos } = props;
  const panelExists: boolean = !!(video || (photos && photos.length > 0));
  const isStaticProp: I__IsStatic = {
    isStatic: !panelExists
  };

  return (
    <Disclosure
      {...isStaticProp}
      Header={headerProps => (
        <CardHeader {...props} {...headerProps} {...isStaticProp} />
      )}
      Panel={() => <CardPanel {...props} />}
    />
  );
};
