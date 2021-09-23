import {changeLangActionType, changeLangType} from "../../types/changeLangActionTypes";
import {Dispatch} from "redux";

export const changeLanguagesAction = (lang: 'ru' | 'en') => {
    return async (dispatch: Dispatch<changeLangActionType>) => {
        try {
            dispatch({
                type: changeLangType.CHANGE_LANGUAGE,
                payload: lang
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}