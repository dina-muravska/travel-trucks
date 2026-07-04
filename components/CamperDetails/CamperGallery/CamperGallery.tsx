'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { CamperImage } from '@/types/camper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import css from './CamperGallery.module.css';

interface Props {
  images: CamperImage[];
}

export default function CamperGallery({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  if (!images?.length) return null;

  return (
    <div className={css.galleryBox}>
      <div className={css.heroContainer}>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={css.mainSlider}
        >
          {images.map(img => (
            <SwiperSlide key={img.id} className={css.mainSlideItem}>
              <Image
                src={img.original}
                alt="Camper view main"
                width={638}
                height={505}
                className={css.heroView}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={css.previewContainer}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={images.length > 4}
          spaceBetween={32}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={css.thumbsSlider}
        >
          {images.slice(0, 4).map((img, idx) => (
            <SwiperSlide key={img.id} className={css.thumbSlideItem}>
              <button
                type="button"
                className={css.previewItem}
                aria-label={`View photo ${idx + 1}`}
              >
                <Image
                  src={img.thumb}
                  alt="Camper thumb"
                  width={140}
                  height={96}
                  className={css.previewImg}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
