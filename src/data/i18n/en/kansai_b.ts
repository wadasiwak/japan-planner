import type { CityTranslation } from "../types";

export const cities: Record<string, CityTranslation> = {
  nara: {
    name: "Nara",
    areas: {
      "奈良公園・東大寺": "Nara Park & Todai-ji",
      "奈良町・車站周邊": "Naramachi & Around the Stations",
    },
    hubs: {
      "nara-sta-kintetsu": "Kintetsu Nara Station",
      "nara-sta-jr": "JR Nara Station",
      "nara-hub-park": "Nara Park",
    },
    souvenirs: [
      "Nakatanidou mochi (mugwort-and-red-bean mochi famous for its high-speed pounding show — best eaten fresh on the spot)",
      "Deer goods (deer plushies, cookies, and stationery — the Nara Park area is packed with exclusive designs)",
      "Narazuke pickles (melon and gourd pickled in sake lees; long-established shops sell vacuum-packed boxes that travel well)",
      "Persimmon-leaf sushi (vinegared mackerel sushi wrapped in persimmon leaves, a specialty of old shops like Hiraso)",
    ],
    pois: {
      "nara-todaiji": {
        name: "Todai-ji Temple",
        blurb: "The Great Buddha Hall, one of the world's largest wooden buildings, houses a 15-meter bronze Buddha. Standing at its feet, you finally grasp the word overwhelming. Crawling through the hole in one pillar is said to bring good luck.",
        tips: "Arrive around 8 a.m. to beat the flood of school excursion groups.",
      },
      "nara-park-deer": {
        name: "Feeding the Deer in Nara Park",
        blurb: "Over a thousand wild deer roam free in the park. Buy a pack of deer crackers and you'll be surrounded instantly — some deer even bow for food. The undisputed star of any Nara itinerary.",
        tips: "Crackers held in hand get snatched — hide them and feed a little at a time. Hungry deer will nibble clothes and maps.",
      },
      "nara-kasuga-taisha": {
        name: "Kasuga Taisha Shrine",
        blurb: "A World Heritage shrine of the Fujiwara clan. Two thousand moss-covered stone lanterns line the approach, with a thousand more bronze lanterns hanging inside. Walking the path through primeval forest feels like time travel.",
      },
      "nara-kofukuji": {
        name: "Kofuku-ji Temple",
        blurb: "Its five-story pagoda defines Nara's skyline, and the National Treasure Hall holds the three-faced Ashura statue, Japan's most beloved Buddhist sculpture. Just five minutes on foot from Kintetsu Nara Station.",
      },
      "nara-naramachi": {
        name: "Naramachi",
        blurb: "A preserved district of Edo- to Meiji-era merchant townhouses, their latticed facades now housing craft shops, cafes, and dessert stores. The red migawari-zaru charm monkeys hanging under the eaves are the neighborhood's signature.",
      },
      "nara-nakatanidou": {
        name: "Nakatanidou Mochi",
        blurb: "A mugwort mochi shop famous for its high-speed pounding show — two men alternate mallet strikes so fast they blur. Fresh-pounded mochi is warm, soft, and dangerously moreish.",
        tips: "Pounding shows happen irregularly, usually when crowds gather — if you hear the shouts, hurry over.",
      },
      "nara-nigatsudo": {
        name: "Todai-ji Nigatsudo Hall",
        blurb: "A stilted stage hall on the hill behind Todai-ji, free and open around the clock. The terrace looks over the Great Buddha Hall's roof to sunsets across the Nara basin. Every March it hosts the fiery Omizutori torch ritual.",
        tips: "Come up just before sunset, enjoy the night view, then stroll down — you'll have it almost to yourself.",
      },
      "nara-wakakusayama": {
        name: "Mount Wakakusa",
        blurb: "A grassy triple-domed hill where climbing just the first rise rewards you with a panorama of Nara city, deer grazing lazily on the slopes. In winter the Yamayaki festival sets the whole mountain ablaze.",
      },
      "nara-national-museum": {
        name: "Nara National Museum",
        blurb: "Home to one of Japan's finest collections of Buddhist sculpture — the Buddhist Art wing arranges masterpieces from Asuka to Kamakura into a walk-through history. The autumn Shosoin exhibition is the event of the year.",
        tips: "Closed Mondays. On a rainy day, pair it with the Great Buddha Hall — Nara's best wet-weather plan.",
      },
      "nara-shizuka-kamameshi": {
        name: "Kamameshi Shizuka",
        blurb: "A venerable kamameshi restaurant where each pot of rice is cooked to order. The signature pot with seven Nara ingredients has wonderfully fragrant crispy rice at the bottom. Expect a half-hour wait from order to table — worth it.",
        tips: "Queues form before opening; arriving around 11 a.m. saves most of the wait.",
      },
      "nara-mentoan": {
        name: "Mentoan Udon",
        blurb: "A famous udon shop beside Kintetsu Nara Station. Its signature kinchaku udon stuffs the whole serving of noodles into a fried tofu pouch that arrives like a golden lucky bag. Snipping it open into the delicate broth is pure joy.",
        tips: "The shop is tiny and peak-hour queues are guaranteed — arrive right at 11 a.m. Portions are light, perfect as a small lunch.",
      },
      "nara-tengyokudo": {
        name: "Tengyokudo Kudzu Sweets",
        blurb: "A Meiji-era shop specializing in Yoshino kudzu. Freshly made kuzukiri noodles are translucent and springy, and the kudzu mochi with brown sugar syrup and kinako is the signature. Right by the Todai-ji approach — a refreshing finish after the Great Buddha.",
      },
      "nara-housekibako": {
        name: "Housekibako Shaved Ice",
        blurb: "Naramachi's famous kakigori shop, piling snow-fluffy ice mountains with house syrups of Yamato tea and seasonal fruit. Dreamlike to look at and queued year-round — Nara's top choice for afternoon tea.",
        tips: "It uses numbered tickets — grab one at the door in the morning and return at your assigned slot instead of standing in line.",
      },
    },
  },

  kobe: {
    name: "Kobe",
    areas: {
      "北野・新神戶": "Kitano & Shin-Kobe",
      "三宮・元町": "Sannomiya & Motomachi",
      "神戶港": "Kobe Harbor",
      "摩耶山・有馬": "Mount Maya & Arima",
    },
    hubs: {
      "kobe-sta-sannomiya": "Sannomiya Station",
      "kobe-sta-motomachi": "Motomachi Station",
      "kobe-sta-shinkobe": "Shin-Kobe Station",
      "kobe-sta-arima": "Arima Onsen Station",
    },
    souvenirs: [
      "Kobe Fugetsudo gaufres (thin wafers sandwiching cream — the classic Kobe Western-style confection)",
      "Kannonya cheesecake (Danish cheesecake served hot, sweet-and-savory; chilled boxed versions are available to take away)",
      "Kobe pudding (silky caramel custard pudding, a fixture of every station souvenir shop)",
      "Carbonated crackers (tansan senbei — Arima Onsen's crisp wafers made with the spa's carbonated spring water)",
    ],
    pois: {
      "kobe-kitano-ijinkan": {
        name: "Kitano Ijinkan District",
        blurb: "The hillside quarter where foreign merchants settled after the port opened, with Western mansions like the Weathercock House lining the slopes. Red brick and weathervanes against mountain and sea views — the origin of Kobe's exotic charm.",
        tips: "There are plenty of slopes, so wear comfortable shoes. A combination ticket pays off if you plan to enter several mansions.",
      },
      "kobe-nunobiki-herb-garden": {
        name: "Nunobiki Herb Garden & Ropeway",
        blurb: "A ropeway from Shin-Kobe Station glides up to this vast hillside herb garden, its flower beds terraced across the slope in every season. Sip herbal tea at the observation deck overlooking city and harbor, then detour to Nunobiki Falls on the way down.",
        tips: "If you're feeling fit, ride the ropeway up one way and hike down the trail past Nunobiki Falls.",
      },
      "kobe-nishimura-coffee": {
        name: "Nishimura Coffee Kitanozaka",
        blurb: "A classic Kobe kissaten founded in 1948; the Kitanozaka branch is an elegant coffee house set in a red-brick Western mansion. Hand-poured coffee with house-baked cakes — the perfect rest stop after walking the Ijinkan slopes.",
      },
      "kobe-ikuta-jinja": {
        name: "Ikuta Shrine",
        blurb: "An ancient shrine with over 1,800 years of history, its vermilion gate tucked into a lane in downtown Sannomiya. The name Kobe itself derives from the shrine's household guardians. Famous for matchmaking blessings and an easy stop en route.",
      },
      "kobe-beef-teppanyaki": {
        name: "Kobe Beef Teppanyaki",
        blurb: "You can't visit Kobe without trying Kobe beef. Top teppanyaki houses cluster around Sannomiya, where chefs sear exquisitely marbled wagyu right before your eyes. Lunch sets often cost half the dinner price — the smart way in.",
        tips: "Popular spots like Steakland and Mouriya need reservations; on a budget, target weekday lunch service.",
      },
      "kobe-nankinmachi": {
        name: "Nankinmachi (Kobe Chinatown)",
        blurb: "One of Japan's three great Chinatowns — two hundred meters of street crammed with pork bun, xiaolongbao, and Peking duck stalls. Roshoki's pork buns have drawn queues since the Taisho era; eat as you stroll.",
        tips: "Roshoki queues even on weekdays but moves fast. Note it closes on Mondays.",
      },
      "kobe-kyukyoryuchi": {
        name: "Former Foreign Settlement",
        blurb: "The district where Meiji-era foreign trading houses stood, its stone-built early-modern buildings now hosting luxury boutiques and cafes. Orderly and elegant, it's called the most European corner of Japan — lovely for strolling and photos.",
      },
      "kobe-meriken-park": {
        name: "Meriken Park & BE KOBE",
        blurb: "An open waterfront park on Kobe Harbor where the white lattice of the Maritime Museum frames the red Port Tower — Kobe's definitive view. Queue for a photo at the BE KOBE monument; the evening sea breeze is at its best.",
        tips: "The park preserves a quay left ruined by the Great Hanshin Earthquake — worth pausing to see.",
      },
      "kobe-port-tower": {
        name: "Kobe Port Tower",
        blurb: "The drum-shaped red steel landmark, now sporting a rooftop open-air deck after renovation, with 360-degree views over the harbor and Mount Rokko. Lit up at night and seen from Meriken Park, it is Kobe's postcard shot.",
      },
      "kobe-harborland-umie": {
        name: "Kobe Harborland umie MOSAIC",
        blurb: "A large waterfront shopping complex whose MOSAIC wing lines its terrace restaurants along the sea — dine with views of the Port Tower and the Ferris wheel. Plenty of Kobe-style Western food and dessert shops; the top pick for dinner.",
      },
      "kobe-maya-kikuseidai": {
        name: "Mount Maya Kikuseidai Night View",
        blurb: "From this 690-meter observation deck, the lights of Kobe and Osaka spill all the way to the sea — the celebrated 'ten-million-dollar night view,' one of Japan's top three. The name means a place where you can scoop up the stars.",
        tips: "Take a bus from Sannomiya, then the cable car and ropeway. It's about 5 degrees colder than downtown, so bring a jacket, and check the ropeway's closure days online before you go.",
      },
      "kobe-arima-onsen": {
        name: "Arima Onsen",
        blurb: "One of Japan's three oldest hot springs and Toyotomi Hideyoshi's favorite. The rust-colored 'gold spring' and the clear carbonated 'silver spring' each have their devotees, and the public bathhouses Kin-no-Yu and Gin-no-Yu make an easy day trip.",
        tips: "About 40 minutes from Sannomiya by subway and the Kobe Electric Railway. Kin-no-Yu closes the 2nd and 4th Tuesdays.",
      },
      "kobe-arima-yumotozaka": {
        name: "Arima Onsen Yumotozaka",
        blurb: "The nostalgic sloping main street of the onsen town, wafting with fresh-baked carbonated crackers and Takenaka Meat Shop's Kobe beef croquettes. Stroll and snack after your soak, browsing old shops for sansho pepper simmers and doll brushes.",
        tips: "Carbonated crackers are crispiest eaten 'within three seconds' of baking — don't pass a stall making them fresh.",
      },
      "kobe-roshoki": {
        name: "Roshoki Pork Buns",
        blurb: "The originator of the butaman pork bun, founded in 1915 — bite-sized buns with thin skins and juicy filling, and for a century it has sold nothing else. Nankinmachi's landmark queue; grab a bag and eat as you walk.",
        tips: "The line looks scary but turns over fast — usually under 15 minutes. Buns come in threes minimum; eat them hot.",
      },
      "kobe-steak-land": {
        name: "Steak Land Kobe-kan",
        blurb: "Affordable Kobe beef teppanyaki right by Sannomiya Station, with the full chef's-griddle performance — lunch sets start around 3,000 yen. For a first taste of Kobe beef, there's no lower-pressure introduction.",
        tips: "Lunch is the best value but has the fiercest lines — arrive 30 minutes before opening. Dinner slots are easier.",
      },
      "kobe-grill-ippei": {
        name: "Grill Ippei Motomachi",
        blurb: "A Western-style diner founded in 1952, famous for omurice — a thin golden omelet draped over rice and doused in a deep, house-simmered demi-glace. The port city's yoshoku culture, condensed onto a single plate.",
      },
      "kobe-kannonya": {
        name: "Kannonya Motomachi",
        blurb: "Motomachi's famed dessert house, serving its signature Danish cheesecake hot from the oven: molten savory cheese over sweet sponge, an oddly addictive contrast. Just right with coffee for a break and a chat.",
      },
      "kobe-freundlieb": {
        name: "Freundlieb Main Store",
        blurb: "A century-old bakery founded by a German master baker, its main store set in a converted church — sandwiches and tea under the soaring chapel ceiling are magical. Its pies and cookies are classic Kobe souvenirs.",
        tips: "The upstairs cafe fills up on weekends; weekday afternoons are most relaxed. Lunch sets are popular, so come early to eat.",
      },
    },
  },

  himeji: {
    name: "Himeji",
    areas: {
      "姬路市中心": "Central Himeji",
      "書寫山": "Mount Shosha",
    },
    hubs: {
      "himeji-sta": "Himeji Station",
      "himeji-otemae": "Otemae-dori Avenue",
      "himeji-shosha-ropeway": "Mount Shosha Ropeway Base",
    },
    souvenirs: [
      "Gozasoro (fresh-baked red bean cakes — the beloved national snack that started in Himeji, in red or white bean flavors)",
      "Shiomi manju (Iseya Honten's salted white bean-paste buns, a traditional Himeji confection)",
      "Himeji Castle goods (all kinds of White Heron Castle souvenirs, sold at the castle shops and the station)",
    ],
    pois: {
      "himeji-castle": {
        name: "Himeji Castle",
        blurb: "The best-preserved original wooden castle keep in Japan, its brilliant white cluster of towers nicknamed the White Heron. Among Japan's first World Heritage sites, and the view over the Harima plain from the main keep is unmatched.",
        tips: "In peak season entry to the keep is often capped — be there at 9 a.m. sharp. The combo ticket with Koko-en is good value; allow at least two hours.",
      },
      "himeji-kokoen": {
        name: "Koko-en Garden",
        blurb: "A pond-strolling Japanese garden on the castle's west side, nine themed gardens separated by earthen walls, each with its own mood. The lord's residence garden borrowing the castle keep as backdrop is the most photogenic, especially in autumn foliage.",
        tips: "It adjoins the castle, so buy the combo ticket and visit next. The teahouse inside offers a matcha break.",
      },
      "himeji-engyoji": {
        name: "Mount Shosha Engyo-ji Temple",
        blurb: "An ancient Tendai temple atop Mount Shosha, a premier Kannon pilgrimage site whose stilted Maniden hall and Mitsunodo halls rival Kyoto's great temples. The Last Samurai filmed here; the cedar forests and stone steps breathe pure Zen.",
        tips: "From the ropeway top it's still a 20-minute walk to the Maniden; a shuttle bus is available if needed. Allow half a day including travel.",
      },
      "himeji-city-art-museum": {
        name: "Himeji City Museum of Art",
        blurb: "An art museum in a converted red-brick former army warehouse, its lawn plaza with Himeji Castle rising behind a sight in itself. The collection focuses on local artists and modern art — red brick against white castle walls photographs beautifully.",
      },
      "himeji-miyuki-dori": {
        name: "Miyuki-dori Shopping Arcade",
        blurb: "A covered arcade running from Himeji Station toward the castle, lined with drugstores, souvenir shops, old establishments, and local eateries. It's right on the way to the castle — the most convenient place to stock up on gifts.",
      },
      "himeji-anago-hiiragi": {
        name: "Anago Cuisine Hiiragi",
        blurb: "Himeji faces the Seto Inland Sea, and plump conger eel is the local specialty — Hiiragi is its standard-bearer. Freshly grilled anago blankets the rice, glazed and fragrant; a box of eel rice with clear soup is Himeji on a tray.",
        tips: "The signature anago rice is limited daily and lunch queues are common — arriving before 11:30 is safest.",
      },
      "himeji-gozasoro": {
        name: "Gozasoro Main Store",
        blurb: "The red bean cake beloved across Japan was born in Himeji, and the headquarters shop bakes them fresh — thin-skinned, generously filled, and cheaper than a coffee. The adjoining Azuki Museum makes it a worthy pilgrimage for dessert fans.",
        tips: "It's about a 20-minute walk from Himeji Station — there's a branch inside the station if you'd rather not walk. Eat the cakes hot from the griddle.",
      },
      "himeji-nadagiku": {
        name: "Nadagiku Sake Brewery",
        blurb: "A local Himeji brewery founded in 1910, its restaurant built inside the old cellar and ringed by giant sake tanks — an atmosphere all its own. Oden and sake-lees dishes with freshly brewed sake make a gently tipsy lunch.",
        tips: "The restaurant mainly serves lunch hours; book ahead if you want the brewery tour. About 15 minutes on foot from Himeji Station.",
      },
      "himeji-moat-boat": {
        name: "Himeji Castle Moat Boat Ride",
        blurb: "Drift along Himeji Castle's inner moat in a wooden boat while the sculling boatman narrates — gazing up at the White Heron from the water is a wholly different angle. The 30-minute cruise is painting-perfect in cherry blossom season.",
        tips: "Sailings run mainly on weekends and holidays, weather permitting, with limited departures — check at the ticket booth by Otemon Gate first, then plan the rest of your day.",
      },
      "himeji-hazuki-chaya": {
        name: "Hazuki Chaya Teahouse",
        blurb: "A teahouse canteen beside the ropeway's summit station on Mount Shosha, serving piping-hot chikara udon and oden — ideal refueling before or after the temple. Seats look out over Himeji and the Seto Inland Sea; the view is the best side dish.",
      },
    },
  },

  koyasan: {
    name: "Mt. Koya",
    areas: {
      "高野山": "Koyasan",
    },
    hubs: {
      "koyasan-cable-sta": "Koyasan Station (Cable Car)",
      "koyasan-okunoin-mae": "Okunoin-mae",
      "koyasan-senjuinbashi": "Senjuinbashi",
    },
    souvenirs: [
      "Koya-dofu (freeze-dried tofu, born on Koyasan — light, long-lasting, and wonderful simmered until it soaks up broth)",
      "Sesame tofu (the specialty of old shops like Hamadaya and Kadohama — dense and fragrant, but note the short shelf life)",
      "Sasamaki anpu (Fuzen's bamboo-leaf-wrapped fresh fu with red bean paste — springy and delicate; best eaten the same day)",
      "Amulets and prayer beads (omamori from Kongobu-ji and Okunoin, plus authentic juzu from the Buddhist shops along the approach)",
    ],
    pois: {
      "koyasan-okunoin": {
        name: "Okunoin Cemetery & Kobo Daishi Mausoleum",
        blurb: "The resting place of Kobo Daishi, where two hundred thousand gravestones and memorial stupas stretch beneath thousand-year cedars. The deeper you walk the quieter it grows — by the Lantern Hall you find yourself breathing softly.",
        tips: "Walking the full 2 km from Ichinohashi Bridge is the richest way; short on time, cut in from the Nakanohashi parking lot. No photography beyond Gobyobashi Bridge.",
      },
      "koyasan-kongobuji": {
        name: "Kongobu-ji Temple",
        blurb: "Head temple of Koyasan Shingon Buddhism, dignified with cypress-bark roofs and grand halls of painted sliding doors. Banryutei is Japan's largest rock garden, and the annex serves tea — a welcome chance to sit and catch your breath.",
        tips: "A combo ticket covers the Danjo Garan and the Tokugawa Mausoleum too — decide how many sites you'll visit before buying.",
      },
      "koyasan-konpon-daito": {
        name: "Danjo Garan Konpon Daito Pagoda",
        blurb: "The core training ground Kobo Daishi laid out when founding Koyasan. The vermilion Great Pagoda rises about 49 meters, its interior a three-dimensional mandala of statues and painted pillars depicting the esoteric cosmos. Most atmospheric when the evening bell tolls.",
        tips: "The Garan grounds are free; a ticket is only needed to enter the Great Pagoda. Loop past the Kondo and Miedo halls while you're there.",
      },
      "koyasan-daimon": {
        name: "Daimon Gate",
        blurb: "The great gate at the western edge of the Koyasan settlement, a 25-meter vermilion tower flanked by two Kongorikishi guardians. On clear days the ridgelines of the Kii mountains layer into the distance — grandest at sunset.",
      },
      "koyasan-kongo-sanmaiin": {
        name: "Kongo Sanmai-in Temple",
        blurb: "A storied temple built by Hojo Masako for Minamoto no Yoritomo. Its Tahoto pagoda is the oldest surviving building on Koyasan, a National Treasure of the Kamakura era, tucked on a rise south of the main street — quiet and blissfully uncrowded.",
        tips: "Rhododendrons bloom gorgeously in mid-to-late May, and the temple doubles as a shukubo where you can stay overnight.",
      },
      "koyasan-sanbo": {
        name: "Chuo Shokudo Sanbo Shojin Cuisine",
        blurb: "A shojin-ryori canteen by Senjuinbashi where you can taste sesame tofu, simmered vegetables, and full vegetarian mountain fare without staying at a temple, at friendly prices. The kamameshi rice pot and the flower-basket set are the favorites.",
        tips: "Lunch queues are common and they close when sold out — arrive before 11:30. Restaurants on the mountain shut early in general.",
      },
      "koyasan-hamadaya": {
        name: "Hamadaya Sesame Tofu",
        blurb: "A Meiji-founded specialist in goma-dofu, made fresh daily and silky as raw silk, the soy and sesame aromas melting across the tongue. Eat a serving at the shopfront with wasabi soy sauce or wasanbon sugar.",
        tips: "Quantities are limited and sell out — come early to eat in. Shelf life is extremely short, so souvenir portions must be eaten the same day.",
      },
      "koyasan-fuzen": {
        name: "Fuzen Sasamaki Anpu",
        blurb: "An old fresh-fu shop founded in the Bunsei era. Its famed sasamaki anpu wraps red-bean-filled wheat gluten in bamboo leaves — springy, soft, and elegantly light. The perfect one-bite pause between the Garan and Okunoin.",
      },
      "koyasan-shukubo-ekoin": {
        name: "Shukubo Temple Stay (Eko-in)",
        blurb: "Spending a night in a temple is the essence of Koyasan: a shojin dinner, dawn prayers, and the goma fire ritual. Lodgings like Eko-in are famously welcoming to overseas guests, and night tours of Okunoin depart from here.",
        tips: "This is an overnight stay requiring advance booking. Even without staying, you can join ajikan meditation or sutra-copying sessions.",
      },
      "koyasan-nyonindo": {
        name: "Nyonindo Hall",
        blurb: "Koyasan once barred women, who could only worship from halls at the mountain's boundary — this is the sole survivor of the seven gates. The small hall stands in quiet witness to the history of 'Women's Koya.'",
        tips: "It sits right on the bus route from the cable car station into town — easiest seen on your way down.",
      },
    },
  },

  shirahama: {
    name: "Shirahama & Kumano",
    areas: {
      "白濱": "Shirahama",
      "熊野": "Kumano",
    },
    hubs: {
      "shirahama-sta": "Shirahama Station",
      "shirahama-shirarahama-hub": "Shirarahama Beach",
      "shirahama-nachi-katsuura": "Nachi-Katsuura",
    },
    souvenirs: [
      "Nanko-ume pickled plums (Kishu's signature umeboshi, from salty to honey-sweet — sample and compare at Toretore Market)",
      "Panda merchandise (Adventure World's exclusive panda plushies and sweets — the variety is dangerously tempting)",
      "Kagerou (Fukubishi's airy cream-filled confection, Shirahama's signature souvenir; the main store sells a fresh limited version)",
      "Yuzu sweets (monaka and yubeshi made with Kumano's yuzu, a fixture of Nachi-Katsuura souvenir shops)",
      "Kishu umeshu (plum wine brewed from fully ripened Nanko plums, richly aromatic — remember to check it in)",
    ],
    pois: {
      "shirahama-shirarahama": {
        name: "Shirarahama Beach",
        blurb: "A 620-meter sweep of pure white quartz sand against turquoise water — like a slice of Okinawa dropped into Kansai. In summer it's the region's most popular swimming beach; in other seasons a barefoot stroll is just as lovely.",
        tips: "The swimming season typically runs July and August. Off-season, treat it as a white-sand promenade and time it to catch the Engetsu Island sunset after.",
      },
      "shirahama-engetsuto": {
        name: "Engetsu Island Sunset",
        blurb: "Sea erosion has punched a perfect round hole through the middle of this islet, Shirahama's emblem. The sun setting through the hole made Wakayama's top-100 sunset list, and on clear evenings the shore bristles with cameras.",
        tips: "The sun aligns exactly with the hole only around the spring and autumn equinoxes, but the slanted views in other seasons are still beautiful.",
      },
      "shirahama-sandanbeki": {
        name: "Sandanbeki Cliffs & Senjojiki",
        blurb: "Sandanbeki is a 50-meter sheer cliff with an elevator down to the sea cave where the Kumano navy once hid its boats, waves thundering into the rock. Senjojiki nearby is a vast tiered sandstone shelf you can walk right to the water's edge.",
        tips: "The two sites are about 15 minutes apart on foot. The cave elevator charges admission; the clifftop lookout is free.",
      },
      "shirahama-adventure-world": {
        name: "Adventure World",
        blurb: "A giant park combining zoo, aquarium, and amusement rides, starring its famous family of giant pandas — nowhere in Japan gets you closer. The safari tram past giraffes and lions and the dolphin show are also superb.",
        tips: "Head straight to the panda house at opening when crowds are thinnest. Irregular closures fall mostly on Wednesdays — check the official calendar before you go.",
      },
      "shirahama-sakinoyu": {
        name: "Saki-no-Yu Open-Air Onsen",
        blurb: "A source-level rock bath of Shirahama Onsen with over 1,350 years of history, its open-air tubs set right into the coastal rocks — Pacific waves break at your feet as you soak. One of Japan's rarest seaside wild-bath experiences.",
        tips: "It's an old-style bathhouse with no soap or shampoo allowed, and it closes temporarily in rough waves or bad weather.",
      },
      "shirahama-toretore": {
        name: "Toretore Market Seafood",
        blurb: "One of western Japan's largest seafood markets, run directly by the Katata fishing cooperative — tuna-cutting shows, sashimi sliced to order, and seafood bowls galore. Buy your catch and grill it on the spot at the outdoor charcoal barbecue area.",
        tips: "Stock up on umeboshi and panda souvenirs here in one go. The dining area packs out at lunch peak — go off-hours.",
      },
      "shirahama-nidaime": {
        name: "Mehari Sushi Nidaime",
        blurb: "A specialist in mehari-zushi, the Kumano country dish of rice balls wrapped in pickled takana leaves — one big salty-fresh bite. Izakaya-style, it pairs the sushi with Kishu sake and Kumano beef dishes, perfect for dinner.",
        tips: "Dinner hours get busy — book ahead or arrive right at opening.",
      },
      "shirahama-kagerou-cafe": {
        name: "Fukubishi Kagerou Cafe",
        blurb: "The cafe attached to the home store of Shirahama's famed kagerou confection — only here can you try the unpackaged fresh version, its cream filling light as a cloud. Sea-view seats and dessert make it the top afternoon rest stop.",
        tips: "Fresh kagerou is limited daily and often sells out by afternoon — come early if you want it.",
      },
      "shirahama-nachi-taisha": {
        name: "Kumano Nachi Taisha & Nachi Falls",
        blurb: "One of the three grand shrines of Kumano, its vermilion halls and pagoda backed by the 133-meter plunge of Nachi Falls — a single white cascade that has anchored Kumano worship for a millennium. The pagoda framed with the falls is the classic shot.",
        tips: "About 1.5 hours by car from Shirahama, or train to Kii-Katsuura then a 30-minute bus. Hiro Shrine at the base of the falls lets you worship up close.",
      },
      "shirahama-daimonzaka": {
        name: "Daimonzaka Cedar Path",
        blurb: "The final stretch of the Kumano Kodo's Nakahechi route: mossy stone steps winding some 600 meters up between centuries-old cedars, including the paired Meoto-sugi. The most accessible taste of the pilgrimage trail, ending right at the Nachi Taisha approach.",
        tips: "Walk up from the bottom, then ride the bus down from Nachisan — the smoothest loop. The steps get slippery after rain, so wear grippy shoes.",
      },
      "shirahama-katsuura-maguro": {
        name: "Nachi-Katsuura Tuna Restaurant",
        blurb: "Nachi-Katsuura is Japan's premier port for longline-caught fresh tuna, and this harborside favorite turns the morning auction's catch into rice bowls and set meals — fat and freshness no frozen fish can match. The perfect reward after Nachisan.",
        tips: "The popular spots have queues before opening at lunch and close when the fresh tuna runs out. It's within walking distance of Kii-Katsuura Station.",
      },
    },
  },
};
