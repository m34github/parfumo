import axios from 'axios';

export const GET_FRAGRANCE = 'GET_FRAGRANCE';

export const action = {
  getFragrance: () => {
    return (dispatch, getState) => {
      axios.get('/assets/data/fragrance-sample.json')
        .then((res) => {
          dispatch({
            type: GET_FRAGRANCE,
            payload: {
              fragrance: res.data
            },
            meta: {
              isLoaded: true
            }
          });
        });
    };
  }
};
