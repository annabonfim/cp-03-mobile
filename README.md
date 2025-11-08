# Educa+

Aplicativo desenvolvido para o Checkpoint 3 da disciplina de Mobile. O objetivo é oferecer um serviço público de descoberta de cursos gratuitos, organizado por categorias e com cadastro local de inscrições.

## Equipe

- Anna Bonfim
- Felipe Anselmo

## Requisitos atendidos

- ✅ Mínimo de **3 telas** (Início, Lista de Cursos, Detalhes, Minhas Inscrições, Integrantes — a tela de Integrantes mostra nome e foto da equipe).
- ✅ Transição entre telas usando `Stack`/`Tabs` do Expo Router com animação `slide_from_right`.
- ✅ Navegação configurada com **Expo Router** (`app/_layout.jsx` e `app/(tabs)`).
- ✅ Tema alinhado a **Serviços Públicos** (educação e qualificação profissional).
- ✅ Espaço reservado para **vídeo demonstrativo** (ver seção abaixo).
- ✅ Repositório compartilhado com README contendo os **nomes dos integrantes**.

## Funcionalidades principais

- Tela inicial com destaque para o serviço e atalhos para categorias.
- Filtro por categoria e exibição dos cursos com órgão ofertante, descrição e carga horária.
- Tela de detalhes com botão "Salvar inscrição" (AsyncStorage) e atalho para a lista de inscrições.
- Aba "Minhas inscrições" que carrega e limpa os cursos salvos localmente.
- Aba "Integrantes" com foto e identificação da equipe.

## Tecnologias

- Expo Router (Expo managed workflow)
- React Native 0.81 / Expo 54
- AsyncStorage para persistir inscrições

## Como executar

```bash
npm install
npx expo start
```

Use `--android`, `--ios` ou `--web` para abrir diretamente no emulador desejado.

## Vídeo de demonstração

[Vídeo de demonstração](https://youtube.com/shorts/yTjnSRIlg0E?feature=share)

---

Projeto desenvolvido por Anna Bonfim e Felipe Anselmo para fins acadêmicos.
