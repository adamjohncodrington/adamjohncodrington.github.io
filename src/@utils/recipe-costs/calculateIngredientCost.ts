import { convertIngredientQuantity } from "./convertIngredientQuantity";

export const calculateIngredientCost = ({
  ingredient: { displayText, knownCost },
  quantity,
  measurement
}: IRecipeIngredient): number => {
  if (knownCost) {
    // Water, salt
    if (knownCost.price === 0) return 0;
    // Fresh herbs
    if (knownCost.payFullAmountAlways) return knownCost.price;

    if (quantity && knownCost.quantity) {
      if (!measurement) {
        // 3 mixed peppers
        if (!knownCost.measurement)
          return quantity * (knownCost.price / knownCost.quantity);

        // Carrot, banana, onion
        return quantity * knownCost.price;
      }

      // Grams, cans, tbsp, litre
      if (measurement && knownCost.measurement) {
        if (measurement === knownCost.measurement) {
          return quantity * (knownCost.price / knownCost.quantity);
        }

        return (
          (convertIngredientQuantity({
            quantity,
            measurement,
            knownCost
          }) /
            knownCost.quantity) *
          knownCost.price
        );
      }
    }
  }

  alert("Error calculating cost for ingredient: " + displayText);
  return 0;
};
