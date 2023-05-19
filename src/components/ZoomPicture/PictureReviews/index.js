import PropTypes from 'prop-types';

import './style.scss';

function PictureReviews({ reviews }) {
  console.log('reviews = ', reviews);
  return (
    <div className="zoomPicture__reviews">
      <h2>Commentaires</h2>
      {
        reviews.map((review) => (
          <div className="zoomPicture__containerReviews" key={review.review_content}>
            <p className="zoomPicture__login">{review.reviewer_pseudo}</p>
            <p className="zoomPicture__textReviews">{review.review_content}</p>
          </div>
        ))
      }
    </div>
  );
}

PictureReviews.propTypes = {
  reviews: PropTypes.array,
};

PictureReviews.defaultProps = {
  reviews: [],
};

export default PictureReviews;
