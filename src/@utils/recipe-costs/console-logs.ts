import { numberToCurrencyString } from "../basic";
import { concatenateQuantityAndMeasurement } from "../concatenateQuantityAndMeasurement";

const LOG_RECIPE_COST_CALCULATIONS: boolean = false;

export const consoleLogRecipeTitle = (title: string): void => {
  if (!LOG_RECIPE_COST_CALCULATIONS) return;

  const logDashedLine = (): void => console.log("-----------------------");

  logDashedLine();
  console.log(title.toUpperCase());
  logDashedLine();
};

interface IConsoleLogCostedIngredient extends IRecipeIngredient {
  cost: number;
}

export const consoleLogCostedIngredient = ({
  cost,
  quantity,
  measurement,
  ingredient
}: IConsoleLogCostedIngredient): void => {
  if (!LOG_RECIPE_COST_CALCULATIONS) return;

  if (!quantity || cost === 0) return;

  const displayIngredient = ingredient.displayText;
  const priceString: string = numberToCurrencyString(cost, 2);
  const quantityString: string = quantity.toString();
  const quantityMeasurementString: string = measurement
    ? concatenateQuantityAndMeasurement(quantityString, measurement)
    : quantityString;

  console.log(
    priceString + " for " + quantityMeasurementString + " " + displayIngredient
  );
};
