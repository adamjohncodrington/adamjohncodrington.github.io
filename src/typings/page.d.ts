interface IPage {
  title: string;
  path: string;
  SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  sections: Array<IPageSection>;
  count?: number;
  hide?: boolean;
  color?: ColorValue;
}
