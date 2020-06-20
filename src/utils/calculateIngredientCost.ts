import { convertIngredientQuantity } from "./convertIngredientQuantity";

type ICalculateIngredientCost = {
  ingredient: IInventoryIngredient;
  quantity?: IIngredientQuantity;
  measurement: IIngredientMeasurement;
};

export const calculateIngredientCost = ({
  ingredient,
  quantity,
  measurement
}: ICalculateIngredientCost): number => {
  if (!quantity) return 0;

  let [ingredientQuantity, ingredientMeasurement] = [quantity, measurement];

  // Extract the attached inventory cost information
  const inventory = ingredient.cost;
  const inventoryQuantity = inventory && inventory.quantity;
  const inventoryMeasurement = inventory && inventory.measurement;
  const inventoryPrice = inventory && inventory.price;

  // Charge nothing for zero-cost items or items (water, salt, pepper)
  if (inventoryPrice === 0 || (!ingredientQuantity && !ingredientMeasurement))
    return 0;

  // Certain items like fresh herbs will cost the full amount always
  //@ts-ignore
  if (inventory && inventory.payFullAmountAlways) return inventoryPrice;

  // If ingredient and inventory MEASUREMENTS don't already match, attempt to make them match
  if (ingredientMeasurement !== inventoryMeasurement) {
    ingredientQuantity = convertIngredientQuantity(
      ingredientQuantity,
      ingredientMeasurement,
      inventoryMeasurement
    );

    ingredientMeasurement = inventoryMeasurement;
  }

  // Now the ingredient and inventory MEASUREMENTS should match, perform simple proportion calculation
  if (
    ingredientMeasurement === inventoryMeasurement ||
    (!ingredientMeasurement && !inventoryMeasurement)
  )
    //@ts-ignore
    return (ingredientQuantity / inventoryQuantity) * inventoryPrice;

  // If the ingredient and inventory MEASUREMENTS still don't match, throw a deliberate error
  alert("ERROR");
  return 0;
};
