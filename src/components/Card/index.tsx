import React from "react";

import { Disclosure } from "../Disclosure";

import { CardHeader } from "./CardHeader";
import { CardPanel } from "./CardPanel";

export const Card: React.FC<ICard> = props => {
  const { video, photos } = props;
  const isStaticProp: I__IsStatic = {
    isStatic: !(video || (photos && photos.length > 0))
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
