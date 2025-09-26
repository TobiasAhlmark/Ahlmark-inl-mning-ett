import { atom } from "jotai";

export const userChoiceAtom = atom<string | null>(null);
export const computerChoiceAtom = atom<string | null>(null);
export const resultAtom = atom<string | null>(null);
export const displayChoiceAtom = atom<string | null>();