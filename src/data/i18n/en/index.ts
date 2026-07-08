import type { ContentDict } from "../types";
import { cities as kantoA } from "./kanto_a";
import { cities as kantoB } from "./kanto_b";
import { cities as kansaiA } from "./kansai_a";
import { cities as kansaiB } from "./kansai_b";
import { cities as hokkaido } from "./hokkaido";
import { cities as kyushu } from "./kyushu";
import { cities as okinawa } from "./okinawa";
import { cities as chubu } from "./chubu";
import { cities as chugoku } from "./chugoku";
import { cities as shikoku } from "./shikoku";
import { cities as tohoku } from "./tohoku";

export const DICT: ContentDict = {
  regions: {
    kanto: {
      name: "Tokyo & Kanto",
      blurb: "The classic first trip: endless Tokyo, plus Hakone hot springs and Mt. Fuji views.",
    },
    kansai: {
      name: "Kansai",
      blurb: "Osaka's food, Kyoto's temples, Nara's deer and Kobe's harbor — one route, many moods.",
    },
    hokkaido: {
      name: "Hokkaido",
      blurb: "Furano lavender, Noboribetsu's Hell Valley, Hakodate nights — and seafood everywhere.",
    },
    kyushu: {
      name: "Kyushu",
      blurb: "Fukuoka street stalls, Nagasaki history, Mt. Aso, Sakurajima and endless onsen.",
    },
    okinawa: {
      name: "Okinawa",
      blurb: "Japan's tropics: Naha city strolls, drive north for aquariums and beaches.",
    },
    chubu: {
      name: "Chubu & Hokuriku",
      blurb: "Ise Shrine, Nagoya, Hida Takayama, Kamikochi and Kanazawa in one line.",
    },
    chugoku: {
      name: "Chugoku",
      blurb: "Hiroshima & Miyajima, Kurashiki canals, Izumo Shrine and the Tottori dunes.",
    },
    shikoku: {
      name: "Shikoku",
      blurb: "Udon in Takamatsu, art on Naoshima, Naruto whirlpools and Dogo Onsen.",
    },
    tohoku: {
      name: "Tohoku",
      blurb: "Sendai beef tongue, Matsushima bay, Zao, Hiraizumi gold and Aomori apples.",
    },
  },
  cities: {
    ...kantoA,
    ...kantoB,
    ...kansaiA,
    ...kansaiB,
    ...hokkaido,
    ...kyushu,
    ...okinawa,
    ...chubu,
    ...chugoku,
    ...shikoku,
    ...tohoku,
  },
};
