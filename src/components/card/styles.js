import { StyleSheet } from "react-native";
import { viewWidth } from "../../utils";

export default StyleSheet.create({
  container: {
    marginBottom: 8,

    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: viewWidth * 0.35,
    height: viewWidth * 0.5,

    borderWidth: 1,
    borderRadius: 16,
  },
});
