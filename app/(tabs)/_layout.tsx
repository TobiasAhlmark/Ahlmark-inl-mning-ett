import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Link, withLayoutContext } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();
export const Tabs = withLayoutContext(Navigator);

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function InfoButton() {
  const colorScheme = useColorScheme();
  return (
    <Link href="/modal" asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="info-circle"
            size={22}
            color={Colors[colorScheme ?? "light"].text}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled: true,
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Play Game",
            headerRight: () => <InfoButton />,
            tabBarIcon: ({ color }: { color: string }) => (
              <TabBarIcon name="play" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            headerRight: () => <InfoButton />,
            tabBarIcon: ({ color }: { color: string }) => (
              <TabBarIcon name="book" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "Single games",
            headerRight: () => <InfoButton />,
            tabBarIcon: ({ color }: { color: string }) => (
              <TabBarIcon name="history" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bestOfThreeHistory"
          options={{
            title: "Best of three",
            headerRight: () => <InfoButton />,
            tabBarIcon: ({ color }: { color: string }) => (
              <TabBarIcon name="history" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
