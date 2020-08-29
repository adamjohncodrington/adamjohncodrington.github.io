type IPoleCategory =
  | "contemporary-class"
  | "contemporary-improv"
  | "exotic-class"
  | "exotic-improv"
  | "non-pole"
  | "showcase"
  | "rock"
  | "quarantine"
  | "tricks";

interface IPoleStudio extends ILocation {
  shortName?: string;
  branch?: string;
}

interface IPoleVideo extends I_Video {
  studio: IPoleStudio;
  category: IPoleCategory;
}

interface IPoleTricksVideo extends IPoleVideo, I_StartEndDates {
  instructor: IPoleInstructor;
}

interface IPoleRoutine extends IPoleVideo {
  date: Date;
  song: ISong;
  choreographer: IPoleInstructor;
}

interface IPoleRoutineOrTricksVideo extends IPoleVideo {
  date: Date;
}

interface IPoleInstructor extends IPerson {
  stageName?: string;
}
