import { useLocalSearchParams, useRouter, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CURSOS } from "../../data/cursos";

export default function CursoDetalhe() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const curso = CURSOS.find((c) => String(c.id) === String(id));

  if (!curso) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Curso não encontrado.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const inscrever = async () => {
    try {
      const raw = await AsyncStorage.getItem("@educa-plus/inscricoes");
      const atual = raw ? JSON.parse(raw) : [];
      const existe = atual.some((item) => String(item.id) === String(curso.id));
      const atualizado = existe ? atual : [...atual, curso];
      await AsyncStorage.setItem("@educa-plus/inscricoes", JSON.stringify(atualizado));
    } catch {
      // mantém silêncio; em caso de erro apenas não salva
    }
    Alert.alert("Inscrição salva", `Você adicionou "${curso.titulo}" às inscrições.`);
    router.push("/(tabs)/inscricoes");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.courseMetaRow}>
          <Text style={styles.courseCategory}>{curso.categoria}</Text>
          <Text style={styles.courseDuration}>{curso.cargaHoraria}</Text>
        </View>

        <Text style={styles.courseTitle}>{curso.titulo}</Text>
        <Text style={styles.courseProvider}>{curso.orgao}</Text>

        <View style={styles.courseDetailsCard}>
          <Text style={styles.courseDetailsTitle}>Sobre o curso</Text>
          <Text style={styles.courseDetailsText}>{curso.descricao}</Text>
        </View>

        <View style={styles.actionList}>
          <TouchableOpacity style={styles.primaryActionButton} onPress={inscrever}>
            <Text style={styles.primaryActionLabel}>Salvar inscrição</Text>
          </TouchableOpacity>
          <Link href="/(tabs)/inscricoes" style={styles.secondaryActionLink}>
            Ver Minhas Inscrições
          </Link>
        </View>
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
    paddingTop: 1,
    gap: 24
  },
  logoContainer: {
    alignItems: "center"
  },
  logo: {
    width: 64,
    height: 64
  },
  courseMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  courseCategory: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#1FA37C",
    letterSpacing: 1
  },
  courseDuration: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600"
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    lineHeight: 30
  },
  courseProvider: {
    color: "#3F63D4",
    fontWeight: "600"
  },
  courseDetailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    gap: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  courseDetailsTitle: {
    fontWeight: "700",
    color: "#1E293B",
    fontSize: 16
  },
  courseDetailsText: {
    color: "#6B7280",
    lineHeight: 20
  },
  actionList: {
    gap: 12
  },
  primaryActionButton: {
    backgroundColor: "#3F63D4",
    paddingVertical: 14,
    borderRadius: 16
  },
  primaryActionLabel: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 0.5
  },
  secondaryActionLink: {
    textAlign: "center",
    color: "#1FA37C",
    fontWeight: "600"
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  notFoundText: {
    color: "#6B7280"
  }
});
