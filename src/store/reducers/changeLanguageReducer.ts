import { changeLangType, ILanguageState, changeLangActionType }  from '../../types/changeLangActionTypes'

const initialState: ILanguageState = {
   language: 'ru'
}

export const changeLanguageReducer = (state = initialState, action: changeLangActionType): ILanguageState => {
    switch (action.type) {
        case changeLangType.CHANGE_LANGUAGE:
            return {
                language: action.payload
            }
        default:
            return state
    }
}