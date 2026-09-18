import { View, Text, StyleSheet, Pressable } from "react-native";

function PackingItem(props) {
  function deleteItemHandler() {
    props.onDelete(props.id);
  }
  return (
    <Pressable onPress={deleteItemHandler}>
      <View style={styles.packingItem}>
        <Text style={styles.packingText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  packingItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#1E4078",
  },
  packingText: {
    color: "white",
  },
});

export default PackingItem;
