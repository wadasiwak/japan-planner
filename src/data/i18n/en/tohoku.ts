import type { CityTranslation } from "../types";

// Tohoku 英文內容包:aizu / yamagata / sendai / hiraizumi / kakunodate / aomori。
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
    },
  },

  sendai: {
    name: "Sendai & Matsushima",
    areas: {
      仙台市區: "Sendai City",
      松島: "Matsushima",
    },
    hubs: {
      "sendai-sta-sendai": "Sendai Station",
      "sendai-kokubuncho": "Kokubuncho",
      "sendai-sta-matsushima-kaigan": "Matsushima-Kaigan Station",
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
    },
  },

  hiraizumi: {
    name: "Hiraizumi",
    areas: {
      平泉中心: "Central Hiraizumi",
      "嚴美溪・達谷窟": "Genbikei Gorge & Takkoku no Iwaya",
    },
    hubs: {
      "hiraizumi-sta-hiraizumi": "Hiraizumi Station",
      "hiraizumi-chusonji-sando": "Chusonji Approach (Tsukimizaka Entrance)",
      "hiraizumi-sta-ichinoseki": "Ichinoseki Station",
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
    },
  },

  aomori: {
    name: "Aomori & Hirosaki",
    areas: {
      青森市區: "Aomori City",
      弘前: "Hirosaki",
      "奧入瀨・十和田": "Oirase & Towada",
    },
    hubs: {
      "aomori-sta-aomori": "Aomori Station",
      "aomori-sta-shin-aomori": "Shin-Aomori Station",
      "aomori-sta-hirosaki": "Hirosaki Station",
      "aomori-towadako-yasumiya": "Lake Towada (Yasumiya)",
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
    },
  },
};
