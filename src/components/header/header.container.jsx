import { Query } from "react-apollo";
import { GET_CART_HIDDEN } from "../../graphql/resolvers";
import Header from "./header.component";

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
  </Query>
);

export default HeaderContainer;
