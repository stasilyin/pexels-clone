import {imageActionType, imageFetchTypes} from "../../types/imgFetch";
import {Dispatch} from "redux";
import {createClient, Photos} from 'pexels';


export const bgImgFetch = () => {
    return async (dispatch: Dispatch<imageActionType>) => {
        try {
            const apiKey: string = process.env.REACT_APP_PEXELS_API_KEY!
            const client = createClient(apiKey);
            const query = 'nature'
            dispatch({type: imageFetchTypes.FETCH_IMAGE})
            const bgImage = await client.photos.search( {
                query: query,
                per_page: 1,
                orientation: 'landscape'
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