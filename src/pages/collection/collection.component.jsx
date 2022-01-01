import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  return (
    <div className="collection-page">
      <h3>CollectionPage Page! for {collection.title}</h3>
    </div>
  );
};

export default CollectionPage;
