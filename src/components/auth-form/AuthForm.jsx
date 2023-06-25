/* Logic */
import { useState, useRef } from "react";

/* Components */
import {
  Container,
  Welcome,
  Text,
  FormRow,
  ExtraOptions,
  Submit,
  Footer,
} from "./styles";
import Label from "../label";
import Input from "../input";
import Checkbox from "../checkbox";
import Link from "../link";

const AuthForm = ({ type, handleRememberMe, handleSubmit }) => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const refName = useRef(),
    refEmail = useRef(),
    refPassword = useRef();

  const isLoginType = type === "Login",
    oppositeType = isLoginType ? "Register" : "Login";

  const formRow = (type, placeholder) => {
    /* Creating a variable name */
    const createVarName = (str) => eval(str + type);

    return (
      <FormRow>
        <Label forRef={createVarName("ref")}>{type}:</Label>

        <Input
          reactRef={createVarName("ref")}
          placeholder={placeholder}
          onChange={createVarName("set")}
          isPassword={type === "Password"}
        />
      </FormRow>
    );
  };

  return (
    <Container>
      <Welcome>Welcome{isLoginType ? " back" : ""}!</Welcome>
      <Text>{type} your account!</Text>

      {!isLoginType && formRow("Name", "John Doe")}

      {formRow("Email", "example@email.com")}

      {formRow("Password", "********")}

      {isLoginType && (
        <ExtraOptions>
          <Checkbox onPress={handleRememberMe}>Remember me</Checkbox>

          <Link view="ForgotPassword">Forgot password?</Link>
        </ExtraOptions>
      )}

      <Submit onPress={() => handleSubmit(email, password, name)}>
        {type}
      </Submit>

      <Footer>
        <Text>
          {isLoginType ? "Already registered?" : "Don't have an account?"}{" "}
          <Link view={oppositeType}>{`${oppositeType}!`}</Link>
        </Text>
      </Footer>
    </Container>
  );
};

export default AuthForm;
