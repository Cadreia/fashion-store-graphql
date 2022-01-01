import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  let params = useParams();
  return (
    <div className="collection-page">
      <h3>Category Page! for {params.categoryId}</h3>
    </div>
  );
};

export default CategoryPage;
