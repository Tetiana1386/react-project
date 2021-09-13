import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => async dispatch => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  await axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = items => ({
  type: 'SET_PIZZAS',
  payload: items,
});
