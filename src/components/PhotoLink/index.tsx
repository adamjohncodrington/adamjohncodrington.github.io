import React, { ReactElement } from "react";

import { Link, SquareImage } from "primitives";

interface IPhotoLink extends I_Photo {
  size?: string;
}

export const PhotoLink: React.FC<IPhotoLink> = ({ photo, size = "100%" }) => {
  const { href } = photo;
  const Photo: ReactElement = <SquareImage size={size} photo={photo} />;
  return href ? <Link href={href}>{Photo}</Link> : Photo;
};
