import React from 'react';
import Card from '../components/Card';
import { ProductsData } from '../Data';
import categoryImg2 from '../images/cricket.png';

const Products = () => {
  const handleClick = (id) => {
    alert(id);
  };
  return (
    <main className="featured">
      <h2 className="featured-heading">Featured Products</h2>
      <div className="featured">
        {ProductsData.map((item) => {
          const { id, categoryImg1, cardTitle, cardDesc, cardBtn, cost } = item;
          return (
            <Card
              key={id}
              id={id}
              cardImage={categoryImg2}
              cardTitle={cardTitle}
              cardDesc={cardDesc}
              cardBtn={'Add To Cart'}
              handleClick={handleClick}
              qty={'yes'}
              price={'yes'}
              cost={cost}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Products;
