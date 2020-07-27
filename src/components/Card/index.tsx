import React from "react";

import { Disclosure } from "../Disclosure";

import { CardHeader } from "./CardHeader";
import { CardPanel } from "./CardPanel";

export const Card: React.FC<ICard> = props => {
  const { video, photos } = props;
  const isStatic: boolean = !(video || (photos && photos.length > 0));

  return (
    <Disclosure
      isStatic={isStatic}
      Header={hProps => <CardHeader {...hProps} {...props} />}
      Panel={() => <CardPanel {...props} />}
    />
  );
};
