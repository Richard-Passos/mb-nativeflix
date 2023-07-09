import { StyleSheet } from "react-native";
import { viewHeight } from "../../utils";

export default StyleSheet.create({
  form: {
    height: viewHeight,

    padding: 32,

    justifyContent: "center",
    gap: 32,
  },
  bgImage: {
    position: "absolute",
    bottom: 0,
    zIndex: -10,
  },
});
