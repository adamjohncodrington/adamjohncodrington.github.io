# TO DO LIST

- add full release dates to vinyl
- add timestamps to pole videos that share the same day

## Media to add

- all remaining pole tricks videos
- loads more gig photos
- loads more travel photos
- theatre artwork?

## Necessary refactoring

- add full year to vinyl release date
- review photoGrid props
- deprecate `getItemCounts`???????? in favour of `details.length`????
- review all instances of `filterMiniCards`?
- organise utils

## Priorities

- make festival dates prop `start/end`???
- add compulsory `date` prop to `IPhoto`
- remove hidden recipes from group higher up in the app
- add symbols to vinyl cards to indicate color and side count
- convert all `travel` data to use `IStartEndDate`???????
- review outstanding `//TODO:`s
- totally refactor `travel` into `@constants`
- rationalise theme further

## Enhancements

- beef up theatre page: actors, artwork, symbols?
- make YouTube videos play in HD
- add images to theatre page (poster art)
- display festival lineups by day????
- merge trips together again as arrays of "trip legs"
- reinstate 49 abroad trips page count
- add more travel photos!!!
- add alt text to all photos
- add tooltips to `RoundedSymbol`s?
- refine Nav Bar (colors persist for active page, mobile behaviour)
- prevent `Router` from allowing you to go back between pages?

## Refactoring

- do not export recipe data in nest
- define `IDates` as `{start, end, only}`??
- review whether parents or children should be styling the children across whole site
- review all instances of `.forEach`, potentially replace with `.reduce`, `.some` and/or `.every`
- move `BasicListItemPanel` style values to theme??
- review semantics of page structure, landmarks, accessibility, etc.
- rationalise `data-test` attributes

## Testing

- add tests for more utils
