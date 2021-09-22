import {imageSearchAllActionType, ISearchImageTypes, searchImageTypes} from '../../types/searchImage'

const initialState: ISearchImageTypes = {
    img: [],
    loading: false,
    error: null ,
    searchQuery: '',
    searchOrientation: 'all',
}

export const searchReducer = (state = initialState, action: imageSearchAllActionType): ISearchImageTypes => {
    switch (action.type) {
        case searchImageTypes.SEARCH_IMAGE:
            return {
                img: state.img,
                loading: true,
                error: null,
                searchQuery: state.searchQuery,
                searchOrientation: state.searchOrientation
            }
        case searchImageTypes.SEARCH_IMAGE_SUCCESS:
            return {
                img: [...state.img, ...action.payload],
                loading: false,
                error: null,
                searchQuery: state.searchQuery,
                searchOrientation: state.searchOrientation
            }
        case searchImageTypes.SEARCH_IMAGE_ERROR:
            return {
                img: [],
                loading: false,
                error: action.payload,
                searchQuery: state.searchQuery,
                searchOrientation: state.searchOrientation
            }
        case searchImageTypes.SEARCH_QUERY:
            return {
                img: [],
                loading: false,
                error: null,
                searchQuery: action.payload,
                searchOrientation: state.searchOrientation
            }
        case searchImageTypes.SEARCH_ORIENTATION:
            return {
                img: [],
                loading: false,
                error: null,
                searchQuery: state.searchQuery,
                searchOrientation: action.payload
            }
        default:
            return state

    }
}