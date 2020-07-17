interface IPerson extends INameFavourite {
  initials: string;
}

interface IFriend extends IPerson {
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

interface IPoleInstructor extends IPerson {
  stageName?: string;
}

interface IFriendGroups {
  CFS: IFriend;
  JHC: IFriend;
}

interface IFriends extends IFriendGroups {
  AISHA_SAEED: IFriend;
  ALEX_FAYE: IFriend;
  ALICE_RODER: IFriend;
  AMY_BAGNI: IFriend;
  AMY_CALCUTT: IFriend;
  ANNIE_BUTCHER: IFriend;
  ASH_MORETON: IFriend;
  BECKY_MILLS: IFriend;
  BETH_OAKES: IFriend;
  BETH_SHEARS: IFriend;
  BETH_SPELLER: IFriend;
  BLAINE_PEARSON: IFriend;
  CAITY_DALBY: IFriend;
  CAITLIN_MCCAIG: IFriend;
  CARMEN_DALGLISH: IFriend;
  CAMERON_BLACKBURN: IFriend;
  CHELSEA_CUNNINGHAM: IFriend;
  CHLOE_WHITE: IFriend;
  CHRISTELLE_MUTUNDA: IFriend;
  COBY_BLACKBURN: IFriend;
  COURTNEY_LAWSON: IFriend;
  DAD: IFriend;
  DARREN_TAYLOR: IFriend;
  DAN_SPARROW: IFriend;
  DOM_COYNE: IFriend;
  ELLE_OLDROYD: IFriend;
  ELINORE_GILLESPIE: IFriend;
  ELISE_MORLEY: IFriend;
  ELLIE_FORMAN: IFriend;
  ELLIE_GURKIN: IFriend;
  ELLIE_PEARCE: IFriend;
  ELLIE_SPANOVIC: IFriend;
  EMMA_CODRINGTON: IFriend;
  FANNY_LINDQVIST: IFriend;
  GEMMA_GILDERTHORP: IFriend;
  GEORGE_LITTLEHALES: IFriend;
  GRACE_HULME: IFriend;
  HANNA_FROGNER: IFriend;
  HARRIET_BOYLE: IFriend;
  HARRIET_KESTERTON: IFriend;
  HEATHER_CHILES: IFriend;
  JAIMINI_POPAT: IFriend;
  JAMIE_HALKET: IFriend;
  JAZZ_THIND: IFriend;
  JERRY_EDWARDS: IFriend;
  JOE_EDWARDS: IFriend;
  JESS_SMITH: IFriend;
  JUNAID_KHAN: IFriend;
  KATE_BOWMAR: IFriend;
  KIERAN_SAWFORD: IFriend;
  KIRSTEN_JACKSON: IFriend;
  KYLE_HOUGH: IFriend;
  LAURA_CAPECE_GALEOTA: IFriend;
  LEAH_SLATER_RADWAY: IFriend;
  LEWIS_STEADMAN: IFriend;
  LINDSAY_ASPINALL: IFriend;
  LINDSEY_SKELTON: IFriend;
  LOUISE_BLACKBURN: IFriend;
  LUKE_JONES: IFriend;
  LUKE_STERN: IFriend;
  MARIA_TAYLOR: IFriend;
  MEGAN_BLACKBURN: IFriend;
  MUM: IFriend;
  NATALIE_LAMBERT: IFriend;
  NAV_BHOGAL: IFriend;
  OSCAR_MURRAY: IFriend;
  PATRICIA_DIACONESCU: IFriend;
  POOJA_DHIR: IFriend;
  POPPY_SMITH: IFriend;
  ROB_GALL: IFriend;
  RYAN_MILLS: IFriend;
  SAM_BERRIE: IFriend;
  SARAH_WALKER: IFriend;
  SARAH_WHITAKER: IFriend;
  SIAN_RODWAY_SMITH: IFriend;
  SIMAN_PONE: IFriend;
  SONYA_PARDI: IFriend;
  STEVE_RICHARDS: IFriend;
  THOM_STEPHANAKIS: IFriend;
  TOM_CHINDA_COUTTS: IFriend;
  TONYA_FRANCE: IFriend;
}
