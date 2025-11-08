import { useEffect, useState } from "react";
import { useLocalSearchParams, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { CURSOS } from "../../data/cursos";

const ALL_CATEGORIES = [
  "Tecnologia",
  "Saúde",
  "Educação",
  "Gestão",
  "Sustentabilidade"
];

export default function Cursos() {
  const { cat } = useLocalSearchParams();
  const [categoria, setCategoria] = useState("Todos");

  useEffect(() => {
    setCategoria(typeof cat === "string" ? cat : "Todos");
  }, [cat]);

  const cursosFiltrados =
    categoria === "Todos"
      ? CURSOS
      : CURSOS.filter((curso) => curso.categoria === categoria);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          {categoria === "Todos" ? "Todos os cursos" : `Cursos de ${categoria}`}
        </Text>
        <Text style={styles.subtitle}>
          A lista reúne formações rápidas, 100% online e gratuitas.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          <CategoriaBotao
            label="Todos"
            active={categoria === "Todos"}
            onPress={() => setCategoria("Todos")}
          />
          {ALL_CATEGORIES.map((item) => (
            <CategoriaBotao
              key={item}
              label={item}
              active={categoria === item}
              onPress={() => setCategoria(item)}
            />
          ))}
        </ScrollView>

        <View style={styles.courseList}>
          {cursosFiltrados.map((curso) => (
            <Link key={curso.id} href={`/curso/${curso.id}`} asChild>
              <TouchableOpacity style={styles.courseCard}>
                <View style={styles.courseCardHeader}>
                  <Text style={styles.courseCardTag}>{curso.categoria}</Text>
                  <Text style={styles.courseCardDuration}>{curso.cargaHoraria}</Text>
                </View>
                <Text style={styles.courseCardTitle}>{curso.titulo}</Text>
                <Text style={styles.courseCardProvider}>{curso.orgao}</Text>
                <Text numberOfLines={2} style={styles.courseCardSummary}>
                  {curso.descricao}
                </Text>
                <Text style={styles.courseCardLink}>Ver detalhes</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoriaBotao({ label, active, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.filterButton, active && styles.filterButtonActive]}
    >
      <Text style={[styles.filterButtonText, active && styles.filterButtonTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
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
    paddingTop: 5,
    gap: 24,
    
  },
  logo: {
    width: 80,
    height: 80
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B"
  },
  subtitle: {
    color: "#6B7280",
    lineHeight: 20
  },
  filterRow: {
    gap: 12,
    paddingVertical: 4
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF"
  },
  filterButtonActive: {
    backgroundColor: "#3F63D4",
    borderColor: "#3F63D4"
  },
  filterButtonText: {
    color: "#6B7280",
    fontWeight: "600"
  },
  filterButtonTextActive: {
    color: "#fff"
  },
  courseList: {
    gap: 16
  },
  courseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    gap: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  courseCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  courseCardTag: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#1FA37C",
    letterSpacing: 1
  },
  courseCardDuration: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600"
  },
  courseCardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    lineHeight: 22
  },
  courseCardProvider: {
    fontWeight: "600",
    color: "#3F63D4"
  },
  courseCardSummary: {
    color: "#6B7280",
    lineHeight: 18
  },
  courseCardLink: {
    marginTop: 8,
    color: "#3F63D4",
    fontWeight: "600"
  }
});

