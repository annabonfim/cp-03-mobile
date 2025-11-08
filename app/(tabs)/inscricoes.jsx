import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Inscricoes() {
  const [lista, setLista] = useState([]);

  const carregar = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem("@educa-plus/inscricoes");
      setLista(raw ? JSON.parse(raw) : []);
    } catch {
      setLista([]);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [carregar])
  );

  const limpar = async () => {
    try {
      await AsyncStorage.removeItem("@educa-plus/inscricoes");
    } finally {
      carregar();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.screenTitle}>Minhas inscrições</Text>
        <Text style={styles.screenSubtitle}>
          A lista fica salva apenas neste aparelho. Use para acompanhar os cursos
          escolhidos.
        </Text>

        {lista.length === 0 ? (
          <View style={styles.emptyStateCard}>
            <Text style={styles.emptyStateIcon}>📝</Text>
            <Text style={styles.emptyStateTitle}>Nenhum curso salvo ainda</Text>
            <Text style={styles.emptyStateDescription}>
              Acesse uma categoria, abra um curso e toque em {`"Salvar inscrição"`}.
            </Text>
          </View>
        ) : (
          <View style={styles.subscriptionList}>
            {lista.map((curso) => (
              <View key={curso.id} style={styles.subscriptionCard}>
                <View style={styles.subscriptionCardHeader}>
                  <Text style={styles.subscriptionCardTag}>{curso.categoria}</Text>
                  <Text style={styles.subscriptionCardDuration}>{curso.cargaHoraria}</Text>
                </View>
                <Text style={styles.subscriptionCardTitle}>{curso.titulo}</Text>
                <Text style={styles.subscriptionCardProvider}>{curso.orgao}</Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity onPress={limpar} style={styles.debugButton}>
          <Text style={styles.debugButtonText}>Limpar inscrições</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC"
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 24,
    alignItems: "center"
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center"
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    paddingTop: 48
  },
  screenSubtitle: {
    color: "#6B7280",
    lineHeight: 20
  },
  emptyStateCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  emptyStateIcon: {
    fontSize: 36
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B"
  },
  emptyStateDescription: {
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20
  },
  subscriptionList: {
    gap: 16
  },
  subscriptionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    gap: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  subscriptionCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  subscriptionCardTag: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#1FA37C",
    letterSpacing: 1
  },
  subscriptionCardDuration: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600"
  },
  subscriptionCardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    lineHeight: 22
  },
  subscriptionCardProvider: {
    color: "#3F63D4",
    fontWeight: "600"
  },
  debugButton: {
    alignSelf: "center"
  },
  debugButtonText: {
    color: "#1FA37C",
    textDecorationLine: "underline"
  }
});

