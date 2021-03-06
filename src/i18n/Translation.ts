import i18next, { TOptions } from "i18next";
import { useCallback } from "react";
import {
  initReactI18next,
  useTranslation as useTranslationOrigin,
  UseTranslationOptions,
} from "react-i18next";
import { TranslationKey } from "./TranslationKey";
import { TRANSLATION_EN, TRANSLATION_ID } from "./translations";

export function initTranslation() {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      lng: "en",
      fallbackLng: "en",
      resources: {
        en: TRANSLATION_EN,
        id: TRANSLATION_ID,
      },
    });
  }
}

export function translate(key: TranslationKey, options?: TOptions | string) {
  return i18next.t(key, options);
}

export function useTranslation(options?: UseTranslationOptions) {
  const { t, ready, i18n } = useTranslationOrigin<TranslationKey>(
    undefined,
    options
  );

  const translate = useCallback((key: TranslationKey): string => t(key), [t]);

  return { translate, ready, i18n };
}
