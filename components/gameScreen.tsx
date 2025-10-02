import clickSound from "@/assets/sounds/clickSound.mp3";
import { computerScoreAtom, playerScoreAtom } from "@/atoms/gameAtoms";
import { playerNameAtom } from "@/atoms/historyAtoms";
import { Text, View } from "@/components/Themed";
import { useRockPaper } from "@/hooks/usePaperRock";
import { useSound } from "@/hooks/useSound";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useAtom } from "jotai";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

const images = {
  Rock: require("../assets/images/rock.png"),
  Scissor: require("../assets/images/scissor.png"),
  Bag: require("../assets/images/bag.png"),
};

export default function GameScreen() {
  const { PlayRound } = useRockPaper();
  const [playerName, setPlayerName] = useAtom(playerNameAtom);
  const [playerScore] = useAtom(playerScoreAtom);
  const [computerScore] = useAtom(computerScoreAtom);
  const playClick = useSound(clickSound);

  return (
    <LinearGradient
      colors={["#2e2e2e", "#a0a0a0"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.titlebox}>
        <View style={styles.scorebox}>
          <Text style={styles.title}>Computer</Text>
          <Text style={styles.title}>{computerScore}</Text>
        </View>
        <View
          style={{
            flex: 1,
            margin: 10,
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.title}>Player</Text>
          <Text style={styles.title}>{playerScore}</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder={"Ang Namn"}
        placeholderTextColor="black"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <View style={styles.pressAbleView}>
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => {
            playClick();
            PlayRound("Sten");
          }}
        >
          <Image source={images.Rock} style={styles.images} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => {
            playClick();
            PlayRound("Sax");
          }}
        >
          <Image source={images.Scissor} style={styles.images} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choiceButton}
          onPress={() => {
            playClick();
            PlayRound("Påse");
          }}
        >
          <Image source={images.Bag} style={styles.images} />
        </TouchableOpacity>
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
  images: {
    borderRadius: 15,
    width: 100,
    height: 140,
    marginBottom: 10,
    marginRight: 10,
  },
  pressAbleView: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  input: {
    backgroundColor: "lightgrey",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  scorebox: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  titlebox: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "transparent",
  },
  choiceButton: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#5f5f5fff",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
