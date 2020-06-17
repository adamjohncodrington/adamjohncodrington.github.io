type IIngredientMeasurement = string | undefined;
type IIngredientQuantity = number;
type IRecipeTitle = string;
type IImageSrc = string;
type IRecipeImage = IImageSrc;

interface IIngredientCost {
  quantity?: IIngredientQuantity;
  price: number;
  measurement?: IIngredientMeasurement;
  payFullAmountAlways?: boolean;
}

type IInventoryIngredients = {
  [inventoryIngredient: string]: IInventoryIngredient;
};

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
type IRecipeMethod = Array<string>;

type IMeasurements = { [measurement: string]: IIngredientMeasurement };

interface IRecipeCard {
  title: IRecipeTitle;
  makes?: IRecipeMakes;
  image?: IRecipeImage;
  serveWith?: Array<Array<IServeWithItem>>;
  ingredients: Array<Array<IRecipeIngredient>>;
  diet: IRecipeDiet;
  method?: IRecipeMethod;
  favourite?: boolean;
  newRecipe?: boolean;
  hide?: boolean;
}

interface IRecipeGroup {
  category: string;
  data: Array<IRecipeCard>;
}
