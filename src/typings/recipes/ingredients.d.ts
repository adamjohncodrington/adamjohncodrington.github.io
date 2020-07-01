interface IIngredientCost {
  price: number;
  quantity?: number;
  measurement?: string;
  payFullAmountAlways?: boolean;
}

interface IInventoryIngredient {
  displayText: string;
  knownCost?: IIngredientCost;
}

interface IFlour {
  CORNFLOUR: IInventoryIngredient;
  FLOUR_PLAIN: IInventoryIngredient;
  FLOUR_SELF_RAISING: IInventoryIngredient;
}

interface ISugar {
  SUGAR_BROWN: IInventoryIngredient;
  SUGAR_BROWN_DARK: IInventoryIngredient;
  SUGAR_BROWN_LIGHT: IInventoryIngredient;
  SUGAR_CASTER_GOLDEN: IInventoryIngredient;
  SUGAR_DEMERARA: IInventoryIngredient;
  SUGAR_GRANULATED: IInventoryIngredient;
  SUGAR_ICING: IInventoryIngredient;
}

interface ISyrups {
  LEMON_EXTRACT: IInventoryIngredient;
  NECTAR_AGAVE: IInventoryIngredient;
  SYRUP_GOLDEN: IInventoryIngredient;
  VANILLA_EXTRACT: IInventoryIngredient;
}

interface IBaking extends IFlour, ISugar, ISyrups {
  BAKING_POWDER: IInventoryIngredient;
  BICARBONATE_OF_SODA: IInventoryIngredient;
  CHOCOLATE_DARK: IInventoryIngredient;
  COCOA_POWDER: IInventoryIngredient;
  OATS: IInventoryIngredient;
}

interface IBread {
  BREAD_GARLIC: IInventoryIngredient;
  BREAD_SOURDOUGH: IInventoryIngredient;
  BREAD_SOURDOUGH_DARK: IInventoryIngredient;
}

interface IPasta {
  SPAGHETTI: IInventoryIngredient;
  PASTA: IInventoryIngredient;
  PASTA_LASAGNE_SHEET_DRIED: IInventoryIngredient;
}

interface IRice {
  RICE: IInventoryIngredient;
  RICE_BASMATI: IInventoryIngredient;
  RICE_BROWN: IInventoryIngredient;
  RICE_RISOTTO_ARBORIO: IInventoryIngredient;
}

interface ICarbs extends IBread, IPasta, IRice {
  POPPADOMS: IInventoryIngredient;
}

interface IMilk {
  MILK_COCONUT_CANNED: IInventoryIngredient;
  MILK_ALMOND_UNSWEETENED: IInventoryIngredient;
  MILK_OATLY_BARISTA: IInventoryIngredient;
  MILK: IInventoryIngredient;
}

interface IDairy extends IMilk {
  BUTTER_VEGAN: IInventoryIngredient;
  CREAM_OAT: IInventoryIngredient;
  CHEESE_VEGAN_SLICE: IInventoryIngredient;
}

interface IFruitDried {
  APRICOTS_DRIED: IInventoryIngredient;
  BLUEBERRIES_DRIED: IInventoryIngredient;
  CRANBERRIES_DRIED: IInventoryIngredient;
  RAISINS: IInventoryIngredient;
}

interface IFruitFresh {
  APPLE_BRAMLEY: IInventoryIngredient;
  BANANA: IInventoryIngredient;
  BLACKBERRIES_FRESH: IInventoryIngredient;
  BLUEBERRIES_FRESH: IInventoryIngredient;
  LEMON: IInventoryIngredient;
  LEMON_LARGE: IInventoryIngredient;
  LIME: IInventoryIngredient;
  PINEAPPLE: IInventoryIngredient;
  RASPBERRIES_FRESH: IInventoryIngredient;
}

interface IFruitFrozen {
  BLACKBERRIES_FROZEN: IInventoryIngredient;
  RASPBERRIES_FROZEN: IInventoryIngredient;
}

interface IJuice {
  LEMON_JUICE: IInventoryIngredient;
  LEMON_JUICE_FRESH: IInventoryIngredient;
  LIME_JUICE_FRESH: IInventoryIngredient;
}

interface IFruit extends IFruitDried, IFruitFresh, IFruitFrozen, IJuice {}

interface IHerbsDried {
  BASIL_DRIED: IInventoryIngredient;
  HERBS_MIXED_DRIED: IInventoryIngredient;
  OREGANO_DRIED: IInventoryIngredient;
  ROSEMARY_DRIED: IInventoryIngredient;
  THYME_DRIED: IInventoryIngredient;
}

interface IHerbsFresh {
  BASIL_FRESH: IInventoryIngredient;
  CORIANDER_FRESH: IInventoryIngredient;
  PARSLEY_FRESH: IInventoryIngredient;
  SAGE_FRESH: IInventoryIngredient;
}

interface IHerbs extends IHerbsDried, IHerbsFresh {}

interface INuts {
  NUTS_CASHEWS: IInventoryIngredient;
  NUTS_PINE: IInventoryIngredient;
}

interface ISeeds {
  SEEDS_CHIA: IInventoryIngredient;
  SEEDS_POPPY: IInventoryIngredient;
  SEEDS_FLAX_GROUND: IInventoryIngredient;
  SEEDS_PUMPKIN: IInventoryIngredient;
  SEEDS_SESAME: IInventoryIngredient;
  SEEDS_SUNFLOWER: IInventoryIngredient;
}

interface INutsSeeds extends INuts, ISeeds {}

interface IBeans {
  BEANS_BAKED: IInventoryIngredient;
  BEANS_HARICOT: IInventoryIngredient;
  BEANS_KIDNEY: IInventoryIngredient;
}

interface ISeitan {
  GLUTEN_WHEAT_VITAL: IInventoryIngredient;
  SEITAN: IInventoryIngredient;
}

interface IProtein extends IBeans, ISeitan {
  CHICKPEAS: IInventoryIngredient;
  EGGS: IInventoryIngredient;
  LENTIL_RED_DRY: IInventoryIngredient;
  TOFU: IInventoryIngredient;
}

interface ISeasoningDried {
  PAPRIKA: IInventoryIngredient;
  ONION_POWDER: IInventoryIngredient;
  GARLIC_GRANULES: IInventoryIngredient;
  TURMERIC_GROUND: IInventoryIngredient;
  PAPRIKA_SMOKED: IInventoryIngredient;
  ALLSPICE_GROUND: IInventoryIngredient;
  CHILLI_POWDER: IInventoryIngredient;
  CINNAMON_GROUND: IInventoryIngredient;
  NUTMEG_GROUND: IInventoryIngredient;
  CHILLI_CRUSHED_DRIED: IInventoryIngredient;
  STOCK_POWDER_VEGAN: IInventoryIngredient;
  YEAST_NUTRITIONAL: IInventoryIngredient;
}

interface IOils {
  OIL_OLIVE: IInventoryIngredient;
  OIL_SUNFLOWER: IInventoryIngredient;
}

interface IPastes {
  CURRY_PASTE_MADRAS: IInventoryIngredient;
  CURRY_PASTE_ROGAN_JOSH: IInventoryIngredient;
  TOMATO_PUREE: IInventoryIngredient;
}

interface ISalts {
  SALT_BLACK: IInventoryIngredient;
  SALT_TABLE: IInventoryIngredient;
  SALT_ROCK_FRESH: IInventoryIngredient;
}

interface ISauces {
  LIQUID_SMOKE: IInventoryIngredient;
  SOY_SAUCE: IInventoryIngredient;
  MAYONNAISE: IInventoryIngredient;
  KETCHUP_TOMATO: IInventoryIngredient;
  SRIRACHA: IInventoryIngredient;
  SWEET_CHILLI_SAUCE: IInventoryIngredient;
}

interface IVinegars {
  VINEGAR_BALSAMIC: IInventoryIngredient;
  VINEGAR_WHITE_WINE: IInventoryIngredient;
  VINEGAR_CIDER: IInventoryIngredient;
}

interface ISeasoning
  extends ISeasoningDried,
    IOils,
    IPastes,
    ISalts,
    ISauces,
    IVinegars {
  PEPPER_BLACK_FRESH: IInventoryIngredient;
  PEPPER_BLACK_GROUND: IInventoryIngredient;
  WINE_RED: IInventoryIngredient;
  CHILLI_RED_FRESH: IInventoryIngredient;
  GINGER_FRESH: IInventoryIngredient;
  CHILLI_BIRD_EYE_FRESH: IInventoryIngredient;
  NUTMEG_FRESH: IInventoryIngredient;
}

interface IVegCanned {
  TOMATO_PASSATA: IInventoryIngredient;
  TOMATO_CHOPPED: IInventoryIngredient;
  TOMATO_SUN_DRIED: IInventoryIngredient;
}

interface IVegFresh {
  ASPARAGUS: IInventoryIngredient;
  AUBERGINE: IInventoryIngredient;
  BEANS_GREEN: IInventoryIngredient;
  BROCCOLI: IInventoryIngredient;
  BUTTERNUT_SQUASH: IInventoryIngredient;
  CARROT: IInventoryIngredient;
  CELERY_STICK: IInventoryIngredient;
  CAULIFLOWER_REGULAR: IInventoryIngredient;
  COURGETTE: IInventoryIngredient;
  GARLIC_CLOVE: IInventoryIngredient;
  KALE: IInventoryIngredient;
  LEEK: IInventoryIngredient;
  MUSHROOMS: IInventoryIngredient;
  MUSHROOMS_CHESTNUT: IInventoryIngredient;
  ONION_WHITE_MEDIUM: IInventoryIngredient;
  ONION_RED_MEDIUM: IInventoryIngredient;
  ONION_SPRING: IInventoryIngredient;
  PEPPER_RED: IInventoryIngredient;
  PEPPER_GREEN: IInventoryIngredient;
  POTATO_MARIS_PIPER: IInventoryIngredient;
  PEPPER_ORANGE: IInventoryIngredient;
  PEPPER_MIXED: IInventoryIngredient;
  POTATO_BAKING: IInventoryIngredient;
  POTATO_JERSEY_ROYAL: IInventoryIngredient;
  POTATO_SWEET: IInventoryIngredient;
  SPINACH: IInventoryIngredient;
}

interface IVegFrozen {
  PETITS_POIS_FROZEN: IInventoryIngredient;
  VEGETABLES_MIXED_FROZEN: IInventoryIngredient;
}

interface IVeg extends IVegCanned, IVegFresh, IVegFrozen {}

interface IInventoryIngredients
  extends IBaking,
    ICarbs,
    IDairy,
    IFruit,
    IHerbs,
    INutsSeeds,
    IProtein,
    ISeasoning,
    IVeg {
  WATER: IInventoryIngredient;
  WATER_BOILING: IInventoryIngredient;
}
