import type { CityTranslation } from "../types";

// English content pack — Okinawa region (naha, okinawa-north, miyako, ishigaki).

export const cities: Record<string, CityTranslation> = {
  naha: {
    name: "Naha & South Okinawa",
    areas: {
      "國際通・市區": "Kokusai-dori & Downtown",
      "首里": "Shuri",
      "瀨長島・豐見城": "Senaga Island & Tomigusuku",
      "南城・玉泉洞": "Nanjo & Gyokusendo",
      "浦添・港川": "Urasoe & Minatogawa",
    },
    hubs: {
      "naha-kokusai": "Kokusai-dori",
      "naha-shuri": "Shuri",
      "naha-senaga": "Senaga Island",
      "naha-gyokusendo": "Gyokusendo (Nanjo)",
      "naha-chinen": "Chinen (Nanjo)",
    },
    souvenirs: [
      "Beni-imo tarts (Okashi Goten's purple sweet potato tarts, the signature Okinawan souvenir)",
      "Chinsuko (traditional Ryukyuan shortbread; long-established makers like Shingaki offer many flavors)",
      "Awamori (Okinawan distilled rice liquor; brands like Kumesen and Zanpa come in easy-to-carry small bottles)",
      "Yukishio sweets (chinsuko and cookies made with Miyako Island's famous snow salt)",
      "Okinawan brown sugar (kokuto blocks from the outer islands, great eaten straight or brewed into tea)",
    ],
    pois: {
      "naha-kokusai-dori": {
        name: "Kokusai-dori Street",
        blurb: "Naha's liveliest 1.6 km strip, lined end to end with souvenir shops, drugstores and izakaya. An evening Orion beer to live sanshin music is peak Okinawa.",
        tips: "Driving note: the street often closes to cars on Sunday afternoons for a pedestrian zone. Park near the Prefectural Office or Makishi and walk in.",
      },
      "naha-makishi-market": {
        name: "Makishi Public Market",
        blurb: "Naha's kitchen, piled with rainbow fish, sea grapes and pig's face skin. Reopened in 2023 — clean and bright, but the market soul survives.",
        tips: "Buy seafood downstairs and pay a small fee to have it cooked at the second-floor eateries. When busy, pick your stall before heading up.",
      },
      "naha-naminoue": {
        name: "Naminoue Shrine & Beach",
        blurb: "Ryukyu's foremost shrine perched on a coral cliff — red-tiled halls against blue sea, a view unique to Okinawa. The city's only beach sits right below.",
        tips: "Shoot upward from the beach side or Asahigaoka Park to catch the classic angle of the shrine standing on the cliff.",
      },
      "naha-tsuboya": {
        name: "Tsuboya Yachimun Street",
        blurb: "An old pottery quarter paved with Ryukyu limestone, kilns and craft shops tucked into stone-walled lanes. Pick a shisa lion or cup as a keepsake.",
      },
      "naha-shurijo": {
        name: "Shurijo Castle Park",
        blurb: "Royal palace of the Ryukyu Kingdom for five centuries; the vermilion hall and Shureimon Gate symbolize Okinawa. Ramparts overlook Naha to the sea.",
        tips: "The main hall is being rebuilt after the 2019 fire — watching the restoration up close is a rare chance. The paid parking entrance is on the Route 49 side.",
      },
      "naha-kinjo-stone-road": {
        name: "Kinjo-cho Stone-Paved Road",
        blurb: "The last surviving Ryukyuan stone road below Shuri Castle, flanked by red-tiled houses and giant banyan trees. A ten-minute stroll down from the castle.",
        tips: "The slope is steep and the flagstones get slippery after rain, so wear good shoes. Drivers can park at Shuri Castle and walk down.",
      },
      "naha-shuri-soba": {
        name: "Shuri Soba",
        blurb: "A famed hand-made Okinawa soba shop with firm, springy noodles in a clear, savory broth. A bowl here after Shuri Castle is the most authentic lunch route.",
        tips: "Lunch only, and they close early once the noodles sell out — arrive before 1 pm.",
      },
      "naha-senaga-umikaji": {
        name: "Senagajima Umikaji Terrace",
        blurb: "White terraced shops cascade down a seaside slope — Okinawa's little Greece. Planes descend overhead into Naha Airport; sunset is the signature shot.",
        tips: "Island parking is free but fills up by evening. For sunset, arrive an hour early to claim a spot.",
      },
      "naha-hanran-burger": {
        name: "Hanran Burger Chim Fugas",
        blurb: "A queue-worthy Umikaji Terrace burger joint stacking soft-bone pork until it nearly spills over. Watch planes take off from ocean-facing seats.",
      },
      "naha-ashibinaa": {
        name: "Okinawa Outlet Mall ASHIBINAA",
        blurb: "A Greek-styled outlet mall ten minutes from the airport, with over a hundred brands at discount prices. The last shopping stop before returning the car.",
        tips: "Parking is free. Schedule it for departure day — it is only about 6 km from Naha Airport.",
      },
      "naha-okinawa-world": {
        name: "Okinawa World (Gyokusendo Cave)",
        blurb: "The five-kilometer Gyokusendo limestone cave is the star, with a million stalactites. The park adds a Ryukyu Kingdom village and Eisa drum shows.",
        tips: "The cave stays around 21°C year-round and walkways are slippery — wear grippy shoes. Large free parking lot; about 30 minutes' drive from Naha.",
      },
      "naha-sefa-utaki": {
        name: "Sefa-utaki",
        blurb: "The holiest site of the Ryukyu Kingdom, a World Heritage site. Pass the triangular rock cleft to view sacred Kudaka Island — the hush slows your step.",
        tips: "Buy tickets first at the Nanjo City product center across the road, and park there too before walking up.",
      },
      "naha-chinen-misaki": {
        name: "Chinen Cape Park",
        blurb: "A grassy headland in the Pacific with 270 degrees of gradient-blue sea and a red-tiled pavilion. Free and easy to park — a must-stop on a southern drive.",
        tips: "It shares the product-center parking area with Sefa-utaki, and the two are linked on foot — do them together.",
      },
      "naha-ou-tempura": {
        name: "Nakamoto Fish Tempura (Ou Island)",
        blurb: "A tiny fishing island reached by bridge; the bridgehead shop fries fish and squid tempura for pocket change. Cat colonies and harbor views come free.",
        tips: "Bridge-side parking is scarce; on weekends park in the open lot by the island's harbor and walk back. Fresh-fried means waiting — order first, then wander.",
      },
      "naha-danbo-ramen": {
        name: "Ramen Danbo Makishi",
        blurb: "Tonkotsu crowned best in Kyushu ramen polls — rich broth never too salty, noodle firmness and chili paste made to order. A perfect late-night bowl.",
        tips: "Dinner peak often means a 20-minute-plus wait; late night is easier. No dedicated parking — use paid lots around Makishi and walk over.",
      },
      "naha-eibun-soba": {
        name: "Okinawa Soba EIBUN",
        blurb: "New-wave Okinawa soba in a renovated Tsuboya house — glossy soft-bone pork in clear broth, tradition with cafe-level polish. Closes when broth runs out.",
        tips: "Open lunch through early evening only; arrive before 1 pm for the full topping lineup. No parking lot — use coin parking near Tsuboya Street and browse the pottery shops while you're at it.",
      },
      "naha-shimabutaya": {
        name: "Shimabutaya Agu Pork Shabu-Shabu",
        blurb: "Shabu-shabu specialist using Okinawan Agu pork — sweet-edged fat, a broth deepened by island vegetables. Wood interiors; dinner with awamori feels right.",
        tips: "Book ahead for busy dinner hours. No dedicated parking in Kumoji — use nearby paid lots, or walk about ten minutes from Kokusai-dori.",
      },
      "naha-ohacorte-minatogawa": {
        name: "oHacorté Fruit Tarts Minatogawa",
        blurb: "A fruit-tart specialist in a converted foreigner's house, piling seasonal fruit on crisp buttery shells — one of Okinawa's defining dessert shops.",
        tips: "Each shop in the foreigner-house district has its own numbered parking spaces — find oHacorté's number and don't take another shop's. Popular flavors often sell out by afternoon.",
      },
      "naha-zenzai-sennichi": {
        name: "Zenzai no Sennichi",
        blurb: "An Okinawan shaved-ice institution of sixty-plus years; silky stewed red beans and mochi hide under the kintoki ice. A cooling stop off Kokusai-dori.",
        tips: "Almost no parking out front — use paid lots around Kume and walk over. Summer afternoons bring queues; off-peak hours are easier.",
      },
    },
  },
  "okinawa-north": {
    name: "Central & North Okinawa",
    areas: {
      "本部・名護": "Motobu & Nago",
      "恩納海岸": "Onna Coast",
      "美國村・讀谷": "American Village & Yomitan",
    },
    hubs: {
      "okinawa-north-american-village-hub": "American Village",
      "okinawa-north-yomitan": "Yomitan",
      "okinawa-north-onna": "Onna Village",
      "okinawa-north-nago": "Nago",
      "okinawa-north-motobu": "Motobu",
    },
    souvenirs: [
      "Whale shark goods (Churaumi Aquarium's exclusive whale shark plushies and merchandise)",
      "Nago pineapple products (pineapple cakes, juice and pineapple wine from Nago Pineapple Park)",
      "Orion Beer goods (Okinawa's own beer, born in Nago, plus branded merchandise)",
      "Shikuwasa products (juice and jam of the Yanbaru specialty citrus, shikuwasa)",
    ],
    pois: {
      "okinawa-north-churaumi": {
        name: "Okinawa Churaumi Aquarium",
        blurb: "In the vast Kuroshio Sea tank, whale sharks and manta rays glide overhead — the most awe-inspiring sight in Okinawa. The dolphin show outside is free.",
        tips: "About 2 hours' drive from Naha; entering at opening beats the crowds. The P7 north-gate garage is closest to the entrance, and tickets are discounted after 4 pm.",
      },
      "okinawa-north-bise": {
        name: "Bise Fukugi Tree Lane",
        blurb: "A green tunnel of twenty thousand fukugi trees, dappled light slowing time in the old village. Five minutes from the aquarium — a perfect follow-up stroll.",
        tips: "Park at the paid lot at the village entrance and walk in — don't drive into the narrow lanes. Tandem bicycles are available for rent.",
      },
      "okinawa-north-kouri": {
        name: "Kouri Bridge & Kouri Island",
        blurb: "A two-kilometer bridge arrows straight across emerald shallows — the most famous drive in Okinawa. The island adds the Heart Rock and white-sand beaches.",
        tips: "No stopping on the bridge — first park at the lookout terrace on the Yagaji Island side for the panorama, then drive across.",
      },
      "okinawa-north-pineapple": {
        name: "Nago Pineapple Park",
        blurb: "Ride a self-driving pineapple cart through orchards and gardens — kitschy and joyous. Unlimited pineapple wine and cake tastings are the real draw.",
        tips: "Conveniently between the aquarium and Kouri, with free parking. Good for families even on rainy days, as much of the park is covered.",
      },
      "okinawa-north-kishimoto": {
        name: "Kishimoto Shokudo",
        blurb: "An Okinawa soba institution founded in 1905 — bonito broth with wood-ash handmade noodles. One bowl explains the queue. Ideal before or after the aquarium.",
        tips: "Closed Wednesdays. The main shop is tiny and lunch waits often top 30 minutes; the Yaedake branch has easier parking.",
      },
      "okinawa-north-manzamo": {
        name: "Cape Manzamo",
        blurb: "An elephant-trunk rock cliff rising from coral seas; a Ryukyu king praised the meadow as fit to seat ten thousand. At sunset the whole sea burns gold.",
        tips: "Entry 100 yen, parking free. The loop trail takes about 20 minutes; at dusk, shoot the elephant-trunk rock backlit for a stunning silhouette.",
      },
      "okinawa-north-maeda": {
        name: "Cape Maeda & the Blue Cave",
        blurb: "Okinawa's premier snorkel and dive spot, where the cave's seawater glows electric blue. Even dry, the cape offers cliffs and crystal-clear sea views.",
        tips: "The gate closes when the parking lot fills — in peak season arrive early to get in the water. The cave closes in rough seas, so check the official flag status before setting out.",
      },
      "okinawa-north-moon-beach": {
        name: "Moon Beach (Onna)",
        blurb: "The signature resort beach of the Onna coastline — a crescent of white sand under palm shade. Full water-sports lineup, and day visitors can enter for a fee.",
      },
      "okinawa-north-nakamura-soba": {
        name: "Nakamura Soba",
        blurb: "An ocean-facing Okinawa soba shop on Route 58, known for its refreshing seaweed soba. Five minutes from Cape Manzamo — the classic lunch on an Onna drive.",
      },
      "okinawa-north-american-village": {
        name: "American Village",
        blurb: "An American-style district beside the base. The Ferris wheel is gone, but murals and vintage shops photograph better. End with sunset at Sunset Beach.",
        tips: "Plenty of free parking, but lots fill on weekend evenings — try the Depot Island side. The sun sets straight off Sunset Beach, so claim a spot early.",
      },
      "okinawa-north-zanpa": {
        name: "Cape Zanpa",
        blurb: "Two kilometers of sheer cliffs crowned by a pure-white lighthouse, with waves crashing 30 meters up the rock. One of the main island's finest sunset spots.",
        tips: "Free parking right by the lighthouse. Some cliff edges have no railing and winds are strong — don't get too close for photos.",
      },
      "okinawa-north-hamaya": {
        name: "Hamaya Soba",
        blurb: "A local favorite by the Chatan seaside — soft-bone ribs that melt in the mouth, and a gentle broth you drain to the last drop. A truly local lunch.",
        tips: "Few spaces out front; if full, use the open seaside lot across the way. Going after the lunch rush means less waiting.",
      },
      "okinawa-north-ufuya": {
        name: "Hyakunen Koya Ufuya",
        blurb: "A restaurant in century-old Meiji houses serving Agu pork shabu-shabu and soba sets. Seats line a waterfall stream — touristy, but the mood earns it.",
        tips: "Large free lot with easy parking, about five minutes' drive from Nago Pineapple Park. Tour groups pack lunch hours — arriving before 11:30 is smoothest.",
      },
      "okinawa-north-yakiniku-ganaha": {
        name: "Yakiniku Ganaha",
        blurb: "Yakiniku with Agu pork straight from its own farm — sweet-marbled belly, local wagyu and all-you-can-eat plans. A Nago dinner staple locals love too.",
        tips: "Dinner hours fill up fast, so reserve by phone or online. Free parking beside the shop; the drive from the aquarium back to Nago takes about 40 minutes.",
      },
      "okinawa-north-umibudo-honten": {
        name: "Ganso Umibudo Honten",
        blurb: "Birthplace of the sea-grape bowl — rice blanketed in just-picked umibudo popping bead by bead, best with grated yam and soy. Route 58's most Okinawan meal.",
        tips: "Free parking out front, about five minutes' drive from Cape Manzamo. Ice deflates sea grapes, so eat them promptly at room temperature for the best pop.",
      },
      "okinawa-north-on-the-beach-cafe": {
        name: "On the Beach CAFE",
        blurb: "A spectacular cafe on the Nakijin shore, windows and terrace facing transparent shallows. Between the aquarium and Kouri — the perfect road-trip waypoint.",
        tips: "Free parking available. About five minutes' drive from Nakijin Castle ruins, so pair the two. Visit before dusk for the clearest sea colors.",
      },
      "okinawa-north-fuu-cafe": {
        name: "Fuu Cafe (Sesoko Island)",
        blurb: "A garden cafe hidden in Sesoko Island's woods, serving island-vegetable curry and brown-sugar desserts. Cross the bridge and the pace drops a gear.",
        tips: "Just across the Sesoko Bridge from Motobu, with parking beside the shop. Irregular holidays and early closing — check the website or Instagram before you go.",
      },
    },
  },
  miyako: {
    name: "Miyako Island",
    areas: {
      "前濱・南部": "Maehama & the South",
      "伊良部・下地島": "Irabu & Shimoji Island",
      "平良・北部": "Hirara & the North",
    },
    hubs: {
      "miyako-hirara": "Hirara Downtown",
      "miyako-irabu": "Irabu Island",
      "miyako-maehama": "Yonaha Maehama",
    },
    souvenirs: [
      "Yukishio sweets (Yukishio fuwawa, Yukishio sando and other melt-in-the-mouth snow-salt confections)",
      "Miyako jofu crafts (nationally designated ramie hand-weaving; coasters and bookmarks are the easiest buys)",
      "Mango products (beyond summer fresh fruit, dried mango, jam and mango sweets are sold year-round)",
      "Taragawa awamori (a venerable Miyako distillery; the smooth Ryukyu Ocho line makes a great gift)",
    ],
    pois: {
      "miyako-yonaha-maehama": {
        name: "Yonaha Maehama Beach",
        blurb: "Seven kilometers of powder-white sand hailed as the finest beach in the East, with Kurima Island just across the water. Superb clarity for swimming.",
        tips: "At sunset, look toward Kurima Bridge for the best views. Summer sun is fierce — bring shade and plenty of water.",
      },
      "miyako-irabu-ohashi": {
        name: "Irabu Bridge",
        blurb: "Japan's longest toll-free sea bridge at 3,540 meters, the water shading emerald to deep blue. Driving across feels like flying over the ocean.",
        tips: "No stopping anywhere on the bridge — use the pull-offs and viewpoints at either end for photos. Slow down when crosswinds are strong.",
      },
      "miyako-sunayama-beach": {
        name: "Sunayama Beach",
        blurb: "Climb a white dune and a little cove bursts into view, its rock arch a Miyako postcard star. Vivid blue water but bigger waves — photos and wading.",
        tips: "The 5-minute walk from the parking lot is all soft sand — sandals beat sneakers. The rock arch is fenced off due to falling-rock risk; shoot it from a distance.",
      },
      "miyako-higashi-hennazaki": {
        name: "Cape Higashi-Hennazaki",
        blurb: "A slender cape thrusting two kilometers into the Pacific, surf pounding cliffs on both sides. Climb the lighthouse for a 270-degree horizon.",
        tips: "About 40 minutes' drive from Hirara — string it into a south-coast route. Winds on the cape are strong, so hold onto your hat.",
      },
      "miyako-17end": {
        name: "17END (Shimoji Island)",
        blurb: "A dreamlike shallow at the runway's north end; low tide reveals a pure-white sandbar in pool-clear water. Planes skim overhead — a photographer's favorite.",
        tips: "The sandbar only appears around low tide, so check the tide table first. The whole road is no-stopping — park in the designated lot and walk in.",
      },
      "miyako-shrine": {
        name: "Miyako Shrine",
        blurb: "One of Japan's southernmost shrines, blending Ryukyuan red tiles with vermilion halls. Collect a southern-exclusive goshuin and overlook Hirara Port.",
      },
      "miyako-goja-soba": {
        name: "Goja Soba-ya",
        blurb: "A Miyako soba institution of 80-plus years — clear bonito broth, noodles hidden under toppings the traditional way. The taste locals grow up on.",
      },
      "miyako-yukishio-kobo": {
        name: "Yukishio Salt Museum",
        blurb: "The saltworks and mini museum of Miyako's snow salt, with free tours on how the powder-fine salt is born. The snow-salt soft serve is a must.",
        tips: "On the way to Ikema Bridge, so it fits a driving route. Add a pinch of flavored snow salt to the soft serve — the salty-sweet mix is superb.",
      },
      "miyako-umigame-snorkel": {
        name: "Sea Turtle Snorkeling (Shigira Beach)",
        blurb: "Sea turtles live in Shigira Beach's shallows with high encounter rates — bring gear or join a tour. Swimming with turtles is Miyako's signature experience.",
        tips: "No touching or chasing turtles — keep at least 2 meters away. Watch for rip currents and warning flags; beginners should join a guided tour.",
      },
      "miyako-irabu-soba-kame": {
        name: "Soba-dokoro Kame (Irabu Island)",
        blurb: "A popular soba shop in an Irabu village — bonito broth made rich by fish from the katsuo port, seared soft-bone chashu on top. Best lunch on the drive.",
      },
      "miyako-rakuen-no-kajitsu": {
        name: "Rakuen no Kajitsu",
        blurb: "A farm-run Kurima Island restaurant — extravagant homegrown-mango parfaits and careful island-vegetable set meals, with Kurima Bridge sea views.",
      },
      "miyako-ricco-gelato": {
        name: "RICCO Gelato",
        blurb: "Handmade gelato in downtown Hirara, with a dozen island flavors like Miyako salt, mango and beni-imo. Just right for an early-evening cone after town.",
      },
    },
  },
  ishigaki: {
    name: "Ishigaki & Yaeyama",
    areas: {
      "川平・北部": "Kabira & the North",
      "竹富島": "Taketomi Island",
      "石垣市區": "Ishigaki Downtown",
    },
    hubs: {
      "ishigaki-ritou-terminal": "Ishigaki Remote Island Terminal",
      "ishigaki-kabira": "Kabira Bay",
      "ishigaki-730-kousaten": "730 Crossing (Downtown)",
    },
    souvenirs: [
      "Ishigaki chili oil (Penshoku-do's original 'edible rayu' made with island chilies and spices — often sold out)",
      "Seifuku awamori (a long-established Ishigaki distillery; the classic direct-fire Seifuku and pear liqueur are easy picks)",
      "Yaeyama brown sugar (cane kokuto from Iriomote and Hateruma, portable as blocks or brown-sugar sweets)",
      "Ishigaki salt (simmered from nearby seawater; plain and seasoned salts make great cooking souvenirs)",
    ],
    pois: {
      "ishigaki-kabira-bay": {
        name: "Kabira Bay",
        blurb: "Ishigaki's top sight, rated Michelin three stars — milky sand and a bay of shifting blues dotted with islets. Glass-bottom boats run 30-minute trips.",
        tips: "Swimming is banned in the bay — head to nearby Sukuji Beach instead. The glass-boat ticket booth is beside the parking lot; morning light gives the clearest sea colors.",
      },
      "ishigaki-hirakubozaki": {
        name: "Hirakubozaki Lighthouse",
        blurb: "The white lighthouse at Ishigaki's northern tip, flanked by blues too vivid to seem real. From the cape, the Pacific and East China Sea meet at your feet.",
        tips: "About 1.5 hours' drive each way from town; roads narrow up north, so watch for wandering cattle. Pair it with Akashi Shokudo on the same route.",
      },
      "ishigaki-uganzaki": {
        name: "Cape Uganzaki",
        blurb: "A cliff-edged cape at Ishigaki's western tip, its white lighthouse on grassy slopes over the East China Sea. A top sunset spot, with wild lilies in spring.",
      },
      "ishigaki-taketomi-village": {
        name: "Taketomi Village & Water Buffalo Carts",
        blurb: "A whole island of preserved red-tiled houses and coral-sand lanes. Buffalo carts sway through the village to sanshin and song — the primal Yaeyama scene.",
        tips: "High-speed ferries from the remote island terminal take 10–15 minutes and run frequently. Get around by rental bicycle or buffalo cart, and check return ferry times in advance.",
      },
      "ishigaki-kaiji-beach": {
        name: "Kaiji Beach (Star Sand Beach)",
        blurb: "A small beach famed for star-shaped sand — press a palm down and you'll find grains, while cats laze in the shade. No swimming; come to treasure-hunt.",
        tips: "Star sand is actually foraminifera shells and on-site collecting is regulated — buying a bottled vial from the shops is the safe way to take some home.",
      },
      "ishigaki-maboroshi-island": {
        name: "Phantom Island (Hamajima) Snorkeling",
        blurb: "A crescent sandbar surfacing only at low tide, ringed by glass-clear coral shallows. Most half-day boat tours include snorkeling with tropical fish.",
        tips: "Join a boat tour from the remote island terminal; most operators suspend trips in rough winter seas. Reconfirm the boarding point and meeting time the day before.",
      },
      "ishigaki-public-market": {
        name: "Ishigaki Public Market",
        blurb: "The civic market in the Euglena Mall arcade — Ishigaki beef, island produce and seafood downstairs, souvenir shops all around. A handy rainy-day backup.",
      },
      "ishigaki-yakiniku-yamamoto": {
        name: "Yakiniku Yamamoto",
        blurb: "The legendary Ishigaki beef yakiniku house — charcoal-grilled marbled cuts, a top loin that melts on the tongue. Often full the moment it opens.",
        tips: "Nearly impossible to walk in — reserve by phone well ahead. They close early once the meat sells out; if you can't book, try other Ishigaki beef yakiniku spots in town.",
      },
      "ishigaki-taira-shoten": {
        name: "Taira Shoten",
        blurb: "A popular downtown Yaeyama soba shop — soft-bone sparerib soba in a clean sweet broth, layered with house chili oil and pipatsu pepper. A lunch staple.",
      },
      "ishigaki-akashi-shokudo": {
        name: "Akashi Shokudo",
        blurb: "A legendary diner in the northern hamlet of Akashi — soft-bone soba stewed to melting tenderness, worth every minute of the queue. The best detour north.",
        tips: "Open only from midday to early evening, closing when sold out — aim to arrive before noon. Holidays are irregular, so check it's open before setting out.",
      },
      "ishigaki-milmil": {
        name: "MilMil Honpo Main Shop",
        blurb: "A hilltop gelato shop using milk from its own farm; mango and salt flavors lead. Seats face the East China Sea — sunset ice cream is an Ishigaki classic.",
        tips: "On the way from town to Kabira Bay, an easy drive-by stop. The open-air seats are windy and gelato melts fast — take photos quickly.",
      },
      "ishigaki-ritou-pier": {
        name: "Remote Island Terminal Area",
        blurb: "Gateway to the Yaeyama islands — boxer Yoko Gushiken's statue is the photo landmark, souvenir shops and diners all around. Great ferry-wait browsing.",
      },
      "ishigaki-takenoko": {
        name: "Soba-dokoro Takenoko",
        blurb: "A time-honored soba shop in the Taketomi village — light sweet Yaeyama soba that blooms with a shake of pipatsu pepper. First-choice lunch after the village.",
      },
    },
  },
};
