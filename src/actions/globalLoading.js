export const TOGGLE_LOADING = 'globalLoading/TOGGLE_LOADING';

export const toggleLoading = isLoading => ({
  type: TOGGLE_LOADING,
  payload: {isLoading},
});
