import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const INTEGRANTES = [
  {
    id: "anna",
    nome: "Anna Bonfim",
    foto: require("../../assets/anna-bonfim.jpg")
  },
  {
    id: "felipe",
    nome: "Felipe Anselmo",
    foto: require("../../assets/felipe.jpg")
  }
];

export default function Integrantes() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenHeader}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.screenTitle}>Integrantes</Text>
      </View>

      <FlatList
        data={INTEGRANTES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.memberList}
        renderItem={({ item }) => (
          <View style={styles.memberCard}>
            <Text style={styles.memberName}>{item.nome}</Text>
            {item.foto ? (
              <Image source={item.foto} style={styles.memberPhoto} />
            ) : (
              <View style={styles.memberPhotoPlaceholder}>
                <Text style={styles.memberInitial}>{item.nome[0]}</Text>
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC"
  },
  screenHeader: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 16
  },
  logoImage: {
    width: 96,
    height: 96
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B"
  },
  memberList: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 64,
    alignItems: "center"
  },
  memberCard: {
    alignItems: "center",
    gap: 12
  },
  memberName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B"
  },
  memberPhoto: {
    width: 180,
    height: 180,
    borderRadius: 20,
    resizeMode: "cover"
  },
  memberPhotoPlaceholder: {
    width: 180,
    height: 180,
    borderRadius: 20,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center"
  },
  memberInitial: {
    fontSize: 56,
    fontWeight: "700",
    color: "#3F63D4"
  }
});

