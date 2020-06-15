type IIngredientMeasurement = string | undefined;
type IIngredientQuantity = number;
type IRecipeTitle = string;
type IImageSrc = string;

interface IIngredientCost {
  quantity?: IIngredientQuantity;
  price: number;
  measurement?: IIngredientMeasurement;
  payFullAmountAlways?: boolean;
}

interface IInventoryIngredient {
  displayText: string;
  cost?: IIngredientCost;
}
interface IServeWithItem {
  ingredient: IInventoryIngredient;
  notes?: string;
}
interface IRecipeMakes {
  quantity: IIngredientQuantity;
  measurement: IIngredientMeasurement;
}

interface IRecipeIngredient {
  ingredient: IInventoryIngredient;
  quantity?: IIngredientQuantity;
  measurement?: IIngredientMeasurement;
  optional?: boolean;
  notes?: string;
}

interface IRecipeDiet {
  abbreviation: string;
  color: string;
}
type IRecipeIngredients = Array<Array<IRecipeIngredient>>;
type IServeWith = Array<Array<IServeWithItem>>;
type IRecipeMethod = Array<string>;

interface IRecipeCard {
  title: IRecipeTitle;
  makes?: IRecipeMakes;
  image?: IImageSrc;
  serveWith?: IServeWith;
  ingredients: IRecipeIngredients;
  diet: IRecipeDiet;
  method: IRecipeMethod;
  favourite?: boolean;
  newRecipe?: boolean;
  hide?: boolean;
}

interface IRecipeGroup {
  category: string;
  data: Array<IRecipeCard>;
}
