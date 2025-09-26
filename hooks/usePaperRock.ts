import { computerChoiceAtom, displayChoiceAtom, resultAtom, userChoiceAtom } from "@/atoms/gameAtoms";
import { useAtom } from "jotai";

function decideWinner(userC: string, computerC: string) {
  if (userC === computerC) return "🖖: Oavgjort";

  if (userC === "Sten" && computerC === "Sax") return "WIN";
  if (userC === "Sax" && computerC === "Påse") return "WIN";
  if (userC === "Påse" && computerC === "Sten") return "WIN";

  return "LOOSE";
}

function GameChoices () {

    const computerChoices = ["Sten" , "Sax", "Påse"];
    const index = Math.floor((Math.random() * computerChoices.length))
    return computerChoices[index];
}
    
export function UseRockPaper(){
    
    const [userChoice, setUserChoice] = useAtom(userChoiceAtom);
    const [computerChoice, setComputerChoice] = useAtom(computerChoiceAtom);
    const [result, SetResult] = useAtom(resultAtom);
    const [displayChoice, setDisplayChoice] = useAtom(displayChoiceAtom)

    function PlayRound (userC: string) {
        setUserChoice(userC);

        const interval = setInterval(() => {
            setDisplayChoice(GameChoices());
        }, 150);
        
        setTimeout(() => {clearInterval(interval);
            const finalChoice = GameChoices();
    
        setDisplayChoice(finalChoice)
        setComputerChoice(finalChoice)
        SetResult(decideWinner(userC, finalChoice));}, 3000);
    }
        
    return {userChoice, computerChoice, result, displayChoice, PlayRound}
}