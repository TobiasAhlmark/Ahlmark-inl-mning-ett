import GameRoundScreen from "@/components/gameRoundScreen";
import GameScreen from "@/components/gameScreen";
import { useRockPaper } from "@/hooks/usePaperRock";

export default function GameHomeScreen() {
  const { userChoice } = useRockPaper();

  if (userChoice === null) return <GameScreen />;

  return <GameRoundScreen />;
}
