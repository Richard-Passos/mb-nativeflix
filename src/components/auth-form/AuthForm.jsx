import { useState, useEffect } from "react";
import { withTheme } from "react-native-paper";
import { View } from "react-native";
import { Title, Rows, Others, Buttons, Footer } from "./utils";
import WavesSvg from "../../assets/images/waves.svg";
import styles from "./styles";
import { viewWidth, viewHeight } from "../../utils";

const AuthForm = ({ theme, type, handleSubmit }) => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [persistUser, setPersistUser] = useState(false),
    [error, setError] = useState({ input: "", message: "" });

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    setError({ input: "", message: "" });
  }, [name, email, password]);

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.form}>
        <Title>{type}</Title>

        <Rows
          formType={type}
          states={[name, email, password]}
          sets={[setName, setEmail, setPassword]}
          error={error}
        />

        {type === "login" && (
          <Others checked={persistUser} setChecked={setPersistUser} />
        )}

        <Buttons
          handleSubmit={handleSubmit}
          states={[email, password, name]}
          auxSubmit={[persistUser, clearInputs, setError]}
          formType={type}
        />

        <Footer formType={type} />
      </View>

      <View style={styles.bgImage}>
        <WavesSvg width={viewWidth} height={viewHeight * 0.7} />
      </View>
    </View>
  );
};

export default withTheme(AuthForm);
