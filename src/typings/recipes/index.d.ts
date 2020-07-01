interface IIngredientCost {
  price: number;
  quantity?: number;
  measurement?: string;
  payFullAmountAlways?: boolean;
}

type IInventoryIngredientsObject = {
  [inventoryIngredient: string]: IInventoryIngredient;
};

interface IInventoryIngredient {
  displayText: string;
  knownCost?: IIngredientCost;
}

interface IRecipeIngredient {
  ingredient: IInventoryIngredient;
  quantity?: number;
  measurement?: string;
  optional?: boolean;
  notes?: string;
}

interface IServeWithItem {
  ingredient: IInventoryIngredient;
  notes?: string;
}
interface IRecipeMakes {
  quantity: number;
  measurement?: string;
}

interface IRecipeDiet {
  abbreviation: string;
  color: string;
}

interface IRecipeGroup {
  title: string;
  recipes: Array<IRecipeCard>;
}
