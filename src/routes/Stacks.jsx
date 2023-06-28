/* Logic */
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Components */
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  Login,
  Register,
  Details,
  Search,
  Pagination,
  Favorites,
} from "../views";

const Stack = createNativeStackNavigator();

const views = [Register, Home, Login, Details, Search, Pagination, Favorites];

const Stacks = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {views.map((comp) => (
        <Stack.Screen
          key={comp.name}
          component={comp}
          name={comp.name}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Stacks;
