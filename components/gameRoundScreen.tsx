import { playerNameAtom } from "@/atoms/historyAtoms";
import { Text, View } from "@/components/Themed";
import { useRockPaper } from "@/hooks/usePaperRock";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useAtom } from "jotai";
import { StyleSheet } from "react-native";

export default function GameRoundScreen() {
  const { userChoice, displayChoice, result } = useRockPaper();
  const [playerName] = useAtom(playerNameAtom);

  const imagesSvenska = {
    Sten: require("../assets/images/rock.png"),
    Sax: require("../assets/images/scissor.png"),
    Påse: require("../assets/images/bag.png"),
  };

  return (
    <LinearGradient
      colors={
        result === "WIN"
          ? ["#28851fff", "#859f85ff"] // blå/grön vinst-bakgrund
          : result === "LOOSE"
          ? ["#8e0e00", "#1f1c18"] // röd förlust
          : result === "🖖: Oavgjort"
          ? ["#ff9966", "#ff5e62"] // orange oavgjort
          : ["#2e2e2e", "#a0a0a0"] // default grå
      }
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Spelar</Text>
        <View style={styles.pressAbleView}></View>
        <Text style={styles.info}>{playerName} valde: </Text>

        <Image
          source={imagesSvenska[userChoice as keyof typeof imagesSvenska]}
          style={styles.images}
        />

        <Text style={styles.info}>Datorn slumpar: </Text>

        <Image
          source={imagesSvenska[displayChoice as keyof typeof imagesSvenska]}
          style={styles.images}
        />
        <Text>Resultat: {result}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 10,
  },
  info: {
    fontSize: 24,
    marginBottom: 10,
  },
  images: {
    borderRadius: 15,
    width: 100,
    height: 140,
    marginBottom: 10,
    marginRight: 10,
  },
  pressAbleView: {
    flexDirection: "row",
  },
});
