import {imageCuratedActionType, imageFetchCuratedTypes} from "../../types/imgFetch";
import {Dispatch} from "redux";
import {createClient} from 'pexels';

export const curatedImgFetch = (page: number,  pre_page: number) => {
    return async (dispatch: Dispatch<imageCuratedActionType>) => {
        try {
            const apiKey: string = process.env.REACT_APP_PEXELS_API_KEY!
            const client = createClient(apiKey);
            dispatch({type: imageFetchCuratedTypes.FETCH_IMAGE_CURATED})
            await client.photos.curated( {
                page: page,
                per_page: pre_page,
            }).then((data) => {
                dispatch({
                    type: imageFetchCuratedTypes.FETCH_IMAGE_CURATED_SUCCESS,
                    //@ts-ignore
                    payload: data.photos
                })
            });
        }
        catch (e) {
            dispatch({
                type: imageFetchCuratedTypes.FETCH_IMAGE_CURATED_ERROR,
                payload: 'error'})
        }
    }
}