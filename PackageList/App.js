import { useState } from "react";
import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";

// Components
import PackingItem from "./components/PackingItem";
import PackingInput from "./components/PackingInput";
import Header from "./components/Header";

// Context
import { ThemeProvider, useTheme } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// needed to wrap the content for the context to work properly
function AppContent() {
  const [packingItems, setPackingItems] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const { theme } = useTheme();

  function addPackingItemHandler(enteredPackingText) {
    setPackingItems((currentPackingItems) => [
      ...currentPackingItems,
      { id: Math.random().toString(), text: enteredPackingText },
    ]);
  }

  function deletePackingItemHandler(id) {
    setPackingItems((currentPackingItems) => {
      return currentPackingItems.filter((item) => item.id !== id);
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <Header />
      <View style={styles.appContainer}>
        <Pressable
          style={styles.addItemButton}
          onPress={() => setModalIsVisible(true)}
        >
          <Text style={styles.addItemButtonText}>Add Item</Text>
        </Pressable>
        <PackingInput
          visible={modalIsVisible}
          onCancel={() => setModalIsVisible(false)}
          onAddPackingItem={addPackingItemHandler}
        />
        <View style={styles.packingContainer}>
          {packingItems.length === 0 ? (
            <Text style={{ color: theme.text }}>
              No packing items added yet.
            </Text>
          ) : (
            <FlatList
              data={packingItems}
              renderItem={(itemData) => {
                return (
                  <PackingItem
                    id={itemData.item.id}
                    text={itemData.item.text}
                    onDelete={deletePackingItemHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  packingContainer: {
    flex: 5,
    padding: 5,
  },
  addItemButton: {
    backgroundColor: "#D9A441",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  addItemButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
