import Header from '../../components/Header/Header';
import CatalogPage from '../../components/CatalogPage/CatalogPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'Explore our extensive catalog of campers and travel trucks',
};

export default function Catalog() {
  return (
    <>
      <Header />
      <CatalogPage />
    </>
  );
}
