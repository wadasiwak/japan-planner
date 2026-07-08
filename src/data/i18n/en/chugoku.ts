import type { CityTranslation } from "../types";

// Chugoku region English content pack: Hiroshima & Miyajima, Onomichi &
// Shimanami Kaido, Okayama & Kurashiki, Tottori, Izumo & Matsue.
// Source of truth stays in src/data/cities/*.ts (zh-TW); this dict only
// overrides display strings.

export const cities: Record<string, CityTranslation> = {
  hiroshima: {
    name: "Hiroshima & Miyajima",
    areas: {
      平和紀念公園一帶: "Peace Memorial Park Area",
      "廣島城・縮景園": "Hiroshima Castle & Shukkeien",
      "本通・八丁堀": "Hondori & Hatchobori",
      宮島: "Miyajima",
    },
    hubs: {
      "hiroshima-sta-hiroshima": "Hiroshima Station",
      "hiroshima-genbaku-dome-mae": "Genbaku Dome-mae Tram Stop",
      "hiroshima-hatchobori": "Hatchobori Tram Stop",
      "hiroshima-miyajimaguchi": "Miyajimaguchi Station",
      "hiroshima-miyajima-pier": "Miyajima Pier",
    },
    souvenirs: [
      "Momiji manju (maple-leaf-shaped cakes, Miyajima's signature sweet; Nishikido, Fujiiya and others offer many fillings)",
      "Miyajima shakushi (lucky wooden rice paddles, a specialty of the Itsukushima Shrine approach)",
      "Hiroshima lemon goods (cookies, jams and drinks made with Setouchi lemons)",
      "Okonomiyaki sauce (Otafuku sauce, essential for recreating Hiroshima-style okonomiyaki at home)",
      "Kumano brushes (makeup and calligraphy brushes from Kumano, Japan's brush-making capital)",
    ],
    pois: {
      "hiroshima-atomic-bomb-dome": {
        name: "Atomic Bomb Dome",
        blurb:
          "The skeletal dome that survived the 1945 atomic blast, now a World Heritage Site and symbol of peace — the starting point for understanding Hiroshima.",
        tips: "Early morning is quiet and the evening illumination has its own mood; plan half a day to link the whole Peace Park area into one walking route.",
      },
      "hiroshima-peace-museum": {
        name: "Hiroshima Peace Memorial Museum",
        blurb:
          "Artifacts and images tell of Hiroshima on the day of the bombing — harrowing yet restrained, and for many travelers the most profound stop of the trip.",
        tips: "Queues are common in peak season; buy tickets online and enter at opening time for the calmest visit.",
      },
      "hiroshima-peace-park": {
        name: "Peace Memorial Park",
        blurb:
          "A memorial park on the hypocenter ruins, its cenotaph and Flame of Peace aligned along one axis linking the Dome and museum into a quiet walk.",
      },
      "hiroshima-nagataya": {
        name: "Nagataya Okonomiyaki",
        blurb:
          "Popular okonomiyaki spot beside the Dome — crisp griddled noodles and a signature oyster topping, perfect right after touring the Peace Park.",
      },
      "hiroshima-castle": {
        name: "Hiroshima Castle",
        blurb:
          "Mori Terumoto's 'Carp Castle' — the rebuilt keep holds history exhibits, the moat keeps its Edo character, and the top floor surveys the city.",
      },
      "hiroshima-shukkeien": {
        name: "Shukkeien Garden",
        blurb:
          "A 1620s daimyo garden compressing mountains and water into one landscape — pavilions and teahouses ring the pond, the best breather downtown.",
      },
      "hiroshima-kunimatsu": {
        name: "Shirunashi Tantanmen Kunimatsu",
        blurb:
          "Flagship of Hiroshima's soupless tantanmen — numbing Sichuan pepper tossed with an onsen egg gets more addictive with every stir.",
      },
      "hiroshima-hondori": {
        name: "Hondori Shopping Arcade",
        blurb:
          "A covered arcade through the city center, lined with drugstores, souvenirs and cafes all the way to the Peace Park — great even in the rain.",
      },
      "hiroshima-okonomimura": {
        name: "Okonomimura",
        blurb:
          "One building packed with 20-plus okonomiyaki stalls — sit at the counter and watch masters layer noodles, eggs and sauce in a sizzling haze.",
        tips: "Every stall is solid — just grab whichever counter has open seats rather than hunting for the top-ranked one.",
      },
      "hiroshima-itsukushima-shrine": {
        name: "Itsukushima Shrine",
        blurb:
          "A World Heritage shrine built over tidal flats — the great torii floats at high tide, and at low tide you can walk right to its base.",
        tips: "Check the tide tables before you go: high tide shows the torii floating, low tide lets you walk to its base — they are about 6 hours apart and decide what you will see.",
      },
      "hiroshima-omotesando": {
        name: "Miyajima Omotesando Shopping Street",
        blurb:
          "The lively street from pier to shrine — fried momiji manju, conger eel rice and wooden paddle souvenirs, plus the world's largest shakushi.",
        tips: "The street's deer will snatch food and paper bags — stay alert while snacking on the move.",
      },
      "hiroshima-miyajima-oyster": {
        name: "Grilled Oysters at Yakigaki no Hayashi",
        blurb:
          "The classic shop for Miyajima's grilled oysters — plump, cooked to order and heavenly with lemon; the oyster rice is worth adding too.",
      },
      "hiroshima-misen-ropeway": {
        name: "Mt. Misen Ropeway & Shishiiwa Observatory",
        blurb:
          "Two ropeway rides up Mt. Misen open sweeping views of the island-dotted Seto Inland Sea; the Shishiiwa lookout is called a god's-eye view.",
        tips: "It is still about a 30-minute walk from the ropeway station to the summit, so wear good shoes — and confirm the last car down before you go.",
      },
      "hiroshima-momijidani-park": {
        name: "Momijidani Park",
        blurb:
          "A famed maple valley at Mt. Misen's foot, where streams, red bridges and wild deer make Miyajima's most laid-back corner — crimson in autumn.",
      },
      "hiroshima-micchan-sohonten": {
        name: "Micchan Sohonten Okonomiyaki",
        blurb:
          "The originator of Hiroshima-style okonomiyaki — sweet steamed cabbage and crisp-edged noodles; for one 'authentic' plate, start here.",
        tips: "Expect 30-minute-plus queues at mealtimes; arrive at opening or in the mid-afternoon lull for the smoothest visit.",
      },
      "hiroshima-anagomeshi-ueno": {
        name: "Anagomeshi Ueno",
        blurb:
          "The original conger eel rice shop, founded 1901 — charcoal-grilled anago over broth-cooked rice, the best meal before or after the ferry.",
        tips: "Dine-in waits often reach an hour — register first, then go catch the ferry. The takeaway bento tastes even better cooled, perfect for the ferry or Shinkansen.",
      },
      "hiroshima-kingken": {
        name: "King-ken Shirunashi Tantanmen",
        blurb:
          "One of the two titans of Hiroshima soupless tantanmen, hitting harder with sansho pepper than Kunimatsu — a short walk from the Peace Park.",
        tips: "House rule: stir 30 times before eating. Spice levels are selectable — level 2 is the safe start for first-timers.",
      },
      "hiroshima-momijido": {
        name: "Momijido Fried Momiji Manju",
        blurb:
          "Birthplace of deep-fried momiji manju — crisp batter around red bean or cheese fillings, best devoured hot on a break from Omotesando.",
        tips: "There is seating inside — eat there rather than walking with food outside, or Miyajima's deer will come for it.",
      },
      "hiroshima-obscura-coffee": {
        name: "OBSCURA Coffee Roasters",
        blurb:
          "A standard-bearer of Hiroshima's local roasting scene — a quiet Fukuromachi backstreet shop with layered single-origin pour-overs.",
      },
    },
  },

  onomichi: {
    name: "Onomichi & Shimanami Kaido",
    areas: {
      尾道市區: "Onomichi Town",
      島波海道: "Shimanami Kaido",
    },
    hubs: {
      "onomichi-sta": "Onomichi Station",
      "onomichi-senkoji-ropeway": "Senkoji Ropeway Base Station",
      "onomichi-setoda-port": "Setoda Port (Ikuchijima)",
    },
    souvenirs: [
      "Hassaku daifuku (hassaku citrus daifuku from Hassakuya on Innoshima — slightly bitter fruit with white bean paste, a perfect match)",
      "Onomichi ramen dry noodle sets (packaged noodles supervised by famous shops, with pork-back-fat soy broth; brands like Amo Chinmi)",
      "Setoda lemon goods (jams, lemon cakes and sodas made from Ikuchijima's homegrown lemons)",
      "Onomichi canvas bags (made by a long-standing canvas workshop on Mukaishima — durable with port-town charm)",
    ],
    pois: {
      "onomichi-senkoji": {
        name: "Senkoji Temple & the Path of Literature",
        blurb:
          "The vermilion hall perched on a hillside boulder stars in every Onomichi postcard — ride up, then amble down the Path of Literature.",
        tips: "Buy a one-way ropeway ticket up — strolling down via the Path of Literature is the highlight, conveniently linking to the Cat Alley.",
      },
      "onomichi-neko-no-hosomichi": {
        name: "Neko no Hosomichi (Cat Alley)",
        blurb:
          "A 200-meter sloping lane scattered with over a hundred painted 'lucky cat' stones — real cats, tiny cafes and galleries hide around corners.",
      },
      "onomichi-ushitora-shrine": {
        name: "Ushitora Shrine",
        blurb:
          "The oldest shrine in Onomichi's old town, its four ancient camphor trees a natural monument — the ropeway glides right overhead.",
      },
      "onomichi-hondori": {
        name: "Onomichi Hondori Shopping Street",
        blurb:
          "A 1.2 km Showa-era arcade from the station, mixing old tea shops and bookstores with hip general stores — the flat route after the slopes.",
      },
      "onomichi-ichibankan": {
        name: "Onomichi Ramen Ichibankan",
        blurb:
          "A flagship Onomichi ramen shop — soy broth, flat noodles and nuggets of pork back fat, savory without being heavy. A safe local bet.",
        tips: "Closed Fridays; lunch queues start at 30 minutes, so arrive before opening or in the mid-afternoon.",
      },
      "onomichi-roman-coffee": {
        name: "Onomichi Roman Coffee Main Shop",
        blurb:
          "An old-school house-roasting kissaten by the arcade, siphon-brewed cup by cup — pancakes and silky pudding are the signatures.",
      },
      "onomichi-u2": {
        name: "ONOMICHI U2",
        blurb:
          "A shipping warehouse reborn as a cycling complex — hotel rooms that welcome bikes, a bakery and a sea-view restaurant-bar. Port-side cool.",
        tips: "The GIANT store inside rents road bikes — the most convenient place to gear up before setting off on the Shimanami Kaido.",
      },
      "onomichi-shimanami-cycling": {
        name: "Shimanami Kaido Cycling (Onomichi → Mukaishima → Innoshima)",
        blurb:
          "Japan's most famous sea-crossing cycle route — follow the blue line by ferry to Mukaishima, then over bridges past citrus groves and sea air.",
        tips: "Rent bikes at Onomichi Port or U2; public rentals allow one-way drop-off (leave the bike at Setoda and other stations), and e-bikes need reservations.",
      },
      "onomichi-kosanji": {
        name: "Kosanji Temple & the Hill of Hope",
        blurb:
          "A flamboyant Ikuchijima temple of colorful replica architecture; behind it, the Hill of Hope is carved entirely from dazzling white marble.",
        tips: "The Hill of Hope has zero shade — bring water and a hat in summer; the hilltop cafe is the best rest stop.",
      },
      "onomichi-okunoshima": {
        name: "Okunoshima (Rabbit Island)",
        blurb:
          "A small island overrun by hundreds of wild rabbits — crouch and be surrounded. A poison gas museum and battery ruins add sober history.",
        tips: "The ferry from Tadanoumi Port takes about 15 minutes; buy rabbit food at the port beforehand — none is sold on the island.",
      },
      "onomichi-hassakuya": {
        name: "Hassakuya (Hassaku Daifuku)",
        blurb:
          "Famed daifuku shop by the Innoshima Bridge — juicy, slightly bitter hassaku citrus wrapped in white bean paste and mochi. A cyclist's reviver.",
        tips: "Closed Mondays and Tuesdays; hassaku daifuku runs mainly autumn-winter through spring, with other citrus flavors in summer — they often sell out early.",
      },
      "onomichi-chidori": {
        name: "Setoda Chidori Shokudo",
        blurb:
          "A long-standing eatery on Setoda's shopping street — octopus every way, from tako rice to tempura. The top lunch after a day of cycling.",
      },
    },
  },

  okayama: {
    name: "Okayama & Kurashiki",
    areas: {
      岡山市區: "Okayama City",
      倉敷: "Kurashiki",
    },
    hubs: {
      "okayama-sta-okayama": "Okayama Station",
      "okayama-sta-kurashiki": "Kurashiki Station",
      "okayama-bikan": "Kurashiki Bikan Historical Quarter",
    },
    souvenirs: [
      "Kibi dango (millet dumplings from old shops like Koeido, the famed sweet of the Momotaro legend)",
      "White peach sweets (jellies, puddings and other desserts made with Okayama white peaches)",
      "Muscat sweets (muscat grape jellies and confections from Japan's fruit kingdom)",
      "Kurashiki canvas (locally woven canvas bags and goods with artisan quality)",
      "Kojima denim goods (denim wallets and sundries from Kojima, the holy land of Japanese jeans)",
    ],
    pois: {
      "okayama-korakuen": {
        name: "Okayama Korakuen Garden",
        blurb:
          "One of Japan's three great gardens — lawns, winding streams and borrowed views of Okayama Castle, with a different face every season.",
        tips: "The combo ticket with Okayama Castle is good value — do the garden first in the morning, then cross Tsukimi Bridge to the castle when the light is best.",
      },
      "okayama-castle": {
        name: "Okayama Castle",
        blurb:
          "The black 'Crow Castle', its keep renovated in 2022 with bright exhibits — Korakuen lies just across the river for an easy pairing.",
      },
      "okayama-kibitsu-shrine": {
        name: "Kibitsu Shrine",
        blurb:
          "Head shrine of Kibitsuhiko, prototype of the Momotaro legend — a National Treasure hall and a 400-meter corridor rippling along the hill.",
        tips: "From Okayama Station take the JR Kibi Line to Kibitsu Station, then walk about 10 minutes; trains are infrequent, so check the return timetable first.",
      },
      "okayama-momotaro-odori": {
        name: "Momotaro-odori Avenue",
        blurb:
          "The boulevard from station to castle, dotted with statues of Momotaro and his companions while trams rattle past — a fun downtown link.",
      },
      "okayama-nomura-demikatsu": {
        name: "Ajitsukasa Nomura Demi-katsu Don",
        blurb:
          "The originator of Okayama's demi-katsu don: crisp pork cutlet in rich demi-glace over rice and peas, an unforgettable Showa-era lunch.",
        tips: "Lunchtime queues are common — arriving at the 11 a.m. opening is safest, and the demi-glace katsudon is the signature order.",
      },
      "okayama-azuma-sushi": {
        name: "Azuma Sushi Okayama Barazushi",
        blurb:
          "The flagship for Okayama barazushi — Seto Inland Sea seafood piled over vinegared rice like a jewel box, right inside the station mall.",
      },
      "okayama-onsaya-coffee": {
        name: "ONSAYA Coffee Hokancho",
        blurb:
          "House-roasting coffee in the retro Hokancho arcade by the west exit — a renovated old house with solid pour-overs, a true local corner.",
      },
      "okayama-bikan-quarter": {
        name: "Kurashiki Bikan Historical Quarter",
        blurb:
          "White-walled storehouses and willows mirrored in the canal — a preserved Edo merchant town of museums, craft shops and dessert cafes.",
        tips: "Most shops close around 5 p.m.; after dusk the crowds thin and the lights come on — stay into the evening for empty-street photos.",
      },
      "okayama-kurashiki-kawafune": {
        name: "Kurashiki River Boat Ride",
        blurb:
          "Glide the Kurashiki River on a poled punt — 20 minutes gazing up at white walls and stone bridges. The Bikan Quarter's classic experience.",
        tips: "Buy boat tickets at the Kurashikikan tourist office; they often sell out early on weekends, so get tickets first and then explore.",
      },
      "okayama-ohara-museum": {
        name: "Ohara Museum of Art",
        blurb:
          "Japan's first Western art museum (1930) — El Greco, Monet and Matisse in a Greek-temple hall. Masterpieces in a small canal town.",
        tips: "Closed Mondays (open if a holiday); the star El Greco 'Annunciation' hangs in the main hall — head straight there if short on time.",
      },
      "okayama-denim-street": {
        name: "Kurashiki Denim Street",
        blurb:
          "Kojima denim's outpost in the Bikan Quarter — jeans and accessories, plus blue denim steamed buns and ice cream. Worth a look either way.",
      },
      "okayama-furuichi-udon": {
        name: "Bukkake-tei Honpo Furuichi",
        blurb:
          "Home of Kurashiki's bukkake udon — springy noodles, sweet-savory sauce, onsen egg and tempura crumbs. Cheap, quick and satisfying.",
      },
      "okayama-kurashiki-momoko": {
        name: "Kurashiki Momoko Fruit Parfaits",
        blurb:
          "Parfaits from 'fruit kingdom' Okayama — white peach and muscat in season, eaten upstairs in an old merchant house above the Bikan streets.",
        tips: "White peach parfaits run roughly June-September and muscat September-November; weekend afternoons often mean queues, so register your name and browse while you wait.",
      },
    },
  },

  tottori: {
    name: "Tottori",
    areas: {
      鳥取市區: "Tottori City",
      境港: "Sakaiminato",
    },
    hubs: {
      "tottori-sta-tottori": "Tottori Station",
      "tottori-sakyu": "Tottori Sand Dunes",
      "tottori-sta-sakaiminato": "Sakaiminato Station",
    },
    souvenirs: [
      "Inaba no Shiro Usagi (white rabbit-shaped manju by Kotobuki Seika, inspired by the White Rabbit myth)",
      "Nijisseiki pear sweets (jellies, cookies and candies made from Tottori's famous pears)",
      "Kitaro merchandise (yokai sweets and goods from Mizuki Shigeru Road in Sakaiminato)",
      "Shirobara milk goods (cookies, cakes and more made with Daisen Dairy's beloved milk)",
    ],
    pois: {
      "tottori-sand-dunes": {
        name: "Tottori Sand Dunes",
        blurb:
          "Japan's largest tourist dunes — crest the 'Umanose' ridge to meet the blue of the Sea of Japan. Camels, sandboarding, even paragliding.",
        tips: "Buses from Tottori Station take about 20 minutes, with a Kirin Jishi loop bus on weekends; sand gets in your shoes, so wear slip-ons or rent boots.",
      },
      "tottori-sand-museum": {
        name: "The Sand Museum",
        blurb:
          "The world's only museum devoted to sand sculpture — a new country theme each year, then the works return to the earth. See it while it lasts.",
        tips: "It's right beside the dunes, so pair them in the same half day; the museum closes around January to change exhibitions — check the official site before you go.",
      },
      "tottori-uradome-coast": {
        name: "Uradome Coast Island-hopping Cruise",
        blurb:
          "The San'in Kaigan Geopark's highlight — a 40-minute cruise among sea arches, strange rocks and crystal water, the 'Matsushima of San'in'.",
        tips: "Boats run roughly March to November and stop in winter; they also cancel in rough seas, so phone ahead to confirm before setting out.",
      },
      "tottori-hakuto-shrine": {
        name: "Hakuto Shrine",
        blurb:
          "Stage of the White Rabbit of Inaba myth and Japan's top rabbit shrine for love ties — white rabbit statues line the approach, utterly cute.",
        tips: "It lies west of the station, the opposite direction from the dunes — about 40 minutes by bus toward Tottori University/Aoya; the White Rabbit Beach across the road is worth a stroll too.",
      },
      "tottori-karoichi-market": {
        name: "Tottori Port Seafood Market Karoichi",
        blurb:
          "A market by Karo Port where winter snow crab piles into small mountains and the diners serve big, cheap seafood bowls — San'in abundance.",
        tips: "Matsuba crab season runs from early November to March, when price and freshness peak; in summer switch to white squid and rock oysters.",
      },
      "tottori-takumi-kappo": {
        name: "Takumi Kappo Tottori Wagyu",
        blurb:
          "A venerable kappo by the station — its Tottori wagyu 'susugi-nabe' swishes sweet marbled beef through kombu broth for mere seconds.",
      },
      "tottori-sunaba-coffee": {
        name: "Sunaba Coffee",
        blurb:
          "Born of the joke that 'Tottori has no Starbucks, but it has a sunaba' — now a local icon with surprisingly solid retro dishes and desserts.",
      },
      "tottori-mizuki-shigeru-road": {
        name: "Mizuki Shigeru Road, Sakaiminato",
        blurb:
          "A yokai street in Kitaro creator Mizuki Shigeru's hometown — nearly 180 bronze monsters, with even manhole covers going full Kitaro.",
        tips: "It's far from Tottori city (about 2 hours), so ride the Kitaro-painted JR Sakai Line train from Yonago — the train itself is an attraction; the statues light up after dark.",
      },
      "tottori-tairyomaru-sushi": {
        name: "Tairyomaru Conveyor Belt Sushi",
        blurb:
          "Conveyor sushi fed straight from Sakaiminato's catch — red snow crab, white squid and tuna by season, beating city names on freshness.",
      },
    },
  },

  izumo: {
    name: "Izumo & Matsue",
    areas: {
      出雲: "Izumo",
      松江: "Matsue",
    },
    hubs: {
      "izumo-sta-izumoshi": "Izumoshi Station",
      "izumo-taisha-mae": "Izumo Taisha-mae Station",
      "izumo-sta-matsue": "Matsue Station",
    },
    souvenirs: [
      "Enmusubi charms (red matchmaking threads, amulets and enmusubi strings from the Izumo Taisha approach)",
      "Izumo soba dry noodles (gift sets with dipping sauce to recreate three-tier warigo soba at home)",
      "Tawara manju (rice-bale-shaped buns with buttery filling, an Izumo classic sweet)",
      "Zenzai sweets (Izumo is the birthplace of zenzai red bean soup — instant packs travel well)",
    ],
    pois: {
      "izumo-taisha": {
        name: "Izumo Taisha Grand Shrine",
        blurb:
          "One of Japan's oldest shrines, home of the marriage deity Okuninushi — the giant sacred rope stuns, and in October all the gods gather here.",
        tips: "The prayer ritual is unique: bow twice, clap four times, bow once — different from the usual two claps, so don't get it wrong.",
      },
      "izumo-inasa-beach": {
        name: "Inasa Beach",
        blurb:
          "The mythic shore where the gods come ashore, Bentenjima standing sacred on the sand — at sunset the sea turns gold and the aura peaks.",
        tips: "The traditional order is to gather sand at the beach first, then exchange it for blessed sand at Soga-no-yashiro within Izumo Taisha to take home for good ties.",
      },
      "izumo-kodai-museum": {
        name: "Shimane Museum of Ancient Izumo",
        blurb:
          "Beside the shrine, starring a real giant pillar from the ancient hall and 358 bronze swords — the 48-meter ancient sanctuary becomes real.",
      },
      "izumo-arakiya-soba": {
        name: "Arakiya Izumo Soba",
        blurb:
          "A 200-year-old soba house by the shrine famed for warigo soba — three vermilion lacquer tiers, sauce poured down from top to bottom.",
        tips: "Warigo style: pour sauce over the first tier, then tip the leftover sauce into the next; finish by drinking the soba cooking water.",
      },
      "izumo-zenzai-gakkai": {
        name: "Nihon Zenzai Gakkai Ichigo-ten",
        blurb:
          "Izumo is the birthplace of zenzai, and this little shop makes it the star — grilled mochi with dainagon azuki, sweet but never cloying.",
      },
      "izumo-shinmon-dori": {
        name: "Shinmon-dori Shopping Street",
        blurb:
          "The approach street from the great torii to the shrine — matchmaking charms, magatama jewelry and sweet shops for one-stop souvenirs.",
      },
      "izumo-haneya-soba": {
        name: "Haneya Honten Kenjo Soba",
        blurb:
          "An Izumo soba house that once served the Emperor, founded in late Edo — delicate noodles with a whisper of grain, a refined counterpoint.",
      },
      "izumo-matsue-castle": {
        name: "Matsue Castle",
        blurb:
          "One of just 12 original keeps and 5 National Treasure castles — the black 'Plover Castle' surveys Lake Shinji from its top floor.",
        tips: "The keep's interior is steep original wooden stairs, so wear good shoes; the castle park is a famous cherry blossom spot in spring.",
      },
      "izumo-horikawa-cruise": {
        name: "Horikawa Sightseeing Boat",
        blurb:
          "A small boat loops the castle moat for 50 minutes under 16 bridges — at the low ones the canopy drops and everyone ducks. Pure bliss.",
        tips: "The day pass lets you hop on and off at three boarding points; in winter the boats add kotatsu heated tables — a seasonal treat.",
      },
      "izumo-shinjiko-sunset": {
        name: "Lake Shinji Sunset",
        blurb:
          "Among Japan's hundred best sunsets — the sun sinks into Lake Shinji, Yomegashima turns to silhouette and the water blazes orange. Free.",
        tips: "Sunset times vary a lot by season — check the day's sunset time and claim a lakeside spot 30 minutes early.",
      },
      "izumo-minamikan": {
        name: "Minamikan Tai-meshi",
        blurb:
          "A Meiji-era ryokan's famed tai-meshi — sea bream flakes and sieved egg finished with dashi like chazuke, a Matsue domain hospitality dish.",
      },
      "izumo-kiharu-cafe": {
        name: "Kissa Kiharu Wagashi & Matcha",
        blurb:
          "A tearoom in the Matsue History Museum — master craftsmen shape fresh namagashi before your eyes, paired with matcha and a garden view.",
      },
      "izumo-tamatsukuri-onsen": {
        name: "Tamatsukuri Onsen",
        blurb:
          "A 1,300-year-old 'bath of the gods' whose waters are called natural skin lotion — footbaths and magatama bridges dot the riverside street.",
        tips: "Doable without an overnight stay: free footbaths line the river and some ryokan open their baths to day visitors — bring your own towel to save.",
      },
    },
  },
};
