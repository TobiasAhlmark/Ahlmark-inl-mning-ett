import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export function useSound(soundFile: any) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      if (mounted) setSound(sound);
    }

    loadSound();

    return () => {
      mounted = false;
      if (sound) {
        sound.unloadAsync(); // städa när komponenten unmountas
      }
    };
  }, []);

  async function play() {
    if (sound) {
      await sound.replayAsync();
      setTimeout(() => {
      sound.stopAsync();
    }, 5000); // spelar från början varje gång
    }
  }

  return play;
}
