interface IGenerateChildItemsFromParentItems {
  childItems: string;
  parentItems: Object;
  parentFlag?: string;
}

export const generateChildItemsFromParentItems = ({
  childItems,
  parentItems,
  parentFlag
}: IGenerateChildItemsFromParentItems) => {
  const parentObject: Array<any> = Object.values(parentItems);

  return (
    [].concat
      .apply(
        [],
        //@ts-ignore
        parentObject
          .filter(item => item[childItems])
          .map(item =>
            //@ts-ignore
            Object.values(item[childItems]).filter(item => item.name)
          )
      )
      //@ts-ignore
      .concat(parentObject.filter(item => item[parentFlag]))
  );
};
