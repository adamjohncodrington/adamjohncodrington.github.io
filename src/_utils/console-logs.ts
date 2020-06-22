import { numberToCurrencyString } from "./numberToCurrencyString";
import { concatenateQuantityAndMeasurement } from "./concatenateQuantityAndMeasurement";

export const consoleLogRecipeTitle = (title: string): void => {
  const logDashedLine = () => console.log("----------");

  logDashedLine();
  console.log(title);
  logDashedLine();
};

interface IConsoleLogCostedIngredient {
  cost: number;
  quantity: IIngredientQuantity;
  measurement: IIngredientMeasurement;
  ingredient: IInventoryIngredient;
}

export const consoleLogCostedIngredient = ({
  cost,
  quantity,
  measurement,
  ingredient
}: IConsoleLogCostedIngredient): void => {
  if (!quantity || cost === 0) return;

  const displayIngredient = ingredient.displayText;
  const displayPrice: string = numberToCurrencyString(cost);
  const stringQuantityMeasurement: string = concatenateQuantityAndMeasurement(
    quantity.toString(),
    measurement
  );

  const outputLine: string =
    displayPrice +
    " for " +
    stringQuantityMeasurement +
    " " +
    displayIngredient;

  console.log(outputLine);
};
