export const SET_AZIENDA = 'SET_AZIENDA';
export const REMOVE_AZIENDA = 'REMOVE_AZIENDA';

type FavoriteAction = {
  type: string;
  payload: string;
}

//estabilisco le actions che poi saranno passate ai reducers
export const setAzienda = (title: string): FavoriteAction => {
  return {
    type: SET_AZIENDA,
    payload: title
  }
}

export const setRemoveAzienda = (title: string):FavoriteAction => {
  return {
    type: REMOVE_AZIENDA,
    payload: title
  }
}