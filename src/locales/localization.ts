import LocalizedStrings from 'react-localization'
import { ru } from './ru/ru'
import { en } from './en/en'

const strings = new LocalizedStrings({
    en,
    ru,
})

const availableLanguages = strings.getAvailableLanguages();
const interfaceLanguage = strings.getInterfaceLanguage();

if (availableLanguages.indexOf(interfaceLanguage.slice(0,2)) > -1) {
    strings.setLanguage(interfaceLanguage)
} else {
    strings.setLanguage('en')
}

export default strings
