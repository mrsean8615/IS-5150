import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ChoreItem({ id, text, onDelete }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <View style={[styles.item, isDone && styles.itemDone]}>
      <Pressable
        style={styles.textArea}
        onPress={() => setIsDone((current) => !current)}
      >
        <View style={styles.textRow}>
          {isDone && <Text style={styles.checkmark}>{"✓ "}</Text>}
          <Text>{text}</Text>
        </View>
      </Pressable>

      <Pressable style={styles.deleteButton} onPress={() => onDelete(id)}>
        <Text style={styles.deleteButtonText}>{"✕"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E1E9F2",
  },
  itemDone: {
    backgroundColor: "#E7EFF7",
  },
  textArea: {
    flex: 1,
  },
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkmark: {
    fontSize: 16,
    color: "#4A7FB0",
    fontWeight: "bold",
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  deleteButtonText: {
    fontSize: 16,
    color: "#B0413E",
  },
});
