import { API } from "../@libs/axios";
import { ILive } from "../@libs/types";

const _ENDPOINT = '/lives';

const getLive = async (): Promise<ILive[]> => {
  const { data } = await API.get(_ENDPOINT)
  return data;
}

const getLiveById = async (id: string): Promise<ILive> => {
  const { data } = await API.get(`${_ENDPOINT}/${id}`)
  return data;
} 

const getByCategoryId = async (id: number): Promise<ILive[]> => {
  const { data } = await API.get(`${_ENDPOINT}?categoryId=${id}`)
  return data;
} 

export const MovieService = {
  getLive,
  getLiveById,
  getByCategoryId
}