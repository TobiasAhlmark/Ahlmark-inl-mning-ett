import { Text, View } from "@/components/Themed";
import { aboutGame } from "@/data";
import { FlatList, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Om Sten-Sax-Påse</Text>

      <FlatList
        data={aboutGame}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.itemText}>{item.info}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: "row", // punkt + text på samma rad
    marginBottom: 8, // mellanrum mellan punkterna
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
  },
  itemText: {
    fontSize: 16,
    flexShrink: 1, // gör så att texten bryts på flera rader om den är lång
  },
});
