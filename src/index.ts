import { Config, ConfigOutput } from "./@types";
import EnviromentNotFoundError from "./models/errors/NotFound";
import EnviromentParseError from "./models/errors/ParseError";

const fenv = <C extends Config>(config: C): ConfigOutput<C> => {
  const { env } = process;

  const entries = Object.entries(config);

  return entries.reduce((conf, [name, entry]) => {
    if (!Array.isArray(entry)) {
        conf[name as keyof C] = fenv(entry) as ConfigOutput<C>[keyof C];
        return conf;
      }

      try {
        const [key, parse] = entry;
        const data = env[key];
        if (!data) throw new EnviromentNotFoundError(key, name);

        conf[name as keyof C] = parse(data) as ConfigOutput<C>[keyof C];
      } catch (error) {
        throw new EnviromentParseError(name, error);
      }
      return conf;
    }, {} as ConfigOutput<C>);
};

export default fenv;