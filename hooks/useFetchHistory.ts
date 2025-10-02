import { historyAtom } from "@/atoms/historyAtoms";
import { dbServiceSelectSingleWinner } from "@/services/dbServices";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function UseFetchHistory(trigger?: boolean) {
  const [result, setResult] = useAtom(historyAtom);

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await dbServiceSelectSingleWinner();

      if (error) {
        console.error("❌ Fetch error:", error.message);
      } else {
        setResult(data);
      }
    };

    if (trigger) {
      fetchResults();
    }
  }, [trigger]);

  return result;
}
