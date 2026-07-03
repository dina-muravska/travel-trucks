'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsMap, BsFuelPump } from 'react-icons/bs';
import { TbGitFork } from 'react-icons/tb';
import { FiTruck } from 'react-icons/fi';
import type { CamperListItem } from '@/types/camper';
import css from './CamperCard.module.css';

interface Props {
  camper: CamperListItem;
}

const FORM_LABELS: Record<string, string> = {
  alcove: 'Alcove',
  panel_van: 'Van',
  integrated: 'Fully Integrated',
  semi_integrated: 'Semi-Integrated',
};

export default function CamperCard({ camper }: Props) {
  return (
    <article className={css.card}>
      <div className={css.imageContainer}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          width={219}
          height={240}
          className={css.image}
          unoptimized
          priority={false}
        />
      </div>

      <div className={css.info}>
        <div className={css.titleBlock}>
          <div className={css.title}>
            <h2 className={css.name}>{camper.name}</h2>
            <div className={css.priceContainer}>
              <span className={css.price}>€{Math.round(camper.price)}</span>
            </div>
          </div>

          <div className={css.meta}>
            <span className={css.rating}>
              <AiFillStar className={css.starIcon} color="#ffc531" />
              {camper.rating} ({camper.totalReviews} Reviews)
            </span>
            <span className={css.location}>
              <BsMap className={css.metaIcon} />
              {camper.location}
            </span>
          </div>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.badges}>
          <span className={css.badge}>
            <BsFuelPump className={css.badgeIcon} />
            {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
          </span>
          <span className={css.badge}>
            <TbGitFork className={css.badgeIcon} />
            {camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1)}
          </span>

          <span className={css.badge}>
            <FiTruck className={css.badgeIcon} />
            {FORM_LABELS[camper.form] ?? camper.form}
          </span>
        </div>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.showMoreBtn}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}
