const groups = {
  A: ["Mexico", "South Africa", "South Korea", "Czechia"],
  B: ["Canada", "Bosnia", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["United States", "Paraguay", "Australia", "Turkey"],
  E: ["Germany", "Curacao", "Ivory Coast", "Ecuador"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Belgium", "Egypt", "Iran", "New Zealand"],
  H: ["Spain", "Cape Verde", "Saudi Arabia", "Uruguay"],
  I: ["France", "Senegal", "Iraq", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"]
};

const rankingSeed = [
  "Spain", "Argentina", "France", "England", "Brazil", "Portugal", "Netherlands", "Belgium",
  "Germany", "Croatia", "Morocco", "Colombia", "United States", "Mexico", "Uruguay", "Switzerland",
  "Japan", "Senegal", "Iran", "South Korea", "Ecuador", "Austria", "Turkey", "Australia",
  "Norway", "Panama", "Canada", "Egypt", "Scotland", "Tunisia", "Ivory Coast", "Czechia", "Uzbekistan",
  "Qatar", "DR Congo", "South Africa", "Jordan", "Cape Verde", "Bosnia",
  "Ghana", "Iraq", "Algeria", "Haiti", "Curacao", "Paraguay", "Saudi Arabia", "Sweden", "New Zealand"
];

const roundPairings = [
  [1, 2],
  [3, 4],
  [1, 3],
  [4, 2],
  [4, 1],
  [2, 3]
];

const round32 = [
  { match: 73, a: { type: "rank", group: "A", rank: 2 }, b: { type: "rank", group: "B", rank: 2 } },
  { match: 74, a: { type: "rank", group: "E", rank: 1 }, b: { type: "third", groups: ["A", "B", "C", "D", "F"] } },
  { match: 75, a: { type: "rank", group: "F", rank: 1 }, b: { type: "rank", group: "C", rank: 2 } },
  { match: 76, a: { type: "rank", group: "C", rank: 1 }, b: { type: "rank", group: "F", rank: 2 } },
  { match: 77, a: { type: "rank", group: "I", rank: 1 }, b: { type: "third", groups: ["C", "D", "F", "G", "H"] } },
  { match: 78, a: { type: "rank", group: "E", rank: 2 }, b: { type: "rank", group: "I", rank: 2 } },
  { match: 79, a: { type: "rank", group: "A", rank: 1 }, b: { type: "third", groups: ["C", "E", "F", "H", "I"] } },
  { match: 80, a: { type: "rank", group: "L", rank: 1 }, b: { type: "third", groups: ["E", "H", "I", "J", "K"] } },
  { match: 81, a: { type: "rank", group: "D", rank: 1 }, b: { type: "third", groups: ["B", "E", "F", "I", "J"] } },
  { match: 82, a: { type: "rank", group: "G", rank: 1 }, b: { type: "third", groups: ["A", "E", "H", "I", "J"] } },
  { match: 83, a: { type: "rank", group: "K", rank: 2 }, b: { type: "rank", group: "L", rank: 2 } },
  { match: 84, a: { type: "rank", group: "H", rank: 1 }, b: { type: "rank", group: "J", rank: 2 } },
  { match: 85, a: { type: "rank", group: "B", rank: 1 }, b: { type: "third", groups: ["E", "F", "G", "I", "J"] } },
  { match: 86, a: { type: "rank", group: "J", rank: 1 }, b: { type: "rank", group: "H", rank: 2 } },
  { match: 87, a: { type: "rank", group: "K", rank: 1 }, b: { type: "third", groups: ["D", "E", "I", "J", "L"] } },
  { match: 88, a: { type: "rank", group: "D", rank: 2 }, b: { type: "rank", group: "G", rank: 2 } }
];

const knockoutRounds = [
  { id: "round32", title: "Dieciseisavos", subtitle: "28 de junio al 3 de julio", matches: round32 },
  {
    id: "round16",
    title: "Octavos de final",
    subtitle: "4 al 7 de julio",
    matches: [
      { match: 89, a: { type: "winner", match: 73 }, b: { type: "winner", match: 75 } },
      { match: 90, a: { type: "winner", match: 74 }, b: { type: "winner", match: 77 } },
      { match: 91, a: { type: "winner", match: 76 }, b: { type: "winner", match: 78 } },
      { match: 92, a: { type: "winner", match: 79 }, b: { type: "winner", match: 80 } },
      { match: 93, a: { type: "winner", match: 83 }, b: { type: "winner", match: 84 } },
      { match: 94, a: { type: "winner", match: 81 }, b: { type: "winner", match: 82 } },
      { match: 95, a: { type: "winner", match: 86 }, b: { type: "winner", match: 88 } },
      { match: 96, a: { type: "winner", match: 85 }, b: { type: "winner", match: 87 } }
    ]
  },
  {
    id: "quarterfinals",
    title: "Cuartos de final",
    subtitle: "9 al 11 de julio",
    matches: [
      { match: 97, a: { type: "winner", match: 89 }, b: { type: "winner", match: 90 } },
      { match: 98, a: { type: "winner", match: 93 }, b: { type: "winner", match: 94 } },
      { match: 99, a: { type: "winner", match: 91 }, b: { type: "winner", match: 92 } },
      { match: 100, a: { type: "winner", match: 95 }, b: { type: "winner", match: 96 } }
    ]
  },
  {
    id: "semifinals",
    title: "Semifinales",
    subtitle: "14 y 15 de julio",
    matches: [
      { match: 101, a: { type: "winner", match: 97 }, b: { type: "winner", match: 98 } },
      { match: 102, a: { type: "winner", match: 99 }, b: { type: "winner", match: 100 } }
    ]
  },
  {
    id: "thirdPlace",
    title: "Tercer y cuarto puesto",
    subtitle: "18 de julio",
    matches: [
      { match: 103, a: { type: "loser", match: 101 }, b: { type: "loser", match: 102 } }
    ]
  },
  {
    id: "final",
    title: "Final",
    subtitle: "19 de julio",
    matches: [
      { match: 104, a: { type: "winner", match: 101 }, b: { type: "winner", match: 102 } }
    ]
  }
];

const thirdPlaceCombinationRows = `
EFGHIJKL:EJIFHGLK
DFGHIJKL:HGIDJFLK
DEGHIJKL:EJIDHGLK
DEFHIJKL:EJIDHFLK
DEFGIJKL:EGIDJFLK
DEFGHJKL:EGJDHFLK
DEFGHIKL:EGIDHFLK
DEFGHIJL:EGJDHFLI
DEFGHIJK:EGJDHFIK
CFGHIJKL:HGICJFLK
CEGHIJKL:EJICHGLK
CEFHIJKL:EJICHFLK
CEFGIJKL:EGICJFLK
CEFGHJKL:EGJCHFLK
CEFGHIKL:EGICHFLK
CEFGHIJL:EGJCHFLI
CEFGHIJK:EGJCHFIK
CDGHIJKL:HGICJDLK
CDFHIJKL:CJIDHFLK
CDFGIJKL:CGIDJFLK
CDFGHJKL:CGJDHFLK
CDFGHIKL:CGIDHFLK
CDFGHIJL:CGJDHFLI
CDFGHIJK:CGJDHFIK
CDEHIJKL:EJICHDLK
CDEGIJKL:EGICJDLK
CDEGHJKL:EGJCHDLK
CDEGHIKL:EGICHDLK
CDEGHIJL:EGJCHDLI
CDEGHIJK:EGJCHDIK
CDEFIJKL:CJEDIFLK
CDEFHJKL:CJEDHFLK
CDEFHIKL:CEIDHFLK
CDEFHIJL:CJEDHFLI
CDEFHIJK:CJEDHFIK
CDEFGJKL:CGEDJFLK
CDEFGIKL:CGEDIFLK
CDEFGIJL:CGEDJFLI
CDEFGIJK:CGEDJFIK
CDEFGHKL:CGEDHFLK
CDEFGHJL:CGJDHFLE
CDEFGHJK:CGJDHFEK
CDEFGHIL:CGEDHFLI
CDEFGHIK:CGEDHFIK
CDEFGHIJ:CGJDHFEI
BFGHIJKL:HJBFIGLK
BEGHIJKL:EJIBHGLK
BEFHIJKL:EJBFIHLK
BEFGIJKL:EJBFIGLK
BEFGHJKL:EJBFHGLK
BEFGHIKL:EGBFIHLK
BEFGHIJL:EJBFHGLI
BEFGHIJK:EJBFHGIK
BDGHIJKL:HJBDIGLK
BDFHIJKL:HJBDIFLK
BDFGIJKL:IGBDJFLK
BDFGHJKL:HGBDJFLK
BDFGHIKL:HGBDIFLK
BDFGHIJL:HGBDJFLI
BDFGHIJK:HGBDJFIK
BDEHIJKL:EJBDIHLK
BDEGIJKL:EJBDIGLK
BDEGHJKL:EJBDHGLK
BDEGHIKL:EGBDIHLK
BDEGHIJL:EJBDHGLI
BDEGHIJK:EJBDHGIK
BDEFIJKL:EJBDIFLK
BDEFHJKL:EJBDHFLK
BDEFHIKL:EIBDHFLK
BDEFHIJL:EJBDHFLI
BDEFHIJK:EJBDHFIK
BDEFGJKL:EGBDJFLK
BDEFGIKL:EGBDIFLK
BDEFGIJL:EGBDJFLI
BDEFGIJK:EGBDJFIK
BDEFGHKL:EGBDHFLK
BDEFGHJL:HGBDJFLE
BDEFGHJK:HGBDJFEK
BDEFGHIL:EGBDHFLI
BDEFGHIK:EGBDHFIK
BDEFGHIJ:HGBDJFEI
BCGHIJKL:HJBCIGLK
BCFHIJKL:HJBCIFLK
BCFGIJKL:IGBCJFLK
BCFGHJKL:HGBCJFLK
BCFGHIKL:HGBCIFLK
BCFGHIJL:HGBCJFLI
BCFGHIJK:HGBCJFIK
BCEHIJKL:EJBCIHLK
BCEGIJKL:EJBCIGLK
BCEGHJKL:EJBCHGLK
BCEGHIKL:EGBCIHLK
BCEGHIJL:EJBCHGLI
BCEGHIJK:EJBCHGIK
BCEFIJKL:EJBCIFLK
BCEFHJKL:EJBCHFLK
BCEFHIKL:EIBCHFLK
BCEFHIJL:EJBCHFLI
BCEFHIJK:EJBCHFIK
BCEFGJKL:EGBCJFLK
BCEFGIKL:EGBCIFLK
BCEFGIJL:EGBCJFLI
BCEFGIJK:EGBCJFIK
BCEFGHKL:EGBCHFLK
BCEFGHJL:HGBCJFLE
BCEFGHJK:HGBCJFEK
BCEFGHIL:EGBCHFLI
BCEFGHIK:EGBCHFIK
BCEFGHIJ:HGBCJFEI
BCDHIJKL:HJBCIDLK
BCDGIJKL:IGBCJDLK
BCDGHJKL:HGBCJDLK
BCDGHIKL:HGBCIDLK
BCDGHIJL:HGBCJDLI
BCDGHIJK:HGBCJDIK
BCDFIJKL:CJBDIFLK
BCDFHJKL:CJBDHFLK
BCDFHIKL:CIBDHFLK
BCDFHIJL:CJBDHFLI
BCDFHIJK:CJBDHFIK
BCDFGJKL:CGBDJFLK
BCDFGIKL:CGBDIFLK
BCDFGIJL:CGBDJFLI
BCDFGIJK:CGBDJFIK
BCDFGHKL:CGBDHFLK
BCDFGHJL:CGBDHFLJ
BCDFGHJK:HGBCJFDK
BCDFGHIL:CGBDHFLI
BCDFGHIK:CGBDHFIK
BCDFGHIJ:HGBCJFDI
BCDEIJKL:EJBCIDLK
BCDEHJKL:EJBCHDLK
BCDEHIKL:EIBCHDLK
BCDEHIJL:EJBCHDLI
BCDEHIJK:EJBCHDIK
BCDEGJKL:EGBCJDLK
BCDEGIKL:EGBCIDLK
BCDEGIJL:EGBCJDLI
BCDEGIJK:EGBCJDIK
BCDEGHKL:EGBCHDLK
BCDEGHJL:HGBCJDLE
BCDEGHJK:HGBCJDEK
BCDEGHIL:EGBCHDLI
BCDEGHIK:EGBCHDIK
BCDEGHIJ:HGBCJDEI
BCDEFJKL:CJBDEFLK
BCDEFIKL:CEBDIFLK
BCDEFIJL:CJBDEFLI
BCDEFIJK:CJBDEFIK
BCDEFHKL:CEBDHFLK
BCDEFHJL:CJBDHFLE
BCDEFHJK:CJBDHFEK
BCDEFHIL:CEBDHFLI
BCDEFHIK:CEBDHFIK
BCDEFHIJ:CJBDHFEI
BCDEFGKL:CGBDEFLK
BCDEFGJL:CGBDJFLE
BCDEFGJK:CGBDJFEK
BCDEFGIL:CGBDEFLI
BCDEFGIK:CGBDEFIK
BCDEFGIJ:CGBDJFEI
BCDEFGHL:CGBDHFLE
BCDEFGHK:CGBDHFEK
BCDEFGHJ:HGBCJFDE
BCDEFGHI:CGBDHFEI
AFGHIJKL:HJIFAGLK
AEGHIJKL:EJIAHGLK
AEFHIJKL:EJIFAHLK
AEFGIJKL:EJIFAGLK
AEFGHJKL:EGJFAHLK
AEFGHIKL:EGIFAHLK
AEFGHIJL:EGJFAHLI
AEFGHIJK:EGJFAHIK
ADGHIJKL:HJIDAGLK
ADFHIJKL:HJIDAFLK
ADFGIJKL:IGJDAFLK
ADFGHJKL:HGJDAFLK
ADFGHIKL:HGIDAFLK
ADFGHIJL:HGJDAFLI
ADFGHIJK:HGJDAFIK
ADEHIJKL:EJIDAHLK
ADEGIJKL:EJIDAGLK
ADEGHJKL:EGJDAHLK
ADEGHIKL:EGIDAHLK
ADEGHIJL:EGJDAHLI
ADEGHIJK:EGJDAHIK
ADEFIJKL:EJIDAFLK
ADEFHJKL:HJEDAFLK
ADEFHIKL:HEIDAFLK
ADEFHIJL:HJEDAFLI
ADEFHIJK:HJEDAFIK
ADEFGJKL:EGJDAFLK
ADEFGIKL:EGIDAFLK
ADEFGIJL:EGJDAFLI
ADEFGIJK:EGJDAFIK
ADEFGHKL:HGEDAFLK
ADEFGHJL:HGJDAFLE
ADEFGHJK:HGJDAFEK
ADEFGHIL:HGEDAFLI
ADEFGHIK:HGEDAFIK
ADEFGHIJ:HGJDAFEI
ACGHIJKL:HJICAGLK
ACFHIJKL:HJICAFLK
ACFGIJKL:IGJCAFLK
ACFGHJKL:HGJCAFLK
ACFGHIKL:HGICAFLK
ACFGHIJL:HGJCAFLI
ACFGHIJK:HGJCAFIK
ACEHIJKL:EJICAHLK
ACEGIJKL:EJICAGLK
ACEGHJKL:EGJCAHLK
ACEGHIKL:EGICAHLK
ACEGHIJL:EGJCAHLI
ACEGHIJK:EGJCAHIK
ACEFIJKL:EJICAFLK
ACEFHJKL:HJECAFLK
ACEFHIKL:HEICAFLK
ACEFHIJL:HJECAFLI
ACEFHIJK:HJECAFIK
ACEFGJKL:EGJCAFLK
ACEFGIKL:EGICAFLK
ACEFGIJL:EGJCAFLI
ACEFGIJK:EGJCAFIK
ACEFGHKL:HGECAFLK
ACEFGHJL:HGJCAFLE
ACEFGHJK:HGJCAFEK
ACEFGHIL:HGECAFLI
ACEFGHIK:HGECAFIK
ACEFGHIJ:HGJCAFEI
ACDHIJKL:HJICADLK
ACDGIJKL:IGJCADLK
ACDGHJKL:HGJCADLK
ACDGHIKL:HGICADLK
ACDGHIJL:HGJCADLI
ACDGHIJK:HGJCADIK
ACDFIJKL:CJIDAFLK
ACDFHJKL:HJFCADLK
ACDFHIKL:HFICADLK
ACDFHIJL:HJFCADLI
ACDFHIJK:HJFCADIK
ACDFGJKL:CGJDAFLK
ACDFGIKL:CGIDAFLK
ACDFGIJL:CGJDAFLI
ACDFGIJK:CGJDAFIK
ACDFGHKL:HGFCADLK
ACDFGHJL:CGJDAFLH
ACDFGHJK:HGJCAFDK
ACDFGHIL:HGFCADLI
ACDFGHIK:HGFCADIK
ACDFGHIJ:HGJCAFDI
ACDEIJKL:EJICADLK
ACDEHJKL:HJECADLK
ACDEHIKL:HEICADLK
ACDEHIJL:HJECADLI
ACDEHIJK:HJECADIK
ACDEGJKL:EGJCADLK
ACDEGIKL:EGICADLK
ACDEGIJL:EGJCADLI
ACDEGIJK:EGJCADIK
ACDEGHKL:HGECADLK
ACDEGHJL:HGJCADLE
ACDEGHJK:HGJCADEK
ACDEGHIL:HGECADLI
ACDEGHIK:HGECADIK
ACDEGHIJ:HGJCADEI
ACDEFJKL:CJEDAFLK
ACDEFIKL:CEIDAFLK
ACDEFIJL:CJEDAFLI
ACDEFIJK:CJEDAFIK
ACDEFHKL:HEFCADLK
ACDEFHJL:HJFCADLE
ACDEFHJK:HJECAFDK
ACDEFHIL:HEFCADLI
ACDEFHIK:HEFCADIK
ACDEFHIJ:HJECAFDI
ACDEFGKL:CGEDAFLK
ACDEFGJL:CGJDAFLE
ACDEFGJK:CGJDAFEK
ACDEFGIL:CGEDAFLI
ACDEFGIK:CGEDAFIK
ACDEFGIJ:CGJDAFEI
ACDEFGHL:HGFCADLE
ACDEFGHK:HGECAFDK
ACDEFGHJ:HGJCAFDE
ACDEFGHI:HGECAFDI
ABGHIJKL:HJBAIGLK
ABFHIJKL:HJBAIFLK
ABFGIJKL:IJBFAGLK
ABFGHJKL:HJBFAGLK
ABFGHIKL:HGBAIFLK
ABFGHIJL:HJBFAGLI
ABFGHIJK:HJBFAGIK
ABEHIJKL:EJBAIHLK
ABEGIJKL:EJBAIGLK
ABEGHJKL:EJBAHGLK
ABEGHIKL:EGBAIHLK
ABEGHIJL:EJBAHGLI
ABEGHIJK:EJBAHGIK
ABEFIJKL:EJBAIFLK
ABEFHJKL:EJBFAHLK
ABEFHIKL:EIBFAHLK
ABEFHIJL:EJBFAHLI
ABEFHIJK:EJBFAHIK
ABEFGJKL:EJBFAGLK
ABEFGIKL:EGBAIFLK
ABEFGIJL:EJBFAGLI
ABEFGIJK:EJBFAGIK
ABEFGHKL:EGBFAHLK
ABEFGHJL:HJBFAGLE
ABEFGHJK:HJBFAGEK
ABEFGHIL:EGBFAHLI
ABEFGHIK:EGBFAHIK
ABEFGHIJ:HJBFAGEI
ABDHIJKL:IJBDAHLK
ABDGIJKL:IJBDAGLK
ABDGHJKL:HJBDAGLK
ABDGHIKL:IGBDAHLK
ABDGHIJL:HJBDAGLI
ABDGHIJK:HJBDAGIK
ABDFIJKL:IJBDAFLK
ABDFHJKL:HJBDAFLK
ABDFHIKL:HIBDAFLK
ABDFHIJL:HJBDAFLI
ABDFHIJK:HJBDAFIK
ABDFGJKL:FJBDAGLK
ABDFGIKL:IGBDAFLK
ABDFGIJL:FJBDAGLI
ABDFGIJK:FJBDAGIK
ABDFGHKL:HGBDAFLK
ABDFGHJL:HGBDAFLJ
ABDFGHJK:HGBDAFJK
ABDFGHIL:HGBDAFLI
ABDFGHIK:HGBDAFIK
ABDFGHIJ:HGBDAFIJ
ABDEIJKL:EJBAIDLK
ABDEHJKL:EJBDAHLK
ABDEHIKL:EIBDAHLK
ABDEHIJL:EJBDAHLI
ABDEHIJK:EJBDAHIK
ABDEGJKL:EJBDAGLK
ABDEGIKL:EGBAIDLK
ABDEGIJL:EJBDAGLI
ABDEGIJK:EJBDAGIK
ABDEGHKL:EGBDAHLK
ABDEGHJL:HJBDAGLE
ABDEGHJK:HJBDAGEK
ABDEGHIL:EGBDAHLI
ABDEGHIK:EGBDAHIK
ABDEGHIJ:HJBDAGEI
ABDEFJKL:EJBDAFLK
ABDEFIKL:EIBDAFLK
ABDEFIJL:EJBDAFLI
ABDEFIJK:EJBDAFIK
ABDEFHKL:HEBDAFLK
ABDEFHJL:HJBDAFLE
ABDEFHJK:HJBDAFEK
ABDEFHIL:HEBDAFLI
ABDEFHIK:HEBDAFIK
ABDEFHIJ:HJBDAFEI
ABDEFGKL:EGBDAFLK
ABDEFGJL:EGBDAFLJ
ABDEFGJK:EGBDAFJK
ABDEFGIL:EGBDAFLI
ABDEFGIK:EGBDAFIK
ABDEFGIJ:EGBDAFIJ
ABDEFGHL:HGBDAFLE
ABDEFGHK:HGBDAFEK
ABDEFGHJ:HGBDAFEJ
ABDEFGHI:HGBDAFEI
ABCHIJKL:IJBCAHLK
ABCGIJKL:IJBCAGLK
ABCGHJKL:HJBCAGLK
ABCGHIKL:IGBCAHLK
ABCGHIJL:HJBCAGLI
ABCGHIJK:HJBCAGIK
ABCFIJKL:IJBCAFLK
ABCFHJKL:HJBCAFLK
ABCFHIKL:HIBCAFLK
ABCFHIJL:HJBCAFLI
ABCFHIJK:HJBCAFIK
ABCFGJKL:CJBFAGLK
ABCFGIKL:IGBCAFLK
ABCFGIJL:CJBFAGLI
ABCFGIJK:CJBFAGIK
ABCFGHKL:HGBCAFLK
ABCFGHJL:HGBCAFLJ
ABCFGHJK:HGBCAFJK
ABCFGHIL:HGBCAFLI
ABCFGHIK:HGBCAFIK
ABCFGHIJ:HGBCAFIJ
ABCEIJKL:EJBAICLK
ABCEHJKL:EJBCAHLK
ABCEHIKL:EIBCAHLK
ABCEHIJL:EJBCAHLI
ABCEHIJK:EJBCAHIK
ABCEGJKL:EJBCAGLK
ABCEGIKL:EGBAICLK
ABCEGIJL:EJBCAGLI
ABCEGIJK:EJBCAGIK
ABCEGHKL:EGBCAHLK
ABCEGHJL:HJBCAGLE
ABCEGHJK:HJBCAGEK
ABCEGHIL:EGBCAHLI
ABCEGHIK:EGBCAHIK
ABCEGHIJ:HJBCAGEI
ABCEFJKL:EJBCAFLK
ABCEFIKL:EIBCAFLK
ABCEFIJL:EJBCAFLI
ABCEFIJK:EJBCAFIK
ABCEFHKL:HEBCAFLK
ABCEFHJL:HJBCAFLE
ABCEFHJK:HJBCAFEK
ABCEFHIL:HEBCAFLI
ABCEFHIK:HEBCAFIK
ABCEFHIJ:HJBCAFEI
ABCEFGKL:EGBCAFLK
ABCEFGJL:EGBCAFLJ
ABCEFGJK:EGBCAFJK
ABCEFGIL:EGBCAFLI
ABCEFGIK:EGBCAFIK
ABCEFGIJ:EGBCAFIJ
ABCEFGHL:HGBCAFLE
ABCEFGHK:HGBCAFEK
ABCEFGHJ:HGBCAFEJ
ABCEFGHI:HGBCAFEI
ABCDIJKL:IJBCADLK
ABCDHJKL:HJBCADLK
ABCDHIKL:HIBCADLK
ABCDHIJL:HJBCADLI
ABCDHIJK:HJBCADIK
ABCDGJKL:CJBDAGLK
ABCDGIKL:IGBCADLK
ABCDGIJL:CJBDAGLI
ABCDGIJK:CJBDAGIK
ABCDGHKL:HGBCADLK
ABCDGHJL:HGBCADLJ
ABCDGHJK:HGBCADJK
ABCDGHIL:HGBCADLI
ABCDGHIK:HGBCADIK
ABCDGHIJ:HGBCADIJ
ABCDFJKL:CJBDAFLK
ABCDFIKL:CIBDAFLK
ABCDFIJL:CJBDAFLI
ABCDFIJK:CJBDAFIK
ABCDFHKL:HFBCADLK
ABCDFHJL:CJBDAFLH
ABCDFHJK:HJBCAFDK
ABCDFHIL:HFBCADLI
ABCDFHIK:HFBCADIK
ABCDFHIJ:HJBCAFDI
ABCDFGKL:CGBDAFLK
ABCDFGJL:CGBDAFLJ
ABCDFGJK:CGBDAFJK
ABCDFGIL:CGBDAFLI
ABCDFGIK:CGBDAFIK
ABCDFGIJ:CGBDAFIJ
ABCDFGHL:CGBDAFLH
ABCDFGHK:HGBCAFDK
ABCDFGHJ:HGBCAFDJ
ABCDFGHI:HGBCAFDI
ABCDEJKL:EJBCADLK
ABCDEIKL:EIBCADLK
ABCDEIJL:EJBCADLI
ABCDEIJK:EJBCADIK
ABCDEHKL:HEBCADLK
ABCDEHJL:HJBCADLE
ABCDEHJK:HJBCADEK
ABCDEHIL:HEBCADLI
ABCDEHIK:HEBCADIK
ABCDEHIJ:HJBCADEI
ABCDEGKL:EGBCADLK
ABCDEGJL:EGBCADLJ
ABCDEGJK:EGBCADJK
ABCDEGIL:EGBCADLI
ABCDEGIK:EGBCADIK
ABCDEGIJ:EGBCADIJ
ABCDEGHL:HGBCADLE
ABCDEGHK:HGBCADEK
ABCDEGHJ:HGBCADEJ
ABCDEGHI:HGBCADEI
ABCDEFKL:CEBDAFLK
ABCDEFJL:CJBDAFLE
ABCDEFJK:CJBDAFEK
ABCDEFIL:CEBDAFLI
ABCDEFIK:CEBDAFIK
ABCDEFIJ:CJBDAFEI
ABCDEFHL:HFBCADLE
ABCDEFHK:HEBCAFDK
ABCDEFHJ:HJBCAFDE
ABCDEFHI:HEBCAFDI
ABCDEFGL:CGBDAFLE
ABCDEFGK:CGBDAFEK
ABCDEFGJ:CGBDAFEJ
ABCDEFGI:CGBDAFEI
ABCDEFGH:HGBCAFDE
`;

const thirdPlaceCombinations = Object.fromEntries(
  thirdPlaceCombinationRows.trim().split(/\s+/).map((row) => {
    const [groupsKey, assignment] = row.split(":");
    return [groupsKey, assignment];
  })
);

const thirdPlaceWinnerOrder = ["A", "B", "D", "E", "G", "I", "K", "L"];
const thirdPlaceWinnerMatchNumber = { A: 79, B: 85, D: 81, E: 74, G: 82, I: 77, K: 87, L: 80 };

const isBrowser = typeof document !== "undefined";
const storageKey = "worldCup2026Results";
const knockoutStorageKey = "worldCup2026KnockoutSelections";
let results = isBrowser ? loadSavedResults() : {};
let knockoutSelections = isBrowser ? loadSavedSelections() : {};

const groupEl = isBrowser ? document.getElementById("groups") : null;
const thirdsEl = isBrowser ? document.getElementById("thirdsTable") : null;
const bracketEl = isBrowser ? document.getElementById("bracket") : null;
const bracketLockEl = isBrowser ? document.getElementById("bracketLock") : null;
const statusText = isBrowser ? document.getElementById("statusText") : null;
const goalsText = isBrowser ? document.getElementById("goalsText") : null;
const thirdCutText = isBrowser ? document.getElementById("thirdCutText") : null;
const statusTeamsEl = isBrowser ? document.getElementById("statusTeams") : null;
const legendButtons = isBrowser ? document.querySelectorAll(".legend-btn") : [];
const resetModal = isBrowser ? document.getElementById("resetModal") : null;
const cancelResetBtn = isBrowser ? document.getElementById("cancelResetBtn") : null;
const confirmResetBtn = isBrowser ? document.getElementById("confirmResetBtn") : null;
const needModal = isBrowser ? document.getElementById("needModal") : null;
const needModalTitle = isBrowser ? document.getElementById("needModalTitle") : null;
const needModalText = isBrowser ? document.getElementById("needModalText") : null;
const closeNeedBtn = isBrowser ? document.getElementById("closeNeedBtn") : null;
let selectedStatus = null;
let qualificationNeedByTeam = {};

if (isBrowser) {
  document.getElementById("resetBtn").addEventListener("click", () => {
    openResetModal();
  });

  cancelResetBtn.addEventListener("click", closeResetModal);
  confirmResetBtn.addEventListener("click", () => {
    results = {};
    knockoutSelections = {};
    localStorage.removeItem(storageKey);
    localStorage.removeItem(knockoutStorageKey);
    closeResetModal();
    render();
  });

  resetModal.addEventListener("click", (event) => {
    if (event.target === resetModal) closeResetModal();
  });

  needModal.addEventListener("click", (event) => {
    if (event.target === needModal) closeNeedModal();
  });

  closeNeedBtn.addEventListener("click", closeNeedModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !resetModal.hidden) closeResetModal();
    if (event.key === "Escape" && !needModal.hidden) closeNeedModal();
  });

  legendButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedStatus = selectedStatus === button.dataset.status ? null : button.dataset.status;
      render();
    });
  });
}

function openResetModal() {
  resetModal.hidden = false;
  confirmResetBtn.focus();
}

function closeResetModal() {
  resetModal.hidden = true;
}

function openNeedModal(teamName, needText) {
  needModalTitle.textContent = teamName;
  needModalText.textContent = needText;
  needModal.hidden = false;
  closeNeedBtn.focus();
}

function closeNeedModal() {
  needModal.hidden = true;
}

function loadSavedResults() {
  try {
    const savedResults = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return savedResults && typeof savedResults === "object" && !Array.isArray(savedResults) ? savedResults : {};
  } catch (error) {
    localStorage.removeItem(storageKey);
    return {};
  }
}

function loadSavedSelections() {
  try {
    const savedSelections = JSON.parse(localStorage.getItem(knockoutStorageKey) || "{}");
    return savedSelections && typeof savedSelections === "object" && !Array.isArray(savedSelections) ? savedSelections : {};
  } catch (error) {
    localStorage.removeItem(knockoutStorageKey);
    return {};
  }
}

function getFixtures(groupKey) {
  return roundPairings.map(([homePos, awayPos], index) => ({
    id: `${groupKey}-${index}`,
    group: groupKey,
    round: Math.floor(index / 2) + 1,
    home: groups[groupKey][homePos - 1],
    away: groups[groupKey][awayPos - 1]
  }));
}

function emptyStats(team, groupKey) {
  return {
    team,
    group: groupKey,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    maxPoints: 9,
    seed: rankingSeed.indexOf(team) === -1 ? 999 : rankingSeed.indexOf(team)
  };
}

function buildTables(resultsSource = results) {
  const byGroup = {};

  Object.keys(groups).forEach((groupKey) => {
    byGroup[groupKey] = buildGroupTable(groupKey, resultsSource);
  });

  return byGroup;
}

function buildGroupTable(groupKey, resultsSource) {
  const table = groups[groupKey].map((team) => emptyStats(team, groupKey));
  const byTeam = Object.fromEntries(table.map((team) => [team.team, team]));
  const fixtures = getFixtures(groupKey);

  fixtures.forEach((fixture) => {
    const result = resultsSource[fixture.id];
    if (!isCompleteResult(result)) return;

    const home = byTeam[fixture.home];
    const away = byTeam[fixture.away];
    home.played += 1;
    away.played += 1;
    home.goalsFor += result.home;
    home.goalsAgainst += result.away;
    away.goalsFor += result.away;
    away.goalsAgainst += result.home;

    if (result.home > result.away) {
      home.won += 1;
      away.lost += 1;
      home.points += 3;
    } else if (result.home < result.away) {
      away.won += 1;
      home.lost += 1;
      away.points += 3;
    } else {
      home.drawn += 1;
      away.drawn += 1;
      home.points += 1;
      away.points += 1;
    }
  });

  table.forEach((team) => {
    team.goalDifference = team.goalsFor - team.goalsAgainst;
    team.maxPoints = team.points + (3 - team.played) * 3;
  });

  return sortGroupTable(table, fixtures, resultsSource);
}

// FIFA World Cup 26 Regulations, article 13:
// tied teams in a group are ranked first by head-to-head points, head-to-head
// goal difference and head-to-head goals scored. Only unresolved ties then move
// to overall group goal difference and overall group goals scored, followed by
// team conduct and FIFA rankings.
function sortGroupTable(table, fixtures, resultsSource) {
  const pointBuckets = groupByValue(table, (team) => team.points)
    .sort((a, b) => b.value - a.value);

  return pointBuckets.flatMap((bucket) => {
    if (bucket.items.length === 1) return bucket.items;
    return rankPointTiedTeams(bucket.items, fixtures, resultsSource);
  });
}

function rankPointTiedTeams(teams, fixtures, resultsSource) {
  const headToHeadBlocks = rankByHeadToHeadCriteria(teams, fixtures, resultsSource);

  return headToHeadBlocks.flatMap((block) => {
    if (block.length === 1) return block;
    return applyOrderedCriteria(block, [
      (team) => team.goalDifference,
      (team) => team.goalsFor,
      (team) => getTeamConductScore(team),
      (team) => -team.seed,
      (team) => team.team
    ]);
  });
}

function rankByHeadToHeadCriteria(teams, fixtures, resultsSource) {
  const rankedBlocks = applyHeadToHeadPass(teams, fixtures, resultsSource);
  const changed = rankedBlocks.length > 1;

  if (!changed) return rankedBlocks;

  return rankedBlocks.flatMap((block) => {
    if (block.length === 1) return [block];
    return rankByHeadToHeadCriteria(block, fixtures, resultsSource);
  });
}

function applyHeadToHeadPass(teams, fixtures, resultsSource) {
  return applyOrderedCriteria(teams, [
    (team) => getHeadToHeadStats(team.team, teams, fixtures, resultsSource).points,
    (team) => getHeadToHeadStats(team.team, teams, fixtures, resultsSource).goalDifference,
    (team) => getHeadToHeadStats(team.team, teams, fixtures, resultsSource).goalsFor
  ], { keepTiedBlocks: true });
}

function applyOrderedCriteria(teams, criteria, options = {}) {
  let blocks = [teams];

  criteria.forEach((criterion) => {
    blocks = blocks.flatMap((block) => {
      if (block.length === 1) return [block];
      return splitByCriterion(block, criterion);
    });
  });

  return options.keepTiedBlocks ? blocks : blocks.flat();
}

function splitByCriterion(teams, criterion) {
  const decorated = teams.map((team) => ({ team, value: criterion(team) }));
  decorated.sort((a, b) => compareCriterionValues(a.value, b.value));

  const buckets = [];
  decorated.forEach(({ team, value }) => {
    const lastBucket = buckets[buckets.length - 1];
    if (lastBucket && compareCriterionValues(lastBucket.value, value) === 0) {
      lastBucket.items.push(team);
    } else {
      buckets.push({ value, items: [team] });
    }
  });

  return buckets.map((bucket) => bucket.items);
}

function compareCriterionValues(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return String(a).localeCompare(String(b));
  }
  return b - a;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function groupByValue(items, getValue) {
  return items.reduce((buckets, item) => {
    const value = getValue(item);
    let bucket = buckets.find((candidate) => candidate.value === value);
    if (!bucket) {
      bucket = { value, items: [] };
      buckets.push(bucket);
    }
    bucket.items.push(item);
    return buckets;
  }, []);
}

function getHeadToHeadStats(teamName, tiedTeams, fixtures, resultsSource) {
  const tiedTeamNames = new Set(tiedTeams.map((team) => team.team));
  const stats = { points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 };

  fixtures.forEach((fixture) => {
    if (!tiedTeamNames.has(fixture.home) || !tiedTeamNames.has(fixture.away)) return;
    if (fixture.home !== teamName && fixture.away !== teamName) return;

    const result = resultsSource[fixture.id];
    if (!isCompleteResult(result)) return;

    const goalsFor = fixture.home === teamName ? result.home : result.away;
    const goalsAgainst = fixture.home === teamName ? result.away : result.home;
    stats.goalsFor += goalsFor;
    stats.goalsAgainst += goalsAgainst;

    if (goalsFor > goalsAgainst) stats.points += 3;
    else if (goalsFor === goalsAgainst) stats.points += 1;
  });

  stats.goalDifference = stats.goalsFor - stats.goalsAgainst;
  return stats;
}

function getTeamConductScore(team) {
  if (Number.isFinite(team.teamConductScore)) return team.teamConductScore;
  if (Number.isFinite(team.teamConductPoints)) return -team.teamConductPoints;
  return 0;
}

function compareTeams(a, b) {
  return b.points - a.points ||
    b.goalDifference - a.goalDifference ||
    b.goalsFor - a.goalsFor ||
    getTeamConductScore(b) - getTeamConductScore(a) ||
    a.seed - b.seed ||
    a.team.localeCompare(b.team);
}

function isCompleteResult(result) {
  return result &&
    Number.isInteger(result.home) &&
    Number.isInteger(result.away) &&
    result.home >= 0 &&
    result.away >= 0;
}

function getThirds(tables) {
  return Object.keys(tables)
    .map((groupKey) => ({ ...tables[groupKey][2], group: groupKey }))
    .sort(compareTeams);
}

function getTeamByName(tables, teamName) {
  return Object.values(tables).flat().find((team) => team.team === teamName);
}

function getStatus(team, table, qualifyingThirds, tables, playedMatches, resultsSource = results) {
  const rank = table.findIndex((row) => row.team === team.team) + 1;
  const isCompleteGroup = table.every((row) => row.played === 3);
  const allGroupsComplete = Object.values(tables).every((groupTable) => groupTable.every((row) => row.played === 3));
  const isCurrentQualifier = rank <= 2 || qualifyingThirds.some((row) => row.team === team.team);
  const guaranteedFirst = isGuaranteedFirstPlace(team, table, resultsSource);
  const guaranteedTopTwo = isGuaranteedTopTwo(team, table, resultsSource);
  const guaranteedThird = rank === 3 && isGuaranteedThirdQualifier(team, tables, qualifyingThirds);
  const impossibleTopThree = table.filter((other) => other.team !== team.team && other.points > team.maxPoints).length >= 3;

  if (isCompleteGroup && rank <= 2) return "green";
  if (isCompleteGroup && rank >= 4) return "red";
  if (guaranteedFirst || guaranteedTopTwo || guaranteedThird || (allGroupsComplete && isCurrentQualifier)) return "green";
  if ((allGroupsComplete || impossibleTopThree) && !isCurrentQualifier) return "red";
  if (!isCurrentQualifier && playedMatches > 0) {
    const canReachTopTwo = canStillReachGroupRank(team, table, resultsSource, 2);
    const canReachTopThree = canStillReachGroupRank(team, table, resultsSource, 3);
    if (!canReachTopThree) return "red";
    if (!canReachTopTwo && !canStillBeThirdQualifier(team, tables, resultsSource)) return "red";
  }
  if (isCurrentQualifier) return "sky";
  return playedMatches === 0 ? "" : "yellow";
}

function isGuaranteedTopTwo(team, table, resultsSource = results) {
  const rank = table.findIndex((row) => row.team === team.team) + 1;
  const isCompleteGroup = table.every((row) => row.played === 3);
  if (isCompleteGroup) return rank <= 2;
  if (team.played === 0) return false;

  const teamsAlreadyAhead = table.filter((other) => other.team !== team.team && other.points > team.points).length;
  if (teamsAlreadyAhead >= 2) return false;

  const teamsThatCanCatch = table.filter((other) => other.team !== team.team && other.maxPoints >= team.points).length;
  if (teamsAlreadyAhead <= 1 && teamsThatCanCatch <= 1) return true;

  const groupKey = team.group;
  const pendingFixtures = getFixtures(groupKey).filter((fixture) => !isCompleteResult(resultsSource[fixture.id]));
  if (!pendingFixtures.length) return rank <= 2;

  return !hasScenarioWhereTeamFallsBelowRank(team.team, groupKey, pendingFixtures, resultsSource, 2);
}

function canStillReachGroupRank(team, table, resultsSource = results, maxAllowedRank) {
  const rank = table.findIndex((row) => row.team === team.team) + 1;
  const isCompleteGroup = table.every((row) => row.played === 3);
  if (isCompleteGroup) return rank <= maxAllowedRank;

  const groupKey = team.group;
  const pendingFixtures = getFixtures(groupKey).filter((fixture) => !isCompleteResult(resultsSource[fixture.id]));
  if (!pendingFixtures.length) return rank <= maxAllowedRank;

  return hasScenarioWhereTeamReachesRank(team.team, groupKey, pendingFixtures, resultsSource, maxAllowedRank);
}

function isGuaranteedFirstPlace(team, table, resultsSource = results) {
  const isCompleteGroup = table.every((row) => row.played === 3);
  if (isCompleteGroup) return table[0].team === team.team;

  if (team.played === 0 || table[0].team !== team.team) return false;
  if (table.some((other) => other.team !== team.team && other.maxPoints > team.points)) return false;

  const groupKey = team.group;
  const pendingFixtures = getFixtures(groupKey).filter((fixture) => !isCompleteResult(resultsSource[fixture.id]));
  if (!pendingFixtures.length) return table[0].team === team.team;

  return !hasScenarioWhereTeamFallsBelowRank(team.team, groupKey, pendingFixtures, resultsSource, 1);
}

function hasScenarioWhereTeamFallsBelowRank(teamName, groupKey, pendingFixtures, resultsSource, maxAllowedRank) {
  const scoreOptions = getScenarioScoreOptions(resultsSource);

  function search(index, scenarioResults) {
    if (index === pendingFixtures.length) {
      const rank = buildGroupTable(groupKey, scenarioResults).findIndex((row) => row.team === teamName) + 1;
      return rank > maxAllowedRank;
    }

    const fixture = pendingFixtures[index];
    return scoreOptions.some((score) => {
      scenarioResults[fixture.id] = score;
      const foundLosingScenario = search(index + 1, scenarioResults);
      delete scenarioResults[fixture.id];
      return foundLosingScenario;
    });
  }

  return search(0, { ...resultsSource });
}

function hasScenarioWhereTeamReachesRank(teamName, groupKey, pendingFixtures, resultsSource, maxAllowedRank) {
  const scoreOptions = getScenarioScoreOptions(resultsSource);

  function search(index, scenarioResults) {
    if (index === pendingFixtures.length) {
      const rank = buildGroupTable(groupKey, scenarioResults).findIndex((row) => row.team === teamName) + 1;
      return rank <= maxAllowedRank;
    }

    const fixture = pendingFixtures[index];
    return scoreOptions.some((score) => {
      scenarioResults[fixture.id] = score;
      const foundQualifyingScenario = search(index + 1, scenarioResults);
      delete scenarioResults[fixture.id];
      return foundQualifyingScenario;
    });
  }

  return search(0, { ...resultsSource });
}

function getScenarioScoreOptions(resultsSource) {
  const maxKnownGoals = Object.values(resultsSource).reduce((maxGoals, result) => {
    if (!isCompleteResult(result)) return maxGoals;
    return Math.max(maxGoals, result.home, result.away);
  }, 0);
  const highScore = Math.max(20, maxKnownGoals + 20);

  return [
    { home: 0, away: 0 },
    { home: 1, away: 0 },
    { home: 0, away: 1 },
    { home: 1, away: 1 },
    { home: 2, away: 0 },
    { home: 0, away: 2 },
    { home: 2, away: 1 },
    { home: 1, away: 2 },
    { home: 2, away: 2 },
    { home: 3, away: 0 },
    { home: 0, away: 3 },
    { home: 3, away: 1 },
    { home: 1, away: 3 },
    { home: 3, away: 3 },
    { home: 7, away: 0 },
    { home: 0, away: 7 },
    { home: 7, away: 7 },
    { home: highScore, away: 0 },
    { home: 0, away: highScore },
    { home: highScore, away: highScore }
  ].filter((score, index, options) => {
    return options.findIndex((candidate) => candidate.home === score.home && candidate.away === score.away) === index;
  });
}

function isGuaranteedThirdQualifier(team, tables, qualifyingThirds) {
  if (!qualifyingThirds.some((third) => third.team === team.team)) return false;

  const possibleBetterThirds = Object.values(tables).filter((table) => {
    const groupKey = table[0].group;
    if (groupKey === team.group) return false;
    return getMaxPossibleThirdPoints(table) >= team.points;
  }).length;

  return possibleBetterThirds < 8;
}

function getMaxPossibleThirdPoints(table) {
  return [...table]
    .map((team) => team.maxPoints)
    .sort((a, b) => b - a)[2];
}

function canStillBeThirdQualifier(team, tables, resultsSource = results) {
  if (team.maxPoints < 1) return false;
  const teamHasPendingMatches = team.played < 3;

  const lockedBetterThirds = Object.values(tables).filter((table) => {
    const third = table[2];
    if (third.team === team.team) return false;
    if (third.group === team.group) return false;
    if (teamHasPendingMatches) return third.points > team.maxPoints;
    const isComplete = table.every((row) => row.played === 3);
    if (!isComplete) return isGroupThirdGuaranteedBetterThanTeam(table, team, resultsSource);
    return compareTeams(third, team) < 0;
  }).length;

  return lockedBetterThirds < 8;
}

function isGroupThirdGuaranteedBetterThanTeam(table, team, resultsSource = results) {
  const groupKey = table[0].group;
  const pendingFixtures = getFixtures(groupKey).filter((fixture) => !isCompleteResult(resultsSource[fixture.id]));
  if (!pendingFixtures.length) return compareTeams(table[2], team) < 0;

  return !hasScenarioWhereGroupThirdDoesNotBeatTeam(groupKey, pendingFixtures, resultsSource, team);
}

function hasScenarioWhereGroupThirdDoesNotBeatTeam(groupKey, pendingFixtures, resultsSource, team) {
  const scoreOptions = getScenarioScoreOptions(resultsSource);

  function search(index, scenarioResults) {
    if (index === pendingFixtures.length) {
      const third = buildGroupTable(groupKey, scenarioResults)[2];
      return compareTeams(third, team) >= 0;
    }

    const fixture = pendingFixtures[index];
    return scoreOptions.some((score) => {
      scenarioResults[fixture.id] = score;
      const foundScenario = search(index + 1, scenarioResults);
      delete scenarioResults[fixture.id];
      return foundScenario;
    });
  }

  return search(0, { ...resultsSource });
}

function getNextPendingFixture(teamName) {
  for (const groupKey of Object.keys(groups)) {
    const fixture = getFixtures(groupKey).find((candidate) => {
      return (candidate.home === teamName || candidate.away === teamName) && !isCompleteResult(results[candidate.id]);
    });

    if (fixture) return fixture;
  }

  return null;
}

function simulateResult(fixture, score) {
  const simulatedResults = {
    ...results,
    [fixture.id]: score
  };
  const tables = buildTables(simulatedResults);
  const thirds = getThirds(tables);
  const qualifyingThirds = thirds.slice(0, 8);
  const playedMatches = Object.values(simulatedResults).filter(isCompleteResult).length;
  const team = getTeamByName(tables, fixture.home === score.team ? fixture.home : fixture.away);

  return getStatus(team, tables[team.group], qualifyingThirds, tables, playedMatches, simulatedResults);
}

function getQualificationNeed(team, tables, qualifyingThirds, playedMatches) {
  const status = getStatus(team, tables[team.group], qualifyingThirds, tables, playedMatches, results);
  if (status === "green") return "Ya clasificado";
  if (status === "red") return "Ya no puede llegar";

  const nextFixture = getNextPendingFixture(team.team);
  if (!nextFixture) return status === "sky" ? "Clasifica si se mantiene el corte" : "Depende de terceros";

  const winScore = nextFixture.home === team.team
    ? { home: 1, away: 0, team: team.team }
    : { home: 0, away: 1, team: team.team };
  const drawScore = { home: 0, away: 0, team: team.team };
  const winStatus = simulateResult(nextFixture, winScore);
  const drawStatus = simulateResult(nextFixture, drawScore);

  if (winStatus === "green") return "Con ganar clasifica";
  if (drawStatus === "sky" || drawStatus === "yellow") return "Con empatar depende";
  return "Necesita ganar y mejorar DG";
}

function getThirdCutSummary(thirds, playedMatches) {
  if (playedMatches === 0) return "<span class=\"third-cut-empty\">Sin resultados cargados.</span>";

  const lastIn = thirds[7];
  const firstOut = thirds[8];
  if (!lastIn || !firstOut) return "<span class=\"third-cut-empty\">Aun no hay suficientes terceros para calcular el corte.</span>";

  const pointGap = lastIn.points - firstOut.points;
  let reason = "";
  if (pointGap > 0) {
    reason = `${pointGap} punto${pointGap === 1 ? "" : "s"} de ventaja`;
  } else if (lastIn.goalDifference !== firstOut.goalDifference) {
    reason = `misma cantidad de puntos, mejor DG (${formatSigned(lastIn.goalDifference)} vs ${formatSigned(firstOut.goalDifference)})`;
  } else if (lastIn.goalsFor !== firstOut.goalsFor) {
    reason = `mismos puntos y DG, mas GF (${lastIn.goalsFor} vs ${firstOut.goalsFor})`;
  } else {
    reason = "igualados por criterios principales; decide el ranking precargado";
  }

  return `
    <div class="third-cut-grid">
      <span class="third-cut-chip third-cut-in">
        <b>Entra</b>
        ${escapeHtml(lastIn.team)}
        <small>Grupo ${lastIn.group} - ${lastIn.points} pts - DG ${formatSigned(lastIn.goalDifference)}</small>
      </span>
      <span class="third-cut-chip third-cut-out">
        <b>Afuera</b>
        ${escapeHtml(firstOut.team)}
        <small>Grupo ${firstOut.group} - ${firstOut.points} pts - DG ${formatSigned(firstOut.goalDifference)}</small>
      </span>
      <span class="third-cut-chip third-cut-reason">
        <b>Criterio</b>
        ${reason}
      </span>
    </div>
  `;
}

function formatSigned(value) {
  return value > 0 ? `+${value}` : String(value);
}

function assignThirds(qualifiedThirds) {
  const thirdByGroup = Object.fromEntries(qualifiedThirds.map((team) => [team.group, team]));
  const qualifiedGroupsKey = qualifiedThirds.map((team) => team.group).sort().join("");
  const officialAssignment = thirdPlaceCombinations[qualifiedGroupsKey];

  if (!officialAssignment) return {};

  return Object.fromEntries(officialAssignment.split("").map((thirdGroup, index) => {
    const winnerGroup = thirdPlaceWinnerOrder[index];
    const matchIndex = round32.findIndex((match) => match.match === thirdPlaceWinnerMatchNumber[winnerGroup]);
    return [matchIndex, thirdByGroup[thirdGroup]];
  }).filter(([, team]) => Boolean(team)));
}

function resolveSlot(slot, tables, thirdAssignments, matchIndex) {
  if (slot.type === "rank") {
    const team = tables[slot.group][slot.rank - 1];
    return {
      label: team.team,
      meta: `${slot.rank === 1 ? "1ro" : "2do"} Grupo ${slot.group}`,
      rank: slot.rank
    };
  }

  const assigned = thirdAssignments[matchIndex];
  if (assigned) {
    return { label: assigned.team, meta: `3ro Grupo ${assigned.group}`, rank: 3 };
  }

  return { label: "3ro por definir", meta: `Grupos ${slot.groups.join(", ")}`, rank: 3 };
}

function resolveKnockoutSlot(slot, tables, thirdAssignments, matchIndex, matchByNumber) {
  if (slot.type === "rank" || slot.type === "third") {
    return resolveSlot(slot, tables, thirdAssignments, matchIndex);
  }

  const sourceMatch = matchByNumber[slot.match];
  const selectedWinner = knockoutSelections[slot.match];
  const sourceSlots = sourceMatch
    ? getMatchSlots(sourceMatch, tables, thirdAssignments, matchByNumber)
    : [];
  const selectedLoser = selectedWinner
    ? sourceSlots.find((candidate) => candidate.label !== selectedWinner)
    : null;

  if (slot.type === "winner" && selectedWinner) {
    const selectedSlot = sourceSlots.find((candidate) => candidate.label === selectedWinner);
    return {
      label: selectedWinner,
      meta: `Ganador partido ${slot.match}`,
      rank: selectedSlot ? selectedSlot.rank : 0
    };
  }

  if (slot.type === "loser" && selectedLoser) {
    return {
      label: selectedLoser.label,
      meta: `Perdedor partido ${slot.match}`,
      rank: selectedLoser.rank
    };
  }

  return {
    label: `${slot.type === "winner" ? "Ganador" : "Perdedor"} partido ${slot.match}`,
    meta: "Pendiente de definir",
    rank: 0,
    pending: true
  };
}

function getMatchByNumber() {
  return Object.fromEntries(knockoutRounds.flatMap((round) => {
    return round.matches.map((match) => [match.match, match]);
  }));
}

function getRound32MatchIndex(matchNumber) {
  return round32.findIndex((match) => match.match === matchNumber);
}

function getMatchSlots(match, tables, thirdAssignments, matchByNumber) {
  const matchIndex = getRound32MatchIndex(match.match);
  return [
    resolveKnockoutSlot(match.a, tables, thirdAssignments, matchIndex, matchByNumber),
    resolveKnockoutSlot(match.b, tables, thirdAssignments, matchIndex, matchByNumber)
  ];
}

function isAllGroupsComplete(tables) {
  return Object.values(tables).every((table) => table.every((team) => team.played === 3));
}

function isSelectableSlot(slot) {
  return !slot.pending && !slot.label.includes("por definir") && !slot.label.startsWith("Ganador ") && !slot.label.startsWith("Perdedor ");
}

function sanitizeKnockoutSelections(tables, thirdAssignments) {
  const matchByNumber = getMatchByNumber();
  let changed = false;

  knockoutRounds.forEach((round) => {
    round.matches.forEach((match) => {
      const selected = knockoutSelections[match.match];
      if (!selected) return;

      const slots = getMatchSlots(match, tables, thirdAssignments, matchByNumber);
      const isValid = slots.some((slot) => isSelectableSlot(slot) && slot.label === selected);
      if (!isValid) {
        delete knockoutSelections[match.match];
        changed = true;
      }
    });
  });

  if (changed) {
    localStorage.setItem(knockoutStorageKey, JSON.stringify(knockoutSelections));
  }
}

function setKnockoutWinner(matchNumber, winner) {
  if (winner) {
    knockoutSelections[matchNumber] = winner;
  } else {
    delete knockoutSelections[matchNumber];
  }

  localStorage.setItem(knockoutStorageKey, JSON.stringify(knockoutSelections));
  render();
}

function setResult(fixtureId, side, value, focusState = null) {
  const parsed = value === "" ? null : Number(value);
  const current = results[fixtureId] || {};

  if (parsed === null || Number.isNaN(parsed) || parsed < 0) {
    delete current[side];
  } else {
    current[side] = Math.floor(parsed);
  }

  if (Number.isInteger(current.home) || Number.isInteger(current.away)) {
    results[fixtureId] = current;
  } else {
    delete results[fixtureId];
  }

  localStorage.setItem(storageKey, JSON.stringify(results));
  render(focusState);
}

function render(focusState = null) {
  const tables = buildTables();
  const thirds = getThirds(tables);
  const qualifyingThirds = thirds.slice(0, 8);
  const completeResults = Object.values(results).filter(isCompleteResult);
  const playedMatches = completeResults.length;
  const totalMatches = Object.keys(groups).length * 6;
  const totalGoals = completeResults.reduce((sum, result) => sum + result.home + result.away, 0);
  const goalAverage = playedMatches === 0 ? "0.00" : (totalGoals / playedMatches).toFixed(2);
  const thirdAssignments = assignThirds(qualifyingThirds);
  const groupsComplete = isAllGroupsComplete(tables);

  statusText.textContent = `${playedMatches} de ${totalMatches} partidos con resultado cargado.`;
  goalsText.textContent = `${totalGoals} gol${totalGoals === 1 ? "" : "es"}. Promedio: ${goalAverage} por partido.`;
  thirdCutText.innerHTML = getThirdCutSummary(thirds, playedMatches);
  renderGroups(tables, qualifyingThirds, playedMatches);
  renderThirds(thirds);
  sanitizeKnockoutSelections(tables, thirdAssignments);
  renderBracket(tables, thirdAssignments, groupsComplete, totalMatches - playedMatches);
  renderStatusTeams(tables, qualifyingThirds, playedMatches);
  restoreInputFocus(focusState);
  restoreScrollPosition(focusState);
}

function renderGroups(tables, qualifyingThirds, playedMatches) {
  qualificationNeedByTeam = {};
  groupEl.innerHTML = Object.keys(groups).map((groupKey) => {
    const rows = tables[groupKey].map((team) => {
      const status = getStatus(team, tables[groupKey], qualifyingThirds, tables, playedMatches, results);
      const goalDifferenceClass = getGoalDifferenceClass(team.goalDifference);
      const qualificationNeed = getQualificationNeed(team, tables, qualifyingThirds, playedMatches);
      qualificationNeedByTeam[team.team] = qualificationNeed;
      const firstPlaceBadge = isGuaranteedFirstPlace(team, tables[groupKey], results)
        ? `<span class="first-place-badge" title="Primer puesto asegurado" aria-label="Primer puesto asegurado">🥇</span>`
        : "";
      const renderedFirstPlaceBadge = firstPlaceBadge ? `<span class="first-place-badge" title="Primer puesto asegurado" aria-label="Primer puesto asegurado">&#129351;</span>` : "";
      const escapedTeam = escapeHtml(team.team);
      return `
        <tr class="${status ? `row-${status}` : ""}">
          <td>${escapedTeam}${renderedFirstPlaceBadge}</td>
          <td>${team.played}</td>
          <td>${team.won}</td>
          <td>${team.drawn}</td>
          <td>${team.lost}</td>
          <td>${team.goalsFor}</td>
          <td>${team.goalsAgainst}</td>
          <td class="${goalDifferenceClass}">${team.goalDifference}</td>
          <td><strong>${team.points}</strong></td>
          <td>
            <button class="need-btn" type="button" data-team="${escapedTeam}" aria-label="Ver que necesita ${escapedTeam} para clasificar">Ver</button>
          </td>
        </tr>
      `;
    }).join("");

    const fixtures = getFixtures(groupKey).map((fixture, index) => {
      const result = results[fixture.id] || {};
      const roundLabel = index % 2 === 0 ? `<div class="round-label">Jornada ${fixture.round}</div>` : "";

      return `
        ${roundLabel}
        <div class="fixture">
          <span class="team-home">${escapeHtml(fixture.home)}</span>
          <input aria-label="Goles de ${escapeHtml(fixture.home)}" type="number" min="0" value="${Number.isInteger(result.home) ? result.home : ""}" data-fixture="${fixture.id}" data-side="home">
          <span>-</span>
          <input aria-label="Goles de ${escapeHtml(fixture.away)}" type="number" min="0" value="${Number.isInteger(result.away) ? result.away : ""}" data-fixture="${fixture.id}" data-side="away">
          <span class="team-away">${escapeHtml(fixture.away)}</span>
        </div>
      `;
    }).join("");

    return `
      <article class="group-card">
        <div class="group-header">
          <strong>Grupo ${groupKey}</strong>
          <span>${groups[groupKey].map(escapeHtml).join(" / ")}</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Pais</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th><th>Necesita</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="fixtures">${fixtures}</div>
      </article>
    `;
  }).join("");

  groupEl.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", (event) => {
      const target = event.target;
      setResult(target.dataset.fixture, target.dataset.side, target.value, {
        fixtureId: target.dataset.fixture,
        side: target.dataset.side,
        cursor: target.selectionStart,
        scrollX: window.scrollX,
        scrollY: window.scrollY
      });
    });
  });

  groupEl.querySelectorAll(".need-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const teamName = button.dataset.team;
      openNeedModal(teamName, qualificationNeedByTeam[teamName] || "Escenario pendiente.");
    });
  });
}

function restoreInputFocus(focusState) {
  if (!focusState) return;

  const selector = `input[data-fixture="${focusState.fixtureId}"][data-side="${focusState.side}"]`;
  const input = groupEl.querySelector(selector);
  if (!input) return;

  input.focus({ preventScroll: true });
  if (Number.isInteger(focusState.cursor)) {
    try {
      input.setSelectionRange(focusState.cursor, focusState.cursor);
    } catch (error) {
      // Number inputs do not support text selection in every browser.
    }
  }
}

function restoreScrollPosition(focusState) {
  if (!focusState || !Number.isFinite(focusState.scrollY)) return;
  window.scrollTo(focusState.scrollX || 0, focusState.scrollY);
}

function renderThirds(thirds) {
  const tables = buildTables();
  const qualifyingThirds = thirds.slice(0, 8);
  const allGroupsComplete = Object.values(tables).every((table) => table.every((team) => team.played === 3));

  thirdsEl.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>#</th><th>Pais</th><th>Grupo</th><th>PJ</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th><th>Estado</th><th>Corte</th>
        </tr>
      </thead>
      <tbody>
        ${thirds.map((team, index) => {
          const status = getThirdRowStatus(team, index, tables, qualifyingThirds, allGroupsComplete);
          const cutLabel = getThirdCutLabel(index);
          const goalDifferenceClass = getGoalDifferenceClass(team.goalDifference);
          return `
          <tr class="row-${status}${index === 7 ? " row-cut-inside" : ""}${index === 8 ? " row-cut-outside" : ""}">
            <td>${index + 1}</td>
            <td>${escapeHtml(team.team)}</td>
            <td>${team.group}</td>
            <td>${team.played}</td>
            <td>${team.goalsFor}</td>
            <td>${team.goalsAgainst}</td>
            <td class="${goalDifferenceClass}">${team.goalDifference}</td>
            <td><strong>${team.points}</strong></td>
            <td>${getThirdStatusLabel(status)}</td>
            <td>${cutLabel}</td>
          </tr>
        `;
        }).join("")}
      </tbody>
    </table>
  `;
}

function renderStatusTeams(tables, qualifyingThirds, playedMatches) {
  legendButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.status === selectedStatus);
  });

  if (!selectedStatus) {
    statusTeamsEl.innerHTML = "";
    statusTeamsEl.classList.remove("is-visible");
    return;
  }

  const statusLabels = {
    sky: "Clasifica momentaneamente",
    green: "Clasificado 100%",
    yellow: "Eliminado momentaneamente",
    red: "Sin chances"
  };

  const teams = Object.keys(tables).flatMap((groupKey) => {
    return tables[groupKey]
      .filter((team) => getStatus(team, tables[groupKey], qualifyingThirds, tables, playedMatches, results) === selectedStatus)
      .map((team) => ({
        team: team.team,
        group: groupKey,
        points: team.points,
        played: team.played
      }));
  });

  statusTeamsEl.classList.add("is-visible");
  statusTeamsEl.innerHTML = `
    <div class="status-teams-header">
      <strong>${statusLabels[selectedStatus]}</strong>
      <span>${teams.length} equipo${teams.length === 1 ? "" : "s"}</span>
    </div>
    <div class="team-pills">
      ${teams.length ? teams.map((team) => `
        <span class="team-pill team-pill-${selectedStatus}">
          ${escapeHtml(team.team)}
          <small>Grupo ${team.group} · ${team.points} pts · ${team.played} PJ</small>
        </span>
      `).join("") : "<span class=\"empty-state\">Todavia no hay equipos en este estado.</span>"}
    </div>
  `;

  statusTeamsEl.querySelectorAll(".team-pill small").forEach((small) => {
    small.textContent = small.textContent.replaceAll("\u00c2\u00b7", "\u00b7");
  });
}

function getThirdRowStatus(team, index, tables, qualifyingThirds, allGroupsComplete) {
  if (index < 8 && (allGroupsComplete || isGuaranteedThirdQualifier(team, tables, qualifyingThirds))) return "green";
  if (index < 8) return "sky";
  if (allGroupsComplete || !canStillBeThirdQualifier(team, tables)) return "red";
  return "yellow";
}

function getThirdStatusLabel(status) {
  if (status === "green") return "Clasificado";
  if (status === "sky") return "Clasifica momentaneo";
  if (status === "red") return "Sin chances";
  return "Fuera momentaneo";
}

function getGoalDifferenceClass(goalDifference) {
  if (goalDifference > 0) return "goal-difference-positive";
  if (goalDifference < 0) return "goal-difference-negative";
  return "goal-difference-even";
}

function getThirdCutLabel(index) {
  if (index === 7) return "<span class=\"cut-badge cut-badge-in\">Ultimo que entra</span>";
  if (index === 8) return "<span class=\"cut-badge cut-badge-out\">Primer afuera</span>";
  return "";
}

function renderBracket(tables, thirdAssignments, groupsComplete, pendingGroupMatches) {
  const matchByNumber = getMatchByNumber();
  const champion = knockoutSelections[104];

  bracketLockEl.classList.toggle("is-open", groupsComplete);
  bracketLockEl.innerHTML = groupsComplete
    ? "Fase de grupos completa: ya se pueden elegir ganadores desde dieciseisavos."
    : `Cruces bloqueados: faltan ${pendingGroupMatches} partido${pendingGroupMatches === 1 ? "" : "s"} de fase de grupos para habilitar la seleccion de ganadores.`;

  bracketEl.innerHTML = `
    ${champion ? `<div class="champion-banner"><span>Campeon</span><strong>${escapeHtml(champion)}</strong></div>` : ""}
    ${knockoutRounds.map((round) => `
      <section class="knockout-round">
        <div class="knockout-round-header">
          <h3>${round.title}</h3>
          <span>${round.subtitle}</span>
        </div>
        <div class="bracket-grid">
          ${round.matches.map((match) => renderKnockoutMatch(match, tables, thirdAssignments, matchByNumber, groupsComplete)).join("")}
        </div>
      </section>
    `).join("")}
  `;

  bracketEl.querySelectorAll(".winner-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setKnockoutWinner(Number(button.dataset.match), button.dataset.team);
    });
  });

  bracketEl.querySelectorAll(".reset-winner-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setKnockoutWinner(Number(button.dataset.match), null);
    });
  });
}

function renderKnockoutMatch(match, tables, thirdAssignments, matchByNumber, groupsComplete) {
  const matchIndex = getRound32MatchIndex(match.match);
  const slotA = resolveKnockoutSlot(match.a, tables, thirdAssignments, matchIndex, matchByNumber);
  const slotB = resolveKnockoutSlot(match.b, tables, thirdAssignments, matchIndex, matchByNumber);
  const selectedWinner = knockoutSelections[match.match];
  const canPickWinner = groupsComplete && isSelectableSlot(slotA) && isSelectableSlot(slotB);

  return `
    <article class="match-card ${selectedWinner ? "has-winner" : ""} ${!canPickWinner ? "is-locked" : ""}">
      <div class="match-card-header">
        <div class="match-number">Partido ${match.match}</div>
        ${selectedWinner ? `<button class="reset-winner-btn" type="button" data-match="${match.match}">Restaurar cruce</button>` : ""}
      </div>
      <div class="versus">
        ${renderKnockoutSlot(match.match, slotA, selectedWinner, canPickWinner)}
        ${renderKnockoutSlot(match.match, slotB, selectedWinner, canPickWinner)}
      </div>
    </article>
  `;
}

function renderKnockoutSlot(matchNumber, slot, selectedWinner, canPickWinner) {
  const isWinner = selectedWinner === slot.label;
  const slotClass = slot.pending ? "slot-pending" : `slot-rank-${slot.rank}`;
  const winnerBadge = isWinner ? `<span class="winner-badge">Ganador</span>` : "";
  const escapedLabel = escapeHtml(slot.label);
  const escapedMeta = escapeHtml(slot.meta);
  const button = canPickWinner
    ? `<button class="winner-btn" type="button" data-match="${matchNumber}" data-team="${escapedLabel}">${isWinner ? "Elegido" : "Elegir ganador"}</button>`
    : `<span class="winner-placeholder">${slot.pending ? "Esperando cruce" : "Bloqueado"}</span>`;

  return `
    <div class="slot ${slotClass} ${isWinner ? "is-winner" : ""}">
      <div>
        ${escapedLabel}${winnerBadge}
        <small>${escapedMeta}</small>
      </div>
      ${button}
    </div>
  `;
}

if (isBrowser) {
  render();
}

if (typeof module !== "undefined") {
  module.exports = {
    buildTables,
    buildGroupTable,
    compareTeams,
    emptyStats,
    getFixtures,
    getHeadToHeadStats,
    getScenarioScoreOptions,
    getStatus,
    getTeamConductScore,
    getThirds,
    groups,
    isGuaranteedFirstPlace,
    rankPointTiedTeams,
    sortGroupTable
  };
}
