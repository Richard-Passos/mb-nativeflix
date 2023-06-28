import { useRef } from "react";
import { Row as Container } from "./styles";
import Label from "../../label";
import Input from "../../input";

const Row = ({ type, setState, placeholder }) => {
  const refRow = useRef();

  return (
    <Container>
      <Label forRef={refRow}>{type}</Label>

      <Input
        reactRef={refRow}
        setState={setState}
        placeholder={placeholder}
        isPassword={type === "Password"}
      />
    </Container>
  );
};

export default Row;
