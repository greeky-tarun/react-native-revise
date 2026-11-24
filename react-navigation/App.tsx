import DynamicStackNavigator from "./src/navigator/stack/DynamicStackNavigator";
import StaticStackNavigator from "./src/navigator/stack/StaticStackNavigator";
import DynamicTabNavigator from "./src/navigator/tabs/DynamicTabNavigator";
import StaticTabNavigator from "./src/navigator/tabs/StaticTabNavigator";

export default function App() {
  return <DynamicTabNavigator />;
}
