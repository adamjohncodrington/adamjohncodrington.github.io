# TO DO LIST

## TypeScript

- strongly-type thse:
  - type IconsStringObject = { [iconName: string]: IImageSrc };
  - type RecipePhotosObject = { [recipe: string]: IImageSrc };
  - type VinylPhotosObject = { [artist: string]: { [album: string]: IImageSrc } };

## New features

- friends section reveals which gigs you saw with them
- add sorting to vinyls collection and wish list?
- add photos to `Travel`?

## Enhancements

- refine Nav Bar (colors persist for active page, mobile behaviour)
- prevent `Router` from allowing you to go back between pages

## Styling

- reduce whitespace between bullet points and list text?
- refine color palette
- prevent wrapping of `li` text beneath the bullet point

## Refactoring

- remove hard-coded recipe image width + implement react-disclosure/react-accessible-accordion?
- make all `.svg` files render as `SvgIcon` components
- review semantics of page structure, landmarks, accessibility, etc.
- recipe method array should be `ol` not `ul`?
- rationalise `data-test` attributes
