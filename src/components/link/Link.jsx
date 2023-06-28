import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./styles";

const Link = ({ view, params = {}, children, secondary, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(view, params)}>
      {typeof children === "string" ? (
        <Text secondary={secondary} style={style}>
          {children}
        </Text>
      ) : (
        <View style={style}>{children}</View>
      )}
    </TouchableOpacity>
  );
};

export default Link;
