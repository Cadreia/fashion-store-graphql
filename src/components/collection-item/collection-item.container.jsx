import { Mutation } from "react-apollo";
import { ADD_ITEM_TO_CART } from "../../graphql/queries";
import CollectionItem from "./collection-item.component";

const CollectionItemContainer = ({ item }) => (
  <Mutation mutation={ADD_ITEM_TO_CART} variables={{item}}>
    {(addItemToCart) => <CollectionItem addItem={addItemToCart} item={item} />}
  </Mutation>
);

export default CollectionItemContainer;
