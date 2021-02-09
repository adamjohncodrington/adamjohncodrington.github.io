import { SFW_MODE } from "config";
import { SVG } from "resources";
import { POLE as sections } from "sections";

export const POLE: IPage = {
  title: "Pole",
  path: "/pole",
  SvgIcon: SVG.DANCER_POSE,
  sections,
  hide: SFW_MODE
};
