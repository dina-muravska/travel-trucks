import api from './api';
import type { Review } from '@/types/review';

export async function getCamperReviews(id: string): Promise<Review[]> {
  const res = await api.get<Review[]>(`/campers/${id}/reviews`);
  return res.data;
}
