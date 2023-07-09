import { StyleSheet } from "react-native";
import { viewWidth } from "../../../utils";

export default StyleSheet.create({
  container: {
    width: viewWidth * 0.35,
    height: viewWidth * 0.5,

    marginLeft: 16,
    borderRadius: 16,

    bottom: 8,

    justifyContent: "center",
    alignItems: "center",
  },
});
