import { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

export default function AddChoreModal({ visible, onClose, onAddChore }) {
  const [choreText, setChoreText] = useState("");

  function submitHandler() {
    if (choreText.trim().length === 0) {
      return;
    }
    onAddChore(choreText);
    setChoreText("");
    onClose();
  }

  function cancelHandler() {
    setChoreText("");
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>New Chore</Text>

          <TextInput
            style={styles.input}
            placeholder="e.g. Water the plants"
            value={choreText}
            onChangeText={setChoreText}
          />

          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={cancelHandler}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.addButton]}
              onPress={submitHandler}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15, 36, 57, 0.5)",
    justifyContent: "flex-end",
  },
  modalCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F3A5F",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E1E9F2",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: "#E1E9F2",
  },
  cancelButtonText: {
    color: "#1F3A5F",
    fontWeight: "600",
  },
  addButton: {
    backgroundColor: "#4A7FB0",
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
