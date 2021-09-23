import {Photo} from "pexels";

export enum searchImageTypes {
    SEARCH_IMAGE = 'SEARCH_IMAGE',
    SEARCH_QUERY = 'SEARCH_QUERY',
    SEARCH_ORIENTATION = 'SEARCH_ORIENTATION',
    SEARCH_SIZE = 'SEARCH_SIZE',
    SEARCH_IMAGE_SUCCESS = 'SEARCH_IMAGE_SUCCESS',
    SEARCH_IMAGE_ERROR = 'SEARCH_IMAGE_ERROR'
}

export interface ISearchImageTypes {
    img: Array<Photo>
    loading: boolean
    error: null | string
    searchQuery: string
    searchOrientation: 'landscape' | 'portrait' | 'square' | 'all'
    searchSize: 'small' | 'medium' | 'large' | 'all'
}

interface ISearchImageAction {
    type: searchImageTypes.SEARCH_IMAGE
}
interface ISearchImageSuccessAction {
    type: searchImageTypes.SEARCH_IMAGE_SUCCESS
    payload: Array<Photo>
}
interface ISearchImageErrorAction {
    type: searchImageTypes.SEARCH_IMAGE_ERROR
    payload: string
}
interface ISearchQueryAction {
    type: searchImageTypes.SEARCH_QUERY
    payload: string
}
interface ISearchOrientationAction {
    type: searchImageTypes.SEARCH_ORIENTATION
    payload: 'landscape' | 'portrait' | 'square' | 'all'
}
interface ISearchSizeAction {
    type: searchImageTypes.SEARCH_SIZE
    payload: 'small' | 'medium' | 'large' | 'all'
}

export type imageSearchAllActionType = ISearchImageAction
    | ISearchImageErrorAction
    | ISearchImageSuccessAction
    | ISearchQueryAction
    | ISearchOrientationAction
    | ISearchSizeAction

