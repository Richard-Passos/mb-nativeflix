import { StyleSheet } from "react-native";
import { viewWidth, viewHeight } from "../../../utils";

export default StyleSheet.create({
  image: {
    width: viewWidth,
    height: viewWidth,
  },
  infoCon: {
    minHeight: viewHeight * 1.1 - viewWidth,

    marginTop: -viewHeight * 0.1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 32,

    gap: 20,
  },
  carousel: {
    marginTop: -32,
    marginHorizontal: 0,
  },
  cardCon: {
    width: 125,
    height: 150,

    marginBottom: 12,
    borderRadius: 16,
    padding: 20,

    justifyContent: "space-between",
  },
  modal: {
    width: viewWidth * 0.95,

    alignSelf: "center",
  },
});
