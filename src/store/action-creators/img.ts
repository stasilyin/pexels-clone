import {imageActionType, imageFetchTypes} from "../../types/imgFetch";
import {Dispatch} from "redux";
import {createClient} from 'pexels';
import strings from "../../locales/localization";

const randomProperty = function (object: { [k: string]:any }) {
    const keys = Object.keys(object);
    console.log(object[keys[Math.floor(keys.length * Math.random())]])
    return object[keys[Math.floor(keys.length * Math.random())]];
};

export const bgImgFetch = () => {
    return async (dispatch: Dispatch<imageActionType>) => {
        try {
            const apiKey: string = process.env.REACT_APP_PEXELS_API_KEY!
            const client = createClient(apiKey);
            const query = randomProperty(strings.const.categoryForSearch)

            dispatch({type: imageFetchTypes.FETCH_IMAGE})
            await client.photos.curated( {
                    query: query,
                    page: Math.floor(Math.random()*10),
                    per_page: 1,
                    orientation: 'landscape'
                })
                .then((data) => data)
                .then((response) => {
                    dispatch({
                        type: imageFetchTypes.FETCH_IMAGE_SUCCESS,
                        //@ts-ignore
                        payload: response.photos[0]
                    })
            })
        }
        catch (e) {
            dispatch({
                type: imageFetchTypes.FETCH_IMAGE_ERROR,
                payload: 'error'})
        }
    }
}