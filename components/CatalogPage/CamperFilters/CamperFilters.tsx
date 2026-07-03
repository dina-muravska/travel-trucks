'use client';

import { useState } from 'react';
import { RiMap2Line, RiCloseLine } from 'react-icons/ri';
import type { CampersParams } from '@/types/camper';
import styles from './CamperFilters.module.css';

type Filters = Omit<CampersParams, 'page' | 'perPage'>;

interface Props {
  onSearch: (filters: Filters) => void;
}

const FORM_OPTIONS = [
  { value: 'alcove', label: 'Alcove' },
  { value: 'panel_van', label: 'Panel Van' },
  { value: 'integrated', label: 'Integrated' },
  { value: 'semi_integrated', label: 'Semi Integrated' },
] as const;

const ENGINE_OPTIONS = [
  { value: 'diesel', label: 'Diesel' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
] as const;

const TRANSMISSION_OPTIONS = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
] as const;

export default function CamperFilters({ onSearch }: Props) {
  const [location, setLocation] = useState<string>('');
  const [form, setForm] = useState<Filters['form'] | ''>('');
  const [engine, setEngine] = useState<Filters['engine'] | ''>('');
  const [transmission, setTransmission] = useState<Filters['transmission'] | ''>('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch({
      ...(location.trim() && { location: location.trim() }),
      ...(form && { form }),
      ...(engine && { engine }),
      ...(transmission && { transmission }),
    });
  }

  function handleClear() {
    setLocation('');
    setForm('');
    setEngine('');
    setTransmission('');
    onSearch({});
  }

  return (
    <form onSubmit={handleSubmit} className={styles.filterPanel}>
      <label className={styles.label}>Location</label>
      <div className={styles.searchBox}>
        <RiMap2Line className={styles.inputIcon} />
        <input
          className={styles.input}
          type="text"
          placeholder="City, Country"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>

      <p className={styles.panelHeading}>Filters</p>

      <fieldset className={styles.filterBlock}>
        <legend className={styles.legend}>Camper form</legend>
        <div className={styles.optionsList}>
          {FORM_OPTIONS.map(({ value, label }) => (
            <label key={value} className={styles.optionSelector}>
              <input
                type="radio"
                name="form"
                value={value}
                checked={form === value}
                onChange={() => setForm(form === value ? '' : value)}
                className={styles.radio}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.filterBlock}>
        <legend className={styles.legend}>Engine</legend>
        <div className={styles.optionsList}>
          {ENGINE_OPTIONS.map(({ value, label }) => (
            <label key={value} className={styles.optionSelector}>
              <input
                type="radio"
                name="engine"
                value={value}
                checked={engine === value}
                onChange={() => setEngine(engine === value ? '' : value)}
                className={styles.radio}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.filterBlock}>
        <legend className={styles.legend}>Transmission</legend>
        <div className={styles.optionsList}>
          {TRANSMISSION_OPTIONS.map(({ value, label }) => (
            <label key={value} className={styles.optionSelector}>
              <input
                type="radio"
                name="transmission"
                value={value}
                checked={transmission === value}
                onChange={() => setTransmission(transmission === value ? '' : value)}
                className={styles.radio}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
        <button type="button" className={styles.clearBtn} onClick={handleClear}>
          <RiCloseLine size={24} />
          Clear filters
        </button>
      </div>
    </form>
  );
}
