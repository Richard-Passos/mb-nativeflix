import { Banner, AuthForm } from "../../components";

const Login = ({ navigation }) => {
  const handleRememberMe = () => {
    console.log("Remember me - working");
  };

  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <Banner />

      <AuthForm
        type={"Login"}
        handleRememberMe={handleRememberMe}
        handleSubmit={handleSubmit}
        navigation={navigation}
      />
    </>
  );
};

export default Login;
