import type { CityTranslation } from "../types";

// Hokkaido English content pack: Shiretoko, Furano & Biei, Sapporo, Otaru,
// Noboribetsu & Lake Toya, Hakodate. Source data stays in Traditional Chinese;
// this dict is looked up at display time.

export const cities: Record<string, CityTranslation> = {
  shiretoko: {
    name: "Shiretoko",
    areas: {
      "宇登呂側": "Utoro Side",
      "羅臼側": "Rausu Side",
    },
    hubs: {
      "shiretoko-utoro-bt": "Utoro Onsen Bus Terminal",
      "shiretoko-nature-center": "Shiretoko Nature Center",
      "shiretoko-rausu": "Rausu",
    },
    souvenirs: [
      "Sake toba (chewy Shiretoko salmon jerky, a moreish drinking snack sold at the roadside station)",
      "Rausu kombu (the byword for premium dashi kelp; direct-sale shops on the Rausu side have the best selection)",
      "Ryuhyo Draft (Abashiri Beer's blue brew, inspired by the Okhotsk drift ice)",
      "Ikura shoyu-zuke (jarred soy-marinated salmon roe from the fishing co-op; ultra fresh but needs to stay chilled)",
    ],
    pois: {
      "shiretoko-goko": {
        name: "Shiretoko Five Lakes",
        blurb: "Five quiet lakes mirror the Shiretoko peaks amid virgin forest, the heart of the World Heritage site. The boardwalk is easy — with luck, a distant bear.",
        tips: "The elevated boardwalk needs no reservation in season (roughly Apr–Nov); the ground trails in bear season (May–Jul) require a paid guided tour booked in advance.",
      },
      "shiretoko-cruise": {
        name: "Shiretoko Sightseeing Cruise",
        blurb: "Sail from Utoro along sheer sea cliffs where waterfalls drop straight into the ocean. Summer boats often spot brown bears on shore — a signature outing.",
        tips: "Small boats hug the cliffs and see bears more often but rock more; sailings are cancelled in rough seas, so keep a backup plan.",
      },
      "shiretoko-oshinkoshin": {
        name: "Oshinkoshin Falls",
        blurb: "A twin cascade splitting in two down the rock face, one of Japan's top 100 waterfalls. Right beside the highway to Utoro, it makes a perfect quick stop.",
        tips: "Some Shari buses stop here; drivers get a free car park. Twenty minutes is plenty for photos.",
      },
      "shiretoko-pass": {
        name: "Shiretoko Pass",
        blurb: "The high point of the trans-peninsula road, with Mt. Rausu looming close and Kunashiri Island visible on clear days. The grandest stop of the drive.",
        tips: "The Shiretoko Traverse Road closes in winter (about Nov to late Apr); a sea of clouds often forms at dawn in the open season.",
      },
      "shiretoko-yuhidai": {
        name: "Yuhidai Sunset Point",
        blurb: "A small bluff behind Utoro's onsen streets with the fullest view of Okhotsk sunsets. Unforgettable in winter, when the sun sets over a sea of drift ice.",
      },
      "shiretoko-ryuhyo-walk": {
        name: "Drift Ice Walk",
        blurb: "Zip into a drysuit and walk on the Okhotsk drift ice — hop the cracks or float between floes. One of the few places on earth to try it.",
        tips: "Tours run about 1.5–2 hours with gear included and must be booked ahead; ice conditions change daily, so the guide's call on the day is final.",
      },
      "shiretoko-rausu-whale": {
        name: "Rausu Whale & Orca Watching",
        blurb: "The Nemuro Strait is world-class whale water. Sail from Rausu to find orcas, sperm whales and dolphins, with the Shiretoko range as backdrop.",
        tips: "Orca sightings peak May–Jul, with sperm whales taking over from midsummer; take seasickness medicine beforehand if you are prone.",
      },
      "shiretoko-fujinbu-shokudo": {
        name: "Utoro Fishery Co-op Women's Diner",
        blurb: "A harborside canteen run by fishing co-op women, ladling salmon-and-roe and sea urchin bowls straight off the day's boats. Plain decor, unbeatable freshness.",
        tips: "Open only during the fishing season (late Apr to Oct); it fills up at lunch, so arrive at opening time.",
      },
      "shiretoko-kumaushi": {
        name: "Kumaushi Venison Restaurant",
        blurb: "A homely diner on the Utoro highway known for Ezo deer bowls — lean, protein-rich and far less gamey than feared. Mountain fare instead of seafood.",
      },
      "shiretoko-rausu-shokudo": {
        name: "Shiretoko Shokudo (Rausu Roadside Station)",
        blurb: "The popular diner at the Shiretoko-Rausu roadside station, piling blackthroat perch and Rausu kombu onto lavish seafood bowls. The Rausu-side lunch pick.",
        tips: "Spring (around May–Jun) is Rausu's sea urchin season, when the uni bowl is at its creamiest.",
      },
      "shiretoko-bons-home": {
        name: "Bon's Home Pumpkin Cafe",
        blurb: "A veteran pumpkin kitchen and cafe on Utoro's onsen street, its house-aged pumpkin puddings and cakes silky sweet. The warmest rest stop between sights.",
      },
    },
  },

  furano: {
    name: "Furano & Biei",
    areas: {
      "富良野": "Furano",
      "美瑛": "Biei",
    },
    hubs: {
      "furano-sta-furano": "Furano Station",
      "furano-sta-biei": "Biei Station",
      "furano-nakafurano": "Nakafurano (Farm Tomita)",
      "furano-shirogane": "Shirogane Blue Pond",
    },
    souvenirs: [
      "Farm Tomita lavender goods (soaps, essential oils and dried flowers, available even outside the bloom season)",
      "Furano Cheese Factory cheeses (made with local milk, including quirky flavors like squid ink)",
      "Furano wine (easy-drinking local reds and whites from the city-run winery)",
      "Furano milk pudding (from patisserie Furano Delice; keep it chilled and eat it soon)",
      "Biei Senka farm products (the Biei co-op's own brand — corn and jams make great gifts)",
    ],
    pois: {
      "furano-farm-tomita": {
        name: "Farm Tomita",
        blurb: "Hokkaido's lavender icon: in July, purple fields cascade down the slope beside rainbow flower beds. Lavender soft-serve is a ritual, and entry is free.",
        tips: "Off season (Oct–Apr) most facilities and fields close, so skip the detour; lavender peaks in early-to-mid July with the biggest crowds — arrive at opening.",
      },
      "furano-aoiike": {
        name: "Shirogane Blue Pond",
        blurb: "A dreamlike blue pond born by accident from flood-control works, dead trees rising like another world. Famed as an Apple wallpaper; bluest on sunny mornings.",
        tips: "From Nov to Apr the pond is lit in the evenings, magical over the frozen surface; it's a 5-minute walk from the car park, about 20 minutes' drive from Biei.",
      },
      "furano-shikisai-no-oka": {
        name: "Shikisai-no-Oka Flower Fields",
        blurb: "Seven hectares of rainbow flowers on the rolling Biei hills — poppies, sunflowers and salvia bloom in relay, and an alpaca ranch waits inside.",
        tips: "The grounds are big — ride the tractor bus or rent a cart to save your legs; in winter the fields become a snowfield with snowmobiles and other activities.",
      },
      "furano-patchwork-road": {
        name: "Patchwork Road & Ken and Mary Tree",
        blurb: "Biei's classic drive: wheat and potato fields quilt the hills, dotted with famous trees from old commercials. Every roadside stop is a postcard.",
        tips: "The famous trees stand beside private farmland — never step into the fields; roads are narrow, so park only in laid shoulders. A slow loop takes about 1.5 hours.",
      },
      "furano-shirahige-falls": {
        name: "Shirahige Falls",
        blurb: "Groundwater seeps from the lava and falls like a white beard into the blue Biei River. Best seen from the Shirogane Onsen bridge; stunning frosted in winter.",
        tips: "Only 3 km from the Blue Pond, an easy pairing by car; the viewpoint is right on the bridge in Shirogane Onsen, no hiking needed.",
      },
      "furano-hokusei-no-oka": {
        name: "Hokusei-no-Oka Observatory Park",
        blurb: "A pyramid lookout on a lavender knoll with 360-degree views over the Patchwork Road hills to the Tokachi peaks. A handy waypoint with snack stalls.",
      },
      "furano-biei-senka": {
        name: "Biei Senka",
        blurb: "JA Biei's farm-direct market: the bakery's milk bread and corn bread vanish as they emerge, and the stalls brim with local produce and sweets.",
        tips: "The famous corn bread is limited daily and often gone before noon — come early; the French restaurant Asperges has waits at lunch, so just grab bread if pressed.",
      },
      "furano-cheese-kobo": {
        name: "Furano Cheese Factory",
        blurb: "A city-run cheese works in the woods — watch production, sample squid-ink cheese, and try pizza baked with the house cheese. The soft-serve is dangerously rich.",
        tips: "Butter- and ice-cream-making workshops take about 40 minutes; in peak season book ahead by phone or online.",
      },
      "furano-yuiga-doxon": {
        name: "Yuiga Doxon Curry",
        blurb: "The face of Furano curry: a log cabin fragrant with black roux simmered from 30 spices, topped with house sausages. Say the password for extra sauce.",
        tips: "Five minutes' walk from Furano Station, closed Mondays; queues at mealtimes are the norm, so dodge the noon rush.",
      },
      "furano-mori-no-tokei": {
        name: "Mori no Tokei Forest Cafe",
        blurb: "A forest cafe built for a TV drama, where counter guests hand-grind the beans for their own cup. In winter the snowy woods outside seem to stop time.",
        tips: "It's beside the New Furano Prince Hotel — pair it with the Ningle Terrace craft huts lit up at dusk; the counter seats with hand-ground coffee are worth the wait.",
      },
      "furano-prince-ski": {
        name: "Furano Ski Resort",
        blurb: "The standard-bearer of Hokkaido's inland powder — dry snow and 4 km runs endorsed by Olympians, with basin and Tokachi views all the way up.",
        tips: "There are two zones — beginners should start from the Kitanomine side; gear is all rentable, and non-skiers can ride the ropeway up for the snowscape.",
      },
      "furano-rokugo-tenbodai": {
        name: "Rokugo Observatory",
        blurb: "A lookout above Rokugo, setting of From the North Country, with flower fields below and the basin and Mt. Ashibetsu beyond. Blissfully uncrowded.",
        tips: "About 30 minutes' drive from Furano Station with no public transport; the access road closes in winter and reopens after the thaw.",
      },
    },
  },

  sapporo: {
    name: "Sapporo",
    areas: {
      "大通・狸小路": "Odori & Tanukikoji",
      "薄野": "Susukino",
      "圓山": "Maruyama",
      "札幌站周邊": "Around Sapporo Station",
    },
    hubs: {
      "sapporo-sta-sapporo": "Sapporo Station",
      "sapporo-sta-odori": "Odori Station",
      "sapporo-sta-susukino": "Susukino Station",
      "sapporo-sta-maruyama": "Maruyama Koen Station",
    },
    souvenirs: [
      "Shiroi Koibito (Ishiya's white chocolate langue de chat cookies, also sold at New Chitose Airport)",
      "Marusei Butter Sand (Rokkatei's rum-raisin butter sandwich cookies, a Hokkaido classic)",
      "Royce' Nama Chocolate (melt-in-the-mouth; heat-sensitive, so buy last with a cooler bag)",
      "Jaga Pokkuru (Calbee's Hokkaido-only potato sticks, so popular they often sell out)",
      "Sapporo Nogakko milk cookies (endorsed by Hokkaido University; simple, milky and honest)",
    ],
    pois: {
      "sapporo-odori-park": {
        name: "Odori Park",
        blurb: "A 1.5 km green belt through downtown, hosting the Snow Festival, beer gardens and winter illuminations in turn. Grilled corn by the fountain is peak Sapporo.",
        tips: "The famous grilled-corn carts run only from spring to early October; in winter head for the Snow Festival sculptures instead.",
      },
      "sapporo-tv-tower": {
        name: "Sapporo TV Tower",
        blurb: "The red tower at Odori Park's east end, its 90-meter deck aligned with the park's axis. At dusk, catch sunset, city lights and Mt. Moiwa in one go.",
      },
      "sapporo-clock-tower": {
        name: "Sapporo Clock Tower",
        blurb: "A white wooden clock tower from 1878, symbol of pioneer Sapporo, with a small exhibit inside. Teasingly called a letdown, but a passing photo is just right.",
        tips: "The second-floor terrace of the building across the street is a hidden angle for a full shot of the tower.",
      },
      "sapporo-tanukikoji": {
        name: "Tanukikoji Shopping Street",
        blurb: "Hokkaido's oldest arcade: 900 meters of drugstores, souvenir shops and izakaya. Fully covered, it's the best fallback for shopping through rain or snow.",
      },
      "sapporo-nijo-market": {
        name: "Nijo Market",
        blurb: "A century-old downtown seafood market piled with crab, uni and melon. A seafood-bowl breakfast in the Noren Yokocho alley is the right way to start Sapporo.",
        tips: "Stalls open at 7 am; arrive before 9 to get a rice bowl without queuing.",
      },
      "sapporo-garaku": {
        name: "GARAKU Soup Curry",
        blurb: "A flag-bearer of Sapporo soup curry: dashi broth, a whole tender chicken leg and roasted vegetables. Warming from stomach to fingertips on a cold day.",
        tips: "Waits often hit an hour at mealtimes; arrive 15 minutes before opening or skip the noon rush.",
      },
      "sapporo-ramen-yokocho": {
        name: "Ganso Sapporo Ramen Yokocho",
        blurb: "Seventeen ramen shops crammed into one narrow Susukino alley, the birthplace of miso ramen. A late-night bowl after drinks is the most local way in.",
      },
      "sapporo-daruma": {
        name: "Jingisukan Daruma Honten",
        blurb: "A Genghis Khan lamb institution since 1954 — fresh cuts seared on a domed iron grill, dipped in sauce with garlic. Tiny, packed and smoky, as it should be.",
        tips: "The main shop takes no reservations — line up before the 5 pm opening; your clothes will smell of the grill, so use the bags provided.",
      },
      "sapporo-mt-moiwa": {
        name: "Mt. Moiwa Night View",
        blurb: "One of Japan's new top-three night views: ride the ropeway to 531 meters and watch Sapporo's lights spill across the plain like an upended jewel box.",
        tips: "A free shuttle links the streetcar stop to the ropeway base; go up 30 minutes before sunset to catch daylight and night views in one trip.",
      },
      "sapporo-hokkaido-jingu": {
        name: "Hokkaido Jingu Shrine",
        blurb: "Hokkaido's guardian shrine, approached through Maruyama's old-growth forest — solemn in snow. In spring, cherry and plum bloom together here.",
        tips: "Inside the grounds, Rokkatei's shrine teahouse serves free hangan-mochi rice cakes with tea — don't miss it.",
      },
      "sapporo-shiroi-koibito": {
        name: "Shiroi Koibito Park",
        blurb: "The fantasy factory of Hokkaido's famous cookie: an English garden, production-line tours and decorate-your-own-cookie workshops. Bliss for sweet tooths.",
        tips: "From downtown, take the Tozai Line to Miyanosawa and walk 7 minutes; book a time slot online in advance for the baking workshops.",
      },
      "sapporo-morihico": {
        name: "Morihico Coffee",
        blurb: "A wooden-house cafe in Maruyama's backstreets, the byword for Sapporo home roasting. Creaking stairs and pour-over aromas — ideal after the shrine.",
      },
      "sapporo-beer-museum": {
        name: "Sapporo Beer Museum",
        blurb: "Japan's only beer museum, in a red-brick former brewery, tracing pioneer brewing history. End with a paid tasting, then lamb at the beer garden next door.",
        tips: "Closed Mondays; the revived Kaitakushi pioneer-era brew is poured only here.",
      },
      "sapporo-hokudai": {
        name: "Hokkaido University",
        blurb: "Dr. Clark's \"Boys, be ambitious\" campus, big enough to feel like a forest park. The autumn ginkgo avenue and poplar path are Sapporo's best strolls.",
        tips: "The ginkgo avenue peaks from late October to early November; visitors may wander the campus freely.",
      },
      "sapporo-former-govt": {
        name: "Former Hokkaido Government Office",
        blurb: "A Meiji red-brick baroque hall nicknamed Akarenga, its front garden photogenic year-round. Reopened after restoration, with pioneer-history exhibits.",
      },
      "sapporo-jogai-market": {
        name: "Sapporo Jogai Market",
        blurb: "Over 60 fishmongers and diners by the wholesale market, where king crab and uni cost less than downtown. Come here for a quiet, lavish seafood bowl.",
        tips: "Most diners close by 3 pm, so slot it in as brunch.",
      },
      "sapporo-matsuo-jingisukan": {
        name: "Matsuo Jingisukan (Sapporo Ekimae)",
        blurb: "The marinated school of Genghis Khan from Takikawa — lamb steeped in apple-onion sauce before the grill. Tender and mild, perfect for first-timers.",
        tips: "Online reservations make it easier than the old Susukino shops; pouring the sauce into the pan's rim to simmer vegetables is the connoisseur's move.",
      },
      "sapporo-suage": {
        name: "Suage+ Soup Curry",
        blurb: "A popular Susukino soup curry spot: skewers of fried Shiretoko chicken and chunky vegetables propped over the bowl. Lighter than GARAKU — pick a side.",
        tips: "Peak-hour waits start at 30 minutes; check whether nearby sister shop Suage2 has a shorter line.",
      },
      "sapporo-kani-honke": {
        name: "Sapporo Kani-Honke (Ekimae Honten)",
        blurb: "A venerable crab specialist: snow and king crab as sashimi, shabu-shabu and charcoal-grilled legs. A slow tatami-room course is the ultimate treat.",
        tips: "Lunch courses are far better value than dinner; book ahead and go at midday to keep the budget in check.",
      },
      "sapporo-nemuro-hanamaru": {
        name: "Nemuro Hanamaru Sushi (Stellar Place)",
        blurb: "The conveyor-sushi champion from Nemuro: port-direct saury, hanasaki crab soup and daily specials. Specialist quality at friendly prices — hence the queue.",
        tips: "Take a numbered ticket from the 6th-floor machine, then shop while you wait — it saves a long stand in line.",
      },
      "sapporo-snow-brand-parlor": {
        name: "Snow Brand Parlor Honten",
        blurb: "A dairy-run tearoom since 1961, famous for Snow Royal, the rich ice cream created for Emperor Showa. Retro salon vibes, perfect for a parfait break.",
        tips: "The giant parfaits suit a group; solo, a single scoop of Snow Royal with coffee is just right.",
      },
      "sapporo-rokkatei-honten": {
        name: "Rokkatei Sapporo Honten",
        blurb: "The Sapporo flagship of Obihiro's famed confectioner: butter-raisin sandwich cookies downstairs, fresh-baked sweets in the tearoom found only in-store.",
      },
    },
  },

  otaru: {
    name: "Otaru",
    areas: {
      "小樽站・運河": "Otaru Station & Canal",
      "堺町・南小樽": "Sakaimachi & Minami-Otaru",
    },
    hubs: {
      "otaru-sta-otaru": "Otaru Station",
      "otaru-sta-minami-otaru": "Minami-Otaru Station",
      "otaru-sta-chikko": "Otaru-Chikko Station",
    },
    souvenirs: [
      "Kitaichi Glass pieces (from the old Sakaimachi workshop — glasses and small ornaments travel well)",
      "LeTAO Double Fromage cheesecake (the flagship's signature; needs chilling, with shelf-stable treats too)",
      "Otaru music box (pick your own at the Music Box Museum, itself a century-old building)",
      "Amato Maron Coron (triple-layered sandwich biscuits from Otaru's old-line confectioner)",
    ],
    pois: {
      "otaru-canal": {
        name: "Otaru Canal",
        blurb: "The Taisho-era canal and stone warehouses of Otaru's golden age. After dark, 63 gas lamps light the water's reflections — Hokkaido's most romantic scene.",
        tips: "Asakusa Bridge is the classic vantage point; shop by day and return at dusk for the lamplight.",
      },
      "otaru-sankaku-market": {
        name: "Sankaku Market",
        blurb: "A narrow market on the slope by the station, named for its triangular roof. Seafood bowls piled with sweet shrimp, uni and crab make the perfect first meal.",
        tips: "Arrive just after 8 am for an easy visit; queues form at popular Takinami Shokudo after 10.",
      },
      "otaru-denuki-koji": {
        name: "Otaru Denuki Koji",
        blurb: "A canal-side stall village recreating Meiji-Taisho streets: fried half chicken, grilled scallops and crab buns on the go, plus a lookout tower to climb.",
      },
      "otaru-tenguyama": {
        name: "Mt. Tengu",
        blurb: "A 4-minute ropeway to the 532-meter summit spreads Otaru port and Ishikari Bay below — one of Hokkaido's three great night views. Rub the tengu's nose for luck.",
        tips: "Bus 9 from Otaru Station reaches the ropeway base in about 17 minutes; the combo ticket with round-trip ropeway is the better deal.",
      },
      "otaru-sakaimachi": {
        name: "Sakaimachi Street",
        blurb: "Otaru's tourist artery: 900 meters of stone-built shops for glassware, sweets and sushi. Graze from canal to Music Box Museum and half a day is gone.",
      },
      "otaru-kitaichi-glass": {
        name: "Kitaichi Glass Sangokan",
        blurb: "A venerable glassworks in a stone warehouse, lamps and goblets glinting in the dark. In the 167-lamp Kitaichi Hall, coffee feels like the Meiji era.",
        tips: "Kitaichi Hall holds a lamp-lighting ceremony each morning; arrive before 8:45 to watch staff light the lamps one by one.",
      },
      "otaru-orgel-do": {
        name: "Otaru Music Box Museum",
        blurb: "Tens of thousands of music boxes chime in a Meiji brick hall, from antiques to anime tie-ins. The steam clock outside whistles every 15 minutes.",
      },
      "otaru-letao": {
        name: "LeTAO Honten",
        blurb: "Birthplace of the Double Fromage cheesecake, opposite the Music Box Museum. Eat a fresh slice upstairs, then take the free tower deck for street views.",
      },
      "otaru-masazushi": {
        name: "Masazushi Honten",
        blurb: "A sushi institution since 1938 and inspiration for the manga Shota no Sushi. Herring and botan shrimp from Ishikari Bay uphold Otaru's sushi-capital name.",
        tips: "Closed Wednesdays; lunch sets beat a la carte for value, and booking online is wise in peak season.",
      },
      "otaru-naruto-honten": {
        name: "Wakadori Jidai Naruto Honten",
        blurb: "Otaru's soul-food diner: half-fried chicken seasoned with only salt and pepper, crisp-skinned and juicy. Sets with sushi or soba are hearty and cheap.",
        tips: "Weekend lunch queues start at an hour, so arrive at the 11 am opening; the half chicken also travels well as takeout.",
      },
      "otaru-kitakaro": {
        name: "Kitakaro Otaru Honkan",
        blurb: "A confectioner's flagship in a Meiji stone warehouse, filling its crisp Yume Fushigi cream puffs to order. Next to Rokkatei — start your sweets crawl here.",
        tips: "The cream puffs are best eaten same-day; the Yosei no Mori baumkuchen keeps well and makes a great souvenir.",
      },
      "otaru-ginnokane": {
        name: "Gin no Kane No. 1 Hall",
        blurb: "A Western-house cafe by Marchen Crossing: order coffee or cocoa and keep the Otaru-motif cup you drank from. Window seats face the steam clock.",
      },
    },
  },

  noboribetsu: {
    name: "Noboribetsu & Lake Toya",
    areas: {
      "登別溫泉": "Noboribetsu Onsen",
      "洞爺湖": "Lake Toya",
    },
    hubs: {
      "noboribetsu-bus-terminal": "Noboribetsu Onsen Bus Terminal",
      "noboribetsu-toyako-bus-terminal": "Toyako Onsen Bus Terminal",
      "noboribetsu-sta-toya": "Toya Station",
    },
    souvenirs: [
      "Yunohana bath salts (made with Noboribetsu spring minerals — take the sulfur bath home)",
      "Oni (demon) goodies (Noboribetsu's demons are its mascots — charms, masks and even sake labels)",
      "Wakasaimo (a Lake Toya wagashi that tastes of roasted sweet potato without using any)",
      "Onsen manju (steamed fresh on Gokuraku shopping street — piping-hot red-bean buns)",
    ],
    pois: {
      "noboribetsu-jigokudani": {
        name: "Noboribetsu Jigokudani (Hell Valley)",
        blurb: "The volcanic valley feeding Noboribetsu's springs: sulfur steam billows, water gurgles, nothing grows. The boardwalk to the iron-red pond is a must.",
        tips: "Ten minutes' walk from the onsen town; at night the path is lit as the Oni-bi Road, worth a second stroll at dusk for a wholly different mood.",
      },
      "noboribetsu-oyunuma": {
        name: "Oyunuma Pond & Natural Foot Bath",
        blurb: "A gray, simmering sulfur pond reaching 50°C, steaming like a giant cauldron. Follow the hot river downstream to a free natural foot bath in the forest.",
        tips: "Bring a towel for your feet; a trail links from Jigokudani in about 20 minutes, and in winter the road to Oyunuma closes, leaving foot access only.",
      },
      "noboribetsu-gokuraku-dori": {
        name: "Noboribetsu Onsen Street & Enmado",
        blurb: "A demon-themed spa town: red and blue oni statues line streets of souvenir shops and steam. At Enmado, the King of Hell performs a face-changing show.",
        tips: "The face-changing show runs several times daily with times posted at the hall — easiest around mealtimes; an evening stroll in yukata suits it best.",
      },
      "noboribetsu-bear-park": {
        name: "Noboribetsu Bear Park",
        blurb: "A ropeway climbs to a summit ranch of over a hundred Ezo brown bears, watched from a glass \"human cage.\" Bears beg for biscuits; Lake Kuttara lies below.",
        tips: "The ropeway base is right by the onsen town and the fare includes park entry; services stop in strong winds or for maintenance, so check the official site first.",
      },
      "noboribetsu-takimotokan": {
        name: "Dai-ichi Takimotokan Day-trip Onsen",
        blurb: "A 160-year-old institution whose baths face Hell Valley — thirty-plus tubs across several spring types, an onsen department store open to day visitors.",
        tips: "Day bathing has limited hours (daytime to early evening), sometimes shortened in peak season — check the website; towels are rentable, so come empty-handed.",
      },
      "noboribetsu-aji-no-daio": {
        name: "Aji no Daio Hell Ramen",
        blurb: "The onsen street's famous Hell Ramen: fiery red broth and springy noodles, with heat levels you can stack to masochistic extremes. Best after a soak.",
        tips: "If spice scares you, start at level 0 or 1 — their heat is no joke; the shop is small, so expect queues at mealtimes.",
      },
      "noboribetsu-onsen-ichiba": {
        name: "Onsen Ichiba",
        blurb: "A seafood diner at the town's entrance: hairy crab and scallops grilled to order from live tanks, bowls of Funka Bay catch, and onsen-egg soft serve to finish.",
      },
      "noboribetsu-toya-cruise": {
        name: "Lake Toya Sightseeing Cruise",
        blurb: "Cruise the caldera lake on a castle-styled ship, with Nakajima island and Mt. Yotei's reflection along the 50-minute voyage. Summer adds fireworks sailings.",
        tips: "In summer (late Apr to late Oct) you can land on Nakajima and catch a later boat back; winter sailings thin out, so check the timetable first.",
      },
      "noboribetsu-usuzan": {
        name: "Showa Shinzan & Mt. Usu Ropeway",
        blurb: "Showa Shinzan, the rust-red volcano that rose from a wheat field in 1943, still smokes. The ropeway deck sweeps Lake Toya, the peak and Funka Bay at once.",
        tips: "From the top, walk 10 more minutes to the crater-rim lookout over the 1977 vents — worth it if your legs allow; the ropeway stops in strong winds.",
      },
      "noboribetsu-toyako-onsen-street": {
        name: "Toyako Onsen Town & Lakeside Walk",
        blurb: "A spa town along the lake, its shoreline path linking free foot baths and a sculpture park, with Mt. Yotei across the water. Evening strolls slow the pace.",
        tips: "From late Apr to late Oct fireworks launch nightly at 20:45, viewable from the shore or a cruise boat — make this your overnight stop to see them.",
      },
      "noboribetsu-boyotei": {
        name: "Restaurant Boyotei",
        blurb: "A lakeside Western restaurant since 1946: hamburg steak, omurice and pork cutlets honed over decades in a wooden house. Lake Toya's most storied meal.",
        tips: "Right by the onsen bus terminal; waits are common at lunch and dinner peaks, so register your name and stroll the lakeside until called.",
      },
      "noboribetsu-wakasaimo": {
        name: "Wakasaimo Honpo Toyako Main Store",
        blurb: "Home of the wakasaimo, a bean sweet uncannily like roasted sweet potato; the fried imoten version is crisp outside, tender within. Upstairs faces the lake.",
        tips: "Eat the imoten fresh from the fryer; it's a 3-minute walk from the cruise pier, ideal while waiting for a boat.",
      },
    },
  },

  hakodate: {
    name: "Hakodate",
    areas: {
      "元町・灣區": "Motomachi & Bay Area",
      "函館站周邊": "Around Hakodate Station",
      "五稜郭・湯之川": "Goryokaku & Yunokawa",
    },
    hubs: {
      "hakodate-sta-hakodate": "Hakodate Station",
      "hakodate-sta-goryokaku": "Goryokaku Koen-mae Stop",
      "hakodate-sta-jujigai": "Jujigai Stop (Motomachi)",
      "hakodate-sta-yunokawa": "Yunokawa Onsen Stop",
    },
    souvenirs: [
      "Goto-ken curry retort packs (the century-old Western restaurant's signature curry, shelf-stable and portable)",
      "Ika shiokara and squid products (Hakodate is squid city — salted and smoked squid are first-rate with drinks)",
      "Trappist monastery cookies (baked by the monastery itself, rich with cultured butter)",
      "Snaffle's cheese omelet cakes (Hakodate's half-baked cheesecakes that melt in the mouth)",
    ],
    pois: {
      "hakodate-mt-hakodate": {
        name: "Mt. Hakodate Night View",
        blurb: "A fan of lights pinched between two bays — the fabled million-dollar night view. A 3-minute ropeway reaches the summit; save it for your day's climax.",
        tips: "Go up 30 minutes before sunset to claim a spot and catch daylight, sunset glow and night view in one; the summit is bitter in winter, so bundle up.",
      },
      "hakodate-kanemori": {
        name: "Kanemori Red Brick Warehouses",
        blurb: "Meiji-era brick warehouses on the harbor, reborn as craft shops, sweets and a beer hall. At dusk the lit warehouses shimmer on the water.",
      },
      "hakodate-hachimanzaka": {
        name: "Hachimanzaka Slope",
        blurb: "A cobbled slope plunging straight to the port, framing the moored Mashu Maru from the top — Hakodate's postcard shot, filmed in countless ads and dramas.",
        tips: "Come at dusk during the winter illumination, when the lit slope and harbor night merge in one frame.",
      },
      "hakodate-motomachi-churches": {
        name: "Motomachi Church District",
        blurb: "A foreign quarter from the port-opening era: the Orthodox church's onion domes beside Catholic and Anglican spires. Drift down the slopes into Meiji times.",
      },
      "hakodate-lucky-pierrot": {
        name: "Lucky Pierrot Bay Area Honten",
        blurb: "Hakodate's legendary burger chain, found nowhere else and voted Japan's best local burger. Circus decor, made-to-order Chinese chicken burgers, wickedly good.",
        tips: "Order the signature Chinese chicken burger with cheese-sauce fries; queues form at mealtimes, so decide your order while you wait.",
      },
      "hakodate-asaichi": {
        name: "Hakodate Morning Market",
        blurb: "A sprawling 250-shop market by the station with squid somen and every seafood bowl imaginable. At Ekini market you can jig for live squid, sliced on the spot.",
        tips: "Most shops close by noon — it's liveliest from 7 to 9 am; squid fishing depends on the day's catch, so go early.",
      },
      "hakodate-goryokaku-park": {
        name: "Goryokaku Park",
        blurb: "Japan's first Western-style star fort and last stage of the Hakodate War. Some 1,500 cherry trees line the moat — one of Hokkaido's finest blossom spots.",
      },
      "hakodate-goryokaku-tower": {
        name: "Goryokaku Tower",
        blurb: "The 107-meter deck is the only place to grasp the fortress's full star shape — pink all over in cherry season, with Hakodate War exhibits up top.",
        tips: "Go up the tower for the star view first, then stroll the park below — the right order transforms the visit.",
      },
      "hakodate-ajisai": {
        name: "Hakodate Menchubo Ajisai Honten",
        blurb: "The standard-bearer of Hakodate shio ramen, founded in 1930 beside Goryokaku Tower. Its clear golden broth carries kombu sweetness — miso's opposite.",
      },
      "hakodate-yunokawa-onsen": {
        name: "Yunokawa Onsen",
        blurb: "A century-old spa town minutes from airport and city — soak beside the Tsugaru Strait watching squid-boat lights. Free foot bath by the tram stop.",
        tips: "Most ryokan open their baths to day visitors until early evening; the bathing monkeys at the tropical garden appear only from December to early May.",
      },
      "hakodate-jiyoken": {
        name: "Jiyoken",
        blurb: "A legendary shio ramen shop from 1947: house-made thin straight noodles in a crystal-clear broth. Around 500 yen a bowl — locals and travelers queue together.",
        tips: "Seats are few and they close when the broth runs out — go at opening or dodge the noon rush.",
      },
      "hakodate-uni-murakami": {
        name: "Uni Murakami Hakodate Honten",
        blurb: "A sea urchin processor's own restaurant, famed for additive-free raw uni bowls untouched by alum. Pricey but rich as ocean custard — an uni pilgrimage.",
        tips: "Uni is seasonal — summer horse-dung urchin is sweetest; phone ahead for a table at busy times.",
      },
      "hakodate-daimon-yokocho": {
        name: "Daimon Yokocho",
        blurb: "A stall alley five minutes from the station: 26 tiny joints of yakitori, robata seafood and local izakaya. Shoulder to shoulder — night Hakodate in miniature.",
        tips: "Each stall has only a few counter seats and most open after 5 pm; it's made for hopping through two or three in one night.",
      },
      "hakodate-kikuizumi": {
        name: "Sabo Kikuizumi",
        blurb: "A Japanese tearoom in a Taisho-era sake merchant's house, all tatami and creaking floors. After the church slopes, a sweet and a pot of tea restore you.",
        tips: "The specialty is tofu shiratama zenzai — dumplings kneaded with tofu, wonderfully soft and a must-order.",
      },
    },
  },
};
