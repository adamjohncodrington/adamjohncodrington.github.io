export const sortVinyls = (vinyls: Array<IVinyl>): Array<IVinyl> => {
  const sortedVinyls: Array<IVinyl> = vinyls.sort(
    (a: IVinyl, b: IVinyl): number => (a.title < b.title ? 1 : -1)
  );
  return sortedVinyls;
};
