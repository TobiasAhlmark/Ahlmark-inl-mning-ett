import { Text, View } from "@/components/Themed";
import { UseRockPaper } from "@/hooks/usePaperRock";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function GameScreen() {
  const { userChoice, displayChoice, result, PlayRound } = UseRockPaper();

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

  const choiceEmojis = {
    Sten: "✊",
    Sax: "✌️",
    Påse: "🖐️",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spelet</Text>
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
      <Text style={styles.info}>Du valde: </Text>

      <Image
        source={imagesSvenska[userChoice as keyof typeof imagesSvenska]}
        style={styles.images}
      />

      <Text style={styles.info}>Datorn visar: </Text>

      <Image
        source={imagesSvenska[displayChoice as keyof typeof displayChoice]}
        style={styles.images}
      />
      <Text>Resultat: {result}</Text>
    </View>
  );
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
});
