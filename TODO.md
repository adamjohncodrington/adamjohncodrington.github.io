# TO DO LIST

- do not export recipe data in nest

- add compulsory `date` prop to `IPhoto`

- ditch `IPreCard` altogether
- refactor symbols!!

- rename `pastCount` and `futureCount` on `MiniCard` as `primaryCount` and `secondaryCount` and make them non-compulsory

- auto sort `Card`s by date

- make photo grid truncate the number of photos in the array based on the column count

- convert `DAYS TO GO` into a dark number symbol

- reinstate festival videos
- add symbols to vinyl cards to indicate color and side count

- convert all `travel` data to use `IStartEndDate`
- review outstanding `//TODO:`s
- split festivals into `IDayFestival`, `IMultiDayFestival`, `INightOut`, etc.
- make festival dates prop `start/end`???
- 
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

- define `IDates` as `{start, end, only}`??
- review whether parents or children should be styling the children across whole site
- review all instances of `.forEach`, potentially replace with `.reduce`, `.some` and/or `.every`
- move `BasicListItemPanel` style values to theme??
- review semantics of page structure, landmarks, accessibility, etc.
- rationalise `data-test` attributes

## Testing

- add tests for more utils
