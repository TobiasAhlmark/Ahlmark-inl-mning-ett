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

const imagesSvenska = {
  Sten: require("../assets/images/rock.png"),
  Sax: require("../assets/images/scissor.png"),
  Påse: require("../assets/images/bag.png"),
};

export default function GameScreen() {
  const { userChoice, displayChoice, result, PlayRound } = useRockPaper();
  const [playerName, setPlayerName] = useAtom(playerNameAtom);
  const [playerScore] = useAtom(playerScoreAtom);
  const [computerScore] = useAtom(computerScoreAtom);
  const playClick = useSound(clickSound);

  return (
    <LinearGradient
      colors={["#636364ff", "#6c6e70ff"]} // 🔵 blå gradient
      style={styles.container}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View style={{ flex: 1, margin: 10, alignItems: "center" }}>
            <Text style={styles.title}>Computer</Text>
            <Text style={styles.title}>{computerScore}</Text>
          </View>
          <View style={{ flex: 1, margin: 10, alignItems: "center" }}>
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
            onPress={() => {
              playClick();
              PlayRound("Sten");
            }}
          >
            <Image source={images.Rock} style={styles.images} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              playClick();
              PlayRound("Sax");
            }}
          >
            <Image source={images.Scissor} style={styles.images} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              playClick();
              PlayRound("Påse");
            }}
          >
            <Image source={images.Bag} style={styles.images} />
          </TouchableOpacity>
        </View>
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
