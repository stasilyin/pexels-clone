
export enum imageFetchTypes {
    FETCH_IMAGE = 'FETCH_IMAGE',
    FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS',
    FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR'
}

export interface IimageFetchState {
    img: any[]
    loading: boolean
    error: null | string
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



export type imageActionType = IfetchImageAction
    | IfetchImageErrorAction
    | IfetchImageSuccessAction
