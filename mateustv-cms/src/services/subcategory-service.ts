import { API } from "../@libs/axios";
import { ISubCategory } from "../@libs/types";

const _ENDPOINT = '/subCategory';

const getAll = () => (API.get(_ENDPOINT));
const create = (subCateory: ISubCategory) => (API.post(_ENDPOINT, subCateory));
const getById = (id: number) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: number, subCateory: ISubCategory) => (API.put(`${_ENDPOINT}/${id}`, subCateory));
const remove = (id: number) => (API.delete(`${_ENDPOINT}/${id}`));

export const SubCategoryService = {
  getAll,
  create,
  getById,
  update,
  remove
}