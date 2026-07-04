import { CampersResponse, CampersParams, CamperDetails } from '@/types/camper';
import api from './api';

export const getCampers = async (params: CampersParams = {}): Promise<CampersResponse> => {
  const queryParams: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '' && value !== false) {
      queryParams[key] = typeof value === 'boolean' ? String(value) : value;
    }
  });

  const { data } = await api.get<CampersResponse>('/campers', {
    params: queryParams,
  });

  return data;
};

export async function getCamperById(id: string): Promise<CamperDetails> {
  const res = await api.get<CamperDetails>(`/campers/${id}`);
  return res.data;
}
