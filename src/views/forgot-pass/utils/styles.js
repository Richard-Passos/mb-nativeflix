import { StyleSheet } from "react-native";
import { viewHeight } from "../../../utils";

export default StyleSheet.create({
  container: {
    height: viewHeight,

    padding: 32,

    justifyContent: "center",
    gap: 32,
  },
  header: {
    position: "absolute",
    top: 0,

    alignItems: "center",
  },
  goBack: {
    position: "absolute",
    top: 20,
    left: 0,
  },
  title: {
    position: "absolute",
    top: 38,

    fontWeight: "bold",
  },
  snackbar: {
    bottom: 16,

    alignSelf: "center",
  },
  subtitle: {
    marginBottom: -16,

    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    marginBottom: -8,

    textAlign: "center",
  },
});
