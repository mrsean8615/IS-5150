import {
  View,
  Pressable,
  TextInput,
  Text,
  StyleSheet,
  Modal,
} from "react-native";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function PackingInput(props) {
  const [enteredPackingText, setEnteredPackingText] = useState("");
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    inputContainer: {
      width: "85%",
      padding: 20,
      borderRadius: 10,
      backgroundColor: theme.card,
    },
    textInput: {
      width: "100%",
      maxWidth: 400,
      backgroundColor: theme.background,
      color: theme.text,
      borderWidth: 1,
      borderColor: "#526A8F",
      borderRadius: 8,
      paddingHorizontal: 15,
      paddingVertical: 12,
      fontSize: 16,
      marginBottom: 12,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  });

  function packingInputHandler(enteredText) {
    setEnteredPackingText(enteredText);
  }

  function onCancel() {
    props.onCancel(false);
    setEnteredPackingText("");
  }
  function onSave() {
    props.onAddPackingItem(enteredPackingText);
    onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="fade" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="My packing items"
            placeholderTextColor={theme.placeholder}
            onChangeText={packingInputHandler}
            value={enteredPackingText}
          />

          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={onCancel}
              style={[
                buttonStyles.addItemButton,
                { backgroundColor: "#B84C4C" },
              ]}
            >
              <Text style={buttonStyles.addItemButtonText}>Cancel</Text>
            </Pressable>

            <Pressable onPress={onSave} style={buttonStyles.addItemButton}>
              <Text style={buttonStyles.addItemButtonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const buttonStyles = StyleSheet.create({
  addItemButton: {
    backgroundColor: "#4F8A5B",
    color: "#ffffff",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
  },
  addItemButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default PackingInput;
