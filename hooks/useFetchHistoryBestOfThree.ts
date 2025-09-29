import { historyAtomBestOfThree } from "@/atoms/historyAtoms";
import { supabase } from "@/lib/supaBase";
import { useAtom } from "jotai";
import { useEffect } from "react";


export function UseFetchHistoryBestOfThree(trigger?: boolean) {
    const [result, setResult] = useAtom(historyAtomBestOfThree);
    
      useEffect(() => {
        const fetchResults = async () => {
          const { data, error } = await supabase
            .from("bestofthree")
            .select(
              "id, player_score, computer_score, winner, player_name, created_at"
            )
            .order("created_at", { ascending: false })
            .limit(25);
    
          if (error) {
            console.error("❌ Fetch error:", error.message);
          } else {
            setResult(data);
          }
        };
        
        if(trigger){
            fetchResults();
        }
      }, [trigger]);

      return result;
}