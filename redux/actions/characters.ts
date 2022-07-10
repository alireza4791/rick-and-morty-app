import { Dispatch } from 'redux';

import * as types from '../../common/constants';
import { FetchCharacters } from '../../common/types/characters';
import { CharacterList } from '../../common/types/characters';

export const charactersListAction = (charactersList: CharacterList) => async (dispatch: Dispatch<FetchCharacters>) => {
  dispatch({
    type: types.FETCH_CHARACTERS.REQUEST,
    payload: charactersList
  })
}