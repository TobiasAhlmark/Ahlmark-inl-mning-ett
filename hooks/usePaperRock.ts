import clickLooseSound from "@/assets/sounds/clickLooseSound.mp3";
import clickWinSound from "@/assets/sounds/clickWinSound.mp3";
import drawSound from "@/assets/sounds/drawSound.mp3";
import {
    computerChoiceAtom,
    displayChoiceAtom,
    resultAtom,
    userChoiceAtom,
} from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import { dbServiceInsertSingleGame } from "@/services/dbServices";
import { useAtom } from "jotai";
import { useDecideWinner } from "./useDecideWinner";
import { useSound } from "./useSound";

function GameChoices() {
  const computerChoices = ["Sten", "Sax", "Påse"];
  const index = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[index];
}

export function useRockPaper() {
  const [userChoice, setUserChoice] = useAtom(userChoiceAtom);
  const [computerChoice, setComputerChoice] = useAtom(computerChoiceAtom);
  const [result, SetResult] = useAtom(resultAtom);
  const [displayChoice, setDisplayChoice] = useAtom(displayChoiceAtom);
  const [playerName] = useAtom(playerNameAtom);

  const { decideWinner } = useDecideWinner();
  const playClickLoose = useSound(clickLooseSound);
  const playClickWin = useSound(clickWinSound);
  const playDrawSound = useSound(drawSound);

  async function PlayRound(userC: string) {
    setUserChoice(userC);

    const interval = setInterval(() => {
      setDisplayChoice(GameChoices());
    }, 100);

    setTimeout(async () => {
      clearInterval(interval);

      const finalChoice = GameChoices();

      setDisplayChoice(finalChoice);
      const matchResult = decideWinner(userC, finalChoice);

      if (matchResult === "LOOSE") playClickLoose();
      if (matchResult === "WIN") playClickWin();
      if (matchResult === "🖖: Oavgjort") playDrawSound();

      SetResult(matchResult);

      dbServiceInsertSingleGame(playerName, userC, finalChoice, matchResult)
        .then(({ error }) => {
          if (error) {
            console.error("Insert error:", error.message);
          } else {
            console.log("Result saved");
          }
        })
        .catch((err) => {
          console.error("Unexpected error:", err);
        });
      setTimeout(() => {
        setUserChoice(null);
        setComputerChoice(null);
        setDisplayChoice(null);
        SetResult(null);
      }, 6000);
    }, 3000);
  }
  return { userChoice, computerChoice, result, displayChoice, PlayRound };
}
