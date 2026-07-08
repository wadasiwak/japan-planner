import type { CityTranslation } from "../types";

export const cities: Record<string, CityTranslation> = {
  osaka: {
    name: "Osaka",
    areas: {
      "難波・道頓堀": "Namba & Dotonbori",
      "心齋橋・美國村": "Shinsaibashi & Amerikamura",
      "梅田": "Umeda",
      "大阪城": "Osaka Castle",
      "新世界・天王寺": "Shinsekai & Tennoji",
      "大阪港": "Osaka Bay",
      "環球影城": "Universal Studios",
      "鶴橋": "Tsuruhashi",
    },
    hubs: {
      "osaka-sta-namba": "Namba Station",
      "osaka-sta-umeda": "Osaka / Umeda Station",
      "osaka-sta-shinsaibashi": "Shinsaibashi Station",
      "osaka-sta-tennoji": "Tennoji Station",
      "osaka-sta-osakajokoen": "Osakajokoen Station",
      "osaka-sta-bentencho": "Bentencho Station",
      "osaka-sta-nishikujo": "Nishikujo Station",
    },
    souvenirs: [
      "551 Horai pork buns (steamed fresh on the spot — Osaka's favorite gift, sold right in the stations)",
      "Rikuro Ojisan cheesecake (freshly baked, jiggly-soft Japanese cheesecake at a bargain price)",
      "Kokyu chocolate (cocoa-dusted almond chocolates; flavors like Kitashinchi are Osaka exclusives)",
      "Awa-okoshi (Amidaike Daikoku's crispy puffed-rice candy, an Osaka specialty since the Edo era)",
    ],
    pois: {
      "osaka-dotonbori": {
        name: "Dotonbori & the Glico Running Man",
        blurb:
          "Osaka's most iconic canal strip, lined with the Glico Running Man, a giant mechanical crab and pufferfish lanterns. After dark the neon reflects off the water — takoyaki and ramen all the way down.",
        tips: "Ebisubashi Bridge is the classic Glico photo spot and gets packed; it looks best after the evening lights come on. Come at dawn to shoot it without crowds.",
      },
      "osaka-kuromon-market": {
        name: "Kuromon Ichiba Market",
        blurb:
          "A century-old market dubbed \"Osaka's Kitchen\": nearly 600 meters of stalls piled with seafood, wagyu and fruit. Graze on grilled scallops, sea urchin and fresh-cut tuna — perfect as brunch.",
        tips: "Arrive before 10am for the most relaxed visit; some stalls close by afternoon, and a few shops rest on Sundays.",
      },
      "osaka-hozenji-yokocho": {
        name: "Hozenji Yokocho",
        blurb:
          "A stone-paved alley beside Dotonbori where izakaya lanterns glow over the moss-covered Mizukake Fudo statue. Ladle water over the Buddha to make a wish, then have red-bean zenzai at the century-old Meoto Zenzai.",
        tips: "It's just one street off Dotonbori — duck in here for a quiet finish after the neon chaos.",
      },
      "osaka-namba-yasaka": {
        name: "Namba Yasaka Shrine",
        blurb:
          "A shrine famous for its 12-meter lion-head stage, whose gaping mouth is said to swallow bad luck and inhale good fortune. Small in size but visually stunning — Osaka's most photogenic shrine.",
        tips: "About a 10-minute walk from Namba Station; slot it in as a morning stop before Dotonbori.",
      },
      "osaka-doguyasuji": {
        name: "Sennichimae Doguyasuji Shopping Street",
        blurb:
          "A street dedicated to kitchenware: takoyaki pans, artisan knives and plastic food samples galore. Even if you never cook, browsing the fake food and shop-sign props is great fun.",
      },
      "osaka-namba-parks": {
        name: "Namba Parks",
        blurb:
          "A canyon-like shopping complex whose terraced roof climbs upward as a sky garden. Shopping, dining and greenery in one stop — and a solid rainy-day backup too.",
      },
      "osaka-shinsaibashi-suji": {
        name: "Shinsaibashi-suji Shopping Street",
        blurb:
          "A covered 600-meter shopping arcade running from Dotonbori up to Shinsaibashi, packed with drugstores, fashion and department stores. The classic first stop for shoppers, rain or shine.",
        tips: "Drugstore prices get more touristy the closer you are to Dotonbori; walk toward the north end to compare prices.",
      },
      "osaka-amerikamura": {
        name: "Amerikamura (America Village)",
        blurb:
          "Osaka's youth street-culture hub, with vintage shops, record stores and graffiti walls clustered around Triangle Park. Think a smaller Harajuku, but rawer and more streetwise.",
      },
      "osaka-kogaryu": {
        name: "Kogaryu Takoyaki Main Shop",
        blurb:
          "A famous takoyaki stand next to Amerikamura's Triangle Park, known for its soft, gooey style topped with mayo and green onion. Grab a box and eat on the park steps — a truly local Osaka afternoon.",
      },
      "osaka-horie-orange-street": {
        name: "Horie Orange Street",
        blurb:
          "A stylish district next door to Amerikamura, where furniture shops, select stores and cafes line Tachibana-dori. Cross one street and you swap tourist crowds for laid-back browsing.",
      },
      "osaka-umeda-sky": {
        name: "Umeda Sky Building Floating Garden Observatory",
        blurb:
          "Two towers joined by a ring-shaped open-air deck 173 meters up, with 360-degree views over the Osaka plain and Yodo River. The sunset-to-night transition is magic — Osaka's most architectural landmark.",
        tips: "Go up 30 minutes before sunset to catch both dusk and the night view; the retro Takimi-koji food alley in the basement works for dinner.",
      },
      "osaka-nakazakicho": {
        name: "Nakazakicho",
        blurb:
          "A miraculously preserved Showa-era quarter beside Umeda's skyscrapers, with cafes, vintage shops and zakka stores tucked into converted row houses. Made for slow wandering and impulsive cafe stops.",
        tips: "Most shops open after noon, so don't schedule it in the morning; weekdays feel far more relaxed.",
      },
      "osaka-shinumeda-shokudogai": {
        name: "Shin-Umeda Shokudogai",
        blurb:
          "A Showa-era food alley under the rail viaduct by Osaka Station: nearly a hundred tiny joints crammed into two floors, smoky with yakitori, kushikatsu and standing bars full of salarymen. More real than any tourist sight.",
        tips: "The popular counters start queueing after 6pm; come early if you want the famous Matsuba kushikatsu.",
      },
      "osaka-hep-five": {
        name: "HEP FIVE Ferris Wheel",
        blurb:
          "A bright-red Ferris wheel sprouting from a department-store rooftop, a landmark of Umeda. One 15-minute loop takes in the whole skyscraper skyline, with trendy youth-fashion floors below.",
      },
      "osaka-ohatsu-tenjin": {
        name: "Tsuyunoten Shrine (Ohatsu Tenjin)",
        blurb:
          "A shrine of love made famous by Ohatsu, heroine of the tragedy The Love Suicides at Sonezaki, hidden deep in Umeda's izakaya alleys. Walls of matchmaking ema plaques make a striking contrast with the nightlife outside.",
      },
      "osaka-nakanoshima": {
        name: "Nakanoshima & Osaka City Central Public Hall",
        blurb:
          "A riverside culture island squeezed between two rivers, crowned by the red-brick, domed Central Public Hall, a Taisho-era masterpiece. Riverside promenades link libraries, museums and a rose garden — Osaka at its most elegant.",
      },
      "osaka-castle": {
        name: "Osaka Castle Main Tower",
        blurb:
          "Toyotomi Hideyoshi's legendary castle: a keep with golden shachihoko and green eaves rising from massive stone walls. Inside is a history museum, and the top-floor deck overlooks the whole city.",
        tips: "Arrive before the 9am opening to beat tour groups; buy the keep ticket online to skip the line.",
      },
      "osaka-castle-park": {
        name: "Osaka Castle Park & Nishinomaru Garden",
        blurb:
          "The vast green belt surrounding the keep — moats and stone ramparts look mighty from every angle. Nishinomaru Garden's big lawn gives the best full view of the tower and is a top cherry-blossom spot in spring.",
        tips: "Nishinomaru Garden charges admission and closes Mondays; the outer park is free and open year-round.",
      },
      "osaka-jo-terrace": {
        name: "JO-TERRACE OSAKA",
        blurb:
          "A low-rise dining complex next to Osakajokoen Station, with cafes, teishoku spots and dessert shops facing the greenery. Refuel with lunch or afternoon tea after the castle without trekking back downtown.",
      },
      "osaka-tsutenkaku": {
        name: "Tsutenkaku Tower",
        blurb:
          "The spiritual symbol of Shinsekai: a 103-meter steel tower crowned with neon ads and dripping with Showa retro charm. Rub the soles of the lucky god Billiken on the observation deck for good fortune.",
        tips: "Go up at dusk to see both the daytime streetscape and Shinsekai's neon after the lights come on.",
      },
      "osaka-shinsekai": {
        name: "Shinsekai & Janjan Yokocho",
        blurb:
          "A retro entertainment district frozen in postwar working-class style, its garish pufferfish lanterns and 3-D signboards trying to outshout each other. Janjan Yokocho packs in kushikatsu joints, shogi parlors and retro arcades — best at night.",
      },
      "osaka-daruma-shinsekai": {
        name: "Kushikatsu Daruma Shinsekai Main Shop",
        blurb:
          "The 1929 originator of kushikatsu: crisp, thin batter with a secret sauce that keeps you ordering skewer after skewer. The scowling Daruma mascot doubles as a living warning — no double dipping.",
        tips: "The sauce is shared by the whole table, so dip each skewer only once; use the free cabbage to scoop extra sauce.",
      },
      "osaka-abeno-harukas": {
        name: "Abeno Harukas Observatory",
        blurb:
          "One of Japan's first 300-meter supertall landmarks, with the triple-decker glass-wrapped Harukas 300 observatory. On clear days you can see from the Osaka plain to Awaji Island, and the night view is the showstopper.",
        tips: "It's in the same area as Tsutenkaku and Shinsekai — go up at dusk for the night view, then head down for kushikatsu.",
      },
      "osaka-shitennoji": {
        name: "Shitennoji Temple",
        blurb:
          "Japan's oldest state temple, founded by Prince Shotoku in 593, with a grand straight-line layout of middle gate, five-story pagoda and main hall. Far quieter than Kyoto's famous temples — real room to breathe.",
        tips: "On the 21st and 22nd of each month an antiques fair fills the entire temple grounds.",
      },
      "osaka-tennoji-park": {
        name: "Tennoji Park (Tenshiba Lawn)",
        blurb:
          "A big lawn park right outside Tennoji Station where you can lie back and gaze up at Harukas. Cafes and a kids' play area ring the grass, with the historic Tennoji Zoo next door.",
      },
      "osaka-kaiyukan": {
        name: "Osaka Aquarium Kaiyukan",
        blurb:
          "One of the world's largest aquariums: a spiral route descends around a colossal central tank while whale sharks glide overhead. Touring the Pacific Rim habitats, kids and adults alike won't want to leave.",
        tips: "Book timed tickets online to skip the queue; weekday openings are quietest, and check whale-shark feeding times in advance.",
      },
      "osaka-tempozan-wheel": {
        name: "Tempozan Giant Ferris Wheel",
        blurb:
          "A 112.5-meter harborside Ferris wheel — one 15-minute spin covers Osaka Bay, the Akashi Strait and the city skyline. Thrill-seekers can queue for the all-transparent see-through gondolas.",
      },
      "osaka-naniwa-kuishinbo": {
        name: "Naniwa Kuishinbo Yokocho",
        blurb:
          "An indoor food alley in the Tempozan mall recreating 1960s downtown Osaka, gathering classics like takoyaki, omurice and Jiyuken curry. Sort out a meal right after the aquarium.",
      },
      "osaka-usj": {
        name: "Universal Studios Japan",
        blurb:
          "The king of theme parks, anchored by Super Nintendo World and the Wizarding World of Harry Potter, with production values worth flying in for. The Flying Dinosaur and Mario Kart are the must-rides.",
        tips: "Buy Express Passes in peak season; Nintendo World needs a timed-entry ticket via the app — grab one the moment the park opens.",
      },
      "osaka-takoyaki-museum": {
        name: "Osaka Takoyaki Museum",
        blurb:
          "A takoyaki-themed food hall in Universal CityWalk gathering five famous makers, including Aizuya and Kogaryu. Sample every style in one sitting — the perfect late-night bite after the park.",
      },
      "osaka-kani-doraku": {
        name: "Kani Doraku Dotonbori Main Shop",
        blurb:
          "Home of Dotonbori's giant moving crab sign, serving full crab kaiseki from sashimi to grilled legs and crab sukiyaki. No reservation? The takeout stall's grilled crab-leg skewers take the edge off.",
        tips: "Book ahead for the kaiseki course; if you just want a taste, the grilled crab-leg skewers at the door usually take under ten minutes.",
      },
      "osaka-ichiran-dotonbori": {
        name: "Ichiran Ramen Dotonbori Main Building",
        blurb:
          "The famous queue-worthy tonkotsu ramen chain, where solo \"flavor concentration booths\" let you focus entirely on that bowl with its signature red sauce. Open 24 hours — great for late nights or dodging peak times.",
        tips: "Meal-time queues start at 30 minutes, but late night and mid-afternoon are nearly wait-free; order by marking your preferences on the sheet.",
      },
      "osaka-mizuno": {
        name: "Mizuno Okonomiyaki",
        blurb:
          "A Bib Gourmand okonomiyaki institution founded in 1945; the signature yamaimo-yaki uses yam instead of flour for a light, fluffy texture. Chefs grill and cut each one before your eyes — the Dotonbori okonomiyaki.",
        tips: "Peak queues run an hour or more; arrive before the 11am opening or aim for the mid-afternoon lull.",
      },
      "osaka-wanaka-sennichimae": {
        name: "Takoyaki Doraku Wanaka Sennichimae Main Shop",
        blurb:
          "A takoyaki favorite locals swear by: crisp outside, molten inside, with an extra-rich bonito dashi aroma. Sauce, salt and green-onion versions are all on offer — order the sampler to compare.",
      },
      "osaka-yakiniku-sora": {
        name: "Yakiniku Sora Tsuruhashi Main Shop",
        blurb:
          "The crowd favorite in Tsuruhashi, Osaka's yakiniku battleground — charcoal-grilled wagyu skirt steak and fresh offal, cheap and generous. Smoky air and a counter packed with locals: yakiniku in its original form.",
        tips: "Queues form before evening opening; on weekdays go straight at open. It's right outside JR Loop Line Tsuruhashi Station.",
      },
      "osaka-marufuku-coffee": {
        name: "Marufuku Coffee Sennichimae Main Shop",
        blurb:
          "A classic kissaten from 1934: intensely dark-roasted house coffee paired with thick fresh-baked hotcakes, a combo unchanged for decades. Wooden booths and copper-kettle pours — Showa cafe culture, alive.",
        tips: "The coffee runs strong and bitter — sugar and milk balance it nicely; hotcakes are baked to order, about a 15-minute wait.",
      },
      "osaka-taiyou-no-tou": {
        name: "Taiyo no To Cafe Main Shop",
        blurb:
          "The definitive Nakazakicho old-house cafe, a Showa row house stuffed with retro sofas and a ceiling full of hanging lamps. The homemade cake case is generously stocked — ideal after vintage-shop browsing.",
      },
      "osaka-rikuro-namba": {
        name: "Rikuro Ojisan Cheesecake Namba Main Shop",
        blurb:
          "The bell rung for each fresh-baked cheesecake is a Namba institution — a whole jiggly, souffle-soft cake costs just a few hundred yen. Eat it warm for souffle texture; chilled, it becomes something else entirely.",
        tips: "The queue balloons the moment the oven bell rings; the main shop has a second-floor cafe, so you can head straight upstairs to eat.",
      },
    },
  },

  kyoto: {
    name: "Kyoto",
    areas: {
      "東山・祇園": "Higashiyama & Gion",
      "嵐山": "Arashiyama",
      "金閣寺・北野": "Kinkakuji & Kitano",
      "伏見稻荷・東福寺": "Fushimi Inari & Tofukuji",
      "京都車站周邊": "Around Kyoto Station",
      "二條城・御所": "Nijo Castle & Imperial Palace",
      "河原町・鴨川": "Kawaramachi & Kamo River",
      "銀閣寺・哲學之道": "Ginkakuji & Philosopher's Path",
      "鞍馬・貴船": "Kurama & Kibune",
    },
    hubs: {
      "kyoto-sta-kyoto": "Kyoto Station",
      "kyoto-sta-gion-shijo": "Gion-Shijo Station",
      "kyoto-sta-kawaramachi": "Kyoto-Kawaramachi Station",
      "kyoto-sta-arashiyama": "Arashiyama Station",
      "kyoto-sta-fushimi-inari": "Fushimi-Inari Station",
      "kyoto-sta-kitano-hakubaicho": "Kitano-Hakubaicho Station",
      "kyoto-sta-demachiyanagi": "Demachiyanagi Station",
      "kyoto-sta-nijojo-mae": "Nijojo-mae Station",
    },
    souvenirs: [
      "Nama yatsuhashi (cinnamon-scented soft mochi wrapped around red-bean paste; classic makers like Shogoin and Izutsu)",
      "Ajari mochi (Mangetsu's half-baked sweet — a chewy skin around Tanba red-bean filling)",
      "Uji matcha sweets (Itohkyuemon and Nakamura Tokichi both make classic matcha desserts)",
      "Kyo Baum (matcha and soy-milk baumkuchen with photogenic, sharply layered cross-sections)",
      "Yojiya oil-blotting paper (the geisha-face-logo Kyoto beauty staple — a light, easy gift)",
    ],
    pois: {
      "kyoto-kiyomizudera": {
        name: "Kiyomizu-dera Temple",
        blurb:
          "The cantilevered Kiyomizu Stage is Kyoto's signature view — from the wooden main hall, the entire Kyoto basin spreads out below. Unreal in cherry-blossom and autumn seasons; drink from the three streams of Otowa Waterfall, one wish each.",
        tips: "Gates open at 6am; arrive before 8 and it's nearly empty, with no waiting for a clear shot of the stage.",
      },
      "kyoto-sannenzaka": {
        name: "Ninenzaka & Sannenzaka",
        blurb:
          "The most Kyoto-flavored stone-paved slopes below Kiyomizu-dera, lined with teahouses and souvenir shops in century-old machiya. Stroll up in a kimono — every corner is a postcard.",
        tips: "Combine it with Kiyomizu-dera; crowds surge after 9am, so come early for empty-street photos.",
      },
      "kyoto-yasaka-shrine": {
        name: "Yasaka Shrine",
        blurb:
          "Home shrine of the Gion Festival, its vermilion gate facing straight down Shijo-dori — the natural start and end point of a Higashiyama walk. The beauty water at Utsukushi Gozen sub-shrine is popular with female visitors.",
        tips: "Open 24 hours; the lantern-lit grounds have a special mood at night, so slot it around dinner.",
      },
      "kyoto-hanamikoji": {
        name: "Hanamikoji Street",
        blurb:
          "Gion's most famous geisha street, its stone paving flanked by curtained teahouses and ryotei restaurants. With luck at dusk, you'll glimpse geiko and maiko hurrying between engagements.",
        tips: "Close-up photos of geisha are banned in the private side lanes, with fines for violators — shoot from a distance on the main street.",
      },
      "kyoto-tsujiri-gion": {
        name: "Saryo Tsujiri Gion Main Shop",
        blurb:
          "The dessert house of Uji tea maker Tsujiri, whose special matcha parfait is a byword for Kyoto sweets. Tea-bitter and intense, balanced by shiratama dumplings and chestnut — the perfect Higashiyama rest stop.",
        tips: "Weekend afternoon waits often top 30 minutes; avoid the 2–4pm peak.",
      },
      "kyoto-arashiyama-bamboo": {
        name: "Arashiyama Bamboo Grove",
        blurb:
          "A green tunnel of towering bamboo whose rustle in the wind is listed among Japan's 100 Soundscapes. The ten-minute walk from Nonomiya Shrine to Okochi Sanso villa is the very soul of Arashiyama.",
        tips: "Arrive before 8am for an empty grove; after 10 it's a sea of heads.",
      },
      "kyoto-togetsukyo": {
        name: "Togetsukyo Bridge",
        blurb:
          "A century-old wooden-railed bridge across the Katsura River, backed by Arashiyama's ever-changing mountainside — in autumn the whole slope burns red and gold. Grab a soft-serve and idle on the riverbank below.",
      },
      "kyoto-tenryuji": {
        name: "Tenryu-ji Temple",
        blurb:
          "A World Heritage Zen temple whose Sogenchi Garden borrows Arashiyama itself as backdrop — the textbook example of borrowed scenery. The north gate exits straight onto the Bamboo Grove.",
        tips: "Buy the garden ticket and leave via the north gate straight into the Bamboo Grove — no backtracking.",
      },
      "kyoto-arashiyama-yoshimura": {
        name: "Arashiyama Yoshimura Soba",
        blurb:
          "A famed handmade soba house by Togetsukyo Bridge — second-floor window seats overlook the bridge and the Katsura River. Freshly milled, hand-cut soba with tempura is the first choice for lunch in Arashiyama.",
        tips: "In peak season arrive before 11:30, or expect an hour-plus queue.",
      },
      "kyoto-kinkakuji": {
        name: "Kinkaku-ji (Golden Pavilion)",
        blurb:
          "A three-story pavilion sheathed in gold leaf floating over the Mirror Pond — on sunny days the golden reflection is dazzling. The one-way loop around the pond makes it Kyoto's most foolproof World Heritage site.",
        tips: "Morning light hits the pavilion best — enter right at the 9am opening for the finest reflection shots.",
      },
      "kyoto-ryoanji": {
        name: "Ryoan-ji Temple",
        blurb:
          "World-famous for its fifteen-stone karesansui rock garden — from no angle, they say, can you see all fifteen at once. Sit on the veranda for ten minutes and Zen starts to make sense.",
        tips: "It's about a 20-minute walk or a short bus ride from Kinkaku-ji — pair them in the same morning.",
      },
      "kyoto-kitano-tenmangu": {
        name: "Kitano Tenmangu Shrine",
        blurb:
          "Head shrine of all Tenmangu shrines in Japan, dedicated to Sugawara no Michizane, god of learning — students come to rub the bronze ox. The plum garden blooms in February, and the Tenjin flea market on the 25th is liveliest.",
      },
      "kyoto-toyoukechaya": {
        name: "Toyouke Chaya",
        blurb:
          "An old tofu-shop diner directly opposite Kitano Tenmangu, whose fresh yuba rice bowl and tofu set meals are cheap and substantial. The perfect introduction to Kyoto tofu cuisine — locals queue here too.",
        tips: "It closes around 3pm, so plan it as lunch; arriving half an hour before opening is safest.",
      },
      "kyoto-fushimi-inari": {
        name: "Fushimi Inari Taisha",
        blurb:
          "Tens of thousands of vermilion torii climb Mount Inari in endless tiers — foreign visitors' top-rated sight in Kyoto. Head shrine of all Inari shrines in Japan, with fox messengers everywhere you look.",
        tips: "Open 24 hours. The full mountain loop takes 2–3 hours; for the classic Senbon Torii shots, walk to the Yotsutsuji crossing and turn back. Quietest at dawn or after dusk.",
      },
      "kyoto-tofukuji": {
        name: "Tofuku-ji Temple",
        blurb:
          "A great Zen temple of the Kyoto Gozan, where two thousand maples below Tsutenkyo Bridge form the city's most spectacular sea of autumn color. The checkerboard moss garden of the Hojo is strikingly modern — worth it in any season.",
        tips: "Late-November foliage crowds are fearsome — go early on a weekday; off-season it's blissfully quiet.",
      },
      "kyoto-inari-sando": {
        name: "Fushimi Inari Sando Shopping Street",
        blurb:
          "The snack street between the station and the shrine gates — inari sushi, fox-face crackers and grilled mochi all the way along. Just the thing to refuel after coming down the mountain.",
      },
      "kyoto-sanjusangendo": {
        name: "Sanjusangendo Hall",
        blurb:
          "Inside this 120-meter wooden hall stand 1,001 golden statues of the thousand-armed Kannon, rows receding to the edge of sight. Photos can't capture it — photography is banned, so commit it to memory.",
        tips: "The best rainy-day option — the visit is entirely indoors, whatever the weather.",
      },
      "kyoto-tower": {
        name: "Kyoto Tower",
        blurb:
          "The white candle-shaped tower directly opposite Kyoto Station; from the 100-meter deck you can pick out everything from Kiyomizu-dera to Mount Daimonji. At night the lamplit temples of Higashiyama glow with special charm.",
      },
      "kyoto-higashi-honganji": {
        name: "Higashi Honganji Temple",
        blurb:
          "A colossal wooden Goei-do hall seven minutes on foot from Kyoto Station — among the largest wooden buildings in the world, and free to visit. Slots perfectly at the start of a trip or while waiting for a train.",
      },
      "kyoto-railway-museum": {
        name: "Kyoto Railway Museum",
        blurb:
          "Fifty-three real trains, from steam locomotives to Shinkansen, plus a roundhouse where an SL still steams and carries passengers. A rail fan's paradise — families with kids can easily lose half a day.",
        tips: "Closed Wednesdays; buy SL steam-train ride tickets first thing after entering, as departures are limited.",
      },
      "kyoto-ramen-koji": {
        name: "Kyoto Ramen Koji",
        blurb:
          "A ramen-theme floor on the 10th level of the Kyoto Station building, gathering famous shops from Hakata, Sapporo, Toyama and beyond. The easiest meal before or after a train — salvation for the indecisive.",
      },
      "kyoto-nijo-castle": {
        name: "Nijo Castle",
        blurb:
          "Tokugawa Ieyasu's shogunal residence, where the Ninomaru Palace's nightingale floors chirp with every step — and where the shogun returned power to the emperor. A World Heritage site: low walls, huge history.",
        tips: "Shoes come off inside the palace, so wear thick socks in winter; last entry is one hour before closing.",
      },
      "kyoto-gyoen": {
        name: "Kyoto Gyoen National Garden",
        blurb:
          "The vast free park wrapping the old Imperial Palace, its gravel avenues and centuries-old pines wonderfully open for walking. The palace itself is free to enter, and the weeping cherries are a hidden spring gem.",
      },
      "kyoto-toraya-ichijo": {
        name: "Toraya Karyo Kyoto Ichijo",
        blurb:
          "The Kyoto flagship tearoom of the 500-year-old yokan maker Toraya — garden seating with a seasonal fresh wagashi and matcha, sweets fit for the old court. An elegant coda to an Imperial Palace stroll.",
      },
      "kyoto-nishiki-market": {
        name: "Nishiki Market",
        blurb:
          "The 400-year-old \"Kitchen of Kyoto\": a narrow 400-meter lane crammed with a hundred-odd shops — soy-milk doughnuts, tamagoyaki, octopus-egg skewers, one after another. Even picky eaters find something to love.",
        tips: "Most shops close by 5–6pm, so don't come in the evening; eat your snacks standing in front of the stall before moving on.",
      },
      "kyoto-kamogawa-noryo-yuka": {
        name: "Kamogawa Noryo Yuka Riverside Dining",
        blurb:
          "From May to September, restaurants around Pontocho build wooden terraces out over the Kamo River for kyo-ryori in the river breeze. Kyoto's definitive summer-evening ritual — nothing else comes close.",
        tips: "Runs May–September only, and popular places need reservations; on a budget, lunchtime terrace seatings are much cheaper.",
      },
      "kyoto-pontocho": {
        name: "Pontocho Alley",
        blurb:
          "A stone-paved lane between the Kamo River and Kiyamachi barely wide enough for two, hiding izakaya and ryotei beneath red lanterns. When the lights come on at night, it's Kyoto's most atmospheric place to hunt for dinner.",
      },
      "kyoto-ginkakuji": {
        name: "Ginkaku-ji (Silver Pavilion)",
        blurb:
          "The emblem of Higashiyama culture — never silvered, yet all the more beautiful for it, with the unique white-sand Ginshadan and Kogetsudai cones. From the hillside path, quiet restraint outshines any gold.",
      },
      "kyoto-philosophers-path": {
        name: "Philosopher's Path",
        blurb:
          "A two-kilometer lane along the Lake Biwa Canal, named for philosopher Kitaro Nishida, who walked it deep in thought. In spring the whole waterway disappears under cherry blossoms; otherwise it's quiet and made for unwinding.",
        tips: "Walking from Ginkaku-ji down to Nanzen-ji takes about 40 minutes — the best link route through northern Higashiyama.",
      },
      "kyoto-nanzenji": {
        name: "Nanzen-ji Temple",
        blurb:
          "Climb the massive Sanmon gate for its famous \"superb view,\" then find the red-brick Suirokaku aqueduct, a Meiji-era waterway that pairs Western engineering with temple calm surprisingly well. The free grounds alone are worth the trip.",
      },
      "kyoto-junsei-yudofu": {
        name: "Nanzenji Junsei Yudofu",
        blurb:
          "A celebrated yudofu house at Nanzen-ji's gate, serving steaming tofu kaiseki in a study-hall garden. Tofu this simple reveals true craftsmanship — first-rate for warming up in winter.",
        tips: "On no-reservation days the lunch queue forms early; arriving before the 11:30 opening is safest.",
      },
      "kyoto-kifune-shrine": {
        name: "Kifune Shrine",
        blurb:
          "Head shrine of the water god, its red lanterns climbing the stone steps to the gate — one of Kyoto's most photogenic approaches. Don't miss the water fortune-telling: float your slip in the sacred spring and watch the words appear.",
        tips: "From Demachiyanagi, take the Eizan Railway to Kibuneguchi then a bus — about 40 minutes each way; budget half a day.",
      },
      "kyoto-kurama-dera": {
        name: "Kurama-dera Temple",
        blurb:
          "A mountain temple of legend, where young Minamoto no Yoshitsune trained and tengu are said to roam; the six-pointed star before the main hall is a famous power spot. The classic route hikes over the ridge and down to Kibune.",
        tips: "The Kurama-to-Kibune trail takes about 1.5 hours — wear proper shoes; if energy is short, take the cable car up.",
      },
      "kyoto-kibune-hirobun": {
        name: "Kibune Hirobun Nagashi Somen",
        blurb:
          "Summer-only flowing somen on a platform right above the Kibune River — noodles shoot down bamboo flumes and you snatch them with chopsticks. Less a meal than a deliciously cool game.",
        tips: "Open May–September only; weekend numbered tickets can mean a 1–2 hour wait, so go early on a weekday to grab one.",
      },
      "kyoto-okutan-kiyomizu": {
        name: "Okutan Kiyomizu Yudofu",
        blurb:
          "Founded in 1635 and said to be Kyoto's oldest yudofu specialist — a bubbling tofu set served at garden seats. The menu is minimal, but this is the origin point of Kyoto flavor, best on a cold day.",
        tips: "There's only one yudofu set, so no menu agonizing; it pairs naturally with Kiyomizu-dera and Sannenzaka, and weekday lunch is easiest for seats.",
      },
      "kyoto-roan-kikunoi": {
        name: "Roan Kikunoi",
        blurb:
          "The townhouse offshoot of three-Michelin-star Kikunoi, offering true kyo-kaiseki at relatively approachable prices. Counter seats put the artisans' plating within arm's reach — the finest first lesson in kaiseki.",
        tips: "Reservations are essential; the lunch course runs about half the dinner price — the smart way in for a first kaiseki.",
      },
      "kyoto-matsuba-honten": {
        name: "Sohonke Nishin Soba Matsuba Main Shop",
        blurb:
          "The 1861 birthplace of nishin soba — sweet-simmered herring laid over hot buckwheat noodles, a salty-sweet harmony Kyotoites call soul food. Right beside the Minamiza theater; a bowl before or after a show is the classic move.",
      },
      "kyoto-unagi-hirokawa": {
        name: "Unagi Hirokawa",
        blurb:
          "Arashiyama's famed eel house, once Michelin-starred, grilling Kansai-style unaju over binchotan charcoal — crisp outside, meltingly tender within. Follow the charcoal aroma in after the Bamboo Grove for a luxurious lunch.",
        tips: "Online bookings fill fast, and walk-in waits require arriving before opening; eel is killed and grilled to order, so don't pack your schedule too tight.",
      },
      "kyoto-owariya": {
        name: "Honke Owariya Main Shop",
        blurb:
          "A soba house founded in 1465 — over five centuries in business, once purveyor to the Imperial Palace. The signature Horai soba stacks five small tiers with eight toppings, eaten layer by layer like a game.",
      },
      "kyoto-arabica-arashiyama": {
        name: "% Arabica Arashiyama",
        blurb:
          "A white minimalist coffee stand on the banks by Togetsukyo Bridge, run by a world latte-art champion's team — silky lattes with clean, bright beans. Take a cup along the Katsura River: Arashiyama's most stylish break.",
        tips: "There's a queue nearly all day — it's shortest right at opening; seating is minimal and it's basically takeout, but the riverbank is the best seat anyway.",
      },
      "kyoto-rokuyosha": {
        name: "Rokuyosha Coffee",
        blurb:
          "A defining Kyoto kissaten open since 1950 — in the basement shop, house-roasted coffee with a fresh-fried doughnut is the set order. Retro tiles and amber lighting have made it a haunt of Kyoto's literary crowd for generations.",
      },
      "kyoto-itokyuemon-gion": {
        name: "Itohkyuemon Gion Shijo Shop",
        blurb:
          "The tearoom of an Uji tea house founded in 1832, piling matcha parfaits with shiratama, warabi mochi and matcha jelly — tea-deep to the last spoonful. No trip to Uji needed; refuel here when Higashiyama wears you out.",
        tips: "Weekend afternoon waits start at 30 minutes — put your name down, then wander around Yasaka Shrine while you wait.",
      },
      "kyoto-bluebottle-kyoto": {
        name: "Blue Bottle Coffee Kyoto Cafe",
        blurb:
          "Blue Bottle's first Kansai shop, set in a century-old machiya where the earthen-floored courtyard meets a polished-concrete bar. Warm up with a pour-over before hiking to Nanzen-ji and the Philosopher's Path.",
      },
    },
  },
};
