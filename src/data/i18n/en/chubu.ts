import type { CityTranslation } from "../types";

// Chubu 英文翻譯包:ise / nagoya / takayama / matsumoto / tateyama / kanazawa。
export const cities: Record<string, CityTranslation> = {
  ise: {
    name: "Ise-Shima",
    areas: {
      "內宮・托福橫丁": "Naiku & Okage Yokocho",
      "外宮・二見": "Geku & Futami",
      志摩: "Shima",
    },
    hubs: {
      "ise-sta-iseshi": "Iseshi Station",
      "ise-sta-isuzugawa": "Isuzugawa Station",
      "ise-sta-kashikojima": "Kashikojima Station",
    },
    souvenirs: [
      "Akafuku (Ise's famous red-bean mochi; short shelf life, so buy just before heading home)",
      "Ise-ebi senbei (crispy lobster crackers from Ise-Shima, savory and easy to share)",
      "Omamori charms and lucky goods (Ise Jingu keepsakes: fortune bells, sacred sake)",
      "Ise udon dried-noodle sets (extra-thick soft noodles with sweet dark soy tare, recreated at home)",
      "Henba-mochi (grilled mochi from Henbaya, a classic treat of old Ise pilgrims)",
    ],
    pois: {
      "ise-naiku": {
        name: "Ise Jingu Naiku (Inner Shrine)",
        blurb:
          "Japan's holiest Shinto shrine, home of sun goddess Amaterasu. Cross the Uji Bridge into a 2,000-year-old cedar-lined sanctuary rebuilt every 20 years.",
        tips: "Tradition says to visit the Outer Shrine (Geku) first; early morning is quietest and feels most sacred.",
      },
      "ise-geku": {
        name: "Ise Jingu Geku (Outer Shrine)",
        blurb:
          "Dedicated to Toyouke, deity of food, clothing and shelter. Pilgrimages traditionally start here; its mossy paths are quieter than Naiku's.",
        tips: "About 10 min on foot from Iseshi Station; afterwards take the bus (~20 min) to Naiku, in keeping with the traditional order.",
      },
      "ise-okage-yokocho": {
        name: "Okage Yokocho",
        blurb:
          "A lively Edo-Meiji style district by Naiku's approach, where old shops and food stalls run on and on. Graze your way through after the shrine.",
        tips: "Midday on weekends gets packed, so dodge the peak; most shops close by early evening, so don't leave it too late.",
      },
      "ise-butasute": {
        name: "Butasute (Croquettes & Beef)",
        blurb:
          "A Meiji-era wagyu house in Okage Yokocho whose fresh-fried croquettes and beef mince balls draw fast queues; sit inside for gyudon or sukiyaki.",
        tips: "The takeout croquette line moves fast, so don't be scared off; queue inside only if you want the beef bowl.",
      },
      "ise-akafuku-honten": {
        name: "Akafuku Main Store",
        blurb:
          "A 300-year-old Ise classic: soft mochi under red-bean paste rippled like the Isuzu River, perfect with roasted tea. Best eaten on the riverside veranda.",
        tips: "The main store opens at 5 a.m., so stop by before your shrine visit; summer-only Akafuku shaved ice and winter zenzai are worth chasing.",
      },
      "ise-sushikyu": {
        name: "Sushikyu (Tekone-zushi)",
        blurb:
          "An old Oharaimachi restaurant famed for tekone-zushi: soy-marinated bonito tossed through vinegared rice, born on Shima fishing boats. Riverside seats.",
        tips: "Queues at mealtimes are the norm — put your name on the waitlist, then wander Okage Yokocho while you wait.",
      },
      "ise-sarutahiko": {
        name: "Sarutahiko Shrine",
        blurb:
          "Dedicated to Sarutahiko, the deity of guidance who points lives and ventures the right way. Sarume Shrine on the grounds blesses the performing arts.",
      },
      "ise-meoto-iwa": {
        name: "Meoto Iwa (Wedded Rocks)",
        blurb:
          "Two rocks bound by a sacred rope symbolize a happy marriage, the emblem of Futamigaura. From May to July the sun rises right between them.",
        tips: "About 15 min on foot from JR Futaminoura Station; arrive before dawn for the sunrise between the rocks, best around the summer solstice.",
      },
      "ise-yamaguchiya": {
        name: "Ise Udon Yamaguchiya",
        blurb:
          "An old shop by Iseshi Station for Ise udon: ultra-soft thick noodles in dark tamari sauce that looks fierce but isn't salty. Oddly addictive.",
        tips: "Two or three minutes from Iseshi Station — ideal after visiting Geku; the ultra-soft noodles are the style, not a mistake.",
      },
      "ise-yokoyama-tenbodai": {
        name: "Yokoyama Observatory",
        blurb:
          "A spectacular deck over Ago Bay, where sixty islets and pearl rafts dot turquoise water — the signature view of Ise-Shima National Park.",
        tips: "Easiest by car or taxi from Ugata Station; the walk up takes about 40 min. Late afternoon light over the bay is loveliest.",
      },
      "ise-mediterranean-village": {
        name: "Shima Mediterranean Village",
        blurb:
          "A whitewashed Mediterranean-style resort on Ago Bay that photographs like Spain. Day visitors can enter, and costume rentals are the classic move.",
        tips: "Public transport is limited — about 15 min by taxi from Ugata Station; sunset turns the white walls gold for the best photos.",
      },
      "ise-yashiro": {
        name: "Amimoto no Mise Yashiro",
        blurb:
          "A fisherman-owner's diner in Kashikojima piling seafood bowls high; Ise lobster and the day's catch appear as luck allows, boat-fresh and hearty.",
        tips: "Long lunch queues are common, so arrive before opening; it pairs perfectly with an Ago Bay sightseeing cruise.",
      },
    },
  },

  nagoya: {
    name: "Nagoya",
    areas: {
      名古屋城: "Nagoya Castle",
      名古屋站周邊: "Around Nagoya Station",
      榮: "Sakae",
      "大須・矢場町": "Osu & Yabacho",
      "熱田・名古屋港": "Atsuta & Nagoya Port",
      長久手: "Nagakute",
      今池: "Imaike",
      いりなか: "Irinaka",
    },
    hubs: {
      "nagoya-sta-nagoya": "Nagoya Station",
      "nagoya-sta-sakae": "Sakae Station",
      "nagoya-osu-kannon": "Osu Kannon",
      "nagoya-sta-kanayama": "Kanayama Station",
    },
    souvenirs: [
      "Yukari (Bankaku's fried shrimp crackers, the definitive Nagoya souvenir)",
      "Aoyagi uiro (steamed rice-flour cakes from a venerable Nagoya maker, simple and chewy)",
      "Piyorin (chick-shaped pudding dessert; same-day only, so eating it on the spot is wisest)",
      "Keishindo shrimp senbei (whole shrimp pressed into crackers, elegantly boxed for gifting)",
      "Vacuum-packed tebasaki (chicken wings from Sekai no Yamachan and other famous shops, reheated at home)",
    ],
    pois: {
      "nagoya-castle": {
        name: "Nagoya Castle",
        blurb:
          "Tokugawa Ieyasu's Owari stronghold, crowned by golden shachihoko. The rebuilt Honmaru Palace with gilded Kano-school paintings is the real highlight.",
        tips: "The main keep is closed for seismic reasons — spend your time in the Honmaru Palace instead.",
      },
      "nagoya-kinshachi-yokocho": {
        name: "Kinshachi Yokocho",
        blurb:
          "A gourmet quarter at the castle gates gathering famous names in eel, miso oden and Nagoya Cochin chicken — the natural post-castle meal stop.",
      },
      "nagoya-toyota-museum": {
        name: "Toyota Commemorative Museum of Industry and Technology",
        blurb:
          "The Toyota group's red-brick birthplace mill, tracing the story from automatic looms to cars. Live machine demonstrations captivate all ages.",
        tips: "Closed Mondays; one station from Nagoya Station, or take the Me~guru sightseeing bus.",
      },
      "nagoya-kishimen-sumiyoshi": {
        name: "Sumiyoshi Kishimen (Shinkansen Platform)",
        blurb:
          "A stand-and-slurp kishimen counter right on the Shinkansen platform, its bonito-scented flat noodles a classic Nagoya send-off before your train.",
        tips: "It's on the platform itself, so you need a train ticket or platform ticket to get in.",
      },
      "nagoya-oasis21": {
        name: "Oasis 21 & Chubu Electric MIRAI TOWER",
        blurb:
          "The glass 'Spaceship-Aqua' roof floats above Sakae with a water garden on top. Go up at dusk for the classic view of the illuminated TV tower.",
      },
      "nagoya-yamachan": {
        name: "Sekai no Yamachan Main Store",
        blurb:
          "One of Nagoya's chicken-wing titans, whose boldly peppered 'phantom tebasaki' are unbeatable with beer. Open late in a Sakae backstreet.",
      },
      "nagoya-science-museum": {
        name: "Nagoya City Science Museum",
        blurb:
          "A giant silver sphere in Shirakawa Park housing one of the world's largest planetariums, plus aurora and electric-discharge shows. Top rainy-day pick.",
        tips: "Closed Mondays; planetarium tickets sell out fast, so arrive at opening if you want a show.",
      },
      "nagoya-osu-shotengai": {
        name: "Osu Shopping District",
        blurb:
          "A 400-year-old temple-front arcade jumbling electronics, vintage clothes, anime culture and world street food. Snack your way from Osu Kannon.",
      },
      "nagoya-yabaton": {
        name: "Yabaton Main Store (Miso Katsu)",
        blurb:
          "The synonym of miso katsu: crisp pork tenderloin drenched in thick dark bean-miso sauce. No Nagoya trip is complete without this over rice.",
        tips: "Arrive before the 11 a.m. opening to be safe; peak-time waits start at 30 minutes.",
      },
      "nagoya-atsuta-jingu": {
        name: "Atsuta Jingu",
        blurb:
          "A thousand-year-old shrine holding the sacred sword Kusanagi, its camphor forest unexpectedly serene — the spiritual home of Nagoya locals.",
      },
      "nagoya-horaiken": {
        name: "Atsuta Horaiken Main Store (Hitsumabushi)",
        blurb:
          "The originator of hitsumabushi, eel rice eaten three ways: plain, with condiments, then as chazuke. Charcoal-crisped and worth the pilgrimage.",
        tips: "Closed Wednesdays; write your name at the door before opening, then visit Atsuta Jingu while you wait for your number.",
      },
      "nagoya-port-aquarium": {
        name: "Port of Nagoya Public Aquarium",
        blurb:
          "One of Japan's largest aquariums, starring orcas and belugas, with a dolphin-show pool billed as the world's biggest. Great with kids or in rain.",
        tips: "Closed Mondays; check dolphin show times first, then plan your route through the aquarium around them.",
      },
      "nagoya-ghibli-park": {
        name: "Ghibli Park",
        blurb:
          "Five themed areas, from Ghibli's Grand Warehouse to the Valley of Witches, scattered through Expo park. No rides — the magic is walking into film scenes.",
        tips: "Fully reservation-based and often sold out, so buy the moment tickets go on sale; closed Tuesdays. Take the Higashiyama subway line to Fujigaoka, then the Linimo.",
      },
      "nagoya-rotunda-kazegaoka": {
        name: "Rotunda Kazegaoka",
        blurb:
          "A bakery-cafe by Ghibli Park's entrance elevator tower selling themed breads and bento without a park ticket — the practical refueling stop.",
      },
      "nagoya-misen-imaike": {
        name: "Misen Taiwan Ramen (Imaike Main Store)",
        blurb:
          "Birthplace of 'Taiwan ramen', a fiery garlic-and-chili minced-pork noodle soup that's actually a Nagoya original. Sweat-inducing but unstoppable.",
        tips: "The Imaike main store opens only in the evening; for lunch, try the JR Nagoya Station branch instead.",
      },
      "nagoya-yamamotoya-honke": {
        name: "Yamamotoya Sohonke (Miso Nikomi Udon)",
        blurb:
          "A century-old master of miso-nikomi udon, the bean-miso broth bubbling in its clay pot to the last sip. Add Nagoya Cochin chicken for luxury.",
        tips: "The firm center of the noodles is the authentic style, not undercooking; use the clay-pot lid as a small dish for the noodles.",
      },
      "nagoya-torikai-esca": {
        name: "Torikai Sohonke (ESCA Branch)",
        blurb:
          "Award-winning Nagoya Cochin oyakodon, silky half-set egg over springy chicken, in the underground mall by the Shinkansen exit. Good before a train.",
        tips: "In the ESCA underground mall by the Shinkansen west exit; expect around a 20-minute wait at mealtimes.",
      },
      "nagoya-yokoi-ankake": {
        name: "Spaghetti House Yokoi (Sumiyoshi Main Store)",
        blurb:
          "The founding shop of Nagoya's 'ankake spaghetti': thick pan-fried noodles in a peppery, viscous sauce. Order the sausage-and-pepper Milacan first.",
      },
      "nagoya-komeda-honten": {
        name: "Komeda's Coffee Main Store",
        blurb:
          "First shop of the nationwide Nagoya kissaten chain and birthplace of morning service — free toast and egg with coffee. Full of Showa charm.",
        tips: "Order a drink before 11 a.m. for the free morning set; take the Tsurumai line to Irinaka Station and walk over.",
      },
      "nagoya-piyorin-village": {
        name: "Piyorin Village Cafe",
        blurb:
          "A cafe devoted to Piyorin, Nagoya's chick-shaped pudding, opened in 2026 on the station's central concourse. Five-plus flavors, too cute to eat.",
        tips: "Cafe seats can be reserved online; the puddings don't survive jostling, so eat your takeout nearby to be safe.",
      },
    },
  },

  takayama: {
    name: "Takayama & Shirakawa-go",
    areas: {
      高山市區: "Takayama Town",
      白川鄉: "Shirakawa-go",
    },
    hubs: {
      "takayama-sta-takayama": "Takayama Station",
      "takayama-sanmachi": "Sanmachi Old Town",
      "takayama-shirakawago-bt": "Shirakawa-go Bus Terminal",
    },
    souvenirs: [
      "Sarubobo (faceless Hida baby-monkey charms; each color carries its own blessing)",
      "Hida beef products (jerky and curry pouches that carry Hida beef flavor home at room temperature)",
      "Hoba miso (Hida country comfort — grill it on a magnolia leaf at home, perfect over rice)",
      "Hida shunkei lacquerware (translucent amber lacquer; trays and bento boxes are classics)",
    ],
    pois: {
      "takayama-sanmachi-suji": {
        name: "Sanmachi Old Town",
        blurb:
          "One of Japan's best-preserved Edo merchant quarters, dark-latticed eaves sheltering sake breweries and miso shops. Look for cedar-ball tastings.",
        tips: "Before 10 a.m. the tour buses haven't arrived and the old streets are at their most pleasant.",
      },
      "takayama-miyagawa-asaichi": {
        name: "Miyagawa Morning Market",
        blurb:
          "A traditional riverside market where farm grandmothers sell pickles, miso and Hida apples. Fresh apple juice and grilled dango start local mornings.",
        tips: "Open only until noon; the earlier you go, the more stalls you'll find.",
      },
      "takayama-jinya": {
        name: "Takayama Jinya",
        blurb:
          "Japan's only fully preserved Edo shogunate governor's office, with tatami halls and the white-gravel court intact. A morning market runs outside.",
      },
      "takayama-kotteushi": {
        name: "Hida Kotte Ushi (Beef Sushi)",
        blurb:
          "Famed Hida-beef nigiri on the old street: seared wagyu with fresh wasabi that melts away, served on a soy-cracker plate you eat afterward.",
        tips: "Queues start at 20 minutes but move fast; the three-piece set is the best value.",
      },
      "takayama-hachimangu": {
        name: "Sakurayama Hachimangu & Festival Float Hall",
        blurb:
          "Stage of the autumn Takayama Festival, its approach ending in forest calm. The adjoining hall displays real festival floats, gilded and dazzling.",
      },
      "takayama-hida-no-sato": {
        name: "Hida Folk Village",
        blurb:
          "An open-air museum of thirty-plus relocated Hida farmhouses, gassho roofs dotting a hillside pond. A fine substitute if Shirakawa-go won't fit.",
        tips: "About 10 min by bus from Takayama Station; extra services run for the winter evening illuminations.",
      },
      "takayama-shirakawago": {
        name: "Shirakawa-go Gassho Village (Ogimachi)",
        blurb:
          "A World Heritage village of thatched gassho farmhouses scattered like a fairy tale. Several open their interiors; winter snow scenes are unforgettable.",
        tips: "About 50 min from Takayama by Nohi Bus; reserve tickets online ahead in peak season.",
      },
      "takayama-shiroyama-tenbodai": {
        name: "Ogimachi Castle Ruins Observatory",
        blurb:
          "The classic vantage over the whole Ogimachi village — every postcard is shot here. A 20-minute walk up, with a shuttle bus for the rest of us.",
        tips: "On winter light-up nights the deck is lottery-only — no winning ticket, no entry.",
      },
      "takayama-wada-house": {
        name: "Wada House",
        blurb:
          "Ogimachi's largest gassho house and an Important Cultural Property, still lived in. The attic's roof joinery and silkworm displays explain it all.",
      },
      "takayama-soba-nomura": {
        name: "Soba Dokoro Nomura",
        blurb:
          "A popular handmade soba shop in the village, its noodles made with Hakusan spring water and served with mountain vegetables. Sells out by afternoon.",
      },
      "takayama-suzuya": {
        name: "Suzuya (Hoba Miso Set)",
        blurb:
          "Hida country cooking in an old townhouse: miso and scallions toasted on a magnolia leaf over charcoal — the taste of this mountain town.",
        tips: "You tend the flame yourself once the hoba miso arrives; it's best stirred into rice when the edges bubble and char slightly.",
      },
      "takayama-menya-shirakawa": {
        name: "Menya Shirakawa (Takayama Ramen)",
        blurb:
          "The queue-worthy face of Takayama ramen: a clean yet deep soy broth, thin wavy noodles, chashu and scallions. Best on a snowy day.",
        tips: "They close early once the broth runs out, so don't wait past midday; the shop is tiny, so off-peak visits mean shorter queues.",
      },
      "takayama-kissako-katsute": {
        name: "Kissako Katsute (Old Town Teahouse)",
        blurb:
          "A machiya teahouse on the old street, lattice-window seats facing the eaves and warabi-mochi that melts away. Rest here with a matcha set.",
        tips: "Closed Wednesdays; the famous warabi-mochi often sells out, so don't leave it until late afternoon.",
      },
    },
  },

  matsumoto: {
    name: "Matsumoto & Kamikochi",
    areas: {
      松本市區: "Matsumoto Town",
      上高地: "Kamikochi",
    },
    hubs: {
      "matsumoto-sta-matsumoto": "Matsumoto Station",
      "matsumoto-castle-area": "Matsumoto Castle",
      "matsumoto-kamikochi-bt": "Kamikochi Bus Terminal",
    },
    souvenirs: [
      "Shinshu dried soba (from Japan's buckwheat heartland — cook a taste of Matsumoto at home)",
      "Nozawana pickles (Shinshu's signature pickled greens; vacuum packs travel well, great with rice or sake)",
      "Candies from Yamaya Goaidokoro (a 300-year-old candy shop; Matsumoto has long been a candy-fair town)",
      "Kaiundo Shinmito (walnut-and-honey chewy candy, the flagship sweet of a venerable Matsumoto maker)",
      "Temariya baumkuchen (a baumkuchen specialist inspired by Matsumoto's temari balls)",
    ],
    pois: {
      "matsumoto-castle": {
        name: "Matsumoto Castle",
        blurb:
          "A National Treasure among the twelve surviving keeps, black-lacquered walls mirrored in the moat against the Alps. Steep stairs, warlord views.",
        tips: "In peak season expect queues inside and very steep stairs — hit the keep the moment it opens, then stroll the honmaru garden.",
      },
      "matsumoto-nawate-dori": {
        name: "Nawate-dori (Frog Street)",
        blurb:
          "A nostalgic frog-mascot lane along the Metoba River, lined with knickknacks, taiyaki and antiques. The bridge-side frog statue is the photo spot.",
      },
      "matsumoto-nakamachi-dori": {
        name: "Nakamachi-dori (Storehouse Street)",
        blurb:
          "A street of white-walled kura storehouses hosting folk-craft shops, miso stores and galleries — Edo merchant air with a mingei soul.",
      },
      "matsumoto-kyu-kaichi-school": {
        name: "Former Kaichi School",
        blurb:
          "An 1876 pseudo-Western schoolhouse with an octagonal tower and angel carvings — the first modern school building named a National Treasure.",
        tips: "Closures follow a Tuesday pattern: every Tuesday from Dec–Feb, only the 3rd Tuesday from Mar–Nov — check the website before going.",
      },
      "matsumoto-city-art-museum": {
        name: "Matsumoto City Museum of Art",
        blurb:
          "The museum of Yayoi Kusama's hometown, announced by a giant tulip sculpture and dot-covered vending machines. The Kusama collection is unmissable.",
        tips: "Closed Mondays (or the next day after holidays); don't miss the polka-dot exclusives in the museum shop after the permanent exhibit.",
      },
      "matsumoto-kappa-bashi": {
        name: "Kappa Bridge (Kamikochi)",
        blurb:
          "Kamikochi's iconic suspension bridge over the crystal Azusa River, looking straight up at the Hotaka peaks — alpine scenery among Japan's finest.",
        tips: "Private cars are banned year-round; transfer to a shuttle bus at Sawando or Hirayu. The valley is closed mid-November to mid-April.",
      },
      "matsumoto-taisho-ike": {
        name: "Taisho Pond",
        blurb:
          "A pond born when Mt. Yakedake dammed the Azusa River; dead trees stand in misty mirror water, dreamiest at dawn. Walk an hour to Kappa Bridge.",
        tips: "Get off the bus into Kamikochi at Taisho Pond first, then stroll downstream to Kappa Bridge — the smoothest way to do it.",
      },
      "matsumoto-myojin-ike": {
        name: "Myojin Pond",
        blurb:
          "A sacred pond in Hotaka Shrine's inner sanctuary, two crystal basins beneath Mt. Myojin. An hour's walk from Kappa Bridge, quieter with every step.",
        tips: "Allow about two hours round trip and time it against the last bus out; the grilled river fish at Kamonji-goya is worth a stop.",
      },
      "matsumoto-nomugi": {
        name: "Soba Dokoro Nomugi",
        blurb:
          "A celebrated Shinshu soba shop with essentially one dish: stone-milled, hand-cut zaru soba, gloriously fragrant. Few seats; closes when sold out.",
        tips: "Lunch only, and they close when the soba runs out — line up before opening if you want to be sure.",
      },
      "matsumoto-karaage-center": {
        name: "Matsumoto Karaage Center (Sanzoku-yaki)",
        blurb:
          "A sanzoku-yaki specialist in the station building: whole chicken thigh in garlic-soy, gloriously deep-fried. The easiest local dish before a train.",
        tips: "On the 4th floor of MIDORI, directly connected to Matsumoto Station; expect a short wait at peak times, so leave buffer before your train.",
      },
      "matsumoto-marumo": {
        name: "Coffee Marumo",
        blurb:
          "The teahouse of the old Marumo ryokan, steeping folk-craft furniture, warm wood and siphon coffee in Showa mood. Perfect after the old streets.",
      },
      "matsumoto-kamikochi-shokudo": {
        name: "Kamikochi Shokudo",
        blurb:
          "The canteen above Kamikochi Bus Terminal, serving sanzoku-yaki and grilled river fish with mountains in the windows. Open from early morning in season.",
      },
    },
  },

  tateyama: {
    name: "Tateyama Kurobe",
    areas: {
      "室堂・立山高原": "Murodo & Tateyama Highlands",
      黑部水壩: "Kurobe Dam",
    },
    hubs: {
      "tateyama-sta": "Tateyama Station",
      "tateyama-murodo": "Murodo",
      "tateyama-ogizawa": "Ogizawa",
    },
    souvenirs: [
      "Shiro-ebi senbei (Toyama Bay white shrimp crackers from Sasaraya and others, light and easy to share)",
      "Raicho no Sato (European-style wafer sandwiches, the classic Omachi-side souvenir in a cute ptarmigan tin)",
      "Kurobe Dam curry pouches (the dam restaurant's popular retort-curry merchandise)",
      "Firefly squid products (Toyama's famed hotaruika, dried or marinated — superb with sake)",
    ],
    pois: {
      "tateyama-yuki-no-otani": {
        name: "Yuki-no-Otani Snow Walls",
        blurb:
          "A spring-only walkway between snow walls carved nearly 20 meters high, like strolling a white canyon — the Tateyama spectacle travelers fly in for.",
        tips: "Open from around mid-April to late June, with the walls highest in April–May; it's only 5–10°C up top, so bring a windproof jacket.",
      },
      "tateyama-murododaira": {
        name: "Murodo-daira & Mikurigaike Pond",
        blurb:
          "The route's 2,450 m high point, where volcanic Mikurigaike mirrors the Tateyama peaks; the loop trail takes an hour. Flowers in summer, fall color.",
        tips: "Buy the Alpine Route pass or web tickets in advance — peak-season ticket lines waste serious time.",
      },
      "tateyama-daikanbo": {
        name: "Tateyama Ropeway & Daikanbo",
        blurb:
          "A ropeway with no support towers along its span, gliding seven minutes past cliffs as Lake Kurobe unfurls below. Daikanbo's deck is the grandstand.",
      },
      "tateyama-kurobe-dam": {
        name: "Kurobe Dam",
        blurb:
          "Japan's tallest arch dam at 186 meters, a Showa engineering legend. The summer-autumn discharge hurls ten tons of water a second into rainbowed mist.",
        tips: "The sightseeing discharge runs from late June to mid-October; climb the 220 steps to the upper observation deck for the best view.",
      },
      "tateyama-kurobeko-cruise": {
        name: "Lake Kurobe Cruise 'Garube'",
        blurb:
          "Japan's highest-altitude pleasure boat: a 30-minute circuit of Lake Kurobe past emerald water, conifers and snowy ridges. The dam looms from below.",
        tips: "Runs only early June to October with limited sailings — check the timetable at the pier before planning your dam visit.",
      },
      "tateyama-midagahara": {
        name: "Midagahara Wetlands",
        blurb:
          "A highland marsh at 1,900 m, boardwalks crossing pond-dotted grassland with Toyama Bay beyond on clear days. The route's quiet interlude.",
        tips: "Highland buses use a hop-off system — reserve your onward bus before alighting; boardwalks often hold leftover snow before June.",
      },
      "tateyama-murodo-shokudo": {
        name: "Tateyama Soba (Murodo Terminal)",
        blurb:
          "A stand-up soba institution in Murodo terminal, famous for white-shrimp croquette soba; hot broth chases the alpine chill in a ten-minute stop.",
        tips: "Dining options up top are scarce and close early — don't push lunch past 2 p.m.; rice balls on the observation deck also work.",
      },
      "tateyama-raicho-watching": {
        name: "Ptarmigan Watching",
        blurb:
          "Murodo is a key habitat of the protected rock ptarmigan, easiest to spot in the spring molt. Meeting the plump alpine bird is a hidden achievement.",
        tips: "They appear more readily in mist or light rain; walk the Mikurigaike trail slowly at dawn, and never feed or chase them.",
      },
      "tateyama-hotel-rindo": {
        name: "Tea Lounge Rindo (Hotel Tateyama)",
        blurb:
          "The tea lounge of Japan's highest hotel: spring-water coffee with the Tateyama range filling the window. A warm finale to snow walls or the lake loop.",
      },
      "tateyama-dam-resthouse": {
        name: "Kurobe Dam Rest House",
        blurb:
          "The canteen by the dam crest, famed for Kurobe Dam curry — rice sculpted into an arch dam holding a curry lake. The Nagano side's surest meal.",
      },
    },
  },

  kanazawa: {
    name: "Kanazawa",
    areas: {
      "兼六園・金澤城": "Kenrokuen & Kanazawa Castle",
      "東茶屋街・主計町": "Higashi Chaya & Kazuemachi",
      "金澤站・近江町": "Kanazawa Station & Omicho",
      "香林坊・長町・西茶屋": "Korinbo, Nagamachi & Nishi Chaya",
    },
    hubs: {
      "kanazawa-sta-kanazawa": "Kanazawa Station",
      "kanazawa-korinbo": "Korinbo",
      "kanazawa-higashichaya": "Higashi Chaya District",
      "kanazawa-kenrokuen-shita": "Kenrokuen-shita & Kanazawa Castle",
    },
    souvenirs: [
      "Gold-leaf sweets (gold-leaf castella and yokan — Kanazawa produces most of Japan's gold leaf)",
      "Ukokkeian gold-leaf castella (honey cake made with silky-fowl eggs, finished with gold leaf)",
      "Gold-leaf cosmetics (blotting papers and skincare from Hakuichi and other leaf makers)",
      "Kaga bocha (fragrant roasted-stem tea; Maruhachi Tea Shop is the most renowned)",
      "Nakataya kintsuba (red-bean kintsuba from the definitive old Kanazawa wagashi house)",
    ],
    pois: {
      "kanazawa-kenrokuen": {
        name: "Kenrokuen Garden",
        blurb:
          "First among Japan's three great gardens: winding streams, Kasumi Pond and the Kotoji lantern make postcard views in snow, blossom and autumn leaves.",
        tips: "The first hour after opening is quietest; the yukitsuri snow-ropes rigged from November are a signature Kanazawa winter sight.",
      },
      "kanazawa-castle-park": {
        name: "Kanazawa Castle Park",
        blurb:
          "Seat of the Maeda lords, its Hishi Yagura turret and long storehouse rebuilt by traditional methods. White namako walls, one bridge from Kenrokuen.",
      },
      "kanazawa-21bi": {
        name: "21st Century Museum of Contemporary Art",
        blurb:
          "A circular glass museum of contemporary art starring the illusion of 'The Swimming Pool'. Free zones hold plenty, and lawn sculptures photograph well.",
        tips: "Closed Mondays; viewing the pool from below requires an exhibition ticket, and holidays often mean numbered queue tickets.",
      },
      "kanazawa-shigure-tei": {
        name: "Shigure-tei Teahouse (Kenrokuen)",
        blurb:
          "A restored teahouse inside Kenrokuen: a bowl of matcha with fresh wagashi on tatami facing the garden — the proper pace for a daimyo's garden.",
      },
      "kanazawa-higashi-chaya": {
        name: "Higashi Chaya District",
        blurb:
          "Kanazawa's largest geisha quarter, wooden lattice facades intact and shamisen drifting at dusk. Gold-leaf shops and wagashi makers line the way.",
        tips: "Before 8 a.m. is quietest; the Shima teahouse is an Important Cultural Property well worth the entry fee.",
      },
      "kanazawa-kazuemachi": {
        name: "Kazuemachi Chaya District",
        blurb:
          "A small geisha street along the Asano River, most atmospheric at lantern-lit dusk. Cross the bridge from Higashi Chaya and collect both in one stroll.",
      },
      "kanazawa-hakuichi": {
        name: "Hakuichi Gold-Leaf Ice Cream (Higashiyama)",
        blurb:
          "Gold-leaf house Hakuichi's famous soft-serve, boldly gilded with an entire sheet of gold. Nearly a thousand yen — exactly Kanazawa's little luxury.",
      },
      "kanazawa-omicho": {
        name: "Omicho Market",
        blurb:
          "Kanazawa's kitchen: a 300-year-old market crammed with seafood stalls and kaisendon shops. Crab, sweet shrimp, winter yellowtail — Hokuriku at once.",
        tips: "Line up at the famous seafood-bowl shops before 11 a.m.; stalls wind down through the afternoon, so don't save it for evening.",
      },
      "kanazawa-tsuzumimon": {
        name: "Tsuzumimon Gate (Kanazawa Station)",
        blurb:
          "A colossal timber gate shaped like Noh hand drums, once ranked among the world's most beautiful stations. Grandest lit at night by the glass dome.",
      },
      "kanazawa-morimori-sushi": {
        name: "Morimori Sushi (Kanazawa Station)",
        blurb:
          "A beloved conveyor-belt sushi chain born in Noto, near the station in Forus, with counter-shop freshness. White shrimp and kobako crab are musts.",
        tips: "Take a numbered ticket and go shopping while you wait — hour-long waits are normal at peak times.",
      },
      "kanazawa-nagamachi": {
        name: "Nagamachi Samurai District",
        blurb:
          "The preserved quarter of Kaga's middle samurai, all earthen walls and stone lanes. The small, exquisite Nomura-ke garden merits the entry fee.",
      },
      "kanazawa-oyama-jinja": {
        name: "Oyama Shrine",
        blurb:
          "A shrine to Maeda Toshiie and his wife, its rare East-meets-West gate crowned with stained glass. Lit at night it glows like a lighthouse.",
      },
      "kanazawa-myoryuji": {
        name: "Myoryuji (Ninja Temple)",
        blurb:
          "Two stories outside, four levels within: hidden doors and trap staircases earned it the name Ninja Temple. Kaga cunning with excellent guided tours.",
        tips: "Entry is by guided tour only, booked ahead by phone; preschool children are not admitted.",
      },
      "kanazawa-kawamura": {
        name: "Amanatto Kawamura (Nishi Chaya)",
        blurb:
          "A sugared-bean specialist in Nishi Chaya, its amanatto gently sweet and elegantly wrapped. The monaka ice cream in the back alley is a hidden treat.",
      },
      "kanazawa-inoya": {
        name: "Inoya Kaisendon (Omicho)",
        blurb:
          "A queue-famous kaisendon shop in Omicho Market whose 'Chirashi Omicho' buries the rice under seasonal seafood. Winter kobako crab is bliss.",
        tips: "Waits start at 30 minutes at peak; write your name at the door before opening to save the most time.",
      },
      "kanazawa-gogo-curry": {
        name: "Go Go Curry (Kanazawa Station Sohonzan)",
        blurb:
          "The standard-bearer of Kanazawa curry: jet-black sauce under a pork cutlet and shredded cabbage, eaten from a steel plate with a fork-spoon.",
      },
      "kanazawa-gyujiro": {
        name: "Gyujiro (Seared Noto Beef Sushi)",
        blurb:
          "A seared-beef-sushi stand in Omicho using only A5 Noto beef, the blowtorch perfuming the market air. A rich change of pace from seafood bowls.",
        tips: "It's a standing stall — perfect as one snack among many on an Omicho market crawl.",
      },
      "kanazawa-ukokkeian-higashiyama": {
        name: "Ukokkeian Gold-Leaf Soft Serve (Higashiyama)",
        blurb:
          "An old house famed for silky-fowl-egg castella; this branch's exclusive soft serve is deeply eggy under gleaming gold leaf. The handiest sweet stop.",
      },
      "kanazawa-morihachi-honten": {
        name: "Morihachi Main Store Tearoom",
        blurb:
          "Confectioner to the Kaga domain since 1625 and home of Choseiden, one of Japan's three great sweets. Seasonal wagashi with matcha in the tearoom.",
        tips: "The second floor houses a museum of wooden sweet molds; stock up on Choseiden gifts while you're there.",
      },
    },
  },
};
