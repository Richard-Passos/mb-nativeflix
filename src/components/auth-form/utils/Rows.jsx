import { View } from "react-native";
import Input from "../../input";

const rows = [
  { type: "name", ph: "John", icon: "account" },
  { type: "email", ph: "user@example.com", icon: "email" },
  { type: "password", ph: "••••••••", icon: "lock" },
];

const Rows = ({ formType, states, sets, error }) => (
  <View style={{ gap: 28 }}>
    {rows.map(({ type, ph, icon }, i) =>
      type === "name" && formType !== "register" ? null : (
        <Row
          key={type + ph}
          type={type}
          iconName={icon}
          value={states[i]}
          setValue={sets[i]}
          ph={ph}
          error={error}
          formType={formType}
        />
      )
    )}
  </View>
);

const Row = ({ type, iconName, value, setValue, ph, error, formType }) => (
  <Input
    type={type}
    iconName={iconName}
    value={value}
    setValue={setValue}
    ph={ph}
    error={error}
    progBar={formType === "register" && type === "password"}
  />
);

export default Rows;
