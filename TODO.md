# TO DO LIST

- remove all recent `@ts-ignore` additions
- remove final remaining instances of type `any`
- refactor `datesArrayToString` to be `dateToString` + `datesToString`

## TypeScript

- define a `cities` constant file instead?
- remove all instances of `{ [` in types
- strongly type all `@constants` objects

## Refactoring

- rename `getPageSectionItemCounts` function to not refer to `PageSection` specifically
- make `Theatre` use `date` instead of `dates`, move countdown logic to individual cards rather than `EventCard` and make it have `dateText` instead
- remove hard-coded recipe image width + implement react-disclosure/react-accessible-accordion?
- make all `.svg` files render as `SvgIcon` components
- rationalise `data-test` attributes
- finalise values for `breakpoints`?
- review semantics of page structure, landmarks, accessibility, etc.
- recipe method array should be `ol` not `ul`?

## Features

- friends section reveals which gigs you saw with them
- recipes: margaritas, roast potatoes
- make Nav Bar colors persist for active page
- prevent `Router` from allowing you to go back between pages
- add sorting to vinyls collection and wish list?
- add photos to `Travel`?

## Styling

- refine color palette
- reduce whitespace between bullet points and list text?
- prevent wrapping of `li` text beneath the bullet point

