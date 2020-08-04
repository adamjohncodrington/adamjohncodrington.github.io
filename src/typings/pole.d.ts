type IPoleCategory =
  | "contemporary-class"
  | "contemporary-improv"
  | "exotic-class"
  | "exotic-improv"
  | "non-pole"
  | "showcase"
  | "tricks";

interface IPoleStudio {
  name: string;
  location?: string;
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

interface IPoleInstructor extends IPerson {
  stageName?: string;
}
