import type { CityTranslation } from "../types";

export const cities: Record<string, CityTranslation> = {
  tokyo: {
    name: "Tokyo",
    areas: {
      "淺草・晴空塔": "Asakusa & Skytree",
      "原宿・澀谷": "Harajuku & Shibuya",
      "新宿": "Shinjuku",
      "上野・秋葉原": "Ueno & Akihabara",
      "銀座・築地": "Ginza & Tsukiji",
      "台場・豐洲": "Odaiba & Toyosu",
      "六本木・麻布台": "Roppongi & Azabudai",
      "中目黑・自由之丘": "Nakameguro & Jiyūgaoka",
      "吉祥寺・三鷹": "Kichijōji & Mitaka",
      "清澄白河・藏前": "Kiyosumi-Shirakawa & Kuramae",
      "神樂坂・飯田橋": "Kagurazaka & Iidabashi",
      "下北澤": "Shimokitazawa",
      "池袋・巢鴨": "Ikebukuro & Sugamo",
      "谷根千": "Yanesen",
    },
    hubs: {
      "tokyo-sta-tokyo": "Tokyo Sta.",
      "tokyo-sta-shinjuku": "Shinjuku Sta.",
      "tokyo-sta-shibuya": "Shibuya Sta.",
      "tokyo-sta-ueno": "Ueno Sta.",
      "tokyo-sta-asakusa": "Asakusa Sta.",
      "tokyo-sta-ginza": "Ginza Sta.",
      "tokyo-sta-ikebukuro": "Ikebukuro Sta.",
      "tokyo-sta-akihabara": "Akihabara Sta.",
      "tokyo-sta-odaiba": "Daiba Sta.",
      "tokyo-sta-roppongi": "Roppongi Sta.",
      "tokyo-sta-nakameguro": "Nakameguro Sta.",
      "tokyo-sta-kichijoji": "Kichijōji Sta.",
      "tokyo-sta-kuramae": "Kuramae Sta.",
      "tokyo-sta-iidabashi": "Iidabashi Sta.",
      "tokyo-sta-shimokitazawa": "Shimokitazawa Sta.",
    },
    souvenirs: [
      "Tokyo Banana (sponge cakes with banana custard filling, sold at Tokyo Station and the airports)",
      "Press Butter Sand (freshly baked caramel-butter sandwich cookies; a queue-worthy Tokyo Station favorite)",
      "N.Y.C.SAND (New York–style caramel sandwich cookies; expect long lines at Daimaru Tokyo)",
      "Funawa imo yōkan (sweet-potato yōkan from a venerable Asakusa shop — simple, not too sweet, short shelf life)",
      "Kaminari-okoshi (crispy Edo-style puffed-rice sweets from beside Kaminarimon Gate, Asakusa's signature treat)",
    ],
    pois: {
      "tokyo-sensoji": {
        name: "Sensō-ji Temple",
        blurb:
          "Tokyo's oldest temple, where the giant Kaminarimon lantern is Japan's most iconic photo op. Snack your way down Nakamise street to the main hall.",
        tips: "Arrive before 8am to shoot the Kaminarimon gate without battling the crowds.",
      },
      "tokyo-skytree": {
        name: "Tokyo Skytree",
        blurb:
          "The world's tallest tower at 634 meters, with observation decks sweeping across the whole Kanto Plain. The Solamachi mall at its base is great fun too.",
        tips: "About a 20-minute walk from Sensō-ji; shoot the tower with Asahi's golden flame from Azumabashi Bridge on the way.",
      },
      "tokyo-meiji-jingu": {
        name: "Meiji Jingū Shrine",
        blurb:
          "A vast forest shrine in the heart of the city — everything goes quiet the moment you pass the torii. With luck you'll catch a traditional Shinto wedding.",
      },
      "tokyo-takeshita": {
        name: "Takeshita Street",
        blurb:
          "The birthplace of Japan's kawaii culture: crepes, vintage clothes and idol merch packed into 350 meters. Pairs perfectly with serene Meiji Jingū next door.",
      },
      "tokyo-shibuya-crossing": {
        name: "Shibuya Crossing & Hachikō Statue",
        blurb:
          "The world-famous scramble where up to 3,000 people cross on a single green light. Snap the Hachikō statue, then watch the flow from a café above.",
      },
      "tokyo-shibuya-sky": {
        name: "SHIBUYA SKY Observatory",
        blurb:
          "An open-air rooftop 229 meters up with 360-degree views — at sunset you can catch Mt. Fuji's silhouette and Tokyo Tower lighting up together.",
        tips: "Book sunset-slot tickets online one to two weeks ahead.",
      },
      "tokyo-shinjuku-gyoen": {
        name: "Shinjuku Gyoen National Garden",
        blurb:
          "The city's most rewarding garden, blending Japanese, English and French landscapes. A top cherry-blossom spot in spring, with golden ginkgo in autumn.",
        tips: "Closed Mondays; no alcohol allowed, and bring your own picnic mat.",
      },
      "tokyo-kabukicho": {
        name: "Kabukichō & Omoide Yokochō",
        blurb:
          "A neon nightlife quarter watched over by the Godzilla head, with smoky yakitori alleys in Omoide Yokochō. It only really becomes itself after dark.",
      },
      "tokyo-metro-govt-bldg": {
        name: "Tokyo Metropolitan Government Building Observatory",
        blurb:
          "A free observation deck 202 meters up, with Mt. Fuji visible on clear days. The best alternative to the paid observatories when you're on a budget.",
      },
      "tokyo-ueno-park": {
        name: "Ueno Park & Zoo",
        blurb:
          "Synonymous with cherry-blossom season, plus pandas, a cluster of museums and street performers year-round. Museum fans can happily lose a whole day here.",
      },
      "tokyo-ameyoko": {
        name: "Ameyoko Market",
        blurb:
          "A market street under the rail tracks, loud with vendors hawking seafood bowls, fruit skewers and cosmetics. A rare slice of old-school bustle in Tokyo.",
      },
      "tokyo-akihabara": {
        name: "Akihabara Electric Town",
        blurb:
          "Holy ground for anime, video games, gacha capsules and maid cafés. Even if you're not an otaku, a stroll through is a spectacle in itself.",
      },
      "tokyo-tsukiji": {
        name: "Tsukiji Outer Market",
        blurb:
          "The wholesale market moved to Toyosu, but the food stayed: graze on tamagoyaki, sea-urchin bowls and grilled scallops for a walking brunch.",
        tips: "Most shops close Sundays; go before 10am, as many stalls pack up after noon.",
      },
      "tokyo-ginza": {
        name: "Ginza",
        blurb:
          "Century-old department stores and flagship boutiques line Tokyo's ritziest shopping street, car-free on weekend afternoons. Stationery fans: don't miss Itoya.",
      },
      "tokyo-imperial-palace": {
        name: "Imperial Palace East Gardens",
        blurb:
          "Free gardens laid over the ruins of Edo Castle, with the keep's original stone base still standing. A quiet escape within walking distance of Tokyo Station.",
        tips: "Closed Mondays and Fridays.",
      },
      "tokyo-tower": {
        name: "Tokyo Tower",
        blurb:
          "The red-and-white icon from 1958 — shorter than Skytree but far richer in retro romance. For the best night shot, frame the lit tower from Zōjō-ji Temple.",
      },
      "tokyo-teamlab": {
        name: "teamLab Planets",
        blurb:
          "Wade barefoot through water and light installations; the mirrored flower garden looks dreamy from any angle. Tokyo's most worthwhile immersive experience.",
        tips: "Book timed tickets online in advance, and wear pants you can roll up.",
      },
      "tokyo-odaiba-seaside": {
        name: "Odaiba Seaside Park & Unicorn Gundam",
        blurb:
          "Rainbow Bridge, a Statue of Liberty replica and the life-size Unicorn Gundam that transforms at dusk, all in one stop. Tokyo Bay's best sunset spot.",
      },
      "tokyo-daikokuya-tempura": {
        name: "Daikokuya Tempura",
        blurb:
          "An Asakusa tendon institution since 1887, famous for shrimp tempura fried in dark sesame oil under a rich soy glaze. Two minutes on foot from Sensō-ji.",
        tips: "Weekend lunch queues start at 30 minutes; arrive before the 11am opening or come on a weekday.",
      },
      "tokyo-miyashita-park": {
        name: "Miyashita Park",
        blurb:
          "Shibuya's newest landmark puts a park on a mall rooftop — streetwear below, lawn above. It links neatly into a stroll down Cat Street toward Harajuku.",
      },
      "tokyo-shibuya-yokocho": {
        name: "Shibuya Yokocho",
        blurb:
          "A food alley on Miyashita Park's ground floor serving regional dishes from Hokkaido to Okinawa across 19 stalls. Lively, loud and easy for solo diners.",
        tips: "Most stalls run late into the night; after 9pm you'll rarely wait for a seat.",
      },
      "tokyo-golden-gai": {
        name: "Shinjuku Golden Gai",
        blurb:
          "Over 200 miniature bars crammed into six narrow alleys, most seating just five to ten. Thick with Shōwa-era atmosphere — the place to drink with strangers.",
        tips: "Some bars charge a cover or are regulars-only; pick ones with an English menu or a welcome sign at the door.",
      },
      "tokyo-fuunji": {
        name: "Fuunji Tsukemen",
        blurb:
          "Legendary Shinjuku tsukemen: thick, springy noodles dipped in an intensely rich chicken-and-seafood broth. Generous portions — the ideal post-sightseeing lunch.",
        tips: "Buy a ticket from the machine at the door before lining up; peak waits run 30-60 minutes. Closed Sundays.",
      },
      "tokyo-national-museum": {
        name: "Tokyo National Museum",
        blurb:
          "Japan's oldest and richest museum, home to national-treasure swords, Buddhist statues and ukiyo-e prints. The main building is a sight in its own right.",
        tips: "Closed Mondays; the main-hall highlights take about 90 minutes, and special exhibitions cost extra.",
      },
      "tokyo-hamarikyu": {
        name: "Hamarikyū Gardens",
        blurb:
          "A feudal lord's garden fed by seawater ponds, where black pines frame the Shiodome skyscrapers. Pause for a bowl of matcha at the island teahouse.",
        tips: "About a 10-minute walk from Tsukiji Outer Market — an ideal post-brunch stroll.",
      },
      "tokyo-toyosu-market": {
        name: "Toyosu Market",
        blurb:
          "Tsukiji's successor and the world's largest fish market — watch the dawn tuna auction from behind glass, then queue for peak-fresh sushi at Sushi Dai or Daiwa.",
        tips: "Closed Sundays and some Wednesdays — check the official calendar before going. Line up before 7am for the famous sushi counters.",
      },
      "tokyo-mori-art-museum": {
        name: "Mori Art Museum & Tokyo City View",
        blurb:
          "Contemporary art on the 52nd floor, open until 10pm — see the show, then step out to the observatory for Tokyo Tower at night. One ticket does both.",
        tips: "Buy the museum-plus-observatory combo; head up an hour before sunset to catch both day and night views.",
      },
      "tokyo-azabudai-hills": {
        name: "Azabudai Hills",
        blurb:
          "A glossy new district opened in 2023, anchored by the 330-meter Mori JP Tower, Japan's tallest building. teamLab Borderless now lives here too.",
        tips: "teamLab Borderless requires timed tickets booked online in advance.",
      },
      "tokyo-nact": {
        name: "The National Art Center, Tokyo",
        blurb:
          "Kisho Kurokawa's rippling glass museum runs entirely on rotating exhibitions — no permanent collection. The café atop the inverted cone is a photo favorite.",
        tips: "Closed Tuesdays; there's no permanent collection, so check what's showing before you go.",
      },
      "tokyo-azabujuban": {
        name: "Azabujūban Shopping Street",
        blurb:
          "An old-school shopping street tucked into a posh neighborhood. Taiyaki from Naniwaya Sōhonten and fried bean snacks from Mamegen are century-old classics.",
      },
      "tokyo-meguro-river": {
        name: "Meguro River Walk",
        blurb:
          "Some 800 cherry trees line four kilometers of riverbank, making this Tokyo's prettiest hanami walk. Off-season, browse the boutiques and cafés instead.",
        tips: "During cherry-blossom season lanterns light up at dusk — crowded, but worth it.",
      },
      "tokyo-daikanyama-tsite": {
        name: "Daikanyama T-Site",
        blurb:
          "Ranked among the world's most beautiful bookstores: three white pavilions woven together by books, film and music. Book lovers lose entire afternoons here.",
      },
      "tokyo-starbucks-roastery": {
        name: "Starbucks Reserve Roastery Tokyo",
        blurb:
          "One of only six flagship roasteries worldwide, a four-story Kengo Kuma building right on the Meguro River. The rooftop terrace is gold dust in sakura season.",
        tips: "On weekends take a numbered ticket at the door and wait to be called; weekday mornings are easiest.",
      },
      "tokyo-jiyugaoka": {
        name: "Jiyūgaoka Sweets Stroll",
        blurb:
          "Tokyo's dessert battleground, with the birthplace of the Mont Blanc plus top castella and cheese-tart shops. Small, calm streets built for an afternoon tea crawl.",
      },
      "tokyo-ghibli-museum": {
        name: "Ghibli Museum, Mitaka",
        blurb:
          "Designed by Miyazaki himself: a Totoro ticket booth, the rooftop Robot Soldier and exclusive short films. A once-in-a-lifetime stop for Ghibli fans.",
        tips: "Closed Tuesdays; tickets are advance-only (next month's go on sale on the 10th) — none are sold at the door.",
      },
      "tokyo-inokashira-park": {
        name: "Inokashira Park",
        blurb:
          "Kichijōji's beloved backyard: swan boats on the pond, cherry blossoms mirrored in the water, weekend craft markets. A woodland path leads to the Ghibli Museum.",
      },
      "tokyo-harmonica-yokocho": {
        name: "Harmonica Yokocho",
        blurb:
          "A warren of a hundred tiny shops packed like harmonica reeds beside the station — yōkan and deli stalls by day, a maze of standing bars by night.",
        tips: "Queue early for the famous Ozasa yōkan; most of the drinking spots don't open until evening.",
      },
      "tokyo-kiyosumi-garden": {
        name: "Kiyosumi Gardens",
        blurb:
          "A strolling garden built by Mitsubishi's founder, where famous stones from across Japan form stepping paths right over the water. Turtles and herons costar.",
      },
      "tokyo-mot": {
        name: "Museum of Contemporary Art Tokyo",
        blurb:
          "One of Japan's largest contemporary art museums, tracing postwar avant-garde through to today's installations. Cool down after in the nearby coffee district.",
        tips: "Closed Mondays.",
      },
      "tokyo-kiyosumi-coffee": {
        name: "Kiyosumi-Shirakawa Coffee District",
        blurb:
          "A roastery quarter that grew up around Blue Bottle's first overseas café — converted warehouses dot the quiet streets. A pilgrimage route for coffee nerds.",
      },
      "tokyo-kuramae-craft": {
        name: "Kuramae Craft Quarter",
        blurb:
          "Dubbed Tokyo's Brooklyn: old warehouses now house Kakimori's custom notebooks, leather ateliers and chocolate workshops. Stationery lovers may never leave.",
        tips: "Kakimori's custom notebooks often require a numbered ticket on weekends — register before opening time.",
      },
      "tokyo-kagurazaka": {
        name: "Kagurazaka",
        blurb:
          "Cobbled lanes and black wooden walls left from geisha days, with a French accent from the expat community. Hyōgo Yokochō is loveliest when lanterns glow at dusk.",
      },
      "tokyo-canal-cafe": {
        name: "Canal Cafe",
        blurb:
          "A century-old boathouse café on the old castle moat: wood-fired pizza while ducks paddle by. In spring the whole canal turns into a cherry-blossom tunnel.",
        tips: "Terrace seats are first-come, first-served; expect queues in cherry-blossom season.",
      },
      "tokyo-shimokitazawa": {
        name: "Shimokitazawa",
        blurb:
          "The capital of Tokyo vintage and indie culture: fringe theaters, record stores and the reload mall built on old rail tracks. Best explored with no plan at all.",
      },
      "tokyo-shimokita-curry": {
        name: "Shimokitazawa Curry Crawl",
        blurb:
          "So dense with curry joints the neighborhood throws an annual curry festival — soup curry, spice curry, retro kissaten-style. The refuel between vintage shops.",
      },
      "tokyo-sugamo": {
        name: "Sugamo Jizō-dōri Shopping Street",
        blurb:
          "Nicknamed 'Harajuku for grannies,' this Shōwa-era street has the thorn-pulling Jizō, shio-daifuku sweets and lucky red underwear. Old Tokyo daily life at its best.",
        tips: "Liveliest on temple fair days — the 4th, 14th and 24th of each month.",
      },
      "tokyo-mutekiya": {
        name: "Mutekiya Ramen",
        blurb:
          "Ikebukuro's queue king: tonkotsu broth thick enough to coat the spoon and generously thick-cut chashu. Open late — the perfect finish after Sunshine City.",
        tips: "There's a line all day; off-peak hours (3-5pm) get you in fastest.",
      },
      "tokyo-yanaka-ginza": {
        name: "Yanaka Ginza Shopping Street",
        blurb:
          "A shitamachi street that survived war and redevelopment: menchi-katsu, taiyaki and cat trinkets all the way down. The 'sunset stairs' are its signature view.",
        tips: "Wait for sunset on the Yūyake Dandan steps, then start eating; most shops close by 6pm.",
      },
      "tokyo-nezu-shrine": {
        name: "Nezu Shrine",
        blurb:
          "One of Edo's oldest shrines, with 1,900 years of history and a main hall listed as Important Cultural Property. A petite torii tunnel; azaleas peak in April.",
      },
      "tokyo-ichiran-shinjuku": {
        name: "Ichiran Ramen (Shinjuku Chuo East Exit)",
        blurb:
          "The famed Fukuoka tonkotsu chain, with solo 'flavor concentration' booths so nothing distracts from the bowl. Customize richness and spice on a form; open 24/7.",
        tips: "Buy a ticket from the machine before joining the line; peak waits start at 30 minutes — late night or mid-afternoon is fastest.",
      },
      "tokyo-jojoen-roppongi": {
        name: "Jojoen Yakiniku (Roppongi Main Branch)",
        blurb:
          "The original branch of Japan's byword for high-end yakiniku: thick-cut beef tongue and marinated loin sizzling on smokeless grills. A treat-yourself dinner.",
        tips: "Book dinner online in advance; lunch sets cost about half the dinner price and are the best value.",
      },
      "tokyo-tsukishima-monja": {
        name: "Tsukishima Monja Street",
        blurb:
          "Dozens of monjayaki shops line Nishinaka street — mentaiko, mochi and cheese is the crowd favorite. Griddling your own is downtown Tokyo dining at its best.",
        tips: "First-timers: ask the staff to cook and demonstrate. It's right outside Tsukishima Station on the Yūrakuchō and Ōedo lines.",
      },
      "tokyo-nemuro-hanamaru": {
        name: "Nemuro Hanamaru Kaiten Sushi (KITTE Marunouchi)",
        blurb:
          "Conveyor-belt sushi with fish shipped straight from Nemuro, Hokkaido — sanma, hanasaki crab and more, fresh yet affordable. Handily inside KITTE by Tokyo Station.",
        tips: "Take a numbered ticket, then browse KITTE — the rooftop garden's shinkansen views make the wait fly by.",
      },
      "tokyo-hikiniku-to-come": {
        name: "Hikiniku to Come (Kichijōji)",
        blurb:
          "Freshly ground beef patties grilled over charcoal, served three at a time with just-cooked rice. Seats have been scarce since day one — a queue that's worth it.",
        tips: "Seats go via morning numbered tickets or online booking — arrive before opening if you want in.",
      },
      "tokyo-rokurinsha": {
        name: "Rokurinsha (Tokyo Station)",
        blurb:
          "The shop that sparked Japan's tsukemen boom — seafood-pork broth thick enough to cling to every noodle. Perfectly placed in Tokyo Station for a pre-train bowl.",
        tips: "There's a queue all day; the 7:30am 'morning tsukemen' slot is quietest.",
      },
      "tokyo-hoppy-street": {
        name: "Hoppy Street",
        blurb:
          "An open-air izakaya strip west of Sensō-ji: simmered beef tendon, Hoppy highballs, and drinking that starts in broad daylight. Share a lantern-lit table with locals.",
        tips: "Easier to get seats from afternoon to early evening; most places are fine with just one drink and one small dish.",
      },
      "tokyo-marugo-tonkatsu": {
        name: "Tonkatsu Marugo",
        blurb:
          "Slow-fried premium pork loin with a rosy-pink center and full-on juices, in a hushed old-school dining room just a wall away from Akihabara's neon buzz.",
        tips: "Line up 15 minutes before opening; the special loin katsu set is the signature order.",
      },
      "tokyo-dandelion-kuramae": {
        name: "Dandelion Chocolate Factory & Cafe Kuramae",
        blurb:
          "A bean-to-bar factory in a converted warehouse — watch cacao become chocolate while you sip a dessert-thick hot cocoa. The brownie makes a perfect Kuramae finale.",
      },
      "tokyo-bluebottle-kiyosumi": {
        name: "Blue Bottle Coffee Kiyosumi Flagship",
        blurb:
          "Blue Bottle's first café outside the US, in a lofty former warehouse with the roastery in full view. Slow single-origin pour-overs, brewed one cup at a time.",
        tips: "Weekend waits start at 20 minutes; weekday mornings are calmest. Pair with Kiyosumi Gardens and the contemporary art museum for a walking loop.",
      },
      "tokyo-marion-crepes": {
        name: "Marion Crêpes (Takeshita Street)",
        blurb:
          "The 1976 originator of the Japanese crêpe — rolling French crêpes into walkable cones started right here. Strawberry, whipped cream and custard is the classic.",
      },
      "tokyo-coffee-tengoku": {
        name: "Coffee Tengoku",
        blurb:
          "A retro Shōwa kissaten in old Asakusa: fluffy pancakes branded with the kanji for 'heaven,' drip coffee, and nostalgic details down to the matchboxes.",
        tips: "Closed Tuesdays; seats are few and pancakes are griddled to order — don't squeeze it into a tight schedule.",
      },
      "tokyo-cafe-de-lambre": {
        name: "Café de l'Ambre",
        blurb:
          "A Ginza legend since 1948 serving 'coffee only': in-house-roasted aged beans, hand-poured through flannel. Order the gently sweet Amber Queen coffee jelly.",
        tips: "A small counter-seat room, easiest for parties of two or fewer; bring cash to be safe.",
      },
      "tokyo-kayaba-coffee": {
        name: "Kayaba Coffee",
        blurb:
          "A 1938 kissaten in a Taishō-era townhouse, known for its egg sandwich and the 'Russian,' half coffee and half cocoa. The perfect trailhead for a Yanesen wander.",
        tips: "Closed Mondays; the breakfast egg-sandwich set sells out fast — arrive at opening.",
      },
    },
  },
};
