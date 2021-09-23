export enum changeLangType {
    CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
}

export interface ILanguageState {
    language: 'en' | 'ru'
}

export interface IChangeLanguage {
    type: string
    payload: 'en' | 'ru'
}

interface IChangeLangAction {
    type: changeLangType.CHANGE_LANGUAGE
    payload: 'en' | 'ru'
}

export type changeLangActionType = IChangeLangAction
