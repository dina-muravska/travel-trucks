'use client';

import { useState } from 'react';
import CamperFilters from '../CatalogPage/CamperFilters/CamperFilters';
import CamperList from '../CatalogPage/CamperList/CamperList';
import CamperLoader from '../CatalogPage/CamperLoader/CamperLoader';
import { useCampers } from '../../lib/hooks/useCampers';
import type { CampersParams } from '@/types/camper';
import css from './CatalogPage.module.css';

type Filters = Omit<CampersParams, 'page' | 'perPage'>;

export default function CatalogPage() {
  const [filters, setFilters] = useState<Filters>({});

  const { isLoading } = useCampers(filters);

  return (
    <div className={css.catalogLayout}>
      {isLoading && <CamperLoader />}

      <div className={`container ${css.container}`}>
        <aside className={css.sidebar}>
          <CamperFilters onSearch={setFilters} />
        </aside>

        <main className={css.main}>
          <CamperList filters={filters} />
        </main>
      </div>
    </div>
  );
}
