export const SET_AZIENDA = 'SET_AZIENDA';
export const REMOVE_AZIENDA = 'REMOVE_AZIENDA';

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