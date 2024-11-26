import { API } from "../@libs/axios"
import { ILive } from "../@libs/types";

const _ENDPOINT = '/lives';

const getAll = () => (API.get(_ENDPOINT));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));  
const create = (data: ILive) => (API.post(_ENDPOINT, data));
const update = (id: string, data: ILive) => (API.put(`${_ENDPOINT}/${id}`, data));


export const LiveService = {
  getAll,
  getById,
  create,
  update,
  remove,

}