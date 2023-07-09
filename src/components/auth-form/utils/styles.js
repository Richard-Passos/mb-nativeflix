import { StyleSheet } from "react-native";

const space = 18;

export default StyleSheet.create({
  buttons: {
    marginTop: space,

    gap: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  others: {
    marginTop: -space,
    marginBottom: -space * 2,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginVertical: 12,

    fontWeight: "bold",
    textAlign: "center",
  },
});
