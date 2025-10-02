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

export async function dbServiceSelectBestOf() {
  return await supabase
    .from("bestofthree")
    .select("id, player_score, computer_score, winner, player_name, created_at")
    .order("created_at", { ascending: false })
    .limit(25);
}

export async function dbServiceSelectSingleWinner() {
  return await supabase
    .from("results")
    .select("id, player_name, user_choice, computer_choice, result, created_at")
    .order("created_at", { ascending: false })
    .limit(25);
}
