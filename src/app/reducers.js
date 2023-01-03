const reducer = (state = {current: {}, photos: [], loading: true}, action) => {
  switch (action.type) {
    case 'GET_PHOTOS':
      return {...state, loading: true};
      break;

    case 'LOADED_PHOTOS':
      if (action.payload.changeKeyword) {
        return {...state, photos: action.payload.photos, loading: false};
      } else {
        return {...state, photos: [...state.photos, ...action.payload.photos], loading: false};
      }
      break;

    case 'GET_DETAIL':
      return {...state, current: {}, loading: true};
      break;

    case 'LOADED_DETAIL':
      return {...state, current: action.payload, loading: false};
      break;
  
    default:
      return state;
      break;
  }
}

export default reducer