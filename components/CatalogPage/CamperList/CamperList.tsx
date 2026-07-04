'use client';

import { useCampers } from '../../../lib/hooks/useCampers';
import CamperCard from '../CamperCard/CamperCard';
import CamperNoFound from '../CamperNoFound/CamperNoFound';
import type { CampersParams, CampersResponse, CamperListItem } from '@/types/camper';
import css from './CamperList.module.css';

interface Props {
  filters: Omit<CampersParams, 'page' | 'perPage'>;
  onResetFilters?: () => void;
}

export default function CamperList({ filters, onResetFilters }: Props) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useCampers(filters);

  if (isError) return <p className={css.errorMessage}>Something went wrong.</p>;

  const campers = data?.pages.flatMap((page: CampersResponse) => page.campers) ?? [];

  if (campers.length === 0) {
    return (
      <CamperNoFound
        onReset={() => {
          if (onResetFilters) {
            onResetFilters();
          } else {
            window.location.reload();
          }
        }}
      />
    );
  }

  return (
    <div>
      <ul className={css.cardsContainer}>
        {campers.map((camper: CamperListItem) => (
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
