import type { CityTranslation } from "../types";

// Tohoku 英文內容包:aizu / fukushima / yamagata / tsuruoka / sendai / hiraizumi /
// morioka / kakunodate / akita / hachinohe / aomori。
export const cities: Record<string, CityTranslation> = {
  aizu: {
    name: "Aizu-Wakamatsu",
    areas: {
      會津若松市區: "Aizu-Wakamatsu City",
      大內宿: "Ouchi-juku",
    },
    hubs: {
      "aizu-sta": "Aizu-Wakamatsu Station",
      "aizu-tsuruga": "Tsuruga Castle",
      "aizu-nanukamachi": "Nanukamachi",
      "aizu-hetsuri-sta": "To-no-Hetsuri Station",
    },
    souvenirs: [
      "Akabeko (papier-mache red cow with a bobbing head, Aizu's beloved good-luck charm, sold in all sizes)",
      "Okiagari-koboshi (tiny self-righting daruma dolls; locals traditionally buy one more than the family headcount)",
      "Aizu lacquerware (400 years of craft tradition; chopsticks and small dishes make easy first buys)",
      "Suehiro Sake Brewery sake (ginjo and sake-lees sweets sold at the Kaeigura brewery shop — taste before you choose)",
      "Aizu cotton goods (wallets and coasters in thick striped weave; Nanukamachi-dori has the best shops)",
    ],
    pois: {
      "aizu-tsuruga-castle": {
        name: "Tsuruga Castle",
        blurb:
          "A castle that withstood a month of shelling in the Boshin War, its keep rebuilt with Japan's only red roof tiles. The top floor surveys the Aizu basin.",
        tips: "The keep houses a history museum; a combo ticket with matcha at the Rinkaku tea house is good value.",
      },
      "aizu-ouchijuku": {
        name: "Ouchi-juku",
        blurb:
          "An Edo-period post town of thirty-plus thatched houses lining one street. Climb the lookout at the far end for the classic full-village view.",
        tips: "From Aizu-Wakamatsu take the Aizu Railway to Yunokami Onsen, then the Saruyugo bus — about 1 hour each way. Buses are infrequent, so check both timetables in advance.",
      },
      "aizu-iimoriyama": {
        name: "Iimoriyama & Sazaedo",
        blurb:
          "Where the teenage Byakkotai samurai took their lives; below stands Sazaedo, a double-helix wooden hall where climbers never cross paths.",
        tips: "The stone stairway is a decent climb; a paid escalator runs alongside. Sazaedo is one-way inside — walk slowly to appreciate the trick.",
      },
      "aizu-bukeyashiki": {
        name: "Aizu Samurai Residence",
        blurb:
          "A restored samurai compound centered on the chief retainer's 38-room mansion, recreating the life and discipline of Aizu's warrior elite.",
      },
      "aizu-nanukamachi-dori": {
        name: "Nanukamachi-dori",
        blurb:
          "A retro street of Taisho charm, its storehouses and Western buildings full of lacquerware, miso and craft shops — one-stop souvenir hunting.",
      },
      "aizu-suehiro": {
        name: "Suehiro Sake Brewery Kaeigura",
        blurb:
          "A brewery founded in 1850 offering free tours of its lofty wooden kura, capped with ginjo tastings. The attached cafe is a lovely bonus.",
        tips: "Tours leave on the hour, no reservation needed, about 30 minutes; tastings come with no pressure to buy.",
      },
      "aizu-takino": {
        name: "Takino (Wappameshi)",
        blurb:
          "The definitive spot for wappameshi — rice steamed in cedar boxes with salmon, mountain vegetables and egg, served in atmospheric old tatami rooms.",
        tips: "The old magistrate-style building hides down a lane and is tricky to find — follow your map app. Expect a wait at lunch peak.",
      },
      "aizu-mitsutaya": {
        name: "Mitsutaya (Miso Dengaku)",
        blurb:
          "An 1830s miso shop grilling dengaku skewers of tofu, konnyaku and mochi over an open hearth, brushed with fragrant house-made miso.",
      },
      "aizu-ichibankan": {
        name: "Aizu Ichibankan",
        blurb:
          "The former clinic where young Hideyo Noguchi vowed to become a doctor, now a retro coffee house with a small museum upstairs.",
      },
      "aizu-misawaya": {
        name: "Misawaya (Negi Soba)",
        blurb:
          "Ouchi-juku's famed negi soba house: cold noodles eaten with a whole green onion as your chopstick, around a hearth in a thatched farmhouse.",
        tips: "Long queues on weekends: put your name on the list, explore the village, and return just in time for your seat.",
      },
      "aizu-oyakuen": {
        name: "Oyakuen Garden",
        blurb:
          "The Aizu-Matsudaira lords' garden, its teahouse mirrored in a heart-shaped pond, with a medicinal herb garden of some 400 species planted to fight epidemics — still tended today. Autumn colors over the pond make it the city's most refined corner.",
        tips: "Take the Haikara-san loop bus to the Oyakuen stop. Matcha at the pondside Ochaya-goten pavilion costs 600 yen, with a combo discount on the entry ticket.",
      },
      "aizu-higashiyama-onsen": {
        name: "Higashiyama Onsen",
        blurb:
          "Aizu's 1,300-year-old back-parlor hot spring town, its ryokan stacked along the Yukawa gorge and once beloved by artist Takehisa Yumeji and poet Yosano Akiko. Stroll the river, soak in a foot bath or day-use onsen — best when autumn colors fill the gorge.",
        tips: "About 15 minutes from downtown on the Machinaka loop bus, conveniently paired with the Aizu Samurai Residence. Most ryokan limit day-use bathing to daytime hours, so check ahead.",
      },
      "aizu-tonohetsuri": {
        name: "To-no-Hetsuri",
        blurb:
          "Tower-like cliffs carved by a million years of erosion line the Okawa River, with a suspension bridge leading to galleries in the rock face — a National Natural Monument. From late October maples blanket the crags; it sits on the same Aizu Railway line as Ouchi-juku, perfect to combine.",
        tips: "A 5-minute walk from Aizu Railway's To-no-Hetsuri Station. The suspension bridge closes for winter from mid-December to late March, when the cliffs can only be viewed from afar.",
      },
      "aizu-amidaji": {
        name: "Amidaji Temple",
        blurb:
          "A Jodo-sect temple just off Nanukamachi-dori, where the Gosangai — a small turret relocated from Tsuruga Castle after the Boshin War — stands over the graves of a thousand fallen Aizu soldiers. Saito Hajime, captain of the Shinsengumi's third unit, is buried here too.",
        tips: "Right outside Nanukamachi Station, an easy stop while browsing the old street. The Gosangai's interior is closed; admire it from outside.",
      },
    },
  },

  yamagata: {
    name: "Yamagata & Zao",
    areas: {
      山形市區: "Yamagata City",
      山寺: "Yamadera",
      藏王: "Zao",
      銀山溫泉: "Ginzan Onsen",
    },
    hubs: {
      "yamagata-sta-yamagata": "Yamagata Station",
      "yamagata-sta-yamadera": "Yamadera Station",
      "yamagata-zao-bt": "Zao Onsen Bus Terminal",
      "yamagata-ginzan-onsen": "Ginzan Onsen",
    },
    souvenirs: [
      "Juhyo Roman (white-chocolate wafer sandwiches, a Yamagata classic inspired by Zao's snow monsters)",
      "Noshi-ume (thin sheets of candied plum jelly from Satoya, a 200-year-old confectioner's sweet-tart specialty)",
      "Cherry treats (Yamagata is Japan's cherry kingdom — jellies and candies available year-round)",
      "Oshidori Milk Cake (condensed-milk candy slabs billed as 'milk you can eat')",
    ],
    pois: {
      "yamagata-kajo-park": {
        name: "Kajo Park (Yamagata Castle Ruins)",
        blurb:
          "Warlord Mogami Yoshiaki's castle site, with a restored gate and dashing equestrian statue. In spring 1,500 cherry trees bloom along the moat.",
        tips: "About a 10-minute walk from Yamagata Station. In sakura season, the Senzan Line train slicing through the blossoms is the classic shot.",
      },
      "yamagata-nagaya-sakaba": {
        name: "Yamagata Nagaya Sakaba",
        blurb:
          "A folk izakaya in an old farmhouse serving Yamagata beef, imoni stew and konnyaku, with a sunken hearth and live folk-song performances.",
        tips: "In autumn, order the signature imoni hot pot. Weekends get busy — book ahead if you want a hearth-side seat.",
      },
      "yamagata-mitsuya-soba": {
        name: "Mitsuya (Cold Chicken Soba)",
        blurb:
          "A long-standing soba shop serving the inland specialty of chilled soy broth with chewy chicken, plus ita-soba presented in wooden trays.",
        tips: "Located inside the S-PAL building at Yamagata Station — perfect for a bowl right before or after the shinkansen.",
      },
      "yamagata-satoya-noshiume": {
        name: "Noshi-ume Honpo Satoya",
        blurb:
          "A 200-year-old wagashi shop famed for noshi-ume, ripe plum pressed into sweet-tart amber sheets. Creative sweets with matcha make a fine break.",
      },
      "yamagata-yamadera": {
        name: "Yamadera (Risshakuji Temple)",
        blurb:
          "The cliff temple of Basho's cicada haiku — 1,015 stone steps climb to halls perched on the rock, with sweeping valley views from Godaido.",
        tips: "Allow about 2 hours up and down including worship, and wear good shoes. In winter the steps ice over, and entry closes around 4 pm — go in the morning.",
      },
      "yamagata-chikara-konnyaku": {
        name: "Chikara Konnyaku Teahouse (Fumotoya)",
        blurb:
          "The teahouse at Yamadera's base, famous for 100-yen soy-simmered konnyaku skewers — humble Yamagata soul food eaten hot with mustard.",
        tips: "A pre-climb 'power' konnyaku skewer is the local ritual; the shop also serves soba if you need lunch.",
      },
      "yamagata-zao-ropeway": {
        name: "Zao Ropeway",
        blurb:
          "A two-stage ropeway from Zao Onsen to the Jizo summit: alpine hikes in summer, fiery leaves in autumn, and snow monsters in winter.",
        tips: "Summit weather changes fast — bring a jacket even in summer. Strong winds can halt service, so check the official site before setting out.",
      },
      "yamagata-zao-juhyo": {
        name: "Zao Snow Monsters (Juhyo)",
        blurb:
          "Whole conifer forests frozen into hulking snow monsters across the summit — a world-class rarity best felt riding the ropeway into their midst.",
        tips: "Strictly seasonal: roughly late December to early March, peaking in January–February. Night illumination requires a separate ticket, and sub-zero gear is essential.",
      },
      "yamagata-zao-dai-rotenburo": {
        name: "Zao Onsen Dai-Rotenburo",
        blurb:
          "A vast riverside open-air bath for two hundred bathers, fed by milky acidic sulfur springs said to polish the skin, ringed by forest.",
        tips: "Closed in winter (roughly mid-November to mid-April), open only in the snow-free season. The acidic water tarnishes silver — remove jewelry before you get in.",
      },
      "yamagata-zao-robata": {
        name: "Robata (Zao Jingisukan)",
        blurb:
          "An old eatery on the onsen street famed for jingisukan lamb sizzling on a cast-iron dome grill — perfect after skiing or a hot soak.",
        tips: "Zao is one of the birthplaces of Japanese jingisukan and the lamb isn't gamey — don't miss it if you eat lamb.",
      },
      "yamagata-ginzan-onsen-street": {
        name: "Ginzan Onsen Historic Street",
        blurb:
          "Taisho-era wooden inns face off across the river, and at dusk the gas lamps glow like Spirited Away. Snowy nights here are nationally famous.",
        tips: "From Oishida Station the bus takes about 40 minutes and runs infrequently — check times first. It's loveliest after the lamps come on; if not staying over, watch the last bus.",
      },
      "yamagata-izunohana": {
        name: "Izu no Hana (Soba)",
        blurb:
          "A soba shop milling its own flour, serving handmade noodles with local vegetable tempura and a warming curry soba, waterfall views included.",
      },
      "yamagata-ginzan-cafe-kurie": {
        name: "Cafe Kurie (Ginzan Onsen)",
        blurb:
          "A dim, wood-lined coffee salon at the street's entrance, pure Taisho-romantic mood, with riverside inn views made for idle afternoons.",
      },
      "yamagata-bunshokan": {
        name: "Bunshokan (Yamagata Prefectural Museum)",
        blurb:
          "The 1916 English-Renaissance former prefectural hall — red brick, a century-old working clock tower, and lavishly restored chambers, free to enter.",
        tips: "Free admission, 9:00-16:30; closed the 1st and 3rd Monday (next day if a holiday) and over New Year.",
      },
      "yamagata-gotenzeki": {
        name: "Nanukamachi Gotenzeki",
        blurb:
          "A 400-year-old irrigation canal reborn as a stone-lined waterside quarter, its machiya and storehouses hosting soba, tea and craft shops.",
        tips: "A short walk from Bunshokan in the Nanukamachi area; Shojiya's ita-soba here is one of Yamagata's finest.",
      },
      "yamagata-sakaeya-honten": {
        name: "Sakaeya Honten (Hiyashi Ramen)",
        blurb:
          "Birthplace of hiyashi ramen, invented in 1952 for customers craving cold noodles in summer — ice floats in a clear chilled broth that never clouds.",
        tips: "Closed Wednesdays (next day if a holiday), irregular closures in January and August; expect summer lunch queues. Served year-round.",
      },
      "yamagata-tarumizu-iseki": {
        name: "Tarumizu Ruins (Mine-no-Ura)",
        blurb:
          "A hidden sanctuary behind Yamadera: tiny torii and a Fudo shrine set into honeycomb-weathered cliffs, said to be where Yamadera's founder trained.",
        tips: "About 15 minutes on foot from the Senjuin trailhead; the path is rougher than Yamadera's steps and slippery after rain. Avoid in snow season.",
      },
      "yamagata-omoshiroyama-keikoku": {
        name: "Omoshiroyama Momijigawa Gorge",
        blurb:
          "A rugged 2 km gorge trail starting right at Omoshiroyama-Kogen Station, linking waterfalls and plank walks — a hidden foliage spot near Yamadera.",
        tips: "Open roughly late May to early November; the narrow, slippery trail demands hiking shoes, and Senzan Line trains are infrequent — check timetables.",
      },
    },
  },

  sendai: {
    name: "Sendai & Matsushima",
    areas: {
      仙台市區: "Sendai City",
      松島: "Matsushima",
      秋保: "Akiu Onsen",
      鹽竈: "Shiogama",
    },
    hubs: {
      "sendai-sta-sendai": "Sendai Station",
      "sendai-kokubuncho": "Kokubuncho",
      "sendai-sta-matsushima-kaigan": "Matsushima-Kaigan Station",
      "sendai-akiu-yumoto": "Akiu Onsen Yumoto",
    },
    souvenirs: [
      "Hagi no Tsuki (custard cream cakes by Sanzen, the undisputed No. 1 Sendai souvenir)",
      "Vacuum-packed gyutan (beef tongue from famed shops like Rikyu and Kisuke — pan-fry at home for restaurant flavor)",
      "Zunda sweets (edamame-paste treats in every form; the zunda shake is strictly a drink-it-there thing)",
      "Kikufuku (fresh-cream daifuku by Kikusuian — get the matcha one; keep it chilled)",
    ],
    pois: {
      "sendai-aoba-castle": {
        name: "Sendai Castle Ruins & Date Masamune Statue",
        blurb:
          "Date Masamune's hilltop castle site — the keep is gone, but the one-eyed dragon's statue and stone walls survey the city and the Pacific.",
        tips: "The Loople Sendai sightseeing bus is the easiest way up, and pairs neatly with Zuihoden on the same loop.",
      },
      "sendai-zuihoden": {
        name: "Zuihoden Mausoleum",
        blurb:
          "Date Masamune's mausoleum, its gilded Momoyama-style carvings almost impossibly ornate among quiet cedar groves reached by stone steps.",
      },
      "sendai-ichibancho": {
        name: "Ichibancho Shopping Arcade",
        blurb:
          "Sendai's liveliest covered arcade, nearly a kilometer of shops, with the Showa-flavored bar alley of Bunka Yokocho just one lane away.",
      },
      "sendai-kokubuncho-nightlife": {
        name: "Kokubuncho Nightlife",
        blurb:
          "Tohoku's biggest entertainment district, its alleys packed with izakaya, robatayaki grills and bars glowing under the neon after dark.",
      },
      "sendai-gyutan-dori": {
        name: "Gyutan-dori (Beef Tongue Street)",
        blurb:
          "Famous beef-tongue houses lined up on Sendai Station's third floor — charcoal-grilled thick cuts with barley rice and oxtail soup.",
        tips: "Every shop queues at meal peaks; dodge the 12:00 and 18:00 rushes for shorter waits.",
      },
      "sendai-asaichi": {
        name: "Sendai Morning Market",
        blurb:
          "A bustling market beside the station nicknamed Sendai's kitchen — grab a fresh-fried croquette and browse the seafood and produce stalls.",
        tips: "Closed Sundays and national holidays — plan for a weekday morning.",
      },
      "sendai-aer-observatory": {
        name: "AER Observation Terrace",
        blurb:
          "A free 31st-floor observation deck by the station, sweeping over the city to the coastline. Best at night, and a solid rainy-day plan.",
      },
      "sendai-matsushima-cruise": {
        name: "Matsushima Bay Cruise",
        blurb:
          "Cruise among 260-plus pine-clad islets of one of Japan's Three Great Views — sea breeze, gulls and rock formations fill the 50 minutes.",
        tips: "Boats leave roughly hourly — confirm the schedule at the sightseeing pier first, then plan the rest of your visit around it.",
      },
      "sendai-zuiganji": {
        name: "Zuiganji Temple",
        blurb:
          "The north's foremost Zen temple, rebuilt by Date Masamune, with dazzling gilded screens and a cedar-lined approach past meditation caves.",
      },
      "sendai-godaido": {
        name: "Godaido Hall",
        blurb:
          "A vermilion hall on an islet in the sea, the symbol of Matsushima — cross the slatted 'bonding bridges' with the bay glittering below.",
      },
      "sendai-entsuin": {
        name: "Entsuin Temple",
        blurb:
          "A temple honoring Date Mitsumune, known for moss and rose gardens and autumn-night maple lights — the quietest corner of Matsushima.",
      },
      "sendai-kaki-goya": {
        name: "Matsushima Grilled Oyster House",
        blurb:
          "An oyster shack by the fish market, shells popping over charcoal, with a famously good-value all-you-can-eat during oyster season.",
        tips: "The all-you-can-eat runs autumn–winter only; in summer it switches to an a la carte menu.",
      },
      "sendai-zenjiro-honten": {
        name: "Tanya Zenjiro Main Branch",
        blurb:
          "A heavyweight beef-tongue house a short walk from the station: thick cuts charcoal-grilled crisp outside, tender within, salted just right.",
        tips: "Upgrade your set to the 'managaka' center cut for the most tender bite; barley rice and oxtail soup complete the classic order.",
      },
      "sendai-santori-chaya": {
        name: "Santori Chaya (Anago Bowl)",
        blurb:
          "A shoreside restaurant whose anago bowl drapes a whole tender conger eel over rice, with second-floor seats facing Matsushima Bay.",
        tips: "The anago bowl is limited daily and sells out — arrive early at lunch to be safe.",
      },
      "sendai-zunda-saryo": {
        name: "Zunda Saryo",
        blurb:
          "The flagship for Sendai's zunda: freshly pounded edamame-paste mochi and the famous zunda shake, conveniently inside the station.",
        tips: "Zunda Komichi sits right next to Gyutan-dori — a zunda shake makes the perfect dessert after beef tongue.",
      },
      "sendai-cafe-de-garcon": {
        name: "Cafe de Garcon",
        blurb:
          "An old-school kissaten off Jozenji-dori — dim lamps, siphon coffee and thick-cut French toast, ideal after strolling the zelkova avenue.",
      },
      "sendai-shokado": {
        name: "Shokado Confectionery",
        blurb:
          "A sweets shop whose upstairs cafe faces Godaido and the bay, serving house-made loaf cakes and pudding — the ideal post-cruise stop.",
        tips: "Window seats are few — avoid the mid-afternoon rush for a front-row bay view.",
      },
      "sendai-osaki-hachimangu": {
        name: "Osaki Hachimangu Shrine",
        blurb:
          "Sendai's guardian shrine built by Date Masamune in 1607 — a lacquered-black hall trimmed in gold, the oldest surviving gongen-zukuri and a National Treasure.",
        tips: "It shares the Loople Sendai bus route with the castle ruins — a day pass covers both in one loop.",
      },
      "sendai-shiogama-jinja": {
        name: "Shiogama Shrine",
        blurb:
          "The first shrine of old Mutsu province, guarding Shiogama's port for a millennium — climb the 202-step approach to vermilion gates and harbor views, with celebrated late-spring Shiogama cherries.",
        tips: "Take the gentler east approach from Hon-Shiogama Station and save the 202 steps for the way down; it pairs neatly with Matsushima.",
      },
      "sendai-akiu-otaki": {
        name: "Akiu Otaki Falls",
        blurb:
          "A 55-meter cascade thundering into the valley, counted among Japan's Top 100 Waterfalls and a national scenic spot — in foliage season the whole gorge blazes orange.",
        tips: "Public transport is sparse — take a bus or taxi from Akiu Onsen; the stone steps down to the plunge pool are steep, so wear grippy shoes.",
      },
      "sendai-rairaikyo": {
        name: "Rairaikyo Gorge",
        blurb:
          "A rocky gorge carved by the Natori River right at Akiu Onsen's doorstep, its crags and blue pools stretching about a kilometer around Nozoki Bridge — the heart-shaped pothole below is a lovers' spot.",
        tips: "The riverside path drops in beside Nozoki Bridge and runs about 650 m downstream — finish the walk, then head back to the onsen street for a soak.",
      },
      "sendai-tenshukaku-park": {
        name: "Tenshukaku Nature Park & Ichitaro-no-yu",
        blurb:
          "A Japanese garden and day-use onsen bath in one soothing Akiu compound — maples sway over the koi ponds, foot baths included, and the autumn night illuminations mirrored on the water are breathtaking.",
        tips: "The autumn light-up ('Akiu Night Museum') runs roughly late Oct to late Nov — enter at dusk to catch day and night views; closed the 3rd Friday (except Aug and Oct).",
      },
    },
  },

  hiraizumi: {
    name: "Hiraizumi",
    areas: {
      平泉中心: "Central Hiraizumi",
      "嚴美溪・達谷窟": "Genbikei Gorge & Takkoku no Iwaya",
      "一關・猊鼻溪": "Ichinoseki & Geibikei Gorge",
    },
    hubs: {
      "hiraizumi-sta-hiraizumi": "Hiraizumi Station",
      "hiraizumi-chusonji-sando": "Chusonji Approach (Tsukimizaka Entrance)",
      "hiraizumi-sta-ichinoseki": "Ichinoseki Station",
      "hiraizumi-sta-geibikei": "Geibikei Station",
    },
    souvenirs: [
      "Kamome no Tamago (egg-shaped white-bean cakes by Saito Seika, Iwate's signature sweet)",
      "Konjikido goods at Chusonji (gold-leaf bookmarks, amulets and other Golden Hall-themed trinkets)",
      "Tamura no Ume (a Shoeido classic from neighboring Ichinoseki: shiso-wrapped gyuhi with white bean paste)",
      "Mochi sweets (Ichinoseki-Hiraizumi is mochi country — zunda, walnut and more)",
    ],
    pois: {
      "hiraizumi-chusonji-konjikido": {
        name: "Chusonji Konjikido (Golden Hall)",
        blurb:
          "The Fujiwara clan's golden hall, sheathed in gold leaf and mother-of-pearl, still radiant after nine centuries — the heart of Hiraizumi.",
        tips: "From the Tsukimizaka entrance it's a 20-minute uphill walk along a cedar-lined approach — wear good shoes. Admission includes the Sankozo treasure hall; don't skip it.",
      },
      "hiraizumi-motsuji": {
        name: "Motsuji Temple Pure Land Garden",
        blurb:
          "A Heian-period Pure Land garden around the Oizumi pond, recreating the paradise of the sutras — a living textbook of Japanese garden design.",
        tips: "About a 10-minute walk from Hiraizumi Station; the Run-Run loop bus links it with Chusonji.",
      },
      "hiraizumi-takadachi-gikeido": {
        name: "Takadachi Gikeido",
        blurb:
          "The hill where Yoshitsune met his end, a small hall holding his statue above the broad Kitakami River — site of Basho's summer-grasses haiku.",
      },
      "hiraizumi-basokan-wankosoba": {
        name: "Ekimae Basokan (Wanko Soba)",
        blurb:
          "A noted wanko soba house by the station, serving twenty-four small bowls at once — the full experience without the speed-eating contest.",
        tips: "All bowls arrive together and you set your own pace — unlike Morioka's counted challenge, this suits a slow tasting.",
      },
      "hiraizumi-yumenokaze": {
        name: "Yume no Kaze (Mochi Restaurant)",
        blurb:
          "A taste of Ichinoseki mochi culture: the Fujiwara Sandai set delivers rice cakes in red bean, zunda and walnut plus zoni soup in one tray.",
      },
      "hiraizumi-kanzantei": {
        name: "Kanzantei Cafe at Chusonji",
        blurb:
          "A cafe deep in the Chusonji grounds, its seats facing Mt. Tabashine and the Hiraizumi basin — coffee and dessert with World Heritage views.",
      },
      "hiraizumi-takkoku-no-iwaya": {
        name: "Takkoku no Iwaya Bishamondo",
        blurb:
          "A vermilion hall built into a hollow of massive rock, with a great Buddha carved into the cliff beside it — the area's most dramatic stop.",
        tips: "About 6 km from Hiraizumi Station with very few buses — take a taxi, rent a bicycle or drive. It pairs naturally with Genbikei Gorge in the same direction for a half day.",
      },
      "hiraizumi-genbikei": {
        name: "Genbikei Gorge",
        blurb:
          "A jade-green gorge carved by the Iwai River, its strange rocks, potholes and suspension bridge forming a two-kilometer natural garden.",
        tips: "About 20 minutes by bus from Ichinoseki Station; line it up with Takkoku no Iwaya and Hiraizumi for the smoothest route.",
      },
      "hiraizumi-kakko-dango": {
        name: "Kakkoya Flying Dango",
        blurb:
          "Put money in the basket and knock: dango and tea zip across the gorge by cable from the shop opposite — the famous 'flying dango'.",
        tips: "Open only until mid-afternoon and closes when the dango sells out — come in the morning for the cable ride.",
      },
      "hiraizumi-muryokoin-ato": {
        name: "Muryokoin Temple Ruins",
        blurb:
          "Hidehira Fujiwara's temple modeled on — and built to outdo — Byodoin's Phoenix Hall in Uji; only foundation stones and the pond remain. A World Heritage component site, most solemn when the sun sets on Mt. Kinkeisan along its axis.",
        tips: "Free and open at all times, right on the way from the station to Takadachi Gikeido — fold it into the walk.",
      },
      "hiraizumi-kanjizaioin-ato": {
        name: "Kanjizaioin Temple Ruins",
        blurb:
          "A temple built by the wife of Motohira Fujiwara, its Pure Land garden around Maizuru Pond surviving almost intact — another World Heritage component. Right next to Motsuji yet free to enter, a perfect historic-park stroll.",
        tips: "It sits just east of Motsuji — loop through on your way out; ten minutes or so is plenty.",
      },
      "hiraizumi-geibikei-funakudari": {
        name: "Geibikei Gorge Boat Ride",
        blurb:
          "A boatman poles a flat-bottomed skiff up the Satetsu River between 100-meter limestone cliffs — two kilometers of gorge counted among Japan's 100 Views. The 90-minute round trip echoes with boat songs; in autumn the water mirrors a brocade of foliage.",
        tips: "About 30 minutes from Ichinoseki on the Ofunato Line, then a 5-minute walk from Geibikei Station to the dock. Boats leave roughly hourly (first at 9:30 in winter), cancel in rough weather, and switch to kotatsu boats from December.",
      },
      "hiraizumi-fujisei": {
        name: "Sansaikan Fujisei (Hitokuchi Mochi Zen)",
        blurb:
          "A mochi-cuisine institution two minutes from Ichinoseki Station's west exit. Its trademark Hitokuchi Mochi Zen serves bite-sized mochi in many flavors — red bean, zunda, walnut — with zoni soup: the perfect primer on Ichinoseki's mochi culture.",
        tips: "Lunch only, 11:00–14:00, closed Mondays — easiest to slot in when changing trains at Ichinoseki after Geibikei or Genbikei.",
      },
    },
  },

  kakunodate: {
    name: "Kakunodate & Lake Tazawa",
    areas: {
      角館: "Kakunodate",
      "田澤湖・乳頭溫泉": "Lake Tazawa & Nyuto Onsen",
    },
    hubs: {
      "kakunodate-sta": "Kakunodate Station",
      "kakunodate-bukeyashiki": "Samurai District",
      "kakunodate-tazawako": "Lake Tazawa Shore",
    },
    souvenirs: [
      "Kabazaiku tea caddies (cherry-bark craft canisters that gain luster with use; sold at the museum and around town)",
      "Nama-morokoshi (Todoan's unbaked adzuki-flour sweets, moist and delicate — a true Kakunodate exclusive)",
      "Hinai chicken products (soup packs and smoked items; superb as udon broth back home)",
      "Inaniwa udon (Akita's famed hand-stretched thin noodles — dried packs are light, sturdy and travel well)",
    ],
    pois: {
      "kakunodate-bukeyashiki-dori": {
        name: "Samurai District (Bukeyashiki-dori)",
        blurb:
          "Samurai residences behind long black fences, the Edo layout nearly untouched. Weeping cherries spilling over the walls are a Tohoku classic.",
        tips: "Sakura season (late April–early May) is packed — come at dawn for empty shots. Rickshaw tours start from about 15 minutes.",
      },
      "kakunodate-aoyagi-ke": {
        name: "Aoyagi Samurai Manor",
        blurb:
          "The largest estate on the samurai street — main house, armory and museums revealing the eye-opening wealth of a high-ranking samurai family.",
      },
      "kakunodate-kabazaiku-denshokan": {
        name: "Kabazaiku Craft Museum",
        blurb:
          "The showcase for kabazaiku cherry-bark craft, its tea caddies glowing with warmth. Artisans demonstrate on site, so watch before you buy.",
      },
      "kakunodate-hinokinai-zutsumi": {
        name: "Hinokinai River Cherry Embankment",
        blurb:
          "Two kilometers of riverside cherry trees forming a pink tunnel at full bloom, twinned with the samurai district's weeping blossoms. Free to stroll.",
      },
      "kakunodate-tazawako-tatsuko": {
        name: "Lake Tazawa & Tatsuko Statue",
        blurb:
          "Japan's deepest lake at 423 meters, never freezing. The golden Tatsuko statue stands in the west-shore shallows, a maiden turned lake spirit.",
        tips: "The lake loop is about 20 km — take the Ugo Kotsu circuit bus or rent a bicycle. The Tatsuko statue is best lit in the morning.",
      },
      "kakunodate-gozanoishi": {
        name: "Gozanoishi Shrine",
        blurb:
          "A north-shore shrine whose vermilion torii rises straight from the lake's edge — dedicated to Tatsuko and famed for beauty blessings.",
      },
      "kakunodate-tsurunoyu": {
        name: "Nyuto Onsen Tsurunoyu",
        blurb:
          "The oldest of the Nyuto hot springs: thatched Edo-era lodgings and a milky mixed open-air bath, the definitive snowbound secret onsen.",
        tips: "Day bathing runs roughly 10:00–15:00. From Tazawako Station take the Nyuto line bus to Alpa Komakusa, then the inn shuttle — services are sparse, so reserve and confirm ahead.",
      },
      "kakunodate-sakuranosato": {
        name: "Sakura no Sato (Hinai Chicken Oyakodon)",
        blurb:
          "A samurai-street eatery whose 'ultimate oyakodon' piles Hinai chicken under silky egg; the Inaniwa udon set covers both Akita specialties.",
        tips: "Lunch queues are the norm in sakura season — arriving before 11:30 is your safest bet.",
      },
      "kakunodate-nishinomiya-ke": {
        name: "Nishinomiya House Kura Cafe",
        blurb:
          "A Meiji-era rice storehouse in the Tamachi samurai quarter turned cafe and craft shop — coffee in a century-old kura after the old streets.",
      },
      "kakunodate-tatsuko-chaya": {
        name: "Tatsuko Chaya",
        blurb:
          "A thatched teahouse by the Tatsuko statue, grilling miso-brushed kiritanpo and char over charcoal — the lake loop's tastiest supply stop.",
        tips: "Closed in winter, and circuit buses stop only briefly — drive or rent a car if you want to sit down and eat.",
      },
      "kakunodate-dakigaeri": {
        name: "Dakigaeri Gorge",
        blurb:
          "A primeval-forest gorge on the Tamagawa River, its lapis-blue water framed by cliffside maples — the 'Yabakei of Tohoku'. The 30-minute walk from the red Kaminoiwahashi bridge to Mikaeri Falls is the area's finest autumn stroll.",
        tips: "The foliage festival runs roughly early October to early November. The trail beyond Mikaeri Falls is closed long-term due to rockfall, and heavy rain can close the whole path — check Semboku City's site before going. Bears are sighted here; make noise and don't walk alone. About 15 minutes by taxi from Kakunodate Station.",
      },
      "kakunodate-ando-jozo": {
        name: "Ando Jozo Main Store",
        blurb:
          "A miso and soy-sauce brewery founded in 1853, whose Meiji-era brick kura-zashiki parlor — a designated town cultural property — is free to enter. Sample miso soup and pickles in the storehouse: the merchant-quarter side of Kakunodate at its best.",
        tips: "Open daily 8:30–17:00. After tasting, take home their house soy sauce or kan-koji miso — more local than the souvenir shops on the samurai street.",
      },
      "kakunodate-shinchosha-bungakukan": {
        name: "Shinchosha Memorial Literary Museum",
        blurb:
          "A museum honoring Kakunodate-born Giryo Sato, founder of publisher Shinchosha, tracing a century of its books alongside modern Japanese literature. A cultural anchor of the merchant 'Tomachi' quarter and a fine rainy-day fallback.",
        tips: "Closed Mondays and over New Year (Dec 28–Jan 4); open until 17:00 April–November. Shares a building with the town library, a 3-minute walk from the Tamachi samurai houses.",
      },
      "kakunodate-kunimasu-miraikan": {
        name: "Lake Tazawa Kunimasu Museum",
        blurb:
          "The kunimasu trout, endemic to Lake Tazawa, went extinct when acidic river water was diverted into the lake — then reappeared 70 years later in Lake Saiko near Mt. Fuji. Live kunimasu and the full extinction-and-revival story make this the lake loop's most worthwhile stop.",
        tips: "Closed Tuesdays (or the next day if a holiday); hours are short at 9:00–16:00. It sits on the lakeside road along the south shore — an easy stop on the circuit bus or by car.",
      },
    },
  },

  aomori: {
    name: "Aomori & Hirosaki",
    areas: {
      青森市區: "Aomori City",
      弘前: "Hirosaki",
      "奧入瀨・十和田": "Oirase & Towada",
      八甲田: "Hakkoda",
    },
    hubs: {
      "aomori-sta-aomori": "Aomori Station",
      "aomori-sta-shin-aomori": "Shin-Aomori Station",
      "aomori-sta-hirosaki": "Hirosaki Station",
      "aomori-towadako-yasumiya": "Lake Towada (Yasumiya)",
      "aomori-hakkoda-sanroku": "Hakkoda Ropeway Base Station",
    },
    souvenirs: [
      "Ki ni Naru Ringo (Ragueneau's whole syrup-soaked apple baked in pie — an Aomori icon)",
      "Aomori apple juice (countless 100% pure-juice brands, cheap and the most local buy of all)",
      "Patissier's Apple Stick (Ragueneau's apple pastry sticks; shelf-stable and easy to hand out)",
      "Nebuta festival goods (nebuta masks, goldfish-lantern trinkets — take the festival mood home)",
      "A-FACTORY cidre (sparkling apple cider brewed on site by Aomori Station, from Aomori apples)",
    ],
    pois: {
      "aomori-nebuta-warasse": {
        name: "Nebuta Museum Wa-Rasse",
        blurb:
          "Full-size illuminated floats from the Nebuta Festival on permanent display — Tohoku's wildest festival energy, available all year round.",
        tips: "Right on the waterfront beside Aomori Station and next door to A-FACTORY — schedule the two together.",
      },
      "aomori-kenritsu-bijutsukan": {
        name: "Aomori Museum of Art",
        blurb:
          "A pure-white museum housing Yoshitomo Nara's giant 'Aomori-ken' dog and Chagall's monumental ballet backdrops — the region's art landmark.",
        tips: "About 10 minutes by taxi or city bus from Shin-Aomori Station; the Sannai-Maruyama archaeological site next door pairs well.",
      },
      "aomori-a-factory": {
        name: "A-FACTORY",
        blurb:
          "An apple-themed market hall by the station, brewing sparkling cidre on site and stocking pies to juices — one-stop souvenir shopping.",
        tips: "The second floor has a cidre tasting machine — buy tokens and compare several house brews.",
      },
      "aomori-furukawa-nokkedon": {
        name: "Furukawa Market Nokkedon",
        blurb:
          "Buy tickets, roam the stalls, and stack tuna, scallop and sea urchin onto rice to build your own seafood bowl — Aomori's most fun meal.",
        tips: "Closed Tuesdays. Doors open at 7 am and the popular items vanish before noon — the earlier you go, the better the picks.",
      },
      "aomori-hakkodamaru": {
        name: "Seikan Ferry Memorial Ship Hakkoda Maru",
        blurb:
          "A retired Seikan ferry turned museum, its train-car vehicle deck preserved intact, with fine Mutsu Bay views from the open deck.",
      },
      "aomori-hirosaki-castle": {
        name: "Hirosaki Castle",
        blurb:
          "One of twelve surviving original keeps, framed by moats and Mt. Iwaki. In spring 2,600 cherry trees make Japan's finest blossom spot.",
        tips: "Sakura peaks around late April, when petal rafts on the moat and illuminated night blossoms are iconic; off-season it's blissfully quiet.",
      },
      "aomori-hirosaki-park": {
        name: "Hirosaki Park",
        blurb:
          "The vast park around the castle: triple moats, old bridges and seasonal festivals from autumn maples to winter snow lanterns.",
      },
      "aomori-yokan-gai": {
        name: "Hirosaki Western-Style Buildings",
        blurb:
          "Meiji and Taisho Western buildings scattered around the park, the twin-towered former city library the most photogenic. Free to visit.",
      },
      "aomori-taisho-roman-kissa": {
        name: "Taisho Roman Tea Room (Fujita Memorial Garden)",
        blurb:
          "A tea room in the Fujita Memorial Garden's Western house, sampling apple pies from Hirosaki's best bakers over views of Mt. Iwaki.",
        tips: "Several apple pies rotate daily and sell out; it's an easy downhill stroll after Hirosaki Castle.",
      },
      "aomori-salon-de-cafe-ange": {
        name: "Salon de Cafe Ange",
        blurb:
          "A cafe in the former foreign teachers' house of To-o Gijuku school, all wood floors and antiques — apple pie and Western lunches en route.",
      },
      "aomori-niji-no-mart": {
        name: "Niji no Mart",
        blurb:
          "A no-frills market arcade by Hirosaki Station, crammed with fresh fish and deli stalls — grab a bento and taste everyday local life.",
        tips: "Closed Sundays; about 3 minutes on foot from Hirosaki Station, perfect for a local bite before your train.",
      },
      "aomori-oirase-keiryu": {
        name: "Oirase Gorge",
        blurb:
          "A 14-kilometer stream from Lake Towada where mossy boulders, waterfalls and virgin forest weave Japan's loveliest streamside trail.",
        tips: "Public transport is limited to the infrequent JR Mizuumi bus, so rent a car or plan bus times carefully. The best stretch is Ishigedo to Choshi Otaki; fresh green peaks May–June, foliage late October.",
      },
      "aomori-towadako": {
        name: "Lake Towada",
        blurb:
          "A deep-blue caldera lake with the Maidens statue among shoreline cedars — take the boat or walk the shore, serenely forgotten by the world.",
        tips: "Sightseeing boats and most shops close for winter (mid-November to mid-April) — check operations before a cold-season visit.",
      },
      "aomori-towada-art-center": {
        name: "Towada Art Center",
        blurb:
          "A white-box museum whose Kusama pumpkin, giant flower horse and Nara works spill across the avenue — the whole street is a gallery.",
        tips: "Closed Mondays. It's far from any rail station — driving is easiest, or take a bus from Lake Towada or Hachinohe.",
      },
      "aomori-tsukasa-barayaki": {
        name: "Tsukasa Barayaki Diner",
        blurb:
          "The standard-bearer for Towada barayaki: beef belly and heaps of onion seared until the sauce caramelizes, unbeatable over white rice.",
      },
      "aomori-sannai-maruyama": {
        name: "Sannai-Maruyama Site",
        blurb:
          "A vast Jomon settlement from over 5,000 years ago, centerpiece of the World Heritage Jomon sites — reconstructed pit dwellings and the six-pillar tower rise over the plain, with the famous clay figurines inside the museum.",
        tips: "Closed the 4th Monday of each month (next day if a holiday). It adjoins the Aomori Museum of Art on foot — pair them in one half-day. October to May it closes at 5 pm.",
      },
      "aomori-hirosaki-apple-park": {
        name: "Hirosaki Apple Park",
        blurb:
          "An orchard park of 2,300 trees across some 80 varieties, where from August to late November you pick apples in season and pay by weight — apple country's signature view, with Mt. Iwaki behind the laden trees.",
        tips: "Picking reception 9:00–16:00, varieties rotating through the season — November brings late croppers like Fuji. About 20 minutes from Hirosaki Station by the Tamenobu-go or Konan bus.",
      },
      "aomori-nakano-momijiyama": {
        name: "Nakano Momijiyama",
        blurb:
          "A maple gorge planted from Kyoto saplings by the Hirosaki lords, its vermilion bridges, waterfalls and 200-year-old trees earning it the name 'Little Arashiyama of Tsugaru'. During the illumination the maples glow over the stream — dreamlike.",
        tips: "Peak color late October to early November, with night illumination until 9 pm from around mid-October. Take the Konan Railway to Kuroishi then a Konan bus (about 30 min) — services are sparse, so check times or drive.",
      },
      "aomori-hakkoda-ropeway": {
        name: "Hakkoda Ropeway",
        blurb:
          "Ten minutes up to 1,300-meter Mt. Tamoyachi, where a gourd-shaped trail loops the alpine marshes with sweeping views of the Hakkoda peaks, Aomori city and Mutsu Bay. In autumn the beech forest below the gondola turns a breathtaking sea of red and gold.",
        tips: "Foliage descends from the summit from late September through mid-October. The ropeway stops several days each early November for annual inspection and suspends in strong wind — check the official site before going; expect first snow up top in November, so dress warmly.",
      },
      "aomori-sukayu-onsen": {
        name: "Sukayu Onsen Sennin-buro",
        blurb:
          "A 300-year-old mountain therapeutic bathhouse whose all-hiba 'Thousand-Person Bath' spans its great hall without a single pillar, milky acidic sulfur water steaming within. Finish with the famous ginger-miso oden from the shop — mountain inn atmosphere complete.",
        tips: "Day bathing 7:00–18:00 (the gender-separated Tama-no-yu 9:00–17:00). The big bath is mixed, with a women-only hour 8–9 am daily and bathing wear for rent. About 10 minutes by JR bus from the ropeway base station.",
      },
    },
  },

  morioka: {
    name: "Morioka",
    areas: {
      "城跡・中之橋周邊": "Castle Park & Nakanohashi",
      "盛岡站・材木町": "Morioka Station & Zaimokucho",
      "小岩井近郊": "Koiwai Outskirts",
    },
    hubs: {
      "morioka-sta": "Morioka Station",
      "morioka-castle-park": "Morioka Castle Park / Nakanohashi",
      "morioka-zaimokucho": "Zaimokucho",
    },
    souvenirs: [
      "Nanbu senbei (baked sesame or peanut crackers; long-running makers like Iwateya each have loyal fans)",
      "Fukuda Pan (koppe-pan rolls filled to order at the Nagatacho shop — Morioka's soul-food breakfast)",
      "Kamome no Tamago (egg-shaped confection of white bean paste in cake, Iwate's signature sweet, sold at the station)",
      "Nambu ironware (cast-iron wind chimes and teapots, crafts that grow lovelier with use)",
      "Morioka reimen packs (vacuum-packed noodle kits from Todakyu and others — take the famous noodles home)",
    ],
    pois: {
      "morioka-bank-red-brick": {
        name: "Iwate Bank Red Brick Building",
        blurb:
          "A 1911 red-brick bank by Kingo Tatsuno, architect of Tokyo Station, that stayed in business until 2012. The lofty banking hall and old vault survive intact — Morioka's most photogenic landmark.",
        tips: "Closed Tuesdays, open 10:00–17:00; the paid zone lets you walk into the old vault and bank interior.",
      },
      "morioka-castle-park": {
        name: "Morioka Castle Site Park",
        blurb:
          "The ruins of the Nanbu clan's castle, with tier upon tier of granite ramparts among the finest in Tohoku. Cherry blossoms and autumn leaves set off the pale stone, and the honmaru terrace looks out to Mt. Iwate.",
      },
      "morioka-sakurayama-shrine": {
        name: "Sakurayama Shrine",
        blurb:
          "Morioka's guardian shrine beside the castle ruins, backed by the Eboshi-iwa — a huge rock thrusting from the earth, revered as the city's protective charm since feudal times. The approach is lined with homey shops and eateries.",
      },
      "morioka-kogensha": {
        name: "Kogensha & Zaimokucho",
        blurb:
          "The publisher of Kenji Miyazawa's only story collection released in his lifetime, now a folk-craft shop of lacquer and ceramics. In the courtyard, the Kohikan coffee house serves dark roasts with walnut sweets, as quiet as one of Kenji's tales.",
        tips: "Closed on the 15th of each month (moved to a weekday if it falls on a weekend or holiday); the surrounding Zaimokucho shopping street is worth a stroll too.",
      },
      "morioka-azumaya-wanko": {
        name: "Azumaya Honten (Wanko Soba)",
        blurb:
          "A wanko soba house founded in 1907, where servers cheer you on, tipping bite-sized portions into your bowl until you snap the lid shut. Clear 100 bowls and you earn a wooden plaque — Morioka's liveliest meal.",
        tips: "The main branch closes on the first Wednesday each month (except Golden Week in May and August); book ahead if you plan to attempt wanko soba.",
      },
      "morioka-pairon-jajamen": {
        name: "Pairon Honten (Jajamen)",
        blurb:
          "The birthplace of Morioka jajamen: flat udon-like noodles tossed with the house meat miso, cucumber and ginger, seasoned to taste with vinegar and chili oil. Finish by cracking an egg into the bowl for chiitantan soup — only then is it complete.",
        tips: "Right on the Sakurayama Shrine approach; queues are the norm at meal peaks, so avoid high noon.",
      },
      "morioka-pyonpyonsha": {
        name: "Pyonpyonsha (Morioka Reimen)",
        blurb:
          "The station-front branch of Morioka's reimen standard-bearer: chewy translucent noodles in beef-bone broth with kimchi and fruit, refreshing yet punchy. Perfect before or after the shinkansen, ideally with a round of yakiniku.",
        tips: "Not keen on spice? Order 'betsukara' to get the kimchi on the side and tune the heat yourself.",
      },
      "morioka-fukuda-pan": {
        name: "Fukuda Pan Nagatacho Honten",
        blurb:
          "A koppe-pan specialist since 1948: pick from dozens of fillings and they slather your roll on the spot. The signature an-butter — sweet bean paste with butter — is unforgettable, a breakfast locals grow up on.",
        tips: "Doors open at 7:00; popular fillings often sell out by afternoon, so go early for the full lineup.",
      },
      "morioka-konyacho-banya": {
        name: "Konyacho Banya",
        blurb:
          "A 1913 fire-brigade station crowned with a watchtower, this wooden Western-style building has been reborn as a cafe and craft shop. Settle in with a coffee and soak up the artisan spirit of Morioka's preserved streets.",
        tips: "Opening hours and closures follow their official social media — check before you plan around it.",
      },
      "morioka-hachimangu": {
        name: "Morioka Hachimangu",
        blurb:
          "Founded in 1680, this grandly carved vermilion shrine has been the spiritual heart of the region since the Nanbu domain. Its September grand festival with float parades is the city's biggest event; on ordinary days it is serene and stately.",
      },
      "morioka-kaiunbashi": {
        name: "Kaiunbashi Bridge",
        blurb:
          "A white iron bridge over the Kitakami River, framing snow-capped Mt. Iwate on clear days — Morioka's signature view. Legend says newcomers cry crossing it on arrival and again when they leave, earning it the name 'bridge of two tears'.",
        tips: "About a 5-minute walk from Morioka Station; Mt. Iwate only shows itself on crisp clear days.",
      },
      "morioka-koiwai-farm": {
        name: "Koiwai Farm Makiba-en",
        blurb:
          "Japan's largest private farm, founded in 1891. The Makiba-en visitor area has sheep, horse riding and soft-serve made from fresh farm milk, all with Mt. Iwate as a backdrop — and a famed lone cherry tree blooming in late April.",
        tips: "About 35 minutes by Iwate Kenpoku bus from Morioka Station; services are sparse, so check both outbound and return times.",
      },
    },
  },

  akita: {
    name: "Akita",
    areas: {
      "千秋公園・中通": "Senshu Park & Nakadori",
      "大町・川反": "Omachi & Kawabata",
      "秋田駅周邊": "Around Akita Station",
      "秋田港": "Akita Port",
    },
    hubs: {
      "akita-sta": "Akita Station",
      "akita-senshu-park": "Senshu Park",
      "akita-kawabata": "Kawabata",
    },
    souvenirs: [
      "Kingman (honey-cake rounds with white bean filling, Akita's teatime classic from a station-front institution)",
      "Butter mochi (northern Akita's buttery rice cakes that stay soft for days — perfect with tea)",
      "Inaniwa udon dried noodles (hand-stretched noodles from Sato Yoske and other old houses; restaurant-grade silkiness at home)",
      "Iburigakko (hearth-smoked pickled daikon, smoky and crunchy — great with cheese or sake)",
      "Akita sake (a famed brewing region: Aramasa No.6, Takashimizu and more, handy in small bottles)",
    ],
    pois: {
      "akita-senshu-koen": {
        name: "Senshu Park (Kubota Castle Ruins)",
        blurb:
          "The site of Kubota Castle, seat of the Satake lords, now a green oasis of moats and earthen ramparts. Around 700 cherry trees line the moat in spring, and autumn wraps the park in maple reds.",
        tips: "Kubota Castle famously used earthworks instead of stone walls; the rebuilt Omote-mon gate and corner turret are the highlights, about 10 minutes on foot from Akita Station.",
      },
      "akita-osumi-yagura": {
        name: "Kubota Castle Osumi Turret",
        blurb:
          "A reconstructed corner turret deep in Senshu Park, with Satake clan exhibits inside and a top-floor lookout over the city and Mt. Taihei. In foliage season the honmaru below turns brilliant orange.",
        tips: "Closed in winter (December to March); pair it with Senshu Park in cherry-blossom or autumn-leaf season.",
      },
      "akita-museum-of-art": {
        name: "Akita Museum of Art",
        blurb:
          "A Tadao Ando museum of bare concrete where the triangular skylight and floating spiral staircase are exhibits in themselves. The centerpiece is Tsuguharu Foujita's 20-meter mural 'Events in Akita', a single canvas capturing the region's festivals and snow-country life.",
        tips: "The 2nd-floor cafe faces a water garden that visually merges with Senshu Park; closure days are irregular, so check the website before you go.",
      },
      "akita-inu-station": {
        name: "Akita Inu Station",
        blurb:
          "A free meet-and-greet spot where real Akita dogs lounge behind glass, radiating pure healing energy. The shop is stocked with Akita-inu goods — a must for fans of the loyal breed.",
        tips: "The dogs appear only in set sessions on Saturdays and Sundays (several from 11:00); weekdays it opens only Tuesday and Thursday, so check the official site first.",
      },
      "akita-honke-abeya": {
        name: "Honke Abeya (Hinai Chicken Oyakodon)",
        blurb:
          "A specialty restaurant run by Hinai jidori chicken producers themselves — the signature oyakodon tops springy thigh meat with rich, half-set egg. It sits in the Area Nakaichi complex, right on your way out of the art museum.",
      },
      "akita-neburinagashi-kan": {
        name: "Neburi Nagashi Kan (Kanto Festival Museum)",
        blurb:
          "A museum devoted to the Kanto Festival, its atrium filled with full-size kanto poles whose strings of lanterns reach for the ceiling. You can try hoisting a mini kanto yourself and feel the balancing art of forehead and hip.",
        tips: "A combined ticket covers the Red Brick Folk Museum about 5 minutes away on foot — the two pair up nicely.",
      },
      "akita-akarenga-kan": {
        name: "Red Brick Folk Museum (Akarenga-kan)",
        blurb:
          "The former Akita Bank head office from the Meiji era, an Important Cultural Property with a red-and-white brick facade and lavish Baroque-style interiors. Inside are local crafts and the woodblock prints of Katsuhira Tokushi.",
      },
      "akita-kawabata-nightlife": {
        name: "Kawabata Entertainment District",
        blurb:
          "Akita's storied nightlife quarter stretching along the Asahi River, where izakaya, regional-cuisine spots and small bars light up Kawabata-dori. Order iburigakko pickles with a glass of Aramasa sake — that's when you've truly arrived in Akita.",
      },
      "akita-sato-yoske": {
        name: "Inaniwa Udon Sato Yoske (Akita Branch)",
        blurb:
          "The Akita city branch of the century-old house behind Inaniwa udon, one of Japan's three great udon styles — hand-stretched noodles so fine they glow. The signature two-dip tempura set lets you try both soy and sesame-miso sauces.",
        tips: "It's in the basement of the Seibu department store, about 4 minutes from the station; expect queues at lunch peak.",
      },
      "akita-kiritanpo-ya": {
        name: "Akita Kiritanpo-ya (Kiritanpo Hot Pot)",
        blurb:
          "A regional-cuisine izakaya by the station famous for kiritanpo hot pot in Hinai chicken broth — the toasted rice skewers soak up the stock and get better the longer they simmer. Charcoal hearths and folk-craft decor set the mood.",
        tips: "Opens at 4pm on weekdays; lunch is served only on Sundays and holidays.",
      },
      "akita-shimin-ichiba": {
        name: "Akita Citizens' Market",
        blurb:
          "A workaday market five minutes from Akita Station where fresh fish, mountain vegetables and pickle stalls open early — 'Akita's kitchen' lives up to its name. The sushi bars and diners inside serve market-direct seafood, cheap and generous.",
        tips: "Closed on Sundays — go on a weekday or Saturday morning.",
      },
      "akita-selion": {
        name: "Port Tower Selion",
        blurb:
          "A 143-meter glass tower at Akita Port with a free observation deck at 100 meters, sweeping over the Sea of Japan, the Oga Peninsula and the city. It's most moving at dusk, watching the sun sink into the sea.",
        tips: "About 20 minutes by bus from Akita Station toward Selion; the ground-floor roadside-station market is great for last-minute souvenirs.",
      },
    },
  },

  hachinohe: {
    name: "Hachinohe",
    areas: {
      "陸奧湊港區": "Mutsu-Minato Harbor",
      "八戶站周邊": "Around Hachinohe Station",
      "中心街": "City Center",
      "蕪島・種差海岸": "Kabushima & Tanesashi Coast",
      "南郊(是川・櫛引)": "Southern Outskirts (Korekawa & Kushihiki)",
    },
    hubs: {
      "hachinohe-sta": "Hachinohe Station",
      "hachinohe-hon-hachinohe": "Hon-Hachinohe Station (City Center)",
      "hachinohe-mutsu-minato": "Mutsu-Minato Station",
      "hachinohe-same": "Same Station",
    },
    souvenirs: [
      "Nanbu senbei (wheat crackers in classic sesame and peanut flavors — the soul snack of the Nanbu region)",
      "Ichigo-ni canned soup (a luxurious clear broth of sea urchin and abalone, Hachinohe's signature local dish)",
      "Hachinohe maesoki saba products (branded mackerel fattened in autumn seas; canned saba and shime-saba both travel well)",
      "Mutsu Hassen sake (Hachinohe Shuzo's popular local brew — fruity ginjo styles that win over even non-sake drinkers)",
      "Nanbu hishizashi goods (traditional geometric embroidery of southern Aomori; coasters and pouches are light and lovely)",
    ],
    pois: {
      "hachinohe-tatehana-asaichi": {
        name: "Tatehana Wharf Morning Market",
        blurb:
          "One of Japan's largest morning markets: some 300 stalls stretch 800 meters along the wharf, selling seafood, senbei soup, fresh coffee and more. It opens at sunrise and wraps up before nine — an early riser's reward.",
        tips: "Held only on Sundays from mid-March to December, sunrise to about 9am; a 10-minute walk from Mutsu-Minato Station — arrive by 6–7am for peak buzz.",
      },
      "hachinohe-hasshoku-center": {
        name: "Hasshoku Center",
        blurb:
          "A giant 170-meter market of about 60 shops selling fresh fish, dried goods, Aomori apples and souvenirs. Buy seafood and grill it yourself over charcoal at the Shichirin-mura corner — Hachinohe's one-stop food hall.",
        tips: "The 100-yen Hasshoku bus from Hachinohe Station takes about 10 minutes; the market building closes Wednesdays. Buy your seafood inside first, then head to Shichirin-mura to grill.",
      },
      "hachinohe-miroku-yokocho": {
        name: "Miroku Yokocho",
        blurb:
          "A yatai village linking Sanchome and Rokunichimachi streets: 26 tiny stalls seating eight or nine each, serving skewers, seafood, local saba and sake. Rubbing shoulders with owners and fellow travelers is the essence of Hachinohe's yokocho culture.",
        tips: "Hours and closing days vary by stall; most open after 5pm. Bar-hopping stall to stall — hashigo-zake — is how the locals do it.",
      },
      "hachinohe-kabushima": {
        name: "Kabushima Shrine (Kabushima)",
        blurb:
          "A Benzaiten shrine on a small hill whose entire island is a National Natural Monument breeding ground for black-tailed gulls — tens of thousands blanket it in spring and summer. Getting hit by droppings is considered lucky, and the shrine even lends umbrellas.",
        tips: "The gulls arrive around March and leave in August; egg-laying and chick-rearing from April to July is the most spectacular. About 15 minutes on foot from Same Station on the JR Hachinohe Line.",
      },
      "hachinohe-tanesashi-kaigan": {
        name: "Tanesashi Coast",
        blurb:
          "A natural grass lawn rolls right down to the breaking waves, weaving green meadows, pine groves and rock formations into a nationally designated scenic coastline. The signature landscape of Sanriku Fukko National Park — perfect for a summer picnic on the grass.",
        tips: "The lawn is right outside Tanesashi-Kaigan Station on the JR Hachinohe Line; strong walkers can hike the coastal trail from Kabushima, about 2 hours one way.",
      },
      "hachinohe-korekawa-jomonkan": {
        name: "Korekawa Jomon Museum",
        blurb:
          "An archaeology museum housing finds from the World Heritage Korekawa site, crowned by the National Treasure 'Praying Dogu' — a clay figure with hands clasped in prayer. Sleek, modern displays reveal the aesthetics of people millennia ago.",
        tips: "Closed Mondays (open on holidays, closing the next weekday instead). Public transport is sparse — a 15-minute taxi from the city center is the efficient option.",
      },
      "hachinohe-kushihiki-hachimangu": {
        name: "Kushihiki Hachimangu",
        blurb:
          "The 800-year-old guardian shrine of the Nanbu domain, its halls hushed among cedar groves. The treasure hall holds two National Treasure suits of armor — the red-laced and white-laced yoroi — pinnacles of Kamakura-era armor craft.",
        tips: "The treasure hall opens 9:00–17:00 and closes Wednesdays and Thursdays (adults 400 yen); about 10 minutes by taxi from Hachinohe Station, as buses are infrequent.",
      },
      "hachinohe-mutsuminato-asaichi": {
        name: "Mutsu-Minato Ekimae Morning Market",
        blurb:
          "A working-class fish market in front of Mutsu-Minato Station: buy sashimi from the famed 'isaba no kaccha' fishwives, add rice and miso soup, and build your own seafood bowl. A slice of weekday-morning local life, richer than any tourist market.",
        tips: "Closed Sundays and the second Saturday of each month; the dining corner runs roughly 6:00–10:00, so come early to build your bowl.",
      },
      "hachinohe-shuzo": {
        name: "Hachinohe Shuzo Brewery",
        blurb:
          "The brewery behind Mutsu Hassen and Mutsu Otokoyama, founded in 1775 — its red-brick and earthen storehouses are registered Tangible Cultural Properties. Tour the kura, then taste the popular Hassen lineup at the counter; a must for sake lovers.",
        tips: "Tours are by reservation, with online booking prioritized (lunch break 12–13:00, last tour 15:00); tasting of three sakes costs 500 yen. About 5 minutes on foot from Mutsu-Minato Station.",
      },
      "hachinohe-hacchi": {
        name: "Hachinohe Portal Museum Hacchi",
        blurb:
          "A free cultural gateway in the city center, condensing Hachinohe's festivals, morning markets and yokocho culture into five floors of exhibits, plus local craft shops and cafes. Great for a break mid-stroll or as a rainy-day refuge.",
        tips: "Free entry, open until 21:00, closed Tuesdays (the next day if Tuesday is a holiday); drop in first to gather ideas before planning your day.",
      },
    },
  },

  tsuruoka: {
    name: "Tsuruoka & Sakata",
    areas: {
      鶴岡市區: "Tsuruoka City",
      羽黑山: "Mt. Haguro",
      "加茂・湯野浜": "Kamo & Yunohama",
      酒田: "Sakata",
    },
    hubs: {
      "tsuruoka-sta": "Tsuruoka Station",
      "tsuruoka-sta-sakata": "Sakata Station",
      "tsuruoka-haguro-zuishinmon": "Mt. Haguro Zuishinmon Gate",
      "tsuruoka-haguro-sancho": "Mt. Haguro Summit",
      "tsuruoka-kamo": "Kamo Aquarium",
    },
    souvenirs: [
      "Dadacha-mame sweets (treats made from Tsuruoka's famed edamame — richly nutty kintsuba, cookies and even ice cream)",
      "Oranda senbei (Sakata Beika's thin salted rice crackers baked from Shonai rice — the local snack everyone grows up on)",
      "Shonai-fu (flat baked wheat gluten, a local pantry staple for soups and simmered dishes; light and easy to pack)",
      "Kiyokawaya White Pari Roll (cream roll cake in a crisp white-chocolate shell, Tsuruoka's favorite patisserie treat; keep chilled)",
    ],
    pois: {
      "tsuruoka-haguro-pagoda": {
        name: "Mt. Haguro Five-Story Pagoda & Cedar Avenue",
        blurb:
          "A National Treasure pagoda of bare, unpainted timber hidden among centuries-old cedars — often called Tohoku's most beautiful old tower. From Zuishinmon gate it's a 15-minute walk down stone steps and past a vermilion bridge; the cedar-lined path is a sight in itself.",
        tips: "The shingled roof was fully restored in 2024. Continuing up all 2,446 stone steps to the summit takes about an hour; to save your legs, return to the gate and ride the bus to the top.",
      },
      "tsuruoka-haguro-sanjin": {
        name: "Sanjin Gosaiden Shrine (Mt. Haguro Summit)",
        blurb:
          "The heart of Dewa Sanzan mountain worship, enshrining the deities of Gassan, Haguro and Yudono under one roof beneath a mighty thatched roof two meters thick. Mirror Pond and 500-year-old cedars surround the hall — the sacred atmosphere is palpable.",
        tips: "Shonai Kotsu buses run from Tsuruoka Station to the summit in about 50 minutes, but departures are sparse — check the timetable first. 2026 is the once-in-twelve-years Year of the Horse pilgrimage year.",
      },
      "tsuruoka-kamo-aquarium": {
        name: "Kamo Aquarium",
        blurb:
          "A world-famous jellyfish aquarium with some 80 species on display; in the five-meter round Jellyfish Dream Theater tank, thousands of moon jellies drift like a dream. Its comeback story — from near-closure to jellyfish-powered fame — is a legend in itself.",
        tips: "Open year-round 9:00–17:00 (last entry 16:00). Check the website for jellyfish talk times; the restaurant serves jellyfish ramen.",
      },
      "tsuruoka-chido-museum": {
        name: "Chido Museum",
        blurb:
          "An open-air museum on the former retainer estate of the Sakai lords, where Meiji-era Western buildings like the old Nishitagawa District Office and a massive thatched farmhouse were relocated whole. The Sakai clan garden, a national scenic site, is here too.",
        tips: "Closed Wednesdays. The pale-blue former Tsuruoka Police Station building is the most photogenic spot.",
      },
      "tsuruoka-park-taihokan": {
        name: "Tsuruoka Park & Taihokan Hall",
        blurb:
          "A civic park on the site of Tsurugaoka Castle, where moats and old pines recall the Sakai clan's castle town; in spring its 700 cherry trees rank among Japan's top 100 blossom spots. The red-domed Taisho-era Taihokan hall inside honors Tsuruoka's notable figures, free of charge.",
        tips: "Taihokan is closed Wednesdays and free to enter. Cherry blossoms peak around mid-April — the moat reflections are the best view.",
      },
      "tsuruoka-shonai-bussankan": {
        name: "Shonai Tourist Product Center",
        blurb:
          "A one-stop souvenir emporium by the Tsuruoka IC — dadacha-mame sweets, Shonai-fu, local sake and fresh seafood all in one place, freshly renovated in spring 2026. The food court serves Shonai seafood bowls, handy for a restock between sights.",
        tips: "Open 9:00–18:00 every day of the year. Local buses to Yunohama Onsen stop here, so shopping on the way back is easy.",
      },
      "tsuruoka-sankyo-soko": {
        name: "Sankyo Rice Warehouses",
        blurb:
          "A row of black-walled rice warehouses built in 1893 along the Niida River, backed by a famous zelkova avenue — Sakata's signature view and a filming location for the NHK drama Oshin. The information center in warehouse 12 tells the story of the kitamaebune trade and Shonai rice.",
        tips: "The Yume no Kura shop moved to Iroha-kura Park in 2025. From November 2026 to March 2027 the zelkova path is closed for preservation work — view the warehouses from the front instead.",
      },
      "tsuruoka-homma-hontei": {
        name: "Former Homma Family Residence",
        blurb:
          "The mansion of the Homma family, once Japan's wealthiest landowners, built in 1768 to receive shogunate inspectors — a rare blend of samurai shoin-zukuri and merchant architecture under one roof. The timberwork and garden exude a magnate's understated luxury.",
        tips: "Closed for winter from mid-December to late January. The annex shop across the street preserves the original storefront — visit both.",
      },
      "tsuruoka-somaro": {
        name: "Somaro Maiko Teahouse",
        blurb:
          "A vermilion-walled former luxury restaurant from the kitamaebune era, where Sakata maiko perform dances in the upstairs grand hall every afternoon, reviving the port town's refined age. The attached Takehisa Yumeji museum pairs beauty paintings with the maiko world.",
        tips: "Closed Wednesdays. The maiko performance starts at 14:00 and requires advance booking; the plan with tea and sweets is the best value.",
      },
      "tsuruoka-hiyoriyama": {
        name: "Hiyoriyama Park",
        blurb:
          "A hilltop park overlooking Sakata port, with a wooden hexagonal lighthouse and a half-scale kitamaebune trading ship recalling the port's golden age. At dusk the sun sinks into the Sea of Japan — Sakata's classic sunset spot.",
        tips: "In late April cherry blossoms frame the lighthouse. After sunset, it's a pleasant walk back to the old quarter near Somaro for dinner.",
      },
      "tsuruoka-nezameya-hanbee": {
        name: "Nezameya Hanbee (Mugikiri Noodles)",
        blurb:
          "A 150-year-old shop for mugikiri, Shonai's thin white wheat noodles, chilled in ice water until springy and slick, served with a simple dipping sauce. The aimori combo of mugikiri and soba side by side is the connoisseur's order.",
        tips: "Closed Wednesdays and the second Tuesday of each month; open 10:00–15:00 only, so plan it as lunch.",
      },
      "tsuruoka-yunohama-onsen": {
        name: "Yunohama Onsen",
        blurb:
          "A thousand-year-old hot spring town facing the Sea of Japan — a swimming beach in summer, and at dusk the whole street faces the setting sun. Day-trippers can use ryokan day baths or the communal bathhouse, then watch the sun melt into the sea.",
        tips: "About 40 minutes by bus from Tsuruoka Station. The communal baths are kept by locals and run hot — bring your own towel.",
      },
    },
  },

  fukushima: {
    name: "Fukushima",
    areas: {
      福島市區: "Fukushima City",
      飯坂溫泉: "Iizaka Onsen",
      磐梯吾妻: "Bandai-Azuma",
      吾妻山麓: "Azuma Foothills",
    },
    hubs: {
      "fukushima-sta": "Fukushima Station",
      "fukushima-sta-iizaka-onsen": "Iizaka Onsen Station",
      "fukushima-jododaira": "Jododaira",
    },
    souvenirs: [
      "Mamador (Sanmangoku's milky bean-paste cakes, the very definition of a Fukushima sweet)",
      "Usukawa manju (Kashiwaya's thin-skinned red-bean buns since 1852, one of Japan's three great manju)",
      "Ika ninjin (Fukushima's homey staple of shredded squid and carrot — great with rice or sake)",
      "Peach treats (juices, jellies and dried fruit from Japan's peach kingdom — summer in a jar)",
      "Radium eggs (Iizaka Onsen's famous hot-spring eggs, sold at old shops like Aburau)",
    ],
    pois: {
      "fukushima-hanamiyama": {
        name: "Hanamiyama Park",
        blurb:
          "A private flower hill opened free to all by its farming family: plum, cherry, forsythia and peach blossoms erupt together each spring — photographer Shotaro Akiyama called it 'Fukushima's Shangri-La'.",
        tips: "In blossom season (late Mar–mid Apr) shuttle buses run from Fukushima Station; the one-way loop trail calls for comfortable shoes.",
      },
      "fukushima-jododaira-skyline": {
        name: "Bandai-Azuma Skyline & Jododaira",
        blurb:
          "A volcanic sightseeing road at 1,600m crossing barren lava fields to Jododaira, facing the vast crater of Mt. Azuma-kofuji. In autumn the whole route blazes with foliage — one of Tohoku's great drives.",
        tips: "Walking the Azuma-kofuji crater rim takes about an hour — dress for wind. The road closes mid-Nov to mid/late Apr and often at night in spring and autumn; check Fukushima Prefecture road updates first.",
      },
      "fukushima-sabakoyu": {
        name: "Sabakoyu Bathhouse (Iizaka Onsen)",
        blurb:
          "Iizaka Onsen's oldest communal bath, where even Matsuo Basho is said to have soaked. For 400 yen the retro cypress bathhouse offers a slice of local sento life — silky water, but hot.",
        tips: "The water often sits around 45°C — ladle some over yourself before easing in. Bring or buy towels and soap; closed Mondays (open if a holiday).",
      },
      "fukushima-terui": {
        name: "Terui (Enban Gyoza)",
        blurb:
          "The definitive shop for Fukushima's enban gyoza: 22 dumplings pan-fried into one golden disc, crisp-skinned and juicy. Evenings only — locals pair it with beer as a matter of course.",
        tips: "Opens at 17:00 and closes when the gyoza run out — join the queue before opening to be safe. Closed Wednesdays.",
      },
      "fukushima-kyu-horikiritei": {
        name: "Former Horikiri Residence",
        blurb:
          "The estate of the Horikiri merchant-farmer family, with the prefecture's largest and oldest storehouse and a graceful main house — free to enter. Free-flowing hot-spring foot and hand baths sit by the garden.",
        tips: "Free entry and open until 21:00 year-round — a foot bath before or after dinner slots in perfectly.",
      },
      "fukushima-nakano-fudoson": {
        name: "Nakano Fudoson Temple",
        blurb:
          "A mountain temple over 800 years old, counted among Japan's three great Fudo sites. Vermilion halls cling to the gorge cliffs, a cave circuit enshrines 36 attendants, and the 'undying flame' still burns.",
        tips: "About 10 minutes by taxi from Iizaka Onsen, or take the Nakano-bound bus from Fukushima Station. Open until 17:00 (16:00 from mid-Oct through Dec).",
      },
      "fukushima-shinobuyama": {
        name: "Mt. Shinobu Karasugasaki Deck",
        blurb:
          "Mt. Shinobu rises straight from central Fukushima; its western Karasugasaki deck sweeps in the city, the shinkansen viaduct and the Azuma range — one of Japan's Top 100 night-view mountains.",
        tips: "About a 7-minute walk from Tsukiyama parking lot; there are no streetlights, so bring a flashlight for night views.",
      },
      "fukushima-kenbi": {
        name: "Fukushima Prefectural Museum of Art",
        blurb:
          "A serene museum in greenery at the foot of Mt. Shinobu, known for its Andrew Wyeth and Ben Shahn collections plus Fukushima-born painters like Shoji Sekine. A first-choice rainy-day plan.",
        tips: "Closed Mondays (open on holiday Mondays, closing the next weekday instead); the Bijutsukan-Toshokan-mae stop on the Iizaka Line is right outside.",
      },
      "fukushima-azuma-icho": {
        name: "Azuma Sports Park Ginkgo Avenue",
        blurb:
          "116 ginkgo trees line the park's central promenade in a 520-meter golden tunnel — Fukushima's signature autumn scene. At peak season the avenue is lit up after dusk, turning dreamlike.",
        tips: "Peak color runs late Oct to mid-Nov with evening illumination; driving is easiest, or take a bus about 30 minutes from Fukushima Station.",
      },
      "fukushima-fruit-line": {
        name: "Fruit Line Orchard Picking",
        blurb:
          "Along 14km of road at the foot of the Azuma range, orchards offer all-you-can-eat picking from June cherries through early-December apples. From July, peaches — the pride of Japan's peach kingdom — take over.",
        tips: "Each orchard's crops and season differ, so check websites first; there's no public transport along the route — drive or taxi from Fukushima Station.",
      },
    },
  },
};
