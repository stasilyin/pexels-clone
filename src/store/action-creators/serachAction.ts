import {imageSearchAllActionType, searchImageTypes} from "../../types/searchImage";
import {Dispatch} from "redux";
import {createClient} from 'pexels';

type TypeOrientation = 'landscape' | 'portrait' | 'square'

export const searchAction = (page: number, pre_page: number, query: string, orientation?: TypeOrientation) => {
    return async (dispatch: Dispatch<imageSearchAllActionType>) => {
        try {
            const apiKey: string = process.env.REACT_APP_PEXELS_API_KEY!
            const client = createClient(apiKey);
            dispatch({type: searchImageTypes.SEARCH_IMAGE})
            dispatch({type: searchImageTypes.SEARCH_QUERY, searchQuery: query})
            const response = await client.photos.search( {
                query: query,
                orientation: orientation,
                page: page,
                per_page: pre_page,
            }).then((data) => {
                dispatch({
                    type: searchImageTypes.SEARCH_IMAGE_SUCCESS,
                    //@ts-ignore
                    payload: data.photos
                })
            });
        }
        catch (e) {
            dispatch({
                type: searchImageTypes.SEARCH_IMAGE_ERROR,
                payload: 'error'})
        }
    }
}