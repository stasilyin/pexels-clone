import { imageFetchCuratedTypes, IimageFetchCuratedState, imageCuratedActionType }  from '../../types/imgFetch'

const initialState: IimageFetchCuratedState = {
    imgCurated: [],
    loadingCurated: false,
    errorCurated: null
}

export const curatedImgReducer = (state = initialState, action: imageCuratedActionType): IimageFetchCuratedState => {
    switch (action.type) {
        case imageFetchCuratedTypes.FETCH_IMAGE_CURATED:
            return {
                imgCurated: [...state.imgCurated],
                loadingCurated: true,
                errorCurated: null
            }
        case imageFetchCuratedTypes.FETCH_IMAGE_CURATED_SUCCESS:
            return {
                imgCurated: [...state.imgCurated, ...action.payload],
                loadingCurated: false,
                errorCurated: null
            }
        case imageFetchCuratedTypes.FETCH_IMAGE_CURATED_ERROR:
            return {
                imgCurated: [],
                loadingCurated: false,
                errorCurated: action.payload
            }
        default:
            return state

    }
}