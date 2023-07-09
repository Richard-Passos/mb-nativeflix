import { useState, useEffect } from "react";
import { resetPassword } from "../../assets/api";
import { Container, Header, Text, Snackbar } from "./utils";
import { Input } from "../../components";
import { Button } from "react-native-paper";

const ForgotPass = () => {
  const [email, setEmail] = useState(""),
    [error, setError] = useState({ input: "", message: "" }),
    [emailSent, setEmailSent] = useState(false);

  const handleSubmit = () =>
    resetPassword(email)
      .then(() => setEmailSent(true))
      .catch((err) => setError(getError(err.code)));

  useEffect(() => {
    setError({ input: "", message: "" });
  }, [email]);

  return (
    <Container>
      <Header />

      <Text />

      <Input
        type="email"
        iconName="email"
        value={email}
        setValue={setEmail}
        ph="user@example.com"
        error={error}
      />

      <Button mode="contained" onPress={handleSubmit}>
        Send email
      </Button>

      <Snackbar
        visible={emailSent}
        onDismiss={() => setEmailSent(false)}
        text="Email sent!"
      />
    </Container>
  );
};

const getError = (code) => {
  code = code.replace(/auth./, "");
  code = code.replace(/user/, "email");

  return { input: "email", message: code };
};

export default ForgotPass;
