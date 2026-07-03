'use client';

import { useCampers } from '../../../lib/hooks/useCampers';
import CamperCard from '../CamperCard/CamperCard';
import Loader from '@/components/Loader/Loader';
import type { CampersParams } from '@/types/camper';
import css from './CamperList.module.css';

interface Props {
  filters: Omit<CampersParams, 'page' | 'perPage'>;
}

export default function CamperList({ filters }: Props) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } =
    useCampers(filters);

  if (isLoading) return <Loader />;
  if (isError) return <p className={css.errorMessage}>Something went wrong.</p>;

  const campers = data?.pages.flatMap(page => page.campers) ?? [];

  return (
    <div>
      <ul className={css.cardsContainer}>
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <div className={css.paginationWrap}>
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className={css.loadMoreBtn}
          >
            {isFetchingNextPage ? 'Loading...' : 'Load more'}
          </button>
        </div>
      )}
    </div>
  );
}
