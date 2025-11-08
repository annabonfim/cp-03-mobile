import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const CATEGORIES = [
  {
    id: "Tecnologia",
    name: "Tecnologia",
    icon: "💻",
    blurb: "Cursos sobre dados, IA e governo digital."
  },
  {
    id: "Saúde",
    name: "Saúde",
    icon: "🩺",
    blurb: "Qualificação para equipes da atenção primária."
  },
  {
    id: "Educação",
    name: "Educação",
    icon: "📚",
    blurb: "Planejamento pedagógico e gestão da aprendizagem."
  },
  {
    id: "Gestão",
    name: "Gestão",
    icon: "📊",
    blurb: "Ferramentas simples de gestão pública e projetos."
  },
  {
    id: "Sustentabilidade",
    name: "Sustentabilidade",
    icon: "🌱",
    blurb: "Boas práticas verdes para cidades e contratos."
  }
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />

        <View style={styles.introCard}>
          <Text style={styles.introLabel}>Bem-vindo</Text>
          <Text style={styles.introTitle}>Encontre cursos públicos gratuitos</Text>
          <Text style={styles.introDescription}>
            Descubra formações rápidas e online para evoluir na sua carreira no
            serviço público.
          </Text>
          <Link href="/(tabs)/cursos" asChild>
            <TouchableOpacity style={styles.introButton}>
              <Text style={styles.introButtonText}>Ver todos os cursos</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.categorySectionTitle}>Explorar por categoria</Text>
        <View style={styles.categoryGrid}>
          {CATEGORIES.map((item) => (
            <Link
              key={item.id}
              href={{ pathname: "/(tabs)/cursos", params: { cat: item.id } }}
              asChild
            >
              <TouchableOpacity style={styles.categoryTile}>
                <Text style={styles.categoryTileIcon}>{item.icon}</Text>
                <Text style={styles.categoryTileTitle}>{item.name}</Text>
                <Text style={styles.categoryTileDescription}>{item.blurb}</Text>
                <Text style={styles.categoryTileLink}>Ver cursos</Text>
              </TouchableOpacity>
            </Link>
          ))}
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
    paddingTop: 8,
    paddingBottom: 48,
    gap: 24
  },
  logoImage: {
    width: 80,
    height: 80
  },
  introCard: {
    backgroundColor: "#E8F0FF",
    borderRadius: 24,
    padding: 24,
    gap: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  introLabel: {
    color: "#3F63D4",
    fontWeight: "600",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    fontSize: 12
  },
  introTitle: {
    fontSize: 24,
    color: "#1E293B",
    fontWeight: "700",
    lineHeight: 30
  },
  introDescription: {
    color: "#6B7280",
    lineHeight: 20
  },
  introButton: {
    marginTop: 8,
    backgroundColor: "#3F63D4",
    paddingVertical: 12,
    borderRadius: 16
  },
  introButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600"
  },
  categorySectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E293B"
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16
  },
  categoryTile: {
    flexBasis: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    gap: 8,
    minHeight: 150,
    borderWidth: 1,
    borderColor: "#E2E8F0"
  },
  categoryTileIcon: {
    fontSize: 28
  },
  categoryTileTitle: {
    fontWeight: "700",
    color: "#1E293B"
  },
  categoryTileDescription: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 18,
    flex: 1
  },
  categoryTileLink: {
    marginTop: 8,
    color: "#1FA37C",
    fontWeight: "600"
  }
});

