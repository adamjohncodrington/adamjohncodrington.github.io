const GROUPS = {
  CFS: { name: "Colonel Frank Seely", initials: "CFS" },
  JHC: { name: "JHC", initials: "JHC" }
};

export const FRIENDS = {
  ...GROUPS,
  // A
  AISHA: { name: "Aisha Saeed", initials: "AS" },
  ALEX_FAYE: { name: "Alex-Faye Grundy", initials: "AG" },
  ALICE_R: { name: "Alice Roder", initials: "AR" },
  AMY_B: { name: "Amy Bagni", initials: "AB" },
  AMY_C: { name: "Amy Calcutt", initials: "AC" },
  ANNIE_B: { name: "Annie Butcher", initials: "AB" },
  ASH: { name: "Ash Moreton", initials: "AM" },
  // B
  BECKY: { name: "Becky Mills", initials: "BM" },
  BETH_O: { name: "Beth Oakes", initials: "BO" },
  BETH_SH: { name: "Beth Shears", initials: "BS" },
  BETH_SP: { name: "Beth Speller", initials: "BS" },
  BLAINE: { name: "Blaine Pearson", initials: "BP" },
  // C
  CAITY: { name: "Caity Dalby", initials: "CD" },
  CAITLIN: { name: "Caitlin McCaig", initials: "CM", gigs: true, travel: true },
  CARMEN: { name: "Carmen Dalglish", initials: "CD", travel: true },
  CAMERON: { name: "Cameron Blackburn", initials: "CB" },
  CHELSEA: { name: "Chelsea Cunningham", initials: "CC" },
  CHLOE: { name: "Chloé White", initials: "CW" },
  CHRISTELLE: { name: "Christelle Mutunda", initials: "CM" },
  COBY_B: { name: "Coby Blackburn", initials: "CB" },
  COURTNEY: { name: "Courtney Lawson", initials: "CL" },
  // D
  DAD: { name: "Dad", initials: "D", gigs: true, theatre: true, travel: true },
  DARREN: { name: "Darren Taylor", initials: "DT", gigs: true, theatre: true },
  DAN: {
    name: "Dan Sparrow",
    initials: "DS",
    gigs: true,
    theatre: true,
    travel: true
  },
  DOM: { name: "Dominic Coyne", initials: "DC", theatre: true },
  // E
  ELLE_O: { name: "Elle Oldroyd", initials: "EO" },
  ELINORE_G: { name: "Elinore Gillespie", initials: "EG" },
  ELISE: { name: "Elise Morley", initials: "EM" },
  ELLIE_F: { name: "Ellie Forman", initials: "EF" },
  ELLIE_G: { name: "Ellie Gurkin", initials: "EG", travel: true },
  ELLIE_P: { name: "Ellie Pearce", initials: "EP" },
  ELLIE_S: { name: "Ellie Spanovic", initials: "ES" },
  EMMA: {
    name: "Emma Codrington",
    initials: "EC",
    gigs: true,
    theatre: true,
    travel: true
  },
  // F
  FANNY: { name: "Fanny Lindqvist", initials: "FL" },
  // G
  GEMMA: { name: "Gemma Gilderthorp", initials: "GG" },
  GEORGE: { name: "George Littlehales", initials: "GL" },
  GRACE: { name: "Grace Hulme", initials: "GH", travel: true },
  // H
  HANNA: { name: "Hanna Frogner", initials: "HF" },
  HARRIET_B: { name: "Harriet Boyle", initials: "HB" },
  HARRIET_K: { name: "Harriet Kesterton", initials: "HK" },
  HEATHER_C: { name: "Heather Chiles", initials: "HC" },
  // J
  JAIMINI: { name: "Jaimini Popat", initials: "JP" },
  JAMIE: {
    name: "Jamie Halket",
    initials: "JH",
    gigs: true,
    theatre: true,
    travel: true
  },
  JAZZ: { name: "Jasminder Thind", initials: "JT" },
  JERRY: { name: "Jerry Edwards", initials: "JE", gigs: true, theatre: true },
  JOE: { name: "Joe Edwards", initials: "JE", theatre: true },
  JESS: { name: "Jess Smith", initials: "JS" },
  JUNAID: { name: "Junaid Khan", initials: "JK" },
  // K
  KATE_B: { name: "Kate Bowmar", initials: "KB" },
  KIERAN_S: { name: "Kieran Sawford", initials: "KS" },
  KIRSTEN: { name: "Kirsten Jackson", initials: "KJ" },
  KYLE: { name: "Kyle Hough", initials: "KH" },
  // L
  LAURA: { name: "Laura Capece-Galeota", initials: "LC" },
  LEAH: { name: "Leah Slater-Radway", initials: "LS" },
  LEWIS: { name: "Lewis Steadman", initials: "LS", gigs: true, theatre: true },
  LINDSAY_A: { name: "Lindsay Aspinall", initials: "LA" },
  LINDSEY_S: { name: "Lindsey Skelton", initials: "LS" },
  LOUISE: { name: "Louise Blackburn", initials: "LB" },
  LUKE_J: { name: "Luke Jones", initials: "LJ" },
  LUKE_S: { name: "Luke Stern", initials: "LS" },
  // M
  MARIA: { name: "Maria Taylor", initials: "MT", theatre: true },
  MEGAN: { name: "Megan Blackburn", initials: "MB", gigs: true },
  MUM: { name: "Mum", initials: "M", gigs: true, theatre: true, travel: true },
  // N
  NATALIE: { name: "Natalie Lambert", initials: "NL" },
  NAV: { name: "Navneet Bhogal", initials: "NB" },
  // O
  OSCAR: { name: "Oscar Murray", initials: "OM" },
  // P
  PATRICIA: { name: "Patricia Diaconescu", initials: "PD" },
  POOJA: { name: "Pooja Dhir", initials: "PD", travel: true },
  POPPY: { name: "Poppy Smith", initials: "PS", gigs: true },
  // R
  ROB_G: { name: "Robert Gall", initials: "RG" },
  RYAN: { name: "Ryan Mills", initials: "RM", gigs: true, travel: true },
  // S
  SAM_B: { name: "Sam Berrie", initials: "SB" },
  SARAH_WA: { name: "Sarah Walker", initials: "SW" },
  SARAH_W: { name: "Sarah Whitaker", initials: "SW" },
  SIAN: {
    name: "Sian Rodway-Smith",
    initials: "SR",
    gigs: true,
    theatre: true,
    travel: true
  },
  SIMAN: { name: "Siman Pone", initials: "SP" },
  SONYA: { name: "Sonya Pardi", initials: "SP", gigs: true },
  STEVE_R: { name: "Steve Richards", initials: "SR" },
  // T
  THOM: { name: "Thom Stephanakis", initials: "TS" },
  TOM: { name: "Tom Chinda-Coutts", initials: "TC", gigs: true, travel: true },
  TONYA: { name: "Tonya France", initials: "TF", gigs: true, travel: true }
};
