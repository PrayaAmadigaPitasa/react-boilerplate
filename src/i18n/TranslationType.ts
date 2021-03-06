import { ResourceKey, ResourceLanguage } from "i18next";

export type TranslationResourceKey<T extends string> = Record<T, ResourceKey>;

export interface TranslationResource<T extends string>
  extends ResourceLanguage {
  translation: TranslationResourceKey<T>;
}
