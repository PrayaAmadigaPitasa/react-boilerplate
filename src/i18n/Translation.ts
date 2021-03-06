import i18next, { TOptions } from "i18next";
import { TranslationKey } from "./TranslationKey";
import { TRANSLATION_EN, TRANSLATION_ID } from "./translations";

export function initTranslation() {
  if (!i18next.isInitialized) {
    i18next.init({
      lng: "en",
      resources: { en: TRANSLATION_EN, id: TRANSLATION_ID },
    });
  }
}

export function translate(key: TranslationKey, options?: TOptions | string) {
  return i18next.t(key, options);
}
