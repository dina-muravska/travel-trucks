import api from './api';
import type { BookingRequest, BookingResponse } from '@/types/booking';

export async function createBooking(
  camperId: string,
  data: BookingRequest
): Promise<BookingResponse> {
  const res = await api.post<BookingResponse>(`/campers/${camperId}/booking-requests`, data);
  return res.data;
}
