import { computerScoreAtom, playerScoreAtom } from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import { dbServiceInsertBestOf } from "@/services/dbServices";
import * as Haptics from "expo-haptics";
import { useAtom } from "jotai";

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

      const newPlayerScore = playerScore + 1;
      setPlayerScore(newPlayerScore);

      if (newPlayerScore === 2) {
        dbServiceInsertBestOf(
          newPlayerScore,
          computerScore,
          "player",
          playerName
        );
        setPlayerScore(0);
        setComputerScore(0);
      }
      return "WIN";
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    const newComputerScore = computerScore + 1;
    setComputerScore(newComputerScore);

    if (newComputerScore === 2) {
      dbServiceInsertBestOf(
        playerScore,
        newComputerScore,
        "computer",
        playerName
      );
      setPlayerScore(0);
      setComputerScore(0);
    }

    return "LOOSE";
  }
  return { decideWinner };
}
