import { PaperProvider } from "react-native-paper";
import { Layout } from "./src/components";
import Router from "./src/routes";
import { darkTheme } from "./themes";

const App = () => (
  <PaperProvider theme={darkTheme}>
    <Layout>
      <Router />
    </Layout>
  </PaperProvider>
);

/* Creating capitalize function to strings */
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

export default App;
