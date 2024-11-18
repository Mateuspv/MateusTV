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

const getBySubCategoryId = async (id: number): Promise<ILive[]> => {
  const { data } = await API.get(`${_ENDPOINT}?subCategoryId=${id}`)
  return data;
} 

export const LiveService = {
  getLive,
  getLiveById,
  getByCategoryId,
  getBySubCategoryId
}