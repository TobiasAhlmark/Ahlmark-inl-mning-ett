import { computerScoreAtom, playerScoreAtom } from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import { Text, View } from "@/components/Themed";
import { useRockPaper } from "@/hooks/usePaperRock";
import { useAtom } from "jotai";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function GameScreen() {
  const { userChoice, displayChoice, result, PlayRound } = useRockPaper();
  const [playerName, setPlayerName] = useAtom(playerNameAtom);
  const [playerscore] = useAtom(playerScoreAtom);
  const [computerScore] = useAtom(computerScoreAtom);

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

  if (userChoice === null)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sten - Sax - Påse</Text>
        <Text style={styles.title}>
          player - {playerscore} - cpu - {computerScore}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"Ang Namn"}
          placeholderTextColor="black"
          value={playerName}
          onChangeText={setPlayerName}
        />
        <View style={styles.pressAbleView}>
          <TouchableOpacity onPress={() => PlayRound("Sten")}>
            <Image source={images.Rock} style={styles.images} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => PlayRound("Sax")}>
            <Image source={images.Scissor} style={styles.images} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => PlayRound("Påse")}>
            <Image source={images.Bag} style={styles.images} />
          </TouchableOpacity>
        </View>
      </View>
    );

  return (
    <View
      style={[styles.container, { backgroundColor: renderResultColor(result) }]}
    >
      <Text style={styles.title}>Sten - Sax - Påse</Text>
      <View style={styles.pressAbleView}></View>
      <Text style={styles.info}>{playerName} valde: </Text>

      <Image
        source={imagesSvenska[userChoice as keyof typeof imagesSvenska]}
        style={styles.images}
      />

      <Text style={styles.info}>Datorn väljer: </Text>

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
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  choices: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 30,
  },
  choice: {
    fontSize: 60, // stora emojis
  },
  info: {
    fontSize: 24,
    marginBottom: 10,
  },
  result: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
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
