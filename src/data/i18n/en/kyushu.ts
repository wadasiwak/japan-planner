import type { CityTranslation } from "../types";

// 九州英文翻譯包:福岡、長崎、熊本・阿蘇、鹿兒島・櫻島、屋久島、宮崎・日南、別府・由布院。
export const cities: Record<string, CityTranslation> = {
  fukuoka: {
    name: "Fukuoka",
    areas: {
      "中洲・博多": "Nakasu & Hakata",
      "天神・大濠": "Tenjin & Ohori",
      "百道・長浜": "Momochi & Nagahama",
      "太宰府": "Dazaifu",
    },
    hubs: {
      "fukuoka-sta-hakata": "Hakata Station",
      "fukuoka-sta-tenjin": "Tenjin Station",
      "fukuoka-sta-nakasukawabata": "Nakasu-Kawabata Station",
      "fukuoka-sta-ohorikoen": "Ohori Koen Station",
      "fukuoka-sta-dazaifu": "Dazaifu Station",
    },
    souvenirs: [
      "Karashi mentaiko (spicy marinated cod roe from old shops like Fukusaya and Yamaya; shelf-stable packs travel well)",
      "Hakata Torimon (Meigetsudo's white-bean butter buns, Hakata's classic souvenir)",
      "Hakata Hiyoko (chick-shaped bean-paste buns from a century-old Fukuoka maker)",
      "Umegae mochi (Dazaifu's grilled mochi specialty, made fresh along the approach; boxed sets available to go)",
      "Tsukushi mochi (Josuian's kinako mochi with brown-sugar syrup, similar to shingen mochi)",
    ],
    pois: {
      "fukuoka-nakasu-yatai": {
        name: "Nakasu Yatai Food Stalls",
        blurb: "Dozens of lantern-lit yatai line the Naka River after dark. Squeeze in beside locals for tonkotsu ramen, skewers, and beer — the soul of Fukuoka nights.",
        tips: "Stalls open gradually after 6pm; do a lap along the river to compare menus and prices first, and bring plenty of cash.",
      },
      "fukuoka-kushida-jinja": {
        name: "Kushida Shrine",
        blurb: "Hakata's guardian shrine, where July's Gion Yamakasa festival begins. A towering, lavishly decorated festival float is on display year-round.",
        tips: "It connects to Kawabata Arcade and Canal City — cover all three in one easy loop.",
      },
      "fukuoka-kawabata-arcade": {
        name: "Kawabata Shopping Arcade",
        blurb: "Hakata's oldest shopping street, a 400-meter arcade of festival goods, old wagashi shops, and famous zenzai sweet soup — everyday Hakata at its best.",
      },
      "fukuoka-canal-city": {
        name: "Canal City Hakata",
        blurb: "A huge mall built around a canal, with fountain shows every half hour and projection mapping at night. The Ramen Stadium upstairs is a solid rainy-day plan.",
      },
      "fukuoka-ichiran-honten": {
        name: "Ichiran Main Store",
        blurb: "The famed tonkotsu ramen chain began as a Fukuoka yatai, and its main store sits right in Nakasu. Solo booth seating lets you focus entirely on the bowl.",
        tips: "Open 24 hours — skip lunch and dinner peaks and there is barely any queue.",
      },
      "fukuoka-tochoji": {
        name: "Tochoji Temple",
        blurb: "The first temple Kukai founded in Japan, home to the 10.8-meter wooden Great Buddha. The dark hell-and-paradise walk beneath the statue is memorable.",
      },
      "fukuoka-tenjin-chikagai": {
        name: "Tenjin Underground Mall",
        blurb: "Stone paving and ornate ceilings in 19th-century European style — Japan's most atmospheric underground mall, with 150-plus shops linking Tenjin's stores.",
      },
      "fukuoka-yanagibashi-market": {
        name: "Yanagibashi Market",
        blurb: "A century-old market called Hakata's kitchen, its narrow arcade packed with fish, mentaiko, and kamaboko shops. Finish with a hearty seafood rice bowl.",
        tips: "Closed Sundays and holidays; mornings are liveliest, and many stalls shut after noon.",
      },
      "fukuoka-ohori-park": {
        name: "Ohori Park",
        blurb: "A vast pond park made from Fukuoka Castle's moat: a two-kilometer lakeside loop, swan boats, and stone bridges, with a Japanese garden and museum nearby.",
      },
      "fukuoka-maizuru-park": {
        name: "Fukuoka Castle Ruins (Maizuru Park)",
        blurb: "Ruins of the Kuroda clan's castle — climb the donjon base for views over Ohori Park and the skyline. In spring it's Fukuoka's top cherry blossom spot.",
      },
      "fukuoka-nagahama-ramen": {
        name: "Ganso Nagahamaya Ramen",
        blurb: "The originator of Nagahama ramen — ultra-thin noodles in light tonkotsu broth, and the birthplace of the kaedama refill custom. The local bustle is the show.",
        tips: "Buy a meal ticket at the door; shout \"kaedama\" for extra noodles — just over a hundred yen a serving.",
      },
      "fukuoka-tower": {
        name: "Fukuoka Tower",
        blurb: "A 234-meter seaside landmark clad in 8,000 mirrored panels. Sunset over Hakata Bay from the 123-meter observation deck is a Fukuoka classic.",
        tips: "Go up 30 minutes before sunset to catch both sunset and night views; the beach park is right below.",
      },
      "fukuoka-momochi-seaside": {
        name: "Momochi Seaside Park",
        blurb: "An artificial white-sand beach below Fukuoka Tower, facing Hakata Bay with the Marizon pier at its center. Breezy strolls with a resort-like summer mood.",
      },
      "fukuoka-dazaifu-tenmangu": {
        name: "Dazaifu Tenmangu Shrine",
        blurb: "Head shrine of 12,000 Tenmangu shrines, dedicated to the god of learning. Six thousand plum trees and the flying-plum legend reward a slow visit.",
        tips: "During the main hall's renovation, worship takes place at a striking temporary hall with a forest growing on its roof — an attraction in itself.",
      },
      "fukuoka-dazaifu-sando": {
        name: "Dazaifu Omotesando",
        blurb: "The stone approach from Dazaifu Station to the shrine, lined with snack shops. Fresh-grilled umegae mochi — crisp outside, hot inside — is in every hand.",
        tips: "Don't miss the Kengo Kuma-designed Starbucks with its woven-timber facade right on the approach.",
      },
      "fukuoka-kyuhaku": {
        name: "Kyushu National Museum",
        blurb: "Japan's fourth national museum, tracing cultural exchange between Japan and Asia. The wave-shaped glass hall is reached by escalator from the shrine.",
        tips: "Closed Mondays (or the next day if a holiday); the permanent exhibit is big — allow at least 90 minutes.",
      },
      "fukuoka-hakata-shinshin": {
        name: "Hakata Ramen Shin-Shin (Tenjin)",
        blurb: "A perennial favorite in Fukuoka's ramen polls, founded by a yatai cook — thin noodles in a fragrant, milky broth. A late-night staple after Tenjin shopping.",
        tips: "Open until late, perfect for a nightcap bowl; beyond the signature ramen, try the yatai-style yaki-ramen.",
      },
      "fukuoka-motsunabe-ooyama": {
        name: "Motsunabe Ooyama (Main Store)",
        blurb: "A flagship of Hakata motsunabe: rich miso broth, plump beef offal, and a finale of porridge or noodles soaking up every drop of the pot's goodness.",
        tips: "Expect queues at dinner — book online ahead; there's a branch inside Hakata Station if you're short on time.",
      },
      "fukuoka-tetsunabe-gion": {
        name: "Hakata Gion Tetsunabe Gyoza",
        blurb: "Famed for Hakata's iron-pan gyoza — bite-sized dumplings arrive sizzling, bottoms crisped golden. With a cold draft beer, it's Hakata nightlife at its best.",
      },
      "fukuoka-ganso-mentaiju": {
        name: "Ganso Hakata Mentaiju",
        blurb: "Japan's first mentaiko specialty restaurant — a whole kombu-cured cod roe over nori and rice with special sauce. Doors open at 7am for a luxurious breakfast.",
        tips: "Arrive at 7am opening for the shortest lines; spice and sauce are customizable, but the basic set suits first-timers.",
      },
      "fukuoka-suzukake-honten": {
        name: "Suzukake Main Store",
        blurb: "A Hakata wagashi house from 1923 — dainty Suzuno Monaka is the signature, and the tearoom's anmitsu draws queues. A perfect rest after Kushida Shrine.",
        tips: "The tearoom is packed on weekends — weekday afternoons are smoothest; small boxes of monaka make great souvenirs.",
      },
      "fukuoka-rec-coffee": {
        name: "Rec Coffee (Yakuin Station)",
        blurb: "A roastery led by World Barista Championship runner-up Yoshikazu Iwase — pour-overs among Fukuoka's finest, in a bright, quiet room near Tenjin.",
      },
    },
  },

  nagasaki: {
    name: "Nagasaki",
    areas: {
      "浦上・市中心": "Urakami & City Center",
      "南山手・新地中華街": "Minamiyamate & Chinatown",
    },
    hubs: {
      "nagasaki-sta-nagasaki": "Nagasaki Station",
      "nagasaki-sta-shinchi": "Shinchi Chinatown Tram Stop",
      "nagasaki-sta-heiwakoen": "Peace Park Tram Stop",
      "nagasaki-sta-oura": "Oura Cathedral Tram Stop",
    },
    souvenirs: [
      "Fukusaya castella (from the original castella maker; the sugar crystals on the bottom are its trademark)",
      "Bunmeido castella (another great castella house — rich egg flavor and a soft crumb)",
      "Champon noodle kits (take-home Nagasaki champon sets with soup base from brands like Mirokuya)",
      "Cruz (cross-patterned wafers filled with white chocolate, full of Nagasaki's exotic flair)",
      "Momo castella (peach-shaped celebratory castella, exclusive to Nagasaki wagashi shops)",
    ],
    pois: {
      "nagasaki-atomic-bomb-museum": {
        name: "Nagasaki Atomic Bomb Museum",
        blurb: "Artifacts, photographs, and testimonies convey Nagasaki at 11:02am on August 9, 1945. Heavy but essential — the starting point for understanding this city.",
        tips: "It adjoins the Peace Park and the hypocenter — visit all three together.",
      },
      "nagasaki-peace-park": {
        name: "Nagasaki Peace Park",
        blurb: "A park built to pray for world peace — the 9.7-meter Peace Statue points at the atomic threat and extends a hand for peace. The paper cranes are moving.",
      },
      "nagasaki-megane-bashi": {
        name: "Meganebashi (Spectacles Bridge)",
        blurb: "Japan's oldest stone arch bridge (1634) — twin arches mirrored in the Nakashima River form a perfect pair of spectacles. Lovely riverside strolling.",
        tips: "Hunt for the heart-shaped stone set into the embankment wall near the bridge — finding it brings luck.",
      },
      "nagasaki-fukusaya": {
        name: "Fukusaya Main Store",
        blurb: "The originator of castella, founded in 1624 and still fully handmade — coarse sugar on the base is its trademark. The wooden shop itself charms.",
        tips: "Small boxes are great for snacking as you walk; shelf life is short, so buy whole loaves the day before you fly home.",
      },
      "nagasaki-yossou": {
        name: "Yossou Main Store",
        blurb: "A chawanmushi specialist since 1866 — the signature set pairs a big savory custard with steamed sushi, served silky and hot in a tatami-floored old house.",
      },
      "nagasaki-inasayama": {
        name: "Mount Inasa Night View",
        blurb: "From the 333-meter summit deck, harbor lights climb the hillsides in glittering layers — one of the world's new top three night views. Pure romance.",
        tips: "The ropeway is easiest; arrive 30 minutes before sunset to catch dusk and night views in one go.",
      },
      "nagasaki-glover-garden": {
        name: "Glover Garden",
        blurb: "Hillside mansions of port-era foreign merchants, including Glover House, Japan's oldest wooden Western residence. Superb harbor views toward Mount Inasa.",
        tips: "Take the moving walkways to the top of the garden first, then stroll downhill — much easier.",
      },
      "nagasaki-oura-cathedral": {
        name: "Oura Cathedral",
        blurb: "Japan's oldest surviving church (1864) and the only Western building named a National Treasure — where hidden Christians revealed themselves to the world.",
        tips: "It stands right beside the Glover Garden entrance — always pair the two.",
      },
      "nagasaki-chinatown": {
        name: "Nagasaki Shinchi Chinatown",
        blurb: "One of Japan's three great Chinatowns and the birthplace of champon and sara udon — a compact quarter framed by four Chinese gates, packed with flavor.",
        tips: "Old houses Kozanro and Kairakuen serve the most famous champon; expect a wait at mealtimes.",
      },
      "nagasaki-dejima": {
        name: "Dejima",
        blurb: "The fan-shaped island that was Japan's only window to the West during isolation. The restored Dutch trading post explains Nagasaki's exotic air.",
      },
      "nagasaki-shikairo": {
        name: "Shikairo",
        blurb: "Founded in 1899, the birthplace of champon — invented for Chinese students, now Nagasaki's signature dish. The fifth floor overlooks the harbor.",
        tips: "There's a free champon museum on the second floor; lunch queues run long, so arrive at opening or off-peak.",
      },
      "nagasaki-tsuruchan": {
        name: "Tsuru-chan",
        blurb: "Kyushu's oldest coffee house (1925) and home of Turkish rice — pork cutlet, pilaf, and spaghetti on one generous plate, best with a retro milkshake.",
        tips: "Turkish rice portions are big — two can share one plate and split a signature milkshake.",
      },
      "nagasaki-shooken": {
        name: "Shooken Main Store",
        blurb: "A castella house founded in 1681, famed for the original chocolate castella. The retro tearoom Sevilla upstairs serves slices cut to order with coffee.",
        tips: "It's a few minutes' walk from Meganebashi — finish your stroll with fresh-cut castella upstairs.",
      },
      "nagasaki-nanbanchaya": {
        name: "Nanban Chaya",
        blurb: "An old-house cafe in a lane by Meganebashi — dim lamps and antiques evoke the Nanban trade era. Charcoal-roasted coffee and homemade cake mid-stroll.",
      },
    },
  },

  kumamoto: {
    name: "Kumamoto & Aso",
    areas: {
      "熊本市區": "Kumamoto City",
      "阿蘇": "Aso",
      "高千穗": "Takachiho",
    },
    hubs: {
      "kumamoto-sta": "Kumamoto Station",
      "kumamoto-torichosuji": "Torichosuji",
      "kumamoto-aso-sta": "Aso Station",
      "kumamoto-takachiho-bc": "Takachiho Bus Center",
    },
    souvenirs: [
      "Kumamon goods (official merchandise of Kumamoto's beloved bear mascot, sold at Kumamon Square and the station)",
      "Ikinari dango (steamed dumplings of sweet potato and red bean, a Kumamoto folk sweet; frozen packs available)",
      "Homare no Jindaiko (Okashi no Kobai's signature — red bean wrapped in gyuhi, sliced with the included cutter)",
      "Mushagaeshi (Kobai's flaky red-bean pastry, layered like Kumamoto Castle's stone walls)",
      "Karashi renkon (lotus root stuffed with mustard miso and deep-fried, a Kumamoto classic)",
    ],
    pois: {
      "kumamoto-castle": {
        name: "Kumamoto Castle & Josaien",
        blurb: "One of Japan's three great castles — Kato Kiyomasa's black keep and curved stone walls look mightier than ever after quake repairs. Food stalls wait below.",
        tips: "The special viewing route gets you close to walls still under repair; the keep's exhibits are rich — allow a full two hours.",
      },
      "kumamoto-suizenji": {
        name: "Suizenji Jojuen Garden",
        blurb: "A Momoyama-style strolling garden of the Hosokawa clan, its pond fed by Aso spring water and its hill modeled on Mount Fuji. The city's calmest half hour.",
        tips: "The tram stops right at Suizenji Park station; morning light is best for reflections.",
      },
      "kumamoto-kamitori-shimotori": {
        name: "Kamitori & Shimotori Arcades",
        blurb: "Kumamoto's liveliest covered shopping streets — drugstores, bookshops, Kumamon goods, and izakaya alleys, all sheltered from rain and sun.",
      },
      "kumamoto-kokutei": {
        name: "Kokutei Ramen (Main Store)",
        blurb: "A venerable name in Kumamoto ramen — tonkotsu broth topped with black garlic oil, best with a raw egg yolk stirred in. Walkable from Kumamoto Station.",
        tips: "Queues form at mealtimes; arrive around the 10:30 opening or mid-afternoon.",
      },
      "kumamoto-katsuretsutei": {
        name: "Katsuretsutei Tonkatsu",
        blurb: "Kumamoto's famed tonkatsu house — Kurobuta pork loin fried crisp and juicy, with sesame and miso sauces each claiming fans. Rice and cabbage refill free.",
        tips: "Weekend mealtime waits start at 30 minutes — put your name down, then browse Shimotori arcade.",
      },
      "kumamoto-ikinari-dango": {
        name: "Ikinari Dango Shop (Josaien)",
        blurb: "Kumamoto's homey sweet: sweet potato and red bean wrapped in mochi dough and steamed. Sold fresh in Josaien — perfect with tea after the castle.",
        tips: "Best eaten hot; Josaien also has horse-meat croquettes and other snacks to try alongside.",
      },
      "kumamoto-kusasenri": {
        name: "Kusasenri Meadow",
        blurb: "A vast grassland below Aso's peaks — rain pools mirror the sky, horses graze, and smoking Mount Nakadake looms behind. Kyushu's best postcard scenery.",
        tips: "Horseback rides loop the meadow; the Aso Volcano Museum across the road is a good bad-weather backup.",
      },
      "kumamoto-nakadake-crater": {
        name: "Mount Nakadake Crater",
        blurb: "One of the world's few active craters you can drive right up to — the jade crater lake and sulfur steam overwhelm. If the weather cooperates, go.",
        tips: "The road closes when gas levels or eruption alerts rise — check Aso Park Road status that morning; asthmatics should keep clear of the rim.",
      },
      "kumamoto-daikanbo": {
        name: "Daikanbo Lookout",
        blurb: "The highest point on Aso's outer rim, taking in the caldera and the reclining-Buddha silhouette of the Five Peaks. Cold dawns can bring a sea of clouds.",
        tips: "Driving is easiest; for the sea of clouds arrive before sunrise, ideally on cold late-autumn or winter mornings.",
      },
      "kumamoto-aso-shrine": {
        name: "Aso Shrine & Monzen-machi Springs",
        blurb: "The first shrine of Higo, its grand gate restored after the quake. The street outside bubbles with spring-water fountains, snack shops, and horse-meat buns.",
      },
      "kumamoto-imakin": {
        name: "Imakin Shokudo Akaushi Bowl",
        blurb: "A century-old diner in Uchinomaki Onsen — seared Aso red beef over rice with a soft egg, rich yet light. The most celebrated meal in the Aso area.",
        tips: "Weekend lunch waits of one to two hours are normal — sign the list, then stroll the onsen town until your turn.",
      },
      "kumamoto-takachiho-gorge": {
        name: "Takachiho Gorge Boat Ride",
        blurb: "A basalt-columned gorge carved from Aso lava — row beneath the plunging Manai Falls for Kyushu's most dreamlike scene. Same route as Aso, easy to combine.",
        tips: "Boat slots are limited — reserve online in advance; it's about 2 hours' drive from Kumamoto, so start early. The walking trail is superb even without rowing.",
      },
      "kumamoto-takachiho-nagomi": {
        name: "Takachiho Beef Restaurant Nagomi",
        blurb: "A JA-run house for Takachiho beef, a Wagyu Olympics champion, serving yakiniku and steak at farm-gate prices. Astonishing value after the gorge.",
        tips: "It's inside the Gamadase Market; lunch gets busy — arrive before 11:30 or call ahead about the wait.",
      },
    },
  },

  kagoshima: {
    name: "Kagoshima & Sakurajima",
    areas: {
      "鹿兒島市區": "Kagoshima City",
      "櫻島": "Sakurajima",
      "指宿": "Ibusuki",
    },
    hubs: {
      "kagoshima-chuo-sta": "Kagoshima-Chuo Station",
      "kagoshima-tenmonkan": "Tenmonkan",
      "kagoshima-sakurajima-port": "Sakurajima Port",
      "kagoshima-ibusuki-sta": "Ibusuki Station",
    },
    souvenirs: [
      "Karukan (steamed yam-and-rice-flour cakes; Akashiya is the classic maker, often in bun form)",
      "Karaimo sweets (sweet potato cakes from Festivalo and others — Kagoshima is sweet-potato dessert heaven)",
      "Shirokuma goods (merchandise and cup versions of Tenmonkan Mujyaki's shirokuma shaved ice, even in convenience stores)",
      "Chiran tea (Kagoshima green tea from Chiran in Minamikyushu; teabag gift boxes travel easily)",
      "Satsuma-age (fried fish cakes; brands like Tsukiagean offer vacuum-sealed packs)",
    ],
    pois: {
      "kagoshima-senganen": {
        name: "Senganen Garden & Shoko Shuseikan",
        blurb: "The Shimazu lords' garden, borrowing Sakurajima as its hill and Kinko Bay as its pond. The adjacent Shoko Shuseikan factory is a World Heritage site.",
        tips: "The sightseeing loop bus goes straight there; try jambo mochi, the charcoal-grilled dumplings on twin sticks, inside the garden.",
      },
      "kagoshima-shiroyama": {
        name: "Shiroyama Observatory",
        blurb: "A 107-meter hilltop deck framing the city, Kinko Bay, and Sakurajima in one shot — the postcard view. Saigo Takamori's last battlefield is on the hill.",
        tips: "Evening is best value — watch the sunset redden Sakurajima, then stay for city lights; the loop bus stops right there.",
      },
      "kagoshima-ishin-furusato": {
        name: "Museum of the Meiji Restoration",
        blurb: "A museum starring Saigo Takamori and Okubo Toshimichi, with a robot theater that makes the Restoration vivid. It stands where both men were born.",
        tips: "The basement theater show runs about 25 minutes per session — check times on entry and plan around it; a top rainy-day pick.",
      },
      "kagoshima-mujyaki": {
        name: "Tenmonkan Mujyaki Shirokuma Ice",
        blurb: "The birthplace of shirokuma shaved ice — a milky ice mountain with fruit arranged into a polar bear face, drenched in house syrup. Worth the summer queue.",
        tips: "The full-size shirokuma is enormous — share it or order the smaller baby size.",
      },
      "kagoshima-adimori": {
        name: "Kurobuta Shabu-shabu Adimori",
        blurb: "The famed home of kurobuta shabu-shabu — thin Berkshire pork turns sweet and tender in seconds, and finishing noodles soak up all the goodness.",
        tips: "Book ahead for dinner; lunch offers more affordable kurobuta tonkatsu set meals.",
      },
      "kagoshima-yataimura": {
        name: "Kagoshima Yatai Village",
        blurb: "Tiny food stalls beside Chuo Station — kurobuta skewers, chicken sashimi, and shochu bars with a few counter seats each. Squeeze in for a true Satsuma night.",
        tips: "Most stalls open in the evening — great as a second stop after dinner; popular ones fill fast on weekends, so grab any open seat.",
      },
      "kagoshima-terukuni": {
        name: "Terukuni Shrine",
        blurb: "A shrine to the enlightened lord Shimazu Nariakira — its great white torii is a downtown landmark against Shiroyama's green. An easy stroll from Tenmonkan.",
      },
      "kagoshima-tenmonkan-arcade": {
        name: "Tenmonkan Arcade",
        blurb: "Southern Kyushu's largest covered shopping district — drugstores, satsuma-age shops, and izakaya, shrugging off the volcanic ash. Kagoshima's nightlife hub.",
      },
      "kagoshima-sakurajima-yunohira": {
        name: "Sakurajima Ferry & Yunohira Observatory",
        blurb: "A 15-minute ferry lands you on an active volcano. Yunohira is the highest point open to visitors — raw volcanic slopes up close, sweeping views back to town.",
        tips: "Ferries run about every 15 minutes, 24 hours a day, no booking needed; island transit is sparse, so connect to the Sakurajima Island View loop bus.",
      },
      "kagoshima-sakurajima-ashiyu": {
        name: "Sakurajima Lava Park Foot Bath",
        blurb: "A free, 100-meter natural hot-spring foot bath on the lava shore — soak your feet gazing across Kinko Bay to the city while waiting for the ferry.",
        tips: "Bring a small towel to dry your feet; the lava shore promenade shows fields left by the 1914 eruption.",
      },
      "kagoshima-sakurajima-megumikan": {
        name: "Sakurajima Roadside Station Megumikan",
        blurb: "A farm-market diner by the port cooking with the world's smallest mandarins and largest radishes. Komikan soft-serve and udon star; best volcano souvenirs too.",
        tips: "Closed Mondays; the dining room wraps up early in the afternoon, so come at lunch for a proper meal.",
      },
      "kagoshima-ibusuki-saraku": {
        name: "Ibusuki Sand Bath Hall Saraku",
        blurb: "A rare natural sand bath — in a yukata, you're buried in geothermally heated black sand by the shore. Ten minutes brings a full-body sweat and deep bliss.",
        tips: "Take the Ibusuki no Tamatebako sightseeing express from Kagoshima-Chuo (about 50 minutes) — reserve early; add the indoor baths to rinse off the sand.",
      },
      "kagoshima-tosenkyo-somen": {
        name: "Tosenkyo Flowing Somen Noodles",
        blurb: "The birthplace of rotating nagashi somen — noodles circle a water channel at your table in a cool spring-fed gorge, with carp dishes on the side.",
        tips: "It's at the foot of Mount Kaimon, about 15 minutes by car from Ibusuki Station; summer holiday lunchtimes are packed, so go off-peak.",
      },
    },
  },

  yakushima: {
    name: "Yakushima",
    areas: {
      "宮之浦・北部": "Miyanoura & the North",
      "安房・南部": "Anbo & the South",
    },
    hubs: {
      "yakushima-miyanoura": "Miyanoura Port",
      "yakushima-anbo": "Anbo",
      "yakushima-onoaida": "Onoaida",
    },
    souvenirs: [
      "Yakusugi cedar crafts (chopsticks, coasters, and ornaments carved from millennium-old cedar, still scented of forest)",
      "Tankan products (juice, jam, and dried fruit from the island's famed citrus, in season winter to spring)",
      "Flying fish products (smoked and overnight-dried tobiuo — take the island diners' specialty home)",
      "Yakushima tea (pesticide-free sencha from growers like Hachimanju Tea Garden, sweetened by mountain mists)",
    ],
    pois: {
      "yakushima-shiratani-unsuikyo": {
        name: "Shiratani Unsuikyo Ravine",
        blurb: "The mossy ravine that inspired Princess Mononoke — boulders, streams, and ancient cedars wrapped in green. Taiko-iwa rock overlooks a sea of forest.",
        tips: "The Taiko-iwa round trip takes 4–6 hours; hiking boots and rain gear are essential. Buses run from Miyanoura to the trailhead; the drive up is narrow, so go slow.",
      },
      "yakushima-jomon-sugi": {
        name: "Jomon Sugi Cedar Hike",
        blurb: "The king of Yakushima's cedars, thousands of years old — a 10-hour pilgrimage along old logging rails. Standing before it resets your sense of time.",
        tips: "Start at 4–5am. From March to November the Arakawa trailhead is restricted — take the shuttle from the Yakusugi Museum. High fitness required; bring a headlamp, boots, and trail food.",
      },
      "yakushima-oko-no-taki": {
        name: "Oko-no-taki Falls",
        blurb: "An 88-meter cascade on Japan's top-100 waterfall list — in high flow, spray soaks you at the pool's edge. The most dramatic stop on the southwest drive.",
        tips: "The Seibu Rindo forest road just north is narrow and twisting with monkeys and deer about — pass carefully; flow is mightiest after rain.",
      },
      "yakushima-senpiro-no-taki": {
        name: "Senpiro-no-taki Falls",
        blurb: "A waterfall sliding 60 meters down one vast granite slab into a V-shaped gorge. Its name evokes a cliff wide enough for a thousand people's linked arms.",
      },
      "yakushima-sugi-museum": {
        name: "Yakusugi Museum",
        blurb: "An introduction to Yakushima's cedars — touch real growth rings and learn why these trees live for millennia. Ideal homework the day before the big hike.",
        tips: "The Arakawa trailhead shuttle departs from the museum — drop by the day before to confirm times and buy tickets.",
      },
      "yakushima-hirauchi-onsen": {
        name: "Hirauchi Seaside Onsen",
        blurb: "A wild onsen that surfaces only for about two hours around low tide — soak in natural rock pools a step from the sea. Mixed bathing, towels only, untamed.",
        tips: "Check the tide table and time your visit to low tide; changing is behind the rocks only — nearby Yudomari Onsen is an alternative if you'd rather not.",
      },
      "yakushima-nagata-inakahama": {
        name: "Nagata Inakahama Beach",
        blurb: "A golden beach of weathered granite sand, the North Pacific's largest loggerhead turtle nesting ground. Sunsets here are quietly stunning.",
        tips: "Turtle-watching tours require advance sign-up; from May to July the beach is closed at night, but daytime strolls are fine.",
      },
      "yakushima-shiosai": {
        name: "Shiosai (Kubiore Saba)",
        blurb: "A long-standing Miyanoura diner famous for kubiore saba — mackerel neck-snapped at catch, served as springy sashimi found only here. Fried flying fish too.",
      },
      "yakushima-yakudon": {
        name: "Yakudon (Flying Fish)",
        blurb: "An Anbo udon and local-food spot — whole flying fish arrive deep-fried, fins and all, with udon in flying-fish broth. The standard hikers' refuel.",
      },
      "yakushima-issou-coffee": {
        name: "Issou Coffee Roastery",
        blurb: "A house-roasting coffee shop in the northern fishing village of Issou, in a renovated old home. The best rest stop on a round-island drive.",
      },
    },
  },

  miyazaki: {
    name: "Miyazaki & Nichinan",
    areas: {
      "青島・日南海岸": "Aoshima & Nichinan Coast",
      "日南・飫肥": "Nichinan & Obi",
      "宮崎市區": "Miyazaki City",
    },
    hubs: {
      "miyazaki-sta": "Miyazaki Station",
      "miyazaki-aoshima-sta": "Aoshima Station",
      "miyazaki-obi-sta": "Obi Station (Nichinan)",
    },
    souvenirs: [
      "Ripe mango sweets (jellies, cookies, and other treats made with Miyazaki's famed mangoes)",
      "Hyuganatsu products (jelly, cookies, and juice from Miyazaki's unique hyuganatsu citrus)",
      "Cheese manju (flaky pastry wrapped around a whole block of cheese, a local Miyazaki favorite)",
      "Charcoal-grilled jitokko chicken (vacuum-packed Miyazaki specialty chicken, a great drinking companion)",
    ],
    pois: {
      "miyazaki-aoshima-shrine": {
        name: "Aoshima Shrine & Devil's Washboard",
        blurb: "A whole subtropical islet forms the shrine grounds — cross the wave-cut Devil's Washboard rocks to a palm grove hung with matchmaking ema plaques.",
        tips: "The washboard rocks show best at low tide, so check the tide table first; tossing the musubi paper charms on the island is great fun.",
      },
      "miyazaki-aoshimaya": {
        name: "Aoshimaya Seafood Dining",
        blurb: "The market hall at the Aoshima approach — Miyazaki staples like chilled hiyajiru rice, charcoal chicken, and seafood bowls, plus a full souvenir floor.",
      },
      "miyazaki-horikiri-pass": {
        name: "Horikiri Pass Coast Lookout",
        blurb: "The classic Nichinan Coast viewpoint, on a palm-lined bend where the Pacific and the endless Devil's Washboard unfurl below. Stop and catch the sea breeze.",
        tips: "The mango soft-serve at Michi-no-Eki Phoenix is famous; reachable by car or the Nichinan coastal bus.",
      },
      "miyazaki-udo-jingu": {
        name: "Udo Shrine",
        blurb: "A rare shrine whose main hall hides in a sea cave beneath the cliffs, above crashing waves. Toss an undama pebble into the turtle rock to win your wish.",
        tips: "Throw the undama with your left hand for men, right for women; the cliffside path rises and falls, so wear good shoes.",
      },
      "miyazaki-sun-messe": {
        name: "Sun Messe Nichinan Moai",
        blurb: "Seven moai, replicated with Easter Island's official blessing, face the deep-blue Pacific — surreal from every angle, with grassy photo-op slopes.",
        tips: "Closed Wednesdays (open if a holiday); it's just 10 minutes from Udo Shrine — pair them in one morning.",
      },
      "miyazaki-obi-castle": {
        name: "Obi Castle Town",
        blurb: "The Ito clan's castle town — mossy walls, cedar-lined lanes, and samurai houses beautifully kept. Kyushu's little Kyoto, quiet and made for strolling.",
        tips: "The tabearuki snack-voucher booklet is the best way to graze — thick rolled omelet and obiten fish cakes are musts.",
      },
      "miyazaki-obiten-kura": {
        name: "Obiten Kura",
        blurb: "The old house of obiten — fish paste blended with tofu and brown-sugar miso, fried soft and gently sweet. Right in the castle town for a stroll-through lunch.",
      },
      "miyazaki-miyachiku": {
        name: "Miyachiku Teppanyaki",
        blurb: "Miyazaki beef keeps winning the Wagyu Olympics, and this co-op-run teppanyaki is the definitive place to eat it — A5 wagyu seared before your eyes.",
        tips: "Book ahead for dinner; lunch sets are far friendlier on the wallet if you're on a budget.",
      },
      "miyazaki-karamen": {
        name: "Karamen-ya Masumoto",
        blurb: "The flagship of Miyazaki's soul-food karamen — konjac noodles in garlicky broth with chives, egg, and chili from mild to 25x. The local after-drinks ritual.",
        tips: "First-timers should stick to medium heat or below on the original karamen; you can swap konjac noodles for wheat or udon.",
      },
      "miyazaki-fruit-ono": {
        name: "Fruit Ono ANNEX",
        blurb: "A dessert bar run by a venerable fruit shop, piling ripe Miyazaki mango onto parfaits with abandon — a fragrance you won't forget. Perfect downtown treat.",
        tips: "Ripe mango season peaks from late spring to early summer; out of season, the seasonal fruit parfaits are just as good.",
      },
    },
  },

  beppu: {
    name: "Beppu & Yufuin",
    areas: {
      "鐵輪・龜川": "Kannawa & Kamegawa",
      "別府站周邊": "Around Beppu Station",
      "由布院": "Yufuin",
    },
    hubs: {
      "beppu-sta-beppu": "Beppu Station",
      "beppu-kannawa-bus": "Kannawa Bus Stop",
      "beppu-sta-kamegawa": "Kamegawa Station",
      "beppu-sta-yufuin": "Yufuin Station",
    },
    souvenirs: [
      "Jigokumushi pudding (Okamotoya's famed custard pudding steamed over hell-spring vapors)",
      "Yunohana bath salts (natural mineral bath powder harvested at the Myoban Onsen yunohana huts)",
      "Kabosu products (juice, seasonings, and candies of Oita's signature kabosu citrus)",
      "Zabon-zuke (candied pomelo peel, a nostalgic sweet of Beppu's onsen streets)",
      "Beppu bamboo crafts (traditional woven bamboo pieces, a nationally designated craft)",
    ],
    pois: {
      "beppu-umi-jigoku": {
        name: "Umi Jigoku (Sea Hell)",
        blurb: "The star of the hell circuit: a cobalt pool too beautiful to be 98-degree boiling water, roaring with steam. Hot-spring lilies and steamed pudding await too.",
        tips: "Buy the combined seven-hells ticket if you plan to see several; Oniishibozu Jigoku is right next door.",
      },
      "beppu-chinoike-jigoku": {
        name: "Chinoike Jigoku (Blood Pond Hell)",
        blurb: "Japan's oldest natural hell — iron-rich waters stain the whole pond a deep opaque red beneath rising steam. The shop's blood-pond ointment is an insider buy.",
        tips: "Tatsumaki Jigoku is adjacent — catch its geyser, which erupts roughly every 30–40 minutes.",
      },
      "beppu-jigokumushi-kobo": {
        name: "Jigokumushi Kobo Kannawa",
        blurb: "Kannawa's signature experience: steam your own seafood, vegetables, and eggs over 98-degree onsen vapor. Minimal seasoning, surprisingly delicious results.",
        tips: "On weekend lunchtimes take a number first, then pass the wait at the nearby foot baths.",
      },
      "beppu-takegawara-onsen": {
        name: "Takegawara Onsen",
        blurb: "A wooden bathhouse from 1879, the symbol of Beppu's onsen streets. In the famous sand bath, attendants bury you in warm black sand for ten blissful minutes.",
        tips: "Sand baths are same-day ticket, first come first served — grab a number early on weekends; bring or buy your own towels.",
      },
      "beppu-beach-sand-bath": {
        name: "Beppu Beach Sand Bath",
        blurb: "An open-air sand bath in the beachside pines — don a yukata, lie back, and let staff heap warm sand over you as the waves keep time. Seaside-only bliss.",
        tips: "About 10 minutes' walk from Kamegawa Station; the sand bath lasts around 15 minutes, followed by an indoor soak to rinse off.",
      },
      "beppu-toyotsune": {
        name: "Toyotsune Main Store",
        blurb: "A Meiji-era diner serving a bargain deluxe tendon piled with crisp jumbo prawns in sweet-savory sauce. Oita's soul food toriten is the other must-order.",
      },
      "beppu-yunotsubo-kaido": {
        name: "Yunotsubo Street",
        blurb: "Yufuin's main street from the station toward Lake Kinrin, lined with crafts and snacks under Mount Yufu. Grab an award-winning croquette and stroll.",
        tips: "Most shops close around 5pm — schedule this for early afternoon, not evening.",
      },
      "beppu-kinrinko": {
        name: "Lake Kinrin",
        blurb: "A curious little lake fed by hot springs and cold water alike, wreathed in dreamy mist on cold mornings — Yufuin's defining image. The loop takes 15 minutes.",
        tips: "For the mist, arrive around sunrise on a cold autumn or winter morning — easiest if you stay overnight.",
      },
      "beppu-b-speak": {
        name: "B-speak Roll Cake",
        blurb: "The patisserie of famed ryokan Sanso Murata — the P Roll pairs plush sponge with light, barely sweet cream. One cake for twenty-plus years, Yufuin's icon.",
        tips: "Whole P Rolls often sell out before noon — make it your first stop in Yufuin or reserve by phone.",
      },
      "beppu-shitanyu": {
        name: "Shitan-yu Bathhouse",
        blurb: "A thatched-roof public bath on Lake Kinrin's shore — drop coins in the box and slip into a half-open-air stone tub. Yufuin onsen at its most unvarnished.",
        tips: "It's mixed bathing with no lockers — if that's a concern, just admire it from outside; early mornings are quietest.",
      },
      "beppu-kogetsu": {
        name: "Kogetsu Reimen",
        blurb: "The defining house of Beppu reimen: chewy thick noodles in bonito broth with kimchi and chashu, gloriously refreshing after a soak. A hometown flavor.",
      },
      "beppu-toyoken": {
        name: "Restaurant Toyoken",
        blurb: "Founded in 1926, the birthplace of toriten, Oita's beloved chicken tempura — feather-light and crisp with vinegared soy and mustard. One bite explains it.",
        tips: "Order the original toriten set; dipping in vinegared soy sauce with a dab of mustard is the local way. Expect queues at peak mealtimes.",
      },
      "beppu-yufuin-milch": {
        name: "Milch Yufuin Main Store",
        blurb: "A hugely popular Yufuin sweets shop — its half-baked Käsekuchen cheesecake comes warm from the oven, rich and silky. Top pick along Yunotsubo Street.",
        tips: "The cheesecake comes warm for eating now or chilled — the textures differ; lines are common but move fast.",
      },
    },
  },
};
