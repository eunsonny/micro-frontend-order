import React, { useEffect, useState } from 'react';
import RestaurantDetails from './RestaurantDetails';

const Restaurant = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const host = process.env.REACT_APP_CONTENT_HOST;
    const id = props.match.params.id;

    fetch(`${host}/restaurants/${id}.json`)
      .then(result => result.json())
      .then(restaurant => {
        setRestaurant({
          ...restaurant,
          imageSrc: `${host}${restaurant.imageSrc}`
        })
        setLoading(false);
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  })

  if (loading) {
    return 'Loading';
  }

  if (error) {
    return 'Sorry, but that restaurant is currently unavailable.';
  }

  return (
    <RestaurantDetails restaurant={restaurant} />
  )
}

export default Restaurant;
