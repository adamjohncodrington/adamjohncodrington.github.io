type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

type IPhoto = string | undefined;

interface IYouTubeVideo {
  id: string;
  orientation: "portrait" | "landscape";
  quality: "720p" | "1080p";
}
