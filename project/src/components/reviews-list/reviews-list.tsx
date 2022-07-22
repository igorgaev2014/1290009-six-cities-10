import { Reviews } from '../../types/reviews';
import ReviewsCard from '../../components/reviews-card/reviews-card';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsCard key={review.id} review={review} />)}
    </ul>
  );
}

export default ReviewsList;
