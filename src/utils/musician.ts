interface IGetMusicianStageNameAtTime {
  musician: IMusician;
  year: number;
}
export const getMusicianStageNameAtTime = ({
  musician: { name, previousStageName },
  year
}: IGetMusicianStageNameAtTime): string => {
  if (previousStageName) {
    if (year >= previousStageName.yearDeprecated) return name;
    return previousStageName.name;
  }
  return name;
};
