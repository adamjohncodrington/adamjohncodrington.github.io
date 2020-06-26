type IImageSrc = string;
type IRecipeImage = IImageSrc;

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

interface IRecipeCard {
  title: string;
  makes?: IRecipeMakes;
  image?: IRecipeImage;
  serveWith?: Array<Array<IServeWithItem>>;
  ingredients: Array<Array<IRecipeIngredient>>;
  diet: IRecipeDiet;
  method: Array<string>;
  favourite?: boolean;
  newRecipe?: boolean;
  hide?: boolean;
  totalCost?: number;
  portionCost?: number;
}

interface IRecipeGroup {
  title: string;
  recipes: Array<IRecipeCard>;
}
