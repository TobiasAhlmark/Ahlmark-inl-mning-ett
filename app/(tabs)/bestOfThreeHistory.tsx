import { Text, View } from "@/components/Themed";
import { UseFetchHistoryBestOfThree } from "@/hooks/useFetchHistoryBestOfThree";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";

export default function BestOfThreeHistoryScreen() {
  const isFocused = useIsFocused();
  const result = UseFetchHistoryBestOfThree(isFocused);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { flex: 1 }]}>Player</Text>
        <Text style={[styles.title, { flex: 1 }]}>Player Score</Text>
        <Text style={[styles.title, { flex: 1 }]}>Computer Score</Text>
        <Text style={[styles.title, { flex: 1, textAlign: "right" }]}>
          Winner
        </Text>
      </View>
      <FlatList
        style={{ flex: 1, marginTop: 10 }}
        data={result}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.player_name}</Text>
            <Text style={styles.cell}>{item.player_score}</Text>
            <Text style={styles.cell}>{item.computer_score}</Text>
            <Text style={[styles.cell, {}]}>{item.winner}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  row: {
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 0.5,
    borderColor: "lightgrey",
    width: "100%",
  },
  cell: {
    textAlign: "left",
    width: "25%",
  },
});
