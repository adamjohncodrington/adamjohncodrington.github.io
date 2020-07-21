export const sortVinyls = (vinyls: Array<IVinyl>): Array<IVinyl> => {
  console.log(vinyls);

  const sortedVinyls: Array<IVinyl> = vinyls.sort((a: IVinyl, b: IVinyl) =>
    a.title < b.title ? 1 : -1
  );

  console.log(sortedVinyls);

  return sortedVinyls;
};
