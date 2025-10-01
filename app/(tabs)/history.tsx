import { Text, View } from "@/components/Themed";
import { UseFetchHistory } from "@/hooks/useFetchHistory";
import { useIsFocused } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";

export default function HistoryScreen() {
  const isFocused = useIsFocused();
  const result = UseFetchHistory(isFocused);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { flex: 1 }]}>Player</Text>
        <Text style={[styles.title, { flex: 1 }]}>Player Choice</Text>
        <Text style={[styles.title, { flex: 1 }]}>Computer Choice</Text>
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
            <Text style={styles.cell}>{item.user_choice}</Text>
            <Text style={styles.cell}>{item.computer_choice}</Text>
            <Text style={[styles.cell, { textAlign: "right" }]}>
              {item.result}
            </Text>
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
    padding: 2,
  },
  title: {
    fontSize: 18,
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
