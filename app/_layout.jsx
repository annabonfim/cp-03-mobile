import { Stack } from "expo-router";

export default function RootLayout() {
  const background = "#F7F9FC";
  const surface = "#FFFFFF";
  const primary = "#3F63D4";
  const text = "#1E293B";

  return (
    <Stack
      screenOptions={{
        headerTitle: "Educa+",
        animation: "slide_from_right",
        gestureEnabled: true,
        headerStyle: { backgroundColor: surface },
        headerTitleStyle: { color: text, fontWeight: "700" },
        headerTintColor: primary,
        contentStyle: { backgroundColor: background }
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="curso/[id]"
        options={{ title: "Detalhes do curso" }}
      />
    </Stack>
  );
}
