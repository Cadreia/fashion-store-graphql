import React from "react";
import { AddButton, CollectionFooterContainer, CollectionItemContainer, ImageContainer } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">{price} CFA</span>
      </CollectionFooterContainer>
      <AddButton className="custom-button" onClick={() => addItem(item)}>Add to Cart</AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
