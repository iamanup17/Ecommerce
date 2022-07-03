import React from 'react';

const TestimonialCard = (props) => {
  const { name, image, message, post, imgData } = props;

  return (
    <section className="card testimonial-card">
      <div className="card-img">
        <img src={image} alt={imgData} />
      </div>

      <div className="card-desc">
        <p>
          <strong>❝</strong>
          {message}
          <br />
          <strong>❞</strong>
        </p>
      </div>

      <h4>{name}</h4>
      <p>{post}</p>
    </section>
  );
};

export default TestimonialCard;
