import { HERBS_DRIED } from "./dried-herbs";
import { HERBS_FRESH } from "./fresh-herbs";

export const HERBS: IInventoryIngredients = { ...HERBS_DRIED, ...HERBS_FRESH };
