import { historyAtom } from "@/atoms/historyAtoms";
import { Text, View } from "@/components/Themed";
import { supabase } from "@/lib/supaBase";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

export default async function HistoryScreen() {
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

    fetchResults();
  }, [setResult]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>Historik</Text>
        <Text style={styles.title}>Historik</Text>
        <Text style={styles.title}>Historik</Text>
        <Text style={styles.title}>Historik</Text>
      </View>
      <FlatList
        data={result}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.player_name}. Ditt val: {item.user_choice} Datorns val:{" "}
            {item.computer_choice} Resultat: {item.result}
          </Text>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
