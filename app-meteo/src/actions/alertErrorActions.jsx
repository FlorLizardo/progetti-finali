export const IS_ERROR = 'IS_ERROR';

export const isErrorActions = (alertError) => {
  return {
    type: IS_ERROR,
    payload: alertError
  }
}