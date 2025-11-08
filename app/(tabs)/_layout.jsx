import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  const scheme = useColorScheme();
  const palette =
    scheme === "dark"
      ? {
          surface: "#0F172A",
          primary: "#60A5FA",
          muted: "#94A3B8",
          border: "#1E293B"
        }
      : {
          surface: "#FFFFFF",
          primary: "#3F63D4",
          muted: "#6B7280",
          border: "#E2E8F0"
        };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.muted,
        tabBarStyle: {
          backgroundColor: palette.surface,
          borderTopColor: palette.border,
          height: 64,
          paddingBottom: 10,
          paddingTop: 10
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={size ?? 22} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="cursos"
        options={{
          title: "Cursos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={size ?? 22}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="inscricoes"
        options={{
          title: "Inscrições",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="checklist" size={size ?? 22} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="integrantes"
        options={{
          title: "Equipe",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="group" size={size ?? 22} color={color} />
          )
        }}
      />
    </Tabs>
  );
}

