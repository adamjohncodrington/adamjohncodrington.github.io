import { decimalToFractionString } from "./decimalToFractionString";
import { concatenateQuantityAndMeasurement } from "./concatenateQuantityAndMeasurement";

const POTATO = "potato";

export const generateIngredientListItem = ({
  quantity,
  measurement,
  ingredient,
  optional,
  notes
}: IRecipeIngredient): string => {
  const ingredientText: string = ingredient.displayText;

  // Can we return the ingredient with no measurement, i.e. "freshly ground rock salt"
  if (!quantity && !measurement) return ingredientText;

  // Do we need to turn a decimal to a more aesthetically-pleasing fraction?
  //@ts-ignore
  const displayQuantity: string = decimalToFractionString(quantity);

  // Ensure it says "2 limes" instead of "2 lime" or "3 potatoes" instead of "3 potato"
  const displayIngredient: string =
    //@ts-ignore
    quantity > 1 && !measurement
      ? ingredientText.slice(-POTATO.length) === POTATO
        ? ingredientText + "es"
        : ingredientText + "s"
      : ingredientText;

  // Establish if there will be a space between the quantity and the unit of measurement
  const displayQuantityMeasurement = concatenateQuantityAndMeasurement(
    displayQuantity,
    measurement
  );

  // Concatenate the quantity and measurement with the ingredient itself
  const displayQuantityMeasurementIngredients =
    displayQuantityMeasurement + " " + displayIngredient;

  // Append the ingredient notes or "optional" text if required
  return optional
    ? displayQuantityMeasurementIngredients + " (optional)"
    : notes
    ? `${displayQuantityMeasurementIngredients} (${notes})`
    : displayQuantityMeasurementIngredients;
};
