import { BAKING_AGENTS } from "./baking-agents";
import { COCOA } from "./cocoa";
import { FLOUR } from "./flour";
import { SUGAR } from "./sugar";
import { SYRUPS } from "./syrups";

export const BAKING = {
  ...BAKING_AGENTS,
  ...COCOA,
  ...FLOUR,
  ...SUGAR,
  ...SYRUPS
};
