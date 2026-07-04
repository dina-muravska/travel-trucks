'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '../../lib/api/camperApi';
import type { CampersParams } from '@/types/camper';

const LIMIT = 4;

export function useCampers(filters: Omit<CampersParams, 'page' | 'perPage'>) {
  return useInfiniteQuery({
    queryKey: ['campers', filters],

    queryFn: ({ pageParam = 1 }) =>
      getCampers({
        ...filters,
        page: pageParam,
        perPage: LIMIT,
      }),

    initialPageParam: 1,

    getNextPageParam: lastPage => {
      const { page, totalPages } = lastPage;
      return page < totalPages ? page + 1 : undefined;
    },
  });
}
