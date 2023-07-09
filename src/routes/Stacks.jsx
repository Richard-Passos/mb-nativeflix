import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import BottomTabs from "./BottomTabs";
import { Login, Register, ForgotPass, Details, Pagination } from "../views";

const Stack = createNativeStackNavigator();

const withUserViews = [BottomTabs, Details, Pagination];
const noUserViews = [Login, Register, ForgotPass];

const Stacks = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (currentUser) => setUser(currentUser));
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {(user ? withUserViews : noUserViews).map(createView)}
    </Stack.Navigator>
  );
};

const createView = (comp) => (
  <Stack.Screen key={comp.name} component={comp} name={comp.name} />
);

export default Stacks;
