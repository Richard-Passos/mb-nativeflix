import { useState } from "react";
import { Container } from "./styles";
import { Title, Row, Others, Buttons, Footer } from "./utils";

const AuthForm = ({ type, handleRememberMe, handleSubmit }) => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const isLoginType = type === "Login",
    opstType = isLoginType ? "Register" : "Login";

  return (
    <Container>
      <Title>{type}</Title>

      {!isLoginType && (
        <Row type="Name" setState={setName} placeholder="John Doe" />
      )}

      <Row type="Email" setState={setEmail} placeholder="example@email.com" />

      <Row type="Password" setState={setPassword} placeholder="••••••••" />

      {isLoginType && <Others handleRememberMe={handleRememberMe} />}

      <Buttons
        handleSubmit={handleSubmit}
        states={[email, password, name]}
        type={type}
      />

      <Footer isLoginType={isLoginType} opstType={opstType} />
    </Container>
  );
};

export default AuthForm;
