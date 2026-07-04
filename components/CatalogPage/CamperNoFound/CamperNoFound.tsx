'use client';

import { RiCloseLine } from 'react-icons/ri';
import css from './CamperNoFound.module.css';

interface CamperNoFoundProps {
  onReset: () => void;
}

export default function CamperNoFound({ onReset }: CamperNoFoundProps) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.actions}>
        <button type="button" className={css.clearBtn} onClick={onReset}>
          <RiCloseLine size={20} />
          Clear filters
        </button>
        <button type="button" className={css.viewBtn} onClick={onReset}>
          View all campers
        </button>
      </div>
    </div>
  );
}
