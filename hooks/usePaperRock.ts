import { computerChoiceAtom, displayChoiceAtom, resultAtom, userChoiceAtom } from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import { dbServiceSingleGame } from "@/services/dbService";
import { useAtom } from "jotai";
import { useDecideWinner } from "./decideWinner";


function GameChoices () {

    const computerChoices = ["Sten" , "Sax", "Påse"];
    const index = Math.floor((Math.random() * computerChoices.length))
    return computerChoices[index];
}
    
export function useRockPaper(){
    
    const [userChoice, setUserChoice] = useAtom(userChoiceAtom);
    const [computerChoice, setComputerChoice] = useAtom(computerChoiceAtom);
    const [result, SetResult] = useAtom(resultAtom);
    const [displayChoice, setDisplayChoice] = useAtom(displayChoiceAtom);
    const [playerName] = useAtom(playerNameAtom);

    const { decideWinner } = useDecideWinner();
    
    async function PlayRound (userC: string) {

        setUserChoice(userC);

        const interval = setInterval(() => {
            setDisplayChoice(GameChoices());
        }, 150);
        
        setTimeout(async () => {clearInterval(interval);
            
            const finalChoice = GameChoices();

                setDisplayChoice(finalChoice);
                 const matchResult = decideWinner(userC, finalChoice);
                SetResult(matchResult);

                dbServiceSingleGame(playerName, userC, finalChoice, matchResult)
                }, 3000);

        setTimeout(() => {
            setUserChoice(null);
            setComputerChoice(null);
            setDisplayChoice(null);
            SetResult(null);
                }, 7000);
    }   
    return {userChoice, computerChoice, result, displayChoice, PlayRound}
}