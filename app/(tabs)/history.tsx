import { FlatList, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { gameHistory } from "@/data";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={gameHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.id}. Resultat: {item.result} ({item.player} - {item.opponent})
          </Text>
        )}
      ></FlatList>
      bu
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
