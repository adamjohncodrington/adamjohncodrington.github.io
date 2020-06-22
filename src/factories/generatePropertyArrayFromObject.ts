interface IGeneratePropertyArrayFromObject {
  object: Object;
  childLevelProperty: string;
  topLevelProperty?: string;
}

export const generatePropertyArrayFromObject = ({
  object,
  childLevelProperty,
  topLevelProperty
}: IGeneratePropertyArrayFromObject) => {
  const array: Array<any> = Object.values(object);

  const arrayFilteredByTopLevelProperty: Array<any> = array.filter(
    item => topLevelProperty && item[topLevelProperty]
  );

  const arrayFilteredByChildLevelProperty: Array<any> = [].concat.apply(
    [],
    array
      .filter(item => item[childLevelProperty])
      .map(item => Object.values(item[childLevelProperty]))
  );

  return [
    ...arrayFilteredByTopLevelProperty,
    ...arrayFilteredByChildLevelProperty
  ];
};
