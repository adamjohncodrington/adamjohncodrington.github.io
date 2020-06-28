# TO DO LIST

- implement `align-items: baseline` on Event Card disclaimer???? <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>?
- strongly type all `@constants` objects
- make `Theatre` use `date` instead of `dates`, move countdown logic to individual cards rather than `EventCard` and make it have `dateText` instead
- rewrite `mapToCountedList`
- make all `.svg` files render as `SvgIcon` components
- remove hard-coded recipe image width + implement react-disclosure/react-accessible-accordion?
- refine color palette

## Refactoring

- rationalise `data-test` attributes
- finalise values for `breakpoints`?
- review semantics of page structure, landmarks, accessibility, etc.
- recipe method array should be `ol` not `ul`?

## Features

- recipes: margaritas, roast potatoes
- add sorting to vinyls collection and wish list?
- add photos to `Travel`?

## Styling

- reduce whitespace between bullet points and list text?
- prevent wrapping of `li` text beneath the bullet point

## TypeScript

- remove all remaining instances of type: `any`

## Testing

- add more unit tests

## Fix

- prevent `Router` from allowing you to go back between pages
