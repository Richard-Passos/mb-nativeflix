import { useNavigation } from "@react-navigation/native";
import { withTheme, Text } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";

const Link = (props) => {
  const { view, params, children, secondary, theme, style } = props;

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(view, params)}>
      {typeof children === "string" ? (
        <Text
          style={{
            ...(secondary
              ? { fontWeight: "bold" }
              : { color: theme.colors.primary }),
            ...style,
          }}
        >
          {children}
        </Text>
      ) : (
        <View>{children}</View>
      )}
    </TouchableOpacity>
  );
};

export default withTheme(Link);
