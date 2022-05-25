import { Pressable, StyleSheet, Text, View } from "react-native";

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Menu</Text> */}
      <View style={styles.options}>
        <Pressable onPress={() => navigation.navigate("Incomes")}>
          <View style={styles.option}>
            <Text style={styles.text}>Incomes</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Outgoings")}>
          <View style={styles.option}>
            <Text style={styles.text}>Outgoings</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Graphs")}>
          <View style={styles.option}>
            <Text style={styles.text}>Graphs</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2E43",
  },
  header: {
    fontWeight: "bold",
    color: "#f8f8f8",
    fontSize: 30,
    marginTop: 20,
    marginLeft: 60,
  },
  options: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 50,
  },
  option: {
    backgroundColor: "#aba9ad",
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: {
    fontWeight: "bold",
    color: "#1F2E43",
    fontSize: 24,
  },
});
