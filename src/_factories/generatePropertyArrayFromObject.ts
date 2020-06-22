interface IGeneratePropertyArrayFromObject {
  object: Object;
  childLevelProperty: string;
  topLevelProperty?: string;
}
type UndeterminedDataType = any;

export const generatePropertyArrayFromObject = ({
  object,
  childLevelProperty,
  topLevelProperty
}: IGeneratePropertyArrayFromObject) => {
  const array: Array<UndeterminedDataType> = Object.values(object);

  const arrayFilteredByTopLevelProperty: Array<UndeterminedDataType> = array.filter(
    item => topLevelProperty && item[topLevelProperty]
  );

  const arrayFilteredByChildLevelProperty: Array<UndeterminedDataType> = [].concat.apply(
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
