/* Logic */
import { useState, useRef } from "react";

/* Components */
import {
  Container,
  Title,
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

  return (
    <Container>
      <Title>{type}</Title>

      {!isLoginType && formRow(refName, "Name", setName, "John Doe")}

      {formRow(refEmail, "Email", setEmail, "example@email.com")}

      {formRow(refPassword, "Password", setPassword, "********")}

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
          {isLoginType ? "Don't have an account? " : "Already registered? "}
        </Text>

        <Link view={oppositeType}>{`${oppositeType}!`}</Link>
      </Footer>
    </Container>
  );
};

const formRow = (ref, type, setState, placeholder) => {
  return (
    <FormRow>
      <Label forRef={ref}>{type}:</Label>

      <Input
        reactRef={ref}
        placeholder={placeholder}
        setState={setState}
        isPassword={type === "Password"}
      />
    </FormRow>
  );
};

export default AuthForm;
