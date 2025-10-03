# Rock Paper Scissors Game 🎮✊✋✌️

Ett spel byggt i React Native med Expo där spelaren möter datorn i sten–sax–påse.  
Spelet har stöd för ljud, vibrationer, historikvisning och poängräkning.
Här spelas bäst av 3. Matcherna sparas i en databas (supabase).
Varje unik hand sparas i en separat tabell och även matcherna bäst av tre lagras i en annan tabell.
Det finns tillgång till vy över all historik.

---

## 📖 Beskrivning

- Spelaren kan ange sitt namn och spela mot datorn.
- Varje omgång visar datorns val, spelarens val och resultatet.
- Poängen räknas upp och sparas i en historik.
- Ljud och vibrationer används för feedback.
- Gränssnittet är gjort med React Native-komponenter och Expo-komponenter för extra funktionalitet och styling.

---

## 🛠️ Hur man kör projektet

1. Klona repot eller ladda ner koden
2. Kör `npm install` för att installera alla dependencies
3. Starta appen med: npm run start

---

## 📱 React Native-komponenter

- 🧩 View – container för layout
- 📝 Text – visa text och resultat
- 👆 TouchableOpacity – interaktiva knappar
- ⌨️ TextInput – inmatning av spelarens namn
- 🖼️ Image – visa bilder för sten, sax, påse

---

## 🚀 Expo SDK-komponenter

- 🔊 expo-av (Audio) – spela upp ljud
- 📳 expo-haptics – vibrationer/haptisk feedback
- 🎨 expo-linear-gradient – snygga bakgrunder
- 🖼️ expo-image – bildrendering

---

## 🧭 Navigering

Appen använder **React Navigation** via `expo-router` för att skapa en stacknavigering
mellan flikar och modals. Detta ger en bättre användarupplevelse och uppfyller kurskravet.

---

## 🧩 Extern modul

Appen använder **@supabase/supabase-js** som extern modul för att hantera kommunikation med vår Supabase-databas.  
All matchdata (bäst av tre) samt individuella händer lagras i databasen via Supabase API.

---

## 📦 Förberedd för lansering

Appen är konfigurerad med **EAS Build** för att kunna byggas och distribueras till App Store och Google Play.  
En `eas.json`-fil finns i projektet och innehåller konfiguration för development, preview och production builds.  
Projektet är kopplat till mitt Expo-konto (@tobias1991) och har ett `projectId` som visas i `app.json`.

För att bygga appen kör:

```bash
npm install -g eas-cli
eas login
eas build --platform android
eas build --platform ios
```
