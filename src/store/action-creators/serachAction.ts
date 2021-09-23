import {imageSearchAllActionType, searchImageTypes} from "../../types/searchImage";
import {Dispatch} from "redux";
import {createClient} from 'pexels';
import strings from "../../locales/localization";

type TypeOrientation = 'landscape' | 'portrait' | 'square' | 'all'
type TypeSize = 'small' | 'medium' | 'large' | 'all'

export const searchAction = (page: number, pre_page: number, query: string, orientation?: TypeOrientation,
                             size?: TypeSize) => {
    return async (dispatch: Dispatch<imageSearchAllActionType>) => {
        try {
            const apiKey: string = process.env.REACT_APP_PEXELS_API_KEY!
            const client = createClient(apiKey);
            dispatch({type: searchImageTypes.SEARCH_IMAGE})
            await client.photos.search( {
                query: query,
                orientation: orientation,
                page: page,
                per_page: pre_page,
                size: size,
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
                payload: strings.const.errors.error})
        }
    }
}