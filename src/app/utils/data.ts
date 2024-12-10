export type ListNews = {
  news: string;
  types?: string[];
  zones?: string[];
  isNotAll?: boolean;
};

export const listNews: ListNews[] = [
  {
    news: "Antara News",
    types: [
      "terkini",
      "top-news",
      "politik",
      "hukum",
      "ekonomi",
      "metro",
      "sepakbola",
      "olahraga",
      "humaniora",
      "lifestyle",
      "hiburan",
      "dunia",
      "infografik",
      "tekno",
      "otomotif",
      "warta-bumi",
      "rilis-pers",
    ],
    isNotAll: true,
  },
  {
    news: "CNN News",
    types: [
      "nasional",
      "internasional",
      "ekonomi",
      "olahraga",
      "teknologi",
      "hiburan",
      "gaya-hidup",
    ],
  },
  {
    news: "CNBC News",
    types: ["market", "news", "entrepreneur", "syariah", "tech", "lifestyle"],
  },
  {
    news: "Republika News",
    types: [
      "news",
      "nusantara",
      "khazanah",
      "islam-digest",
      "internasional",
      "ekonomi",
      "sepakbola",
      "leisure",
    ],
  },
  {
    news: "Tempo News",
    types: [
      "nasional",
      "bisnis",
      "metro",
      "dunia",
      "bola",
      "sport",
      "cantik",
      "tekno",
      "otomotif",
      "nusantara",
    ],
  },
  {
    news: "Okezone News",
    types: [
      "breaking",
      "sport",
      "economy",
      "lifestyle",
      "celebrity",
      "bola",
      "techno",
    ],
  },
  {
    news: "Kumparan News",
  },
  {
    news: "Tribun News",
    zones: [
      "jakarta",
      "jabar",
      "mataram",
      "mataraman",
      "medan",
      "padang",
      "flores",
      "sulbar",
      "ambon",
      "wartakota",
      "bogor",
      "pantura",
      "madura",
      "palembang",
      "pekanbaru",
      "banjarmasin",
      "pontianak",
      "papua",
      "bekasi",
      "cirebon",
      "jogja",
      "bali",
      "bangka",
      "jambi",
      "kaltim",
      "palu",
      "papuabarat",
      "banten",
      "jateng",
      "jatim",
      "aceh",
      "batam",
      "sumsel",
      "kalteng",
      "makassar",
      "tangerang",
      "solo",
      "surabaya",
      "prohaba",
      "belitung",
      "lampung",
      "kaltara",
      "lombok",
      "depok",
      "banyumas",
      "suryamalang",
      "sultra",
      "babel",
      "kupang",
      "manado",
      "ternate",
    ],
    types: [
      "bisnis",
      "superskor",
      "sport",
      "seleb",
      "lifestyle",
      "travel",
      "parapuan",
      "otomotif",
      "techno",
      "ramadan",
    ],
  },
  {
    news: "Zetizen JawaPos News",
    types: [
      "book",
      "movie",
      "music",
      "tv-series",
      "beauty",
      "trend",
      "food-and-traveling",
      "games",
      "otomodif",
      "sport-and-health",
      "after-school",
      "career-coach",
      "dear-you",
      "get-a-life",
      "scholarship-info",
      "science",
      "techno",
      "zetizen-national-challenge",
    ],
    isNotAll: true,
  },
  {
    news: "Vice News",
  },
  {
    news: "Suara News",
    types: [
      "news",
      "bisnis",
      "lifestyle",
      "entertainment",
      "otomotif",
      "tekno",
      "health",
      "mostpopular",
      "wawancara",
      "pressrelease",
    ],
  },
  {
    news: "Voa News",
  },
];