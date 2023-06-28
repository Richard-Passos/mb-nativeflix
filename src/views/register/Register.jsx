import { AuthForm, Banner, GoBack } from "../../components";

const Register = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <Banner />
      <GoBack />

      <AuthForm
        type={"Register"}
        handleSubmit={handleSubmit}
        navigation={navigation}
      />
    </>
  );
};

export default Register;
