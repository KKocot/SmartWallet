import {
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function Outgoings() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.backBtn}>
        <Image source={require("../img/arrow.png")} />
        <Text style={styles.header}>Outgoings</Text>
      </View> */}
      <TextInput style={styles.input} placeholder="Amount" />
      <ScrollView>
        <View style={styles.options}>
          <View>
            <View style={styles.option}>
              <Text style={styles.title}>Home</Text>
            </View>
            <Text>Bills</Text>
            <Text>Pets</Text>
            <Text>Another</Text>
            <Text>Add</Text>
          </View>
          <View>
            <View style={styles.option}>
              <Text style={styles.title}>Work-related </Text>
            </View>
            <Text>Work</Text>
            <Text>Self-development</Text>
            <Text>Add</Text>
          </View>
          <View>
            <View style={styles.option}>
              <Text style={styles.title}>Food</Text>
            </View>
            <Text>Home made</Text>
            <Text>Fast Food</Text>
            <Text>Snacks</Text>
            <Text>Another</Text>
            <Text>Add</Text>
          </View>
          <View>
            <View style={styles.option}>
              <Text style={styles.title}>Pleasure</Text>
            </View>
            <Text>Hobby</Text>
            <Text>Subscriptions</Text>
            <Text>Holidays</Text>
            <Text>Another</Text>
            <Text>Add</Text>
          </View>
          <View>
            <View style={styles.option}>
              <Text style={styles.title}>Another</Text>
            </View>
            <Text>Family</Text>
            <Text>Another</Text>
            <Text>Add</Text>
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
  backBtn: {
    marginTop: 20,
    marginLeft: 60,
  },
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
  title: { color: "#1F2E43", fontSize: 24 },
  input: {
    backgroundColor: "#ABA9AD",
    width: "80%",
    height: 50,
    fontSize: 20,
    borderRadius: 5,
    margin: 30,
    padding: 5,
    color: "#1F2E43",
    alignSelf: "center",
  },
});
