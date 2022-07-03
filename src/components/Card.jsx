import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

const Card = (props) => {
  const {
    id,
    cardImage,
    cardTitle,
    cardDesc,
    cardBtn,
    handleClick,
    qty,
    price,
    cost,
  } = props;

  const [quantity, setQuantity] = useState(1);
  return (
    <section className="card">
      <div className="card-img">
        <img src={cardImage} alt="musical instruments" />
      </div>
      <div className="card-title">
        <h4>{cardTitle}</h4>
      </div>
      <div className="card-desc">
        <p>{cardDesc}</p>
      </div>
      {/* <div><Button variant="primary">add to cart</Button></div> */}
      {price === 'yes' ? (
        <div>
          <h5>Price : {cost * quantity}/-</h5>
        </div>
      ) : (
        ''
      )}
      <div className="card-btn">
        {qty === 'yes' ? (
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option key={i} value={i + 1}>
                  {' '}
                  {i + 1}
                </option>
              );
            })}
          </select>
        ) : (
          ''
        )}
        <button className="card-Btn" onClick={() => handleClick(id)}>
          {cardBtn}
        </button>
      </div>
    </section>
  );
};

export default Card;
