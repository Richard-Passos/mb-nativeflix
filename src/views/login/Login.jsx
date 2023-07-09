import { login } from "../../assets/api";
import { AuthForm } from "../../components";

const Login = () => {
  const handleSubmit = (email, password, _, persist, clearInputs, setError) =>
    login(persist, email, password)
      .then(clearInputs)
      .catch((err) => setError(getError(err.code)));

  return <AuthForm type="login" handleSubmit={handleSubmit} />;
};

const getError = (code) => {
  code = code.replace(/auth./, "");
  code = code.replace(/user/, "email");

  let error = { input: "", message: code };

  if (code === "invalid-email" || code === "email-not-found")
    error.input = "email";
  else error.input = "password";

  return error;
};

export default Login;
