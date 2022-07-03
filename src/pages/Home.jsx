import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import banner1 from '../images/banner.png';
import banner2 from '../images/banner2.png';
import categoryImg1 from '../images/guitar.png';
import categoryImg2 from '../images/cricket.png';
import categoryImg3 from '../images/gym1.png';
import categoryImg4 from '../images/gym2.png';
import avatar from '../images/avatar2.png';
import { CategoriesData, ProductsData, testimonialData } from '../Data';
import TestimonialCard from '../components/TestimonialCard';
const bannerTitle1 = 'Swatches';
const bannerDesc1 =
  'Don’t have enough time to make your own gradients? Looking for a supply of popular gradients you can use for your projects? Our swatch collection features.';
const bannerBtnText1 = 'Know More';

const bannerTitle2 = 'Specials';
const bannerDesc2 =
  'We have some special edition shoes crafted for your trendy and special requirements';
const bannerBtnText2 = 'Explore Collection';

// handle click coming from card component where we are sending an id of the individual product
const handleClick = (id) => {
  alert(id);
};

const Home = () => {
  return (
    <>
      {/***************************************************************** BANNER *****************************************************************/}
      <Banner
        image={banner1}
        title={bannerTitle1}
        desc={bannerDesc1}
        btnText={bannerBtnText1}
      />

      {/***************************************************************** BANNER *****************************************************************/}

      {/************************************************************* FEATURED CATEGORIES *************************************************************/}

      <main className="featured">
        <h2 className="featured-heading">Featured Categories</h2>
        <div className="featured">
          {CategoriesData.map((item) => {
            const { id, categoryImg1, cardTitle, cardDesc, cardBtn } = item;
            return (
              <Card
                key={id}
                cardImage={categoryImg2}
                cardTitle={cardTitle}
                cardDesc={cardDesc}
                cardBtn={cardBtn}
                qty={'no'}
                price={'no'}
              />
            );
          })}
        </div>
      </main>

      {/************************************************************* FEATURED CATEGORIES *************************************************************/}

      {/********************************************************** FEATURED PRODUCTS  **********************************************************/}
      <main className="featured">
        <h2 className="featured-heading">Featured Products</h2>
        <div className="featured">
          {ProductsData.map((item) => {
            const { id, categoryImg1, cardTitle, cardDesc, cardBtn, cost } =
              item;
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
      {/********************************************************** FEATURED PRODUCTS  **********************************************************/}

      {/********************************************************** TESTIMONIAL SECTION   **********************************************************/}

      <main className="featured testimonial-content">
        <div className="heading">
          <p>TESTIMONIALS</p>
          <p>What Clients Say</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
            modi autem esse in excepturi, explicabo adipisci dolorum voluptate
            commodi magnam numquam iusto inventore aperiam? Officia id
            accusantium laudantium consequuntur.
          </p>
        </div>
        <div className="featured testimonial">
          {testimonialData.map((item) => {
            const { id, tName, tImage, tMessage, tPost } = item;
            return (
              <TestimonialCard
                key={id}
                name={tName}
                image={avatar}
                message={tMessage}
                post={tPost}
                imgData={tImage}
              />
            );
          })}
        </div>
      </main>
      {/********************************************************** TESTIMONIAL SECTION   *********************************************************/}

      {/***************************************************************** BANNER *****************************************************************/}
      <Banner
        image={banner2}
        title={bannerTitle2}
        desc={bannerDesc2}
        btnText={bannerBtnText2}
      />
      {/***************************************************************** BANNER *****************************************************************/}
    </>
  );
};

export default Home;
