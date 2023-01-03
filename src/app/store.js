import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from "redux"
import getPhotos from './photosSaga'
import reducer from './reducers'
import getDetail from './detailSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(getPhotos)
sagaMiddleware.run(getDetail)