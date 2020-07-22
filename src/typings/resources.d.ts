type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface IPhoto {
  date?: Date;
  title?: string;
  url: string;
}

interface I_OrientationQuality {
  orientation: "portrait" | "landscape";
  quality: "720p" | "1080p";
}

interface IVideo extends I_OrientationQuality {
  youtubeId: string;
}

interface IGigVideo extends IVideo {
  musician: IMusician;
}
