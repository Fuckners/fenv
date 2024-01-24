export type ConfigEntry = [
  key: string,
  parse: (value: string) => unknown,
];

interface RecursiveConfig {
  [key: string]: Config | ConfigEntry;
}

export type Config = Record<string, ConfigEntry | RecursiveConfig>;

export type ConfigOutput<
  S extends RecursiveConfig,
> = {
  [K in keyof S]: S[K] extends ConfigEntry
    ? ReturnType<S[K]["1"]>
    : S[K] extends RecursiveConfig
      ? ConfigOutput<S[K]>
      : never;
};