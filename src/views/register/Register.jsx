/* Components */
import { AuthForm, Banner } from "../../components";

const Register = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <Banner />

      <AuthForm
        type={"Register"}
        handleSubmit={handleSubmit}
        navigation={navigation}
      />
    </>
  );
};

export default Register;
