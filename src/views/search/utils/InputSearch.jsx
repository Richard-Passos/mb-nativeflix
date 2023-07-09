import { View } from "react-native";
import { Searchbar } from "react-native-paper";

const InputSearch = ({ ph, value, onChange, loading }) => (
  <View style={{ padding: 12 }}>
    <Searchbar
      placeholder={ph}
      value={value}
      onChangeText={onChange}
      loading={loading}
    />
  </View>
);

export default InputSearch;
