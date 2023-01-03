import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'

function* fetchDetails(action) {
    const detail = yield axios.get(`https://api.unsplash.com/photos/${action.payload}`, {
      headers: {
        Authorization: 'Client-ID ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4'
      }
    })
    .then(res => res.data)
    yield put({type: 'LOADED_DETAIL', payload: detail});
}

function* getDetail() {
  yield takeLatest('GET_DETAIL', fetchDetails);
}

export default getDetail;