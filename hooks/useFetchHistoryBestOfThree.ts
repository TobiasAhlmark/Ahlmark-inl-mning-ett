import { historyAtomBestOfThree } from "@/atoms/historyAtoms";
import {
  dbServiceSelectBestOf
} from "@/services/dbServices";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function UseFetchHistoryBestOfThree(trigger?: boolean) {
  const [result, setResult] = useAtom(historyAtomBestOfThree);

  useEffect(() => {
    const fetchResults = async () => {
      const { data, error } = await dbServiceSelectBestOf();

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
