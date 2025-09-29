import { supabase } from "@/lib/supaBase";

export async function dbService(
  playerScore: number,
  computerScore: number,
  winner: "player" | "computer" | "draw",
  playerName: string
) {
  const { data, error } = await supabase.from("bestofthree").insert([
    {
      player_score: playerScore,
      computer_score: computerScore,
      winner,
      player_name: playerName,
    },
  ]);

  if (error) {
    console.error("❌ Fel vid sparning:", error.message);
    throw error; // så du kan hantera felet i komponenten
  }

  return data;
}

export async function dbServiceSingleGame(
  playerName: string,
  userChoice: string,
  computerChoice: string,
  matchResult: string
) {
  await supabase.from("results").insert([ 
                    {
                        player_name: playerName,
                        user_choice: userChoice,
                        computer_choice: computerChoice,
                        result: matchResult,
                    },]);
}
