import DynamicStackNavigator from "./src/navigator/stack/DynamicStackNavigator";
import StaticStackNavigator from "./src/navigator/stack/StaticStackNavigator";
import StackAndTabCom from "./src/navigator/StackAndTabCom";
import DynamicTabNavigator from "./src/navigator/tabs/DynamicTabNavigator";
import StaticTabNavigator from "./src/navigator/tabs/StaticTabNavigator";
import TopTabNavigator from "./src/navigator/tabs/TopTabNavigator";

export default function App() {
  return <TopTabNavigator />;
}
