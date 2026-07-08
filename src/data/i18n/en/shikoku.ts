import type { CityTranslation } from "../types";

// English content pack for Shikoku: takamatsu, tokushima, kochi, matsuyama.
export const cities: Record<string, CityTranslation> = {
  takamatsu: {
    name: "Takamatsu & Naoshima",
    areas: {
      "高松市區": "Central Takamatsu",
      "屋島": "Yashima",
      "直島": "Naoshima",
    },
    hubs: {
      "takamatsu-sta-takamatsu": "Takamatsu Station",
      "takamatsu-kawaramachi": "Kawaramachi Station",
      "takamatsu-port": "Takamatsu Port",
      "takamatsu-miyanoura-port": "Miyanoura Port (Naoshima)",
    },
    souvenirs: [
      "Sanuki udon gift sets (dried or semi-fresh noodles from famous shops, usually with dipping broth)",
      "Wasanbon (delicate hand-pressed sugar candies from old houses like Mitani Seito that melt on the tongue)",
      "Yayoi Kusama goods (Naoshima pumpkin-themed items and museum-exclusive merchandise)",
      "Kyuman (moxa-shaped buns with white bean paste, a classic treat from the Kotohira shrine approach)",
      "Shodoshima olive products (olive oil, hand creams and other Setouchi specialties)",
    ],
    pois: {
      "takamatsu-ritsurin-garden": {
        name: "Ritsurin Garden",
        blurb: "A daimyo garden polished over 400 years, rated three stars as worth the journey. Six ponds and thirteen hills unfold scene by scene; the boat ride is sublime.",
        tips: "Crowds are thinnest and light is best right after opening; boat departures are limited, so reserve at the ticket office as soon as you enter.",
      },
      "takamatsu-tamamo-park": {
        name: "Tamamo Park (Takamatsu Castle Ruins)",
        blurb: "Ruins of one of Japan's three great sea castles, its moats fed by the Seto Inland Sea—sea bream swim where carp usually do. Two original turrets remain.",
        tips: "Right beside Takamatsu Station and the port—perfect for a quick loop while waiting for a ferry.",
      },
      "takamatsu-marugamemachi": {
        name: "Marugamemachi Shopping Arcade",
        blurb: "Core of Japan's longest arcade network, running over two kilometers under a glass dome—department stores, old shops and udon joints, rain or shine.",
      },
      "takamatsu-udon-baka-ichidai": {
        name: "Udon Baka Ichidai",
        blurb: "Takamatsu's favorite self-service udon shop. The signature kama-butter bowl tops hot noodles with butter and raw egg, like a Japanese carbonara.",
        tips: "Opens at 6 a.m.—come for breakfast to skip the worst lines, and mix the kama-butter bowl while it's hot.",
      },
      "takamatsu-ippuku": {
        name: "Sanuki Udon Ippuku Machinaka",
        blurb: "City-center outpost of a famed rural Kagawa shop. Cold zaru udon shows off the noodles' sheen and bite; the sardine dashi broth is clear yet deep.",
        tips: "Udon shops often sell out and close by 2–3 p.m., so plan to eat before noon.",
      },
      "takamatsu-ikkaku": {
        name: "Honetsukidori Ikkaku Takamatsu",
        blurb: "Birthplace of Kagawa's honetsukidori: a whole bone-in chicken leg roasted crisp with garlic and pepper. Chewy oya hen with beer is a night classic.",
        tips: "Oya (mature) is intense and chewy, hina (young) is juicy—order one of each between two people. Expect a wait at dinner time.",
      },
      "takamatsu-umie": {
        name: "umie (Kitahama Alley)",
        blurb: "The best-known cafe in a cluster of converted harborside warehouses—old sofas, weathered floors and Seto Inland Sea views right outside the window.",
        tips: "About ten minutes on foot from Takamatsu Port, ideal before or after a ferry; sea-view window seats are luck of the draw.",
      },
      "takamatsu-yashima": {
        name: "Yashima",
        blurb: "A table-shaped lava plateau above the Genpei battlegrounds. The Shishi-no-Reigan lookout sweeps the Seto Inland Sea; the new Yashimaru pavilion charms too.",
        tips: "Shuttle buses climb from Kotoden Yashima Station but run infrequently—check times first. Sunset views are the finest.",
      },
      "takamatsu-waraya": {
        name: "Waraya",
        blurb: "A kamaage udon house in a thatched farmhouse at Yashima's foot—share a giant wooden tub of tarai udon, dipping hot noodles with ginger and scallions.",
        tips: "Right by the Shikoku Mura entrance, an easy stop before or after Yashima; expect weekend lunch queues.",
      },
      "takamatsu-naoshima-pumpkin": {
        name: "Yayoi Kusama's Yellow Pumpkin",
        blurb: "The dotted yellow pumpkin at the end of an old pier is the icon of the Setouchi art islands; a red one you can step inside waits by Miyanoura Port.",
        tips: "Ferries from Takamatsu to Miyanoura take about 50 minutes with limited departures—check both directions in advance. Island buses are small; an e-bike gives the most freedom.",
      },
      "takamatsu-chichu-museum": {
        name: "Chichu Art Museum",
        blurb: "Tadao Ando buried the museum inside a hill, lighting Monet, Turrell and De Maria with daylight alone. The building itself is Naoshima's spiritual core.",
        tips: "Timed-entry tickets must be booked online and often sell out in peak season—buy on the official site first. Closed Mondays (or the next day after holidays).",
      },
      "takamatsu-benesse-house": {
        name: "Benesse House Museum",
        blurb: "A museum-hotel about living amid nature and art—Ando-designed galleries flow into coastal sculptures scattered across lawns and beaches by the shore path.",
        tips: "Same area as the Yellow Pumpkin and outdoor sculptures—string them together into one coastal walking route.",
      },
      "takamatsu-art-house-project": {
        name: "Art House Project (Honmura)",
        blurb: "Seven artworks made from old houses, a shrine and a dental clinic in Honmura's lanes. Miyajima's numeral pool and Turrell's dark room astound most.",
        tips: "Buy the combined ticket at the Honmura Lounge & Archive. Minamidera admits in timed groups and often has waits—get a number first, then tour the other houses.",
      },
      "takamatsu-aisunao": {
        name: "Aisunao",
        blurb: "A farmhouse set-meal spot in Honmura: brown rice, miso soup and island vegetables—gentle, restorative, and a perfect tatami break mid Art House tour.",
        tips: "The island has few restaurants and lunch seats vanish fast—arrive at opening or dodge the midday peak.",
      },
      "takamatsu-nakaoku": {
        name: "Cafe Salon Nakaoku",
        blurb: "A farmhouse cafe hidden deep in Honmura's lanes—hand-drip coffee, homemade pudding and curry beneath old beams, at Naoshima's everyday pace.",
      },
    },
  },

  tokushima: {
    name: "Tokushima & Naruto",
    areas: {
      "鳴門": "Naruto",
      "德島市區": "Central Tokushima",
    },
    hubs: {
      "tokushima-sta-tokushima": "Tokushima Station",
      "tokushima-sta-naruto": "Naruto Station",
      "tokushima-naruto-park": "Naruto Park",
    },
    souvenirs: [
      "Naruto Kintoki sweets (baked treats and candied sweet potato made from the famous local variety)",
      "Sudachi products (juice, seasonings and liqueur from Tokushima's signature citrus)",
      "Awa wasanbon (premium dry sugar confections made the traditional way by houses like Okada Seitosho)",
      "Kincho manju (chocolate-coated buns with white bean paste, named after the tanuki legend)",
      "Aizome indigo goods (Awa indigo-dyed handkerchiefs, drawstring pouches and other crafts)",
    ],
    pois: {
      "tokushima-uzunomichi": {
        name: "Uzu no Michi Walkway",
        blurb: "A 450-meter walkway inside the Onaruto Bridge girders, with glass floor panels looking 45 meters straight down onto the churning Naruto whirlpools.",
        tips: "Whirlpools appear only around 1.5 hours either side of the tide change—check the official tide timetable and aim for a spring tide before you go.",
      },
      "tokushima-uzushio-cruise": {
        name: "Uzushio Sightseeing Cruise",
        blurb: "Boats sail right beside the whirlpools—the big Wonder Naruto up close, an underwater-view vessel at sea level. Rocking in the current beats the shore.",
        tips: "Time your sailing to the spring-tide window or you won't see big whirlpools. Spring and autumn tides are the mightiest; take seasickness pills if prone.",
      },
      "tokushima-otsuka-museum": {
        name: "Otsuka Museum of Art",
        blurb: "Over a thousand Western masterpieces reproduced at full scale on ceramic panels, from the whole Sistine Chapel to Guernica—4 km through art history.",
        tips: "The route runs a full 4 km, so allow at least half a day. Closed Mondays (or the next day after holidays); entering at opening is the most relaxed.",
      },
      "tokushima-taimaru-kaigetsu": {
        name: "Taimaru Kaigetsu",
        blurb: "A sea bream specialist below Naruto Park: strait-raised Naruto-dai is firm and sweet, with tai-meshi rice and tai chazuke as the signature dishes.",
        tips: "Restaurants are scarce around Naruto Park and lunch fills up fast—avoiding the noon rush is safest.",
      },
      "tokushima-awaodori-kaikan": {
        name: "Awa Odori Kaikan",
        blurb: "Authentic Awa Odori performed year-round, with dancers teaching the basic steps hands-on; the upstairs museum covers 400 years of festival history.",
        tips: "Daytime and evening shows use different troupes—the night performances by famous ren are the best. Check showtimes on the official site before planning.",
      },
      "tokushima-bizan": {
        name: "Mt. Bizan Ropeway & Night View",
        blurb: "Ride the ropeway from the Awa Odori Kaikan up Tokushima's symbol peak—city, Yoshino River and Kii Channel below. A dusk ascent for the lights is classic.",
        tips: "Last ropeway times change by season (earlier in winter)—confirm the return schedule before heading up.",
      },
      "tokushima-inotani": {
        name: "Chuka Soba Inotani Honten",
        blurb: "The shop that put Tokushima ramen on the map: rich brown tonkotsu-shoyu broth with sweet-spicy pork belly, best with a raw egg and white rice.",
        tips: "The classic order is \"niku-iri\" with a raw egg added. The soup runs salty—rice on the side is a must.",
      },
      "tokushima-todai": {
        name: "Ramen Todai Daido Honten",
        blurb: "A late-night Tokushima ramen favorite—thick brown broth, crunchy bamboo shoots, simmered pork and free raw eggs. Ideal after Bizan's night view.",
      },
      "tokushima-naruto-taiyaki": {
        name: "Naruto Taiyaki Honpo",
        blurb: "Famed for itcho-yaki: each fish-shaped cake baked in its own iron mold over open flame, thin and crisp, with red bean or Naruto Kintoki filling.",
        tips: "Made to order, so expect a short wait—eating one as you stroll pairs nicely with a walk around the station area.",
      },
      "tokushima-wadanoya": {
        name: "Wadanoya Honten",
        blurb: "A 400-year-old teahouse at Bizan's foot. Its taki-no-yakimochi—spring-water rice cakes grilled to order—pair beautifully with matcha in the garden.",
        tips: "Right near the Bizan ropeway station—an ideal rest stop before or after the ride.",
      },
    },
  },

  kochi: {
    name: "Kochi",
    areas: {
      "高知市中心": "Central Kochi",
      "五台山・桂濱": "Godaisan & Katsurahama",
    },
    hubs: {
      "kochi-sta": "Kochi Station",
      "kochi-harimayabashi": "Harimaya Bridge",
      "kochi-katsurahama-bus": "Katsurahama",
    },
    souvenirs: [
      "Imo kenpi (fried sweet-potato sticks from brands like Shibuya Foods, Kochi's everyday snack)",
      "Yuzu products (Umaji Village's yuzu ponzu and yuzu drinks are the most famous)",
      "Katsuobushi and soda-bushi (bonito flake gift sets; Tosashimizu's soda-bushi is prized for dashi)",
      "Mire biscuits (nostalgic little round crackers from Nomura Peanut Roasters, Kochi's soul snack)",
    ],
    pois: {
      "kochi-castle": {
        name: "Kochi Castle",
        blurb: "One of twelve surviving original keeps—and the only castle in Japan keeping both keep and main palace intact, with city views from the tower top.",
        tips: "The spot in front of Otemon gate is the classic photo framing the keep. Last entry to the keep is 16:30—come early, then move on to the Sunday Market or Hirome Market.",
      },
      "kochi-hirome-ichiba": {
        name: "Hirome Market",
        blurb: "A food-stall village below the castle where 60-odd shops ring shared tables. Myojinmaru's flaming straw-seared katsuo tataki is Kochi's top must-eat.",
        tips: "Order the tataki salt-style (shio-tataki) to best taste its freshness. Weekend lunch seats are scarce—claim a table first, then split up to buy food.",
      },
      "kochi-sunday-market": {
        name: "Sunday Market (Nichiyoichi)",
        blurb: "A 300-year-old street market: every Sunday, a hundred-plus stalls line Otesuji with vegetables, inaka-zushi and fresh-fried sweet-potato tempura.",
        tips: "Stalls appear only Sunday morning through early afternoon—if your trip includes a Sunday, don't miss it. For the famous imo-ten fritters, look for the queue at Ohira Shoten.",
      },
      "kochi-harimaya-bridge": {
        name: "Harimaya Bridge",
        blurb: "A small vermilion bridge from the tragic tale of Junshin and Ouma—one of Japan's \"disappointing sights\", yet the hub of Kochi's trams and buses.",
      },
      "kochi-obiyamachi": {
        name: "Obiyamachi Shopping Arcade",
        blurb: "A covered arcade linking Harimaya Bridge and Hirome Market—souvenir shops, bookstores and izakaya, plus Imoya Kinjiro's fried sweet-potato sticks.",
      },
      "kochi-tosacha-cafe": {
        name: "Tosa Tea Cafe",
        blurb: "A tea-specialist cafe in the Obiyamachi arcade—matcha parfaits and hojicha sweets made with mountain-grown Tosa tea, clean and never cloying.",
      },
      "kochi-katsurahama": {
        name: "Katsurahama Beach & Ryoma Statue",
        blurb: "A bow of white sand and pines on Ryuzu Cape, Kochi's most famous view. The 13-meter Sakamoto Ryoma statue gazes out over the crashing Pacific.",
        tips: "The MY-Yu Bus runs direct from Kochi Station in about 40 minutes; the day pass covering Godaisan is the best value. Swimming is forbidden in the rough surf—walk the path to Watatsumi Shrine for the finest views.",
      },
      "kochi-umi-no-terrace": {
        name: "Katsurahama Umi no Terrace",
        blurb: "The renovated shops and eateries at Katsurahama's entrance—katsuo tataki rice bowls, Ryoma souvenirs, and aisu-kurin, Kochi's nostalgic ice treat.",
        tips: "Aisu-kurin is a Kochi-only nostalgic ice, somewhere between ice cream and sherbet—perfect in hand on a stroll.",
      },
      "kochi-ryoma-museum": {
        name: "Sakamoto Ryoma Memorial Museum",
        blurb: "On the bluff above Katsurahama, Ryoma's handwritten letters and the Senchu Hassaku draft bring the Bakumatsu era alive; the deck faces the Pacific.",
        tips: "A 10-minute uphill walk connects it to the beach. Open year-round, so on rainy days shift your Katsurahama plans here.",
      },
      "kochi-godaisan": {
        name: "Godaisan Observatory",
        blurb: "A hilltop deck over Kochi city and Urado Bay, the Kagami River winding to the sea—free rooftop terrace and a cafe seated front-row to the panorama.",
        tips: "The MY-Yu Bus stops at the observatory, so pair it with Katsurahama on one route. For night views you'll need a car or taxi—buses stop by early evening.",
      },
      "kochi-chikurinji": {
        name: "Chikurinji Temple",
        blurb: "Temple 31 of the Shikoku pilgrimage: a five-story pagoda among cedars, a famed garden and mossy steps, a short walk from the Godaisan lookout.",
      },
    },
  },

  matsuyama: {
    name: "Matsuyama & Dogo Onsen",
    areas: {
      "道後溫泉": "Dogo Onsen",
      "松山市中心": "Central Matsuyama",
    },
    hubs: {
      "matsuyama-sta": "Matsuyama Station",
      "matsuyama-okaido": "Okaido",
      "matsuyama-dogo-sta": "Dogo Onsen Station",
    },
    souvenirs: [
      "Ichiroku Tart (yuzu-scented red bean sponge roll, Ehime's century-old signature sweet; Rokujiya's version is also famous)",
      "Botchan dango (tri-colored dumplings named after Natsume Soseki's novel Botchan)",
      "Imabari towels (world-class Ehime towels, with specialty shops in central Matsuyama)",
      "Mikan products (Ehime mandarin juices like POM and all manner of mikan sweets)",
      "Poeme (Ehime's beloved little butter-cream-filled cakes, a crowd-pleaser for all ages)",
    ],
    pois: {
      "matsuyama-dogo-honkan": {
        name: "Dogo Onsen Honkan",
        blurb: "Reputedly Japan's oldest hot spring, its wooden bathhouse inspired Spirited Away. Soaking in the Meiji-era Kami-no-Yu is a national-treasure experience.",
        tips: "Long lines form from early evening—go at opening (6:00) or on a weekday afternoon. The basic Kami-no-Yu-only plan without a rest room is quickest, and towels are sold on site.",
      },
      "matsuyama-asuka-no-yu": {
        name: "Dogo Onsen Annex Asuka-no-Yu",
        blurb: "A 2017 annex styled on Asuka-period architecture, its baths adorned with Ehime crafts—when the Honkan queue is long, the soak here is just as good.",
        tips: "Plans with the large tatami rest hall include tea and sweets, and lounging in a yukata adds to the bathing ritual; crowds are usually lighter than the Honkan.",
      },
      "matsuyama-dogo-arcade": {
        name: "Dogo Haikara Street",
        blurb: "An L-shaped arcade from Dogo Onsen Station to the Honkan—souvenirs, Imabari towels and mikan treats, best strolled snacking in yukata and geta.",
      },
      "matsuyama-botchan-clock": {
        name: "Botchan Karakuri Clock & Footbath",
        blurb: "The mechanical clock by Dogo Onsen Station where Botchan characters twirl to music on the hour, with a free footbath alongside for the wait.",
        tips: "Performances run hourly 8:00–22:00 (with extra half-hour shows in peak season)—grab a spot a few minutes early.",
      },
      "matsuyama-gansui": {
        name: "Gansui Dogo",
        blurb: "A famed Uwajima-style tai-meshi house: raw sea bream dipped in raw-egg sauce, poured over hot rice and stirred in—sweet, silky and unmissable.",
        tips: "Expect waits at peak mealtimes—arrive at opening or dodge the noon rush. They close early once the tai-meshi sells out.",
      },
      "matsuyama-tsuboya": {
        name: "Tsuboya Kashiho",
        blurb: "The old confectioner behind the dumplings in Soseki's Botchan—matcha, egg-yolk and red-bean dango on one skewer, sweet but never heavy.",
      },
      "matsuyama-10-factory": {
        name: "10 FACTORY Dogo",
        blurb: "An Ehime mikan specialist with juices, gelato and dried fruit sorted by variety—fresh-squeezed mandarin juice after a soak is pure bliss.",
        tips: "Ordering a flight of small cups across varieties is the most fun—you can really taste the difference between Unshu mikan and Beni Madonna.",
      },
      "matsuyama-ishiteji": {
        name: "Ishiteji Temple",
        blurb: "Temple 51 of the Shikoku pilgrimage, with a National Treasure gate, an imposing pagoda and an otherworldly cave tunnel—walkable from Dogo Onsen.",
        tips: "About 15 minutes on foot from Dogo Onsen. The cave is dim inside—have your phone flashlight ready.",
      },
      "matsuyama-castle": {
        name: "Matsuyama Castle",
        blurb: "One of twelve original keeps, its connected towers crown Mt. Katsuyama with views to the Seto Inland Sea; the Honmaru plaza is a cherry-blossom spot.",
        tips: "Ropeway and single chairlift cost the same—on clear days the lift has better views. Last keep entry is around 16:30; walk down via the Kuromon route for a pleasant descent.",
      },
      "matsuyama-okaido-arcade": {
        name: "Okaido Shopping Arcade",
        blurb: "Matsuyama's liveliest arcade—hundreds of meters of drugstores, fashion and izakaya linking to Gintengai, with the castle ropeway at its north end.",
      },
      "matsuyama-goshiki": {
        name: "Goshiki Honten",
        blurb: "A 300-year-old regional-cuisine house famed for five-colored somen, serving both tai-meshi schools—Matsuyama cooked and Uwajima raw—side by side.",
        tips: "To try both tai-meshi styles, order the tabekurabe comparison set; book ahead for dinner.",
      },
      "matsuyama-kotori": {
        name: "Nabeyaki Udon Kotori",
        blurb: "A nabeyaki udon institution since 1949: sweetish broth and soft noodles served straight in aluminum pots, the soul food locals grow up on.",
        tips: "Open only until early evening and closes when sold out—come at lunch. The low-key shopfront hides in a side lane; follow the queue.",
      },
    },
  },
};
