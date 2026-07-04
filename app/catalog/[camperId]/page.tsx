import Header from '@/components/Header/Header';
import CamperDetails from '../../../components/CamperDetails/CamperDetails';
import type { Metadata } from 'next';
import { getCamperById } from '../../../lib/api/camperApi';

interface Props {
  params: Promise<{ camperId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);
  return {
    title: `${camper.name} — TravelTrucks`,
    description: camper.description,
  };
}

export default async function CamperPage({ params }: Props) {
  const { camperId } = await params;

  return (
    <>
      <Header />
      <CamperDetails camperId={camperId} />
    </>
  );
}
