export const SET_AZIENDA = 'SET_AZIENDA';
export const REMOVE_AZIENDA = 'REMOVE_AZIENDA';

//estabilisco le actions che poi saranno passate ai reducers
export const setAzienda = (title) => {
  return {
    type: SET_AZIENDA,
    payload: title
  }
}

export const setRemoveAzienda = (title) => {
  return {
    type: REMOVE_AZIENDA,
    payload: title
  }
}