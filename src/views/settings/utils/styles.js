import { StyleSheet } from "react-native";
import { viewWidth } from "../../../utils";

export default StyleSheet.create({
  buttons: {
    alignSelf: "center",
    flexDirection: "row",
    gap: 16,
  },
  modal: {
    width: viewWidth * 0.75,

    borderRadius: 16,
    padding: 24,

    alignSelf: "center",
    gap: 24,
  },
  modalBtns: {
    alignSelf: "flex-end",
    flexDirection: "row",
    gap: 16,
  },
});
