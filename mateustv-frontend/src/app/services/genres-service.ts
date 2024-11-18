import { API } from "../@libs/axios";
import { IGenre } from "../@libs/types";

const _ENDPOINT = '/genres';

const getAll = () => (API.get(_ENDPOINT));
const create = (genre: IGenre) => (API.post(_ENDPOINT, genre));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: number, genre: IGenre) => (API.put(`${_ENDPOINT}/${id}`, genre));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));

export const GenreService = {
  getAll,
  create,
  getById,
  update,
  remove
}