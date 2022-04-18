import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CollectionContainer, CollectionItemsContainer, CollectionTitleContainer } from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitleContainer>{title}</CollectionTitleContainer>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

export default CollectionPage;
