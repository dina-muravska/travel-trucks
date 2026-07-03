'use client';

import { useState } from 'react';
import CamperFilters from '../CatalogPage/CamperFilters/CamperFilters';
import CamperList from '../CatalogPage/CamperList/CamperList';
import type { CampersParams } from '@/types/camper';
import css from './CatalogPage.module.css';

type Filters = Omit<CampersParams, 'page' | 'perPage'>;

export default function CatalogPage() {
  const [filters, setFilters] = useState<Filters>({});

  return (
    <div className={css.catalogLayout}>
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
