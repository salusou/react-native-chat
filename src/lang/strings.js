import {NativeModules, Platform} from 'react-native';

let strings = require('./pt_BR.json');

const deviceLanguage =
    Platform.OS === 'ios'
    ?
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
    :
        NativeModules.I18nManager.localeIdentifier;


if (deviceLanguage.substring(0, 2) == 'en'){
    strings = require('./en.json');
}else if(deviceLanguage.substring(0, 2) == 'es'){
    strings = require('./es.json');
}

export default strings;
