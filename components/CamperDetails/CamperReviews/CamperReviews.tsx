'use client';

import { useQuery } from '@tanstack/react-query';
import { FaStar } from 'react-icons/fa';
import { getCamperReviews } from '../../../lib/api/reviewApi';
import Loader from '@/components/Loader/Loader';
import css from './CamperReviews.module.css';

interface Props {
  camperId: string;
}

export default function CamperReviews({ camperId }: Props) {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['reviews', camperId],
    queryFn: () => getCamperReviews(camperId),
  });

  if (isLoading) return <Loader />;
  if (!reviews?.length) return <p className={css.noData}>No reviews yet.</p>;

  return (
    <div className={css.reviewsBlock}>
      {reviews.map(review => (
        <div key={review.id} className={css.reviewsCard}>
          <div className={css.author}>
            <div className={css.avatar}>{review.reviewer_name.charAt(0).toUpperCase()}</div>

            <div className={css.metaData}>
              <span className={css.authorName}>{review.reviewer_name}</span>
              <div className={css.starsRow}>
                {Array.from({ length: 5 }, (_, idx) => (
                  <FaStar key={idx} color={idx < review.reviewer_rating ? '#ffc531' : '#f1f3f5'} />
                ))}
              </div>
            </div>
          </div>
          <p className={css.reviewsMessage}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
