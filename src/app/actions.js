export const getPhotos = (keyword, page, changeKeyword) => ({type: 'GET_PHOTOS', payload: {keyword, page, changeKeyword}})
export const loadedPhotos = (photos, changeKeyword) => ({type: 'LOADED_PHOTOS', payload: {photos, changeKeyword}})
export const getDetail = (id) => ({type: 'GET_DETAIL', payload: id})
export const loadedDetail = (detail) => ({type: 'LOADED_DETAIL', payload: detail})