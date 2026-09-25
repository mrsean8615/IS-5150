import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Header from "./components/Header";
import ChoreItem from "./components/ChoreItem";
import AddChoreModal from "./components/AddChoreModal";

export default function App() {
  const [chores, setChores] = useState([
    { id: "1", text: "Take out the trash" },
    { id: "2", text: "Wash the dishes" },
    { id: "3", text: "Feed the cat" },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addChoreHandler(choreText) {
    setChores((currentChores) => [
      ...currentChores,
      { id: Math.random().toString(), text: choreText },
    ]);
  }

  function deleteChoreHandler(id) {
    setChores((currentChores) =>
      currentChores.filter((chore) => chore.id !== id),
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Chore Tracker" />

      <Pressable
        style={styles.newChoreButton}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.newChoreButtonText}>+ Add Chore</Text>
      </Pressable>

      {chores.length === 0 ? (
        <Text style={styles.emptyText}>No chores yet. Add one above!</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={chores}
          renderItem={({ item, index }) => (
            <ChoreItem
              text={item.text}
              id={item.id}
              onDelete={deleteChoreHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}

      <AddChoreModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddChore={addChoreHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#F4F6F8",
  },
  newChoreButton: {
    backgroundColor: "#4A7FB0",
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  newChoreButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#888888",
    marginTop: 24,
    fontSize: 16,
  },
});
