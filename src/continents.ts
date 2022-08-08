interface Continent {
  name: string;
  area: {
    /** Number between 0-100 */
    pctOfTotal: number;
    sqKm: number;
    sqMiles: number;
  };
  highestPoint: string;
  population: {
    people: {
      count: number;
      unit?: "million" | "billion";
    };
    /** Number between 0-100 */
    pctOfTotal: number;
  };
}

export const ASIA: Continent = {
  name: "Asia",
  area: {
    sqKm: 44_614_000,
    sqMiles: 17_226_000,
    pctOfTotal: 29.8,
  },
  highestPoint: "Mount Everest",
  population: {
    people: { count: 4.6, unit: "billion" },
    pctOfTotal: 60,
  },
};

export const OCEANIA: Continent = {
  name: "Oceania",
  area: {
    sqKm: 8_510_900,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Puncak Jaya",
  population: {
    people: { count: 42, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const EUROPE: Continent = {
  name: "Europe",
  area: {
    sqKm: 10_180_000,
    sqMiles: 3_930_000,
    pctOfTotal: 6.8,
  },
  highestPoint: "Mont Blanc",
  population: {
    people: { count: 750, unit: "million" },
    pctOfTotal: 9.78,
  },
};

export const NORTH_AMERICA: Continent = {
  name: "North America",
  area: {
    sqKm: 24_709_000,
    sqMiles: 9_540_000,
    pctOfTotal: 16.5,
  },
  highestPoint: "Denali (a.k.a. Mount McKinley)",
  population: {
    people: { count: 374, unit: "million" },
    pctOfTotal: 4.73,
  },
};

export const ANTARCTICA: Continent = {
  name: "Antarctica",
  area: {
    sqKm: 14_200_000,
    sqMiles: 5_500_000,
    pctOfTotal: 9.5,
  },
  highestPoint: "Mont Blanc",
  population: {
    people: { count: 0, unit: "million" },
    pctOfTotal: 0,
  },
};

export const AFRICA: Continent = {
  name: "Africa",
  area: {
    sqKm: 30_365_000,
    sqMiles: 11_724_000,
    pctOfTotal: 20.3,
  },
  highestPoint: "Mont Kilimanjaro",
  population: {
    people: { count: 1.3, unit: "billion" },
    pctOfTotal: 17,
  },
};

export const SOUTH_AMERICA: Continent = {
  name: "South America",
  area: {
    sqKm: 17_814_000,
    sqMiles: 6_878_000,
    pctOfTotal: 11.9,
  },
  highestPoint: "Aconcagua",
  population: {
    people: { count: 420, unit: "million" },
    pctOfTotal: 5.6,
  },
};
