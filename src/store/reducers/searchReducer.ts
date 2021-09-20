import {imageSearchAllActionType, ISearchImageTypes, searchImageTypes} from '../../types/searchImage'

const initialState: ISearchImageTypes = {
    img: [],
    loading: false,
    error: null ,
    searchQuery: ''
}

export const searchReducer = (state = initialState, action: imageSearchAllActionType): ISearchImageTypes => {
    switch (action.type) {
        case searchImageTypes.SEARCH_IMAGE:
            return {
                img: state.img,
                loading: true,
                error: null,
                searchQuery: state.searchQuery
            }
        case searchImageTypes.SEARCH_IMAGE_SUCCESS:
            return {
                img: [...state.img, ...action.payload],
                loading: false,
                error: null,
                searchQuery: state.searchQuery
            }
        case searchImageTypes.SEARCH_IMAGE_ERROR:
            return {
                img: [],
                loading: false,
                error: action.payload,
                searchQuery: state.searchQuery
            }
        case searchImageTypes.SEARCH_QUERY:
            return {
                img: state.img,
                loading: false,
                error: null,
                searchQuery: action.searchQuery
            }
        default:
            return state

    }
}