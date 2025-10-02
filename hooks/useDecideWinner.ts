import { computerScoreAtom, playerScoreAtom } from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import { dbServiceInsertBestOf } from "@/services/dbServices";
import * as Haptics from "expo-haptics";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function useDecideWinner() {
  const [playerScore, setPlayerScore] = useAtom(playerScoreAtom);
  const [computerScore, setComputerScore] = useAtom(computerScoreAtom);
  const [playerName] = useAtom(playerNameAtom);

  function decideWinner(userC: string, computerC: string) {
    if (userC === computerC) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);

      return "🖖: Oavgjort";
    }
    if (
      (userC === "Sten" && computerC === "Sax") ||
      (userC === "Sax" && computerC === "Påse") ||
      (userC === "Påse" && computerC === "Sten")
    ) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setPlayerScore((p) => p + 1);
      return "WIN";
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    setComputerScore((p) => p + 1);

    return "LOOSE";
  }
  useEffect(() => {
    if (playerScore === 2) {
      dbServiceInsertBestOf(playerScore, computerScore, "player", playerName)
        .then(({ error }) => {
          if (error) {
            console.error("Insert error:", error.message);
          } else {
            console.log("Result saved");
            setPlayerScore(0);
            setComputerScore(0);
          }
        })
        .catch((err) => {
          console.error("Unexpected error:", err);
        });
    }

    if (computerScore === 2) {
      dbServiceInsertBestOf(playerScore, computerScore, "computer", playerName)
        .then(({ error }) => {
          if (error) {
            console.error("Insert error:", error.message);
          } else {
            console.log("Result saved");
            setPlayerScore(0);
            setComputerScore(0);
          }
        })
        .catch((err) => {
          console.error("Unexpected error:", err);
        });
    }
  }, [
    playerScore,
    computerScore,
    playerName,
    setPlayerScore,
    setComputerScore,
  ]);

  return { decideWinner };
}
