type IImageSrc = string;

type IconsStringObject = { [iconName: string]: IImageSrc };

type RecipePhotosObject = { [recipe: string]: IImageSrc };

type VinylPhotosObject = { [artist: string]: { [album: string]: IImageSrc } };
