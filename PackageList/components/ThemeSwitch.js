import { Switch, View, Text } from "react-native";
import { useTheme } from "../context/ThemeContext";

function ThemeSwitch() {
  const { theme, darkMode, toggleTheme } = useTheme();
  return (
    <View>
      <Text style={{ color: "white" }}>Dark Mode</Text>
      <Switch value={darkMode} onValueChange={toggleTheme}></Switch>
    </View>
  );
}

export default ThemeSwitch;
