import {Photo} from "pexels";

export enum searchImageTypes {
    SEARCH_IMAGE = 'SEARCH_IMAGE',
    SEARCH_QUERY = 'SEARCH_QUERY',
    SEARCH_IMAGE_SUCCESS = 'SEARCH_IMAGE_SUCCESS',
    SEARCH_IMAGE_ERROR = 'SEARCH_IMAGE_ERROR'
}

export interface ISearchImageTypes {
    img: Array<Photo>
    loading: boolean
    error: null | string
    searchQuery: string
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
    searchQuery: string
}

export type imageSearchAllActionType = ISearchImageAction
    | ISearchImageErrorAction
    | ISearchImageSuccessAction
    | ISearchQueryAction

