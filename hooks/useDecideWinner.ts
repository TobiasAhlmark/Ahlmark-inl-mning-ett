import { computerScoreAtom, playerScoreAtom } from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import { dbService } from "@/services/dbService";
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
    setPlayerScore(p => p + 1);
    return "WIN";
  }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

    setComputerScore(p => p + 1);

    return "LOOSE";
}
useEffect(() => {
  if(playerScore === 2) {
    dbService(playerScore, computerScore, "player", playerName);
    setPlayerScore(0);
    setComputerScore(0);
  }

  if(computerScore === 2) {
    dbService(playerScore, computerScore, "computer", playerName);
    setPlayerScore(0);
    setComputerScore(0);
  }
},[playerScore, computerScore, playerName, setPlayerScore, setComputerScore]);

return { decideWinner }
}