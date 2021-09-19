
export enum imageFetchTypes {
    FETCH_IMAGE = 'FETCH_IMAGE',
    FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS',
    FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR',
}
export enum imageFetchCuratedTypes {
    FETCH_IMAGE_CURATED = 'FETCH_IMAGE_CURATED',
    FETCH_IMAGE_CURATED_SUCCESS = 'FETCH_IMAGE_CURATED_SUCCESS',
    FETCH_IMAGE_CURATED_ERROR = 'FETCH_IMAGE_CURATED_ERROR'
}

export interface IimageFetchState {
    img: any[]
    loading: boolean
    error: null | string
}

export interface IimageFetchCuratedState {
    imgCurated: any[]
    loadingCurated: boolean
    errorCurated: null | string
}

export interface IimageFetch {
    type: string
    payload?: any
}


interface IfetchImageAction {
    type: imageFetchTypes.FETCH_IMAGE
}
interface IfetchImageSuccessAction {
    type: imageFetchTypes.FETCH_IMAGE_SUCCESS
    payload: any
}
interface IfetchImageErrorAction {
    type: imageFetchTypes.FETCH_IMAGE_ERROR
    payload: string
}

interface IfetchImageCuratedAction {
    type: imageFetchCuratedTypes.FETCH_IMAGE_CURATED
}
interface IfetchImageCuratedSuccessAction {
    type: imageFetchCuratedTypes.FETCH_IMAGE_CURATED_SUCCESS
    payload: any
}
interface IfetchImageCuratedErrorAction {
    type: imageFetchCuratedTypes.FETCH_IMAGE_CURATED_ERROR
    payload: string
}

export type imageCuratedActionType = IfetchImageCuratedAction
    | IfetchImageCuratedErrorAction
    | IfetchImageCuratedSuccessAction

export type imageActionType = IfetchImageAction
    | IfetchImageErrorAction
    | IfetchImageSuccessAction
