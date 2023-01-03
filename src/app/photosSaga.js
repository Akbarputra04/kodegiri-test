import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'

function* fetchPhotos(action) {
    const photos = yield axios.get(`https://api.unsplash.com/search/photos?query=${action.payload.keyword}&page=${action.payload.page}&per_page=5`, {
      headers: {
        Authorization: 'Client-ID ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4'
      }
    })
    .then(res => res.data.results)
    yield put({type: 'LOADED_PHOTOS', payload: {photos, changeKeyword: action.payload.changeKeyword}});
}

function* getPhotos() {
  yield takeLatest('GET_PHOTOS', fetchPhotos);
}

export default getPhotos;