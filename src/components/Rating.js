import StarRatings from 'react-star-ratings';
 import React from 'react'

const Rating = (props) => {
    return (
        <div>
            <StarRatings
        rating={Number(props.rate)}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="yellow"
      />        </div>
    )
}

export default Rating

//https://www.npmjs.com/package/react-star-ratings