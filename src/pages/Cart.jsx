import React from 'react';
import image from '../images/avatar4.png';

const cartData = [
  {
    id: '1',
    productName: 'Reebok Panda',
    productId: 'EFGEUF787845',
    productPrice: '12,999 INR',
  },
  {
    id: '2',
    productName: 'Reebok Panda',
    productId: 'EFGEUF787845',
    productPrice: '12,999 INR',
  },
  {
    id: '3',
    productName: 'Reebok Panda',
    productId: 'EFGEUF787845',
    productPrice: '12,999 INR',
  },
  {
    id: '4',
    productName: 'Reebok Panda',
    productId: 'EFGEUF787845',
    productPrice: '12,999 INR',
  },
];
const Cart = () => {
  return (
    <>
      <main className="cart-wrapper">
        <section className="cart-container">
          <div className="table-head">
            <span>Item</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
          </div>
          <hr />

          {cartData.map((item) => {
            const { productName, productId, productPrice, id } = item;
            return (
              <div className="table-body" key={id}>
                <div className="item-name">
                  <img src={image} alt="" />
                  <span className="name-span">
                    <p>{productName}</p>
                    <span>{productId}</span>
                  </span>
                </div>

                <div>
                  <button> - </button>{' '}
                  <span className="qty">
                    {' '}
                    {''} 1 {''}{' '}
                  </span>{' '}
                  <button> + </button>
                </div>
                <div>{productPrice}</div>
                <div>
                  <button>Delete</button>
                </div>
              </div>
            );
          })}

          {/* Table Footer */}
          <div className="table-body table-footer">
            <div className="item-name">
              {/* <img src={image} alt="" /> */}
              <span>
                {/* <p>Product name</p> */}
                {/* <span>ECBAC74785</span> */}
              </span>
            </div>

            <div>
              {/* <button> - </button> <span> 1</span> <button> + </button> */}
            </div>
            <div>SubTotal : 19000 INR </div>
            <div>
              <button className="">Checkout</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
