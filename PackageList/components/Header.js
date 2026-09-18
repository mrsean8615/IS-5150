import { View, Text, StyleSheet } from "react-native";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Package List</Text>
      <ThemeSwitch />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#526A8F",
    padding: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default Header;
