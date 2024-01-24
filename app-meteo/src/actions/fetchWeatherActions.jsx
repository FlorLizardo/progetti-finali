export const WEATHER = 'WEATHER';

export const weather = (fetch) => {
  return {
    type: WEATHER,
    payload: fetch
  }
}