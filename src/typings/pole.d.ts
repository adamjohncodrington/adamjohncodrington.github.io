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

interface PoleTricksVideo extends IPoleVideo, I_StartEndDates {
  instructor: PoleInstructor;
}

interface PoleRoutine extends IPoleVideo {
  date: Date;
  song: Song;
  choreographer: PoleInstructor;
}

interface IPoleRoutineOrTricksVideo extends IPoleVideo {
  date: Date;
}

interface PoleInstructor extends IPerson {
  stageName?: string;
}
