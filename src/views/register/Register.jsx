import { register } from "../../assets/api";
import { GoBack, AuthForm } from "../../components";

const Register = () => {
  const handleSubmit = (email, password, name, _, clearInputs, setError) =>
    register(email, password, name)
      .then(clearInputs)
      .catch((err) => setError(getError(err.code, name)));

  return (
    <>
      <GoBack />

      <AuthForm type="register" handleSubmit={handleSubmit} />
    </>
  );
};

const getError = (code, name) => {
  code = code.replace(/auth./, "");

  let error = { input: "", message: code };

  if (!name) error = { input: "name", message: "Invalid name" };
  else if (code.match(/email/)) error.input = "email";
  else if (code.match(/password/)) error.input = "password";

  return error;
};

export default Register;
