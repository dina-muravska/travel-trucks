'use client';

import { useQuery } from '@tanstack/react-query';
import { getCamperById } from '../../lib/api/camperApi';
import CamperGallery from '../CamperDetails/CamperGallery/CamperGallery';
import CamperReviews from '../CamperDetails/CamperReviews/CamperReviews';
import BookingForm from '../CamperDetails/BookingForm/BookingForm';
import Loader from '@/components/Loader/Loader';
import { LuStar, LuMapPin } from 'react-icons/lu';
import css from './CamperDetails.module.css';

interface Props {
  camperId: string;
}

const FORM_LABELS: Record<string, string> = {
  alcove: 'Alcove',
  panel_van: 'Panel truck',
  integrated: 'Fully Integrated',
  semi_integrated: 'Semi-Integrated',
};

const CHIP_LABELS: Record<string, string> = {
  ac: 'AC',
  tv: 'TV',
};

function getChipText(key: string): string {
  return CHIP_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
}

export default function CamperDetails({ camperId }: Props) {
  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamperById(camperId),
  });

  if (isLoading) return <Loader />;
  if (isError || !camper) return <p className={css.errorText}>Camper not found.</p>;

  const features = [
    { key: 'transmission', value: camper.transmission },
    { key: 'engine', value: camper.engine },
    ...camper.amenities.map(a => ({ key: a, value: a })),
    { key: 'form', value: camper.form },
  ];

  return (
    <div className={css.container}>
      <div className={css.mainWrapper}>
        <div className={css.topSection}>
          <div className={css.leftGalleryColumn}>
            <CamperGallery images={camper.gallery} />
          </div>

          <div className={css.rightInfoColumn}>
            <div className={css.infoBlock}>
              <h1 className={css.camperName}>{camper.name}</h1>

              <div className={css.metaInformation}>
                <span className={css.ratingInfo}>
                  <LuStar className={css.starIcon} style={{ fill: '#ffc531', color: '#ffc531' }} />
                  {camper.rating} ({camper.totalReviews} Reviews)
                </span>
                <span className={css.locationInfo}>
                  <LuMapPin />
                  {camper.location}
                </span>
              </div>

              <p className={css.camperPrice}>€{camper.price}</p>
              <p className={css.camperDescription}>{camper.description}</p>
            </div>
            <div className={css.specificationsBlock}>
              <h2 className={css.boxTitle}>Vehicle details</h2>

              <div className={css.featuresList}>
                {features.map(({ key, value }, idx) => (
                  <span key={`${key}-${idx}`} className={css.featureBadge}>
                    {key === 'form'
                      ? (FORM_LABELS[value] ?? getChipText(value))
                      : getChipText(value)}
                  </span>
                ))}
              </div>
              <hr className={css.line} />

              <table className={css.paramsTable}>
                <tbody>
                  <tr>
                    <td>Form</td>
                    <td>{FORM_LABELS[camper.form] ?? camper.form}</td>
                  </tr>
                  <tr>
                    <td>Length</td>
                    <td>{camper.length}</td>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>{camper.width}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{camper.height}</td>
                  </tr>
                  <tr>
                    <td>Tank</td>
                    <td>{camper.tank}</td>
                  </tr>
                  <tr>
                    <td>Consumption</td>
                    <td>{camper.consumption}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={css.bottomSection}>
          <div className={css.reviewsColumn}>
            <h2 className={css.reviewsHeading}>Reviews</h2>
            <CamperReviews camperId={camperId} />
          </div>

          <div className={css.bookingColumn}>
            <BookingForm camperId={camperId} />
          </div>
        </div>
      </div>
    </div>
  );
}
