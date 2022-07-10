import * as types from '../../common/constants';

const initialState = {
  characters: {
    list: [],
  }
}

interface Reducer {
  type: string;
  payload: any
}

const reducer = (state = initialState, { type, payload }: Reducer) => {
  switch (type) {
    case types.FETCH_CHARACTERS.REQUEST:
      return {
        ...state, characters: {
          list: payload,
        }
      };
    default:
      return state;
  }
}

export default reducer;