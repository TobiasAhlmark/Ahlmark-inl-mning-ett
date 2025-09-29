import { atom } from "jotai";

export interface ResultRow{
  id: number;
  player_name: string;
  user_choice: string;
  computer_choice: string;
  result: string;
  created_at: string; 
};

export const historyAtom = atom<ResultRow[]>([]);
export const playerNameAtom = atom<string>("");



