# TO DO LIST

- add compulsory sort prop to `IMiniCard`
- add compulsory sort prop to `IMiniCardDetail`

- remove `countInfoIrrelevant` prop altogether and all instances of hard-coded `pastCount: 0`, `futureCount: 0`
- remove hidden recipes from group higher up in the app

- add `sortString` and `subSortString` prop to `Card` and `MiniCard`???

- add compulsory `date` prop to `IPhoto`
- reinstate festival videos

- add mini card details to pole instructors and pole songs

- add more travel photos

- rationalise theme further

- rename `pastCount` and `futureCount` on `MiniCard` as `primaryCount` and `secondaryCount` and make them non-compulsory

- auto sort `Card`s by date

- add symbols to vinyl cards to indicate color and side count

- convert all `travel` data to use `IStartEndDate`???????
- review outstanding `//TODO:`s
- split festivals into `IDayFestival`, `IMultiDayFestival`, `INightOut`, etc.??????
- make festival dates prop `start/end`???
- totally refactor `travel` in `@constants`

## Enhancements

- make YouTube videos play in HD
- add images to theatre page (poster art)
- display festival lineups by day????
- merge trips together again as arrays of "trip legs"
- reinstate 49 abroad trips page count
- add more travel photos!!!
- add alt text to all photos
- add tooltips to `RoundedSymbol`s
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
