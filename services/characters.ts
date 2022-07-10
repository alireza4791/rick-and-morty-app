import { ApiCaller } from "../common/helpers/apiCaller";

export const charactersListService = () => {
  return ApiCaller({ method: 'GET', url: 'https://rickandmortyapi.com/api/character' })
}