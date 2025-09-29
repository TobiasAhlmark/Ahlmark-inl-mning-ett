import { atom } from "jotai";

export interface ResultRow{
  id: number;
  player_name: string;
  user_choice: string;
  computer_choice: string;
  result: string;
  created_at: string; 
};

export interface ResultBestOfThreeRow{
  id: number;
  player_score: number;
  computer_score: number;
  winner: string;
  player_name: string;
}

export const historyAtom = atom<ResultRow[]>([]);
export const historyAtomBestOfThree = atom<ResultBestOfThreeRow[]>([]);
export const playerNameAtom = atom<string>("");



