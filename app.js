/* =====================================================
   INTERACTIVE PERIODIC TABLE — app.js
   Pure Vanilla JavaScript ES6+
   ===================================================== */

/* ── Element Data ── */
const ELEMENTS = [
  { num:1,  sym:'H',  name:'Hydrogen',      mass:1.008,   cat:'nonmetal',              row:1,  col:1,  config:'1s¹',                                  state:'gas',     density:0.0899,  melt:-259.1, boil:-252.9, year:1766, by:'Henry Cavendish',    group:1,  period:1, uses:'Rocket fuel, ammonia production, petroleum refining, fuel cells', facts:'Most abundant element in universe. Makes up 75% of all baryonic mass. The sun is 70% hydrogen.' },
  { num:2,  sym:'He', name:'Helium',         mass:4.003,   cat:'noble-gas',             row:1,  col:18, config:'1s²',                                  state:'gas',     density:0.1786,  melt:null,   boil:-268.9, year:1868, by:'Pierre Janssen',     group:18, period:1, uses:'Balloons, MRI cooling, deep-sea diving, welding, cryogenics', facts:'Second most abundant element in universe. Lighter than air, non-flammable. First discovered in the Sun.' },
  { num:3,  sym:'Li', name:'Lithium',        mass:6.941,   cat:'alkali-metal',          row:2,  col:1,  config:'[He] 2s¹',                             state:'solid',   density:0.534,   melt:180.5,  boil:1342,   year:1817, by:'Johan Arfwedson',    group:1,  period:2, uses:'Batteries, ceramics, glass, lubricants, psychiatric medication', facts:'Lightest metal. Soft enough to cut with a knife. Powers most modern smartphones and electric vehicles.' },
  { num:4,  sym:'Be', name:'Beryllium',      mass:9.012,   cat:'alkaline-earth-metal',  row:2,  col:2,  config:'[He] 2s²',                             state:'solid',   density:1.848,   melt:1287,   boil:2469,   year:1797, by:'Louis-Nicolas Vauquelin', group:2, period:2, uses:'X-ray windows, aerospace alloys, nuclear reactors, springs', facts:'Transparent to X-rays. Toxic if inhaled. Used in James Webb Space Telescope mirrors.' },
  { num:5,  sym:'B',  name:'Boron',          mass:10.81,   cat:'metalloid',             row:2,  col:13, config:'[He] 2s² 2p¹',                         state:'solid',   density:2.34,    melt:2075,   boil:4000,   year:1808, by:'Gay-Lussac & Thénard',group:13, period:2, uses:'Fiberglass, semiconductors, borosilicate glass, detergents, antiseptics', facts:'Essential for plant growth. Borosilicate glass (Pyrex) is highly heat-resistant. Used in nuclear reactor control rods.' },
  { num:6,  sym:'C',  name:'Carbon',         mass:12.011,  cat:'nonmetal',              row:2,  col:14, config:'[He] 2s² 2p²',                         state:'solid',   density:2.267,   melt:3642,   boil:3642,   year:'Ancient', by:'Known to ancients', group:14, period:2, uses:'Steel, fuel, plastics, diamonds, graphite, medicine, electronics', facts:'Foundation of all life. Diamond and graphite are both pure carbon. Carbon-14 used for radiocarbon dating.' },
  { num:7,  sym:'N',  name:'Nitrogen',       mass:14.007,  cat:'nonmetal',              row:2,  col:15, config:'[He] 2s² 2p³',                         state:'gas',     density:1.251,   melt:-210,   boil:-195.8, year:1772, by:'Daniel Rutherford',  group:15, period:2, uses:'Fertilizers, explosives, food preservation, liquid nitrogen, electronics', facts:'Makes up 78% of Earth\'s atmosphere. Liquid nitrogen boils at -196°C. Essential component of DNA and proteins.' },
  { num:8,  sym:'O',  name:'Oxygen',         mass:15.999,  cat:'nonmetal',              row:2,  col:16, config:'[He] 2s² 2p⁴',                         state:'gas',     density:1.429,   melt:-218.8, boil:-183,   year:1774, by:'Carl Wilhelm Scheele', group:16, period:2, uses:'Breathing, steel production, water treatment, rocket fuel, medicine', facts:'Third most abundant element in universe. Makes up 21% of Earth\'s atmosphere. Essential for combustion.' },
  { num:9,  sym:'F',  name:'Fluorine',       mass:18.998,  cat:'halogen',               row:2,  col:17, config:'[He] 2s² 2p⁵',                         state:'gas',     density:1.696,   melt:-219.6, boil:-188.1, year:1886, by:'Henri Moissan',      group:17, period:2, uses:'Toothpaste, Teflon, pharmaceuticals, refrigerants, uranium processing', facts:'Most electronegative element. So reactive it ignites most materials. Teflon is one of the few materials it can\'t attack.' },
  { num:10, sym:'Ne', name:'Neon',           mass:20.180,  cat:'noble-gas',             row:2,  col:18, config:'[He] 2s² 2p⁶',                         state:'gas',     density:0.9,     melt:-248.6, boil:-246.1, year:1898, by:'William Ramsay',     group:18, period:2, uses:'Neon signs, lasers, refrigeration, high-voltage indicators', facts:'Neon signs don\'t actually use neon for all colors — only red-orange. Has no stable compounds. 5th most abundant in universe.' },
  { num:11, sym:'Na', name:'Sodium',         mass:22.990,  cat:'alkali-metal',          row:3,  col:1,  config:'[Ne] 3s¹',                             state:'solid',   density:0.968,   melt:97.8,   boil:882.9,  year:1807, by:'Humphry Davy',       group:1,  period:3, uses:'Table salt, soap, paper, glass, batteries, nuclear reactors', facts:'Explodes violently in water. Pure sodium metal glows a bright yellow in flame. Symbol Na from Latin "Natrium".' },
  { num:12, sym:'Mg', name:'Magnesium',      mass:24.305,  cat:'alkaline-earth-metal',  row:3,  col:2,  config:'[Ne] 3s²',                             state:'solid',   density:1.738,   melt:650,    boil:1090,   year:1755, by:'Joseph Black',       group:2,  period:3, uses:'Alloys, fireworks, sparklers, medicine, photography, cars', facts:'Burns with brilliant white light. Essential mineral for human health. Lightest structural metal.' },
  { num:13, sym:'Al', name:'Aluminium',      mass:26.982,  cat:'post-transition-metal', row:3,  col:13, config:'[Ne] 3s² 3p¹',                         state:'solid',   density:2.7,     melt:660.3,  boil:2519,   year:1825, by:'Hans Christian Oersted', group:13, period:3, uses:'Packaging, aircraft, construction, electronics, cookware, vehicles', facts:'Most abundant metal in Earth\'s crust. In 1800s was more precious than gold. 100% recyclable indefinitely.' },
  { num:14, sym:'Si', name:'Silicon',        mass:28.085,  cat:'metalloid',             row:3,  col:14, config:'[Ne] 3s² 3p²',                         state:'solid',   density:2.33,    melt:1414,   boil:3265,   year:1824, by:'Jöns Jacob Berzelius', group:14, period:3, uses:'Semiconductors, solar cells, glass, ceramics, computer chips', facts:'Backbone of modern electronics. Second most abundant element in Earth\'s crust. Silicon Valley named after it.' },
  { num:15, sym:'P',  name:'Phosphorus',     mass:30.974,  cat:'nonmetal',              row:3,  col:15, config:'[Ne] 3s² 3p³',                         state:'solid',   density:1.82,    melt:44.2,   boil:280.5,  year:1669, by:'Hennig Brand',       group:15, period:3, uses:'Fertilizers, matches, detergents, food additives, pesticides, pharmaceuticals', facts:'First element discovered by a named person. White phosphorus glows in the dark (phosphorescence). Essential for DNA.' },
  { num:16, sym:'S',  name:'Sulfur',         mass:32.06,   cat:'nonmetal',              row:3,  col:16, config:'[Ne] 3s² 3p⁴',                         state:'solid',   density:2.07,    melt:115.2,  boil:444.7,  year:'Ancient', by:'Known to ancients', group:16, period:3, uses:'Sulfuric acid, fertilizers, rubber vulcanization, gunpowder, fungicides', facts:'Burns with blue flame. Responsible for the smell of rotten eggs (H₂S). Used in making rubber tires.' },
  { num:17, sym:'Cl', name:'Chlorine',       mass:35.45,   cat:'halogen',               row:3,  col:17, config:'[Ne] 3s² 3p⁵',                         state:'gas',     density:3.214,   melt:-101,   boil:-34.1,  year:1774, by:'Carl Wilhelm Scheele', group:17, period:3, uses:'Water purification, disinfectants, PVC plastics, bleach, pharmaceuticals', facts:'Used as a chemical weapon in WWI. Now essential for safe drinking water. Key component in table salt (NaCl).' },
  { num:18, sym:'Ar', name:'Argon',          mass:39.948,  cat:'noble-gas',             row:3,  col:18, config:'[Ne] 3s² 3p⁶',                         state:'gas',     density:1.784,   melt:-189.3, boil:-185.8, year:1894, by:'Lord Rayleigh',      group:18, period:3, uses:'Welding shielding, light bulbs, double-glazing, semiconductor manufacturing', facts:'Makes up 1% of Earth\'s atmosphere. Most common noble gas on Earth. Used to preserve Magna Carta and Declaration of Independence.' },
  { num:19, sym:'K',  name:'Potassium',      mass:39.098,  cat:'alkali-metal',          row:4,  col:1,  config:'[Ar] 4s¹',                             state:'solid',   density:0.862,   melt:63.4,   boil:760,    year:1807, by:'Humphry Davy',       group:1,  period:4, uses:'Fertilizers, food, potassium chloride salt, medicine, gunpowder', facts:'Symbol K from Latin "Kalium". Essential for heart function. Third most abundant mineral in the body.' },
  { num:20, sym:'Ca', name:'Calcium',        mass:40.078,  cat:'alkaline-earth-metal',  row:4,  col:2,  config:'[Ar] 4s²',                             state:'solid',   density:1.55,    melt:842,    boil:1484,   year:1808, by:'Humphry Davy',       group:2,  period:4, uses:'Bones, teeth, concrete, steel, antacids, food additive, paper', facts:'Most abundant metal in the human body. Bones and teeth are primarily calcium phosphate. Pure calcium metal is silvery-white.' },
  { num:21, sym:'Sc', name:'Scandium',       mass:44.956,  cat:'transition-metal',      row:4,  col:3,  config:'[Ar] 3d¹ 4s²',                        state:'solid',   density:2.985,   melt:1541,   boil:2836,   year:1879, by:'Lars Fredrik Nilson', group:3, period:4, uses:'Aerospace alloys, sports equipment, stadium lights, lasers', facts:'Predicted by Mendeleev as "ekaboron". Very rare. Sc-Al alloy used in Russian fighter jets and baseball bats.' },
  { num:22, sym:'Ti', name:'Titanium',       mass:47.867,  cat:'transition-metal',      row:4,  col:4,  config:'[Ar] 3d² 4s²',                        state:'solid',   density:4.507,   melt:1668,   boil:3287,   year:1791, by:'William Gregor',     group:4,  period:4, uses:'Aerospace, medical implants, pigments, armor, bicycles, jewelry', facts:'As strong as steel but 45% lighter. Named after Titans of Greek mythology. Biocompatible — body doesn\'t reject it.' },
  { num:23, sym:'V',  name:'Vanadium',       mass:50.942,  cat:'transition-metal',      row:4,  col:5,  config:'[Ar] 3d³ 4s²',                        state:'solid',   density:6.0,     melt:1910,   boil:3407,   year:1801, by:'Andrés Manuel del Río', group:5, period:4, uses:'Steel alloys, catalysts, batteries, aerospace, tools', facts:'Named after Vanadis (Norse goddess of beauty). Vanadium steel is extra strong. Essential trace element in humans.' },
  { num:24, sym:'Cr', name:'Chromium',       mass:51.996,  cat:'transition-metal',      row:4,  col:6,  config:'[Ar] 3d⁵ 4s¹',                        state:'solid',   density:7.19,    melt:1907,   boil:2671,   year:1797, by:'Louis Vauquelin',    group:6,  period:4, uses:'Stainless steel, chrome plating, pigments, leather tanning, catalysts', facts:'Name from Greek "chroma" meaning color. Gives rubies red and emeralds green. Chrome plating is only 0.0001 mm thick.' },
  { num:25, sym:'Mn', name:'Manganese',      mass:54.938,  cat:'transition-metal',      row:4,  col:7,  config:'[Ar] 3d⁵ 4s²',                        state:'solid',   density:7.43,    melt:1246,   boil:2061,   year:1774, by:'Johan Gottlieb Gahn', group:7, period:4, uses:'Steel production, batteries, ceramics, fertilizers, pigments', facts:'Essential for photosynthesis. Manganese nodules cover much of the ocean floor. Used in dry cell batteries.' },
  { num:26, sym:'Fe', name:'Iron',           mass:55.845,  cat:'transition-metal',      row:4,  col:8,  config:'[Ar] 3d⁶ 4s²',                        state:'solid',   density:7.874,   melt:1538,   boil:2861,   year:'Ancient', by:'Known to ancients', group:8, period:4, uses:'Steel, construction, vehicles, tools, magnets, hemoglobin', facts:'Most used metal on Earth. Core of Earth is solid iron-nickel. Responsible for the red color of Mars.' },
  { num:27, sym:'Co', name:'Cobalt',         mass:58.933,  cat:'transition-metal',      row:4,  col:9,  config:'[Ar] 3d⁷ 4s²',                        state:'solid',   density:8.9,     melt:1495,   boil:2927,   year:1735, by:'Georg Brandt',       group:9,  period:4, uses:'Superalloys, lithium batteries, pigments, magnets, medical implants', facts:'Named from German "Kobold" (goblin). Cobalt-60 used in cancer radiation therapy. Gives glass vivid blue color.' },
  { num:28, sym:'Ni', name:'Nickel',         mass:58.693,  cat:'transition-metal',      row:4,  col:10, config:'[Ar] 3d⁸ 4s²',                        state:'solid',   density:8.908,   melt:1455,   boil:2913,   year:1751, by:'Axel Fredrik Cronstedt', group:10, period:4, uses:'Stainless steel, coins, electroplating, batteries, catalysts, magnets', facts:'US nickel coin is only 25% nickel. Fourth most common element on Earth by mass. Found in meteorites.' },
  { num:29, sym:'Cu', name:'Copper',         mass:63.546,  cat:'transition-metal',      row:4,  col:11, config:'[Ar] 3d¹⁰ 4s¹',                       state:'solid',   density:8.96,    melt:1085,   boil:2562,   year:'Ancient', by:'Known to ancients', group:11, period:4, uses:'Electrical wiring, plumbing, coins, alloys (brass, bronze), electronics', facts:'One of the first metals used by humans. Excellent electrical conductor. Has natural antimicrobial properties.' },
  { num:30, sym:'Zn', name:'Zinc',           mass:65.38,   cat:'transition-metal',      row:4,  col:12, config:'[Ar] 3d¹⁰ 4s²',                       state:'solid',   density:7.133,   melt:419.5,  boil:907,    year:1746, by:'Andreas Sigismund Marggraf', group:12, period:4, uses:'Galvanizing steel, alloys (brass), batteries, sunscreen, dietary supplements', facts:'Essential mineral for immune function. Galvanized steel is coated in zinc. Largest use is protecting iron from rust.' },
  { num:31, sym:'Ga', name:'Gallium',        mass:69.723,  cat:'post-transition-metal', row:4,  col:13, config:'[Ar] 3d¹⁰ 4s² 4p¹',                  state:'solid',   density:5.907,   melt:29.8,   boil:2204,   year:1875, by:'Paul Emile Lecoq de Boisbaudran', group:13, period:4, uses:'Semiconductors, LEDs, solar cells, thermometers, pharmaceuticals', facts:'Melts in your hand (melting point 29.8°C). Predicted by Mendeleev as "eka-aluminium". Used in blue LEDs.' },
  { num:32, sym:'Ge', name:'Germanium',      mass:72.63,   cat:'metalloid',             row:4,  col:14, config:'[Ar] 3d¹⁰ 4s² 4p²',                  state:'solid',   density:5.323,   melt:938.3,  boil:2833,   year:1886, by:'Clemens Winkler',    group:14, period:4, uses:'Semiconductors, fiber optics, infrared optics, solar cells, catalysts', facts:'Predicted by Mendeleev as "eka-silicon" with remarkable accuracy. First element to confirm Mendeleev\'s predictions.' },
  { num:33, sym:'As', name:'Arsenic',        mass:74.922,  cat:'metalloid',             row:4,  col:15, config:'[Ar] 3d¹⁰ 4s² 4p³',                  state:'solid',   density:5.727,   melt:817,    boil:614,    year:'Ancient', by:'Albertus Magnus', group:15, period:4, uses:'Semiconductors, wood preservatives, pesticides, glass, medicine (Salvarsan)', facts:'Known poison throughout history. Low levels naturally occur in water. Used in first modern chemotherapy drug (Salvarsan).' },
  { num:34, sym:'Se', name:'Selenium',       mass:78.971,  cat:'nonmetal',              row:4,  col:16, config:'[Ar] 3d¹⁰ 4s² 4p⁴',                  state:'solid',   density:4.81,    melt:221,    boil:685,    year:1817, by:'Jöns Jacob Berzelius', group:16, period:4, uses:'Photocopiers, solar cells, glass, dietary supplements, antifungal', facts:'Named after Selene (Greek moon goddess). Essential trace element. Smells like horseradish when burned. Used in xerography.' },
  { num:35, sym:'Br', name:'Bromine',        mass:79.904,  cat:'halogen',               row:4,  col:17, config:'[Ar] 3d¹⁰ 4s² 4p⁵',                  state:'liquid',  density:3.1028,  melt:-7.2,   boil:59,     year:1826, by:'Antoine Jérôme Balard', group:17, period:4, uses:'Flame retardants, photography, medicine, water purification, dyes', facts:'One of only two elements liquid at room temperature (the other is mercury). Named from Greek "bromos" (stench).' },
  { num:36, sym:'Kr', name:'Krypton',        mass:83.798,  cat:'noble-gas',             row:4,  col:18, config:'[Ar] 3d¹⁰ 4s² 4p⁶',                  state:'gas',     density:3.749,   melt:-157.4, boil:-153.2, year:1898, by:'William Ramsay',     group:18, period:4, uses:'Lighting, lasers, photography, nuclear reactors, insulating windows', facts:'Name means "hidden" in Greek. Krypton fluoride laser used in LASIK eye surgery. Not just Superman\'s weakness!' },
  { num:37, sym:'Rb', name:'Rubidium',       mass:85.468,  cat:'alkali-metal',          row:5,  col:1,  config:'[Kr] 5s¹',                             state:'solid',   density:1.532,   melt:39.3,   boil:688,    year:1861, by:'Robert Bunsen',      group:1,  period:5, uses:'Atomic clocks, photocells, research, glass, fireworks (purple)', facts:'Named after its red spectral lines. Melts slightly above body temperature. Used in GPS atomic clocks.' },
  { num:38, sym:'Sr', name:'Strontium',      mass:87.62,   cat:'alkaline-earth-metal',  row:5,  col:2,  config:'[Kr] 5s²',                             state:'solid',   density:2.64,    melt:777,    boil:1382,   year:1787, by:'Adair Crawford',     group:2,  period:5, uses:'Fireworks (crimson red), television tubes, medical imaging, magnets', facts:'Gives fireworks brilliant crimson red. Strontium-90 is a dangerous nuclear fission product. Named after Strontian, Scotland.' },
  { num:39, sym:'Y',  name:'Yttrium',        mass:88.906,  cat:'transition-metal',      row:5,  col:3,  config:'[Kr] 4d¹ 5s²',                        state:'solid',   density:4.469,   melt:1526,   boil:3336,   year:1794, by:'Johan Gadolin',      group:3,  period:5, uses:'Phosphors in TV/LED, laser crystals, cancer treatment, superconductors', facts:'Named after Ytterby, Sweden (which also gave names to Er, Tb, Yb). Used in red phosphors in color TV.' },
  { num:40, sym:'Zr', name:'Zirconium',      mass:91.224,  cat:'transition-metal',      row:5,  col:4,  config:'[Kr] 4d² 5s²',                        state:'solid',   density:6.506,   melt:1855,   boil:4409,   year:1789, by:'Martin Heinrich Klaproth', group:4, period:5, uses:'Nuclear reactors, ceramics, lab equipment, zircon gems, surgical instruments', facts:'Cubic zirconia is a synthetic diamond substitute. Nearly transparent to neutrons. Extremely corrosion-resistant.' },
  { num:41, sym:'Nb', name:'Niobium',        mass:92.906,  cat:'transition-metal',      row:5,  col:5,  config:'[Kr] 4d⁴ 5s¹',                        state:'solid',   density:8.57,    melt:2477,   boil:4744,   year:1801, by:'Charles Hatchett',   group:5,  period:5, uses:'Steel alloys, jet engines, MRI magnets, superconductors, jewelry', facts:'Formerly called Columbium. Used in superconducting magnets. Hypoallergenic — safe for body piercings.' },
  { num:42, sym:'Mo', name:'Molybdenum',     mass:95.96,   cat:'transition-metal',      row:5,  col:6,  config:'[Kr] 4d⁵ 5s¹',                        state:'solid',   density:10.22,   melt:2623,   boil:4639,   year:1781, by:'Peter Jacob Hjelm',  group:6,  period:5, uses:'Steel alloys, lubricants, catalysts, electrodes, aircraft parts', facts:'Name from Greek "molybdos" (lead-like). Essential trace element for nitrogen fixation in plants. Highest melting point of group 6.' },
  { num:43, sym:'Tc', name:'Technetium',     mass:98,      cat:'transition-metal',      row:5,  col:7,  config:'[Kr] 4d⁵ 5s²',                        state:'solid',   density:11.5,    melt:2157,   boil:4265,   year:1937, by:'Emilio Segrè',       group:7,  period:5, uses:'Medical imaging (bone scans), nuclear research, corrosion resistance', facts:'First artificially produced element. All isotopes radioactive. Name means "artificial" in Greek. Powers nuclear medicine.' },
  { num:44, sym:'Ru', name:'Ruthenium',      mass:101.07,  cat:'transition-metal',      row:5,  col:8,  config:'[Kr] 4d⁷ 5s¹',                        state:'solid',   density:12.37,   melt:2334,   boil:4150,   year:1844, by:'Karl Ernst Claus',   group:8,  period:5, uses:'Electrical contacts, hardening platinum alloys, catalysts, solar cells', facts:'Named after Ruthenia (Latin for Russia). Rarest of the platinum group metals. Used in chip resistors and hard disk platings.' },
  { num:45, sym:'Rh', name:'Rhodium',        mass:102.906, cat:'transition-metal',      row:5,  col:9,  config:'[Kr] 4d⁸ 5s¹',                        state:'solid',   density:12.41,   melt:1964,   boil:3695,   year:1803, by:'William Hyde Wollaston', group:9, period:5, uses:'Catalytic converters, jewelry plating, electrical contacts, laboratory equipment', facts:'Most expensive naturally occurring element. Named after rose-colored salts. One troy ounce worth more than gold.' },
  { num:46, sym:'Pd', name:'Palladium',      mass:106.42,  cat:'transition-metal',      row:5,  col:10, config:'[Kr] 4d¹⁰',                            state:'solid',   density:12.023,  melt:1555,   boil:2963,   year:1803, by:'William Hyde Wollaston', group:10, period:5, uses:'Catalytic converters, jewelry, electronics, hydrogen purification, dentistry', facts:'Named after asteroid Pallas. Can absorb 900 times its volume of hydrogen. Major use in catalytic converters.' },
  { num:47, sym:'Ag', name:'Silver',         mass:107.868, cat:'transition-metal',      row:5,  col:11, config:'[Kr] 4d¹⁰ 5s¹',                       state:'solid',   density:10.49,   melt:961.8,  boil:2162,   year:'Ancient', by:'Known to ancients', group:11, period:5, uses:'Jewelry, coins, mirrors, photography, electronics, antibacterial', facts:'Best electrical conductor of all metals. Silver iodide used in cloud seeding. Has natural antibacterial properties.' },
  { num:48, sym:'Cd', name:'Cadmium',        mass:112.411, cat:'transition-metal',      row:5,  col:12, config:'[Kr] 4d¹⁰ 5s²',                       state:'solid',   density:8.65,    melt:321.1,  boil:767,    year:1817, by:'Friedrich Strohmeyer', group:12, period:5, uses:'Batteries (Ni-Cd), pigments (yellow/orange), electroplating, nuclear reactors', facts:'Highly toxic — cadmium poisoning causes "itai-itai disease". Used in yellow/orange paints. Effective neutron absorber.' },
  { num:49, sym:'In', name:'Indium',         mass:114.818, cat:'post-transition-metal', row:5,  col:13, config:'[Kr] 4d¹⁰ 5s² 5p¹',                  state:'solid',   density:7.31,    melt:156.6,  boil:2072,   year:1863, by:'Ferdinand Reich',    group:13, period:5, uses:'LCD touchscreens (ITO), alloys, semiconductors, photovoltaics', facts:'Makes a "tin cry" sound when bent. Named after its indigo spectral line. Most used in ITO for smartphone touchscreens.' },
  { num:50, sym:'Sn', name:'Tin',            mass:118.71,  cat:'post-transition-metal', row:5,  col:14, config:'[Kr] 4d¹⁰ 5s² 5p²',                  state:'solid',   density:7.287,   melt:231.9,  boil:2602,   year:'Ancient', by:'Known to ancients', group:14, period:5, uses:'Cans, solder, alloys (bronze, pewter), coatings, superconductors', facts:'"Tin cans" are actually steel coated in tin. Makes a "tin cry" sound when bent. Symbol Sn from Latin "Stannum".' },
  { num:51, sym:'Sb', name:'Antimony',       mass:121.76,  cat:'metalloid',             row:5,  col:15, config:'[Kr] 4d¹⁰ 5s² 5p³',                  state:'solid',   density:6.685,   melt:630.6,  boil:1587,   year:'Ancient', by:'Known to ancients', group:15, period:5, uses:'Flame retardants, semiconductors, alloys, batteries, cosmetics', facts:'Symbol Sb from Latin "stibium". Ancient Egyptians used antimony sulfide as eye makeup (kohl). Expands when it solidifies.' },
  { num:52, sym:'Te', name:'Tellurium',      mass:127.6,   cat:'metalloid',             row:5,  col:16, config:'[Kr] 4d¹⁰ 5s² 5p⁴',                  state:'solid',   density:6.24,    melt:449.5,  boil:988,    year:1783, by:'Franz-Joseph Müller', group:16, period:5, uses:'Solar cells, thermoelectrics, CDs/DVDs, rubber, alloys', facts:'Rarer than gold in Earth\'s crust. Ingesting small amounts causes terrible garlic breath for weeks. Used in CdTe solar panels.' },
  { num:53, sym:'I',  name:'Iodine',         mass:126.904, cat:'halogen',               row:5,  col:17, config:'[Kr] 4d¹⁰ 5s² 5p⁵',                  state:'solid',   density:4.93,    melt:113.7,  boil:184.3,  year:1811, by:'Bernard Courtois',   group:17, period:5, uses:'Antiseptic, thyroid medication, X-ray contrast, photography, water purification', facts:'Essential for thyroid hormones. Deficiency causes goiter. Radioactive I-131 used to treat thyroid cancer.' },
  { num:54, sym:'Xe', name:'Xenon',          mass:131.293, cat:'noble-gas',             row:5,  col:18, config:'[Kr] 4d¹⁰ 5s² 5p⁶',                  state:'gas',     density:5.894,   melt:-111.8, boil:-108.1, year:1898, by:'William Ramsay',     group:18, period:5, uses:'Flash lamps, ion propulsion, anesthesia, nuclear reactors, imaging', facts:'Name means "stranger" in Greek. First noble gas compound made (XePtF₆). Used in Hall-effect ion thrusters for spacecraft.' },
  { num:55, sym:'Cs', name:'Caesium',        mass:132.905, cat:'alkali-metal',          row:6,  col:1,  config:'[Xe] 6s¹',                             state:'solid',   density:1.873,   melt:28.4,   boil:671,    year:1860, by:'Robert Bunsen',      group:1,  period:6, uses:'Atomic clocks, photoelectric cells, drilling fluids, cancer treatment', facts:'Most electropositive element. Caesium atomic clocks define the second. Will explode violently in water.' },
  { num:56, sym:'Ba', name:'Barium',         mass:137.327, cat:'alkaline-earth-metal',  row:6,  col:2,  config:'[Xe] 6s²',                             state:'solid',   density:3.594,   melt:727,    boil:1897,   year:1808, by:'Humphry Davy',       group:2,  period:6, uses:'X-ray contrast, fireworks (green), drilling fluids, glass, pigments', facts:'Barium "milkshakes" used for X-ray imaging of digestive tract. Gives fireworks apple-green color. Never found free in nature.' },
  { num:57, sym:'La', name:'Lanthanum',      mass:138.905, cat:'lanthanide',            row:9,  col:3,  config:'[Xe] 5d¹ 6s²',                        state:'solid',   density:6.162,   melt:920,    boil:3464,   year:1839, by:'Carl Gustav Mosander', group:3, period:6, uses:'Camera lenses, batteries (NiMH), catalysts, carbon arc lights, hydrogen storage', facts:'Name from Greek "lanthanein" (to lie hidden). Used in hybrid car batteries. Makes high-quality optical glass.' },
  { num:58, sym:'Ce', name:'Cerium',         mass:140.116, cat:'lanthanide',            row:9,  col:4,  config:'[Xe] 4f¹ 5d¹ 6s²',                   state:'solid',   density:6.77,    melt:799,    boil:3443,   year:1803, by:'Wilhelm Hisinger',   group:null, period:6, uses:'Catalytic converters, glass polishing, lighter flints, self-cleaning ovens', facts:'Most abundant rare earth element. Named after asteroid Ceres. Used in self-cleaning oven coatings.' },
  { num:59, sym:'Pr', name:'Praseodymium',   mass:140.908, cat:'lanthanide',            row:9,  col:5,  config:'[Xe] 4f³ 6s²',                        state:'solid',   density:6.77,    melt:931,    boil:3520,   year:1885, by:'Carl Auer von Welsbach', group:null, period:6, uses:'Magnets, lasers, goggles (for glassblowers), aircraft engines, batteries', facts:'Name means "green twin" in Greek. With Nd, makes powerful permanent magnets. Gives goggles their yellow-green color.' },
  { num:60, sym:'Nd', name:'Neodymium',      mass:144.242, cat:'lanthanide',            row:9,  col:6,  config:'[Xe] 4f⁴ 6s²',                        state:'solid',   density:7.01,    melt:1021,   boil:3074,   year:1885, by:'Carl Auer von Welsbach', group:null, period:6, uses:'Powerful magnets, lasers, glass coloring, microphones, wind turbines, headphones', facts:'Nd-Fe-B magnets are strongest permanent magnets known. Can lift 1000x their own weight. Used in every electric motor.' },
  { num:61, sym:'Pm', name:'Promethium',     mass:145,     cat:'lanthanide',            row:9,  col:7,  config:'[Xe] 4f⁵ 6s²',                        state:'solid',   density:7.26,    melt:1100,   boil:3000,   year:1945, by:'Marinsky et al.',    group:null, period:6, uses:'Nuclear batteries, luminous paint (watch dials), X-ray sources, research', facts:'Only naturally radioactive lanthanide. Named after Prometheus (stole fire from gods). Predicted by Bohr before discovery.' },
  { num:62, sym:'Sm', name:'Samarium',       mass:150.36,  cat:'lanthanide',            row:9,  col:8,  config:'[Xe] 4f⁶ 6s²',                        state:'solid',   density:7.52,    melt:1072,   boil:1794,   year:1879, by:'Paul Emile Lecoq de Boisbaudran', group:null, period:6, uses:'Permanent magnets, cancer treatment, neutron absorbers, lasers', facts:'Sm-Co magnets remain magnetic at very high temperatures. Used in SmCo magnets for jet engines. Radioactive Sm-153 treats bone cancer.' },
  { num:63, sym:'Eu', name:'Europium',       mass:151.964, cat:'lanthanide',            row:9,  col:9,  config:'[Xe] 4f⁷ 6s²',                        state:'solid',   density:5.244,   melt:822,    boil:1597,   year:1901, by:'Eugène-Anatole Demarçay', group:null, period:6, uses:'Euro banknote security, red phosphors in TVs, lasers, nuclear control rods', facts:'Named after Europe. EU is printed on Euro banknotes using Eu-containing ink that glows under UV. Softest rare earth.' },
  { num:64, sym:'Gd', name:'Gadolinium',     mass:157.25,  cat:'lanthanide',            row:9,  col:10, config:'[Xe] 4f⁷ 5d¹ 6s²',                   state:'solid',   density:7.9,     melt:1313,   boil:3273,   year:1880, by:'Jean Charles de Marignac', group:null, period:6, uses:'MRI contrast agents, nuclear reactors, data storage, microwave components', facts:'Gadolinium contrast agents make MRI images clearer. Has unusual magnetic properties. Strongest magnetic element at low temperature.' },
  { num:65, sym:'Tb', name:'Terbium',        mass:158.925, cat:'lanthanide',            row:9,  col:11, config:'[Xe] 4f⁹ 6s²',                        state:'solid',   density:8.23,    melt:1356,   boil:3230,   year:1843, by:'Carl Gustaf Mosander', group:null, period:6, uses:'Green phosphors (smartphones), magnets, sonar, fuel cells, lasers', facts:'Named after Ytterby, Sweden. Used in green phosphors for flatscreen displays. Has highest magnetostriction of any element.' },
  { num:66, sym:'Dy', name:'Dysprosium',     mass:162.5,   cat:'lanthanide',            row:9,  col:12, config:'[Xe] 4f¹⁰ 6s²',                       state:'solid',   density:8.551,   melt:1412,   boil:2567,   year:1886, by:'Paul Emile Lecoq de Boisbaudran', group:null, period:6, uses:'Wind turbine magnets, electric car motors, laser materials, nuclear reactors', facts:'Name means "hard to get" in Greek. Critical for EV motors and wind turbines. Has highest magnetic strength of any element.' },
  { num:67, sym:'Ho', name:'Holmium',        mass:164.93,  cat:'lanthanide',            row:9,  col:13, config:'[Xe] 4f¹¹ 6s²',                       state:'solid',   density:8.795,   melt:1474,   boil:2700,   year:1878, by:'Marc Delafontaine',  group:null, period:6, uses:'Lasers, nuclear reactors, magnets, MRI machines, colorant in glass', facts:'Named after Holmia (Latin for Stockholm). Has the highest magnetic moment of any element. Used in medical lasers.' },
  { num:68, sym:'Er', name:'Erbium',         mass:167.259, cat:'lanthanide',            row:9,  col:14, config:'[Xe] 4f¹² 6s²',                       state:'solid',   density:9.066,   melt:1529,   boil:2868,   year:1843, by:'Carl Gustaf Mosander', group:null, period:6, uses:'Fiber optic amplifiers, lasers (dermatology, dentistry), glass coloring', facts:'Named after Ytterby, Sweden. Erbium-doped fiber amplifiers made long-distance internet possible. Gives glass pink color.' },
  { num:69, sym:'Tm', name:'Thulium',        mass:168.934, cat:'lanthanide',            row:9,  col:15, config:'[Xe] 4f¹³ 6s²',                       state:'solid',   density:9.321,   melt:1545,   boil:1950,   year:1879, by:'Per Teodor Cleve',   group:null, period:6, uses:'Portable X-ray sources, lasers, magnetic materials, research', facts:'Named after Thule (mythical northernmost land). Rarest stable rare earth. Used in portable X-ray units for remote areas.' },
  { num:70, sym:'Yb', name:'Ytterbium',      mass:173.045, cat:'lanthanide',            row:9,  col:16, config:'[Xe] 4f¹⁴ 6s²',                       state:'solid',   density:6.965,   melt:824,    boil:1196,   year:1878, by:'Jean Charles de Marignac', group:null, period:6, uses:'Atomic clocks, lasers, alloys, stress gauges, cancer treatment', facts:'Named after Ytterby, Sweden. Used in most precise atomic clocks ever made. Yb-169 used for portable cancer radiotherapy.' },
  { num:71, sym:'Lu', name:'Lutetium',       mass:174.967, cat:'lanthanide',            row:9,  col:17, config:'[Xe] 4f¹⁴ 5d¹ 6s²',                  state:'solid',   density:9.841,   melt:1663,   boil:3402,   year:1907, by:'Georges Urbain',     group:3,  period:6, uses:'PET scan detectors, petroleum refining catalysts, LED lights', facts:'Last and densest lanthanide. Named after Lutetia (Latin for Paris). Most expensive rare earth element per gram.' },
  { num:72, sym:'Hf', name:'Hafnium',        mass:178.49,  cat:'transition-metal',      row:6,  col:4,  config:'[Xe] 4f¹⁴ 5d² 6s²',                  state:'solid',   density:13.31,   melt:2233,   boil:4603,   year:1923, by:'Dirk Coster',        group:4,  period:6, uses:'Nuclear reactor control rods, microchips (Intel uses HfO₂), alloys, plasma cutting', facts:'Predicted by Bohr before discovery. Chemically very similar to Zirconium. Intel uses HfO₂ in transistors since 2007.' },
  { num:73, sym:'Ta', name:'Tantalum',       mass:180.948, cat:'transition-metal',      row:6,  col:5,  config:'[Xe] 4f¹⁴ 5d³ 6s²',                  state:'solid',   density:16.69,   melt:3017,   boil:5458,   year:1802, by:'Anders Gustaf Ekeberg', group:5, period:6, uses:'Capacitors (electronics), surgical implants, aircraft engines, chemical equipment', facts:'Biocompatible — body accepts it. 60% of capacitors use tantalum. Named after Tantalus (Greek mythology). Extremely corrosion-resistant.' },
  { num:74, sym:'W',  name:'Tungsten',       mass:183.84,  cat:'transition-metal',      row:6,  col:6,  config:'[Xe] 4f¹⁴ 5d⁴ 6s²',                  state:'solid',   density:19.25,   melt:3422,   boil:5555,   year:1783, by:'José & Fausto Elhuyar', group:6, period:6, uses:'Light bulb filaments, drill bits, armor-piercing bullets, X-ray targets, alloys', facts:'Highest melting point of any element (3422°C). Symbol W from "Wolfram". Heaviest element used by living organisms.' },
  { num:75, sym:'Re', name:'Rhenium',        mass:186.207, cat:'transition-metal',      row:6,  col:7,  config:'[Xe] 4f¹⁴ 5d⁵ 6s²',                  state:'solid',   density:21.02,   melt:3186,   boil:5596,   year:1925, by:'Walter Noddack',     group:7,  period:6, uses:'Jet engine turbine blades, catalysts, thermocouples, electrical contacts', facts:'Last stable element discovered. Second highest melting point. Rarest stable element in Earth\'s crust. Every 747 engine uses ~6 kg.' },
  { num:76, sym:'Os', name:'Osmium',         mass:190.23,  cat:'transition-metal',      row:6,  col:8,  config:'[Xe] 4f¹⁴ 5d⁶ 6s²',                  state:'solid',   density:22.59,   melt:3033,   boil:5012,   year:1803, by:'Smithson Tennant',   group:8,  period:6, uses:'Pen tips, electrical contacts, hard alloys, compass pivots, fingerprint detection', facts:'Densest naturally occurring element (22.59 g/cm³). Name from Greek "osme" (smell). OsO₄ smells terrible and is highly toxic.' },
  { num:77, sym:'Ir', name:'Iridium',        mass:192.217, cat:'transition-metal',      row:6,  col:9,  config:'[Xe] 4f¹⁴ 5d⁷ 6s²',                  state:'solid',   density:22.56,   melt:2446,   boil:4428,   year:1803, by:'Smithson Tennant',   group:9,  period:6, uses:'Crucibles, electrical contacts, spark plugs, compass bearings, cancer treatment', facts:'Most corrosion-resistant metal known. High concentration in K-Pg boundary layer hints at asteroid impact killing dinosaurs.' },
  { num:78, sym:'Pt', name:'Platinum',       mass:195.084, cat:'transition-metal',      row:6,  col:10, config:'[Xe] 4f¹⁴ 5d⁹ 6s¹',                  state:'solid',   density:21.45,   melt:1768.4, boil:3825,   year:1735, by:'Antonio de Ulloa',   group:10, period:6, uses:'Catalytic converters, jewelry, dentistry, laboratory equipment, cancer drugs (cisplatin)', facts:'Symbol Pt from Spanish "platina" (little silver). Platinum group found in meteorites. Cisplatin is major cancer chemotherapy drug.' },
  { num:79, sym:'Au', name:'Gold',           mass:196.967, cat:'transition-metal',      row:6,  col:11, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s¹',                 state:'solid',   density:19.3,    melt:1064.2, boil:2856,   year:'Ancient', by:'Known to ancients', group:11, period:6, uses:'Jewelry, electronics, dentistry, space satellites, medicine, currency', facts:'Most malleable metal — 1 oz can be beaten to 300 sq ft. Never corrodes. All gold on Earth came from neutron star collisions.' },
  { num:80, sym:'Hg', name:'Mercury',        mass:200.592, cat:'transition-metal',      row:6,  col:12, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s²',                 state:'liquid',  density:13.534,  melt:-38.8,  boil:356.7,  year:'Ancient', by:'Known to ancients', group:12, period:6, uses:'Thermometers, barometers, fluorescent lights, dental amalgam, switches', facts:'Only metal that is liquid at room temperature. Named after planet Mercury. Forms toxic methylmercury in water bodies.' },
  { num:81, sym:'Tl', name:'Thallium',       mass:204.38,  cat:'post-transition-metal', row:6,  col:13, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',             state:'solid',   density:11.85,   melt:304,    boil:1473,   year:1861, by:'William Crookes',    group:13, period:6, uses:'Medical imaging, electronics, infrared optics, research', facts:'Extremely toxic — "inheritance powder" used as a poison. Name from Greek "thallos" (green shoot) for its green spectral line.' },
  { num:82, sym:'Pb', name:'Lead',           mass:207.2,   cat:'post-transition-metal', row:6,  col:14, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',             state:'solid',   density:11.34,   melt:327.5,  boil:1749,   year:'Ancient', by:'Known to ancients', group:14, period:6, uses:'Batteries, radiation shielding, bullets, cable sheathing, weights', facts:'Ancient Romans used lead pipes (plumbum → plumbing). Dense — used to shield from radiation. Symbol Pb from Latin "plumbum".' },
  { num:83, sym:'Bi', name:'Bismuth',        mass:208.98,  cat:'post-transition-metal', row:6,  col:15, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',             state:'solid',   density:9.747,   melt:271.4,  boil:1564,   year:1753, by:'Claude François Geoffroy', group:15, period:6, uses:'Cosmetics, pharmaceuticals (Pepto-Bismol), alloys, fire sprinklers, ammunition', facts:'Heaviest stable element. Forms colorful rainbow oxide crystals. Pepto-Bismol\'s active ingredient. Slightly radioactive with 20 quintillion-year half-life.' },
  { num:84, sym:'Po', name:'Polonium',       mass:209,     cat:'post-transition-metal', row:6,  col:16, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',             state:'solid',   density:9.32,    melt:254,    boil:962,    year:1898, by:'Marie Curie',        group:16, period:6, uses:'Anti-static devices, nuclear warheads, scientific research', facts:'Named after Poland by Marie Curie (Polish-born). Used in nuclear warheads. Po-210 used to assassinate Alexander Litvinenko.' },
  { num:85, sym:'At', name:'Astatine',       mass:210,     cat:'halogen',               row:6,  col:17, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',             state:'solid',   density:null,    melt:302,    boil:337,    year:1940, by:'Dale R. Corson',     group:17, period:6, uses:'Cancer therapy (radioimmunotherapy), research', facts:'Rarest naturally occurring element on Earth — less than 30g exists at any time. Most unstable "stable" halogen. Name means "unstable".' },
  { num:86, sym:'Rn', name:'Radon',          mass:222,     cat:'noble-gas',             row:6,  col:18, config:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',             state:'gas',     density:9.73,    melt:-71,    boil:-62,    year:1900, by:'Friedrich Ernst Dorn', group:18, period:6, uses:'Cancer treatment, earthquake prediction, research', facts:'Radioactive gas that seeps from ground into buildings. Second leading cause of lung cancer after smoking. Heaviest noble gas.' },
  { num:87, sym:'Fr', name:'Francium',       mass:223,     cat:'alkali-metal',          row:7,  col:1,  config:'[Rn] 7s¹',                             state:'solid',   density:null,    melt:27,     boil:677,    year:1939, by:'Marguerite Perey',   group:1,  period:7, uses:'Scientific research only', facts:'Most unstable naturally occurring element. Named after France. Discovered by a woman (Perey). Only a few atoms exist at a time.' },
  { num:88, sym:'Ra', name:'Radium',         mass:226,     cat:'alkaline-earth-metal',  row:7,  col:2,  config:'[Rn] 7s²',                             state:'solid',   density:5.5,     melt:700,    boil:1737,   year:1898, by:'Marie Curie',        group:2,  period:7, uses:'Cancer treatment (historical), luminous paint (historical), research', facts:'Discovered by Marie Curie. Once used in luminous watch dials — dial painters died from radiation. Glows faint blue in dark.' },
  { num:89, sym:'Ac', name:'Actinium',       mass:227,     cat:'actinide',              row:10, col:3,  config:'[Rn] 6d¹ 7s²',                        state:'solid',   density:10.07,   melt:1051,   boil:3198,   year:1899, by:'André-Louis Debierne', group:3, period:7, uses:'Cancer therapy, neutron sources, research', facts:'Named after Greek "aktinos" (ray). Glows blue in dark due to radiation ionizing air. First actinide element discovered.' },
  { num:90, sym:'Th', name:'Thorium',        mass:232.038, cat:'actinide',              row:10, col:4,  config:'[Rn] 6d² 7s²',                        state:'solid',   density:11.72,   melt:1750,   boil:4820,   year:1829, by:'Jöns Jacob Berzelius', group:null, period:7, uses:'Nuclear reactors, strong alloys, gas mantles, refractory materials', facts:'Named after Thor (Norse god). Could replace uranium as safer nuclear fuel. Thorium reactor waste is less dangerous.' },
  { num:91, sym:'Pa', name:'Protactinium',   mass:231.036, cat:'actinide',              row:10, col:5,  config:'[Rn] 5f² 6d¹ 7s²',                   state:'solid',   density:15.37,   melt:1568,   boil:null,   year:1913, by:'Kasimir Fajans',     group:null, period:7, uses:'Scientific research only (too rare and radioactive)', facts:'Name means "parent of actinium". One of rarest elements on Earth. Extremely radioactive and toxic. Very little practical use.' },
  { num:92, sym:'U',  name:'Uranium',        mass:238.029, cat:'actinide',              row:10, col:6,  config:'[Rn] 5f³ 6d¹ 7s²',                   state:'solid',   density:19.05,   melt:1135,   boil:4131,   year:1789, by:'Martin Heinrich Klaproth', group:null, period:7, uses:'Nuclear fuel, weapons, armor-piercing shells, glassware (uranium glass)', facts:'Powers nuclear reactors providing ~10% of world electricity. Uranium glass glows green under UV. Half-life of 4.5 billion years.' },
  { num:93, sym:'Np', name:'Neptunium',      mass:237,     cat:'actinide',              row:10, col:7,  config:'[Rn] 5f⁴ 6d¹ 7s²',                   state:'solid',   density:20.25,   melt:644,    boil:4000,   year:1940, by:'Edwin McMillan',     group:null, period:7, uses:'Nuclear reactors, neutron detectors, research', facts:'First transuranium element discovered. Named after Neptune (next planet after Uranus). Produced in nuclear reactors.' },
  { num:94, sym:'Pu', name:'Plutonium',      mass:244,     cat:'actinide',              row:10, col:8,  config:'[Rn] 5f⁶ 7s²',                        state:'solid',   density:19.86,   melt:640,    boil:3228,   year:1940, by:'Glenn Seaborg',      group:null, period:7, uses:'Nuclear weapons, nuclear reactors, spacecraft power (RTG)', facts:'Most complex element — 6 allotropic forms. Named after Pluto. Powers Voyager and New Horizons spacecraft via RTG.' },
  { num:95, sym:'Am', name:'Americium',      mass:243,     cat:'actinide',              row:10, col:9,  config:'[Rn] 5f⁷ 7s²',                        state:'solid',   density:13.67,   melt:1176,   boil:2607,   year:1944, by:'Glenn Seaborg',      group:null, period:7, uses:'Smoke detectors (Am-241), neutron sources, cancer treatment', facts:'Found in every smoke detector. Named after Americas. Seaborg announced discovery on a kids\' radio show. Produced in nuclear reactors.' },
  { num:96, sym:'Cm', name:'Curium',         mass:247,     cat:'actinide',              row:10, col:10, config:'[Rn] 5f⁷ 6d¹ 7s²',                   state:'solid',   density:13.51,   melt:1345,   boil:3110,   year:1944, by:'Glenn Seaborg',      group:null, period:7, uses:'Power sources (RTG), research', facts:'Named after Marie and Pierre Curie. Used in Alpha Particle X-ray Spectrometers on Mars rovers. Glows red from intense radioactivity.' },
  { num:97, sym:'Bk', name:'Berkelium',      mass:247,     cat:'actinide',              row:10, col:11, config:'[Rn] 5f⁹ 7s²',                        state:'solid',   density:14.79,   melt:986,    boil:null,   year:1949, by:'Glenn Seaborg',      group:null, period:7, uses:'Scientific research only, californium production', facts:'Named after Berkeley, California. Only produced in microgram amounts. Essential precursor for synthesizing Californium.' },
  { num:98, sym:'Cf', name:'Californium',    mass:251,     cat:'actinide',              row:10, col:12, config:'[Rn] 5f¹⁰ 7s²',                       state:'solid',   density:15.1,    melt:900,    boil:null,   year:1950, by:'Glenn Seaborg',      group:null, period:7, uses:'Neutron sources, cancer treatment, gold/silver prospecting, nuclear startup', facts:'Named after California. Costs ~$27 million per gram. Used to start up nuclear reactors. Only ~8g produced per year.' },
  { num:99, sym:'Es', name:'Einsteinium',    mass:252,     cat:'actinide',              row:10, col:13, config:'[Rn] 5f¹¹ 7s²',                       state:'solid',   density:8.84,    melt:860,    boil:null,   year:1952, by:'Ghiorso et al.',     group:null, period:7, uses:'Scientific research only', facts:'Named after Albert Einstein. First produced in first hydrogen bomb test (Ivy Mike). Only nanogram quantities ever produced.' },
  { num:100,sym:'Fm', name:'Fermium',        mass:257,     cat:'actinide',              row:10, col:14, config:'[Rn] 5f¹² 7s²',                       state:'solid',   density:null,    melt:1527,   boil:null,   year:1952, by:'Ghiorso et al.',     group:null, period:7, uses:'Scientific research only', facts:'Named after Enrico Fermi. Also discovered in Ivy Mike hydrogen bomb test. No practical uses — too rare and short-lived.' },
  { num:101,sym:'Md', name:'Mendelevium',    mass:258,     cat:'actinide',              row:10, col:15, config:'[Rn] 5f¹³ 7s²',                       state:'solid',   density:null,    melt:827,    boil:null,   year:1955, by:'Ghiorso et al.',     group:null, period:7, uses:'Scientific research only', facts:'Named after Dmitri Mendeleev, creator of periodic table. First element produced one atom at a time by design.' },
  { num:102,sym:'No', name:'Nobelium',       mass:259,     cat:'actinide',              row:10, col:16, config:'[Rn] 5f¹⁴ 7s²',                       state:'solid',   density:null,    melt:827,    boil:null,   year:1958, by:'Flerov et al.',      group:null, period:7, uses:'Scientific research only', facts:'Named after Alfred Nobel. There was significant controversy over its discovery between Soviet and American teams.' },
  { num:103,sym:'Lr', name:'Lawrencium',     mass:266,     cat:'actinide',              row:10, col:17, config:'[Rn] 5f¹⁴ 7s² 7p¹',                  state:'solid',   density:null,    melt:1627,   boil:null,   year:1961, by:'Ghiorso et al.',     group:3,  period:7, uses:'Scientific research only', facts:'Named after Ernest Lawrence, inventor of cyclotron. Last actinide. Half-life of most stable isotope is only 11 hours.' },
  { num:104,sym:'Rf', name:'Rutherfordium',  mass:267,     cat:'transition-metal',      row:7,  col:4,  config:'[Rn] 5f¹⁴ 6d² 7s²',                  state:'solid',   density:23.2,    melt:2400,   boil:5800,   year:1969, by:'Flerov / Ghiorso',  group:4,  period:7, uses:'Scientific research only', facts:'Named after Ernest Rutherford. First transactinide element. Synthesized only in atom-by-atom quantities.' },
  { num:105,sym:'Db', name:'Dubnium',        mass:268,     cat:'transition-metal',      row:7,  col:5,  config:'[Rn] 5f¹⁴ 6d³ 7s²',                  state:'solid',   density:29.3,    melt:null,   boil:null,   year:1970, by:'Flerov / Ghiorso',  group:5,  period:7, uses:'Scientific research only', facts:'Named after Dubna, Russia (JINR). Long debate between Soviet and American teams on naming (once called Hahnium/Nielsbohrium).' },
  { num:106,sym:'Sg', name:'Seaborgium',     mass:269,     cat:'transition-metal',      row:7,  col:6,  config:'[Rn] 5f¹⁴ 6d⁴ 7s²',                  state:'solid',   density:35,      melt:null,   boil:null,   year:1974, by:'Ghiorso et al.',     group:6,  period:7, uses:'Scientific research only', facts:'Named after Glenn Seaborg — first element named after a living person. IUPAC initially refused but later accepted.' },
  { num:107,sym:'Bh', name:'Bohrium',        mass:270,     cat:'transition-metal',      row:7,  col:7,  config:'[Rn] 5f¹⁴ 6d⁵ 7s²',                  state:'solid',   density:37.1,    melt:null,   boil:null,   year:1981, by:'Armbruster et al.',  group:7,  period:7, uses:'Scientific research only', facts:'Named after Niels Bohr. Synthesized by bombarding bismuth with chromium ions. Half-life of most stable isotope: ~61 seconds.' },
  { num:108,sym:'Hs', name:'Hassium',        mass:277,     cat:'transition-metal',      row:7,  col:8,  config:'[Rn] 5f¹⁴ 6d⁶ 7s²',                  state:'solid',   density:40.7,    melt:null,   boil:null,   year:1984, by:'Armbruster et al.',  group:8,  period:7, uses:'Scientific research only', facts:'Named after Hesse, Germany (Latin: Hassia). Predicted to have noble-metal-like properties. Only atoms synthesized one at a time.' },
  { num:109,sym:'Mt', name:'Meitnerium',     mass:278,     cat:'transition-metal',      row:7,  col:9,  config:'[Rn] 5f¹⁴ 6d⁷ 7s²',                  state:'solid',   density:37.4,    melt:null,   boil:null,   year:1982, by:'Armbruster et al.',  group:9,  period:7, uses:'Scientific research only', facts:'Named after Lise Meitner, physicist who explained nuclear fission. She was controversially not included in Nobel Prize for fission discovery.' },
  { num:110,sym:'Ds', name:'Darmstadtium',   mass:281,     cat:'transition-metal',      row:7,  col:10, config:'[Rn] 5f¹⁴ 6d⁸ 7s²',                  state:'solid',   density:34.8,    melt:null,   boil:null,   year:1994, by:'Armbruster et al.',  group:10, period:7, uses:'Scientific research only', facts:'Named after Darmstadt, Germany. Predicted to have noble-metal-like chemistry similar to platinum group elements.' },
  { num:111,sym:'Rg', name:'Roentgenium',    mass:282,     cat:'transition-metal',      row:7,  col:11, config:'[Rn] 5f¹⁴ 6d⁹ 7s²',                  state:'solid',   density:28.7,    melt:null,   boil:null,   year:1994, by:'Armbruster et al.',  group:11, period:7, uses:'Scientific research only', facts:'Named after Wilhelm Röntgen, discoverer of X-rays. Only a few atoms ever produced. Most stable isotope has 26-second half-life.' },
  { num:112,sym:'Cn', name:'Copernicium',    mass:285,     cat:'transition-metal',      row:7,  col:12, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s²',                 state:'gas',     density:14,      melt:null,   boil:357,    year:1996, by:'Armbruster et al.',  group:12, period:7, uses:'Scientific research only', facts:'Named after Nicolaus Copernicus. May be a gas at room temperature — relativistic effects make it behave like a noble gas.' },
  { num:113,sym:'Nh', name:'Nihonium',       mass:286,     cat:'post-transition-metal', row:7,  col:13, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',             state:'solid',   density:16,      melt:700,    boil:1430,   year:2004, by:'RIKEN (Japan)',       group:13, period:7, uses:'Scientific research only', facts:'Named after Japan ("Nihon"). First element discovered in Asia. Confirmed in 2016 after 12 years of experiments.' },
  { num:114,sym:'Fl', name:'Flerovium',      mass:289,     cat:'post-transition-metal', row:7,  col:14, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',             state:'solid',   density:14,      melt:null,   boil:210,    year:1999, by:'Flerov et al.',      group:14, period:7, uses:'Scientific research only', facts:'Named after Flerov Laboratory in Dubna, Russia. Predicted to behave more like a noble gas than a metal due to relativistic effects.' },
  { num:115,sym:'Mc', name:'Moscovium',      mass:290,     cat:'post-transition-metal', row:7,  col:15, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',             state:'solid',   density:13.5,    melt:670,    boil:1400,   year:2003, by:'Flerov et al.',      group:15, period:7, uses:'Scientific research only', facts:'Named after Moscow Oblast, Russia. Confirmed in 2016. Most stable isotope has 220 millisecond half-life.' },
  { num:116,sym:'Lv', name:'Livermorium',    mass:293,     cat:'post-transition-metal', row:7,  col:16, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',             state:'solid',   density:12.9,    melt:637,    boil:1085,   year:2000, by:'Flerov et al.',      group:16, period:7, uses:'Scientific research only', facts:'Named after Lawrence Livermore National Laboratory, California. Joint Russia-US discovery. Decays in milliseconds.' },
  { num:117,sym:'Ts', name:'Tennessine',     mass:294,     cat:'halogen',               row:7,  col:17, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',             state:'solid',   density:7.17,    melt:700,    boil:883,    year:2010, by:'Flerov et al.',      group:17, period:7, uses:'Scientific research only', facts:'Named after Tennessee (state hosting Oak Ridge, Vanderbilt, UT). Second-heaviest confirmed element. Half-life ~51 milliseconds.' },
  { num:118,sym:'Og', name:'Oganesson',      mass:294,     cat:'noble-gas',             row:7,  col:18, config:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',             state:'solid',   density:4.9,     melt:52,     boil:177,    year:2002, by:'Flerov et al.',      group:18, period:7, uses:'Scientific research only', facts:'Heaviest known element. Named after Yuri Oganessian (living person). Predicted to be a solid despite being a noble gas. Only 5 atoms ever made.' },
];

/* ── Category Metadata ── */
const CATEGORIES = {
  'alkali-metal':         { label:'Alkali Metals',         color:'var(--c-alkali)' },
  'alkaline-earth-metal': { label:'Alkaline Earth Metals', color:'var(--c-alkaline)' },
  'transition-metal':     { label:'Transition Metals',     color:'var(--c-transition)' },
  'post-transition-metal':{ label:'Post-Transition Metals',color:'var(--c-post-transition)' },
  'metalloid':            { label:'Metalloids',            color:'var(--c-metalloid)' },
  'nonmetal':             { label:'Nonmetals',             color:'var(--c-nonmetal)' },
  'halogen':              { label:'Halogens',              color:'var(--c-halogen)' },
  'noble-gas':            { label:'Noble Gases',           color:'var(--c-noble)' },
  'lanthanide':           { label:'Lanthanides',           color:'var(--c-lanthanide)' },
  'actinide':             { label:'Actinides',             color:'var(--c-actinide)' },
};

/* ── Educational Facts ── */
const EDU_FACTS = [
  '🔬 The periodic table was created by Dmitri Mendeleev in 1869. He left gaps for undiscovered elements — and was proven right!',
  '⚡ Electrons occupy orbitals defined by 4 quantum numbers: principal (n), angular (l), magnetic (m), and spin (s).',
  '🌌 Hydrogen and Helium together make up about 99% of all visible matter in the universe.',
  '🧪 Noble gases were considered completely inert until 1962 when XePtF₆ (xenon hexafluoroplatinate) was first synthesized.',
  '💡 The elements from Hassium (108) to Oganesson (118) have all been created after 1984 using particle accelerators.',
  '🔩 Osmium (Os) is the densest naturally occurring element at 22.59 g/cm³ — more than twice the density of lead.',
  '🌡️ Tungsten (W) has the highest melting point of any element at 3,422°C (6,192°F).',
  '🔋 Lithium-ion batteries, which power most modern electronics and EVs, rely on the element lithium (Li, #3).',
  '⚗️ Carbon (C) is the basis of all known life on Earth and forms more compounds than all other elements combined.',
  '🌍 Oxygen (O) is the most abundant element in Earth\'s crust by mass, making up about 46% of it.',
  '✨ Gold (Au) is so malleable that 1 gram can be beaten into a sheet 1 square meter in area.',
  '🧬 The human body is made primarily of Oxygen (65%), Carbon (18%), Hydrogen (10%), and Nitrogen (3%).',
  '🔴 Mercury (Hg) and Bromine (Br) are the only two elements that are liquid at standard room temperature.',
  '🔭 Helium was discovered in the Sun before it was found on Earth — its name comes from "Helios" (Greek for Sun).',
  '⚛️ The nucleus of an atom is incredibly dense — if an atom were the size of a football stadium, the nucleus would be the size of a marble.',
];

/* ── App State ── */
const state = {
  filter: 'all',
  search: '',
  favorites: JSON.parse(localStorage.getItem('pt-favorites') || '[]'),
  compareA: null,
  compareB: null,
  compareMode: false,
  currentModal: null,
  eduIndex: 0,
  theme: localStorage.getItem('pt-theme') || 'dark',
};

/* ── Helpers ── */
const $ = id => document.getElementById(id);
const q = sel => document.querySelector(sel);

function fmt(val, unit='') {
  if (val === null || val === undefined) return 'Unknown';
  return `${val}${unit}`;
}

function fmtYear(y) {
  if (!y || y === 'Ancient') return 'Ancient Times';
  return y;
}

function getCategoryColor(cat) {
  return CATEGORIES[cat]?.color || 'var(--text-muted)';
}

function getCategoryLabel(cat) {
  return CATEGORIES[cat]?.label || cat;
}

/* ── Theme ── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  $('theme-icon').textContent = theme === 'dark' ? '☀' : '🌙';
  localStorage.setItem('pt-theme', theme);
}
applyTheme(state.theme);

$('theme-toggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(state.theme);
});

/* ── Toast ── */
function toast(msg, type='info') {
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  const icons = { info:'ℹ', success:'✓', warn:'⚠' };
  el.innerHTML = `<span>${icons[type]||'ℹ'}</span><span>${msg}</span>`;
  $('toast-container').appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, 2800);
}

/* ── Render Periodic Table ── */
function buildTable() {
  const mainTable = $('periodic-table');
  const laAcTable = $('la-ac-table');
  mainTable.innerHTML = '';
  laAcTable.innerHTML = '';

  // Main table: rows 1-7, cols 1-18
  // Lanthanide/actinide: rows 9-10, cols 3-17

  // Add period labels col (col 0 would be before col 1)
  // We use CSS grid positioning instead

  ELEMENTS.forEach((el, idx) => {
    const cell = document.createElement('div');
    cell.className = `element-cell cat-${el.cat}`;
    cell.dataset.num = el.num;
    cell.dataset.cat = el.cat;
    cell.style.animationDelay = `${idx * 6}ms`;
    cell.innerHTML = `
      <span class="cell-num">${el.num}</span>
      <span class="cell-sym">${el.sym}</span>
      <span class="cell-name">${el.name}</span>
      <span class="cell-mass">${typeof el.mass==='number' ? el.mass.toFixed(el.mass<100?3:2) : el.mass}</span>
    `;

    cell.title = `${el.name} (${el.sym}) — ${getCategoryLabel(el.cat)}`;

    // Mark favorites
    if (state.favorites.includes(el.num)) cell.classList.add('favorited');

    cell.addEventListener('click', () => handleCellClick(el));
    cell.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') handleCellClick(el); });
    cell.setAttribute('tabindex', '0');
    cell.setAttribute('role', 'button');
    cell.setAttribute('aria-label', `${el.name}, atomic number ${el.num}`);

    if (el.row >= 9) {
      // Lanthanide/Actinide
      cell.style.gridColumn = el.col;
      cell.style.gridRow = el.row - 8; // row 9→1, row 10→2
      laAcTable.appendChild(cell);
    } else {
      cell.style.gridColumn = el.col;
      cell.style.gridRow = el.row;
      mainTable.appendChild(cell);
    }
  });

  // Placeholder cells for La* and Ac* in main table
  const laPlaceholder = document.createElement('div');
  laPlaceholder.className = 'element-cell cell-placeholder cat-lanthanide';
  laPlaceholder.style.gridColumn = 3; laPlaceholder.style.gridRow = 6;
  laPlaceholder.innerHTML = '<span class="cell-sym" style="font-size:11px">57-71</span>';
  mainTable.appendChild(laPlaceholder);

  const acPlaceholder = document.createElement('div');
  acPlaceholder.className = 'element-cell cell-placeholder cat-actinide';
  acPlaceholder.style.gridColumn = 3; acPlaceholder.style.gridRow = 7;
  acPlaceholder.innerHTML = '<span class="cell-sym" style="font-size:11px">89-103</span>';
  mainTable.appendChild(acPlaceholder);
}

/* ── Cell Click Handler ── */
function handleCellClick(el) {
  if (state.compareMode) {
    addToCompare(el);
    return;
  }
  openModal(el);
}

/* ── Filter & Search ── */
function applyFilter() {
  const cells = document.querySelectorAll('.element-cell:not(.cell-placeholder)');
  const searchTerm = state.search.toLowerCase().trim();
  const cat = state.filter;
  let visibleCount = 0;

  cells.forEach(cell => {
    const num = parseInt(cell.dataset.num);
    const el = ELEMENTS.find(e => e.num === num);
    if (!el) return;

    let matches = true;
    if (cat !== 'all' && el.cat !== cat) matches = false;
    if (searchTerm) {
      const inName = el.name.toLowerCase().includes(searchTerm);
      const inSym  = el.sym.toLowerCase().includes(searchTerm);
      const inNum  = String(el.num).includes(searchTerm);
      const inCat  = getCategoryLabel(el.cat).toLowerCase().includes(searchTerm);
      if (!inName && !inSym && !inNum && !inCat) matches = false;
    }

    if (matches) {
      cell.classList.remove('dimmed');
      cell.classList.add('highlighted');
      visibleCount++;
    } else {
      cell.classList.add('dimmed');
      cell.classList.remove('highlighted');
    }

    // If no filter active, remove highlighted state
    if (cat === 'all' && !searchTerm) {
      cell.classList.remove('dimmed', 'highlighted');
    }
  });

  // Update mini stats
  if (cat !== 'all' || searchTerm) {
    $('stats-mini').innerHTML = `<span>Showing <strong>${visibleCount}</strong> of 118 elements</span>`;
  } else {
    updateMiniStats();
  }
}

function updateMiniStats() {
  const metals = ELEMENTS.filter(e => ['alkali-metal','alkaline-earth-metal','transition-metal','post-transition-metal'].includes(e.cat)).length;
  const nonmetals = ELEMENTS.filter(e => ['nonmetal','halogen','noble-gas'].includes(e.cat)).length;
  $('stats-mini').innerHTML = `
    <span>⚗ 118 Elements</span>
    <span>🔩 ${metals} Metals</span>
    <span>💨 ${nonmetals} Nonmetals</span>
    <span>📚 ${Object.keys(CATEGORIES).length} Categories</span>
  `;
}

/* ── Legend ── */
function buildLegend() {
  const legend = $('legend');
  legend.innerHTML = '';
  Object.entries(CATEGORIES).forEach(([key, {label, color}]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<div class="legend-dot" style="background:${color}"></div><span>${label}</span>`;
    item.addEventListener('click', () => {
      state.filter = key;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === key));
      applyFilter();
    });
    legend.appendChild(item);
  });
}

/* ── Stats Panel ── */
function buildStats() {
  const metals = ELEMENTS.filter(e => ['alkali-metal','alkaline-earth-metal','transition-metal','post-transition-metal','metalloid'].includes(e.cat)).length;
  const nonmetals = ELEMENTS.filter(e => ['nonmetal','halogen','noble-gas'].includes(e.cat)).length;
  const nobleGases = ELEMENTS.filter(e => e.cat === 'noble-gas').length;
  const solidCount = ELEMENTS.filter(e => e.state === 'solid').length;
  $('stats-panel').innerHTML = `
    <div class="stat-item"><div class="stat-value">118</div><div class="stat-label">Total Elements</div></div>
    <div class="stat-item"><div class="stat-value">${metals}</div><div class="stat-label">Metals / Metalloids</div></div>
    <div class="stat-item"><div class="stat-value">${nonmetals}</div><div class="stat-label">Nonmetals</div></div>
    <div class="stat-item"><div class="stat-value">${nobleGases}</div><div class="stat-label">Noble Gases</div></div>
    <div class="stat-item"><div class="stat-value">${solidCount}</div><div class="stat-label">Solids at 20°C</div></div>
    <div class="stat-item"><div class="stat-value">${Object.keys(CATEGORIES).length}</div><div class="stat-label">Categories</div></div>
  `;
}

/* ── Modal ── */
function openModal(el) {
  state.currentModal = el;
  const overlay = $('element-modal');
  const color = getCategoryColor(el.cat);

  // Symbol block color
  $('modal-header').querySelector('.modal-symbol-block').style.background = color;
  $('modal-header').querySelector('.modal-symbol-block').style.color = '#fff';

  $('modal-num').textContent = el.num;
  $('modal-sym').textContent = el.sym;
  $('modal-mass').textContent = typeof el.mass === 'number' ? el.mass.toFixed(3) : el.mass;
  $('modal-element-name').textContent = el.name;
  $('modal-category').textContent = getCategoryLabel(el.cat);
  $('modal-category').style.color = color;
  $('modal-category').style.borderColor = color;
  $('modal-state').textContent = `State at 20°C: ${el.state ? el.state.charAt(0).toUpperCase()+el.state.slice(1) : 'Unknown'}`;

  // Favorite button
  const favBtn = $('modal-fav-btn');
  const isFav = state.favorites.includes(el.num);
  favBtn.textContent = isFav ? '★ Remove Favorite' : '☆ Add to Favorites';
  favBtn.className = `btn btn-outline fav-btn${isFav ? ' active' : ''}`;

  // Properties tab
  $('modal-props').innerHTML = [
    { label:'Atomic Number', value:el.num },
    { label:'Symbol', value:el.sym },
    { label:'Atomic Mass', value:fmt(el.mass,' u') },
    { label:'Group', value:fmt(el.group) },
    { label:'Period', value:fmt(el.period) },
    { label:'Category', value:getCategoryLabel(el.cat) },
    { label:'Density', value:el.density !== null && el.density !== undefined ? `${el.density} g/cm³` : 'Unknown' },
    { label:'Melting Point', value:el.melt !== null && el.melt !== undefined ? `${el.melt}°C` : 'Unknown' },
    { label:'Boiling Point', value:el.boil !== null && el.boil !== undefined ? `${el.boil}°C` : 'Unknown' },
    { label:'State at 20°C', value:el.state ? el.state.charAt(0).toUpperCase()+el.state.slice(1) : 'Unknown' },
    { label:'Discovered', value:fmtYear(el.year) },
    { label:'Discovered By', value:el.by || 'Unknown' },
  ].map(p => `<div class="prop-item"><div class="prop-label">${p.label}</div><div class="prop-value">${p.value}</div></div>`).join('');

  // Config tab
  $('modal-config').innerHTML = `
    <div class="config-formula">${el.config}</div>
    <div class="config-group-period">
      <div class="gp-item"><div class="gp-label">Group</div><div class="gp-value">${el.group || '—'}</div></div>
      <div class="gp-item"><div class="gp-label">Period</div><div class="gp-value">${el.period}</div></div>
      <div class="gp-item"><div class="gp-label">Block</div><div class="gp-value">${getBlock(el)}</div></div>
    </div>
  `;

  // Uses & facts tab
  $('modal-uses').innerHTML = `
    <div class="uses-section"><h4>Uses</h4><p>${el.uses || 'No known uses documented.'}</p></div>
    <div class="uses-section"><h4>Interesting Facts</h4><p>${el.facts || 'No facts documented.'}</p></div>
  `;

  // Reset to first tab
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab==='properties'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id==='tab-properties'));

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function getBlock(el) {
  const config = el.config;
  if (config.includes('f')) return 'f-block';
  if (config.includes('d')) return 'd-block';
  if (config.includes('p')) return 'p-block';
  return 's-block';
}

function closeModal() {
  $('element-modal').classList.add('hidden');
  document.body.style.overflow = '';
  state.currentModal = null;
}

$('modal-close').addEventListener('click', closeModal);
$('element-modal').addEventListener('click', e => { if (e.target === $('element-modal')) closeModal(); });

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    $(`tab-${btn.dataset.tab}`).classList.add('active');
  });
});

// Favorite button in modal
$('modal-fav-btn').addEventListener('click', () => {
  if (!state.currentModal) return;
  toggleFavorite(state.currentModal.num);
  const el = state.currentModal;
  const isFav = state.favorites.includes(el.num);
  $('modal-fav-btn').textContent = isFav ? '★ Remove Favorite' : '☆ Add to Favorites';
  $('modal-fav-btn').className = `btn btn-outline fav-btn${isFav ? ' active' : ''}`;
});

// Compare button in modal
$('modal-compare-btn').addEventListener('click', () => {
  if (!state.currentModal) return;
  closeModal();
  if (!state.compareMode) {
    state.compareMode = true;
    $('compare-panel').classList.remove('hidden');
  }
  addToCompare(state.currentModal);
});

/* ── Favorites ── */
function toggleFavorite(num) {
  const idx = state.favorites.indexOf(num);
  if (idx > -1) {
    state.favorites.splice(idx, 1);
    toast('Removed from favorites', 'info');
  } else {
    state.favorites.push(num);
    toast('Added to favorites ★', 'success');
  }
  localStorage.setItem('pt-favorites', JSON.stringify(state.favorites));
  // Update cells
  document.querySelectorAll('.element-cell').forEach(cell => {
    const n = parseInt(cell.dataset.num);
    if (n === num) cell.classList.toggle('favorited', state.favorites.includes(num));
  });
  renderFavorites();
}

function renderFavorites() {
  const list = $('favorites-list');
  if (state.favorites.length === 0) {
    list.innerHTML = '<div class="fav-empty">No favorites yet.<br>Click ☆ on any element to save it.</div>';
    return;
  }
  list.innerHTML = state.favorites.map(num => {
    const el = ELEMENTS.find(e => e.num === num);
    if (!el) return '';
    const color = getCategoryColor(el.cat);
    return `
      <div class="fav-item" onclick="openModal(ELEMENTS.find(e=>e.num===${num}))">
        <div class="fav-sym" style="background:${color};color:#fff">${el.sym}</div>
        <div class="fav-info">
          <div class="fav-name">${el.name}</div>
          <div class="fav-num">#${el.num} · ${getCategoryLabel(el.cat)}</div>
        </div>
        <button class="fav-remove" title="Remove" onclick="event.stopPropagation();toggleFavorite(${num})">✕</button>
      </div>
    `;
  }).join('');
}

$('favorites-toggle').addEventListener('click', () => {
  const panel = $('favorites-panel');
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) renderFavorites();
});
$('favorites-close').addEventListener('click', () => $('favorites-panel').classList.add('hidden'));

$('export-fav-btn').addEventListener('click', () => {
  const data = state.favorites.map(num => ELEMENTS.find(e => e.num === num)).filter(Boolean);
  downloadJSON({ favorites: data, exportedAt: new Date().toISOString() }, 'favorites.json');
  toast('Favorites exported!', 'success');
});

/* ── Compare ── */
$('compare-toggle').addEventListener('click', () => {
  state.compareMode = !state.compareMode;
  $('compare-panel').classList.toggle('hidden', !state.compareMode);
  if (state.compareMode) toast('Click two elements to compare', 'info');
});
$('compare-close').addEventListener('click', () => {
  state.compareMode = false;
  state.compareA = null;
  state.compareB = null;
  $('compare-panel').classList.add('hidden');
  document.querySelectorAll('.element-cell').forEach(c => c.classList.remove('in-compare'));
});

function addToCompare(el) {
  if (!state.compareA) {
    state.compareA = el;
    renderCompareSlot('slot-a', el);
    highlightCompareCell(el.num);
    toast(`${el.name} added — pick another element`, 'info');
  } else if (!state.compareB && el.num !== state.compareA.num) {
    state.compareB = el;
    renderCompareSlot('slot-b', el);
    highlightCompareCell(el.num);
    renderCompareTable();
    toast('Comparison ready!', 'success');
  } else if (el.num === state.compareA?.num) {
    toast('Already selected — pick a different element', 'warn');
  } else {
    state.compareB = el;
    renderCompareSlot('slot-b', el);
    document.querySelectorAll('.element-cell').forEach(c => {
      if (parseInt(c.dataset.num) !== state.compareA?.num) c.classList.remove('in-compare');
    });
    highlightCompareCell(el.num);
    renderCompareTable();
    toast('Comparison updated!', 'success');
  }
}

function highlightCompareCell(num) {
  document.querySelectorAll(`.element-cell[data-num="${num}"]`).forEach(c => c.classList.add('in-compare'));
}

function renderCompareSlot(slotId, el) {
  const slot = $(slotId);
  const color = getCategoryColor(el.cat);
  slot.classList.add('has-element');
  slot.innerHTML = `
    <div class="slot-element">
      <div class="slot-element-header">
        <div class="slot-sym-badge" style="background:${color};color:#fff">${el.sym}</div>
        <div>
          <div class="slot-name">${el.name}</div>
          <div class="slot-num">#{el.num} · ${getCategoryLabel(el.cat)}</div>
        </div>
        <button class="slot-clear" onclick="clearCompareSlot('${slotId}')">✕</button>
      </div>
    </div>
  `;
  slot.querySelector('.slot-num').textContent = `#${el.num} · ${getCategoryLabel(el.cat)}`;
}

function clearCompareSlot(slotId) {
  const slot = $(slotId);
  slot.classList.remove('has-element');
  slot.innerHTML = '<div class="slot-placeholder">Click an element to compare</div>';
  const field = slotId === 'slot-a' ? 'compareA' : 'compareB';
  if (state[field]) {
    document.querySelectorAll(`.element-cell[data-num="${state[field].num}"]`).forEach(c => c.classList.remove('in-compare'));
    state[field] = null;
  }
  $('compare-table-wrap').innerHTML = '';
}
window.clearCompareSlot = clearCompareSlot;

function renderCompareTable() {
  const a = state.compareA, b = state.compareB;
  if (!a || !b) return;
  const rows = [
    { label:'Atomic Number',  av:a.num,     bv:b.num,     cmp:true },
    { label:'Atomic Mass',    av:a.mass,    bv:b.mass,    cmp:true },
    { label:'Category',       av:getCategoryLabel(a.cat), bv:getCategoryLabel(b.cat), cmp:false },
    { label:'State at 20°C',  av:a.state,   bv:b.state,   cmp:false },
    { label:'Density (g/cm³)',av:a.density, bv:b.density, cmp:true },
    { label:'Melting Pt (°C)',av:a.melt,    bv:b.melt,    cmp:true },
    { label:'Boiling Pt (°C)',av:a.boil,    bv:b.boil,    cmp:true },
    { label:'Electron Config',av:a.config,  bv:b.config,  cmp:false },
    { label:'Discovered',     av:fmtYear(a.year), bv:fmtYear(b.year), cmp:false },
  ];
  $('compare-table-wrap').innerHTML = `
    <table class="compare-table">
      <thead><tr><th>Property</th><th>${a.name} (${a.sym})</th><th>${b.name} (${b.sym})</th></tr></thead>
      <tbody>${rows.map(r => {
        let aClass='', bClass='';
        if (r.cmp && r.av !== null && r.bv !== null && r.av !== undefined && r.bv !== undefined && r.av !== r.bv) {
          aClass = r.av > r.bv ? 'winner' : 'loser';
          bClass = r.bv > r.av ? 'winner' : 'loser';
        }
        return `<tr>
          <td class="prop-name">${r.label}</td>
          <td class="${aClass}">${r.av !== null && r.av !== undefined ? r.av : '—'}</td>
          <td class="${bClass}">${r.bv !== null && r.bv !== undefined ? r.bv : '—'}</td>
        </tr>`;
      }).join('')}</tbody>
    </table>
  `;
}

$('export-compare-btn').addEventListener('click', () => {
  if (!state.compareA || !state.compareB) { toast('Select two elements first', 'warn'); return; }
  downloadJSON({ elementA: state.compareA, elementB: state.compareB, exportedAt: new Date().toISOString() }, 'comparison.json');
  toast('Comparison exported!', 'success');
});

/* ── Random Element ── */
$('random-btn').addEventListener('click', () => {
  const el = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
  openModal(el);
  toast(`🎲 Random: ${el.name}!`, 'info');
});

/* ── Search ── */
const searchInput = $('search-input');
const suggestionsBox = $('search-suggestions');

searchInput.addEventListener('input', e => {
  state.search = e.target.value;
  applyFilter();
  showSuggestions(state.search);
});

function showSuggestions(term) {
  if (!term.trim()) { suggestionsBox.classList.add('hidden'); return; }
  const results = ELEMENTS.filter(el =>
    el.name.toLowerCase().includes(term.toLowerCase()) ||
    el.sym.toLowerCase().includes(term.toLowerCase()) ||
    String(el.num).startsWith(term) ||
    getCategoryLabel(el.cat).toLowerCase().includes(term.toLowerCase())
  ).slice(0, 8);

  if (!results.length) { suggestionsBox.classList.add('hidden'); return; }
  suggestionsBox.classList.remove('hidden');
  suggestionsBox.innerHTML = results.map(el => `
    <div class="suggestion-item" tabindex="0" data-num="${el.num}">
      <div class="sug-sym" style="background:${getCategoryColor(el.cat)};color:#fff">${el.sym}</div>
      <div class="sug-info">
        <span class="sug-name">${el.name}</span>
        <span class="sug-num">#${el.num} · ${getCategoryLabel(el.cat)}</span>
      </div>
    </div>
  `).join('');

  suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const el = ELEMENTS.find(e => e.num === parseInt(item.dataset.num));
      if (el) { openModal(el); suggestionsBox.classList.add('hidden'); searchInput.value = ''; state.search = ''; applyFilter(); }
    });
  });
}

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrapper')) suggestionsBox.classList.add('hidden');
});

/* ── Filter Buttons ── */
$('filter-buttons').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  state.filter = btn.dataset.cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
  applyFilter();
});

/* ── Export Utility ── */
function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

/* ── Keyboard Shortcuts ── */
document.addEventListener('keydown', e => {
  // Ctrl+F → focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
    return;
  }
  // Esc → close modal or panels
  if (e.key === 'Escape') {
    if (!$('element-modal').classList.contains('hidden')) { closeModal(); return; }
    if (!$('favorites-panel').classList.contains('hidden')) { $('favorites-panel').classList.add('hidden'); return; }
    if (!$('compare-panel').classList.contains('hidden')) {
      $('compare-panel').classList.add('hidden');
      state.compareMode = false;
      return;
    }
    if (searchInput === document.activeElement) { searchInput.blur(); return; }
  }
  // R → random element
  if (e.key === 'r' && !e.ctrlKey && document.activeElement !== searchInput) {
    $('random-btn').click();
  }
});

/* ── Expose to window for inline handlers ── */
window.openModal = openModal;
window.toggleFavorite = toggleFavorite;

/* ── Init ── */
(function init() {
  buildTable();
  buildLegend();
  buildStats();
  updateMiniStats();

  // Hide loader
  setTimeout(() => {
    $('loader').classList.add('hidden');
  }, 1200);
})();
