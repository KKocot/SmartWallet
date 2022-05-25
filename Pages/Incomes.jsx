import {
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function Incomes({}) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.backBtn}>
        <Image source={require("../img/arrow.png")} />
        <Text style={styles.header}>Incomes</Text>
      </View> */}
      <ScrollView>
        <TextInput style={styles.input} placeholder="Amount" />
        <View style={styles.options}>
          <View style={styles.option}>
            <Text style={styles.text}>Work</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.text}>investments</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.text}>Another</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.text}>Add</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2E43",
  },
  // backBtn: {
  //   marginTop: 20,
  //   marginLeft: 60,
  // },
  header: {
    fontWeight: "bold",
    color: "#f8f8f8",
    fontSize: 30,
  },
  options: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    backgroundColor: "#ABA9AD",
    width: 170,
    height: 45,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#1F2E43", fontSize: 24 },
  input: {
    backgroundColor: "#ABA9AD",
    color: "#FCFBFF",
    width: "80%",
    height: 50,
    fontSize: 20,
    borderRadius: 5,
    margin: 30,
    padding: 5,
    alignSelf: "center",
  },
});
