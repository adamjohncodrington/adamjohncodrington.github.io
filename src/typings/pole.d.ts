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

interface PoleStudio extends LocationProps {
  shortName?: string;
  branch?: string;
}

interface IPoleVideo extends I_Video {
  studio: PoleStudio;
  category: IPoleCategory;
}

interface IPoleTricksVideo extends IPoleVideo, I_StartEndDates {
  instructor: IPoleInstructor;
}

interface IPoleRoutine extends IPoleVideo {
  date: Date;
  song: Song;
  choreographer: IPoleInstructor;
}

interface IPoleRoutineOrTricksVideo extends IPoleVideo {
  date: Date;
}

interface IPoleInstructor extends IPerson {
  stageName?: string;
}
