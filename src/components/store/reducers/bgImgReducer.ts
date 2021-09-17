import { imageFetchTypes, IimageFetchState, imageActionType }  from '../../types/imgFetch'
import { Photos } from 'pexels'
const initialState: IimageFetchState = {
    img: [],
    loading: false,
    error: null
}

export const imgReducer = (state = initialState, action: imageActionType): IimageFetchState => {
    switch (action.type) {
        case imageFetchTypes.FETCH_IMAGE:
            return {
                img: [],
                loading: true,
                error: null
            }
        case imageFetchTypes.FETCH_IMAGE_SUCCESS:
            return {
                img: action.payload,
                loading: false,
                error: null
            }
        case imageFetchTypes.FETCH_IMAGE_ERROR:
            return {
                img: [],
                loading: false,
                error: action.payload
            }
        default:
            return state

    }
}