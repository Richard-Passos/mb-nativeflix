import { withTheme } from "react-native-paper";
import { View } from "react-native";
import Link from "../../link";
import styles from "./styles";

const ViewAll = ({ theme, params }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.backgroundVariant,
      }}
    >
      <Link view="Pagination" params={params} secondary>
        View all
      </Link>
    </View>
  );
};

export default withTheme(ViewAll);
