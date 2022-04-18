import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";
import CollectionPage from "./collection.component";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = () => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: useParams().collectionId }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      const { getCollectionsByTitle } = data;
      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
  </Query>
);
export default CollectionPageContainer;
