import React from 'react';
// import banner from '../images/banner.png';

const Banner = (props) => {
  const { title, desc, image, btnText } = props;
  return (
    <main className="banner">
      <div className="image">
        <img src={image} alt="Loading" />
      </div>
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{desc}</p>
        <button className="banner-btn">{btnText}</button>
      </div>
    </main>
  );
};

export default Banner;
