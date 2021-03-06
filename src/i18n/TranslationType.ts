import { ResourceKey, ResourceLanguage, i18n } from "i18next";
import { TranslationKey } from "./TranslationKey";

export type TranslationResourceKey<T extends string> = Record<T, ResourceKey>;

export interface TranslationResource<T extends string>
  extends ResourceLanguage {
  translation: TranslationResourceKey<T>;
}

export interface TranslationState {
  translate(key: TranslationKey): string;
  ready: boolean;
  i18n: i18n;
}
