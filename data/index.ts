export interface PlayerResult {
    id: number;
    player: string;
    opponent: string;
    result: string;
    date: string;
}

export const gameHistory: PlayerResult[] = [
      {
    id: 1,
    player: "Sten",
    opponent: "Sax",
    result: "win",
    date: "2025-09-26T10:00:00Z",
  },
  {
    id: 2,
    player: "Sax",
    opponent: "Påse",
    result: "win",
    date: "2025-09-26T10:05:00Z",
  },
  {
    id: 3,
    player: "Sten",
    opponent: "Påse",
    result: "lose",
    date: "2025-09-26T10:10:00Z",
  },
]

export interface GameInfo {
  id: number;
  info: string;
}

export const aboutGame: GameInfo[] = [
  { id: 1, info: "Sten-sax-påse är ett enkelt handspel som har spelats i hundratals år." },
  { id: 2, info: "Reglerna är enkla: Sten krossar sax, sax klipper påse och påse täcker sten." },
  { id: 3, info: "Om båda spelare väljer samma tecken blir det oavgjort." },
];
