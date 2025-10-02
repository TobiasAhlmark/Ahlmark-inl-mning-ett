import { supabase } from "@/lib/supaBase";

export async function dbServiceInsertBestOf(
  playerScore: number,
  computerScore: number,
  winner: "player" | "computer" | "draw",
  playerName: string
) {
  return await supabase.from("bestofthree").insert([
    {
      player_score: playerScore,
      computer_score: computerScore,
      winner,
      player_name: playerName,
    },
  ]);
}

export async function dbServiceInsertSingleGame(
  playerName: string,
  userChoice: string,
  computerChoice: string,
  matchResult: string
) {
  return await supabase.from("results").insert([
    {
      player_name: playerName,
      user_choice: userChoice,
      computer_choice: computerChoice,
      result: matchResult,
    },
  ]);
}
