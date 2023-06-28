import { ViewAll as Container } from "./styles";
import Link from "../../link";

const ViewAll = ({ params }) => (
  <Container>
    <Link view={"Pagination"} params={params} secondary>
      View all
    </Link>
  </Container>
);

export default ViewAll;
