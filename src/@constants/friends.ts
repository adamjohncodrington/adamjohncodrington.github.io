const GROUPS: IFriendGroups = {
  CFS: { name: "Colonel Frank Seely", initials: "CFS" },
  JHC: { name: "JHC", initials: "JHC" }
};

export const FRIENDS: IFriends = {
  ...GROUPS,
  // A
  AISHA_SAEED: { name: "Aisha Saeed", initials: "AS" },
  ALEX_FAYE: { name: "Alex-Faye Grundy", initials: "AG" },
  ALICE_RODER: { name: "Alice Roder", initials: "AR" },
  AMY_BAGNI: { name: "Amy Bagni", initials: "AB" },
  AMY_CALCUTT: { name: "Amy Calcutt", initials: "AC" },
  ANNIE_BUTCHER: { name: "Annie Butcher", initials: "AB" },
  ASH_MORETON: { name: "Ash Moreton", initials: "AM" },
  // B
  BECKY_MILLS: { name: "Becky Mills", initials: "BM" },
  BETH_OAKES: { name: "Beth Oakes", initials: "BO" },
  BETH_SHEARS: { name: "Beth Shears", initials: "BS" },
  BETH_SPELLER: { name: "Beth Speller", initials: "BS" },
  BLAINE_PEARSON: { name: "Blaine Pearson", initials: "BP" },
  // C
  CAITY_DALBY: { name: "Caity Dalby", initials: "CD" },
  CAITLIN_MCCAIG: {
    name: "Caitlin McCaig",
    initials: "CM",
    gigs: true,
    travel: true
  },
  CARMEN_DALGLISH: { name: "Carmen Dalglish", initials: "CD", travel: true },
  CAMERON_BLACKBURN: { name: "Cameron Blackburn", initials: "CB" },
  CHELSEA_CUNNINGHAM: { name: "Chelsea Cunningham", initials: "CC" },
  CHLOE_WHITE: { name: "Chloé White", initials: "CW" },
  CHRISTELLE_MUTUNDA: { name: "Christelle Mutunda", initials: "CM" },
  COBY_BLACKBURN: { name: "Coby Blackburn", initials: "CB" },
  COURTNEY_LAWSON: { name: "Courtney Lawson", initials: "CL" },
  // D
  DAD: { name: "Dad", initials: "D", gigs: true, theatre: true, travel: true },
  DARREN_TAYLOR: {
    name: "Darren Taylor",
    initials: "DT",
    gigs: true,
    theatre: true
  },
  DAN_SPARROW: {
    name: "Dan Sparrow",
    initials: "DS",
    gigs: true,
    theatre: true,
    travel: true
  },
  DOM_COYNE: { name: "Dominic Coyne", initials: "DC", theatre: true },
  // E
  ELLE_OLDROYD: { name: "Elle Oldroyd", initials: "EO" },
  ELINORE_GILLESPIE: { name: "Elinore Gillespie", initials: "EG" },
  ELISE_MORLEY: { name: "Elise Morley", initials: "EM" },
  ELLIE_FORMAN: { name: "Ellie Forman", initials: "EF" },
  ELLIE_GURKIN: { name: "Ellie Gurkin", initials: "EG", travel: true },
  ELLIE_PEARCE: { name: "Ellie Pearce", initials: "EP" },
  ELLIE_SPANOVIC: { name: "Ellie Spanovic", initials: "ES" },
  EMMA_CODRINGTON: {
    name: "Emma Codrington",
    initials: "EC",
    gigs: true,
    theatre: true,
    travel: true
  },
  // F
  FANNY_LINDQVIST: { name: "Fanny Lindqvist", initials: "FL" },
  // G
  GEMMA_GILDERTHORP: { name: "Gemma Gilderthorp", initials: "GG" },
  GEORGE_LITTLEHALES: { name: "George Littlehales", initials: "GL" },
  GRACE_HULME: { name: "Grace Hulme", initials: "GH", travel: true },
  // H
  HANNA_FROGNER: { name: "Hanna Frogner", initials: "HF" },
  HARRIET_BOYLE: { name: "Harriet Boyle", initials: "HB" },
  HARRIET_KESTERTON: { name: "Harriet Kesterton", initials: "HK" },
  HEATHER_CHILES: { name: "Heather Chiles", initials: "HC" },
  // J
  JAIMINI_POPAT: { name: "Jaimini Popat", initials: "JP" },
  JAMIE_HALKET: {
    name: "Jamie Halket",
    initials: "JH",
    gigs: true,
    theatre: true,
    travel: true
  },
  JAZZ_THIND: { name: "Jasminder Thind", initials: "JT" },
  JERRY_EDWARDS: {
    name: "Jerry Edwards",
    initials: "JE",
    gigs: true,
    theatre: true
  },
  JOE_EDWARDS: { name: "Joe Edwards", initials: "JE", theatre: true },
  JESS_SMITH: { name: "Jess Smith", initials: "JS" },
  JUNAID_KHAN: { name: "Junaid Khan", initials: "JK" },
  // K
  KATE_BOWMAR: { name: "Kate Bowmar", initials: "KB" },
  KIERAN_SAWFORD: { name: "Kieran Sawford", initials: "KS" },
  KIRSTEN_JACKSON: { name: "Kirsten Jackson", initials: "KJ" },
  KYLE_HOUGH: { name: "Kyle Hough", initials: "KH" },
  // L
  LAURA_CAPECE_GALEOTA: { name: "Laura Capece-Galeota", initials: "LC" },
  LEAH_SLATER_RADWAY: { name: "Leah Slater-Radway", initials: "LS" },
  LEWIS_STEADMAN: {
    name: "Lewis Steadman",
    initials: "LS",
    gigs: true,
    theatre: true
  },
  LINDSAY_ASPINALL: { name: "Lindsay Aspinall", initials: "LA" },
  LINDSEY_SKELTON: { name: "Lindsey Skelton", initials: "LS" },
  LOUISE_BLACKBURN: { name: "Louise Blackburn", initials: "LB" },
  LUKE_JONES: { name: "Luke Jones", initials: "LJ" },
  LUKE_STERN: { name: "Luke Stern", initials: "LS" },
  // M
  MARIA_TAYLOR: { name: "Maria Taylor", initials: "MT", theatre: true },
  MEGAN_BLACKBURN: { name: "Megan Blackburn", initials: "MB", gigs: true },
  MUM: { name: "Mum", initials: "M", gigs: true, theatre: true, travel: true },
  // N
  NATALIE_LAMBERT: { name: "Natalie Lambert", initials: "NL" },
  NAV_BHOGAL: { name: "Navneet Bhogal", initials: "NB" },
  // O
  OSCAR_MURRAY: { name: "Oscar Murray", initials: "OM" },
  // P
  PATRICIA_DIACONESCU: { name: "Patricia Diaconescu", initials: "PD" },
  POOJA_DHIR: { name: "Pooja Dhir", initials: "PD", travel: true },
  POPPY_SMITH: { name: "Poppy Smith", initials: "PS" },
  // R
  ROB_GALL: { name: "Robert Gall", initials: "RG" },
  RYAN_MILLS: { name: "Ryan Mills", initials: "RM", gigs: true, travel: true },
  // S
  SAM_BERRIE: { name: "Sam Berrie", initials: "SB" },
  SARAH_WALKER: { name: "Sarah Walker", initials: "SW" },
  SARAH_WHITAKER: { name: "Sarah Whitaker", initials: "SW" },
  SIAN_RODWAY_SMITH: {
    name: "Sian Rodway-Smith",
    initials: "SR",
    gigs: true,
    theatre: true,
    travel: true
  },
  SIMAN_PONE: { name: "Siman Pone", initials: "SP" },
  SONYA_PARDI: { name: "Sonya Pardi", initials: "SP", gigs: true },
  STEVE_RICHARDS: { name: "Steve Richards", initials: "SR" },
  // T
  THOM_STEPHANAKIS: { name: "Thom Stephanakis", initials: "TS" },
  TOM_CHINDA_COUTTS: {
    name: "Tom Chinda-Coutts",
    initials: "TC",
    gigs: true,
    travel: true
  },
  TONYA_FRANCE: {
    name: "Tonya France",
    initials: "TF",
    gigs: true,
    travel: true
  }
};
