import { View, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function PackingInput(props) {
  const [enteredPackingText, setEnteredPackingText] = useState("");
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      marginRight: 8,
      padding: 8,
      borderRadius: 6,
      color: theme.text,
    },
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
  });

  function packingInputHandler(enteredText) {
    setEnteredPackingText(enteredText);
  }

  function addPackingItemHandler() {
    props.onAddPackingItem(enteredPackingText);
    setEnteredPackingText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="My packing items"
        onChangeText={packingInputHandler}
        value={enteredPackingText}
      />
      <Button title="Add Item" onPress={addPackingItemHandler} />
    </View>
  );
}

export default PackingInput;
