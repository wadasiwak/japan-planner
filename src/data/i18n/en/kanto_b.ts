import type { CityTranslation } from "../types";

// 英文內容翻譯包:關東 B(川越/橫濱/鎌倉/箱根/熱海/河口湖/輕井澤/草津/日光)。
export const cities: Record<string, CityTranslation> = {
  kawagoe: {
    name: "Kawagoe",
    areas: {
      "一番街・冰川神社": "Ichibangai & Hikawa Shrine",
      "喜多院・大正浪漫": "Kitain & Taisho Roman",
    },
    hubs: {
      "kawagoe-sta-kawagoe": "Kawagoe Station",
      "kawagoe-sta-hon-kawagoe": "Hon-Kawagoe Station",
      "kawagoe-ichibangai-hub": "Ichibangai Street",
    },
    souvenirs: [
      "Kameya sweet-potato sweets (a Kawagoe institution since 1783; the imo senbei crackers and imo natto candied sweet potato are Little Edo classics)",
      "Imo-koi (Kasho Umon's sweet-potato mochi bun — best eaten hot off the steamer, though boxed sets travel well too)",
      "COEDO craft beer (Kawagoe-born craft brand; the sweet-potato-brewed \"Beniaka\" is the most local pick)",
      "Imo kenpi (honey-glazed sweet-potato sticks; each Ichibangai shop has its own take, and they make light, easy gifts)",
    ],
    pois: {
      "kawagoe-ichibangai": {
        name: "Kurazukuri Old Town (Ichibangai)",
        blurb: "A street of black-tiled, thick-walled kura merchant houses — fireproof buildings rebuilt after a Meiji-era blaze — that define \"Little Edo\". Old shops and new mingle; grazing as you stroll is the way to do it.",
        tips: "Most shops open around 10:00 and close by about 17:00, so plan for daytime and finish before dusk.",
      },
      "kawagoe-toki-no-kane": {
        name: "Toki no Kane Bell Tower",
        blurb: "A wooden bell tower rising over an Ichibangai lane, tolling the hour for the castle town since the Edo period. The bell rings at 6, 12, 15 and 18 o'clock — with luck you'll catch it live.",
      },
      "kawagoe-kashiya-yokocho": {
        name: "Kashiya Yokocho (Penny Candy Alley)",
        blurb: "A stone-paved lane packed with some twenty Showa-retro candy shops — barley candy, rice crackers and Japan's longest fu-gashi brown-sugar puff. The air itself smells sweet; adults get giddier than the kids.",
      },
      "kawagoe-hikawa-shrine": {
        name: "Kawagoe Hikawa Shrine",
        blurb: "A matchmaking shrine enshrining married deities, where you fish for a sea-bream fortune slip with a tiny rod. In summer, two thousand Edo wind chimes fill the grounds — Kawagoe's most photogenic scene.",
        tips: "The daily \"enmusubi-dama\" charm is limited to 20 — line up early. The sea-bream fortunes can be fished all day.",
      },
      "kawagoe-kitain": {
        name: "Kitain Temple",
        blurb: "A famed Tendai temple holding rooms moved from Edo Castle — including the chamber where shogun Iemitsu was born — the castle's only surviving interiors. Browse the 500 Rakan statues and find the one that looks like you.",
      },
      "kawagoe-taisho-roman": {
        name: "Taisho Roman Yume Street",
        blurb: "A flagstone street of Western-style facade architecture, its Taisho-era modern air a neat contrast to Ichibangai's Edo black tiles. Fewer tourists, easy photos, and it links the station to the old town.",
      },
      "kawagoe-ogakiku": {
        name: "Ogakiku (Historic Unagi Restaurant)",
        blurb: "Kawagoe's signature eel house, two centuries old, serving charcoal-grilled unaju in a three-storey wooden building. Inland Kawagoe has always eaten river fish — eel is this town's heritage flavor.",
        tips: "Long queues form before opening on weekends — take a numbered ticket at the door, then wander nearby. On weekdays, arrive before 11:30.",
      },
      "kawagoe-imokoi-dango": {
        name: "Grilled Dango & Sweet Potato Treats on Ichibangai",
        blurb: "Kawagoe is sweet-potato country: steamed imo-koi buns, sweet-potato soft serve and soy-glazed dango line Ichibangai. Umon's hot imo-koi, chewy outside with rustic potato-and-red-bean filling, is the top street snack.",
      },
      "kawagoe-shimano-coffee": {
        name: "Shimano Coffee Taishokan",
        blurb: "An old kissaten on Taisho Roman Yume Street, its early-Showa Western building filled with the aroma of house-roasted coffee. The pudding and hotcakes are lovely old-school; time slows half a beat inside.",
      },
    },
  },

  yokohama: {
    name: "Yokohama",
    areas: {
      "港未來21": "Minato Mirai 21",
      "中華街・山手": "Chinatown & Yamate",
      "新橫濱": "Shin-Yokohama",
      "橫濱站": "Yokohama Station",
    },
    hubs: {
      "yokohama-sta-yokohama": "Yokohama Station",
      "yokohama-sta-sakuragicho": "Sakuragicho Station",
      "yokohama-sta-minatomirai": "Minatomirai Station",
      "yokohama-sta-motomachi": "Motomachi-Chukagai Station",
      "yokohama-sta-shin-yokohama": "Shin-Yokohama Station",
    },
    souvenirs: [
      "Kiyoken shumai bento (the century-old classic Shiumai Bento, sold at stations and department stores alike)",
      "Ariake Yokohama Harbour (boat-shaped chestnut-filled cakes, Yokohama's signature Western-style confection)",
      "Bashamichi Juban-kan Biscuits (retro Western-style sandwich cookies, a specialty of the old Bashamichi shop)",
    ],
    pois: {
      "yokohama-landmark-sky-garden": {
        name: "Yokohama Landmark Tower Sky Garden",
        blurb: "Yokohama's highest observatory at 296 m: from the 69th floor take in the Ferris wheel, the Bay Bridge and, on clear days, Mt. Fuji. The high-speed elevator makes it in about 40 seconds — your ears will notice.",
      },
      "yokohama-cosmo-world": {
        name: "Yokohama Cosmo World Ferris Wheel",
        blurb: "A free-entry, pay-per-ride amusement park by the harbor, whose giant Cosmo Clock 21 wheel stars in Yokohama's night skyline. One 15-minute loop puts all of Minato Mirai beneath your feet.",
      },
      "yokohama-red-brick": {
        name: "Yokohama Red Brick Warehouse",
        blurb: "Meiji-era bonded warehouses reborn as a craft-and-culture mall — the red brick against the harbor photographs beautifully from any angle. The plaza hosts year-round markets, the Christmas market most famously.",
        tips: "Arrive before dusk to browse from daylight into the evening illumination, then walk to Osanbashi Pier for the night view.",
      },
      "yokohama-cupnoodles-museum": {
        name: "Cupnoodles Museum Yokohama",
        blurb: "A hands-on museum honoring Momofuku Ando, inventor of instant ramen: design your own cup, pick the toppings and take home a one-of-a-kind Cup Noodle. Addictive fun for kids and adults alike.",
        tips: "Closed Tuesdays. When the My Cupnoodles workshop is busy you need a numbered ticket — grab one first, then see the exhibits.",
      },
      "yokohama-osanbashi": {
        name: "Osanbashi International Passenger Terminal",
        blurb: "A cruise terminal whose sweeping wooden deck arches like a whale's back; the rooftop plaza is free and open 24 hours. It's the best angle on Minato Mirai at night — Ferris wheel, Landmark Tower and Red Brick all in a row.",
      },
      "yokohama-noge-koji": {
        name: "Noge Koji Izakaya Alley",
        blurb: "A Showa-flavored dining quarter beside Sakuragicho Station, hundreds of tiny bars packed into the lanes — skewers and oden with beer. Tired of tourist food? Squeeze in at a counter with the locals.",
        tips: "Most places open in the evening, so come after 17:00; popular spots fill fast on Fridays and Saturdays.",
      },
      "yokohama-museum-of-art": {
        name: "Yokohama Museum of Art",
        blurb: "Minato Mirai's flagship museum, holding surrealist works by Dali and Magritte alongside modern art from Yokohama's port-opening era onward. The soaring grand staircase is an exhibit in itself.",
      },
      "yokohama-chinatown": {
        name: "Yokohama Chinatown",
        blurb: "Japan's largest Chinatown: six hundred shops crammed between ten gates, with steamed buns and soup dumplings to eat on the go. For a sit-down meal find an old Cantonese house, and pay respects at Kanteibyo temple en route.",
        tips: "Popular shops queue long on weekends — go on a weekday or right at opening. Street snacks beat set menus for value.",
      },
      "yokohama-yamashita-park": {
        name: "Yamashita Park",
        blurb: "A seaside park built on reclaimed land, with the retired liner Hikawa Maru moored right in front and benches facing the harbor. A perfect breezy stroll from Chinatown; the rose garden blooms in spring.",
      },
      "yokohama-motomachi-street": {
        name: "Motomachi Shopping Street",
        blurb: "A venerable shopping street that began serving foreign residents in the port-opening days, lined with homegrown Motomachi brands and old cafes. Elegant in mood — a world apart from Chinatown one street over.",
      },
      "yokohama-sankeien": {
        name: "Sankeien Garden",
        blurb: "The private garden of silk magnate Hara Sankei, who moved whole historic buildings here from Kyoto and Kamakura — a three-storey pagoda crowns the pond-side hill. Yokohama's most underrated Japanese landscape.",
        tips: "About 15 minutes by bus from Motomachi-Chukagai Station; loveliest in early cherry blossom and autumn foliage seasons.",
      },
      "yokohama-ramen-museum": {
        name: "Shin-Yokohama Ramen Museum",
        blurb: "A food theme park recreating a 1958 streetscape indoors, where famous ramen shops from across Japan gather. Every shop offers mini bowls, so even small appetites can manage two or three.",
        tips: "Order mini ramen to sample more shops; it slots perfectly into a Shinkansen transfer.",
      },
      "yokohama-kiyoken-honten": {
        name: "Kiyoken Main Shop",
        blurb: "Birthplace of Yokohama's famous shumai bento, on sale since 1928 and still Japan's best-selling station lunchbox. Upstairs the main shop also houses a Chinese restaurant and tea rooms.",
        tips: "The classic is the room-temperature \"old-fashioned shiumai\"; taking a bento to Yamashita Park for a picnic is peak Yokohama.",
      },
      "yokohama-katsuretsuan": {
        name: "Katsuretsuan Bashamichi Main Shop",
        blurb: "A tonkatsu house founded in 1927, its secret sauce over freshly fried crisp cutlets a taste memory for generations of Yokohama locals. An easy walk from the Red Brick Warehouse or Noge.",
      },
      "yokohama-uchiki-pan": {
        name: "Uchiki Pan Bakery",
        blurb: "Founded in 1888 and trained in English technique, this pioneer of Japanese shokupan bakes its signature \"England\" loaf fresh daily. Pick one up on a Motomachi stroll for tomorrow's breakfast.",
        tips: "Closed Mondays; the signature loaf often sells out by afternoon, so mornings are safest.",
      },
      "yokohama-bashamichi-juban": {
        name: "Bashamichi Juban-kan",
        blurb: "A retro cafe recreating a Meiji \"civilization and enlightenment\" era mansion — red brick, stained glass and gas lamps in full period mood. The parfaits and Biscuit sandwich cookies are the must-orders.",
        tips: "No reservation needed for the ground-floor tearoom; the souvenir biscuits are sold on the same floor.",
      },
      "yokohama-enokitei": {
        name: "Enokitei Main House",
        blurb: "A 1927 English-style house turned tearoom in the Yamate western-residence quarter — cherry pie and milk tea served in Showa-era rooms. The perfect rest stop after Harbor View Park and the historic houses.",
      },
    },
  },

  kamakura: {
    name: "Kamakura",
    areas: {
      "鎌倉站・北鎌倉": "Kamakura Station & Kita-Kamakura",
      "長谷・由比濱": "Hase & Yuigahama",
      "江之島・湘南海岸": "Enoshima & Shonan Coast",
    },
    hubs: {
      "kamakura-sta-kamakura": "Kamakura Station",
      "kamakura-sta-kitakamakura": "Kita-Kamakura Station",
      "kamakura-sta-hase": "Hase Station",
      "kamakura-sta-kokomae": "Kamakurakokomae Station",
      "kamakura-sta-enoshima": "Enoshima Station",
    },
    souvenirs: [
      "Hato Sable (Toshimaya's dove-shaped butter cookies, a century-old Kamakura classic)",
      "Kurumicco (Kamakura Beniya's caramel-walnut sandwich — so popular it often sells out, buy early)",
      "Chikara-mochi (Chikaramochiya's soft gyuhi mochi with red bean, an old Hase shop; keeps only a day or two)",
      "Kamakura Hangetsu (Kamakura Goro's half-moon cream wafers; matcha is the classic flavor)",
    ],
    pois: {
      "kamakura-tsurugaoka-hachimangu": {
        name: "Tsurugaoka Hachimangu Shrine",
        blurb: "Guardian shrine of the Kamakura shogunate, a warrior sanctuary built by Minamoto no Yoritomo. Walk the raised Dankazura approach up to the main hall, then turn for a view over the town all the way to the sea.",
      },
      "kamakura-komachi-dori": {
        name: "Komachi-dori Street",
        blurb: "The snacking street between the station and Hachimangu — shirasu rice crackers, matcha dango and croquettes one after another. With over two hundred shops, you can bag all your Kamakura souvenirs here too.",
        tips: "Walk the Dankazura approach on the way there and graze back along Komachi-dori — the smoothest route.",
      },
      "kamakura-hokokuji": {
        name: "Hokokuji Temple (Bamboo Temple)",
        blurb: "A Rinzai Zen temple famed for its grove of nearly two thousand moso bamboo blotting out the sky. A bowl of matcha at the tea seats deep in the grove is Kamakura's most refined half hour.",
        tips: "About 10 minutes by bus from Kamakura Station's east exit; arrive at opening to have the bamboo almost to yourself.",
      },
      "kamakura-zeniarai-benten": {
        name: "Zeniarai Benten Shrine",
        blurb: "A curious shrine where washing money in the cave spring is said to multiply your fortune — you enter through a torii tunnel bored straight through the rock. Bring coins and bills for a wash.",
      },
      "kamakura-engakuji": {
        name: "Engakuji Temple",
        blurb: "A great Rinzai Zen headquarters beside Kita-Kamakura Station with an imposing sanmon gate — also the setting of Soseki's novel \"The Gate\". Its halls among the cedars blaze with autumn color, yet crowds stay thin.",
      },
      "kamakura-daibutsu": {
        name: "Great Buddha of Kamakura (Kotoku-in)",
        blurb: "An 11-meter open-air Amida Buddha that has sat through tsunami and earthquakes for 750 years. For a small fee you can even step inside the statue and see the traces of its medieval casting.",
      },
      "kamakura-hasedera": {
        name: "Hasedera Temple",
        blurb: "The \"flower temple\" housing a nine-meter wooden Kannon, its terrace commanding the whole Yuigahama coastline. The June hydrangea path is the most coveted view in all Kamakura.",
        tips: "During June's hydrangea season you need a numbered ticket — go early on a weekday to be safe.",
      },
      "kamakura-yuigahama": {
        name: "Yuigahama Beach",
        blurb: "A long sandy beach within walking distance of central Kamakura — a lively Shonan swimming spot in summer, a sunset stroll the rest of the year. Surfers and seabirds outnumber the tourists.",
      },
      "kamakura-chikara-mochiya": {
        name: "Chikaramochiya",
        blurb: "A 300-year-old wagashi shop beside Goryo Shrine; its signature Gongoro chikara-mochi wraps mochi in silky red-bean paste, plain in just the right way. An energy stop on a Hase stroll.",
      },
      "kamakura-kokomae-crossing": {
        name: "Kamakurakokomae Railway Crossing",
        blurb: "The legendary crossing from the Slam Dunk opening: the Enoden train rolls past with the Shonan sea behind. First stop on any anime pilgrimage — wait for a train to frame your shot.",
        tips: "Crowds pack a small corner — don't stand in the road or block residents; early morning is quietest.",
      },
      "kamakura-enoshima-shrine": {
        name: "Enoshima Shrine",
        blurb: "An island shrine to Benzaiten, its stone steps stringing together the three sanctuaries of Hetsumiya, Nakatsumiya and Okutsumiya. Not up for the climb? The island has paid escalators.",
      },
      "kamakura-enoshima-sea-candle": {
        name: "Enoshima Sea Candle",
        blurb: "An observation lighthouse in the Samuel Cocking Garden with 360-degree views of the Shonan coast — on clear days Mt. Fuji floats above Sagami Bay. Most romantic at sunset.",
        tips: "The winter \"Shonan no Hoseki\" illumination is famous across Kanto — climb at dusk to catch sunset and the lights in one go.",
      },
      "kamakura-benzaiten-nakamise": {
        name: "Benzaiten Nakamise Street",
        blurb: "The approach street at Enoshima's entrance: fresh-grilled rice crackers, meoto manju buns and the essential raw shirasu bowl. The aromas hit the moment you cross Benten Bridge — eat up before the climb.",
      },
      "kamakura-tobiccho": {
        name: "Shirasu-ya Tobiccho Main Shop",
        blurb: "Enoshima's queue king for shirasu cuisine — the signature donburi piles raw whitebait and tempura into a small mountain. Fresh straight from the harbor, and worth planning lunch around.",
        tips: "Take a number at the machine, then tour Enoshima Shrine while you wait; no raw shirasu during the Jan–Mar fishing ban.",
      },
      "kamakura-caraway": {
        name: "Caraway Curry House",
        blurb: "A European-style curry specialist open since 1972 — a rich sauce simmered for days over a generous plate of rice, at friendly prices. The taste Kamakura locals grew up on from their student days.",
        tips: "Closed Mondays; portions are hearty, so light eaters should ask for less rice.",
      },
      "kamakura-mushinan": {
        name: "Mushinan",
        blurb: "An old-house sweets parlor whose gate sits right across the Enoden tracks from Wadazuka Station — mame-kan and matcha shiratama savored over the garden. Trains gliding past the veranda: the most Kamakura scene there is.",
        tips: "Closed Thursdays. One Enoden stop from Kamakura Station to Wadazuka, or stroll along the tracks.",
      },
      "kamakura-cafe-sakanoshita": {
        name: "Cafe Sakanoshita",
        blurb: "An old-house cafe in the lanes near Hase's shore, where wooden windows, aged furniture and fresh-baked pancakes all carry the flavor of time. A location from the drama \"Second to Last Love\" — fans will know the veranda.",
        tips: "The signature pancakes are baked to order and take 20+ minutes; skip the midday rush on weekends.",
      },
    },
  },

  hakone: {
    name: "Hakone",
    areas: {
      "蘆之湖・大涌谷": "Lake Ashi & Owakudani",
      "強羅・仙石原": "Gora & Sengokuhara",
      "箱根湯本": "Hakone-Yumoto",
    },
    hubs: {
      "hakone-sta-yumoto": "Hakone-Yumoto Station",
      "hakone-sta-gora": "Gora Station",
      "hakone-togendai": "Togendai (Lake Ashi)",
      "hakone-moto-hakone": "Moto-Hakone Port",
    },
    souvenirs: [
      "Yumochi (Chimoto's yuzu-scented mochi studded with yokan cubes, Hakone-Yumoto's signature confection)",
      "Owakudani black egg goods (eat one kuro-tamago for seven extra years of life; the merch is Owakudani-only)",
      "Yosegi zaiku marquetry (Hakone's traditional wood mosaic craft — coasters and puzzle boxes make great gifts)",
      "Onsen manju (steamed fresh along the Hakone-Yumoto shopping street; great eaten warm as you stroll)",
    ],
    pois: {
      "hakone-owakudani": {
        name: "Owakudani Valley",
        blurb: "A volcanic hell-valley where sulfurous white steam pours endlessly from fissures — the ropeway crossing directly above is the biggest thrill. The famous black eggs, boiled jet-black in the hot springs, are said to add seven years of life apiece.",
        tips: "When volcanic activity rises, the ropeway and grounds may close at short notice — check the Owakudani park website the morning you go.",
      },
      "hakone-pirate-ship": {
        name: "Lake Ashi Pirate Sightseeing Ship",
        blurb: "A gleaming golden pirate-ship cruiser sailing about 25 minutes between Togendai and Moto-Hakone. On clear days the deck serves up Lake Ashi, the torii gate and Mt. Fuji all at once.",
        tips: "Ropeway to Togendai, board there and disembark at Moto-Hakone for the smoothest route; the paid special cabin is quieter with better views.",
      },
      "hakone-jinja": {
        name: "Hakone Shrine & Peace Torii",
        blurb: "A famed Kanto shrine deep in a cedar-lined approach, long revered for luck and travel safety. The Peace Torii standing in the lake, framed against Mt. Fuji, is Hakone's most classic photo.",
        tips: "Queues form for photos at the Peace Torii — often 30+ minutes in high season; come right at opening.",
      },
      "hakone-open-air-museum": {
        name: "Hakone Open-Air Museum",
        blurb: "Japan's first open-air museum, its sculptures scattered across valley lawns; the Picasso pavilion and the stained-glass \"Symphonic Sculpture\" tower are the favorites. Strolling and art-viewing at once — never dull.",
        tips: "There's a free hot-spring footbath inside — soak while you look at sculpture. Rainy days still work thanks to the Picasso pavilion and other indoor galleries.",
      },
      "hakone-pola-museum": {
        name: "Pola Museum of Art",
        blurb: "A glass museum hidden in the Sengokuhara forest, famed for Impressionist holdings from Monet to Renoir — the architecture itself performs with light and leaf shadow. The forest trail outside is gorgeous too.",
        tips: "About 15 minutes from Gora on the sightseeing loop bus; return buses are infrequent, so note the timetable first.",
      },
      "hakone-gora-park": {
        name: "Gora Park",
        blurb: "A French-style garden terraced into the hillside, unfolding fountains, a rose garden and a tropical greenhouse. Try glassblowing or a tearoom matcha — an unhurried buffer stop in Gora.",
      },
      "hakone-yumoto-shotengai": {
        name: "Hakone-Yumoto Shopping Street",
        blurb: "The onsen street stretching from the station, lined with hot-spring manju, fishcakes and yosegi marquetry. Everyone passing to and from Odawara stocks up on souvenirs here — perfect for snacking as you go.",
        tips: "Forty minutes before your train back is enough for a souvenir sweep; the fresh-steamed onsen manju are best eaten hot.",
      },
      "hakone-tozan-ropeway": {
        name: "Hakone Tozan Railway & Ropeway",
        blurb: "The mountain railway switchbacks up the gorge, then hands you to the Sounzan ropeway soaring over the crater. In Hakone, the transport itself is the signature experience.",
        tips: "The Hakone Free Pass bundles the railway, ropeway and pirate ship — best value; run the golden route clockwise.",
      },
      "hakone-tenzan": {
        name: "Tenzan Tohji-kyo Day-Trip Onsen",
        blurb: "A classic day-use onsen in the Yumoto hills, its open-air baths built along the stream in wild-river style — among Hakone's best in both water and mood. Afterwards, sprawl in the tatami lounge and do nothing.",
        tips: "Take the 100-yen onsen loop bus route B from Yumoto Station; bring a towel or buy one there.",
      },
      "hakone-amazake-chaya": {
        name: "Amazake Chaya Teahouse",
        blurb: "A thatched teahouse on the old Tokaido stone road, in business four hundred years: the alcohol-free rice-koji amazake is warm and mellow, the charcoal-grilled chikara-mochi wonderfully fragrant. An Edo traveler's rest, unchanged.",
        tips: "Take the Hakone Tozan bus route K to the Amazake-chaya stop; with good legs, walk the old stone road down to Moto-Hakone.",
      },
      "hakone-hatsuhana": {
        name: "Hatsuhana Soba Main Shop",
        blurb: "A famed jinenjo soba house by Yumoto bridge — the noodles are made without a drop of water, only mountain yam and egg, silky and rich. The signature Teijo soba with grated yam is the classic Yumoto lunch.",
        tips: "Weekend queues run an hour plus — arrive before opening, or divert to the annex a few steps away.",
      },
      "hakone-ginkatsutei": {
        name: "Tamura Ginkatsutei",
        blurb: "Birthplace of the famous \"tofu katsu-ni\": silken tofu stuffed with minced pork, fried, then simmered in a clay pot with broth and egg — light yet perfect over rice. Gora's first-choice lunch.",
        tips: "At peak times write your name on the list at the door, then loop through Gora Park and come back just in time.",
      },
      "hakone-bakery-table": {
        name: "Bakery & Table Hakone",
        blurb: "A lakeside bakery by Moto-Hakone port — fresh bread to go on the ground floor, cafe and restaurant seats facing Lake Ashi above. There's even footbath seating out front: bread in hand, feet in hot water, lake in view.",
        tips: "Best value: buy bread downstairs and take the footbath seats out front — no waiting for a restaurant table.",
      },
    },
  },

  atami: {
    name: "Atami",
    areas: {
      "銀座・海岸": "Ginza & Seaside",
      "熱海駅周邊": "Around Atami Station",
    },
    hubs: {
      "atami-sta-atami": "Atami Station",
      "atami-ginza": "Atami Ginza Shopping Street",
      "atami-sta-kinomiya": "Kinomiya Station",
    },
    souvenirs: [
      "Atami Purin (retro milk-bottle puddings; the main shop often has a queue and flavors abound)",
      "Onsen manju (fresh-steamed brown-sugar buns on the Nakamise arcade; Enmeido is the original shop)",
      "Aji no himono (overnight-dried horse mackerel, an Atami specialty — several old shops on the arcade to choose from)",
    ],
    pois: {
      "atami-kinomiya-jinja": {
        name: "Kinomiya Shrine",
        blurb: "Home to a camphor tree over two thousand years old — the largest tree on Honshu; one lap around its trunk is said to add a year of life and grant a wish. The shrine cafe \"Saryo Hoko\" and its mugikogashi sweets deserve a sit-down too.",
        tips: "The great camphor and approach are lit at night — the evening mood is completely different. About 5 minutes on foot from Kinomiya Station.",
      },
      "atami-ginza-nakamise": {
        name: "Atami Ginza & Nakamise Shopping Streets",
        blurb: "Showa-retro shopping streets running from the station's Nakamise down to Ginza — onsen manju, fishcakes and Atami pudding as you stroll. Vintage kissaten mix with hip new shops; a walk here has real flavor.",
        tips: "Eat the onsen manju hot — one from the Nakamise steamer is enough; save room for a seafood bowl on Ginza.",
      },
      "atami-osakana-shokudo": {
        name: "Atami Ginza Osakana Shokudo",
        blurb: "The queue-drawing seafood diner on Ginza street: its signature \"Kaihao\" bowl stacks sashimi into a small mountain, bold in both looks and freshness. Atami lunch contender number one.",
        tips: "Take a number from the machine out front and browse the shopping street while you wait — an hour at peak times is normal.",
      },
      "atami-kiunkaku": {
        name: "Kiunkaku Villa",
        blurb: "A Taisho-era grand villa blending Japanese and Western styles, its stained glass, Western rooms and strolling garden beautifully preserved. Literary giants including Dazai Osamu and Tanizaki Junichiro once stayed here.",
        tips: "Closed Wednesdays; architecture lovers should set aside a full hour to linger.",
      },
      "atami-moa-museum": {
        name: "MOA Museum of Art",
        blurb: "A hillside museum holding Ogata Korin's National Treasure \"Red and White Plum Blossoms\" — the 200-meter kaleidoscope escalator at the entrance is an artwork in itself. The terrace view over Sagami Bay is superb.",
        tips: "About 10 minutes by bus from Atami Station; the Red and White Plum Blossoms screen is usually shown only around plum season (about February).",
      },
      "atami-sun-beach": {
        name: "Atami Sun Beach",
        blurb: "A palm-lined resort beach — a swimming spot in summer, and at night the whole strand glows blue in what claims to be Japan's first beach illumination. The classic finale to an onsen-town stroll.",
        tips: "The lights stay on until 22:00 — a post-dinner loop along the shore path settles the meal nicely.",
      },
      "atami-castle": {
        name: "Atami Castle & Trick Art Museum",
        blurb: "A Showa-era sightseeing castle whose keep-top deck sweeps in the whole town and Sagami Bay at once, with a trick-art museum attached — guaranteed laughs for families.",
        tips: "Ride the Atami Ropeway up; pairs neatly with the Korakuen area for the same afternoon.",
      },
      "atami-izusan-jinja": {
        name: "Izusan Shrine",
        blurb: "Where Minamoto no Yoritomo and Hojo Masako fell in love — now a power spot for romantic success. The main hall sits on the hillside, and the stone-stepped approach looks back over the Atami coast the whole way up.",
        tips: "About 10 minutes by bus from Atami Station to the Izusan-jinja-mae stop; climbing all 837 steps from the sea is training-grade — know your limits.",
      },
      "atami-irori-chaya": {
        name: "Irori Chaya",
        blurb: "An old hearth-side restaurant off the Nakamise arcade — the Izu specialty kinmedai (golden-eye snapper) simmered sweet-savory is deeply flavored, and the seafood bowls and dried-fish sets are solid too. Onsen-town atmosphere at full strength.",
        tips: "Two people sharing one whole simmered kinmedai is the best value; browse the arcade after.",
      },
      "atami-purin": {
        name: "Atami Purin Main Shop",
        blurb: "The queue-famous pudding shop with the hippo mascot: silky custard in retro glass bottles, caramel sauce you squirt on yourself from a syringe. Delicious, photogenic and synonymous with Atami dessert.",
        tips: "The main shop draws long lines; the second shop \"Atami Purin Cafe 2nd\" has more seats plus pudding-topped toast.",
      },
      "atami-fuua": {
        name: "Ocean Spa Fuua",
        blurb: "A large day-spa on Atami Bay whose standing open-air bath — among Japan's biggest — merges with the sea in one line, like soaking in Sagami Bay itself. The robe-clad lounge with ocean views can swallow half a day.",
        tips: "A free shuttle runs between Atami Station and Korakuen — check the last departure before you go.",
      },
      "atami-wantanya": {
        name: "Wantanya",
        blurb: "A wonton noodle shop founded in 1947 — light chicken broth with silky-skinned, tender wontons, the onsen town's classic late-night bowl. After a soak, this is how Atami locals end the day.",
      },
    },
  },

  kawaguchiko: {
    name: "Lake Kawaguchi & Fuji Five Lakes",
    areas: {
      "富士吉田": "Fujiyoshida",
      "河口湖畔": "Lake Kawaguchi Shore",
      "忍野": "Oshino",
    },
    hubs: {
      "kawaguchiko-sta-kawaguchiko": "Kawaguchiko Station",
      "kawaguchiko-sta-shimoyoshida": "Shimoyoshida Station (Arakurayama)",
      "kawaguchiko-oshino-hakkai": "Oshino Hakkai",
    },
    souvenirs: [
      "Kikyo Shingen mochi (kinako-dusted mochi with black-sugar syrup, Yamanashi's signature sweet — a must-buy)",
      "Mt. Fuji yokan (Fuji-shaped gradient slices of sweet bean jelly, wildly photogenic when cut)",
      "FUJIYAMA COOKIE (handmade Mt. Fuji-shaped cookies from the Kawaguchiko lakeside, in many flavors)",
    ],
    pois: {
      "kawaguchiko-chureito": {
        name: "Chureito Pagoda (Arakurayama Sengen Park)",
        blurb: "The world-famous composition of a vermilion five-storey pagoda framed with Mt. Fuji — a literal postcard in cherry blossom and autumn foliage seasons. The open deck makes it the first shrine of Fuji photography.",
        tips: "From Shimoyoshida Station it's a 398-step, 20-minute climb; Fuji is clearest in the morning and often swallowed by cloud by afternoon.",
      },
      "kawaguchiko-oishi-park": {
        name: "Oishi Park",
        blurb: "A flower park on the lake's north shore, its beds unrolling along the water with an unobstructed Mt. Fuji straight ahead. In early summer the lavender carpet with Fuji behind is the dreamiest scene in the Five Lakes.",
        tips: "Lavender peaks late June to mid-July; about 30 minutes from Kawaguchiko Station on the lakeside sightseeing bus.",
      },
      "kawaguchiko-tenjozan": {
        name: "Mt. Fuji Panoramic Ropeway (Mt. Tenjo)",
        blurb: "Three minutes up to the Mt. Tenjo deck, with Lake Kawaguchi and Mt. Fuji delivered in one sweep. Tanuki and rabbit figures dot the summit — this is the stage of the folktale \"Kachi-kachi Yama\".",
        tips: "High-season queues are serious; with good legs, hike up the trail in about 40 minutes and ride the ropeway down.",
      },
      "kawaguchiko-cruise": {
        name: "Lake Kawaguchi Sightseeing Cruise \"Appare\"",
        blurb: "A pleasure boat styled after a warring-states-era warship, looping the lake in about 20 minutes. Seen from the water, Mt. Fuji and the surrounding peaks read completely differently than from shore.",
        tips: "The pier sits beside the ropeway station — bundle the two into the same time slot.",
      },
      "kawaguchiko-music-forest": {
        name: "Kawaguchiko Music Forest Museum",
        blurb: "A European-style garden museum on the lakeshore, housing world-class automatic instruments and music boxes with hourly performances. The rose garden against a Mt. Fuji backdrop is pure storybook.",
        tips: "Automaton and opera performances run hourly — check the schedule on entry before touring the garden.",
      },
      "kawaguchiko-fujiq": {
        name: "Fuji-Q Highland",
        blurb: "The amusement park famous for scream-grade coasters — Takabisha, FUJIYAMA and other record-setters line up with Mt. Fuji itself as the backdrop. Not a thrill-seeker? There's a Thomas Land too.",
        tips: "Entry is free with pay-per-ride attractions; for full conquest buy the one-day pass and sprint to the big coasters at opening.",
      },
      "kawaguchiko-oshino-hakkai-pond": {
        name: "Oshino Hakkai Springs",
        blurb: "Eight springs of Mt. Fuji snowmelt filtered through the mountain for eighty years, glowing an impossible blue amid thatched farmhouses — a classic rural Fuji tableau and a World Heritage component site.",
        tips: "The Wakuike spring area is the highlight; mornings bring the best light and beat the tour groups.",
      },
      "kawaguchiko-houtou-fudou": {
        name: "Houtou Fudou (Kawaguchiko Station Branch)",
        blurb: "The flagship name in Yamanashi's houtou noodles: flat, broad noodles stewed in miso broth with pumpkin and vegetables, soaking up every drop. One pot warms you through.",
        tips: "The menu is essentially one signature Fudou houtou — no choosing needed; tables turn fast, so don't be scared off by the line.",
      },
      "kawaguchiko-lake-bake": {
        name: "Lake Bake Cafe",
        blurb: "A wild-yeast bakery beside Oishi Park, its terrace facing straight onto the lake and Mt. Fuji. The signature Kohan bread with a latte is the best rest stop on a north-shore walk.",
        tips: "Loaves routinely sell out as they leave the oven — come early for the signature bakes.",
      },
      "kawaguchiko-miura-udon": {
        name: "Miura Udon (Yoshida Udon)",
        blurb: "A popular shop for Fujiyoshida's soul food, Yoshida udon — noodles firm to the point of defiance, topped with horse meat and blanched cabbage. A spoonful of spicy suridane is the connoisseur's move.",
        tips: "Lunch service only, and they close when the noodles run out — make it the day's lunch, not an afternoon plan.",
      },
      "kawaguchiko-ikemoto-chaya": {
        name: "Oshino Hakkai Ikemoto Teahouse",
        blurb: "A teahouse-diner beside the Wakuike spring, where grilled dango, soba and tofu dishes are all made with Mt. Fuji spring water. After touring the ponds, sit down to soba — with water this good, even the noodles taste sweet.",
      },
      "kawaguchiko-momiji-corridor": {
        name: "Momiji Corridor (Maple Corridor)",
        blurb: "A tunnel of maples along a stream on the lake's north shore, giant trees arching overhead in red — the main stage of autumn in the Fuji Five Lakes. During the festival, food stalls and illuminations make it wonderfully lively.",
        tips: "The maple festival runs roughly early-to-mid November with lights until 22:00 — arrive at dusk to see both versions.",
      },
    },
  },

  karuizawa: {
    name: "Karuizawa",
    areas: {
      "舊輕井澤・站前": "Kyu-Karuizawa & Station Area",
      "中輕井澤・星野": "Naka-Karuizawa & Hoshino",
    },
    hubs: {
      "karuizawa-sta-karuizawa": "Karuizawa Station",
      "karuizawa-kyu-karuizawa": "Kyu-Karuizawa",
      "karuizawa-naka-karuizawa": "Naka-Karuizawa Station",
    },
    souvenirs: [
      "Sawaya jam (additive-free jams — strawberry and apple are the classics; taste-test at the Kyu-Karuizawa Ginza main shop before choosing)",
      "Karuizawa beer (THE Karuizawa Beer; the Kiyosumi-dake blue label is pure highland — sold in supermarkets and at the station)",
      "Maruyama Coffee drip bags (the Karuizawa-born specialty roaster — take the highland roast home)",
      "Chozumeya ham and sausages (additive-free handmade charcuterie, vacuum-packed for travel — perfect with Karuizawa beer)",
      "Shirakabado Karuizawa tarts (sweets from a jam-maker turned patissier; walnut and strawberry tarts are the standards)",
    ],
    pois: {
      "karuizawa-kyu-ginza": {
        name: "Kyu-Karuizawa Ginza Street",
        blurb: "Karuizawa's liveliest street: jam shops, bakeries and church lanes stacked along the slope, thick with old-resort Western charm. Sample jams, tear into fresh bread, walk to the end and amble back.",
        tips: "Most shops close around 17:00 and the street goes quiet after dusk — do your shopping in daylight.",
      },
      "karuizawa-kumoba-pond": {
        name: "Kumoba Pond",
        blurb: "A slender pond nicknamed Swan Lake, its mirror surface reflecting larches and villa woods. The loop takes about 20 minutes; in autumn the foliage on the water is one of Karuizawa's defining views.",
        tips: "In foliage season the reflections are best on windless early mornings, when it's also quietest — come first thing.",
      },
      "karuizawa-shiraito-falls": {
        name: "Shiraito Falls",
        blurb: "Groundwater seeps from a curved rock wall in hundreds of silken white threads — only 3 meters tall but 70 wide, too delicate to feel like a waterfall. Minutes from the parking lot, with highland forest to wander after.",
        tips: "About 25 minutes from Karuizawa Station on the Kusakaru bus toward Kusatsu; buses are few, so check the timetable first.",
      },
      "karuizawa-stone-church": {
        name: "Stone Church (Uchimura Kanzo Memorial)",
        blurb: "An organic architecture of layered stone arches and glass half-buried in the forest, light spilling through the seams into a hush that stops your breath. Unmissable for architecture fans in Karuizawa.",
        tips: "Viewing pauses during weddings and photography is banned inside — check the day's open hours on the sign at the entrance.",
      },
      "karuizawa-kogen-church": {
        name: "Karuizawa Kogen Church",
        blurb: "A wooden steepled church dating from the Taisho era, tucked in the Hoshino forest a short walk from the Stone Church. Summer-night candle services and lantern events are magical; daytime visits are serenely quiet.",
      },
      "karuizawa-harunire-terrace": {
        name: "Harunire Terrace & Maruyama Coffee",
        blurb: "Hoshino's boardwalk village of some fifteen boutiques and eateries strung along the Yukawa forest. Maruyama Coffee has a branch here — a specialty brew on the riverside terrace is Karuizawa's true rhythm.",
        tips: "Maruyama Coffee fills up on weekend afternoons — go early in the day or on a weekday to linger.",
      },
      "karuizawa-prince-outlet": {
        name: "Karuizawa Prince Shopping Plaza",
        blurb: "A vast outlet mall directly at the station's south exit, two-hundred-plus shops ringing lawns and ponds with Mt. Asama behind. Luxury through outdoor brands all present — great for rainy days or the trip's finale.",
        tips: "The grounds are huge — study the floor map online and lock in target zones; bring your passport for the tax-free counter.",
      },
      "karuizawa-cafe-ryonone": {
        name: "Cafe Ryo no Ne",
        blurb: "A century-old villa — a registered Tangible Cultural Property — turned cafe, its veranda seats wrapped in cool green shade. The thick-cut French toast, crisp outside and custardy within, is Kyu-Karuizawa's favorite brunch.",
        tips: "Seats are few and weekend queues form before opening; the French toast sells out, so go early.",
      },
      "karuizawa-chozumeya": {
        name: "Chozumeya (Sausage & Ham Shop No. 1)",
        blurb: "A Karuizawa-born charcuterie making additive-free ham and sausages the German way. Grilled at the storefront, the casings snap and burst with juice — one in hand on a Ginza stroll, souvenirs sorted in the same stop.",
      },
      "karuizawa-sonmin-shokudo": {
        name: "Sonmin Shokudo",
        blurb: "Hoshino's big village diner, serving sanzoku-yaki fried chicken sets, Shinshu miso and soba — Nagano home cooking in one stop, with forest filling the windows. Perfect refuel after Harunire Terrace or the Tombo-no-yu bath.",
      },
    },
  },

  kusatsu: {
    name: "Kusatsu Onsen",
    areas: {
      "湯畑周邊": "Around Yubatake",
      "西之河原": "Sainokawara",
    },
    hubs: {
      "kusatsu-bus-terminal": "Kusatsu Onsen Bus Terminal",
      "kusatsu-yubatake-hub": "Yubatake",
      "kusatsu-sainokawara-hub": "Sainokawara Park Entrance",
    },
    souvenirs: [
      "Onsen manju (Honke Chichiya's two-color chestnut-and-white filling is the most famous; also delicious steamed hot on the onsen street)",
      "Yunohana bath powder (natural mineral flakes harvested at the Yubatake — recreate Kusatsu's acidic waters in your tub at home)",
      "Hanamame amanatto (candied giant runner beans, a highland specialty perfect with tea; sold at old shops along the street)",
      "Kusatsu glass (Yubatake-colored glassware from Kusatsu Glass Kura; the onsen-green cups make the best keepsake)",
    ],
    pois: {
      "kusatsu-yubatake": {
        name: "Yubatake Hot Spring Field",
        blurb: "The source pool at the town's very center, thousands of liters of hot spring rushing down wooden channels each minute in a haze of sulfur steam. Steam by day, illumination by night — one lap of the fence and you understand Kusatsu.",
        tips: "The evening illumination has the best atmosphere — if staying overnight, come once by day and once after dark.",
      },
      "kusatsu-netsunoyu": {
        name: "Netsu no Yu Yumomi Show",
        blurb: "The theater of Kusatsu's famous yumomi: women sing the Kusatsu-bushi while churning 50-degree spring water with long wooden paddles, cooling it without dilution. You can even sign up to paddle a round yourself.",
        tips: "Several shows daily, each about 20 minutes — check the schedule on arrival and enter 15 minutes early for a good spot.",
      },
      "kusatsu-sainokawara-park": {
        name: "Sainokawara Park",
        blurb: "A riverbed where hot springs bubble up everywhere, emerald pools and drifting steam flanking the walking path in an otherworldly scene. At the far end lies the great open-air bath, with a free footbath en route.",
      },
      "kusatsu-sainokawara-rotenburo": {
        name: "Sainokawara Open-Air Bath",
        blurb: "A giant 500-square-meter rotenburo where you soak in milky-green acidic water wrapped by forest — fresh green in spring, red leaves in autumn, snow scenes in winter. For one big soak in Kusatsu, this is the one.",
        tips: "Ticketed entry; bring or buy a towel. The water is strongly acidic — rinse off afterwards and remove metal jewelry first.",
      },
      "kusatsu-shirahata-no-yu": {
        name: "Shirahata no Yu Public Bath",
        blurb: "A free communal bath beside the Yubatake drawing on the Shirahata source, its milky-white water rare even in Kusatsu. A small wooden hut with locals coming and going — push the door open for toji bathing culture at its purest.",
        tips: "No showers and the water runs hot — ladle it over yourself to acclimate. Respect local bath etiquette: quiet and quick.",
      },
      "kusatsu-kosenji": {
        name: "Kosenji Temple",
        blurb: "The temple guarding the hot springs above the Yubatake — stone steps lead to the main hall and Yuzendo, enshrining the healing Yakushi Nyorai. Pray at the \"late-blooming\" Shakado for luck that comes late, then take in the Yubatake panorama.",
      },
      "kusatsu-manju-street": {
        name: "Onsen Manju Tasting Street (Sainokawara-dori)",
        blurb: "The shopping street from the Yubatake to Sainokawara Park, where manju shops call out free tastings — thin skins, sweet fillings, straight from the steamer. Add an onsen egg and a grilled dango skewer and a few hundred meters gets very busy.",
      },
      "kusatsu-mikuniya": {
        name: "Mikuniya Diner",
        blurb: "A long-standing diner beside the Yubatake whose signature maitake tempura bowl is crisp and heady with mushroom aroma; udon and set meals are honest too. Dining options are thin on the onsen street — for a proper hot meal, this is the safe bet.",
        tips: "Lunch queues are common — dodging the 12:00–13:00 rush gets you seated faster.",
      },
      "kusatsu-tsutsujitei-cafe": {
        name: "Yubatake Souan Footbath Cafe",
        blurb: "Cafe seats facing the Yubatake where you sip coffee and eat dessert with your feet in a hot-spring footbath, steam billowing right before you. After a day on the onsen streets, that first plunge earns an involuntary sigh.",
      },
    },
  },

  nikko: {
    name: "Nikko",
    areas: {
      "日光社寺": "Nikko Temples & Shrines",
      "中禪寺湖・奧日光": "Lake Chuzenji & Oku-Nikko",
    },
    hubs: {
      "nikko-sta-tobu-nikko": "Tobu-Nikko Station",
      "nikko-sta-jr-nikko": "JR Nikko Station",
      "nikko-chuzenji-onsen-bt": "Chuzenji Onsen Bus Terminal",
    },
    souvenirs: [
      "Nikko yokan (traditional sweet bean jelly made with famed spring water; old shops like Mihan and Mitsuyama each have loyal fans)",
      "Tamari-zuke pickles (Uwasawa Umetaro's soy-tamari pickles — the rakkyo and daikon are rice's best friends)",
      "Three Wise Monkeys goods (all manner of keepsakes of Toshogu's \"see no evil, hear no evil, speak no evil\" carving)",
      "Nikko Jingoro senbei (Ishidaya's salted-butter thin crackers — dangerously moreish)",
    ],
    pois: {
      "nikko-toshogu": {
        name: "Nikko Toshogu Shrine",
        blurb: "The gloriously ornate mausoleum where Tokugawa Ieyasu rests — the Yomeimon gate is carved so finely it's said you could gaze all day and never tire. Remember to look up for the two legendary carvings: the Three Wise Monkeys and the Sleeping Cat.",
        tips: "In high season tour groups flood in after 10:00 — enter right at opening for the calmest visit.",
      },
      "nikko-rinnoji": {
        name: "Rinnoji Temple",
        blurb: "The central temple of Nikko's mountain faith, its Sanbutsudo hall dominated by three gilded Buddhas eight meters tall. Together with Toshogu and Futarasan Shrine it forms the \"two shrines and one temple\" — visit all three in one sweep.",
      },
      "nikko-futarasan": {
        name: "Futarasan Shrine",
        blurb: "An ancient shrine to the deity of Mt. Nantai, guarding Nikko for nearly nine centuries before Toshogu existed. Its matchmaking sacred tree and holy spring draw steady devotees, in a mood far quieter than next door.",
      },
      "nikko-shinkyo": {
        name: "Shinkyo Sacred Bridge",
        blurb: "A vermilion wooden bridge arcing over the Daiya River, counted among Japan's three great unusual bridges and the gateway to Nikko's shrines. You'll pass it walking up from town — most photogenic against autumn leaves.",
      },
      "nikko-nishisando-chaya": {
        name: "Nishisando Teahouse Row",
        blurb: "A cluster of Japanese-style teahouses along Toshogu's western approach, serving Nikko's specialty yuba (tofu skin) dishes, dango and coffee. Just the place to rest and refuel after your shrine rounds.",
      },
      "nikko-kegon-falls": {
        name: "Kegon Falls",
        blurb: "One of Japan's three great waterfalls, plunging 97 meters in a single drop as Lake Chuzenji's waters pour off the cliff. Ride the elevator down to the basin viewing deck, where the spray hits your face — the full-force experience.",
        tips: "The observation elevator is worth it; in winter the surrounding lesser falls freeze into a whole different scene.",
      },
      "nikko-lake-chuzenji": {
        name: "Lake Chuzenji",
        blurb: "A highland lake dammed by Mt. Nantai's eruption, its surface sitting at about 1,269 meters. Take a sightseeing cruise or walk the shore path; autumn leaves mirror on the water, and summers run far cooler than town.",
      },
      "nikko-chuzenji-onsen-street": {
        name: "Chuzenji Onsen Town",
        blurb: "A lakeside hot-spring hamlet beside Kegon Falls, its street lined with yuba soba and grilled-fish restaurants plus day-use baths. Worn out from the mountain? Lunch here, then a soak.",
      },
      "nikko-akechidaira": {
        name: "Akechidaira Observatory",
        blurb: "The ropeway deck at the top of the Irohazaka switchbacks, catching Lake Chuzenji, Kegon Falls and Mt. Nantai in a single frame — the very view on Nikko's postcards. In foliage season it's beautiful enough to cause traffic jams.",
        tips: "The ropeway station sits only on the uphill second Irohazaka one-way road, so stop here on the way up; allow traffic buffer in foliage season.",
      },
      "nikko-ebisuya": {
        name: "Ganso Nikko Yuba Ryori Ebisuya",
        blurb: "A specialist old house for Nikko's signature yuba (tofu skin): the classic gozen set delivers fried yuba rolls and simmered dishes in one tray. Its spot on the temple-approach street makes it the natural lunch before or after worship.",
        tips: "Often full at noon and closes when sold out — be inside by 11:30 to be safe.",
      },
      "nikko-meiji-no-yakata": {
        name: "Meiji no Yakata",
        blurb: "A Western restaurant in the stone villa of a Meiji-era American trader, where omurice and beef stew have been the house pride for a century. Save room for the dense \"Nirvana\" cheesecake after.",
        tips: "About 5 minutes on foot after Toshogu; while waiting for a table, photograph the stone mansion from the garden.",
      },
      "nikko-nikko-coffee-goyoteidori": {
        name: "Nikko Coffee Goyotei-dori",
        blurb: "A century-old machiya townhouse turned roastery cafe — hand-poured coffee and chiffon cake beneath old wooden beams. On the road to the Tamozawa Imperial Villa, it's a rare quiet refuge in the temple district.",
      },
    },
  },
};
