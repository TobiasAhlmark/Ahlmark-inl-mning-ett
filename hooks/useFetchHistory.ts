import { historyAtom } from "@/atoms/historyAtoms";
import { supabase } from "@/lib/supaBase";
import { useAtom } from "jotai";
import { useEffect } from "react";


export function UseFetchHistory(trigger?: boolean) {
    const [result, setResult] = useAtom(historyAtom);
    
      useEffect(() => {
        const fetchResults = async () => {
          const { data, error } = await supabase
            .from("results")
            .select(
              "id, player_name, user_choice, computer_choice, result, created_at"
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