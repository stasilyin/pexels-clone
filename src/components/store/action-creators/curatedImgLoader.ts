import {imageActionType, imageFetchTypes} from "../../types/imgFetch";
import {Dispatch} from "redux";
import {createClient} from 'pexels';

export const curatedImgFetch = () => {
    return async (dispatch: Dispatch<imageActionType>) => {
        try {
            const apiKey: string = process.env.REACT_APP_PEXELS_API_KEY!
            const client = createClient(apiKey);

            dispatch({type: imageFetchTypes.FETCH_IMAGE})
            await client.photos.curated( {
                page: 1,
                per_page: 20,
            }).then((data) => {
                dispatch({
                    type: imageFetchTypes.FETCH_IMAGE_SUCCESS,
                    //@ts-ignore
                    payload: data.photos[0]
                })
            });
        }
        catch (e) {
            dispatch({
                type: imageFetchTypes.FETCH_IMAGE_ERROR,
                payload: 'error'})
        }
    }
}