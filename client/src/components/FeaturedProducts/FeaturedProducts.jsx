import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeatureProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius delectus
          totam quo distinctio, cum ab, ipsa quasi, nam unde maxime numquam iure
          non nulla nostrum dolorum laborum voluptatibus mollitia recusandae.
        </p>
      </div>
      <div className='bottom'>
        {error ? (
          <div className='error'>
            <p>Something went wrong, try again!</p>
          </div>
        ) : loading ? (
          <div className='loading'>
            <img src='/img/spinner.gif' alt='' />
          </div>
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
