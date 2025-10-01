import { computerScoreAtom, playerScoreAtom } from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import GameScreen from "@/components/gameScreen";
import { Text, View } from "@/components/Themed";
import { useRockPaper } from "@/hooks/usePaperRock";
import { useSound } from "@/hooks/useSound";
import { Image } from "expo-image";
import { useAtom } from "jotai";
import { StyleSheet } from "react-native";
import clickSound from "../../assets/sounds/clickSound.mp3";

export default function GameHomeScreen() {
  const { userChoice, displayChoice, result, PlayRound } = useRockPaper();
  const [playerName, setPlayerName] = useAtom(playerNameAtom);
  const [playerScore] = useAtom(playerScoreAtom);
  const [computerScore] = useAtom(computerScoreAtom);
  const playClick = useSound(clickSound);

  const images = {
    Rock: require("../../assets/images/rock.png"),
    Scissor: require("../../assets/images/scissor.png"),
    Bag: require("../../assets/images/bag.png"),
  };

  const imagesSvenska = {
    Sten: require("../../assets/images/rock.png"),
    Sax: require("../../assets/images/scissor.png"),
    Påse: require("../../assets/images/bag.png"),
  };

  if (userChoice === null) return <GameScreen />;

  return (
    <View
      style={[styles.container, { backgroundColor: renderResultColor(result) }]}
    >
      <Text style={styles.title}>Spelar</Text>
      <View style={styles.pressAbleView}></View>
      <Text style={styles.info}>{playerName} valde: </Text>

      <Image
        source={imagesSvenska[userChoice as keyof typeof imagesSvenska]}
        style={styles.images}
      />

      <Text style={styles.info}>Datorn slumpar: </Text>

      <Image
        source={imagesSvenska[displayChoice as keyof typeof displayChoice]}
        style={styles.images}
      />
      <Text>Resultat: {result}</Text>
    </View>
  );

  function renderResultColor(result: string | null) {
    if (result === "LOOSE") return "red";
    if (result === "WIN") return "green";
    if (result === "🖖: Oavgjort") return "orange";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
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
  input: {
    backgroundColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
});
