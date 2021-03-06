import { ResourceKey } from "i18next";

export type TranslationResource<T extends string> = Record<T, ResourceKey>;
