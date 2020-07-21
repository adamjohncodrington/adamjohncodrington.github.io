type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface IPhoto {
  date?: Date;
  title?: string;
  url: string;
}

interface IVideo {
  youtubeId: string;
  orientation: "portrait" | "landscape";
  quality: "720p" | "1080p";
}
