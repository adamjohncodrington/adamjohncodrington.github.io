import React from "react";

import { Disclosure } from "../Disclosure";

import { CardHeader } from "./CardHeader";
import { CardPanel } from "./CardPanel";

export const Card: React.FC<ICard> = cardProps => {
  const { video, photos } = cardProps;
  const isStatic: boolean = !(video || (photos && photos.length > 0));

  return (
    <Disclosure
      isStatic={isStatic}
      Header={hProps => <CardHeader {...hProps} {...cardProps} />}
      Panel={() => <CardPanel {...cardProps} />}
    />
  );
};
