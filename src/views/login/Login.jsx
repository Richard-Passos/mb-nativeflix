/* Components */
import { Banner, AuthForm } from "../../components";

const Login = ({ navigation }) => {
  const handleRememberMe = () => {
    console.log("Remember me - working");
  };

  const handleForgotPass = () => {
    console.log("Forgot password - working");
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
        handleForgotPass={handleForgotPass}
        handleSubmit={handleSubmit}
        navigation={navigation}
      />
    </>
  );
};

export default Login;
