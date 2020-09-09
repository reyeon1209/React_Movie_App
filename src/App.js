import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 4.5
  },
  {
    id:2,
    name: "Samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 5
  }
];

// function Food(props) {
  function Food({ name, picture, rating }) {  // props.fav == { fav }
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>; 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
